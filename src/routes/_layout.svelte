<script>
	import Nav from '../components/Nav.svelte';
	import { blur, fade, fly, slide } from 'svelte/transition'
	export let segment;
</script>

<style>
	main {
		background-color: #fffefe;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23e5ddd5' fill-opacity='0.26' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>