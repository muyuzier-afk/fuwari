<script lang="ts">
import { musicPlayerConfig } from "@/config";
import type { MusicTrack } from "@/types/config";
import Icon from "@iconify/svelte";
import { onDestroy, onMount } from "svelte";

const storageKey = "moehans:music-player";
const playlist = musicPlayerConfig.localPlaylist;

let audio: HTMLAudioElement | null = null;
let currentIndex = 0;
let currentTrack: MusicTrack | undefined = playlist[0];
let isOpen = !musicPlayerConfig.startCollapsed;
let isPlaying = false;
let showPlaylist = false;
let currentTime = 0;
let duration = 0;
let progress = 0;
let volume = 0.68;
let hasMounted = false;

function clampIndex(index: number) {
	if (playlist.length === 0) return 0;
	if (index < 0) return playlist.length - 1;
	if (index >= playlist.length) return 0;
	return index;
}

function syncCurrentTrack() {
	currentTrack = playlist[currentIndex];
}

function formatTime(value: number) {
	if (!Number.isFinite(value) || value < 0) return "0:00";
	const minutes = Math.floor(value / 60);
	const seconds = Math.floor(value % 60)
		.toString()
		.padStart(2, "0");
	return `${minutes}:${seconds}`;
}

function persistState() {
	try {
		localStorage.setItem(
			storageKey,
			JSON.stringify({
				currentIndex,
				volume,
				isOpen,
			}),
		);
	} catch {}
}

function restoreState() {
	try {
		const raw = localStorage.getItem(storageKey);
		if (!raw) return;
		const parsed = JSON.parse(raw);
		if (typeof parsed.currentIndex === "number") {
			currentIndex = clampIndex(parsed.currentIndex);
		}
		if (typeof parsed.volume === "number") {
			volume = Math.min(1, Math.max(0, parsed.volume));
		}
		if (typeof parsed.isOpen === "boolean") {
			isOpen = parsed.isOpen;
		}
	} catch {}
}

function bindAudio() {
	if (!audio) return;
	audio.addEventListener("play", () => {
		isPlaying = true;
	});
	audio.addEventListener("pause", () => {
		isPlaying = false;
	});
	audio.addEventListener("timeupdate", () => {
		if (!audio) return;
		currentTime = audio.currentTime;
		duration = audio.duration || 0;
		progress = duration > 0 ? currentTime / duration : 0;
	});
	audio.addEventListener("loadedmetadata", () => {
		if (!audio) return;
		duration = audio.duration || 0;
	});
	audio.addEventListener("ended", () => {
		next();
	});
}

function loadTrack(index: number, autoplay = false) {
	if (!audio || playlist.length === 0) return;
	currentIndex = clampIndex(index);
	syncCurrentTrack();
	currentTime = 0;
	duration = 0;
	progress = 0;
	audio.src = currentTrack?.url || "";
	audio.load();
	persistState();
	if (autoplay) {
		void audio.play().catch(() => {
			isPlaying = false;
		});
	}
}

function togglePlay() {
	if (!audio || !currentTrack) return;
	if (!audio.src) {
		loadTrack(currentIndex, true);
		return;
	}
	if (audio.paused) {
		void audio.play().catch(() => {
			isPlaying = false;
		});
	} else {
		audio.pause();
	}
}

function prev() {
	loadTrack(currentIndex - 1, true);
}

function next() {
	loadTrack(currentIndex + 1, true);
}

function choose(index: number) {
	loadTrack(index, true);
}

function seek(event: MouseEvent) {
	if (!audio || duration <= 0) return;
	const target = event.currentTarget as HTMLElement | null;
	if (!target) return;
	const rect = target.getBoundingClientRect();
	const percent = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
	const nextTime = duration * percent;
	audio.currentTime = nextTime;
	currentTime = nextTime;
	progress = percent;
}

function changeVolume(event: Event) {
	const target = event.currentTarget as HTMLInputElement | null;
	if (!target) return;
	volume = Number(target.value);
	if (audio) audio.volume = volume;
	persistState();
}

function toggleOpen() {
	isOpen = !isOpen;
	persistState();
}

onMount(() => {
	if (!musicPlayerConfig.enable || playlist.length === 0) return;
	hasMounted = true;
	restoreState();
	syncCurrentTrack();
	audio = new Audio();
	audio.preload = "metadata";
	audio.volume = volume;
	bindAudio();
	loadTrack(currentIndex, false);
});

onDestroy(() => {
	if (audio) {
		audio.pause();
		audio.src = "";
	}
});
</script>

{#if musicPlayerConfig.enable && playlist.length > 0 && hasMounted}
	<div class="music-player-anchor fixed bottom-4 right-4 z-[70]">
		{#if isOpen}
			<section class="music-player-panel card-base">
				<div class="music-player-panel__glow"></div>
				<div class="relative z-10 flex flex-col gap-4">
					<div class="flex items-center justify-between gap-4">
						<div>
							<div class="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-black/45 dark:text-white/45">{musicPlayerConfig.title || "Playlist"}</div>
							<div class="text-sm font-semibold text-black/85 dark:text-white/85">Local floating player</div>
						</div>
						<div class="flex items-center gap-2">
							<button class="music-icon-btn" on:click={() => (showPlaylist = !showPlaylist)} aria-label="Toggle playlist">
								<Icon icon="material-symbols:queue-music-rounded" class="text-lg" />
							</button>
							<button class="music-icon-btn" on:click={toggleOpen} aria-label="Collapse player">
								<Icon icon="material-symbols:expand-more-rounded" class="text-lg" />
							</button>
						</div>
					</div>

					<div class="grid gap-4 md:grid-cols-[5.2rem_minmax(0,1fr)] md:items-center">
						<div class:list={["music-cover-wrap", { "music-cover-wrap--playing": isPlaying }]}>
							<img src={currentTrack?.cover || "/acofork.jpg"} alt={currentTrack?.title || "Track cover"} class="music-cover" />
							<div class="music-cover__pulse"></div>
						</div>
						<div class="min-w-0">
							<div class="truncate text-base font-semibold text-black/90 dark:text-white/90">{currentTrack?.title}</div>
							<div class="truncate text-sm text-black/55 dark:text-white/55">{currentTrack?.artist}</div>
							<div class="mt-3 space-y-2">
								<button class="music-progress" on:click={seek} aria-label="Seek track">
									<span class="music-progress__bar" style={`width: ${progress * 100}%`}></span>
								</button>
								<div class="flex items-center justify-between text-xs text-black/40 dark:text-white/40">
									<span>{formatTime(currentTime)}</span>
									<span>{formatTime(duration)}</span>
								</div>
							</div>
						</div>
					</div>

					<div class="flex items-center justify-between gap-3">
						<div class="flex items-center gap-2">
							<button class="music-icon-btn" on:click={prev} aria-label="Previous track">
								<Icon icon="material-symbols:skip-previous-rounded" class="text-xl" />
							</button>
							<button class="music-play-btn" on:click={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
								<Icon icon={isPlaying ? "material-symbols:pause-rounded" : "material-symbols:play-arrow-rounded"} class="text-[1.65rem]" />
							</button>
							<button class="music-icon-btn" on:click={next} aria-label="Next track">
								<Icon icon="material-symbols:skip-next-rounded" class="text-xl" />
							</button>
						</div>
						<label class="music-volume">
							<Icon icon="material-symbols:volume-up-rounded" class="text-lg text-black/55 dark:text-white/55" />
							<input type="range" min="0" max="1" step="0.01" bind:value={volume} on:input={changeVolume} aria-label="Volume" />
						</label>
					</div>

					{#if showPlaylist}
						<div class="music-playlist">
							{#each playlist as track, index}
								<button class:music-playlist__item--active={index === currentIndex} class="music-playlist__item" on:click={() => choose(index)}>
									<img src={track.cover || "/acofork.jpg"} alt="" class="h-10 w-10 rounded-xl object-cover" />
									<span class="min-w-0 flex-1 text-left">
										<span class="block truncate text-sm font-medium text-black/85 dark:text-white/85">{track.title}</span>
										<span class="block truncate text-xs text-black/45 dark:text-white/45">{track.artist}</span>
									</span>
									{#if index === currentIndex}
										<Icon icon="material-symbols:graphic-eq-rounded" class="text-xl text-[var(--primary)]" />
									{/if}
								</button>
							{/each}
						</div>
					{/if}
				</div>
			</section>
		{:else}
			<button class="music-player-mini card-base" on:click={toggleOpen} aria-label="Open music player">
				<img src={currentTrack?.cover || "/acofork.jpg"} alt="" class="h-11 w-11 rounded-2xl object-cover" />
				<span class="min-w-0 flex-1 text-left">
					<span class="block truncate text-sm font-semibold text-black/85 dark:text-white/85">{currentTrack?.title}</span>
					<span class="block truncate text-xs text-black/45 dark:text-white/45">{currentTrack?.artist}</span>
				</span>
				<div class="music-mini-icon">
					<Icon icon={isPlaying ? "material-symbols:pause-rounded" : "material-symbols:play-arrow-rounded"} class="text-xl" />
				</div>
			</button>
		{/if}
	</div>
{/if}

<style>
	.music-player-anchor {
		width: min(22rem, calc(100vw - 2rem));
	}

	.music-player-panel,
	.music-player-mini {
		position: relative;
		border: 1px solid var(--card-border);
		background: color-mix(in oklch, var(--card-bg) 88%, white 12%);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		box-shadow: var(--shadow-lg);
	}

	:global(.dark) .music-player-panel,
	:global(.dark) .music-player-mini {
		background: color-mix(in oklch, var(--card-bg) 94%, black 6%);
	}

	.music-player-panel {
		padding: 1rem;
		border-radius: 1.5rem;
		overflow: hidden;
	}

	.music-player-panel__glow {
		position: absolute;
		inset: -30% auto auto -20%;
		width: 12rem;
		height: 12rem;
		border-radius: 999px;
		background: radial-gradient(circle, color-mix(in oklch, var(--primary) 26%, transparent) 0%, transparent 70%);
		pointer-events: none;
	}

	.music-player-mini {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 0.875rem;
		padding: 0.75rem;
		border-radius: 1.5rem;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.music-player-mini:hover {
		transform: translateY(-2px);
	}

	.music-mini-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 2.5rem;
		width: 2.5rem;
		border-radius: 999px;
		background: color-mix(in oklch, var(--primary) 18%, transparent);
		color: var(--primary);
	}

	.music-cover-wrap {
		position: relative;
		height: 5.2rem;
		width: 5.2rem;
	}

	.music-cover {
		height: 100%;
		width: 100%;
		border-radius: 1.35rem;
		object-fit: cover;
		position: relative;
		z-index: 1;
	}

	.music-cover__pulse {
		position: absolute;
		inset: 0.4rem;
		border-radius: 1.1rem;
		background: color-mix(in oklch, var(--primary) 30%, transparent);
		filter: blur(16px);
		opacity: 0;
		transform: scale(0.92);
		transition: opacity 0.2s ease, transform 0.2s ease;
		z-index: 0;
	}

	.music-cover-wrap--playing .music-cover__pulse {
		opacity: 0.9;
		transform: scale(1.03);
	}

	.music-progress {
		position: relative;
		height: 0.45rem;
		width: 100%;
		border-radius: 999px;
		background: color-mix(in oklch, var(--primary) 14%, transparent);
		overflow: hidden;
	}

	.music-progress__bar {
		display: block;
		height: 100%;
		border-radius: inherit;
		background: linear-gradient(90deg, color-mix(in oklch, var(--primary) 72%, white 18%) 0%, var(--primary) 100%);
	}

	.music-icon-btn,
	.music-play-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 999px;
		transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
	}

	.music-icon-btn {
		height: 2.6rem;
		width: 2.6rem;
		background: color-mix(in oklch, var(--primary) 10%, transparent);
		color: color-mix(in oklch, var(--primary) 80%, white 5%);
	}

	.music-play-btn {
		height: 3rem;
		width: 3rem;
		background: var(--primary);
		color: white;
		box-shadow: 0 12px 30px color-mix(in oklch, var(--primary) 40%, transparent);
	}

	.music-icon-btn:hover,
	.music-play-btn:hover {
		transform: translateY(-1px);
	}

	.music-volume {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.55rem 0.8rem;
		border-radius: 999px;
		background: color-mix(in oklch, var(--primary) 8%, transparent);
	}

	.music-volume input {
		width: 5.5rem;
		accent-color: var(--primary);
	}

	.music-playlist {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		padding-top: 0.5rem;
		border-top: 1px solid var(--card-border);
	}

	.music-playlist__item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.55rem;
		border-radius: 1rem;
		background: transparent;
		transition: background 0.2s ease, transform 0.2s ease;
	}

	.music-playlist__item:hover,
	.music-playlist__item--active {
		background: color-mix(in oklch, var(--primary) 10%, transparent);
	}

	.music-playlist__item:hover {
		transform: translateX(2px);
	}

	@media (max-width: 640px) {
		.music-player-anchor {
			width: calc(100vw - 1rem);
			right: 0.5rem;
			bottom: 0.5rem;
		}

		.music-player-panel {
			padding: 0.9rem;
			border-radius: 1.3rem;
		}

		.music-volume input {
			width: 4.25rem;
		}
	}
</style>
