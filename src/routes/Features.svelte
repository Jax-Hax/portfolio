<script lang="ts">
	import Picture from '$lib/components/small/Picture.svelte';
</script>

	<div class="flex flex-col lg:flex-row items-center gap-[75px]">
		<div class="min-w-[500px] -ml-[70px]">
			<Picture
				mobileSrc="savings.svg"
				alt="man saving next to piggy bank"
				width="500"
				height="350"
			/>
		</div>
		<div>
			<h1 class="text-center font-bold text-4xl mt-10">
				<span class="text-primary">$0</span> Down, <span class="text-primary">$150</span> Per Month,
				12 Month Minimum Contract
			</h1>
			<p class="mt-7">
				$0 down for a standard 5 page small business website. If you need more than that then we
				have to do custom pricing based on the scope of work, number of additional pages, and time
				involved.
			</p>
            <p class="mt-7"> You own your domain, content, listing, and profiles. Cancel anytime with no fees
				or hassle.</p>
		</div>
	</div>
