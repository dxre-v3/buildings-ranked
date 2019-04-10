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

function check() {
  console.log("does the forloop work")
}

var geoArr = [];

function showData(jsonObj) {
  // Get Data json info
  var numberB = jsonObj['Sheet1'];

  // run a for loop for the number of entries

  for (var i = 0; i < numberB.length; i++) {

    // Create the elements you want to fill
    var toAppend = document.createElement('span');
    var head4 = document.createElement('h4');
    var rankList = document.createElement('ul');
    var sumList = document.createElement('span');

    // add classes to necessary elements
    toAppend.id = Number(numberB[i].Rank);
    toAppend.addEventListener('click', clickedBuildingName)
    head4.classList.add("building_name");
    head4.id = "h4" + numberB[i].Rank;


    rankList.classList.add("building_list");
    rankList.id = "ul" + numberB[i].Rank;
    sumList.classList.add("summary");
    sumList.id = "sum" + numberB[i].Rank;
    // get data and add to the newly created elements
    head4.textContent = numberB[i].Rank + ": " + numberB[i].BuildingName;

    var wordsRank = numberB[i].Breakdown;
    //console.log(numberB[i]);
    //console.log(wordsRank.length)

    for (var j = 0; j < wordsRank.length; j++) {
      //console.log(wordsRank[j] + " content");
      var listItem = document.createElement('li');
      listItem.textContent = wordsRank[j];
      //console.log(listItem)
      rankList.appendChild(listItem);
    }
    //

    var sumRank = numberB[i].Summary;
            console.log(sumRank)
    for (var k = 0; k < sumRank.length; k++) {
        var sumItem = document.createElement('p');
        sumItem.textContent = sumRank[k];
        console.log(k)
        console.log(sumItem)
        sumList.appendChild(sumItem);
                console.log(sumList)
    }

    if (numberB[i].Location !== undefined) {

      var geoLoc = numberB[i].Location;
      console.log(geoLoc)
    };
    var geoMarker = L.marker(geoLoc, {
      icon: nbnicon
    }).addTo(NBNmap)
    geoMarker._icon.classList.add("geoTru");
    //console.log(numberB[i].Rank);
    geoMarker._icon.id = numberB[i].Rank;
    geoMarker.addEventListener("mouseover", hovered);
    geoMarker.addEventListener("click", clicked);
    geoMarker.addEventListener("mouseout", left);
    console.log(typeof(geoMarker));

    // add all elements to one holder element
    toAppend.appendChild(head4);
    toAppend.appendChild(rankList);
    toAppend.appendChild(sumList);
    infoHolder.appendChild(toAppend);
    geoArr.push(geoMarker);
  }
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

// whenever a geomarker is clicked on the map, get all
// building description lists and close each one of them
// before opening the list corresponding to the clicked
// geomarker
function close() {
  const allBuildingLists = document.getElementsByClassName('building_list');
  const allSummaries = document.getElementsByClassName('summary');
  for (let i = 0; i < allBuildingLists.length; i++) {
    allBuildingLists[i].style.display = "none";
    allSummaries[i].style.display = "none";
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
  
}



var colorHolder;
var open;

function clickedBuildingName(e) {
  close();
  var spot = event.target;
  id = spot.id.slice(2);
  id = Number(id);
  var head2 = document.getElementById("h4" + id);
  if (open === true){
  close();
  colorHolder = null;
  head2.style.color = colorHolder;
  open = false; 
  //head2.style.color = "#b183e2";
 }else{
  var list2 = document.getElementById("ul" + id);
  var sum2 = document.getElementById("sum" + id);
  console.log('ev target', e)
  list2.style.display = "block";
  sum2.style.display = "block";
  colorHolder = "#501f84";
  head2.style.color = colorHolder;
  open = true; 
}

}


function left(e) {
  hover_name.innerHTML = "Hover over a building to see it's ranking. Click to learn more.";
  hover_list.style.display = "none";
  hover_summary.style.display = "none";
  hover_box.style.width = "20%";
  hover_box.style.marginLeft = "80%";

}

function hey() {
  console.log('hey, working')
}

var building_name = document.getElementsByClassName("building_name");
var building_list = document.getElementsByClassName("building_list");
var summary = document.getElementsByClassName("summary");
