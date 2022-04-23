import React, { useState } from "react";
import MainMenuItem from "../MainMenuItem";
import SocialMenuItem from "../SocialMenuItem";
import styles from "./Header.module.css";
import logo from "../../images/logo.png";
import cn from "classnames";
import { Link } from "react-router-dom";
import { MENU, SOCIAL_MENU } from "./store";
const Header = () => {
  const [isActive, setActive] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link className={styles.header__logo} to="/">
          <img src={logo} alt="logo" width="126" height="23" />
        </Link>
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
            {MENU.map(({ id, title, href }) => (
              <MainMenuItem key={id} text={title} link={href} />
            ))}
          </ul>
          <ul className={styles.SocialMenu}>
            {SOCIAL_MENU.map(({ id, title, href, IconComponent }) => (
              <SocialMenuItem
                key={id}
                className={styles.SocialMenu__link}
                href={href}
                aria={title}
              >
                <IconComponent className={styles.icon} />
              </SocialMenuItem>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
