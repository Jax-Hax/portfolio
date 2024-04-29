<script lang="ts">
    export let desktopSrc: string;
    export let mobileSrc: string;
    export let fallbackSrc: string = desktopSrc
    export let alt: string
    export let width: number = 1920
    export let height: number = 1280
</script>
<picture>
    <!-- Mobile Image -->
    <source media="(max-width: 600px)" srcset={mobileSrc}>
    <!-- Desktop Image -->
    <source media="(min-width: 601px)" srcset={desktopSrc}>
    <!-- Fallback Image -->
    <img aria-hidden="true" loading="lazy" decoding="async" src={fallbackSrc} {alt} {width} {height}>
</picture>