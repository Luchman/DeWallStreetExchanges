import React from "react";

const Button = (props) => {
  const {
    children,
    fontSize,
    style,
    onClick,
    color,
    fontFamily   
  } = props;


  const defaultStyles = {
    fontFamily: fontFamily || "Gilroy-Regular",
    fontSize: fontSize || "18px",
    color: color ||"rgba(89, 157, 255, 0.8)",
    backgroundColor: "#ffffff",
    cursor:"pointer",
    border:"0px",
    width:"150px",
    height:"34px",
    ...style,
  };

 


  const styles = () => {
    
    return defaultStyles;
  };

  
      return (
        <button style={styles()} onClick={onClick}>
          {children}
        </button>
      );
  
};

export default Button;