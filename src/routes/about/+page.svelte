<script>
	import BottomBar from '../BottomBar.svelte';
	import Header from '../Header.svelte';
	import Hero from './Hero.svelte';
	import Me from './Me.svelte';
	import Quality from './Quality.svelte';
</script>

<svelte:head>
	<title>___ - About</title>
	<meta
		name="description"
		content="Websites for small businesses for $150 per month!"
	/>
</svelte:head>

<Header currentPage="About" />
<Hero />
<div class="max-w-[1100px] mx-auto px-10 flex flex-col gap-20">
	<div>
		<Me />
	</div>
    <div>
		<Quality />
	</div>
	<div>
		<BottomBar />
	</div>
</div>
