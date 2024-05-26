<script lang="ts">
	import Picture from '$lib/components/small/Picture.svelte';
</script>

<div class="flex flex-col lg:flex-row items-center gap-[75px]">
	<div class="-ml-[70px]">
		<Picture mobileSrc="savings.svg" alt="man saving next to piggy bank" width="500" height="350" />
	</div>
	<div>
		<h1 class="text-center font-bold text-4xl mt-10">
			<span class="text-primary">$0</span> Down, <span class="text-primary">$150</span> Per Month, 12
			Month Minimum Contract
		</h1>
		<p class="mt-7">
			$0 down for a standard 5 page small business website. If you need more than that then we do custom pricing based on the scope of work, number of additional pages, and time
			involved.
		</p>
		<p class="mt-7">
			You own your domain, content, and brand. Cancel anytime with no fees or hassle.
		</p>
		<div class="grid md:grid-cols-2 gap-6 py-10 xl:-mr-20">
			<div class="flex gap-3">
				<Picture mobileSrc="check.png" alt="checkmark" width="30" height="30" />
				<div>
					<h2 class="text-xl font-bold">Hosting Fees Included</h2>
					<p>Hosting fees are built right into the monthly payment.</p>
				</div>
			</div>
			<div class="flex gap-3">
				<Picture mobileSrc="check.png" alt="checkmark" width="30" height="30" />
				<div>
					<h2 class="text-xl font-bold">Unlimited Edits</h2>
					<p>Change anything you want at anytime, free of charge.</p>
				</div>
			</div>
			<div class="flex gap-3">
				<Picture mobileSrc="check.png" alt="checkmark" width="30" height="30" />
				<div>
					<h2 class="text-xl font-bold">No Cost Up Front</h2>
					<p>We do the bulk upfront as an investment so you can stay in your budget.</p>
				</div>
			</div>
			<div class="flex gap-3">
				<Picture mobileSrc="check.png" alt="checkmark" width="30" height="30" />
				<div>
					<h2 class="text-xl font-bold">Web Design & Development</h2>
					<p>Includes over 50 hours of design, development, and testing.</p>
				</div>
			</div>
			<div class="flex gap-3">
				<Picture mobileSrc="check.png" alt="checkmark" width="30" height="30" />
				<div>
					<h2 class="text-xl font-bold">100 Google Page Speed Score</h2>
					<p>
						We can achieve a perfect 100 on Google Page Speed scores and boost your search ranking.
					</p>
				</div>
			</div>
			<div class="flex gap-3">
				<Picture mobileSrc="check.png" alt="checkmark" width="30" height="30" />
				<div>
					<h2 class="text-xl font-bold">Google Analytics</h2>
					<p>We install Analytics for free to monitor traffic and where it comes from.</p>
				</div>
			</div>
		</div>
	</div>
</div>
