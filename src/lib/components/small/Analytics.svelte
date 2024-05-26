<script lang="ts">
	import { page } from '$app/stores';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-03C7TFW38R', {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
	export let title: string;
	export let description: string;
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-03C7TFW38R">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-03C7TFW38R');
	</script>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>
