<script>
	import BottomBar from '../BottomBar.svelte';
	import Header from '../Header.svelte';
	import ContactForm from './ContactForm.svelte';
	import Hero from './Hero.svelte';
</script>

<svelte:head>
	<title>Bulbrook Web Designs - Contact</title>
	<meta
		name="description"
		content="Websites for small businesses for $150 per month!"
	/>
</svelte:head>

<Header currentPage="Contact" />
<Hero />
<div class="max-w-[1100px] mx-auto px-10 flex flex-col gap-40 mt-40">
	<div>
		<ContactForm />
	</div>
	<div>
		<BottomBar />
	</div>
</div>
