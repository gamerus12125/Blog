import React, { useState } from "react";
import MainMenu from "../MainMenu/MainMenu";
import SocialMenu from "../SocialMenu/SocialMenu";
import styles from "../Header/Header.module.css";
import logo from "../../images/logo.png"
import cn from "classnames"
const Header = () => {
  const [isNotDisplay, setDisplay] = useState({ display: "" });
  const [isDisplay, setNotDisplay] = useState({ display: "" });
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <a className= {styles.header__logo} href="/">
          <img src={logo} alt="logo" width="126" height="23" />
        </a>
        <button
          className={styles.header__burger}
          type="button"
          aria-label="открыть меню"
          style={isDisplay}
          onClick={() => {
            setNotDisplay({ display: "none" });
            setDisplay({ display: "block" });
          }}
        ></button>
        <div className={styles.MainMenu} style={isNotDisplay}>
          <p className={styles.MainMenu__title}>{">"}меню</p>
          <button
            className={styles.MainMenu__close}
            type="button"
            aria-label="закрыть меню"
            onClick={() => {
              setDisplay({ display: "none" });
              setNotDisplay({ display: "block" });
            }}
          ></button>
          <ul className={styles.MainMenu__list}>
            <MainMenu text="_посты" />
            <MainMenu text="_категории" />
            <MainMenu text="_полезное" />
            <MainMenu text="_обо мне" />
          </ul>
          <ul className={styles.SocialMenu}>
            <SocialMenu
              className={cn(styles.SocialMenu__link, styles.SocialMenu__link__instagram)}
              aria="instagram"
            />
            <SocialMenu
              className={cn(styles.SocialMenu__link, styles.SocialMenu__link__vk)}
              aria="vk"
            />
            <SocialMenu
              className={cn(styles.SocialMenu__link, styles.SocialMenu__link__twitter)}
              aria="twitter"
            />
            <SocialMenu
              className={cn(styles.SocialMenu__link, styles.SocialMenu__link__youtube)}
              aria="youtube"
            />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
