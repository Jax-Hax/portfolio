<script lang="ts">
	import Picture from '$lib/components/small/Picture.svelte';

	export let currentPage: string;
	let pages = [
		{ name: 'Home', link: '/' },
		{ name: 'About', link: '/about' },
		{ name: 'Services', link: '/services' },
		{ name: 'Portfolio', link: '/portfolio' },
		//		{ name: 'Blog', link: '/blog' },
		{ name: 'Contact', link: '/contact' }
	];
	let menuOpen: boolean = false;
</script>

<header class="relative z-[100]">
	<nav class="flex justify-between absolute top-0 left-0 items-center px-3 md:px-10 py-5 mx-auto w-full">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Bulbrook Web Designs</span>
				<Picture mobileSrc="logo-with-text.png" width="290" alt="logo" />
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				on:click={() => {
					menuOpen = true;
				}}
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
				aria-label="Menu Opener"
			>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex justify-between flex-1 h-min">
			{#each pages as page}
				<a
					class={currentPage === page.name ? 'border-b-[3px] border-b-primary pb-2 text-white' : 'text-white'}
					href={page.link}>{page.name}</a
				>
			{/each}
		</div>
		{#if menuOpen}
			<div class="lg:hidden" role="dialog" aria-modal="true">
				<div
					class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-base-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
				>
					<div class="flex items-center justify-between">
						<div class="-m-4 p-1.5">
							<Picture mobileSrc="favicon.png" width="100" alt="logo" />
						</div>
						<button on:click={() => (menuOpen = false)} class="-m-2.5 rounded-md p-2.5">
							<span class="sr-only">Close menu</span>
							<svg
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div class="mt-6 flow-root">
						<div class="-my-6 divide-y divide-gray-500/10">
							<div class="space-y-2 py-6">
								{#each pages as page}
									<a
										class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-base-200"
										href={page.link}>{page.name}</a
									>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</nav>
</header>
