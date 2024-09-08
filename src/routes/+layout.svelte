<script>
	import Navbar from './navbar/Navbar.svelte';
	import NavbarSide from './code/NavbarSide.svelte';
	import '../app.css';
</script>

<div class="app">
	 <Navbar />
	 <NavbarSide /> 

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
	overflow-y: hidden;
	}
</style>


<!--<style lang="postcss">-->