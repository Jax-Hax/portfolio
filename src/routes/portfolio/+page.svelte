<script>
	import BottomBar from '../BottomBar.svelte';
	import Header from '../Header.svelte';
	import Hero from './Hero.svelte';
</script>

<svelte:head>
	<title>___ - Services</title>
	<meta
		name="description"
		content="Websites for small businesses for $150 per month!"
	/>
</svelte:head>

<Header currentPage="Portfolio" />
<Hero />
<div class="max-w-[1100px] mx-auto px-10 flex flex-col gap-40 mt-40">
	<div>
		<BottomBar />
	</div>
</div>
