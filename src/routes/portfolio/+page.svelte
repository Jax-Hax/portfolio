<script>
	import BottomBar from '../BottomBar.svelte';
	import Header from '../Header.svelte';
	import Cognnect from './Cognnect.svelte';
	import Hero from './Hero.svelte';
	import NaturalSelection from './NaturalSelection.svelte';
	import StockShare from './StockShare.svelte';
	import VeggieTd from './VeggieTD.svelte';
</script>

<svelte:head>
	<title>Bulbrook Web Designs - Portfolio</title>
	<meta
		name="description"
		content="Websites for small businesses for $150 per month!"
	/>
</svelte:head>

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
	<div>
		<BottomBar />
	</div>
</div>
