import { API_URL } from "../constans/api";

const getAdaptedMenuData = (data) =>
  data.map((item) => ({
    id: item.id,
    title: item.attributes.title,
    slug: item.attributes.slug,
  }));

export const getMenu = async () => {
  try {
    const response = await fetch(`${API_URL}/menus?populate=*`);
    const data = await response.json();

    const menu = data.data ? getAdaptedMenuData(data.data) : data;
    return menu;
  } catch (err) {
    console.error(err);
  }
};
