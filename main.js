const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
/*
Just playing hope this is ok.
*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    myHeading.textContent = 'Hello Javascript!';
}