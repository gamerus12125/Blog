import React from "react";
import styles from "../Footer/Footer.module.css";
let year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>&copy; _web.blog {year}</p>
    </footer>
  );
};
export default Footer;
