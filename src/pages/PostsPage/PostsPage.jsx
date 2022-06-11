import React from "react";
import Posts from "../../components/Posts";
import Button from "../../components/Button";
import { useFetchData } from "../../hooks/UseFetchData";
import { getPosts } from "../../api/posts";
import styles from "./PostsPage.module.css";
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
      <h2 className={styles.posts__title}>_новые посты</h2>
      <Posts posts={posts} isMarkedFirstPost={true} />
      <Button display="none" />
    </>
  );
};
export default HomePage;
