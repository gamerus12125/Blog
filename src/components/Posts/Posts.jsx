import React from "react";
import styles from "../Posts/Posts.module.css"
import jsLogo from "../../images/post-1.jpg"
import laptop from "../../images/post-2.jpg"
import glasses from "../../images/post-3.jpg"
import jsLogoMob from "../../images/post-1@mob.jpg"
import laptopMob from "../../images/post-2@mob.jpg"
import glassesMob from "../../images/post-3@mob.jpg"
const POSTS = [
    {
        id: 1,
        title: "Начинаю изучать Javascript",
        image: jsLogo,
        imageMob: jsLogoMob,
        content: "Задача организации, в особенности же консультация с широким активом позволяет выполнять важные задания по разработке форм развития. Повседневная практика показывает, что новая модель организационной деятельности представляет собой интересный эксперимент проверки систем массового участия.",
        date: "2001-05-15 19:00",
        dateText: "10.09.2021",
        number: 1,
    },
    {
        id: 2,
        title: "Время практики",
        image: laptop,
        imageMob: laptopMob,
        content: "Задача организации, в особенности же консультация с широким активом позволяет выполнять важные задания по разработке форм развития. Повседневная практика показывает, что новая модель организационной деятельности представляет собой интересный эксперимент проверки систем массового участия.",
        date: "2001-05-15 19:00",
        dateText: "11.09.2021",
        number: 2,
    },
    {
        id: 3,
        title: "Лето заканчивается",
        image: glasses,
        imageMob: glassesMob,
        content: "Задача организации, в особенности же консультация с широким активом позволяет выполнять важные задания по разработке форм развития. Повседневная практика показывает, что новая модель организационной деятельности представляет собой интересный эксперимент проверки систем массового участия.",
        date: "2001-05-15 19:00",
        dateText: "20.08.2021",
        number: 3,
}
]
const Posts = () => {
    return(
        <section className={styles.posts}>
        <h2 className={styles.posts__title}>_новые посты</h2>
        <ul className={styles.posts__list}>
            {POSTS.map(({id,title,content,date,image,dateText,number,imageMob}) =>(
            <li key={id} className={styles.posts__item}>
          <div className={styles.posts__heading}>
            <h3>{title}</h3>
            <time className={styles.posts__date} dateTime={date}>{dateText}</time>
          </div>
          <div className={styles.posts__content}>
            <picture >
              <source media="(max-width: 767px)" srcSet={imageMob} />
            <img className={styles.posts__image} src={image} alt="js logo" width="115" height="115" />
            </picture>
            <p className={styles.posts__text}>
                {content}
            </p>
            <span className={styles.posts__number}>{number} </span>
          </div>
        </li>
            ))}
      </ul>
      <a className={styles.posts__more} href="/">
            остальные...
          </a>
      </section>
    )
}
export default Posts;