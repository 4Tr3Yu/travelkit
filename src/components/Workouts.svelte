<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { data } from './Workouts';
</script>

<div>
	<h2 class="h1 font-bold pb-4">Demo Program</h2>
	<hr class="mb-8" />

	<Accordion autocollapse>
		{#each data as week}
			<AccordionItem>
				<svelte:fragment slot="lead">
					<h2 class="h2 font-bold">Week</h2>
				</svelte:fragment>
				<svelte:fragment slot="summary">
					<h2 class="h2 font-bold">{week.name.split(' ')[1]}</h2>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<Accordion autocollapse>
						{#each week.days as day}
							<AccordionItem>
								<svelte:fragment slot="lead">
									<h3 class="h3 font-bold font-italic">{day.name}</h3>
								</svelte:fragment>
								<svelte:fragment slot="summary">.</svelte:fragment>
								<svelte:fragment slot="content">
									<div class=" text-token space-y-4 card p-4">
										<dl class="list-dl">
											{#each day.exercises as exercise}
												<div class="py-10">
													<span class="badge-icon p-4 variant-soft-secondary">💀</span>
													<span class="flex-auto">
														<dt class="h4 font-bold mb-4">{exercise.name}</dt>
														{#if typeof exercise.details === 'string'}
															<dd class="text-sm opacity-75 mb-2">
																{exercise.details}
															</dd>
														{:else}
															{#each exercise.details as detail}
																<dd class="text-sm opacity-75 mb-2">
																	{detail}
																</dd>
															{/each}
														{/if}
													</span>
												</div>
												<hr class="opacity-50 color-white w-full my-8" />
											{/each}
										</dl>
									</div>
								</svelte:fragment>
							</AccordionItem>
						{/each}
					</Accordion>
				</svelte:fragment>
			</AccordionItem>
		{/each}
	</Accordion>
</div>

<style lang="postcss">
	.accordion-item {
		border-bottom: 1px solid white;
	}
</style>
