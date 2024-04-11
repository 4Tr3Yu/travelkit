<script>
	import Workouts from "../components/Workouts.svelte";
	import { onMount } from 'svelte';

	export let data;
	onMount(async () => {
		
		console.log(data);
	});
</script>
<div class="container h-full mx-auto ">
	<Workouts/>
	
</div>

<style lang="postcss">
	
</style>
