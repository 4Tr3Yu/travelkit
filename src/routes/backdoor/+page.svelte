<script lang="ts">
	import type {Program} from '$lib/types';
	let edit = false;
	const dummy = [
		{ id: 1, name: 'Program 1', description: 'This is a description of program 1' },
		{ id: 2, name: 'Program 2', description: 'This is a description of program 2' }
	];
	let newProgram: Program = {
		name: '',
		description: '',
		weeks: []
	};

	function toggleEdit() {
		edit = !edit;
		newProgram = {
			name: '',
			description: '',
			weeks: []
		}
	}
	function addWeek() {
		if (!newProgram.weeks) {
			newProgram.weeks = [];
		}
		newProgram.weeks = [...newProgram.weeks, { name: '', days: []}];
		console.log('from add week',newProgram);
	}

	function addDay(weekIndex: number) {
		if (!newProgram.weeks) {
			newProgram.weeks = [];
		}
		newProgram.weeks[weekIndex].days = [...newProgram.weeks[weekIndex].days, { name: '', workouts: []}];
		console.log('from days',newProgram);
	}
	function addWorkout(weekIndex: number, dayIndex: number) {
		if (!newProgram.weeks) {
			newProgram.weeks = [];
		}
		newProgram.weeks[weekIndex].days[dayIndex].workouts = [...newProgram.weeks[weekIndex].days[dayIndex].workouts, { name: '', details: ''}];
		console.log('from workout',newProgram);
	}
</script>

<div class="container h-full mx-auto">
	<h2 class="h2">Backdoor</h2>
	<h3 class="h3">Programs List</h3>
	<hr class="w-full my-4" />
	<div class="w-full text-token grid grid-cols-1 md:grid-cols-3 gap-4">
		{#if dummy.length === 0}
			<div class="card bg-secondary-50 p-4 flex justify-center items-center">
				<p>No programs found</p>
			</div>
		{:else if dummy.length > 0 && !edit}
			{#each dummy as program}
				<div class="card">
					<header class="card-header">
						<h4 class="h4">{program.name}</h4>
					</header>
					<section class="p-4">
						<p>{program.description}</p>
					</section>
					<footer class="card-footer">
						<button type="button" class="btn variant-ghost">
							<span>✏️</span>
							<span>Edit</span>
						</button>
						<button type="button" class="btn variant-ghost">
							<span>💀</span>
							<span>Delete</span>
						</button>
					</footer>
				</div>
			{/each}
		{:else}
			<div class="card bg-initial p-4 col-span-3">
				<header class="card-header">
					<h4 class="h4">Create program</h4>
				</header>
				<section class="p-4">
					<label class="label mb-4 flex">
						<span class="w-50">Program Name</span>
						<input class="input" type="text" bind:value={newProgram.name} placeholder="Name" />
					</label>
					<label class="label mb-4 flex">
						<span>Description</span>
						<input class="input" type="text" bind:value={newProgram.description} placeholder="Short description" />
					</label>

					<hr class="w-full my-4" />
					{#if newProgram.weeks}
					{#each newProgram.weeks as week, weekIndex}
						<div class="card bg-ghost mb-2">
							<header class="card-header">
								<h5 class="h5">Week {weekIndex+1}</h5>
							</header>
							<section class="p-4">
								<h5 class="h5">Days</h5>
								<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
									{#each week.days as day, dayIndex}
										<div class="card color-surface-500 p-4">
											<label class="label mb-4">
												<strong>Day Name</strong>
												<input class="input" type="text" bind:value={day.name} placeholder="Day Name" />
											</label>
											<hr class="w-full mt-2">
											<hr class="w-full my-2">

											
											{#each day.workouts as workout, index}
												<label class="label mb-4">
													<span>Workout Name</span>
													<input class="input" type="text" bind:value={workout.name} placeholder="Workout Name" />
												</label>
												<label class="label mb-4">
													<span>Workout Description</span>
													<textarea class="input" bind:value={workout.details} placeholder="EMOM 5" />
												</label>
												<hr class="w-full my-2">
											{/each}
											{#if day.workouts.length < 5}
												<button type="button" class="btn variant-ghost w-full" on:click={() => addWorkout(weekIndex, dayIndex)}>
													<span>Add Workout ➕</span>
												</button>
												
											{/if}
										</div>
									{/each}
									{#if week.days.length < 7}
										<div class="card bg-secondary p-4 flex justify-center items-center">
											
											<button type="button" class="btn variant-ghost w-full" on:click={() => addDay(weekIndex)}>
												<span>Add Day ➕</span>
											</button>
										</div>
									{/if}
								</div>
								
							</section>
							<footer class="card-footer">
								<button type="button" class="btn variant-ghost btn-danger">
									<span>💀</span>
									<span>Delete</span>
								</button>
								
							</footer>
						</div>
					{/each}
					{/if}
					<button type="button" class="btn variant-ghost w-full mt-4" on:click={addWeek}>
						<span>Add Week ➕</span>
					</button>
					<hr class="w-full mt-4" />
				</section>
				<footer class="card-footer flex flex-row-reverse gap-x-2 border-t-1 border-sky-300">
					<button type="button" class="btn variant-ghost bg-danger" on:click={toggleEdit}>
						<span>Cancel</span>
					</button>
					<button type="button" class="btn variant-ghost bg-success">
						<span>Save</span>
					</button>
				</footer>
			</div>
		{/if}
		{#if !edit}
			<div class="card bg-initial p-4 flex justify-center items-center">
				<button type="button" class="btn-icon variant-ghost btn-xl" on:click={toggleEdit}>
					<span>➕</span>
				</button>
			</div>
		{/if}
	</div>
</div>
