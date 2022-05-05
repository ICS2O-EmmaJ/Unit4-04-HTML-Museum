// Created by: Emma Janani
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

 function displayCost() {
  // declare variables
  let cost = "Please make a selection above."
   
	// get user input
	let age = parseInt(document.getElementById('age').value)
  let day = document.getElementById('day');
  
  if (age < 5 || age > 95) {
		cost = "The cost is FREE for you."
	}
	else if ((day == "Tuesday") || (day == "Thursday)") 
			 || (age >=12) && (age <=21)) {
		cost = "You get a student discount."
	}
	else if ((age > 0) || (day != "")) {		
		cost = "You have to pay regular price."
	}
	
  	// display the greeting
  	document.getElementById('display-results').innerHTML = cost
}
   
