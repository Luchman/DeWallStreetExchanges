import React from "react";

const Text = (props) => {
  const {
    component,
    children,
    variant,
    fontSize,
    lineHeight,
    style,
    onClick,
    textShadow,
    fontFamily,
    letterSpacing,
  } = props;

  const primaryStyles = {
    fontFamily: "Staatliches",
    fontSize: fontSize || "59.7px",
    textShadow:  textShadow||"0px 5.52942px 5.52942px rgba(0, 0, 0, 0.25)",
    letterSpacing: letterSpacing ||  "0.4px",
    color: "#ffffff",
    ...style,
  };

  const secondaryStyles = {
    fontFamily: fontFamily || "Gilroy-Bold",
    fontSize: fontSize || "86.9px",
    letterSpacing: letterSpacing || "-0.04em",
    color: "#ffffff",
    textShadow: textShadow || "0px 7.50275px 7.50275px rgba(0, 0, 0, 0.25)",
    ...style,
  };

  const errorStyles = {
    fontFamily:  fontFamily ||"Gilroy-Medium",
    fontSize: fontSize || "86.9px",
    lineHeight: lineHeight || "18px",
    letterSpacing: "-0.04em",
    color: "red",
    ...style,
  };


  const defaultStyles = {
    fontFamily: "Gilroy-Medium",
    fontSize: fontSize || "14px",
    lineHeight: lineHeight || "18px",
    letterSpacing: "0.03em",
    color: "#ffffff",
    textShadow: textShadow||"0px 4px 4px rgba(0, 0, 0, 0.25)",
    ...style,
  };

  const styles = () => {
    if (variant === "primary") {
      return primaryStyles;
    }
    if (variant === "secondary") {
      return secondaryStyles;
    }
    if(variant === "error"){
        return errorStyles
    }
    return defaultStyles;
  };

  switch (component) {
    case "text":
      return (
        <text style={styles()} onClick={onClick}>
          {children}
        </text>
      );
    case "div":
      return (
        <div style={styles()} onClick={onClick}>
          {children}
        </div>
      );
    default:
      return (
        <p style={styles()} onClick={onClick}>
          {children}
        </p>
      );
  }
};

export default Text;