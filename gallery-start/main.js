/* jshint esversion: 6 */ 

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(var images = 0; images >=images.length; images++){

const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/pic1.jpg');
thumbBar.appendChild(newImage);

}

/* Wiring up the Darken/Lighten button */
