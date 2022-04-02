import React from "react";
import styles from "../Profile/Profile.module.css"
import profile from "../../images/profile.jpg"
import profileMob from "../../images/profile@mob.jpg"
const Profile = () => {
    return (
    <section className={styles.profile}>
    <h2 className="visually-hidden">Обо мне</h2>
    <picture >
      <source media="(max-width: 767px)" srcSet={profileMob}/>
    <img
      className={styles.ProfileImage}
      src={profile}
      alt="Николай"
    />
    </picture>
    <p className={styles.profile__text}>
      <span className={styles.profile__item}>Привет!</span>
      <span className={styles.profile__item}>Меня зовут Николай.</span>
      <span className={styles.profile__item}>
        Я верстальщик, и начинающий фронтенд-разработчик.
      </span>
      <span className={styles.profile__item}>
        Это мой блог, где я буду делиться своими мыслями относительно
        веб-разработки
      </span>
    </p>
  </section>
  )
}
export default Profile;