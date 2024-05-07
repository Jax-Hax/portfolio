<script>
	import Picture from '$lib/components/small/Picture.svelte';
</script>

<div class="flex gap-7 xl:-ml-20 items-center justify-center flex-col lg:flex-row">
	<Picture alt="stockshare" mobileSrc="stockshare.png" width="550" scale={true} />
	<div class="lg:w-1/2">
		<h1 class="text-5xl font-bold">StockShare</h1>
		<p class="text-lg mt-7">
			An app used for a stock trading competition, where each player gets $10,000 in fake cash and gets to buy and sell various stocks over the course of the year.
		</p>
        <p class="mt-7 text-lg">
            Complete with a leaderboard, dividend tracking, and stock statistics for profit management.
        </p>
	</div>
</div>
