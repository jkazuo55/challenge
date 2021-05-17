function Circle({params}) {
  const {cx,cy,radio,stroke,fill,fillOpacity,stroke_dasharray}=params;
  return (
    <>
      <circle
          stroke={stroke} 
          fill={fill}
          fillOpacity={fillOpacity}
          cx={cx}
          cy={cy}
          r={radio}
          stroke-dasharray={stroke_dasharray}
      ></circle>
    </>
  );
}

export default Circle;