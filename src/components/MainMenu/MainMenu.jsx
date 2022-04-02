import React from "react";
import styles from "../MainMenu/MainMenu.module.css"
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
