import React from "react";
import styles from "../styles/components/Text.module.css";

const Text = (props) => {
  const {
    className,
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
    cursor,
  } = props;

  const primaryStyles = {
    fontFamily: "Staatliches",
    fontSize: fontSize || "59.7px",
    textShadow: textShadow || "0px 5.52942px 5.52942px rgba(0, 0, 0, 0.25)",
    letterSpacing: letterSpacing || "0.4px",
    color: "#ffffff",
    ...style,
  };

  const secondaryStyles = {
    fontFamily: fontFamily || "Gilroy-Bold",
    fontSize: fontSize || "86.9px",
    letterSpacing: letterSpacing || "-0.04em",
    color: "#ffffff",
    textShadow: textShadow || "0px 7.50275px 7.50275px rgba(0, 0, 0, 0.25)",
    cursor: cursor,
    className: className,
    ...style,
  };

  const errorStyles = {
    fontFamily: fontFamily || "Gilroy-Medium",
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
    textShadow: textShadow || "0px 4px 4px rgba(0, 0, 0, 0.25)",
    ...style,
  };

  const getClassName = () => {
    switch (variant) {
      case "primary":
        return styles.primaryStyles;
      case "secondary":
        return styles.primaryStyles;
      case "error":
        return styles.error;
      case "success":
        return styles.success;
      case "warning":
        return styles.warning;
      default:
        return defaultStyles;
    }
  };

  switch (component) {
    case "text":
      return (
        <text className={getClassName()} onClick={onClick}>
          {children}
        </text>
      );
    case "div":
      return (
        <div className={getClassName()} onClick={onClick}>
          {children}
        </div>
      );
    default:
      return (
        <p className={getClassName()} onClick={onClick}>
          {children}
        </p>
      );
  }
};

export default Text;
