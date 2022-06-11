import React from "react";
import styles from "./MainMenuItem.module.css";
import { NavLink } from "react-router-dom";
import cn from "classnames";
const MainMenuItem = (props) => {
  return (
    <li className={styles.MainMenu__item}>
      <NavLink
        className={({ isActive }) => {
          return cn(styles.MainMenu__link, {
            [styles.MainMenu__link__active]: isActive,
          });
        }}
        to={props.link}
      >
        {props.text}
      </NavLink>
    </li>
  );
};
export default MainMenuItem;
