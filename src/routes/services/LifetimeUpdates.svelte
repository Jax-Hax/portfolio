<script>
	import Picture from '$lib/components/small/Picture.svelte';
</script>

<div class="flex gap-12 xl:-ml-20 items-center justify-center flex-col lg:flex-row lg:mt-40">
	<div class="lg:w-full">
		<h1 class="text-5xl font-bold">Lifetime Updates For Your Website</h1>
		<p class="text-lg mt-7">
			Google changes its search alogrithm standards occasionally, changing what is needed to rank.
			Web accessibility guidelines are also frequently updated for users with screen readers, which
			is why we include <span class="text-primary font-bold">lifetime updates</span> to your website
			to make sure it never goes out of date and is always changing with the times.
		</p>
	</div>
	<div class="relative">
		<div class="grid sm:grid-cols-2 gap-7">
			<div
				class="py-20 bg-base-200 rounded-2xl border-t-4 border-primary shadow-xl px-7 sm:-translate-y-12"
			>
				<Picture alt="design updates" mobileSrc="update.png" width="50" />
				<h1 class="font-bold text-xl mt-7 mb-4">Design Updates</h1>
				<p>If you ever want a new design, we will rebuild your website at no extra cost.</p>
			</div>
			<div class="py-20 bg-base-200 rounded-2xl border-t-4 border-primary shadow-xl px-7">
				<Picture alt="web accessibility" mobileSrc="accessibility.png" width="50" />
				<h1 class="font-bold text-xl mt-7 mb-4">Web Accessibility</h1>
				<p>Staying on top of the latest guidelines for web accessibility compliance.</p>
			</div>
			<div
				class="py-20 bg-base-200 rounded-2xl border-t-4 border-primary shadow-xl px-7 sm:-translate-y-12"
			>
				<Picture alt="a search engine" mobileSrc="seo.png" width="50" />
				<h1 class="font-bold text-xl mt-7 mb-4">Search Engine Updates</h1>
				<p>Your website will stay up to date with Google's search guidelines for ranking.</p>
			</div>
			<div class="py-20 bg-base-200 rounded-2xl border-t-4 border-primary shadow-xl px-7">
				<Picture alt="google" mobileSrc="google.png" width="50" />
				<h1 class="font-bold text-xl mt-7 mb-4">Google Business Profile</h1>
				<p>We help optimize and manage your Google Business Profile for maximum coverage.</p>
			</div>
		</div>
		<div class="absolute top-0 -left-20 -z-10 opacity-10 rotate-[150deg] max-lg:hidden">
			<Picture alt="blob" mobileSrc="blob.png" width="750" />
		</div>
	</div>
</div>
