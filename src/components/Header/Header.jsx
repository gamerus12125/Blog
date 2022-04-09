import React, { useState } from "react";
import MainMenu from "../MainMenu";
import SocialMenu from "../SocialMenu";
import styles from "./Header.module.css";
import logo from "../../images/logo.png";
import cn from "classnames";
const Menu = [
  {
    id: 1,
    text: "_посты",
  },
  {
    id: 2,
    text: "_категории",
  },
  {
    id: 3,
    text: "_полезное",
  },
  {
    id: 4,
    text: "_обо мне",
  },
];
const Header = () => {
  const [isActive, setActive] = useState(false);
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <a className={styles.header__logo} href="/">
          <img src={logo} alt="logo" width="126" height="23" />
        </a>
        <button
          className={cn(styles.header__burger, {
            [styles.header__burger__active]: isActive,
          })}
          type="button"
          aria-label="открыть меню"
          onClick={() => setActive(true)}
        />
        <div
          className={cn(styles.MainMenu, {
            [styles.MainMenu__active]: isActive,
          })}
        >
          <p className={styles.MainMenu__title}>&gt; меню</p>
          <button
            className={styles.MainMenu__close}
            type="button"
            aria-label="закрыть меню"
            onClick={() => setActive(false)}
          />
          <ul className={styles.MainMenu__list}>
            {Menu.map(({ id, text }) => (
              <MainMenu key={id} text={text} />
            ))}
          </ul>
          <ul className={styles.SocialMenu}>
            <SocialMenu
              className={cn(
                styles.SocialMenu__link,
                styles.SocialMenu__link__instagram
              )}
              aria="instagram"
            />
            <SocialMenu
              className={cn(
                styles.SocialMenu__link,
                styles.SocialMenu__link__vk
              )}
              aria="vk"
            />
            <SocialMenu
              className={cn(
                styles.SocialMenu__link,
                styles.SocialMenu__link__twitter
              )}
              aria="twitter"
            />
            <SocialMenu
              className={cn(
                styles.SocialMenu__link,
                styles.SocialMenu__link__youtube
              )}
              aria="youtube"
            />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
