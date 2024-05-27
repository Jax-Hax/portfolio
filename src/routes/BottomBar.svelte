<script>
	import Picture from '$lib/components/small/Picture.svelte';
</script>

<div class="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-blue-700 dark:to-blue-900 mt-40">
	<div class="w-full">
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="fill-base-100 bg-base-100"></path>
		</svg>
	</div>
	<footer class="flex flex-col md:flex-row justify-around gap-3 pb-20 p-5 text-white">
		<div class="flex flex-col gap-2">
			<a href="/">
				<span class="sr-only">Bulbrook Web Designs</span>
				<Picture mobileSrc="logo.png" width="100" alt="logo" />
			</a>
			<div class="mb-3">
				<a class="py-1" href="mailto:jax@bulbrookwebdesigns.com">jax@bulbrookwebdesigns.com</a>
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
	</footer>
</div>
