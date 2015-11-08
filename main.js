"use strict"

// this ref is a reference to the fire base that I just created
var ref = new Firebase("https://hitcher.firebaseio.com/");
var request = require("request"); 

var users = [];
var driverLocations = [];
var riderLocations = [];

//recieve data from the user interface and create a newProfile
function userProfile (name, email, phone, phone, licPlate, mileagePoints){
  this.name = name
  this.email = email
  this.phone = phone
  this.licPlate = licPlate
  this.mileagePoints = mileagePoints
}


//keep track of the users points
function managePoints (status, miles) {
  if (status === "driver"){
    this.userProfile.mileagePoints += miles;
  } else{
    this.userProfile.mileagePoints -= miles;
  }
}

function addUser (userProfile) {
  users.push(userProfile);
}

function updateLocation (status, location) {
  //push an object that includes userProfile.this.name and location 
  // to array as either an object or an array within an array 
  if (status = "driver"){
      //display color = red
  }
  if (status = "rider"){
      //display color = green
  }
}

