import React from "react";
import styles from "./MainMenuItem.module.css";
const MainMenuItem = (props) => {
	return (
		<li className={styles.MainMenu__item}>
			<a className={styles.MainMenu__link} href="/">
				{props.text}
			</a>
		</li>
	);
};
export default MainMenuItem;
