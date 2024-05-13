<script>
	import { enhance } from "$app/forms";

</script>
<h1 class="font-bold text-5xl mb-10">Talk to a human</h1>
<form method="POST" action="?/contact" use:enhance class="flex flex-col gap-5">
    <input
        class="input input-bordered input-primary w-full"
        placeholder="Name"
        name="name"
    >
    <input
        class="input input-bordered input-primary w-full"
        placeholder="Business"
        name="business"
    >
    <input
        class="input input-bordered input-primary w-full"
        placeholder="Email Address"
        name="email"
        type="email"
    >
    <input
        class="input input-bordered input-primary w-full"
        placeholder="Phone Number"
        type="tel"
        name="phone"
    >
    <textarea
        class="textarea textarea-bordered textarea-primary w-full"
        placeholder="Type your message here..."
        name="description"
    ></textarea>
    <button type="submit" class="btn btn-primary my-2 w-full">Submit</button>
</form>