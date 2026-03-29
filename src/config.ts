import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	MusicPlayerConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "MOEHANS BLOG",
	subtitle: "Share AI, Serverless, and Cloud Native",
	description:
		"Notes, analysis, and tutorials on AI, Serverless, and Cloud Native.",
	keywords: [
		"AI",
		"Serverless",
		"Cloud Native",
		"Cloudflare",
		"Python",
		"React",
		"Tutorials",
		"Blog",
	],
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hex: "#ec4899", // Theme color (hex)
		fixed: false, // Hide the theme color picker for visitors
	},
	navbarTitle: {
		mode: "text-icon",
		text: "MOEHANS",
		icon: "/favicon/favicon-light-32.png",
	},
	banner: {
		enable: true,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	hero: {
		enable: true,
		badge: "Mizuki Inspired Refresh",
		title: "Cloud-native notes with a softer surface.",
		description:
			"围绕 AI、Serverless 与 Cloud Native 的实践、拆解和长期记录，保留 Fuwari 的轻量结构，但把首页氛围、卡片层次和页面编排做得更完整。",
		rotatingLines: [
			"写给正在折腾边缘计算、自动化和个人基础设施的人。",
			"把教程、经验和零碎观察收拢成可复用的知识库。",
			"让技术博客看起来更像一个有情绪的工作台。",
		],
		stats: [
			{ value: "AI", label: "Focus" },
			{ value: "Edge", label: "Runtime" },
			{ value: "Notes", label: "Archive" },
		],
		actions: [
			{ label: "浏览文章", url: "/" },
			{ label: "友情链接", url: "/friends/", style: "ghost" },
			{
				label: "访问统计",
				url: "https://umami.moehans.com/share/b1DTwCvclcjiEE5E",
				external: true,
				style: "ghost",
			},
		],
	},
	postListLayout: {
		categoryBar: {
			enable: true,
			maxItems: 8,
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		{
			src: "/favicon.ico",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "友链",
			url: "/friends/",
			external: false,
		},
		{
			name: "Umami",
			url: "https://umami.moehans.com/share/b1DTwCvclcjiEE5E",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/head.gif",
	name: "MOEHANS",
	status: "Now building a calmer, brighter Fuwari fork.",
	location: "Shanghai / Edge-first web",
	bio: "记录 AI、Serverless 与 Cloud Native，也顺手打磨这个站点本身的体验和质感。",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/muyuzier-afk",
		},
		{
			name: "Gitee",
			icon: "gitee",
			url: "https://gitee.com/muyuzier-afk",
		},
		{
			name: "Email",
			icon: "fa6-solid:envelope",
			url: "mailto:muyuzier%40gmail.com",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const musicPlayerConfig: MusicPlayerConfig = {
	enable: true,
	startCollapsed: true,
	title: "MOEHANS Playlist",
	localPlaylist: [
		{
			title: "天天天国地獄国 (feat. ななひら & P丸様。)",
			artist: "Aiobahn +81、ななひら、P丸様。",
			url: "/music/tracks/track-01.mp3",
			cover: "/music/covers/track-01.jpg",
		},
		{
			title: "どりーむもーど",
			artist: "Atena",
			url: "/music/tracks/track-02.mp3",
			cover: "/music/covers/track-02.jpg",
		},
		{
			title: "ワタシ株式会社",
			artist: "Chinozo",
			url: "/music/tracks/track-03.mp3",
			cover: "/music/covers/track-03.jpg",
		},
		{
			title: "妄想感傷代償連盟",
			artist: "DECO*27、初音ミク",
			url: "/music/tracks/track-04.mp3",
			cover: "/music/covers/track-04.jpg",
		},
		{
			title: "臙脂 ft. 重音テト",
			artist: "bk、重音テト",
			url: "/music/tracks/track-05.mp3",
			cover: "/music/covers/track-05.jpg",
		},
		{
			title: "I Can't Wait (feat. GUMI)",
			artist: "d0tc0mmie、GUMI",
			url: "/music/tracks/track-06.mp3",
			cover: "/music/covers/track-06.jpg",
		},
		{
			title: "目撃！テト31世 (feat. 重音テト & 雨衣)",
			artist: "はろける、重音テト、雨衣",
			url: "/music/tracks/track-07.mp3",
			cover: "/music/covers/track-07.jpg",
		},
		{
			title: "求&影 (feat. 重音テト)",
			artist: "ぴーなた、重音テト",
			url: "/music/tracks/track-08.mp3",
			cover: "/music/covers/track-08.jpg",
		},
		{
			title: "ねぇねぇねぇ。 (呐呐呐。)",
			artist: "ピノキオピー",
			url: "/music/tracks/track-09.mp3",
			cover: "/music/covers/track-09.jpg",
		},
		{
			title: "愛属性",
			artist: "ピノキオピー",
			url: "/music/tracks/track-10.mp3",
			cover: "/music/covers/track-10.jpg",
		},
		{
			title: "超主人公",
			artist: "ピノキオピー、初音ミク",
			url: "/music/tracks/track-11.mp3",
			cover: "/music/covers/track-11.jpg",
		},
		{
			title: "転生林檎",
			artist: "ピノキオピー、初音ミク",
			url: "/music/tracks/track-12.mp3",
			cover: "/music/covers/track-12.jpg",
		},
		{
			title: "T氏の話を信じるな (feat. 初音ミク & 重音テト)",
			artist: "ピノキオピー、初音ミク、重音テト",
			url: "/music/tracks/track-13.mp3",
			cover: "/music/covers/track-13.jpg",
		},
	],
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
