<script>

	import Picture from "$lib/components/small/Picture.svelte";

</script>

<div class="flex flex-col md:flex-row mt-60 xl:-ml-10 items-center">
	<div class="md:w-1/2">
		<h1 class="font-bold text-5xl leading-[1.2] mb-8">Small Business Web Design + Development</h1>
		<p class="mb-7">
			100% hand-coded websites with superior results
			for just $150/mo, hosting included.
		</p>
		<a href="/contact" class="btn">Get in touch!</a>
	</div>
	<Picture mobileSrc="carbon.png" width=600 alt="hero" lazyLoaded={false} />
</div>
