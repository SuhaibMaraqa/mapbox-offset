import Map, { Layer, MapRef, Source } from "react-map-gl/mapbox";
import {
  icons,
  lineData,
  lineLayerSpecification,
  newLineLayerSpecification,
  pointData,
  PointLayerSpecification,
} from "../../helpers/mapHelpers";
import { useCallback, useEffect, useRef, useState } from "react";

import "mapbox-gl/dist/mapbox-gl.css";
import { FeatureCollection, LineString, Point } from "geojson";

const ReactMap = () => {
  const mapBoxAccessToken = import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN as string;

  const [pointGeoJson, setPointGeoJson] = useState(pointData[0]);

  const [lineGeoJSON, setLineGeoJSON] = useState<FeatureCollection>({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [(pointData[0].geometry as Point).coordinates],
        },
        properties: {
          elevation: [pointData[0].properties?.elevation],
        },
      },
    ],
  });

  const mapRef = useRef<MapRef>(null);

  const onMapLoad = useCallback(() => {
    icons.map((image) => {
      mapRef.current?.loadImage(image.url, (error, loadedImage) => {
        if (error) {
          throw error;
        }

        if (loadedImage) {
          mapRef.current?.addImage(image.id, loadedImage);
        }
      });
    });
  }, []);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % pointData.length;
      setPointGeoJson(pointData[index]);

      setLineGeoJSON((prev) => ({
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [
                ...(prev.features[0].geometry as LineString).coordinates,
                (pointData[index].geometry as Point).coordinates,
              ],
            },
            properties: {
              elevation: [
                ...(prev.features[0].properties?.elevation || []),
                pointData[index].properties?.elevation,
              ],
            },
          },
        ],
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={mapBoxAccessToken}
      initialViewState={{
        longitude: 35.92,
        latitude: 31.9515,
        zoom: 10,
      }}
      onLoad={onMapLoad}
      mapStyle='mapbox://styles/mapbox/streets-v9'>
      <Source id='line-geojson' type='geojson' lineMetrics={true} data={lineData}>
        <Layer {...lineLayerSpecification} />
      </Source>

      <Source id='symbol-geojson' type='geojson' lineMetrics={true} data={pointGeoJson}>
        <Layer {...PointLayerSpecification} />
      </Source>

      <Source id='line-geojson-1' type='geojson' lineMetrics={true} data={lineGeoJSON}>
        <Layer {...newLineLayerSpecification} beforeId='elevated-symbol' />
      </Source>
    </Map>
  );
};

export default ReactMap;
