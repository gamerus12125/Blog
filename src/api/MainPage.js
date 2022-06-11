import { API } from "../constans/api";

export const getPost = async (postId) => {
  try {
    const response = await fetch(`${API}/posts/${postId}?populate=*`);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};
