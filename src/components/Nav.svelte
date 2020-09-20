<script>
	let innerWidth = 0;
	$: showMenu = innerWidth >= 1024;
	import { blur, fade, fly, slide } from 'svelte/transition'
	export let segment;
</script>

<svelte:window bind:innerWidth={innerWidth} />

<nav transition:slide class="flex sticky top-0 items-center justify-between flex-wrap bg-white p-4 shadow z-10 bg-card-bg">
	<span class="w-1/6 text-black ml-3 mr-6 font-semibold font-display text-5xl select-none">R/T</span>
	<div class="block lg:hidden select-none">
		<button on:click={() => showMenu = !showMenu} class="flex items-center px-3 py-2 text-black-200 border-black-400 lg:hover:text-gray-500">
		<svg class="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
		</button>
	</div>
	{#if showMenu}
	<div transition:slide class="w-5/6 block flex-grow lg:flex lg:items-center lg:w-auto select-none">
		<div class="font-display lg:flex lg:justify-center text-sm lg:flex-grow">
		<a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-2xl text-black-200 mr-8 lg:hover:font-semibold">
			Home
			{#if segment === undefined} <img transition:fade class="hidden lg:block object-contain h-2 w-10 mx-auto" src='underline.svg' alt='_'/> {/if}
		</a>
		<a href="/about" class="block mt-4 lg:inline-block lg:mt-0 text-2xl text-black-200 mr-8 lg:hover:font-semibold">
			About Me
			{#if segment === 'about'} <img transition:fade class="hidden lg:block object-contain h-2 w-10 mx-auto" src='underline.svg' alt='_'/> {/if}
		</a>
		<a href="/experience" class="block mt-4 lg:inline-block lg:mt-0 text-2xl text-black-200 mr-8 lg:hover:font-semibold">
			Experience
			{#if segment === 'experience'} <img transition:fade class="hidden lg:block object-contain h-2 w-10 mx-auto" src='underline.svg' alt='_'/> {/if}
		</a>
		<a href="/projects" class="block mt-4 lg:inline-block lg:mt-0 text-2xl text-black-200 mr-8 lg:hover:font-semibold">
			Projects
			{#if segment === 'projects'} <img transition:fade class="hidden lg:block object-contain h-2 w-10 mx-auto" src='underline.svg' alt='_'/> {/if}
		</a>
		</div>
	</div>
	<div transition:slide class="w-1/2 lg:w-1/6 justify-begin lg:justify-end flex self-end lg:self-auto mt-6 lg:mt-0 lg:items-center select-none">
	<!-- <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-black-500 hover:bg-white mt-4 lg:mt-0">Download</a> -->
		<a target="_blank" href="https://www.linkedin.com/in/rohiltuli/"><img class="object-contain h-16 w-16 p-4" src="linkedin.png" alt="LinkedIn"/></a>
		<a target="_blank" href="https://github.com/rohilt"><img class="object-contain h-16 w-16 p-4" src="github.png" alt="GitHub"/></a>
	</div>
	{/if}
</nav>