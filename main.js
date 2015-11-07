$(document).ready(init);


var address1 = $('#address1');
var address2 = $('#address2');

var distURL = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=';
var destURL = '&destinations=';

var apiURL = 'https://maps.googleapis.com/maps/api/geocode/json?address='; 
var keyURL = 'AIzaSyCOuDa_zqPMFOg2kpCdxibNN0CFNF-BSIA';
var modeURL = '&mode=&language=us-en';

function init() {
  $('#address1').on('keypress', enterLocation);
  $('#address2').on('keypress', enterLocation);
  $('#getDistance').on('click', getDistance);
}

function enterLocation() {
  if (event.charCode === 13)
    getCoordinates();
}

function callAPI(url){
  $.get(url)
  .done(function(data){   
    var lat = data.results[0].geometry.location.lat;
    var lng = data.results[0].geometry.location.lng;
    $get()

    return latLng;
  })
  .fail(function(error){
    console.error(error);
  });
}

function getDistance(){
  var addressIn1 = address1.val().split(' ');
  var addressIn2 = address2.val().split(' ');

  var addressTrim1 = addressIn1.map(function(elem){
    return elem.trim();
  });
  var address1URL = addressTrim1.join('+');


  var addressTrim2 = addressIn2.map(function(elem){
    return elem.trim();
  });
  var address2URL = addressTrim2.join('+');

  var url1 = apiURL + address1URL;
  var url2 = apiURL + address2URL;
  // var url = distURL + address1URL + destURL + address2URL + modeURL;
} 


// function makeCurrent(data) {
//   var $divCur = $('<div>').addClass('current');
//   var $h3 = $('<h3>').text("Currently");
//   var $icon = $('<img>').attr('src', data.current_observation.icon_url);
//   var $divTemp = $('<div>').text(data.current_observation.temp_f  + '˚').addClass('temp');
//   var $divWeath = $('<div>').text(data.current_observation.weather).addClass('weather');
//   $divCur.append($h3, $icon, $divTemp, $divWeath);
//   $divConditions.append($divCur);
// }

// function makeForecast(data) {
//   var $divFor = $('<div>').addClass('forcast');

//   var $day = $('<h4>').text(data.date.weekday);
//   var $date = $('<h4>').text(data.date.monthname + ' ' + data.date.day);
//   var $tempIcon = $('<img>').attr('src', data.icon_url);
//   var $divTempHigh = $('<div>').text('High: ' + data.high.fahrenheit + '˚');
//   var $divTempLow = $('<div>').text('Low: ' + data.low.fahrenheit + '˚');
//   $divFor.append($day, $date, $tempIcon, $divTempHigh, $divTempLow);
//   $divConditions.append($divFor);
// }