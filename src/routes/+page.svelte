<script lang="ts">
	import { goto } from '$app/navigation';
	let email = '';
	let isValidEmail: boolean = true;
	let submitBtn = () => {
		if (email.includes('@')) {
			isValidEmail = true;
			console.log('Valid Email ', email);
			localStorage.setItem('email', email);
			goto('/success');
		} else {
			isValidEmail = false;
			console.log('Invalid Email ', email);
		}
	};
</script>

<main
	class="p-2 font-robotoregular space-y-3 sm:space-y-0 sm:flex sm:flex-row-reverse sm:w-lvw sm:h-lvh sm:align-middle sm:items-center sm:justify-center"
>
	<div>
		<img
			src="/assets/images/illustration-sign-up-mobile.svg"
			alt="illustration-sign-up-mobile"
			class="block w-full h-48 object-cover rounded-2xl sm:hidden"
		/>
		<img
			src="/assets/images/illustration-sign-up-desktop.svg"
			alt="illustration-sign-up-mobile"
			class="sm:rounded-2xl sm:h-[500px] sm:w-auto hidden sm:block"
		/>
	</div>
	<div class="px-3 space-y-2 sm:mr-10 sm:px-0 sm:space-y-8">
		<div>
			<h1 class="text-3xl font-robotobold sm:text-5xl">Stay Updated!</h1>
		</div>
		<div>
			<p class="text-sm font-robotobold w-[270px] sm:w-auto">
				Join 60,000+ product managers receiving monthly updates on:
			</p>
		</div>
		<div class="text-sm sm:text-lg">
			<ul class="space-y-1">
				<li class="flex items-center space-x-2">
					<img
						src="/assets/images/icon-list.svg"
						alt=""
						class="w-4 h-auto mb-4 sm:mb-0 sm:w-5 sm-h-auto"
					/>
					<p>Product Discovering and Building What Matters</p>
				</li>
				<li class="flex items-center space-x-2">
					<img
						src="/assets/images/icon-list.svg"
						alt=""
						class="w-4 h-auto mb-4 sm:mb-0 sm:w-5 sm-h-auto"
					/>
					<p>Measuring To Ensure Updates Are A Success</p>
				</li>
				<li class="flex items-center space-x-2">
					<img src="/assets/images/icon-list.svg" alt="" class="w-4 h-auto sm:w-5 sm-h-auto" />
					<p>And Much More!</p>
				</li>
			</ul>
		</div>
		<form>
			<div class="text-xs font-robotobold flex justify-between">
				<p>Email Address</p>
				{#if !isValidEmail}
					<p class="text-red-600">Valid Email Required!</p>
				{/if}
			</div>
			<input
				type="email"
				name="Email"
				bind:value={email}
				autocomplete="off"
				placeholder="email@company.com"
				class="border px-5 py-2 rounded-md mt-1 text-sm w-full h-auto"
			/>
		</form>
		<div>
			<button
				type="submit"
				class="bg-sky-950 text-white p-3 text-sm font-robotobold w-full h-auto rounded-lg hover:bg-gradient-to-l from-orange-700 via-red-500 to-red-400"
				on:click={submitBtn}>Subscribe to Monthly Newsletter</button
			>
		</div>
	</div>
</main>
