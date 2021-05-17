
function CriticalyAreaText({params}) {

    const {y,font_size,font_weight,font_family,transform,text}=params;
    return (
      <>
        <text
            y={y}
            font-size={font_size}
            font-weight={font_weight}
            font-family={font_family}
            transform={transform}
        >{text}</text>
      </>
    );
  }
  
  export default CriticalyAreaText;