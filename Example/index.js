/*
Author: Talel Kraiem (kraiemtalel4@gmail.com)
index.js (c) 2023
Desc: description
Created:  2023-06-21T13:53:43.903Z
Modified: !date!
*/

/* Import The Graph_Create Class */
import Graph_Create from "../lightSaber/modules/graph/graph.js";

/* Then Select The Canvas Tag Where You Want To Trace
    Your Graph */

let canvas = document.getElementById("lightSaber");

/* Then Pass The Canvas Reference To The Graph_Create
    Constructor */

let graph1 = new Graph_Create(canvas);

/* Set Graph Dimensions In Pixels */

graph1.setDimensions(innerWidth, innerHeight);

/* Enable Graph Resizing Based On window Resize Event */

graph1.enableResizing();

/* Now Define The Domain Of The Function
    in pairs of numbers in an ascending order */


    // graph1.setDomain(-1000,1000);
    graph1.setDomain(-1000,0,50, 100, 500, 10000);

/* Note: this setDomain arguments translates mathematically to
    graph1 ∈ [-1000,100] ∪ [500,10000]
    and therefore graph1 ∉ ]101,499[
   
    Remark: arguments must be part of function doamin
     thus for domain like ℝ \ [x,y] for example
     must be translated to [-99999,x-1] ∪ [y+1,99999]
     and function call would be 
     graph1.setDomain(-99999, x-1, y1, 99999);
*/

/* Then Define The Function Desired For Tracing */

graph1.setFunction((x) => {
    return Math.sin(x * (Math.PI/180) ) * 100;
    //return x; // overide this with your desired function
});

/* Note: if function is invalid in the specified domain 
    it will throw an error in console and wont 
    trace the function
*/

/* Then pick a Coordinate System options
 as a string like "cartesian" or "default" to follow default
 canvas Coordinate System */
 
graph1.setCoordinateSystem("cartesian");

/* To Trace The Graph invoke suitable trace method 
   Example:
   
*/