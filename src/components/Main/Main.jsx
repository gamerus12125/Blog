import react from "react";
const Main = () => {
  return (
    <main className="content">
      <h1 className="visually-hidden">web blog</h1>
      <section className="profile">
        <h2 className="visually-hidden">Обо мне</h2>
        <img
          className="profile-image"
          src="/images/profile.jpg"
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
              <time datetime="2001-05-15 19:00">11.09.2021</time>
            </div>
            <div className="posts__content">
              <img
                src="images/post-1.jpg"
                alt="js logo"
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
          <li className="posts__item">
            <div className="posts__heading">
              <h3>Время практики</h3>
              <time datetime="2001-05-15 19:00">10.09.2021</time>
            </div>
            <div className="posts__content">
              <img
                src="images/post-2.jpg"
                alt="ноутбук на столе"
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
          <li className="posts__item">
            <div className="posts__heading">
              <h3>Лето заканчивается</h3>
              <time datetime="2001-05-15 19:00">20.08.2021</time>
            </div>
            <div className="posts__content">
              <img
                src="images/post-3.jpg"
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
    </main>
  );
};

export default Main;
