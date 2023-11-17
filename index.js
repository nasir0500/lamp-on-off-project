"use strict"

let btn = document.querySelector(".light-btn");
let light = document.querySelector(".light");

function lightOn(){
    btn.classList.toggle("active");
    light.classList.toggle("light-on");
}
