import React, { useState } from "react";
import MainMenuItem from "../MainMenuItem";
import SocialMenuItem from "../SocialMenuItem";
import styles from "./Header.module.css";
import logo from "../../images/logo.png";
import cn from "classnames";
import { Link } from "react-router-dom";
//import { SOCIAL_MENU } from "./store";
import { useFetchData } from "../../hooks/UseFetchData";
import { getMenu } from "../../api/menu";
import { getSocials } from "../../api/socials";
const Header = () => {
  const [isActive, setActive] = useState(false);
  const {
    data: menu,
    isLoading: isLoadingMenu,
    isError: isErrorMenu,
  } = useFetchData(getMenu);
  const {
    data: social,
    isLoading: isLoadingSocial,
    isError: isErrorSocial,
  } = useFetchData(getSocials);
  if (isLoadingSocial) return <p></p>;
  if (isErrorSocial) return <p>Error</p>;
  if (isLoadingMenu) return <p></p>;
  if (isErrorMenu) return <p>Error</p>;
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
            {menu.map(({ id, title, slug }) => (
              <MainMenuItem key={id} text={title} link={slug} />
            ))}
          </ul>
          <ul className={styles.SocialMenu}>
            {social.map(({ id, title, link, icon }) => (
              <SocialMenuItem
                key={id}
                className={styles.SocialMenu__link}
                href={link}
                aria={title}
              >
                <img src={icon} />
              </SocialMenuItem>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
