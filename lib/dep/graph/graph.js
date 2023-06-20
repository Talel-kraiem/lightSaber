/*
Author: Talel Kraiem (kraiemtalel4@gmail.com)
graph.js (c) 2023
Desc: description
Created:  2023-06-20T19:21:13.346Z
Modified: !date!
*/

import { lerp } from "../calc/lerp.js";
import { point } from "../plotter/plotter.js";

const SAMPLE_RATE = 0.001;

class Graph{
    constructor(context){
        
        this.context=context;

        this.domain={
            min:null,
            max:null,
        }
        
        this.transition={
            active:false,
            duration:0,
        }
    }
    setDomain(min,max){
        this.domain["min"]=min;
        this.domain["max"]=max;
        return this;
    }
    setFunction(func){
        this.calc=func;
        return this;
    }
    setTransition(){
        this.transition.active=true;
        return this;
    }
    setDuration(t){
        this.transition.duration=t;
        return this;
    }
    trace(){
        let t = 0
        if(this.transition.active === false){
            for ( t; t <= 1; t+=SAMPLE_RATE) {
                let x = this.lerp(t);
                point(this.context,x,this.calc(x));
            }
        }else{
            let step = 1 / this.transition.duration;
            let start = 0;
            for (let t = 0; t <= 1 ; t+=SAMPLE_RATE) {
                let x = this.lerp(t);
                let y = this.calc(x);
                setTimeout(()=>{
                    point(this.context,x,y);
                },1000)
            }
        }
    }
    calc(x){
        //overide this
    }
    lerp(t){
        return lerp(this.domain["min"],this.domain["max"],t);
    }
}


export{
    Graph
};