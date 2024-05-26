<script>
	import Analytics from '$lib/components/small/Analytics.svelte';
	import BottomBar from '../BottomBar.svelte';
	import Header from '../Header.svelte';
	import Hero from './Hero.svelte';
	import Me from './Me.svelte';
	import Quality from './Quality.svelte';
</script>

<Analytics
	title="Bulbrook Web Designs - About"
	description="Websites for small businesses for $150 per month!"
/>

<Header currentPage="About" />
<Hero />
<div class="max-w-[1100px] mx-auto px-10 flex flex-col gap-40 mt-40">
	<div>
		<Me />
	</div>
    <div>
		<Quality />
	</div>
	<div class="m-auto">
		<a href="/services" class="btn btn-primary text-white uppercase">Our Services</a>
	</div>
</div>
<BottomBar />
