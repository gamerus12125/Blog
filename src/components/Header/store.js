import { InstagramIcon, VKIcon, YoutubeIcon, TwitterIcon } from "../Icons";

export const MENU = [
	{
		id: 1,
		text: "_посты",
	},
	{
		id: 2,
		text: "_категории",
	},
	{
		id: 3,
		text: "_полезное",
	},
	{
		id: 4,
		text: "_обо мне",
	},
];

export const SOCIAL_MENU = [
	{ id: 1, title: "instagram", href: "/", IconComponent: InstagramIcon },
	{ id: 2, title: "vk", href: "/", IconComponent: VKIcon },
	{ id: 3, title: "twitter", href: "/", IconComponent: TwitterIcon },
	{ id: 4, title: "youtube", href: "/", IconComponent: YoutubeIcon },
];
