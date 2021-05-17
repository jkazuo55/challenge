// import React,{useState,useEffect} from "react";
// import './Circle.css';

function Circle({cx,cy,radio,stroke,fill,fillOpacity}) {

    // const {width,height,cx,cy,radio,stroke,fill,fillOpacity}=params;
    // const [r,onChange]=useState(radio);

    // useEffect(()=>{
    //     const ele = document.querySelector('.buble');
    //   if (ele) {
    //     ele.style.left = `${Number(r / 4)}px`;
    //   }
    // });

  return (
    <>
        {/* <svg width={width} height={height} > */}
            <circle
                stroke={stroke} 
                fill={fill}
                fillOpacity={fillOpacity}
                cx={cx}
                cy={cy}
                r={radio}
            ></circle>
        {/* </svg>         */}
        {/* <div className="slider-parent">
            <input type="range" min={1} max={100} value={r}
                onChange={({ target: { value: radius } }) => {
                            onChange(radius);
                            console.log(radius);
                        }}
            />
            <div className="buble"> 
                {r}
            </div>
        </div> */}
  
    </>
  );
}

export default Circle;