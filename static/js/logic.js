var dataUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";


var myMap = L.map("map", {
    center:[15.5994, -28.6731],
    zoom: 3
  });

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: APIkey
}).addTo(myMap);

d3.json(dataUrl, function(response){
    console.log(response);
    var features = response.features;
    var quakeCoord = [];
    var quakeMag = [];

    for(var i =0; i < features.length; i++){
        var location = features[i].geometry;
        console.log(location);

        quakeCoord.push([location.coordinates[1], location.coordinates[0]]);
        var quakeMag = features[i].properties.mag;
        console.log(quakeMag[i]);
        console.log(quakeCoord[i]);
            
        
        // else{
        //     quakeCoord.push([location.coordinates[1], location.coordinates[0]]);
        //     quakeMag.push(features[i].properties.mag);
        // }
        L.circle(quakeCoord[i], {
            fillOpacity: 0.75,
            color: "green",
            fillColor: "green",
            radius: quakeMag * 50000
        }).addTo(myMap);
    }
   
   
})


