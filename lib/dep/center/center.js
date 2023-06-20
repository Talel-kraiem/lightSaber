/*
Author: Talel Kraiem (kraiemtalel4@gmail.com)
center.js (c) 2023
Desc: description
Created:  2023-06-19T08:18:40.410Z
Modified: !date!
*/

import { ctx } from "../context/context.js";

function centerY(x){
    ctx(x).translate(0,x.height/2);
}

function centerX(x){
    ctx(x).translate(x.width/2,0);
}

function rotate(x){
    ctx(x).rotate(Math.PI);
}

function center(x){
    centerX(x);
    centerY(x);
    rotate(x);
}

export{
    centerX,
    centerY,
    center
};