import '../scss/main.scss';
// Social Media Builds_________________________________________________________________
window.$('.custom-icon--facebook').click((e) => {
  e.preventDefault();
  const uri = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${uri}`);
});


window.$('.bt-icon--twitter').click((e) => {
  e.preventDefault();
  const uri = window.location.href;
  const status = encodeURIComponent(`${window.tweetText} ${uri}`);
  window.open(`https://twitter.com/intent/tweet?text=${status}`);
});
//Map Build_________________________________________________________________________________
var mapOptions = {
  center: [42.055756, -87.672694],
  zoomSnap: 0.20,
  zoom: 15.80,
  wheelPxPerZoomLevel: 150,
  zoomDelta: 0.25,
  zoomControl: true
}
// create new map layer
var NBNmap = new L.map('mapid', mapOptions);
// load tiles
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 16,
  minZoom: 15,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiZHhyZSIsImEiOiJjanI1anV3M3EwZmowNDVvMjU1NnZrNnR5In0.ELl0VmskdZJajJ2kGd0K6g'
}).addTo(NBNmap);
// set custom icon image
var nbnicon = L.icon({
  iconUrl: '/images/purpleline.png',
  //shadowUrl: '/images/shadow.png',

  iconSize: [20, 20], // size of the icon
  shadowSize: [30, 30], // size of the shadow
  iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
  shadowAnchor: [14.5, 15], // the same for the shadow
  popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
});

var y = 12;

var hover_box = document.getElementById("hover_box");
var hover_name = document.getElementById("hover_name");
var hover_list = document.getElementById("hover_list");
var hover_summary = document.getElementById("hover_summary");


//Get element that holds the data
var infoHolder = document.getElementById('infoHolder');
//Get the data.json file
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
//var dataFile = "data/data3.json";
var dataFile = "data/data.json";
//Read .Json File
var request = new XMLHttpRequest();
request.open('GET', dataFile);
request.responseType = 'json';
request.send();

//when data is pulled, run these funtions:
request.onload = function() {
  var bData = request.response;
  showData(bData);
}


var geoArr = [];

function showData(jsonObj) {
  // Get Data json info
  var numberB = jsonObj['Sheet1'];

  // run a for loop for the number of entries


  for (var i = 0; i < numberB.length; i++) {

    if (numberB[i].Location !== undefined) {
      var geoLoc = numberB[i].Location;
      console.log(geoLoc)
    };
    var geoMarker = L.marker(geoLoc, {
      icon: nbnicon
    }).addTo(NBNmap)
    geoMarker._icon.classList.add("geoTru");
    geoMarker._icon.id = numberB[i].Rank;
    geoMarker.addEventListener("mouseover", hovered);
    geoMarker.addEventListener("click", clicked);
    geoMarker.addEventListener("mouseout", left);
    console.log(typeof(geoMarker));

    geoArr.push(geoMarker);
  }
}
var building_name = document.getElementsByClassName("building_name");
var building_list = document.getElementsByClassName("building_list");
var summary = document.getElementsByClassName("summary");
var outer_building = document.getElementsByClassName("outer_building")

for (var b = 0; b <building_name.length; b++) {
  building_name[b].addEventListener('click', clickedBuildingName)
}


var id;
var head;
var list;
var sum;

function pair(e) {
  var spot = event.target;
  id = spot.id;
  id = Number(id);
  head = document.getElementById("h4" + id);
  list = document.getElementById("ul" + id);
  sum = document.getElementById("sum" + id);
};

function hovered(e) {
  pair();
  hover_name.innerHTML = head.innerHTML;
  hover_list.innerHTML = list.innerHTML;
  hover_list.style.display = "block";
  hover_box.style.width = "30%";
  hover_box.style.marginLeft = "70%";
}

/*whenever a geomarker is clicked on the map, get all
building description lists and close each one of them
before opening the list corresponding to the clicked
geomarker*/
function close() {
  pair()
  colorHolder = null;
  for (let i = 0; i < summary.length; i++) {
    summary[i].style.display = "none";
    building_list[i].style.display = "none";
    building_name[i].style.color = colorHolder;
  }
}

function clicked(e) {
  close();
  pair();
  head.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
  list.style.display = "block";
  sum.style.display = "block";
  head.style.color = "#501f84";
  open = true; 
  tester =  id;
}



var colorHolder;
var open;
var tester;

function clickedBuildingName(e) {
  console.log(tester)
  close();
  var spot = event.target;
  id = spot.id.slice(2);
  id = Number(id);
  var head2 = document.getElementById("h4" + id);
  if (open === true && tester == id){
    open = false; 
    tester = "m";
    console.log(tester)
  //head2.style.color = "#b183e2";
  }else{
    var list2 = document.getElementById("ul" + id);
    var sum2 = document.getElementById("sum" + id);
    // console.log('ev target', e)
    list2.style.display = "block";
    sum2.style.display = "block";
    colorHolder = "#501f84";
    head2.style.color = colorHolder;
    open = true; 
    tester =  id;
    console.log(tester)
  }

}


function left(e) {
  hover_name.innerHTML = "Hover over a building to see it's ranking. Click to learn more.";
  hover_list.style.display = "none";
  hover_summary.style.display = "none";
  hover_box.style.width = "20%";
  hover_box.style.marginLeft = "80%";

}



