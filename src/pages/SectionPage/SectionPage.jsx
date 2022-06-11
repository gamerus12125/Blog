import React from "react";
import Categories from "../../components/Categories";
import { useFetchData } from "../../hooks/UseFetchData";
import { getPosts } from "../../api/posts";
const SectionPage = () => {
  const {
    data: posts,
    isLoading: isLoadingPosts,
    isError: isErrorPosts,
  } = useFetchData(getPosts);
  if (isLoadingPosts) return <p>Loading...</p>;
  if (isErrorPosts) return <p>Error</p>;
  return <Categories posts={posts} />;
};
export default SectionPage;
