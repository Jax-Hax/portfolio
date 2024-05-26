<script>
	import Picture from '$lib/components/small/Picture.svelte';
</script>

<div class="flex gap-7 xl:-ml-20 items-center justify-center flex-col lg:flex-row">
	<div class="lg:w-1/2">
		<h1 class="text-4xl leading-[1.1] font-bold">Search Engine Optimization For 2024</h1>
		<p class="text-lg mt-7">
			If someone tells you they can get you to the front page of Google in 3 months - <span class="text-primary font-bold">RUN!</span> Often times it takes years to reach the top pages, along with thousands of dollars.
		</p>
		<p class="mt-7 text-lg">
            We offer a number of the latest search engine optimization techniques for 2024:
		</p>
        <div class="flex flex-col gap-3 mt-7">
			<div class="flex gap-3 items-center">
				<Picture mobileSrc="check.png" alt="checkmark" width="30" height="30" />
				<div>
					<p>Keyword-Centered Content for Maximized Search Hits</p>
				</div>
			</div>
			<div class="flex gap-3 items-center">
				<Picture mobileSrc="check.png" alt="checkmark" width="30" height="30" />
				<div>
					<p>Mobile-First Optimization for the Best Experience</p>
				</div>
			</div>
			<div class="flex gap-3 items-center">
				<Picture mobileSrc="check.png" alt="checkmark" width="30" height="30" />
				<div>
					<p>Clean & Organized Code Structure For Web Crawlers</p>
				</div>
			</div>
			<div class="flex gap-3 items-center">
				<Picture mobileSrc="check.png" alt="checkmark" width="30" height="30" />
				<div>
					<p>Fully Responsive on Mobile, Tablet, & Desktop</p>
				</div>
			</div>
		</div>
	</div>
	<Picture alt="100 page score on google insights" mobileSrc="page-speed-100.png" width="550" scale={true} />
</div>
