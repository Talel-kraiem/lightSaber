# Welcome to LightSaber!

Hi! I'm existed to present to you **LightSaber.js**. If you want to contribute or fork the code your welcome , you can use it in your own business projects for free. If you want to play with the code, you can edit it. If you have any suggestions or improvement please feel free to  contact me .


# Introduction

**LightSaber** is a new JavaScript library aimed for providing a coherent simple ground for tracing graphs with appealing lighting effects using *canvas browser API*. 
## Use Cases

This library can be used as a **graphic calculator** to quickly trace graphs , however it's not completed yet but you can combine it with other libraries to archive a tool like [Desmos](https://www.desmos.com/calculator) or [GeoGebra](https://www.geogebra.org/calculator) capable trace graphs based on input live.
Or it can be used as a **Decoration  Element** for business sites due to it's ability to create animated graphs
that showcase data in a pleasing way.

## Getting Started

You can get started quickly by copying and pasting the example folder which contains a documented demo
on how to get started.
>All dependencies is contained in lightSaber/modules folder .
1. First Import the Graph_Create Class
```js
import  Graph_Create  from  "../lightSaber/modules/graph/graph.js";
```
2. Select the canvas tag where you want to trace your graph
```js
let  canvas  =  document.getElementById("lightSaber");
```
3. Pass the canvas reference to the Graph_Create constructor
```js
let  graph  =  new  Graph_Create(canvas);
```
4. Set graph dimensions in pixels
```js
graph.setDimensions(width,height);
```
5. Change coordinate space to Cartesian if needed

![Deference between canvas default origin and Cartesian plane origin](https://i0.wp.com/dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/03/1393985491canvas-coordinate-space.png)

```js
graph.setCoordinateSystem("cartesian");
```
- **Note:** 
  when not specified it will default to the Canvas default coordinate space.
 6.  Define your mathematical function as a simple arrow function 
  ```js
  graph1.setFunction((x)  =>  {
return  Math.sin(x  *  (Math.PI/180)  )  *  100; // overide this with your desired function
});
 ```
7. Define the domain of the function
```js
graph.setDomain(-1000,0,50,100,500,10000);
```
