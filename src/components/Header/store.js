import { InstagramIcon, VKIcon, YoutubeIcon, TwitterIcon } from "../Icons";

export const MENU = [
  {
    id: 1,
    title: "_посты",
    href: "/posts",
  },
  {
    id: 2,
    title: "_категории",
    href: "/sections",
  },
  {
    id: 3,
    title: "_полезное",
    href: "/useful",
  },
  {
    id: 4,
    title: "_обо мне",
    href: "/aboutMe",
  },
];

export const SOCIAL_MENU = [
  { id: 1, title: "instagram", href: "/", IconComponent: InstagramIcon },
  { id: 2, title: "vk", href: "/", IconComponent: VKIcon },
  { id: 3, title: "twitter", href: "/", IconComponent: TwitterIcon },
  { id: 4, title: "youtube", href: "/", IconComponent: YoutubeIcon },
];
