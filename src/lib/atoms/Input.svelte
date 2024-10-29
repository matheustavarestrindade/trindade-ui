<script lang="ts">
	import type { InputProps } from '$lib/types/components/atoms/Input';
	import { twcm } from '$lib/utils/TailwindClassMerge';

	const { size = $bindable('md'), disabled = $bindable(false), round = $bindable('md'), variant = $bindable('primary'), children, ...props }: InputProps = $props();
	const classes: string = $derived.by(() => {
		const classes: string[] = ['input'];
		classes.push(`input-${size}`);
		classes.push(`input-round-${round}`);
		classes.push(`input-${variant}`);
		return twcm(classes, props.class);
	});
</script>

<input {...props} {disabled} class={classes} />

<style lang="postcss">
	.input {
		@apply border border-neutral text-black outline-none ring-0 transition-all enabled:focus:shadow-primary/50 enabled:focus:shadow-lg enabled:focus:border-primary enabled:active:border-primary disabled:bg-opacity-50;

		&.input-xs {
			@apply px-2 py-1 text-sm;
		}

		&.input-sm {
			@apply px-4 py-2 text-sm;
		}

		&.input-md {
			@apply px-4 py-2;
		}

		&.input-lg {
			@apply px-6 py-3 text-lg;
		}

		&.input-xl {
			@apply px-8 py-4 text-xl;
		}

		&.input-round-sm {
			@apply rounded-sm;
		}

		&.input-round-md {
			@apply rounded-md;
		}

		&.input-round-lg {
			@apply rounded-lg;
		}

		&.input-round-xl {
			@apply rounded-xl;
		}

		&.input-round-2xl {
			@apply rounded-2xl;
		}

		&.input-round-3xl {
			@apply rounded-3xl;
		}

		&.input-round-full {
			@apply rounded-full;
		}

		&.input-primary {
			@apply border-primary;
		}

		&.input-secondary {
			@apply border-secondary;
		}

		&.input-success {
			@apply border-success;
		}

		&.input-error {
			@apply border-error;
		}

		&.input-warning {
			@apply border-warning;
		}

        &.input-info {
            @apply border-info;
        }

		&.input-neutral {
			@apply border-neutral;
		}
	}
</style>
