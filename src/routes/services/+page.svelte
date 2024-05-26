<script>
	import Analytics from '$lib/components/small/Analytics.svelte';
	import BottomBar from '../BottomBar.svelte';
	import Header from '../Header.svelte';
	import DoneDifferent from './DoneDifferent.svelte';
	import Hero from './Hero.svelte';
	import LifetimeUpdates from './LifetimeUpdates.svelte';
	import Seo from './SEO.svelte';
</script>

<Analytics
	title="Bulbrook Web Designs - Services"
	description="Websites for small businesses for $150 per month!"
/>

<Header currentPage="Services" />
<Hero />
<div class="max-w-[1100px] mx-auto px-10 flex flex-col gap-40 mt-40">
	<div>
		<DoneDifferent />
	</div>
	<div>
		<Seo />
	</div>
	<div>
		<LifetimeUpdates />
	</div>
</div>
<BottomBar />
