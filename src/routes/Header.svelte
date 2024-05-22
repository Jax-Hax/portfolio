<script lang="ts">
	import Picture from '$lib/components/small/Picture.svelte';

	export let currentPage: string;
	let pages = [
		{ name: 'Home', link: '/' },
		{ name: 'About', link: '/about' },
		{ name: 'Services', link: '/services' },
		{ name: 'Portfolio', link: '/portfolio' },
		{ name: 'Blog', link: '/blog' },
		{ name: 'Contact', link: '/contact' }
	];
</script>

<div class="flex justify-between items-center px-10 py-5 max-w-[1100px] mx-auto">
	<div class="block dark:hidden">
		<Picture mobileSrc="favicon-dark.png" width="100" alt="logo" />
	</div>
	<div class="hidden dark:block">
		<Picture mobileSrc="favicon.png" width="100" alt="logo" />
	</div>
	<h1 class="text-3xl font-bold">Bulbrook Web Designs</h1>
	<div class="flex justify-between flex-1 h-min">
		{#each pages as page}
			<a
				class={currentPage === page.name ? 'border-b-[3px] border-b-primary pb-2' : ''}
				href={page.link}>{page.name}</a
			>
		{/each}
	</div>
</div>w
