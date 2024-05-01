<script lang="ts">
	export let numCircles: number = 3;
	export let startPx: number = 90;
	export let spacingPx: number = 20;
	export let startOpacity: number = 1.0;
	export let spacingOpacity: number = 0.3;
	export let color: string = "theme('colors.primary')";
</script>

<div
	style="width: {startPx}px; height: {startPx}px; background-color: {color}; opacity: {startOpacity}; margin: auto; border-radius: 50%"
>
	{#if numCircles != 1}
		<svelte:self
			numCircles={numCircles - 1}
			startPx={startPx - spacingPx}
			{spacingPx}
			startOpacity={startOpacity - spacingOpacity}
			{color}
		>
			<slot />
		</svelte:self>
	{:else}
		<slot />
	{/if}
</div>
