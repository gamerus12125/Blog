import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import "./styles/main.css";
const App = () => {
  return (
    <>
      <Header />
      <Main title="web blog">
        <section className="profile">
          <h2 className="visually-hidden">Обо мне</h2>
          <img
            className="profile-image"
            src="/"
            alt="Николай"
            width="115"
            height="115"
          />
          <p className="profile__text">
            <span className="profile__item">Привет!</span>
            <span className="profile__item">Меня зовут Николай.</span>
            <span className="profile__item">
              Я верстальщик, и начинающий фронтенд-разработчик.
            </span>
            <span className="profile__item">
              Это мой блог, где я буду делиться своими мыслями относительно
              веб-разработки
            </span>
          </p>
        </section>
        <section className="posts">
          <h2 className="posts__title">_новые посты</h2>
          <ul className="posts__list">
            <li className="posts__item">
              <div className="posts__heading">
                <h3>Начинаю изучать Javascript</h3>
                <time dateTime="2001-05-15 19:00">11.09.2021</time>
              </div>
              <div className="posts__content">
                <img src="/" alt="js logo" width="115" height="115" />
                <p>
                  Задача организации, в особенности же консультация с широким
                  активом позволяет выполнять важные задания по разработке форм
                  развития. Повседневная практика показывает, что новая модель
                  организационной деятельности представляет собой интересный
                  эксперимент проверки систем массового участия.
                </p>
              </div>
            </li>
            <li className="posts__item">
              <div className="posts__heading">
                <h3>Время практики</h3>
                <time dateTime="2001-05-15 19:00">10.09.2021</time>
              </div>
              <div className="posts__content">
                <img src="/" alt="ноутбук на столе" width="115" height="115" />
                <p>
                  Задача организации, в особенности же консультация с широким
                  активом позволяет выполнять важные задания по разработке форм
                  развития. Повседневная практика показывает, что новая модель
                  организационной деятельности представляет собой интересный
                  эксперимент проверки систем массового участия.
                </p>
              </div>
            </li>
            <li className="posts__item">
              <div className="posts__heading">
                <h3>Лето заканчивается</h3>
                <time dateTime="2001-05-15 19:00">20.08.2021</time>
              </div>
              <div className="posts__content">
                <img
                  src="/"
                  alt="солнечные очки лежат на песке на пляже"
                  width="115"
                  height="115"
                />
                <p>
                  Задача организации, в особенности же консультация с широким
                  активом позволяет выполнять важные задания по разработке форм
                  развития. Повседневная практика показывает, что новая модель
                  организационной деятельности представляет собой интересный
                  эксперимент проверки систем массового участия.
                </p>
              </div>
            </li>
          </ul>
          <a className="posts__more" href="/">
            остальные...
          </a>
        </section>
      </Main>
      <Footer text="&copy; _web.blog 2021" />
    </>
  );
};

export default App;
