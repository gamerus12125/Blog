import { API_URL } from "../constans/api";

const getCategoriesData = (data) =>
  data.map((item) => ({
    id: item.id,
    title: item.attributes.title,
    uid: item.attributes.uid,
  }));

export const getCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/categories?populate=*`);
    const data = await response.json();

    const categories = data.data ? getCategoriesData(data.data) : data;
    return categories;
  } catch (err) {
    console.error(err);
  }
};
