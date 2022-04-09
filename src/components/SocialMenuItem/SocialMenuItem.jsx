import React from "react";
import styles from "./SocialMenuItem.module.css";
const SocialMenuItem = (props) => {
	return (
		<li className={styles.SocialMenu__item}>
			<a className={props.className} href={props.href} aria-label={props.aria}>
				{props.children}
			</a>
		</li>
	);
};
export default SocialMenuItem;
