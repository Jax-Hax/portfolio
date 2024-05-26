<script>
	import Analytics from '$lib/components/small/Analytics.svelte';
	import BottomBar from '../BottomBar.svelte';
	import Header from '../Header.svelte';
	import ContactForm from './ContactForm.svelte';
	import Hero from './Hero.svelte';
	import Info from './Info.svelte';
</script>

<Analytics
	title="Bulbrook Web Designs - Contact"
	description="Websites for small businesses for $150 per month!"
/>

<Header currentPage="Contact" />
<Hero />
<div class="max-w-[1100px] mx-auto px-10 flex flex-col gap-40 mt-40">
	<div>
		<div class="flex flex-col md:flex-row-reverse justify-center gap-10">
			<Info />
			<ContactForm />
		</div>
	</div>
</div>
<BottomBar />
