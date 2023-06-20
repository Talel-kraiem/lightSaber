/*
Author: Talel Kraiem (kraiemtalel4@gmail.com)
display.js (c) 2023
Desc: description
Created:  2023-06-18T22:20:54.255Z
Modified: !date!
*/
import { ctx } from "../context/context.js";

function point(c,x,y){
    ctx(c).fillRect(x,y, 10, 10);
}



export{
    point
}