import { API_URL } from "../constans/api";

const getAdaptedSocialsData = (data) =>
  data.map((item) => ({
    id: item.id,
    title: item.attributes.title,
    link: item.attributes.link,
    iconMD: item.attributes.iconMD,
    icon: item.attributes.icon.data.attributes.url,
  }));

export const getSocials = async () => {
  try {
    const response = await fetch(`${API_URL}/socials?populate=*`);
    const data = await response.json();

    const socials = data.data ? getAdaptedSocialsData(data.data) : data;
    return socials;
  } catch (err) {
    console.error(err);
  }
};
