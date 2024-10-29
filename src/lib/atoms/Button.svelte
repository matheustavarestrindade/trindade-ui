<script lang="ts">
	import type { ButtonProps } from '$lib/types/components/atoms/Button';
	import { twcm } from '$lib/utils/TailwindClassMerge';

	const { size = 'md', disabled = false, round = 'md', appearance = 'normal', variant = 'primary', children, ...props }: ButtonProps = $props();

	const classes: string = $derived.by(() => {
		const classes: string[] = ['btn'];
		classes.push(`btn-${size}`);
		if (round !== 'none') classes.push(`btn-round-${round}`);
		if (appearance === 'normal') classes.push(`btn-${variant}`);
		else classes.push(`btn-${appearance}-${variant}`);
		return twcm(classes, props.class);
	});
</script>

<button {...props} {disabled} class={classes}>
	{@render children?.()}
</button>

<style lang="postcss">
	.btn {
		@apply transition-all enabled:focus:active:scale-95;
		@apply disabled:cursor-not-allowed disabled:opacity-50;

		&.btn-round-sm {
			@apply rounded-sm;
		}

		&.btn-round-md {
			@apply rounded-md;
		}

		&.btn-round-lg {
			@apply rounded-lg;
		}

		&.btn-round-xl {
			@apply rounded-xl;
		}

		&.btn-round-2xl {
			@apply rounded-2xl;
		}

		&.btn-round-3xl {
			@apply rounded-3xl;
		}

		&.btn-round-full {
			@apply rounded-full;
		}

		&.btn-xs {
			@apply px-2 py-1 text-sm;
		}

		&.btn-sm {
			@apply px-4 py-2 text-sm;
		}

		&.btn-md {
			@apply px-6 py-3 text-base;
		}

		&.btn-lg {
			@apply px-8 py-4 text-lg;
		}

		&.btn-xl {
			@apply px-10 py-5 text-xl;
		}

		&.btn-2xl {
			@apply px-12 py-6 text-2xl;
		}

		&.btn-3xl {
			@apply px-14 py-7 text-3xl;
		}

		&.btn-primary {
			@apply bg-primary text-white;
			@apply enabled:hover:bg-primary-600;
		}

		&.btn-secondary {
			@apply bg-secondary text-white;
			@apply enabled:hover:bg-secondary-600;
		}

		&.btn-neutral {
			@apply bg-neutral text-black;
			@apply enabled:hover:bg-neutral-600;
		}

		&.btn-error {
			@apply bg-error text-white;
			@apply enabled:hover:bg-error-600;
		}

		&.btn-success {
			@apply bg-success text-white;
			@apply enabled:hover:bg-success-600;
		}

		&.btn-warning {
			@apply bg-warning text-white;
			@apply enabled:hover:bg-warning-600;
		}

		&.btn-info {
			@apply bg-info text-white;
			@apply enabled:hover:bg-info-600;
		}

		&.btn-outline-primary {
			@apply border border-primary text-primary;
			@apply enabled:hover:bg-primary-600 enabled:hover:text-white;
		}

		&.btn-outline-secondary {
			@apply border border-secondary text-secondary;
			@apply enabled:hover:bg-secondary-600 enabled:hover:text-white;
		}

		&.btn-outline-neutral {
			@apply border border-neutral-600 text-black;
			@apply enabled:hover:bg-neutral-600 enabled:hover:text-black;
		}

		&.btn-outline-error {
			@apply border border-error text-error;
			@apply enabled:hover:bg-error-600 enabled:hover:text-white;
		}

		&.btn-outline-success {
			@apply border border-success text-success;
			@apply enabled:hover:bg-success-600 enabled:hover:text-white;
		}

		&.btn-outline-warning {
			@apply border border-warning text-warning;
			@apply enabled:hover:bg-warning-600 enabled:hover:text-white;
		}

		&.btn-outline-info {
			@apply border border-info text-info;
			@apply enabled:hover:bg-info-600 enabled:hover:text-white;
		}

		&.btn-light-primary {
			@apply bg-primary/10 text-primary;
			@apply enabled:hover:bg-primary-600 enabled:hover:text-white;
		}

		&.btn-light-secondary {
			@apply bg-secondary/10 text-secondary;
			@apply enabled:hover:bg-secondary-600 enabled:hover:text-white;
		}

		&.btn-light-neutral {
			@apply bg-neutral/10 text-black;
			@apply enabled:hover:bg-neutral-600 enabled:hover:text-black;
		}

		&.btn-light-error {
			@apply bg-error/10 text-error;
			@apply enabled:hover:bg-error-600 enabled:hover:text-white;
		}

		&.btn-light-success {
			@apply bg-success/10 text-success;
			@apply enabled:hover:bg-success-600 enabled:hover:text-white;
		}

		&.btn-light-warning {
			@apply bg-warning/10 text-warning;
			@apply enabled:hover:bg-warning-600 enabled:hover:text-white;
		}

		&.btn-light-info {
			@apply bg-info/10 text-info;
			@apply enabled:hover:bg-info-600 enabled:hover:text-white;
		}
	}
</style>
