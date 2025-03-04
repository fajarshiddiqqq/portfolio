<script lang="ts">
	import Cv from '$lib/components/Cv.svelte';

	let { data } = $props();
	let message = $state('');

	function printCV() {
        window.print();
		message = 'If the print dialog doesn’t appear, please use Ctrl+P to print the page. <br>Thank you!';
		setTimeout(() => {
			message = '';
		}, 5000);
	}
</script>

<div class="flex min-h-screen flex-col bg-gray-50">
	<div class="flex-grow md:py-20">
		<Cv {data} />
	</div>

	<button
		class=" fixed right-10 bottom-10 cursor-pointer bg-blue-500 p-3 py-2 text-white hover:ring-2 hover:ring-blue-300"
		onclick={printCV}
		>Print CV
	</button>
	{#if message}
		<div
			class="fixed right-10 bottom-25 w-63 rounded-xl bg-white p-5 text-center text-gray-400 shadow-md"
		>
			{@html message}
		</div>
	{/if}

	<footer class="py-4 text-center font-mono text-sm text-gray-600">
		Made with ❤️ | <a href="https://github.com/fajarshiddiqqq" class="text-blue-500 hover:underline"
			>Visit my projects</a
		>
	</footer>
</div>
