(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("map",
{ "compressionlevel":-1,
 "height":20,
 "infinite":false,
 "layers":[
        {
         "data":[265, 265, 266, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 245, 265, 265, 265, 265, 265, 265, 265, 265, 265,
            265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265,
            265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265,
            265, 265, 265, 266, 266, 265, 265, 265, 245, 265, 265, 265, 265, 265, 265, 265, 265, 245, 265, 265, 265, 265, 266, 265, 1157, 1158, 1158, 1221, 1158, 1158,
            265, 265, 265, 265, 265, 245, 245, 265, 265, 265, 265, 265, 266, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 1185, 1186, 1186, 1186, 1186, 1186,
            265, 265, 265, 265, 265, 265, 265, 265, 265, 266, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 245, 1185, 1186, 1186, 1186, 1186, 1186,
            265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 1241, 1242, 1275, 1186, 1186, 1186, 1186, 1186,
            265, 265, 265, 265, 265, 265, 266, 266, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 245, 265, 265, 265, 265, 1213, 1191, 1186, 1186, 1186, 1186,
            265, 265, 265, 265, 265, 265, 265, 266, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 1213, 1214, 1214, 1214, 1214,
            265, 265, 265, 265, 265, 245, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 245, 265, 265, 265, 265, 276, 276,
            265, 265, 265, 265, 265, 245, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 245, 266, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 276, 276,
            265, 265, 265, 265, 265, 245, 265, 265, 265, 245, 265, 265, 1, 2, 2, 2, 3, 265, 265, 265, 265, 265, 265, 265, 265, 265, 276, 276, 276, 276,
            265, 265, 265, 265, 265, 265, 265, 265, 245, 245, 265, 265, 23, 24, 24, 24, 25, 265, 265, 265, 265, 265, 265, 265, 265, 276, 276, 276, 276, 276,
            265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 45, 46, 46, 46, 47, 265, 265, 245, 245, 276, 276, 276, 276, 276, 276, 276, 276, 276,
            265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 245, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 276, 166, 167, 167, 167, 167, 167, 167, 168,
            287, 111, 111, 111, 111, 111, 137, 265, 265, 265, 245, 265, 265, 265, 266, 266, 266, 266, 265, 265, 276, 276, 188, 255, 189, 255, 189, 189, 189, 190,
            287, 111, 111, 111, 111, 111, 136, 265, 265, 265, 265, 266, 266, 266, 265, 265, 265, 265, 265, 276, 276, 276, 188, 189, 189, 189, 189, 254, 254, 190,
            287, 111, 111, 111, 111, 111, 136, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 276, 276, 276, 276, 188, 189, 189, 189, 189, 189, 255, 190,
            287, 111, 111, 111, 111, 111, 136, 245, 265, 265, 265, 265, 265, 265, 265, 265, 265, 276, 276, 276, 276, 276, 188, 255, 255, 189, 189, 254, 254, 190,
            287, 111, 111, 111, 111, 111, 136, 265, 265, 265, 265, 265, 265, 265, 276, 276, 276, 276, 276, 276, 276, 276, 210, 211, 211, 211, 211, 211, 211, 212],
         "height":20,
         "id":1,
         "name":"Ground",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[685, 686, 687, 688, 685, 686, 687, 688, 685, 686, 687, 688, 685, 686, 687, 688, 685, 686, 687, 688, 685, 686, 687, 688, 685, 686, 687, 685, 686, 687,
            701, 702, 703, 704, 701, 702, 703, 704, 701, 702, 703, 704, 701, 702, 703, 704, 701, 702, 703, 704, 701, 702, 703, 704, 701, 702, 703, 701, 702, 703,
            717, 718, 719, 720, 717, 718, 719, 720, 717, 718, 719, 720, 717, 718, 719, 720, 717, 718, 719, 720, 717, 718, 719, 720, 717, 718, 719, 717, 718, 719,
            0, 0, 0, 611, 611, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 589, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 607, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 781, 782, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 589,
            0, 832, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 797, 798, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 611, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 607, 607, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 832, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 607, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 611, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 607, 607, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 607, 0, 0, 0, 801, 0, 0, 0,
            0, 0, 0, 0, 832, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 586, 0, 0, 0, 0, 0, 0, 0, 607, 0, 0, 0, 0, 0, 0, 0, 0, 607, 0, 0, 0, 0, 657, 658, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 607, 801, 0, 0, 673, 674, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 611, 0, 0, 0, 0, 0, 607, 0, 0, 607, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 801, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "id":2,
         "name":"Foliage",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 685, 686, 687, 688, 685, 686, 687, 688, 685, 686, 687, 688, 685, 686, 687, 688, 685, 686, 687, 688, 685, 686, 687, 688, 685, 686, 687, 688,
            0, 0, 701, 702, 703, 704, 701, 702, 703, 704, 701, 702, 703, 704, 701, 702, 703, 704, 701, 702, 703, 704, 701, 702, 703, 704, 701, 702, 703, 704,
            0, 0, 717, 718, 719, 720, 717, 718, 719, 720, 717, 718, 719, 720, 717, 718, 719, 720, 717, 718, 719, 720, 717, 718, 719, 720, 717, 718, 719, 720,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 787, 788, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 787, 788, 0, 0, 0, 0, 787, 788, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 803, 804, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 803, 804, 0, 0, 0, 0, 803, 804, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 941, 942, 943, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 787, 788, 0, 0, 0, 0, 957, 958, 959, 0, 0, 0, 0, 0, 787, 788, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 803, 804, 0, 0, 0, 0, 973, 974, 975, 0, 0, 0, 0, 0, 803, 804, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "id":3,
         "name":"Trees",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }],
 "nextlayerid":4,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"left-up",
 "tiledversion":"1.9.2",
 "tileheight":16,
 "tilesets":[
        {
         "firstgid":1,
         "source":"TilesetFloor.tsx"
        }, 
        {
         "firstgid":573,
         "source":"ExtraTileset.tsx"
        }, 
        {
         "firstgid":653,
         "source":"TilesetNature.tsx"
        }, 
        {
         "firstgid":989,
         "source":"WaterTileset.tsx"
        }],
 "tilewidth":16,
 "type":"map",
 "version":"1.9",
 "width":30
});