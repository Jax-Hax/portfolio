<script>
	import Picture from '$lib/components/small/Picture.svelte';
</script>

<div class="flex gap-7 xl:-ml-20 items-center justify-center flex-col lg:flex-row">
	<div class="lg:w-1/2">
		<h1 class="text-5xl font-bold">NatureJS</h1>
		<p class="text-lg mt-7">
			A complete 3D simulation of natural selection we built for Biology, fitted with prey,
			predator, and apex predator. Comes with 26 customizable genes, from speed, to vision, to
			genetic mutations!
		</p>
		<p class="mt-7 text-lg">
			Made a <span class="text-primary font-bold">custom 3D camera</span> to view the simulation in real
			time from all angles!
		</p>
	</div>
	<Picture alt="naturejs" mobileSrc="naturejs.png" width="550" scale={true} />
</div>
