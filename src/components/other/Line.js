
function Line({params}) {
    const {x1,y1,x2,y2,stroke,transform}=params;
    return (
      <>
        <line
            x1={x1} 
            y1={y1} 
            x2={x2} 
            y2={y2} 
            stroke={stroke} 
            transform={transform}
        ></line>
      </>
    );
  }
  
  export default Line;