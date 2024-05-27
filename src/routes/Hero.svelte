<script>
	import Picture from '$lib/components/small/Picture.svelte';
</script>

<div class="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-blue-700 dark:to-blue-900 text-white">
	<div class="flex flex-col md:flex-row pt-40 xl:-ml-10 items-center justify-around gap-5 px-10 m-auto">
		<div class="md:w-1/2">
			<h1 class="font-bold text-5xl leading-[1.2] mb-8">Small Business Web Design + Development</h1>
			<p class="mb-7">
				100% hand-coded websites with superior results for just $150/mo, hosting included.
			</p>
			<a href="/contact" class="btn">Get in touch!</a>
		</div>
		<Picture mobileSrc="carbon.webp" width="400" height="502" scale={true} alt="hero" lazyLoaded={false} />
	</div>
	<div class="w-full pt-10">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
				class="fill-base-100"
			></path>
		</svg>
	</div>
</div>
