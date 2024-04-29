<script lang="ts">
    export let mobileSrc: string;
    export let desktopSrc: string = mobileSrc;
    export let fallbackSrc: string = desktopSrc
    export let alt: string
    export let width: string = "1920"
    export let height: string = "1280"
</script>
<picture>
    <!-- Mobile Image -->
    <source media="(max-width: 600px)" srcset={mobileSrc}>
    <!-- Desktop Image -->
    <source media="(min-width: 601px)" srcset={desktopSrc}>
    <!-- Fallback Image -->
    <img aria-hidden="true" loading="lazy" decoding="async" src={fallbackSrc} {alt} {width} {height}>
</picture>