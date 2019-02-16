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
    minZoom:15,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZHhyZSIsImEiOiJjanI1anV3M3EwZmowNDVvMjU1NnZrNnR5In0.ELl0VmskdZJajJ2kGd0K6g'
}).addTo(NBNmap);
// set custom icon image
var nbnicon = L.icon({
    iconUrl: '/images/purpleline.png',
    //shadowUrl: '/images/shadow.png',

    iconSize:     [20, 20], // size of the icon
    shadowSize:   [30, 30], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [14.5, 15],  // the same for the shadow
    popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
});


/*
var popup = L.popup();

var hover_box = document.getElementById("hover_box");

var name = 1;
var position = 1;
if (position==1){
building_title[1].innerHTML = building_title[0].innerHTML;
};
*/

//use to get exact location of buildings
/*
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(NBNmap);
}

NBNmap.on('click', onMapClick);
*/





//important elements

var building_name = document.getElementsByClassName("building_name");
var building_list = document.getElementsByClassName("building_list");
var summary = document.getElementsByClassName("summary");
var hover_name = document.getElementById("hover_name");
var hover_list = document.getElementById("hover_list");
var hover_summary = document.getElementById("hover_summary");


/*function techi(e){
  if(e.type = "click"){
    hover_summary.innerHTML = summary[0].innerHTML;

  }else if (e.type= "mouseover"){
        hover_name.innerHTML = building_name[0].innerHTML;
    hover_list.innerHTML = building_list[0].innerHTML;
    hover_summary.innerHTML = summary[0].innerHTML;
    hover_summary.style.display = "none";
  }else {
        hover_name.innerHTML = "Hover over a building to see it's ranking. Click to learn more.";
    hover_list.innerHTML = "";
    hover_summary.innerHTML = "";
  }
*/
function techi(e){
  hover_summary.innerHTML = summary[0].innerHTML;
  hover_summary.style.display = "block";
  }


function clark(e){
     hover_name.innerHTML = building_name[0].innerHTML;
     hover_list.innerHTML = building_list[0].innerHTML;
     hover_list.style.display = "block";
     hover_summary.innerHTML = summary[0].innerHTML;
     hover_summary.style.display = "none";
}

 function nullTouch(e){
     hover_name.innerHTML = "Hover over a building to see its ranking. Click to learn more.";
     hover_list.innerHTML = "";
     hover_summary.innerHTML = "";
 }

// //function change(e){
//   //building_title[1].innerHTML = building_title[0].innerHTML;
// //}

// //function null_thing(e){
//   //building_title[1].innerHTML = "building_title[0].innerHTML";
// //}

// //function onClick(e) {
//  //   alert(this.getLatLng());
// //}

var tech = L.marker([42.0578, -87.6759], {icon: nbnicon, myID: "tech"}).addTo(NBNmap);



// let tech = L.marker([42.0578, -87.6759], {icon: nbnicon}).addTo(NBNmap);

//tech.addEventListener("mouseover", clark);
//tech.on('mouseover', clark);
//if (myID == "tech"){

//};
//tech.removeEventListener();
tech.addEventListener("click", techi)

tech.addEventListener('mouseover', clark)

tech.addEventListener('mouseout', nullTouch)




/*function eventHandler(event) {
  if (event.type == 'mouseover') {
    hover_name.innerHTML = building_name[0].innerHTML;
    hover_list.innerHTML = building_list[0].innerHTML;
    hover_summary.innerHTML = summary[0].innerHTML;
    hover_summary.style.display = "none";
  } else if (event.type == 'click'){
        hover_summary.innerHTML = summary[0].innerHTML;
      } else {
        hover_name.innerHTML = "Hover over a building to see it's ranking. Click to learn more.";
        hover_list.innerHTML = "";
         hover_summary.innerHTML = "";
    /* handle a full screen toggle error */
 // }
//}*/
/*
var clark  = L.marker([42.0495, -87.6774], {icon: nbnicon}).addTo(NBNmap); //555 Clark street
var parkes = L.marker([42.0501, -87.6772], {icon: nbnicon}).addTo(NBNmap);//Parkes Hall 
var scott = L.marker([42.0515, -87.6776], {icon: nbnicon}).addTo(NBNmap);//Scott Hall 
var lutkin = L.marker([42.0510, -87.6803], {icon: nbnicon}).addTo(NBNmap);//Lutkin Memorial Hall 
var fisk = L.marker([42.0507, -87.6742], {icon: nbnicon}).addTo(NBNmap);//Fisk Hall 
var locy = L.marker([], {icon: nbnicon}).addTo(NBNmap);//Locy Hall 
var mccormick = L.marker([42.0513, -87.6743], {icon: nbnicon}).addTo(NBNmap);//McCormick Foundation Center 
var harris = L.marker([42.0513, -87.6763], {icon: nbnicon}).addTo(NBNmap);//Harris Hall 
var university = L.marker([42.0519, -87.6760], {icon: nbnicon}).addTo(NBNmap);//University Hall 
var kresgie = L.marker([42.0517, -87.6751], {icon: nbnicon}).addTo(NBNmap);//Kresge/Crowe Hall 
var swift = L.marker([42.0523, -87.6750], {icon: nbnicon}).addTo(NBNmap);//Annie May Swift Hall 
L.marker([42.0520, -87.6729], {icon: nbnicon}).addTo(NBNmap);//John J Louis Hall 
L.marker([42.0521, -87.6731], {icon: nbnicon}).addTo(NBNmap);//Wirtz Center for the Performing Arts 
L.marker([42.0517, -87.6729], {icon: nbnicon}).addTo(NBNmap);//Marjorie Ward Marshall Dance Center 
L.marker([42.0524, -87.6727], {icon: nbnicon}).addTo(NBNmap);//Block Museum of Art 
L.marker([42.0517, -87.6715], {icon: nbnicon}).addTo(NBNmap);//Ryan Center for the Musical Arts (SS Bienen) 
L.marker([42.0524, -87.6715], {icon: nbnicon}).addTo(NBNmap);//Regenstein Hall of Music 
L.marker([42.0527, -87.6722], {icon: nbnicon}).addTo(NBNmap);//Pick-Staiger Concert Hall 
L.marker([42.0534, -87.6727], {icon: nbnicon}).addTo(NBNmap);//Norris University Center 
L.marker([42.0531, -87.6748], {icon: nbnicon}).addTo(NBNmap);//Main Library 
L.marker([42.0532, -87.6756], {icon: nbnicon}).addTo(NBNmap);//Deering Library 
L.marker([], {icon: nbnicon}).addTo(NBNmap);//Donald P Jacobs Center & Andersen Hall (Old Kellogg) 42.0538, -87.6766
L.marker([42.0548, -87.6763], {icon: nbnicon}).addTo(NBNmap);//Lunt Hall 
L.marker([42.0548, -87.6760], {icon: nbnicon}).addTo(NBNmap);//Shanley Hall 
L.marker([42.0560, -87.6756], {icon: nbnicon}).addTo(NBNmap);//Garrett Theological Seminary 
L.marker([42.0547, -87.6749], {icon: nbnicon}).addTo(NBNmap);//Cresap Laboratory 
L.marker([], {icon: nbnicon}).addTo(NBNmap);//Swift Hall 
L.marker([42.0561, -87.6745], {icon: nbnicon}).addTo(NBNmap);//Annenberg Hall 
L.marker([42.0564, -87.6732], {icon: nbnicon}).addTo(NBNmap);//James L Allen Center 
L.marker([42.0564, -87.6741], {icon: nbnicon}).addTo(NBNmap);//Silverman Hall 
L.marker([42.0572, -87.6736], {icon: nbnicon}).addTo(NBNmap);//Pancoe-NSUHS Life Sciences Pavilion 
L.marker([42.0568, -87.6745], {icon: nbnicon}).addTo(NBNmap);//Ryan Hall 
L.marker([42.0567, -87.6751], {icon: nbnicon}).addTo(NBNmap);//Dearborn Observatory 
L.marker([42.0495, -87.6774], {icon: nbnicon}).addTo(NBNmap);//Ford Motor Company Engineering Design Center 
L.marker([42.0569, -87.6765], {icon: nbnicon}).addTo(NBNmap);//OT Hogan Biological Sciences Building 
L.marker([42.0574, -87.6741], {icon: nbnicon}).addTo(NBNmap);//Cook Hall 
//L.marker([], {icon: nbnicon}).addTo(NBNmap);//Technological Institute (Tech) 
L.marker([42.0581, -87.6744], {icon: nbnicon}).addTo(NBNmap);//Mudd Library 
L.marker([42.0574, -87.6723], {icon: nbnicon}).addTo(NBNmap);//Kellogg Global Hub (New Kellogg) 
L.marker([42.0585, -87.6736], {icon: nbnicon}).addTo(NBNmap);//Francis Searle Building 


*/




//Get element that holds the data 
var infoHolder = document.getElementById('infoHolder');
//Get the data.json file
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
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
var listBox = document.getElementById('building_list');



/*function createList(jsonObj) {
  var bName = document.createElement('h4');
  bName.textContent = jsonObj['homeTown'];
  listBox.appendChild(bName);
  var myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}*/

function showData(jsonObj) {
  var heroes = jsonObj['rank'];
      
  for (var i = 0; i < heroes.length; i++) {
    var toAppend = document.createElement('span');
    var head4 = document.createElement('h4');
    var rankList = document.createElement('ul');
    var sumlist = document.createElement('p');
//    var myPara1 = document.createElement('p');
  //  var myPara2 = document.createElement('p');
    //var myPara3 = document.createElement('p');
    //var myList = document.createElement('ul');

    head4.textContent = heroes[i].rank;
    var wordsRank = heroes[i].Breakdown;    
    for (var j = 0; j < wordsRank.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = wordsRank[j];
      rankList.appendChild(listItem);
    }
    sumlist.textContent = heroes[i].summary;
/*
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);*/

    toAppend.appendChild(head4);
    toAppend.appendChild(rankList);
    toAppend.appendChild(sumlist);
    infoHolder.appendChild(toAppend);

  }
}