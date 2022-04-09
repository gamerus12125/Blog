import React from "react";
import styles from "../Footer/Footer.module.css";
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.footer__text}>
				&copy; _web.blog {new Date().getFullYear()}
			</p>
		</footer>
	);
};
export default Footer;
