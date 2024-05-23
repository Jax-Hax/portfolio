<script>
	import Divider from '$lib/components/small/Divider.svelte';
	import Picture from '$lib/components/small/Picture.svelte';
</script>

<h1 class="text-center font-bold text-4xl uppercase mt-10">
	<span class="text-primary">What</span> we do
</h1>
<div class="my-5">
	<Divider src="code.png" />
</div>
<p class="max-w-xl mx-auto text-center mb-10">
	We specialize in small business web design and development for an affordable price. Every
	line of code is hand-written to ensure the best performance, which helps bring in more
	customers to your site and bring more revenue to your business. <a class="font-semibold text-primary" href="/services">LEARN MORE</a>
</p>
<div class="flex gap-3 flex-col md:flex-row">
	<div class="flex flex-col items-center">
		<Picture mobileSrc="smartphone.png" alt="mobile first" width="70" height="70" />
		<h1 class="font-bold text-xl mb-4 mt-3">Mobile-First Design</h1>
		<p class="text-center">
			We build for mobile first then adjust for computer viewing, which makes it rank much higher on Google
			Search.
		</p>
	</div>
	<div class="flex flex-col items-center">
		<Picture mobileSrc="responsive.png" alt="fully responsive" width="70" height="70" />
		<h1 class="font-bold text-xl mb-4 mt-3">Fully Responsive</h1>
		<p class="text-center">
			Your website will fit all mobile, tablet, and desktop screen sizes so customers can
			access your site from anywhere.
		</p>
	</div>
	<div class="flex flex-col items-center">
		<Picture mobileSrc="coding.png" alt="optimization" width="70" height="70" />
		<h1 class="font-bold text-xl mb-4 mt-3">Optimization</h1>
		<p class="text-center">
			60% of all internet traffic is on mobile devices, so we optimize your website to perform
			best on mobile.
		</p>
	</div>
</div>
