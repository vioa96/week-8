var map = L.map('map', {
  center: [40.000, -85.1639],
  zoom: 14
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


//ex1
var point = {
  "type": "Feature",
  "properties": {
    "marker-color": "#0f0"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [-75.149897, 39.949545]
  }
};
var against = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-73.979217, 40.764005]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-73.978742, 40.763726]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-73.980421, 40.763459]
      }
    }
  ]
};

var nearest = turf.nearest(point, against);
nearest.properties['marker-color'] = '#f00';

var resultFeatures = against.features.concat(point);
var result = {
  "type": "FeatureCollection",
  "features": resultFeatures
};

var layer1=L.geoJson(nearest,{
  pointToLayer:function(feature, latlng){
    return L.circleMarker(latlng);
  }
}).addTo(map);


// ex2
var polygons = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-74.00025673006892, 40.73042571170062],
          [-74.00025673006892, 40.72652310959629],
          [-73.9932632446289, 40.726185523600634],
          [-73.99313621688634, 40.730088145502236],
          [-73.99472580029396, 40.72922113265937]
        ]]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-73.98342275671892, 40.72773586798832],
          [-73.98412227630615, 40.724868988156636],
          [-73.9803710472188, 40.72474832534734],
          [-73.97960801114095, 40.72737454656968],
          [-73.98342275671892, 40.72773586798832]
        ]]
      }
    }
  ]
};
var points = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "population": 200
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-73.98202414449768, 40.72602518622788]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 50
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-73.98062553489581, 40.72689256625256]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 100
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-73.98097529599909, 40.72535065857201]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 50
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-73.99432668680674, 40.72687077576591]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 100
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-73.99432668680674, 40.727352757233355]
      }
    }
  ]
};

var averaged = turf.average(
 polygons, points, 'population', 'pop_avg');

var resultFeatures = points.features.concat(
  averaged.features);
var result = {
  "type": "FeatureCollection",
  "features": resultFeatures
};


var layer2= L.geoJson(result).addTo(map);


//ex3
var polygons3 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {'fill':'#f1625d'},
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [
             -73.99239077494712,
             40.727373246395416
           ],
           [
             -73.99270834954222,
             40.72380773948828
           ],
           [
             -73.98800354014383,
             40.72366300729064
           ],
           [
             -73.98768596816808,
             40.72771050082797
           ],
           [
             -73.99239077494712,
             40.727373246395416
           ]

        ]]
      }
    }, {
      "type": "Feature",
      "properties": {'fill':'#8dbeb1'},
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [
              -73.98955621731147,
              40.730270587496015
            ],
            [
              -73.98988999124412,
              40.72892161091259
            ],
            [
              -73.98744220736262,
              40.728475902673466
            ],
            [
              -73.98707667583949,
              40.72985505171406
            ],
            [
              -73.98955621731147,
              40.730270587496015
            ]
        ]]
      }
      }, {
        "type": "Feature",
        "properties": {'fill':'#4b657'},
        "geometry": {
          "type": "Polygon",
          "coordinates": [[
            [
              -73.98386778862912,
              40.73106246461811
            ],
            [
              -73.9837725178222,
              40.72937625980673
            ],
            [
              -73.98113408067728,
              40.729617241903576
            ],
            [
              -73.98122935410356,
              40.73154441522972
            ],
            [
              -73.98386778862912,
              40.73106246461811
            ]
          ]]
        }
    }
  ]
};

var points3 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "population": 50
      },
      "geometry": {
        "type": "Point",
        "coordinates":  [
          -73.9894630901108,
          40.72528105838812
        ]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 50
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.99133849117788,
          40.72547392170467
        ]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 80
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.98790526363882,
          40.729569110262844
        ]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 50
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.98943133317516,
          40.72903933835537
        ]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 40
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.98266787597094,
          40.73027009970378
        ]
      }
    }
  ]
};

var tagged = turf.tag(points3, polygons3,'fill', 'color');
var myStyle1 = function(feature){
  return {fillColor:'#fff'};
};

var layer3 = L.geoJson(polygons3 ,{
  style: myStyle1,
}).addTo(map);

var myStyle = function(feature){
  return {fillColor: feature.properties.color};
};

layer =  L.geoJson(tagged ,{
  style: myStyle,
  pointToLayer:function(feature,latlng){
    return L.circleMarker(latlng);
  }
}).addTo(map);
