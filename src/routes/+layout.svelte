<script>
	import Navbar from './navbar/Navbar.svelte';
	import '../app.css';
</script>

<div class="app">
	 <Navbar /> 

	<main>
		<slot />
	</main>
</div>

<style>
	
</style>


<!--<style lang="postcss">-->