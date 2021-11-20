import React from "react";

const Div = (props) => {
  const {
    children,
    variant,
    onClick,
  } = props;


 const dropDown={
     fontFamily:"Gilroy-Medium",
     fontSize:"18px",
     color:"pink",
     cursor:"pointer"
 }



  const styles = () => {
    if(variant==="drop-down"){
    return dropDown;
    }
  };

  
      return (
        <div style={styles()} onClick={onClick}>
          {children}
        </div>
      );
  
};

export default Div;