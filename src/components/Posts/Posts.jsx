import React from "react";
import styles from "./Posts.module.css";
import Image from "../Image";
import { marked } from "marked";
import cn from "classnames";
const Posts = ({ posts, isMarkedFirstPost, hasNumber }) => {
  if (!posts && !posts?.length) return <p>No posts</p>;
  const formatDate = (string) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  };
  return (
    <section className={styles.posts}>
      <ul className={styles.posts__list}>
        {posts.map(
          ({ id, title, epigraph, date, desktopImage, mobileImage }) => (
            <li
              key={id}
              className={cn(styles.posts__item, {
                [styles.posts__item__blue]: isMarkedFirstPost && id === 1,
              })}
            >
              <div
                className={cn(styles.posts__heading, {
                  [styles.posts__heading__white]: isMarkedFirstPost && id === 1,
                })}
              >
                <h3
                  className={cn(styles.posts__title, {
                    [styles.posts__title__white]: isMarkedFirstPost && id === 1,
                  })}
                >
                  {title}
                </h3>
                <time
                  className={cn(styles.posts__date, {
                    [styles.posts__date__white]: isMarkedFirstPost && id === 1,
                  })}
                  dateTime={date}
                >
                  {formatDate(date)}
                </time>
              </div>
              <div className={styles.posts__content}>
                <Image
                  className={cn(styles.posts__image, {
                    [styles.posts__image__white]: isMarkedFirstPost && id === 1,
                  })}
                  alt={title}
                  desktopImage={desktopImage}
                  mobileImage={mobileImage}
                />
                <p
                  className={cn(styles.posts__text, {
                    [styles.posts__text__white]: isMarkedFirstPost && id === 1,
                  })}
                  dangerouslySetInnerHTML={{ __html: marked.parse(epigraph) }}
                ></p>
                <span
                  className={cn(styles.posts__number, {
                    [styles.posts__number__white]:
                      isMarkedFirstPost && id === 1,
                    [styles.posts__number__none]: hasNumber,
                  })}
                >
                  {id}{" "}
                </span>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
};
export default Posts;
