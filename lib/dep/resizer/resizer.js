/*
Author: Talel Kraiem (kraiemtalel4@gmail.com)
resizer.js (c) 2023
Desc: description
Created:  2023-06-18T20:32:07.745Z
Modified: !date!
*/

import { css } from "../cssModifier/css.js";

function fullscreen(x){
    // css(x,"width","100vw");
    // css(x,"height","100vh");
    x.width  = window.innerWidth;
    x.height = window.innerHeight;
}

export{
    fullscreen
}