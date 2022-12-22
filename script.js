"use strict";


const images = document.querySelectorAll(".images img");

let i = 0;
let j = 4;


// function next () {
//     document.getElementById("content" + (i + 1)).classList.remove("active");
//     i = (j + i + 1) % j;
//     document.getElementById("content" + (i + 1)).classList.add("active");
//     indicator(i + 1);
// }

// function prev () {
//     document.getElementById("content" + (i + 1)).classList.remove("active");
//     i = (j + i + 1) % j;
//     document.getElementById("content" + (i + 1)).classList.add("active");
//     indicator(i + 1);
// }



function prev() {
    document.querySelector("#content" + (i + 1)).classList.remove("active")
    i = (i + j + 1) % j;
        document.querySelector("#content" + (i + 1)).classList.add("active")
    indicator (i + 1);
}

function next() {
    document.querySelector("#content" + (i + 1)).classList.remove("active")
    i = (i + j - 1) % j;
        document.querySelector("#content" + (i + 1)).classList.add("active")
    indicator (i + 1);
}