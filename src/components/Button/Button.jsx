import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <button className={styles.btn} style={{ display: props.display }}>
      {" "}
      {props.text}{" "}
    </button>
  );
};
export default Button;
