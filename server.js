"use strict";

 var request = require("request");
 var _ = require("lodash"); 

var users = [];

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

server.listen(3000);


