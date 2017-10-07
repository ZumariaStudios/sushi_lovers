"use strict";

// Last Date Modified Script 
// By Amberly Hoffman 

var DOM = new Date(document.lastModified);
var x = DOM.toLocaleDateString();

document.getElementById("DOM").innerHTML = "Thank you for visiting Sushi Lovers! | " + "<a href='mail to:abc@gmail.com'>" + "Contact Us" + "</a>" + " | Date Last Modified: " +  x;
