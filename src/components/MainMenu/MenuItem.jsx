import React from "react";
import styles from "./MenuItem.module.css";
const MainMenu = (props) => {
  return (
    <li className={styles.MainMenu__item}>
      <a className={styles.MainMenu__link} href="/">
        {props.text}
      </a>
    </li>
  );
};
export default MainMenu;
