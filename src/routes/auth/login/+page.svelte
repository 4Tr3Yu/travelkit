<script lang="ts">
	import type { Provider } from '@supabase/supabase-js';
	import { supabase } from '$lib/supabaseClient.js';
	import type { HelperText } from '$lib/types';

	let email: string = '';
	let password: string = '';
	
	let helperText: HelperText = { error: null, text: null };
	
	const handleLogin = async (type: string) => {
		const {
			data: { user },
			error
		} = type === 'LOGIN'
				? await supabase.auth.signInWithPassword({ email, password })
				: await supabase.auth.signUp({ email, password });

		if (error) {
			helperText = { error: true, text: error.message };
		} else if (!user && !error) {
			helperText = {
				error: false,
				text: 'An email has been sent to you for verification!'
			};
		}
	};

	const handleOAuthLogin = async (provider: Provider) => {
		// You need to enable the third party auth you want in Authentication > Settings
		// Read more on: https://supabase.com/docs/guides/auth#third-party-logins
		const { error } = await supabase.auth.signInWithOAuth({ provider });
		if (error) console.log('Error: ', error.message);
	};
</script>

<div class="container h-full mx-auto">
	<h2 class="h2">Login</h2>
	<hr class="w-full my-4" />
	<div class=" flex justify-center items-center mx-auto transition-[width] duration-200 w-full">
		<form class="w-full card p-4 text-token space-y-4">
			<label class="label"
				><span>Email</span>
				<input bind:value={email} class="input" type="email" placeholder="Enter email address..." />
			</label>
			<label class="label"
				><span>Password</span>
				<input
					bind:value={password}
					class="input"
					type="password"
					placeholder="8 character minimum"
				/></label
			>
			{#if !!helperText.text}
				<div
					class="border px-1 py-2 my-2 text-center text-sm {helperText.error
						? 'bg-red-100 border-red-300 text-red-400'
						: 'bg-green-100 border-green-300 text-green-500'}"
				>
					{helperText.text}
				</div>
			{/if}
			<div class="text-right">
				<button on:click={() => handleLogin('REGISTER')} class="btn variant-ghost"> Register</button>
			</div>
            <hr class="w-full my-4">
            <div class="mt-3 w-full">
                <h3 class="h3">Or continue with...</h3>
        
                <div>
                    <div class="mt-3">
                        <span class="block rounded-md shadow-sm">
                            <button
                                on:click={() => handleOAuthLogin('google')}
                                type="button"
                                class="btn variant-ghost"
                            >
                                Google
                            </button>
                        </span>
                    </div>
                </div>
            </div>
		</form>
	</div>
</div>

