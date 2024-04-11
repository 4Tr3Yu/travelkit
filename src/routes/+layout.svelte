<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import MainNav from '../components/MainNav.svelte';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<MainNav/>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
