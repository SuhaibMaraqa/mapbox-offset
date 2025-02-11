import { LineLayerSpecification, SymbolLayerSpecification } from "mapbox-gl";
import droneIcon from "../assets/drone-icon.png";

export const lineData: GeoJSON.GeoJSON = {
  type: "Feature",
  properties: {
    // add an array of elevation values.
    // the number of values doesn't need to match the number of coordinates.
    elevation: [
      9000, 4600, 4600, 4599, 4598, 4596, 4593, 4590, 4584, 4578, 4569, 4559, 4547, 4533, 4516,
      4497, 4475, 4450, 4422, 4390, 4355, 4316, 4275, 4227, 4177, 4124, 4068, 4009, 3946, 3880,
      3776, 3693, 3599, 3502, 3398, 3290, 3171, 3052, 2922, 2786, 2642, 2490, 2332, 2170, 1994,
      1810, 1612, 1432, 1216, 0,
    ],
  },
  geometry: {
    coordinates: [
      [6.862885, 45.833563],
      [6.863605, 45.846851],
      [6.859783, 45.862445],
      [6.848727, 45.876361],
      [6.827155, 45.892361],
      [6.802194, 45.905032],
      [6.780023, 45.909602],
      [6.753605, 45.906074],
      [6.728807, 45.89912],
      [6.700449, 45.883872],
      [6.683772, 45.863866],
      [6.684058, 45.841619],
      [6.691115, 45.825417],
      [6.704446, 45.813349],
      [6.720959, 45.807886],
      [6.748477, 45.809517],
      [6.775554, 45.817254],
      [6.791236, 45.828871],
      [6.801289, 45.838797],
      [6.806307, 45.849788],
      [6.803161, 45.866159],
      [6.794599, 45.880461],
      [6.769846, 45.890231],
      [6.744712, 45.889576],
      [6.722788, 45.881677],
      [6.708097, 45.868556],
      [6.699435, 45.851973],
      [6.707324, 45.83298],
      [6.723743, 45.822384],
      [6.739347, 45.818626],
      [6.756019, 45.822069],
      [6.773963, 45.832436],
      [6.78592, 45.848229],
      [6.786155, 45.860521],
      [6.77443, 45.870586],
      [6.749012, 45.87567],
      [6.731251, 45.868501],
      [6.716033, 45.853689],
      [6.714748, 45.84697],
      [6.714635, 45.838934],
      [6.71785, 45.832829],
      [6.72401, 45.828151],
      [6.730551, 45.827333],
      [6.733951, 45.8299],
      [6.735957, 45.834154],
      [6.735286, 45.839871],
      [6.734471, 45.843933],
      [6.730893, 45.847233],
      [6.72855, 45.847899],
      [6.72659, 45.847822],
      [6.724876, 45.846455],
      [6.725096, 45.8439],
      [6.726635, 45.841201],
      [6.728074, 45.837041],
      [6.727822, 45.834292],
    ],
    type: "LineString",
  },
};

export const lineLayerSpecification: LineLayerSpecification = {
  id: "elevated-line",
  type: "line",
  source: "line-geojson",
  layout: {
    "line-z-offset": [
      "at",
      ["*", ["line-progress"], ["-", ["length", ["get", "elevation"]], 1]],
      ["get", "elevation"],
    ],
    "line-elevation-reference": "sea",
  },
  paint: {
    "line-emissive-strength": 1.0,
    "line-width": 8,
    "line-color": "royalblue",
  },
};
export const newLineLayerSpecification: LineLayerSpecification = {
  id: "elevated-line-1",
  type: "line",
  source: "line-geojson-1",
  layout: {
    "line-z-offset": [
      "at",
      ["*", ["line-progress"], ["-", ["length", ["get", "elevation"]], 1]],
      ["get", "elevation"],
    ],
    "line-elevation-reference": "sea",
  },
  paint: {
    "line-emissive-strength": 1.0,
    "line-width": 8,
    "line-color": "royalblue",
  },
};

export const PointLayerSpecification: SymbolLayerSpecification = {
  id: "elevated-symbol",
  type: "symbol",
  source: "symbol-geojson",
  layout: {
    "icon-image": "drone-icon",
    "symbol-elevation-reference": "sea",
    "icon-rotation-alignment": "map",
  },
  paint: {
    "symbol-z-offset": ["get", "elevation"],
    "icon-emissive-strength": 1.0,
  },
};

export const icons = [
  {
    id: "drone-icon",
    url: droneIcon,
  },
];

export const pointData: GeoJSON.Feature[] = [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [35.92, 31.9515],
    },
    properties: {
      elevation: 9000,
      icon: "drone-icon",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [35.921, 32.1],
    },
    properties: {
      elevation: 8000,
      icon: "drone-icon",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [35.922, 32.2],
    },
    properties: {
      elevation: 7000,
      icon: "drone-icon",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [35.923, 32.3],
    },
    properties: {
      elevation: 5000,
      icon: "drone-icon",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [35.924, 32.4],
    },
    properties: {
      elevation: 9000,
      icon: "drone-icon",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [35.925, 32.5],
    },
    properties: {
      elevation: 4000,
      icon: "drone-icon",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [35.926, 31.957],
    },
    properties: {
      elevation: 1000,
      icon: "drone-icon",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [35.927, 31.958],
    },
    properties: {
      elevation: 3000,
      icon: "drone-icon",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [35.928, 31.959],
    },
    properties: {
      elevation: 500,
      icon: "drone-icon",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [35.929, 31.96],
    },
    properties: {
      elevation: 550,
      icon: "drone-icon",
    },
  },
];
