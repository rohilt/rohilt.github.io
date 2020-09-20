<svelte:head>
	<title>Experience</title>
</svelte:head>

<script>
    import { blur, fade, fly, slide } from 'svelte/transition'
</script>

<style>
	.page {
		background-color: #fffefe;
		background-repeat: repeat;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23dfdfdf' fill-opacity='0.16'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}
</style>
<main out:fade in:fade="{{delay: 500}}" class="flex-1 p-10 lg:p-20 align-middle page">
	<h1 class="font-display text-4xl lg:text-5xl"> Where I've learned </h1>
	<div class="pt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
		<div class="max-w-sm rounded overflow-hidden shadow-xl bg-white bg-opacity-95">
			<div class="px-6 py-4">
			<div class="font-display text-xl mb-2">The University of Florida</div>
			<p class="text-gray-700 text-base">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
			</p>
			</div>
		</div>
		<div class="max-w-sm rounded overflow-hidden shadow-xl bg-white bg-opacity-95">
			<div class="px-6 py-4">
			<div class="font-display text-xl mb-2">Land O Lakes High School</div>
			<p class="text-gray-700 text-base">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
			</p>
			</div>
		</div>
	</div>
	<h1 class="font-display text-4xl lg:text-5xl mt-4"> What I've been doing </h1>
	<div class="pt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
		<div class="max-w-sm rounded overflow-hidden shadow-xl bg-white bg-opacity-95 cursor-pointer">
			<div class="px-6 py-4">
				<div class="font-display text-2xl mb-2">American Express</div>
				<div class="font-display text-xl mb-2 text-gray-700">Technology Intern</div>
				<div class="font-body font-thin uppercase tracking-wider text-sm mb-2 text-gray-600">July 2020 to August 2020</div>
			<!-- <p class="text-gray-700 text-base">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
			</p> -->
			</div>
		</div>
		<div class="max-w-sm rounded overflow-hidden shadow-xl bg-white bg-opacity-95">
			<div class="px-6 py-4">
			<div class="font-display text-2xl mb-2">Embedded Systems Lab</div>
			<div class="font-display text-xl mb-2 text-gray-600">Undergraduate Researcher</div>
			<!-- <p class="text-gray-700 text-base">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
			</p> -->
			</div>
		</div>
		<div class="max-w-sm rounded overflow-hidden shadow-xl bg-white bg-opacity-95">
			<div class="px-6 py-4">
			<div class="font-display text-xl mb-2">Mathnasium</div>
			<div class="font-display text-l mb-2 text-gray-600">Instructor</div>
			<p class="text-gray-700 text-base">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
			</p>
			</div>
		</div>
		<div class="max-w-sm rounded overflow-hidden shadow-xl bg-white bg-opacity-95">
			<div class="px-6 py-4">
			<div class="font-display text-xl mb-2">FRC Team 5276</div>
			<div class="font-display text-l mb-2 text-gray-600">Lead Programmer</div>
			<p class="text-gray-700 text-base">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
			</p>
			</div>
		</div>
		<div class="max-w-sm rounded overflow-hidden shadow-xl bg-white bg-opacity-95">
			<div class="px-6 py-4">
			<div class="font-display text-xl mb-2">LOLHS Mu Alpha Theta</div>
			<div class="font-display text-l mb-2 text-gray-600">Vice President & Tutor</div>
			<p class="text-gray-700 text-base">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
			</p>
			</div>
		</div>
		<!-- Sci Oly? Pasco County library volunteer? Feeding America??? -->
	</div>
</main>