<script>
	import Analytics from '$lib/components/small/Analytics.svelte';
	import BottomBar from './BottomBar.svelte';
	import Features from './Features.svelte';
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import WhatWeDo from './WhatWeDo.svelte';
	import WhoWeAre from './WhoWeAre.svelte';
</script>

<Analytics
	title="Bulbrook Web Designs - Home"
	description="Websites for small businesses for $150 per month!"
/>
<Header currentPage="Home" />
<Hero />
<div class="max-w-[1100px] mx-auto px-10 flex flex-col gap-40">
	<div>
		<WhatWeDo />
	</div>
	<div>
		<Features />
	</div>
	<div>
		<WhoWeAre />
	</div>
</div>
<BottomBar />