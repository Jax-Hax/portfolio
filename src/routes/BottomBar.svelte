<script>
	import Picture from '$lib/components/small/Picture.svelte';
</script>

<div class="flex flex-col md:flex-row justify-around gap-3 mb-20">
	<div>
		<a href="/" class="my-2">
			<span class="sr-only">Bulbrook Web Designs</span>
			<Picture mobileSrc="favicon.png" width="100" alt="logo" />
		</a>
		<div class="mb-3">
			<a href="mailto:jax@bulbrookwebdesigns.com">jax@bulbrookwebdesigns.com</a>
		</div>
		<div><a href="tel:804-821-8230">(804) 821-8230</a></div>
	</div>
	<div>
		<h1 class="font-bold text-3xl">Navigation</h1>
		<div class="divider divider-primary"></div>
		<div class="my-1"><a class="link link-hover transition" href="/">Home</a></div>
		<div class="my-1"><a class="link link-hover transition" href="/about">About</a></div>
		<div class="my-1"><a class="link link-hover transition" href="/services">Services</a></div>
		<div class="my-1"><a class="link link-hover transition" href="/portfolio">Portfolio</a></div>
		<div class="my-1"><a class="link link-hover transition" href="/contact">Contact</a></div>
	</div>
	<div>
		<h1 class="font-bold text-3xl">Services</h1>
		<div class="divider divider-primary"></div>
		<div class="my-1">Web Design</div>
		<div class="my-1">Website Maintenance</div>
		<div class="my-1">SEO Services</div>
		<div class="my-1">Hosting</div>
		<div class="my-1">Lifetime Updates</div>
	</div>
</div>
