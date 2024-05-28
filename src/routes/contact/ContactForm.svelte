<script>
	import { enhance } from '$app/forms';
	import Picture from '$lib/components/small/Picture.svelte';
	let contacting = 1;
</script>

<form
	method="POST"
	action="?/contact"
	use:enhance={() => {
		contacting = 1;

		return async ({ update }) => {
			await update();
			contacting = 2;
		};
	}}
	class="flex flex-col gap-5 max-w-lg bg-base-200 p-5 rounded-xl"
>
	<h1 class="text-center text-3xl mb-4">Talk to us</h1>
	{#if contacting == 0}
		<input class="input input-bordered input-primary w-full" placeholder="Name" name="name" />
		<input
			class="input input-bordered input-primary w-full"
			placeholder="Business"
			name="business"
		/>
		<input
			class="input input-bordered input-primary w-full"
			placeholder="Email Address"
			name="email"
			type="email"
		/>
		<input
			class="input input-bordered input-primary w-full"
			placeholder="Phone Number"
			type="tel"
			name="phone"
		/>
		<textarea
			class="textarea textarea-bordered textarea-primary w-full"
			placeholder="Type your message here..."
			name="description"
		></textarea>
		<button type="submit" class="btn btn-primary my-2 w-full">Submit</button>
	{:else if contacting == 1}
		<div class="flex flex-col items-center gap-5">
			<h1 class="text-xl">Submitting...</h1>
			<span class="loading loading-spinner loading-lg"></span>
		</div>
	{:else}
		<div class="flex flex-col items-center gap-5">
			<Picture alt="checkmark" mobileSrc="form-check.png" width="100" />
			<h1 class="text-xl">Thank you</h1>
			<p>The form was submitted successfully.</p>
		</div>
	{/if}
</form>
