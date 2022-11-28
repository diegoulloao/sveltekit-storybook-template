<script lang="ts">
	import '$lib/components/Button/button.css';
	import { createEventDispatcher } from 'svelte';

	/**
	 * If the button uses tailwind or not
	 */
	export let tailwind = false;

	/**
	 * Is this the principal call to action on the page?
	 */
	export let primary = false;

	/**
	 * What background color to use
	 */
	export let backgroundColor;

	/**
	 * How large should the button be?
	 */
	export let size = 'medium';

	/**
	 * Button contents
	 */
	export let label = '';

	let mode = () => {
		if (tailwind) return 'bg-red-400 text-white';
		return primary ? 'storybook-button--primary' : 'storybook-button--secondary';
	};

	let style = backgroundColor ? `background-color: ${backgroundColor}` : '';

	const dispatch = createEventDispatcher();

	/**
	 * Optional click handler
	 */
	function onClick(event: Event) {
		dispatch('click', event);
	}
</script>

<button
	type="button"
	class={['storybook-button', `storybook-button--${size}`, mode()].join(' ')}
	{style}
	on:click={onClick}
>
	{label}
</button>
