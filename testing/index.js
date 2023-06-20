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
import { center } from "../lib/dep/center/center.js";
import { ctx } from "../lib/dep/context/context.js";
import { point } from "../lib/dep/plotter/plotter.js";
import { toRad } from "../lib/dep/calc/degToRad.js";
import { f } from "../lib/dep/calc/calc.js";
let c = $("#lightsaber");
let pen = ctx(c);

cssReset();
invertClr(c);

fullscreen(c);
center(c);

for (let i = -c.width; i <= 36000; i++) {
//    dataset.push(i*0.0174533);
    point(c,i,f(toRad(i))*100);
}