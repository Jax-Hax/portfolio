<script lang="ts">
	export let currentPage: string;
    let pages = [{name: "Home", link: "/"}, {name: "About", link: "/about"}, {name: "Services", link: "/services"}, {name: "Portfolio", link: "/portfolio"}, {name: "Blog", link: "/blog"}, {name: "Contact", link: "/contact"}]
</script>

<div class="flex justify-around items-center px-10 py-5 max-w-7xl mx-auto">
	<img class="w-[290px] h-auto mr-40" src="" alt="company logo"/>
	<div class="flex justify-between flex-1 h-min">
        {#each pages as page}
		    <a class={currentPage === page.name ? 'border-b-[3px] border-b-primary pb-2' : ''} href={page.link}>{page.name}</a>
        {/each}
	</div>
</div>
