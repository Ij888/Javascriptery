/* jshint esversion: 6 */ 
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
//for(var images = 0; images >=images.length; images++){
    let whatAttribute = document.getElementsByClassName('displayed-img').getAttribute('src');
   // console.log(whatAttribute);
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic1.jpg');
    thumbBar.appendChild(newImage);
    alert('aAlert');
//}

/* Wiring up the Darken/Lighten button */

/* ===== notes =====
 Syntax for getAttribute
    let attribute = element.getAttribute(attributeName);

Example
    const div1 = document.getElementById('div1');
    const align = div1.getAttribute('align');

alert(align); // Shows the value of align for the element with id="div1"

*/
