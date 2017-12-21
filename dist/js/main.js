// var apikey = "168dca6da3f1152cb9381b3b2006172b";
var table = [];

$(".btnrecherche" ).click(function() { // Quand on appuie sur recherche on va garder la valeur de l'input pour s'en servir comme nom de ville par la suite -> ville 




var ville=$('#entree').val();

console.log(ville);




var weather;
var map;
var map2;


$.getJSON ('http://api.openweathermap.org/data/2.5/weather?q='+ville+'&units=metric&APPID=168dca6da3f1152cb9381b3b2006172b', gotData);

// pour passer en degrès celsius on ajoute &units=metric

function gotData(data) {
    weather = data;
    $('#card1').html('<div id="map"></div>')

    $('#nom').html('Ville : '+weather.name);
    $('#coord').html('Longitude : '+weather.coord.lon+' / Latitude : '+weather.coord.lat)
    $('#Temp').html('Température : '+weather.main.temp+' °C')
    $('#pression').html('Pression : '+weather.main.pressure+' hPa')
    $('#humid').html('Humidité : '+weather.main.humidity+' %')
    
    
    

    
    // Faire la map 
    var map = L.map('map').setView([weather.coord.lat, weather.coord.lon], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
    
    L.marker([weather.coord.lat, weather.coord.lon])



   

    // LOCAL STORAGE
    // var dataToStore = JSON.stringify(data);
    // localStorage.setItem('someData', dataToStore);
    
    
    // var key = localStorage.length;
    // key++; // increment the localstoragekey.
    // localStorage.setItem(ville, dataToStore);

     // localStorage.clear();  // efface tout le local storage
    // console.log(weather);


    table.push(weather);

    
    // console.log(table[table.length-1].coord.lat);
    // console.log(table[table.length-2].coord.lat);
    // console.log(table);

    


    $('#card2').html('<div id="map2"></div>')
    $('#nom2').html('Ville : '+table[table.length-2].name);
    $('#coord2').html('Longitude : '+table[table.length-2].coord.lon+' / Latitude : '+table[table.length-2].coord.lat)
    $('#Temp2').html('Température : '+table[table.length-2].main.temp+' °C')
    $('#pression2').html('Pression : '+table[table.length-2].main.pressure+' hPa')
    $('#humid2').html('Humidité : '+table[table.length-2].main.humidity+' %')




     var map2 = L.map('map2').setView([table[table.length-2].coord.lat, table[table.length-2].coord.lon], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map2);
    
    L.marker([weather.coord.lat, weather.coord.lon])
   
    
    console.log(table);
    // console.log(weather)
    
    
    
}






});






