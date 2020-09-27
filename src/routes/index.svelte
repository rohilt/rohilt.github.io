<svelte:head>
	<title>Rohil Tuli</title>
</svelte:head>

<script>
	import { blur, fade, fly, slide } from 'svelte/transition'
	import { goto } from '@sapper/app'
</script>

<div out:fade in:fade="{{delay: 500}}" class="page flex flex-col select-none min-h-screen">
<main on:click="{() => goto('/about')}" class="flex-1 pb-0 pt-16 px-16 lg:px-20 align-middle select-none">
	<h1 class="font-display text-5xl lg:text-6xl"> Hello. I'm Rohil. </h1>
	<h1 class="font-display text-5xl lg:text-6xl">Welcome to my website. </h1>
	<div class="hidden lg:block font-body mt-10 text-xl uppercase tracking-wider animate-pulse text-gray-600">Click anywhere to continue</div>
	<div class="lg:hidden font-body text-center mt-10 text-xl uppercase tracking-wider animate-pulse text-gray-600">Tap to continue</div>
</main>
<img out:blur in:blur="{{delay: 250}}" class="hidden lg:block pin-b sticky bottom-0" src="mountain.png" alt="mountain" />
</div>