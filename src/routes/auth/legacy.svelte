<script lang="ts">
    let password = '';
    let email = '';
    export let _signUpNewUser: (email: string, password: string) => void;
    
    function checkUser() {
        if (email === '' || password === '') {
            alert('Please fill in all fields');
            return;
        }
        _signUpNewUser(email, password);
    }
</script>
<div class="container h-full mx-auto">
	<h2 class="h2">Register</h2>
    <hr class="w-full my-4">
	<div class=" flex justify-center items-center mx-auto transition-[width] duration-200 w-full">
		<form class="w-full card p-4 text-token space-y-4">
			
			<label class="label"
				><span>Email</span>
				<input class="input" type="email" placeholder="Enter email address..." /></label
			>
            <label class="label"
				><span>Password</span> <input class="password" type="password" placeholder="8 character minimum" /></label
			>
			<div class="text-right"><button class="btn variant-filled" on:click={checkUser}> Register</button></div>
		</form>
	</div>
</div>
