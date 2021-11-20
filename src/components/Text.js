import React from "react";
import styles from "../styles/components/text.module.css";

const Text = (props) => {
  const {
    className,
    component,
    children,
    variant,
    fontSize,
    lineHeight,
    onClick,
    textShadow,
    fontFamily,
    letterSpacing,
    cursor,
    ...style
  } = props;

  const primaryStyles = {
    ...style,
  };

  const secondaryStyles = {
    fontFamily: fontFamily,
    fontSize: fontSize,
    letterSpacing: letterSpacing,
    textShadow: textShadow,
    cursor: cursor,
    ...style,
    className: className,
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
        return styles.secondaryStyles;
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
