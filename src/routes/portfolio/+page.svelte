<script>
	import Analytics from '$lib/components/small/Analytics.svelte';
	import BottomBar from '../BottomBar.svelte';
	import Header from '../Header.svelte';
	import Cognnect from './Cognnect.svelte';
	import Hero from './Hero.svelte';
	import NaturalSelection from './NaturalSelection.svelte';
	import StockShare from './StockShare.svelte';
	import VeggieTd from './VeggieTD.svelte';
</script>

<Analytics
	title="Bulbrook Web Designs - Portfolio"
	description="Websites for small businesses for $150 per month!"
/>

<Header currentPage="Portfolio" />
<Hero />
<div class="max-w-[1100px] mx-auto px-10 flex flex-col gap-40 mt-40">
    <div>
        <Cognnect />
    </div>
    <div>
        <NaturalSelection />
    </div>
    <div>
        <VeggieTd />
    </div>
    <div>
        <StockShare />
    </div>
</div>
<BottomBar />