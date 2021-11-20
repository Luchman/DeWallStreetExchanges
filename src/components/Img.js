import React from "react";

const Text = (props) => {
  const {
    children,
    variant,
    src,
  } = props;

 const depeopleStyles={
     width:"239.4px",
     height:"197.16px", 
     alt:"alt",
 }

 const coinStyle={
     width:"139px",
     height:"128px",
     alt:"alt",

 }

 const dewallstreetStyle={
     width:"310px",
     height:"153.22px",
     margin:"0 7vw",
     alt:"alt",

 }

 const mini_arrow={
     width:"6px",
     height:"12px",
     marginLeft:"15px",
     alt:"alt",
 }

  const styles = () => {
    if (variant === "depeople") {
      return depeopleStyles;
    }
    if(variant==="coin"){
        return coinStyle
    }
    if(variant==="dewallstreet"){
        return dewallstreetStyle
    }
    if(variant==="miniarrow"){
        return mini_arrow
    }

  };

 
      return (
        <img style={styles()} src={src} alt="style">
          {children}
        </img>
      );
  
};

export default Text;