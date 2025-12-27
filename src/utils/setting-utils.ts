import {
	AUTO_MODE,
	DARK_MODE,
	DEFAULT_THEME,
	LIGHT_MODE,
} from "@constants/constants.ts";
import { expressiveCodeConfig } from "@/config";
import type { LIGHT_DARK_MODE } from "@/types/config";

// hex 转 oklch
function hexToOklch(hex: string): { l: number; c: number; h: number } {
	const r = parseInt(hex.slice(1, 3), 16) / 255;
	const g = parseInt(hex.slice(3, 5), 16) / 255;
	const b = parseInt(hex.slice(5, 7), 16) / 255;

	// sRGB to linear RGB
	const toLinear = (c: number) => c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
	const lr = toLinear(r), lg = toLinear(g), lb = toLinear(b);

	// Linear RGB to XYZ
	const x = 0.4124564 * lr + 0.3575761 * lg + 0.1804375 * lb;
	const y = 0.2126729 * lr + 0.7151522 * lg + 0.0721750 * lb;
	const z = 0.0193339 * lr + 0.1191920 * lg + 0.9503041 * lb;

	// XYZ to LMS
	const l_ = 0.8189330101 * x + 0.3618667424 * y - 0.1288597137 * z;
	const m_ = 0.0329845436 * x + 0.9293118715 * y + 0.0361456387 * z;
	const s_ = 0.0482003018 * x + 0.2643662691 * y + 0.6338517070 * z;

	// LMS to Oklab
	const l3 = Math.cbrt(l_), m3 = Math.cbrt(m_), s3 = Math.cbrt(s_);
	const L = 0.2104542553 * l3 + 0.7936177850 * m3 - 0.0040720468 * s3;
	const a = 1.9779984951 * l3 - 2.4285922050 * m3 + 0.4505937099 * s3;
	const bVal = 0.0259040371 * l3 + 0.7827717662 * m3 - 0.8086757660 * s3;

	// Oklab to Oklch
	const c = Math.sqrt(a * a + bVal * bVal);
	let h = Math.atan2(bVal, a) * 180 / Math.PI;
	if (h < 0) h += 360;

	return { l: L, c, h };
}

export function getDefaultHex(): string {
	const fallback = "#f06a8b";
	const configCarrier = document.getElementById("config-carrier");
	return configCarrier?.dataset.hex || fallback;
}

export function getHex(): string {
	return localStorage.getItem("themeHex") || getDefaultHex();
}

export function setHex(hex: string): void {
	localStorage.setItem("themeHex", hex);
	const r = document.querySelector(":root") as HTMLElement;
	if (!r) {
		return;
	}
	r.style.setProperty("--theme-hex", hex);

	// 同时设置 oklch 分量供 CSS 使用
	const oklch = hexToOklch(hex);
	r.style.setProperty("--hue", String(Math.round(oklch.h)));
}

export function applyThemeToDocument(theme: LIGHT_DARK_MODE) {
	switch (theme) {
		case LIGHT_MODE:
			document.documentElement.classList.remove("dark");
			break;
		case DARK_MODE:
			document.documentElement.classList.add("dark");
			break;
		case AUTO_MODE:
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
			break;
	}

	// Set the theme for Expressive Code
	document.documentElement.setAttribute(
		"data-theme",
		expressiveCodeConfig.theme,
	);
}

export function setTheme(theme: LIGHT_DARK_MODE): void {
	localStorage.setItem("theme", theme);
	applyThemeToDocument(theme);
}

export function getStoredTheme(): LIGHT_DARK_MODE {
	return (localStorage.getItem("theme") as LIGHT_DARK_MODE) || DEFAULT_THEME;
}
