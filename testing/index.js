/* 
Author: Talel Kraiem (kraiemtalel4@gmail.com)
index.js (c) 2023
Desc: description
Created:  2023-06-18T20:12:48.396Z
Modified: !date!
*/

import { $ } from "../lib/dep/selector/selectors.js";
import { fullscreen } from "../lib/dep/resizer/resizer.js";
import { cssReset, invertClr } from "../lib/dep/cssModifier/css.js";
import { center } from "../lib/dep/transform/center.js";
import { Graph } from "../lib/dep/graph/graph.js";
import { toRad } from "../lib/dep/calc/degToRad.js";

let c = $("#lightsaber");

cssReset();
invertClr(c);

fullscreen(c);
center(c);

let g = new Graph(c);
let f = new Graph(c);

g.setFunction((x)=>{
    return Math.sin(toRad(x))*100;

})
.setDomain(-1000,1000)
.setTransition()
.setDuration(30000)
.trace();
