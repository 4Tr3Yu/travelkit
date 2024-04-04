<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	let data = [
		{
			name: 'Week 1',
			days: [
				{
					name: 'Tuesday',
					exercises: [
						{
							name: 'Back Squat',
							details: '5 SETS 5 REPS 70%'
						},
						{
							name: 'Weightlifting (Hang Squat Snatch)',
							details: [
								'EVERY O2:00 X 4',
								'6 HANG SQUAT SNATCH',
								'FIRST 2 REPS: HIGH HANG SQUAT SNATCH',
								'SECOND 2 REPS: HANG SQUAT SNATCH (ABOVE KNEE)',
								'THIRD 2 REPS : HANG SQUAT SNATCH (BELOW KNEE)',
								'START WITH THE 55% 1RM AND INCREASE WEIGHT',
								'Starting Weight: START WITH THE 55% 1RM AND INCREASE WEIGHT'
							]
						},
						{
							name: 'Weightlifting (Sotts Press)',
							details: '3 SET 5 SNATCH GRIP SOTTS PRESS @INCREASE WEIGHT IF YOU FEEL GOOD'
						},
						{
							name: 'Custom Metcon',
							details: ['EMOM 10', '1: 25 D.U.', '2: 10 BURPEES OVER BAR']
						}
					]
				},
				{
					name: 'Wednesday',
					exercises: [
						{
							name: 'Weightlifting (HIP THRUST)',
							details: '5 SETS 8 REPS @INCREASE WEIGHT'
						},
						{
							name: 'Weightlifting (SINGLE LEG RUMANIAN DEADLIFT)',
							details: '5 SETS 8/8 REPS'
						},
						{
							name: 'Custom Metcon',
							details: ['5 SETS', '10 STRICT DIPS', '10/10 SINGLE ARM DB ROW']
						},
						{
							name: 'Custom Metcon',
							details: ['3 SETS', '20 Hollow rocks', '30s Side plank (each side)']
						}
					]
				},
				{
					name: 'Thursday',
					exercises: [
						{
							name: 'Custom Metcon',
							details:[

								'RUN 1 MILE @EASY PACE',' THEN 40 SEC ON/ 20 SEC OFF X 8', '1)CAL BIKE',' 2)MTS SKI',' 3) CAL ROW',' 4) TURKISH GET UP@MODERATE WEIGHT',' REST 90 SEC ','REPEAT 3 ','RUN 1 MILE @EASY PACE'
              ]
						}
					]
				},
				{
					name: 'Friday',
					exercises: [
						{
							name: 'Weightlifting (POWER CLEAN)',
							details:[

								'EVERY 02:00 X 7',' HANG POWER CLEAN(ABOVE KNEE) ','HANG POWER CLEAN(BELOW KNEE) ','POWER CLEAN ','70% -1RM POWER CLEAN'
              ]
						},
						{
							name: 'Weightlifting (Split Jerk)',
							details:[

								'EVERY 02:00 X 5',' 1 PUSH PRESS',' 1 PUSH JERK (2 SEC PAUSE)',' 1 SPLIT JERK (2 SEC PAUSE )',' 70% - 75% 1RM PUSH PRESS'
              ]
						},
						{
							name: 'Custom Metcon',
							details: [
								'EMOM 16',
								'1) 10 DB HANG CLEAN&JERK',
								'2) 8 BURPEES BOX JUMP OVER',
								'3) 12 ALT PISTOLS',
								'4) 10 PULL UPS'
							]
						},
						{
							name: 'Custom Metcon',
							details: ['3 SETS', '20 V SIT UP WITH MEDBALL', '20 SEG L HOLD PARALLELE']
						}
					]
				}
			]
		},
		{
			name: 'Week 2',
			days: [
				{
					name: 'Monday',
					exercises: [
						{
							name: 'A) EMOM 16',
							details:[

								'30 SEC ON/ 30 SEC OFF X 16 ','1) CHIN OVER BAR',' 2) HOLD TOP THE RING',' 3) L HANGIG HOLD',' 4) WALL FACING HAND STAND HOLD'
              ]
						},
						{
							name: 'B)EMOM 24',
							details: [
								'1) 8 DUAL DB THRUSTER 2 X 20 kg',
								'2) 8 TOES TO BAR',
								'3) 5 SHUTTLE RUNS (2x7.5m)',
								'5) 8 DUAL DB SNATCHES 2 X 20 KG',
								'6) 8 PULL UPS'
							]
						},
						{
							name: 'C)3 SET',
							details: '40 SEC LATERAL PLANK EACH SIDE'
						}
					]
				},
				{
					name: 'Tuesday',
					exercises: [
						{
							name: 'A)(Back Squat)',
							details:
								'4 REPS 4 SETS 75% - 80% 1 RM 1 FIRST REPS 2 PAUSE AT BOTTOM +3 NORMAL SQUATS'
						},
						{
							name: 'B) Weightlifting (Power Snatch)',
							details: [
								'EVERY 02:00 X 5 ','1 HANG POWER SNATCH ABOVE KNEE',' 1 HANG POWER SNATCH BELOW KNEE',' 1 POWER SNATCH FROM FLOOR',' @70% 1 RM 1s pause in EVERY catch position'
							]
						},
						{
							name: 'C) Weightlifting (Sotts Press)',
							details: '3 SET 5 SNATCH GRIP SOTTS PRESS @INCREASE WEIGHT IF YOU FEEL GOOD'
						},
						{
							name: 'D) Custom Metcon',
							details: 'FOR TIME 120 SIT UP FROM 00:00 AND EVERY 01:30 6 BURPEES TIME CAP 12'
						}
					]
				},
				{
					name: 'Wednesday',
					exercises: [
						{
							name: 'A)Weightlifting (HIP THRUST)',
							details: '5 SETS 5 REPS @INCREASE WEIGHT'
						},
						{
							name: 'B) FOR QUALITY',
							details: ['4 SETS', '10/10 BULGARIAN DEADLIFT (DBS)', '8/8 COSSACK SQUAT (DB)','6 WEIGHTED STRICT DIPS', '10 BARBELL PEDLAY ROW', '(MOVE SLOW WITH FULL CONTROL, WEIGHT DOESNT MATHERS)' ]
						},
						
						{
							name: 'C) Custom Metcons',
              details: ['EVERY 02:30 X 5', 
'5 DEADLIFT 205 LB',
'10 TOES TO BAR',
'15 WALL BALL SHOT 9KG']
						},
            
            {
              name: 'D) Custom Metcon',
              details: [
                '3 SETS',
'20 Plank Forward & Back',
'https://www.youtube.com/watch?v=EhwxAoq3pDo'
            }
					]
				},
				{
					name: 'Thursday',
					exercises: [
						{
							name: 'A) Custom Metcon',
							details:
								'Amrap 20 100’ mts row 100 Single unders 100 mts Ski 10 step up ( Every set ad 50 mts of row and ski) REST 2 Amrap 20 100 mts run 5 inchworm 10 cal bike 20 mountain climbers 10 deck squat Every set add 100 mts run'
						}
					]
				},
				{
					name: 'Friday',
					exercises: [
						{
							name: 'A) Weightlifting (Split Jerk)',
							details:
								'EVERY 02:00 X 5 1 PUSH PRESS 1 PUSH JERK (2 SEC PAUSE) 1 SPLIT JERK (2 SEC PAUSE ) 75% - 80% 1RM PUSH PRESS'
						},
						{
							name: 'B)Custom Metcon',
							details: [
								'FOR TIME',
								'3 ROUNDS',
								'25 D.U.',
								'5 POWER CLEAN',
								'10 HSPU',
								'REST 2',
								'3 ROUNDS',
								'25 D.U.',
								'5 SQUAT CLEAN',
								'10 HAND RELEASE PUSH UP',
								'REST 2',
								'3 ROUNDS',
								'25 D.U.',
								'5 POWER CLEAN&JERK',
								'10 PULL UPS',
								'TIME CAP 18',
								'BARBELL: 135 LB'
							]
						},
						{
							name: 'C) Custom Metcon',
							details: '3 SET 20 WEIGHTED LEG RAISES'
						}
					]
				}
			]
		},
		{
			name: 'Week 3',
			days: [
				{
					name: 'Monday',
					exercises: [
						{
							name: 'A) 4 SET',
							details:
								'1 MIN WALL SIT 4 REPS NEGATIVE PULL UPS (5 SEC DOWN) 4 NEGATIVE HAND STAND PUSH UP(4-5 SEC DOWN)'
						},
						{
							name: 'B) EMOM 12',
							details: [
								'1) 5 THRUSTER + 4 BAR FACING BURPEES + 2 CLUSTER 95 LB',
								'2) 14 CAL ROW',
								'3) 12 BOX JUMP OVER 60 CM'
							]
						},
						{
							name: 'C) 4 SET',
							details: '12 DB LATERAL RAISES 10 BARBELL CURL 8/8 DB TRICEP EXTENTION'
						},
						{
							name: 'D)3 SET',
							details: '40 SEC LATERAL PLANK'
						}
					]
				},
				{
					name: 'Tuesday',
					exercises: [
						{
							name: 'A) Weightlifting (Snatch)',
							details:
								'EVERY 01:30 X 5 ROUND 1: 1 HAPOWER SNATCH + 5 OVER HEAD SQUAT ROUND 2: 2 HANG POWER SNATCH + 4 OVER HEAD SQUAT ROUND 3: 3 HANG POWER SNATCH + 3 OVER HEAD SQUAT ROUND 4: 4 HANG POWER SNATCH + 2 OVER HEAD SQUAT ROUND 5 : 5 HANG POWER SNATCH + 1 OVER HEAD SQUAT 70% - 75% 1RM POWER SNATCH'
						},
						{
							name: 'B) Weightlifting (Sotts Press)',
							details: '3 SET 5 SNATCH GRIP SOTTS PRESS @INCREASE WEIGHT IF YOU FEEL GOOD'
						},
						{
							name: 'C) Weightlifting (Back Squat)',
							details:
								'5 SETS 1 PAUSED BACK SQUAT( 2 SEC PAUSE AT BOTTOM) + 2 BACK SQUAT 80% - 85%1RM'
						},
						{
							name: 'D) EVERY 02:00 X 5',
							details: '6 STRICT TOES TO BAR 200 MTS RUN 12 ALT PISTOLS'
						}
					]
				},
				{
					name: 'Wednesday',
					exercises: [
						{
							name: 'A) Weightlifting ( Hang Power Clean)',
							details: 'EVERY 01:30 X 7 POWER CLEAN + HANG POWER CLEAN 75% 1RM POWER CLEAN'
						},
						{
							name: 'B) Weightlifting (HIP THRUST)',
							details: '4 SETS 8 REPS @INCREASE WEIGHT'
						},
						{
							name: 'C) FOR QUALITY',
							details: ['4 SETS', '8/8 BULGARIAN DEADLIFT (DBS)', '6/6 COSSACK SQUAT (DB)']
						},
						{
							name: 'D) AMRAP 3',
							details: ['9 DEAD LIFT + 6 HANG POWER CLEAN + 3 PUSH JERK', '10 PULL UPS']
						}
					]
				},
				{
					name: 'Thursday',
					exercises: [
						{
							name: 'A) Custom Metcon',
							details:
								'AMRAP 10 15 CAL BIKE 1 MIN PLANK REST 2 AMRAP 10 100 CAL ROW MAX REPS D.U. REST 2 AMRAP 10 20 SHUTTLE RUN (2X 7.5MTS) 30/30 MTS SINGLE ARM FARMER CARRY REST 2 AMRAP 10 100 CAL ROW MAX REPS SIT UPS'
						}
					]
				},
				{
					name: 'Friday',
					exercises: [
						{
							name: 'A) Weightlifting (Push Press)',
							details: 'BUILD UP 5 HEAVY OF THE DAY THEN 3 SETS OF 5 REPS WITH THE 80% OF 5RM'
						},
						{
							name: 'B) Custom Metcon (Tiempo)',
							details: [
								'FOR TIME',
								'BUY IN 50 WALL BALL',
								'4 ROUNDS',
								'4 DEVIL PRESS2X20KG',
								'6 DUAL DB STEP OVER BOX',
								'8 CHEST TO BAR',
								'BUY OUT 50 WALL BALL'
							]
						},
						{
							name: 'C) Custom Metcon',
							details: '3 SET 20 MOUNTAIN CLIMBING (KNEE TOUCH ELBOWS) 10/10 LATERAL TWIST'
						}
					]
				}
			]
		},
		{
			name: 'Week 4',
			days: [
				{
					name: 'Monday',
					exercises: [
						{
							name: 'A) 4 SET',
							details:
								'45 SEC TALL WALL SIT 3 REPS HOLD PULL UPS (3 SEC HOLD ON THE TOP) NEGATIVE PULL UPS (5 SEC DOWN) 4 NEGATIVE HAND STAND PUSH UP(4-5 SEC DOWN)'
						},
						{
							name: 'B) EMOM 10 (40 SEC ON/20 OFF)',
							details: [
								'1) MAX CAL BIKE',
								'2) 20 - 24 BOX JUMP OVER',
								'EMOM 10 (40 SEC ON/20 OFF) 1)10 - 12 BAR FACING BURPEES 2) MAX CAL ROW'
							]
						},
						{
							name: 'C) 4 SET',
							details: '10 BARBELL CURL 8/8 DB TRICEP EXTENTION'
						},
						{
							name: 'D)3 SET',
							details: '40 SEC SIDE PLANK'
						}
					]
				},
				{
					name: 'Tuesday',
					exercises: [
						{
							name: 'A) Weightlifting (Snatch)',
							details:
								'EVERY 02:00 X 6 1 FULL SNATCH + 2 HANG POWER SNATCH 65% - 70% 1RM FULL SNATCH'
						},
						{
							name: 'B) Weightlifting (Sotts Press)',
							details: '4 SET 5 SNATCH GRIP SOTTS PRESS @INCREASE WEIGHT IF YOU FEEL GOOD'
						},
						{
							name: 'C) Weightlifting (Back Squat)',
							details: '6 SETS 2 BACK SQUAT @MODERATE WEIGHT'
						},
						{
							name: 'D) Custom Metcon',
							details:
								'AMRAP 10 12 DB HANG SQUAT CLEANS 10 PULL UPS 40 MT FARMER CARRY 20 DOUBLE UNDERS'
						}
					]
				},
				{
					name: 'Wednesday',
					exercises: [
						{
							name: 'A) Weightlifting (SQUAT CLEAN)',
							details:
								'EVERY 02:00 X 5 1 HANG POWER CLEAN 1 POWER CLEAN FROM KNEE 1 SQUAT CLEAN @70% 1RM POWER CLEAN'
						},
						{
							name: 'B) Weightlifting (HIP THRUST)',
							details: '5 SETS 5 REPS @INCREASE WEIGHT'
						},
						{
							name: 'C) Custom Metcon',
							details: [
								'4 SETS',
								'8/8 REAR FOOT ELEVATED SPLIT SQUAT',
								'12 RUSSIAN TWIST WITH PLATE'
							]
						},
						{
							name: 'D) AMRAP 3',
							details: ['9 DEAD LIFT + 6 SQUAT CLEAN + 3 PUSH PRESS', '10 BURPEE OVER BAR']
						}
					]
				},
				{
					name: 'Thursday',
					exercises: [
						{
							name: 'A) Custom Metcon',
							details:
								'AMRAP 25 200 MTS RUN 10 DEAD LIFT 155 LBS 8 HAND STAND PUSH UPS REST 1 AMRAP 25 10 CAL BIKE 8 HANG POWER SNATCH 65 LBS 6 RING MUSCLE UPS'
						}
					]
				},
				{
					name: 'Friday',
					exercises: [
						{
							name: 'A) Weightlifting (Clean and Jerk)',
							details:
								'EVERY 02:00 X 7 HANG POWER CLEAN(ABOVE KNEE) HANG POWER CLEAN(BELOW KNEE) POWER CLEAN 75% - 80% 1RM POWER CLEAN'
						},
						{
							name: 'B)Custom Metcon',
							details: [
								'FOR TIME',
								'3 ROUNDS',
								'20 WALL BALL',
								'30 CAL BIKE',
								'50 D.U.',
								'REST 3',
								'2 ROUNDS',
								'30 WALL BALL',
								'40 CAL BIKE',
								'100 D.U.',
								'REST 3',
								'1 ROUNDS',
								'40 WALL BALL',
								'50 CAL BIKE',
								'200 D.U.',
								'BARBELL: 135 LB'
							]
						},
						{
							name: 'C) Custom Metcon',
							details: '3 SET 20 HOLLOW ROCKS 20 SEG SIDE PLANK EACH SIDE'
						}
					]
				}
			]
		},
		{
			name: 'Week 5',
			days: [
				{
					name: 'Monday',
					exercises: [
						{
							name: 'A) 5 SET',
							details:
								'30 SEC BOTTOM OF SQUAT HOLDS 5 FRONT SQUAT 65% - 70% 1 RM 2 SEC PAUSE AT BOTTOM'
						},
						{
							name: 'B) EMOM 12 (40 SEC ON/20 OFF)',
							details: [
								'1) MAX DOUBLE UNDERS',
								'2) 8/8 LATERAL STEP UPS 16 INCHES',
								'EMOM 12 (40 SEC ON/20 OFF) 1) 15/15 MT SINGLE ARM OVER HEAD DB WALKING LUNGES',
								'2) MAX BURPEE BOX JUMP OVER 24 INCHES'
							]
						},
						{
							name: 'C) 5 SET',
							details: '10 DUAL DB HANG CLEAN & JERK 2 X 20 KG 10 PULL UPS'
						},
						{
							name: 'D)3 SET',
							details: '40 SEC HOLLOW HOLD'
						}
					]
				},
				{
					name: 'Tuesday',
					exercises: [
						{
							name: 'A) Weightlifting (Snatch)',
							details:
								'EVERY 01:30 X 5 1 POWER SNATCH 1 HANG SNATCH ABOVE KNEE 1 HANG SNATCH BELOW KNEE 1 SNATCH @70% - 75% 1RM SNATCH'
						},
						{
							name: 'B) Weightlifting (Sotts Press)',
							details: '3 SET 5 SNATCH GRIP SOTTS PRESS @INCREASE WEIGHT IF YOU FEEL GOOD'
						},
						{
							name: 'C) Weightlifting (Back Squat)',
							details: '6 SETS 2 BACK SQUAT @MODERATE WEIGHT'
						},
						{
							name: 'D) Custom Metcon',
							details:
								'AMRAP 10 12 DB HANG SQUAT CLEANS 10 PULL UPS 40 MT FARMER CARRY 20 DOUBLE UNDERS'
						}
					]
				},
				{
					name: 'Wednesday',
					exercises: [
						{
							name: 'A) Weightlifting (SQUAT CLEAN)',
							details:
								'EVERY 02:00 X 5 1 HANG POWER CLEAN 1 POWER CLEAN FROM KNEE 1 SQUAT CLEAN @70% 1RM POWER CLEAN'
						},
						{
							name: 'B) Weightlifting (HIP THRUST)',
							details: '5 SETS 5 REPS @INCREASE WEIGHT'
						},
						{
							name: 'C) Custom Metcon',
							details: [
								'4 SETS',
								'8/8 REAR FOOT ELEVATED SPLIT SQUAT',
								'12 RUSSIAN TWIST WITH PLATE'
							]
						},
						{
							name: 'D) AMRAP 3',
							details: ['9 DEAD LIFT + 6 SQUAT CLEAN + 3 PUSH PRESS', '10 BURPEE OVER BAR']
						}
					]
				},
				{
					name: 'Thursday',
					exercises: [
						{
							name: 'A) Custom Metcon',
							details:
								'AMRAP 25 200 MTS RUN 10 DEAD LIFT 155 LBS 8 HAND STAND PUSH UPS REST 1 AMRAP 25 10 CAL BIKE 8 HANG POWER SNATCH 65 LBS 6 RING MUSCLE UPS'
						}
					]
				},
				{
					name: 'Friday',
					exercises: [
						{
							name: 'A) Weightlifting (Clean and Jerk)',
							details:
								'EVERY 02:00 X 7 HANG POWER CLEAN(ABOVE KNEE) HANG POWER CLEAN(BELOW KNEE) POWER CLEAN 75% - 80% 1RM POWER CLEAN'
						},
						{
							name: 'B)Custom Metcon',
							details: [
								'FOR TIME',
								'3 ROUNDS',
								'20 WALL BALL',
								'30 CAL BIKE',
								'50 D.U.',
								'REST 3',
								'2 ROUNDS',
								'30 WALL BALL',
								'40 CAL BIKE',
								'100 D.U.',
								'REST 3',
								'1 ROUNDS',
								'40 WALL BALL',
								'50 CAL BIKE',
								'200 D.U.',
								'BARBELL: 135 LB'
							]
						},
						{
							name: 'C) Custom Metcon',
							details: '3 SET 20 HOLLOW ROCKS 20 SEG SIDE PLANK EACH SIDE'
						}
					]
				}
			]
		}
	];
</script>

<div>
	<h2 class="h1 font-bold pb-4">Workout</h2>
  <hr>

	<Accordion>
		{#each data as week}
			<AccordionItem>
				<svelte:fragment slot="lead">
					<h2 class="h2 font-bold">Week</h2>
				</svelte:fragment>
				<svelte:fragment slot="summary">
					<h2 class="h2 font-bold">{week.name.split(' ')[1]}</h2>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<Accordion>
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
                        <hr class="opacity-50 color-white w-full my-8">
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
