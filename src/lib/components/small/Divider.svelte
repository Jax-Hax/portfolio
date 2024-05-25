<script lang="ts">
    export let src: string;
</script>
<div class="flex justify-center items-center">
    <div class="w-[50px] border-b-[1px] border-dashed"></div>
    <img {src} alt="divider" class="w-[30px] mx-3" loading="lazy" decoding="async">
    <div class="w-[50px] border-b-[1px] border-dashed"></div>
</div>