<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import Icon from "@iconify/svelte";
import { getDefaultHex, getHex, setHex } from "@utils/setting-utils";

let hex = getHex();
const defaultHex = getDefaultHex();

function resetHex() {
	hex = getDefaultHex();
}

$: if (hex) {
	setHex(hex);
}
</script>

<div id="display-setting" class="float-panel float-panel-closed absolute transition-all w-80 right-4 px-4 py-4">
    <div class="flex flex-row gap-2 mb-3 items-center justify-between">
        <div class="flex gap-2 font-bold text-lg text-neutral-900 dark:text-neutral-100 transition relative ml-3
            before:w-1 before:h-4 before:rounded-md before:bg-[var(--primary)]
            before:absolute before:-left-3 before:top-[0.33rem]"
        >
            {i18n(I18nKey.themeColor)}
            <button aria-label="Reset to Default" class="btn-regular w-7 h-7 rounded-md active:scale-90 will-change-transform"
                    class:opacity-0={hex === defaultHex} class:pointer-events-none={hex === defaultHex} on:click={resetHex}>
                <div class="text-[var(--btn-content)]">
                    <Icon icon="fa6-solid:arrow-rotate-left" class="text-[0.875rem]"></Icon>
                </div>
            </button>
        </div>
        <div class="flex gap-2 items-center">
            <input type="color" bind:value={hex} class="w-8 h-8 rounded cursor-pointer border-0 p-0" />
            <input type="text" bind:value={hex} class="w-20 h-7 rounded-md px-2 text-sm font-mono
                bg-[var(--btn-regular-bg)] text-[var(--btn-content)] border-0 outline-none" />
        </div>
    </div>
</div>
