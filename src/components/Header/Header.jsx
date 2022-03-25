import React, { useState } from "react";
import MainMenu from "../MainMenu/MainMenu";
import SocialMenu from "../SocialMenu/SocialMenu";
const Header = () => {
  const [isNotDisplay, setDisplay] = useState({ display: "none" });
  const [isDisplay, setNotDisplay] = useState({ display: "block" });
  return (
    <header>
      <nav className="header__nav">
        <a className="header__logo" href="/">
          <img src="/" alt="logo" width="126" height="23" />
        </a>
        <button
          className="header__burger"
          type="button"
          aria-label="открыть меню"
          style={isDisplay}
          onClick={() => {
            setNotDisplay({ display: "none" });
            setDisplay({ display: "block" });
          }}
        ></button>
        <div className="main-menu" style={isNotDisplay}>
          <p className="main-menu__title">{">"}меню</p>
          <button
            className="main-menu__close"
            type="button"
            aria-label="закрыть меню"
            onClick={() => {
              setDisplay({ display: "none" });
              setNotDisplay({ display: "block" });
            }}
          ></button>
          <ul className="main-menu__list">
            <MainMenu text="_посты" />
            <MainMenu text="_категории" />
            <MainMenu text="_полезное" />
            <MainMenu text="_обо мне" />
          </ul>
          <ul className="social-menu">
            <SocialMenu
              className="social-menu__link social-menu__link--instagram"
              aria="instagram"
            />
            <SocialMenu
              className="social-menu__link social-menu__link--vk"
              aria="vk"
            />
            <SocialMenu
              className="social-menu__link social-menu__link--twitter"
              aria="twitter"
            />
            <SocialMenu
              className="social-menu__link social-menu__link--youtube"
              aria="youtube"
            />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
