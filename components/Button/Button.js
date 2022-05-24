import React from "react";
import styles from "./Button.module.css";

const Button = ({ text = "Click Me", destination = "#" }) => {
  return (
    <a href={destination} className={styles.button}>
      {text}
    </a>
  );
};

export default Button;
