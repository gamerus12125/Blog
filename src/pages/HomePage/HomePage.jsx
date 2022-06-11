import React from "react";
import Posts from "../../components/Posts";
import Profile from "../../components/Profile";
import Button from "../../components/Button";
import { useFetchData } from "../../hooks/UseFetchData";
import { getPosts } from "../../api/posts";
import styles from "./HomePage.module.css";
const HomePage = () => {
  const {
    data: posts,
    isLoading: isLoadingPosts,
    isError: isErrorPosts,
  } = useFetchData(getPosts);
  if (isLoadingPosts) return <p>Loading...</p>;
  if (isErrorPosts) return <p>Error</p>;

  return (
    <>
      <Profile />
      <h2 className={styles.posts__title}>_новые посты</h2>
      <Posts posts={posts} />
      <Button text="остальные..." display="block" />
    </>
  );
};
export default HomePage;
