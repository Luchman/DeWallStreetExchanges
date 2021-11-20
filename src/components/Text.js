import React from "react";
import styles from "../styles/components/text.module.css";

const Text = (props) => {
  const {
    component,
    children,
    variant,
    onClick,
    style
  } = props;

  // const primaryStyles = {
  // };

  // const secondaryStyles = {
  //   fontFamily: fontFamily,
  //   fontSize: fontSize,
  //   letterSpacing: letterSpacing,
  //   textShadow: textShadow,
  //   cursor: cursor,
  //   ...style,
  //   className: className,
  // };

  // const errorStyles = {
  //   fontFamily: fontFamily || "Gilroy-Medium",
  //   fontSize: fontSize || "86.9px",
  //   lineHeight: lineHeight || "18px",
  //   letterSpacing: "-0.04em",
  //   color: "red",
  //   ...style,
  // };

  // const defaultStyles = {
  //   fontFamily: "Gilroy-Medium",
  //   fontSize: fontSize || "14px",
  //   lineHeight: lineHeight || "18px",
  //   letterSpacing: "0.03em",
  //   color: "#ffffff",
  //   textShadow: textShadow || "0px 4px 4px rgba(0, 0, 0, 0.25)",
  //   ...style,
  // };

  const getClassName = () => {
    switch (variant) {
      case "primary":
        return styles.primaryStyles;
      case "secondary":
        return styles.secondaryStyles;
      case "error":
        return styles.error;
      case "poor":
        return styles.poorStyles;
      case "warning":
        return styles.warning;
      case "content":
        return styles.contentStyles;
      case "heading":
        return styles.headingStyles;  
       case "semi-head":
        return styles.semiStyle 
      default:
        return styles.defaultStyles;
    }
  };

  switch (component) {
    case "text":
      return (
        <text className={getClassName()} style={style} onClick={onClick}>
          {children}
        </text>
      );
    case "span":
      return (
        <span className={getClassName()} style={style} onClick={onClick}>
          {children}
        </span>
      );
    default:
      return (
        <p className={getClassName()} style={style} onClick={onClick}>
          {children}
        </p>
      );
  }
};

export default Text;
