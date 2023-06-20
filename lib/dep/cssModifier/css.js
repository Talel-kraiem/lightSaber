/*
Author: Talel Kraiem (kraiemtalel4@gmail.com)
css.js (c) 2023
Desc: description
Created:  2023-06-18T20:36:55.793Z
Modified: !date!
*/

import { $ } from "../selector/selectors.js";

function css(x,prop,val){
    x.style[prop] = val;
}

function cssFilter(x,val){
    x.style.filter = val;
}

function cssReset(){
    $("*").style.margin = "0";
    $("*").style.padding = "0";
}

function invertClr(x){
    backgroundClr(x,"white");
    cssFilter(x,"invert(100%)");
}

function backgroundClr(x,clr){
    css(x,"backgroundColor",clr)
}

export{
    cssReset,
    invertClr,
    backgroundClr,
    css
}