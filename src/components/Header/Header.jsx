import React from "react";
const Header = () => {
  return (
    <header>
      <nav className="header__nav">
        <a className="header__logo" href="/">
          <img src="../../images/logo.png" alt="logo" width="126" height="23" />
        </a>
        <button
          className="header__burger"
          type="button"
          aria-label="открыть меню"
        ></button>
        <div className="main-menu">
          <p className="main-menu__title">{">"}меню</p>
          <button
            className="main-menu__close"
            type="button"
            aria-label="закрыть меню"
          ></button>
          <ul className="main-menu__list">
            <li className="main-menu__item">
              <a className="main-menu__link" href="/">
                _посты
              </a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" href="/">
                _категории
              </a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" href="/">
                _полезное
              </a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" href="/">
                _обо мне
              </a>
            </li>
          </ul>

          <ul className="social-menu">
            <li className="social-menu__item">
              <a
                className="social-menu__link social-menu__link--instagram"
                href="/"
                aria-label="instagram"
              ></a>
            </li>
            <li className="social-menu__item">
              <a
                className="social-menu__link social-menu__link--vk"
                href="/"
                aria-label="vk"
              ></a>
            </li>
            <li className="social-menu__item">
              <a
                className="social-menu__link social-menu__link--twitter"
                href="/"
                aria-label="twitter"
              ></a>
            </li>
            <li className="social-menu__item">
              <a
                className="social-menu__link social-menu__link--youtube"
                href="/"
                aria-label="youtube"
              ></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
