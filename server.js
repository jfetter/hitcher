"use strict";

 var request = require("request");
 var _ = require("lodash"); 



var users = [{}];
//front end of site will push to the driver locations and rider locations
var driverLocations = [];
var riderLocations = [];

//if username not found in database recieve data from the user interface and create a newProfile
var userProfile =  URL.userProfile  ? JSON.parse(URL.userProfile) : addUser();

//object constructor for user profiles. 
function userProfile (name, email, phone, phone, licPlate, mileagePoints){
	this.name = name
	this.email = email
	this.phone = phone
	this.licPlate = licPlate
	this.mileagePoints = mileagePoints
}

function addUser(userProfile) {
	users.push(userProfile);
}

function locale (name, locale){
	this.name = name
	this.locale = locale
	this.status = status
}
 
function addUser(userProfile) {
	users.push(userProfile);
}

// pass in users.name 
// find the user in the array of users
// pass back the entire profile for that user to be passed to
// the driver that they are paired with
function findUserInfo (name, array) {
var ind;
array.forEach(function(item, index, all){
var uname = all[index].name
console.log(uname)
        if (uname === name) {
       console.log("match", all.indexOf(item))
      ind = index;
      }
       console.log("miss" + uname)
  	  
})
 		return array[ind]
} 
//to find the rider's or driver's profile to give it to the other user
// call findUserInfo(userName, users)
// to find location info call findUserInfo(userName, driverLocation) 


//keep track of the users points
function manageMileagePoints (status, miles) {
	if (status === "driver"){
		this.userProfile.mileagePoints += miles;
	} else{
		this.userProfile.mileagePoints -= miles;
	}
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

server.listen(3005);


