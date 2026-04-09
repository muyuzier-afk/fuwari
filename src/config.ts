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
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	hero: {
		enable: false,
		title: "",
		description: "",
	},
	postListLayout: {
		categoryBar: {
			enable: false,
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
			name: "链接",
			url: "/links/",
			external: false,
		},
		{
			name: "友链",
			url: "/friends/",
			external: false,
		},
		{
			name: "UptimeKuma",
			url: "https://uptime.moehans.com/status/uptime",
			external: true,
		},
		{
			name: "Umami",
			url: "https://umami.moehans.com/share/nExEh26nJLpeMU09",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/new-avatar.webp",
	name: "MOEHANS",
	bio: "优秀的公司赚取利润，伟大的公司赢得人心！",
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

export const profileQuotes = [
	"优秀的公司赚取利润，伟大的公司赢得人心！",
	"永远相信美好的事情即将发生。",
	"不要用战术上的勤奋，掩盖战略上的懒惰。",
	"商业成功最重要是：朋友弄得多多的，敌人弄得少少的。",
	"聪明、勤奋不保证你能成功，真正重要的是顺势而为。",
	"有机会一定要试一试，其实试错的成本并不高，而错过的成本非常高。",
	"其实知识并不全是线性的，很多知识点没有绝对的先后顺序。前面看不懂，跳过去没关系的。等后面看懂了，反过来可能就能看懂前面的。",
	"一定要掌握各种各样的学习方法，养成终身学习的习惯，才足以面对未来所有的挑战。",
	"一个人的能力再强也是有限的，找互补的朋友一起干，成功概率会大很多。",
	"创业是使人成长最快的方法。",
	"只要用心学，我们的能力就一定会成长。成长，比什么东西都重要。只有认知的突破，才会有真正的成长。",
];

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
