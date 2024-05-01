<script>
	import BackgroundImage from '$lib/components/small/BackgroundImage.svelte';
import BottomBar from '../BottomBar.svelte';
	import Header from '../Header.svelte';
	import Hero from './Hero.svelte';
</script>

<Header currentPage="About" />
<Hero />
<div class="max-w-[1100px] mx-auto px-10 flex flex-col gap-20">
	<div>
		<BottomBar />
	</div>
</div>
