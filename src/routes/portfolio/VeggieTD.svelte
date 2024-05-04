<script>
	import Picture from '$lib/components/small/Picture.svelte';
</script>

<div class="flex gap-7 xl:-ml-20 items-center justify-center flex-col lg:flex-row">
	<Picture alt="man staring at code" mobileSrc="VeggieTD.webp" width="550" scale={true} />
	<div class="lg:w-1/2">
		<h1 class="text-5xl font-bold">VeggieTD</h1>
		<p class="text-lg mt-7">
			A tower defense game made over the course of two years to help students learn math, made with
			custom drawn enemies and maps, 3d modelled troops, and a unique flashcard system for earning
			money.
		</p>
		<p class="mt-7 text-lg">
			Used <span class="text-primary font-bold">over 10k lines of code</span> to customize everything,
			from making your own rounds to a multi stage upgrade tree!
		</p>
	</div>
</div>
