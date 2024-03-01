<script lang="ts">
	import { goto } from '$app/navigation';

	const email = localStorage.getItem('email');
	localStorage.removeItem('email');

	let DismissBtn = () => {
		goto('/');
	};
</script>

<main
	class="px-7 w-lvw h-lvh flex flex-col align-middle justify-center space-y-5 sm:px-0 sm:grid sm:place-content-center"
>
	<div>
		<img
			src="/assets/images/icon-success.svg"
			alt="icon-success"
			class="w-[50px] h-auto sm:w-[75px]"
		/>
	</div>
	<div class="font-robotoregular">
		<h1 class="font-robotobold text-3xl sm:text-5xl">Thanks For Subscribing!</h1>
	</div>
	<div>
		<p class="text-md sm:text-xl">
			A Confirmation Email Has Been Sent To <span class="font-robotobold">{email}</span>. Please
			Open It And Click The Button Inside To Confirm Your Subscription
		</p>
	</div>
	<div>
		<button
			type="submit"
			class="bg-sky-950 text-white p-3 text-sm font-robotobold w-full h-auto rounded-lg hover:bg-gradient-to-l from-orange-700 via-red-500 to-red-400"
			on:click={DismissBtn}
			>Dismiss Message
		</button>
	</div>
</main>
