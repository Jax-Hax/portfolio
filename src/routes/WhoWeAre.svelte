<script>
	import Divider from '$lib/components/small/Divider.svelte';
	import Picture from '$lib/components/small/Picture.svelte';
</script>

<h1 class="text-4xl font-bold uppercase text-center mb-7">
	<span class="text-primary">Who</span> I am
</h1>
<Divider src="person.png" />
<p class="mt-7 max-w-2xl text-center mx-auto">
	My name is Jax, I am a high school student and web developer. I started this business because I
	love coding and want to be able to afford college for a Computer Science Degree. I learned how to code
	when I was 8 after being inspired by games such as Minecraft. Now after having coded for 8 years I
	am confident enough to charge for my work and have my method down to a science. <a
		class="font-semibold text-primary block"
		href="/about">ABOUT ME</a
	>
</p>
<div class="flex flex-col items-center mt-20">
	<Picture mobileSrc="blue-shirt.webp" alt="optimization" width="290" height="290" />
	<h2 class="font-bold mt-10 mb-2">Jax Bulbrook</h2>
	<p class="uppercase">Owner/Developer</p>
</div>
