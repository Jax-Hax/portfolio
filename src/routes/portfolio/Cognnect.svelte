<script>
	import Picture from '$lib/components/small/Picture.svelte';
</script>

<div class="flex gap-7 xl:-ml-20 items-center justify-center flex-col lg:flex-row">
	<Picture alt="cognnect" mobileSrc="cognnect.png" width="550" scale={true} />
	<div class="lg:w-1/2">
		<h1 class="text-5xl font-bold">Cognnect</h1>
		<p class="text-lg mt-7">
			A site we built for our school last year, made to replace an ancient app the school system uses to track our grades. It has built in notifications, advanced grade calculations/storage (2000+ lines of Javascript, PostgreSQL database), and a beautiful UI.
		</p>
        <p class="mt-7 text-lg">
            It quickly got <span class="text-primary font-bold">over 50 users</span>, all of whom love the app and the quick developer response time for any issues they have!
        </p>
	</div>
</div>
