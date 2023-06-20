/*
Author: Talel Kraiem (kraiemtalel4@gmail.com)
plane.js (c) 2023
Desc: description
Created:  2023-06-20T15:51:22.842Z
Modified: !date!
*/

function cartesian(c){

}


function setPlane(c,opt){
    if(opt === "default"){
        // do nothing
        return;
    }
    if(opt === "cartesian"){
        cartesian(c);
        return;
    }
}