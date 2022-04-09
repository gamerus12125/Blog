import React from "react";
import styles from "./Posts.module.css";
import { POSTS } from "./store";
const Posts = () => {
	return (
		<section className={styles.posts}>
			<h2 className={styles.posts__title}>_новые посты</h2>
			<ul className={styles.posts__list}>
				{POSTS.map(
					({ id, title, content, date, image, number, imageMob, alt }) => (
						<li key={id} className={styles.posts__item}>
							<div className={styles.posts__heading}>
								<h3>{title}</h3>
								<time className={styles.posts__date} dateTime={date}>
									{date.toDateString()}
								</time>
							</div>
							<div className={styles.posts__content}>
								<picture className={styles.picture}>
									<source media="(min-width: 768px)" srcSet={image} />
									<img
										className={styles.posts__image}
										src={imageMob}
										alt={alt}
										width="115"
										height="115"
									/>
								</picture>
								<p className={styles.posts__text}>{content}</p>
								<span className={styles.posts__number}>{number} </span>
							</div>
						</li>
					)
				)}
			</ul>
			<a className={styles.posts__more} href="/">
				остальные...
			</a>
		</section>
	);
};
export default Posts;
