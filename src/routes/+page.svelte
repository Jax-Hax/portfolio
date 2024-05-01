<script>
	import BottomBar from './BottomBar.svelte';
import Features from './Features.svelte';
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import WhatWeDo from './WhatWeDo.svelte';
	import WhoWeAre from './WhoWeAre.svelte';
</script>

<svelte:head>
	<title>___ - Home</title>
	<meta
		name="description"
		content="Websites for small businesses for $150 per month!"
	/>
</svelte:head>

<Header currentPage="Home" />
<div class="max-w-[1100px] mx-auto px-10 flex flex-col gap-20">
	<div>
		<Hero />
	</div>
	<div>
		<WhatWeDo />
	</div>
	<div>
		<Features />
	</div>
	<div>
		<WhoWeAre />
	</div>
	<div>
		<BottomBar />
	</div>
</div>
