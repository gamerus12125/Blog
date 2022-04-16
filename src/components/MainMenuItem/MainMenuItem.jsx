import React from "react";
import styles from "./MainMenuItem.module.css";
import { Link } from "react-router-dom";
const MainMenuItem = (props) => {
  return (
    <li className={styles.MainMenu__item}>
      <Link className={styles.MainMenu__link} to={props.link}>
        {props.text}
      </Link>
    </li>
  );
};
export default MainMenuItem;
