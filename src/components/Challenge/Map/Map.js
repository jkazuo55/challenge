import React, {useLayoutEffect,useState,useEffect } from 'react'
import * as d3 from 'd3';
import './Map.css';


function Map({params}) {
    const {width_map,height_map}=params;
    const dots=
    [
        {
            "name": "Criticality",
            "children":  //[j]
            [
                {
                    "name": "Technical",
                    "degrees":120,
                    "children": 
                    [
                        {
                            "name": "dots",
                            "children": 
                            [
                                {
                                    "name": "technical1",
                                    "children": 
                                    [
                                        {"name": "technical1", "id":1,"critically":100, "type":"technical"},
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Intellectual",
                    "degrees":120,
                    "children": 
                    [
                        {
                            "name": "dots",
                            "children": 
                            [
                                {
                                    "name": "intellectual1",
                                    "children": 
                                    [
                                        {"name": "intellectual1", "id":1,"critically":10, "type":"intellectual"},
                                    ]
                                },
                                {
                                    "name": "intellectual2",
                                    "children": 
                                    [
                                        {"name": "intellectual2", "id":2,"critically":20, "type":"intellectual"},
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Physical",
                    "degrees":120,
                    "children": 
                    [
                        {
                            "name": "dots",
                            "children": 
                            [
                                {
                                    "name": "physical11111",
                                    "children": 
                                    [
                                        {"name": "physical1", "id":1,"critically":10, "type":"physical"},
                                    ]
                                },
                                {
                                    "name": "physical2222",
                                    "children": 
                                    [
                                        {"name": "physical2", "id":1,"critically":20, "type":"physical"},
                                    ]
                                },
                                {
                                    "name": "physical3333",
                                    "children": 
                                    [
                                        {"name": "physical3", "id":1,"critically":30, "type":"physical"},
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
    ]

    const dataCircleGreen= { 
        "cx":0,
        "cy":0,
        "radio":100,
        "stroke":"green",
        "fill":"red",
        "fillOpacity":0.005,
    };

    const {cx,cy,radio,stroke,fill,fillOpacity}=dataCircleGreen;
    const [r,onChange]=useState(radio);


    const arcGenerator = d3.arc()
        .innerRadius(0)
        .outerRadius(250);
    
    const pieGenerator = d3.pie()
	    .value(function(d) {
            return d.degrees;
        })
	    .sort(function(a, b) {
            return a.name.localeCompare(b.name);
	    });
    
    const arcData = pieGenerator(dots[0].children);

    const degressGenerate=(min , max)=>{
        let degress=0;
        if(max > 360){
            degress=Math.floor((Math.random() * (max - min + 1)) + min);
            if(degress > 360){
                degress= degress - 360;
            }
            return degress;
        }else{
            return  Math.floor((Math.random() * (max - min + 1)) + min)
        }
    }

    const findNewPoint = (x, y, degress, distance) => {
        let result = {};
        result.x = Math.round(Math.cos(degress * Math.PI / 180) * distance + x);
        result.y = Math.round(Math.sin(degress * Math.PI / 180) * distance + y);
        return result;
    }

    useLayoutEffect(()=>{

        d3.select(".map") 
        .append("svg")
        .attr("width", width_map)
        .attr("height", height_map)
        .append("g")
        .attr("transform", "translate(" + width_map / 2 + "," + height_map / 2 + ")")
        .style("background", "#d9edf7")
        .selectAll('path')
	    .data(arcData)
	    .enter()
	    .append('path')
	    .attr('d', arcGenerator);



        for(let j=0;j<dots[0].children.length;j++){
            for(let m=0;m<dots[0].children[j].children.length;m++){
                for(let n=0;n<dots[0].children[j].children[m].children.length;n++){
                    d3.select('g')
                    .selectAll('circle')
                    .data(dots[0].children[j].children[m].children[0].children)
                    .enter()
                    .append('circle')
                    .attr("r",10)
                    .attr("fill","black")
                    .attr("cx", (d)=>{
                        return findNewPoint(0,0,degressGenerate(270,390),d.critically).x
                    })
                    .attr("cy",(d)=>{
                        return findNewPoint(0,0,degressGenerate(270,390),d.critically).y
                    })
                }
            }
        }

        d3.select('g')
        .append('circle')
        .attr("stroke",stroke)
        .attr("fill",fill)
        .attr("fill-opacity",fillOpacity)
        .attr("cx",cx)
        .attr("cy",cy)
        .attr("r",r)
        .attr("class", "green_circle");
            
    },[]);
    
    useEffect(()=>{
        d3.select('.green_circle')
        .attr("r",r);
        
    },[r])

  return (
    <>
    <div className="map" >

    </div>
    
    <div className="slider-parent">
        <input type="range" min={1} max={250} value={r}
            onChange={({ target: { value: radius } }) => {
                        onChange(radius);
                    }}
        />
        <div className="buble"> 
            {r}
        </div>
    </div>
  </>
  );
}

export default Map;
