<svelte:head>
	<title>About</title>
</svelte:head>

<script>
    import { blur, fade, fly, slide } from 'svelte/transition'
</script>

<style>
	.page {
		background-color: #fffefe;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23e5ddd5' fill-opacity='0.26' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
		/* background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e5ddd5' fill-opacity='0.25' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E"); */
		/* background-color: #ffffff; */
		background-repeat: repeat;
		/* background-image: url("data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 0H0v36h36V0zM15.126 2H2v13.126c.367.094.714.24 1.032.428L15.554 3.032c-.188-.318-.334-.665-.428-1.032zM18 4.874V18H4.874c-.094-.367-.24-.714-.428-1.032L16.968 4.446c.318.188.665.334 1.032.428zM22.874 2h11.712L20 16.586V4.874c1.406-.362 2.512-1.468 2.874-2.874zm10.252 18H20v13.126c.367.094.714.24 1.032.428l12.522-12.522c-.188-.318-.334-.665-.428-1.032zM36 22.874V36H22.874c-.094-.367-.24-.714-.428-1.032l12.522-12.522c.318.188.665.334 1.032.428zm0-7.748V3.414L21.414 18h11.712c.362-1.406 1.468-2.512 2.874-2.874zm-18 18V21.414L3.414 36h11.712c.362-1.406 1.468-2.512 2.874-2.874zM4.874 20h11.712L2 34.586V22.874c1.406-.362 2.512-1.468 2.874-2.874z' fill='%23dcdcdc' fill-opacity='0.19' fill-rule='evenodd'/%3E%3C/svg%3E"); */
	}
</style>
<main out:fade in:fade="{{delay: 500}}" class="flex-1 lg:flex lg:flex-col p-10 lg:p-20 lg:pr-0 align-middle page">
	<div class="lg:w-1/2">
		<h1 class="font-display text-4xl lg:text-5xl"> A little bit about me. </h1>
		<div class="pt-4 font-body text-xl">
			I'm currently a junior at the University of Florida, where I'm studying computer science and mathematics, and I interned at American Express this past summer.  
			<!-- <br /> -->
			I have experience with several programming languages and frameworks, and I'm always looking to learn more. 
			Right now, I'm learning more about Svelte (which this webpage is built with!). 
			<br />
			<br />
			You can find more about my background and the projects I've worked on throughout this webpage. 
			<!-- <br /> -->
			Feel free to reach out to me through email or LinkedIn. 
		</div>
	</div>
	<div class="mt-10 lg:mt-0 lg:w-1/2 lg:flex lg:items-center lg:justify-center lg:fixed lg:self-end">
		<div class="max-w-xs rounded overflow-hidden shadow-lg bg-card-bg">
			<img class="hidden lg:block w-full" src="personal.png" alt="Rohil Tuli">
			<div class="px-6 py-4">
			  <div class="font-display text-2xl mb-2 lg:text-center">Rohil Tuli</div>
			</div>
			<div class="flex flex-col lg:items-center px-6 pb-4">
				<a target="_blank" href="https://goo.gl/maps/wLs676jT36KNsCGe7" class="flex my-2 bg-gray-100 rounded px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
					<img class="fill-current self-center w-4 h-4 mr-2" alt="Location" src="location.svg" />
					Student at Gainesville, FL
				</a>
				<a target="_blank" href="mailto:rohil.tuli@gmail.com" class="flex my-2 bg-gray-100 rounded px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
					<img class="fill-current self-center w-4 h-4 mr-2" alt="Email" src="mail.svg" />
					rohil.tuli@gmail.com
				</a>
				<a target="_blank" href="/resume.pdf" class="flex my-2 bg-gray-100 rounded px-3 py-1 text-sm font-semibold text-grey-darker">
					<img class="fill-current self-center w-4 h-4 mr-2" alt="Resume" src="resume.svg" />
					PDF of Resume
				</a>
			</div>
		</div>
	</div>
</main>