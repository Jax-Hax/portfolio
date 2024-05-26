<script lang="ts">
	export let numCircles: number = 3;
	export let startPx: number = 90;
	export let spacingPx: number = 20;
	export let startOpacity: number = 0.4;
	export let spacingOpacity: number = 0.3;
	export let color: string = '111, 123, 244';
</script>

<div
	style="width: {startPx}px; height: {startPx}px; background-color: rgba({color},{startOpacity}); border-radius: 50%"
	class="flex items-center justify-center"
>
	{#if numCircles != 1}
		<svelte:self
			numCircles={numCircles - 1}
			startPx={startPx - spacingPx}
			{spacingPx}
			startOpacity={startOpacity + spacingOpacity}
			{color}
		>
			<slot />
		</svelte:self>
	{:else}
		<slot />
	{/if}
</div>
