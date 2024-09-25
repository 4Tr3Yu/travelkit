<script>
	import Workouts from "../components/Workouts.svelte";
	import { onMount } from 'svelte';

	export let data;
	onMount(async () => {
		
		console.log(data);
	});
</script>
<div class="container h-full mx-auto ">
	<h2 class="mb-2 mt-4">Other Links</h2>
	<nav class="mb-4">
		<a href="/backdoor" class="btn btn-ghost border ">Create Programs</a>
		<a href="/fligths" class="btn btn-ghost border">Fligths</a>
	</nav>

	<Workouts/>
	
</div>

<style lang="postcss">
	
</style>
