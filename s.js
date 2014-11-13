var airs = {"type": "Polygon", "coordinates": [
          [
             [ -107.908480003690741, 37.953760001039718 ], [ -107.055870003997498, 37.277499999018417 ], [ -103.23714999578533, 38.052780003818988 ], [ -107.908480003690741, 37.953760001039718 ] 
          ]
        ] };
var c = db.colorado.find({"geometry" : {$geoWithin: {$geometry: airs}}, "type": /City|Airport/ }, {"_id": 0});
while(c.hasNext()) {printjson(c.next()); print(",")}