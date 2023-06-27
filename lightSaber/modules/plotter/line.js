/*
Author: Talel Kraiem (kraiemtalel4@gmail.com)
line.js (c) 2023
Desc: description
Created:  2023-06-22T17:30:53.543Z
Modified: !date!
*/

function line(context,Xstart,Ystart,Xend,Yend){
    context.beginPath();
    context.moveTo(Xstart, Ystart);
    context.lineTo(Xend, Yend);
    context.stroke();
 }
 
 export default line;