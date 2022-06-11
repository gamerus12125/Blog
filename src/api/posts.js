import { API_URL } from "../constans/api";

const getAdaptedPostsData = (data) =>
  data.map((item) => ({
    id: item.id,
    title: item.attributes.title,
    epigraph: item.attributes.epigraph,
    content: item.attributes.content,
    date: item.attributes.publishedAt,
    desktopImage: item.attributes.desktop.data.attributes.url,
    mobileImage: item.attributes.mobile.data.attributes.url,
  }));

export const getPosts = async () => {
  try {
    const response = await fetch(`${API_URL}/posts?populate=*`);
    const data = await response.json();

    const posts = data.data ? getAdaptedPostsData(data.data) : data;
    return posts;
  } catch (err) {
    console.error(err);
  }
};
