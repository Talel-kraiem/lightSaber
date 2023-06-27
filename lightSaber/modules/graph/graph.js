/*
Author: Talel Kraiem (kraiemtalel4@gmail.com)
graph.js (c) 2023
Desc: description
Created:  2023-06-21T14:04:19.914Z
Modified: !date!
*/

import isAscending from "./InputValidation/isAscending.js";
import isEven from "./InputValidation/isEven.js";
import doesArrayContainsOnlyNumbers from "./InputValidation/doesArrayContainsOnlyNumbers.js";
import line from "../plotter/line.js";
import point from "../plotter/point.js";
import transformPlaneToCartesianPlane from "../transformCoordinateSystem/transformPlaneToCartesianPlane.js";

class Graph_Create {
  #widthRatio;
  #heightRatio;
  #isFunctionDomainValid;
  #transformationMatrix;

  /**
   * creates a new graph
   * @returns {Object} 
   */
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.associatedEvent = new Array();
    this.domain = new Array();
    this.calc = new Function();
    this.#isFunctionDomainValid = false;
    this.#transformationMatrix = this.context.getTransform();
    //Stores the default transformation matrix.
  }
  /** 
   * Set Graph Dimensions In Pixels
   * @param {!number} width set the width of the graph
   * @param {!number} height set the height of the graph
  */
  setDimensions(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  }
  enableResizing() {
    /* Workout the Ratio of canvas 
    Dimentions in relation to window Dimentions*/

    this.#widthRatio = this.canvas.width / window.innerWidth;
    this.#heightRatio = this.canvas.height / window.innerHeight;

    /* Detect Resizing Event And Envoke setDimensions
    With The Ratio*/

    window.addEventListener("resize", () => this.#resize());
    /* Append to Associated Event Array For Latter Clean Up*/
    this.associatedEvent.push(["resize", () => this.#resize()]);
  }
  #resize() {
    this.canvas.width = window.innerWidth * this.#widthRatio;
    this.canvas.height = window.innerHeight * this.#heightRatio;
    //Perform the canvas resizing operation.

    this.context.setTransform(this.#transformationMatrix);
    //Maintains the transformation matrix to preserve the current transformations applied to the canvas before resizing

    if (this.#isFunctionDomainValid) {
      //this.trace();
    }
    //Preform the tracing operation
  }
  /**
   * Define The Domain Of The Function
   * @param  {...number} arg 
   */
  setDomain(...arg) {
    if (!doesArrayContainsOnlyNumbers(arg)) {
      throw new Error("Arguments must be of type number.");
    }
    if (!isEven(arg.length)) {
      throw new Error(
        "Expected an even number of arguments, but received an odd number."
      );
    }
    if (!isAscending(arg)) {
      throw new Error("Arguments must be provided in ascending order.");
    }
    this.domain.push(...arg);
  }
  setFunction(func) {
    this.calc = func;
    this.#isFunctionDomainValid = true;
    // verrify if function is defined in it's domain if yes turn this.#isFunctionDomainValid to true
  }
  setCoordinateSystem(options) {
    switch (options) {
      case "cartesian":
        transformPlaneToCartesianPlane(this.canvas, this.context);
        this.#transformationMatrix = this.context.getTransform();
        //Stores the new transformation matrix.

        break;
      case "default":
        //do nothing

        break;
      default:
        throw new Error(
          "Invalid coordinate system. Please specify either 'cartesian' or 'default'."
        );
      //break;
    }
  }

  traceLine(){

    this.context.strokeStyle = "rgba(177, 130, 54, 1)";
    this.context.fillStyle = "rgba(177, 130, 54, 1)";
    this.context.lineWidth = 10;

    if (this.#isFunctionDomainValid) {
      const length = this.domain.length;
      for (let i = 0; i < length; i += 2) {
          line(
            this.context,
            this.domain[i],
            this.calc(this.domain[i]),
            this.domain[i + 1],
            this.calc(this.domain[i + 1])
            );
          
          }
        }
      
  }

  tracePoints() {
    this.context.strokeStyle = "rgba(177, 130, 54, 1)";
    this.context.fillStyle = "rgba(177, 130, 54, 1)";
    this.context.lineWidth = 10;
    const length = this.domain.length;
    for (let i = 0; i < length; i += 2) {
      
      for (let index = this.domain[i]; index < this.domain[i+1]; index+=0.5) {
        point(
          this.context,
          index,
          this.calc(index),
          );
        
      }

      }
    }
  
  }

export default Graph_Create;
