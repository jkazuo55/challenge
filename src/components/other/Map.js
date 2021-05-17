import React, { Component,useState,useEffect } from "react";
import Circle from './Circle/Circle';
import Line from './Line';
import CriticalyAreaText from './CriticalyAreaText';
import CircleGreen from './Circle/GreenCircle';

import './Circle.css';

const width = 500;
const height = 500;

const dataCircle= [
  { 
   "cx":300,
   "cy":300,
   "radio":200,
   "stroke":"black",
   "fill":"red",
   "fillOpacity":0.01,
   "stroke_dasharray":"5,10",
  },
  { 
    "cx":300,
    "cy":300,
    "radio":100,
    "stroke":"black",
    "fill":"yellow",
    "fillOpacity":0.01,
    "stroke_dasharray":"5,10",
  },
  { 
    "cx":300,
    "cy":300,
    "radio":50,
    "stroke":"black",
    "fill":"blue",
    "fillOpacity":0.01,
    "stroke_dasharray":"5,10",
  },
  { 
    "cx":300,
    "cy":300,
    "radio":25,
    "stroke":"black",
    "fill":"green",
    "fillOpacity":0.01,
    "stroke_dasharray":"5,10",
  },
];

const dataLine= [
  { 
   "x1":0, 
   "y1":0, 
   "x2":200, 
   "y2":200, 
   "stroke":"black", 
   "transform":"translate(300,300) rotate(120)",
  },
  { 
    "x1":0, 
    "y1":0, 
    "x2":200, 
    "y2":200, 
    "stroke":"black", 
    "transform":"translate(300,300) rotate(240)",
   },
   { 
    "x1":0, 
    "y1":0, 
    "x2":200, 
    "y2":200, 
    "stroke":"black", 
    "transform":"translate(300,300) rotate(360)",
   }, 
];

const dataCriticalyTextArea= [
  { 
   "y":60,
   "font_size":20,
   "font_weight":"bold",
   "font_family":"Avenir, Helvetica, sans-serif",
   "transform":"translate(50,50) rotate(0)",
   "text":"Technical",
  }, 
  { 
    "y":60,
    "font_size":20,
    "font_weight":"bold",
    "font_family":"Avenir, Helvetica, sans-serif",
    "transform":"translate(400,50) rotate(0)",
    "text":"Physical",
   }, 
   { 
    "y":60,
    "font_size":20,
    "font_weight":"bold",
    "font_family":"Avenir, Helvetica, sans-serif",
    "transform":"translate(50,440) rotate(0)",
    "text":"Intellectual",
   }, 
];

const dataCircleGreen= 
  { 
   "cx":300,
   "cy":300,
   "radio":80,
   "stroke":"black",
   "fill":"red",
   "fillOpacity":0.5,
  };


function App() {

  const {cx,cy,radio,stroke,fill,fillOpacity}=dataCircleGreen;

  const [r,onChange]=useState(radio);

  useEffect(()=>{
      const ele = document.querySelector('.buble');
      if (ele) {
        ele.style.left = `${Number(r / 4)}px`;
      }
    });

    return (
    <div >
      <svg width={width} height={height}>
        {dataCircle.map((element)=>{
          return (
            <Circle params={element}></Circle>
          )
        })}
        {dataLine.map((element)=>{
          return (
            <Line params={element} />
          )
        })}
        {dataCriticalyTextArea.map((element)=>{
          return (
            <CriticalyAreaText params={element} />
          )
        })}
        <CircleGreen cx={cx}cy={cy}radio={r}stroke={stroke}fill={fill} fillOpacity={fillOpacity}></CircleGreen>
      </svg>

      <div>
        <div className="slider-parent">
            <input type="range" min={1} max={200} value={r}
                onChange={({ target: { value: radius } }) => {
                            onChange(radius);
                            console.log(radius);
                        }}
            />
            <div className="buble"> 
                {r}
            </div>
        </div>
  
    </div>
  </div>
  );
}

export default App;
