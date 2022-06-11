import React from "react";
import styles from "./Categories.module.css";
import { getCategories } from "../../api/categories";
import { useFetchData } from "../../hooks/UseFetchData";
import Posts from "../Posts";
const Categories = ({ posts }) => {
  const {
    data: categories,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
  } = useFetchData(getCategories);
  if (isLoadingCategories) return <p></p>;
  if (isErrorCategories) return <p>Error</p>;
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.title}>Категории</h1>
        <ul className={styles.filter}>
          {categories.map(({ id, title, uid }) => (
            <button key={id} id={uid} className={styles.filter__button}>
              {title}
            </button>
          ))}
        </ul>
        <h3 className={styles.search__title}>поиск:</h3>
        <input type="search" className={styles.search} />
      </section>
      <Posts posts={posts} hasNumber={true} />
    </>
  );
};
export default Categories;
