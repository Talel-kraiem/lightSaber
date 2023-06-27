/*
Author: Talel Kraiem (kraiemtalel4@gmail.com)
cartesianSystem.js (c) 2023
Desc: description
Created:  2023-06-22T17:31:30.470Z
Modified: !date!
*/

function transformPlaneToCartesianPlane(canvas,context) {
    context.translate(canvas.width/2,canvas.height/2);
    context.scale(1,-1);
}

export default transformPlaneToCartesianPlane;
