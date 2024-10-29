<script lang="ts">
	import type { SpinnerProps } from '$lib/types/components/atoms/Spinner';
	import { twcm } from '$lib/utils/TailwindClassMerge';

	const { size = 'md', variant = 'primary', children, ...props }: SpinnerProps = $props();

	const classes: string = $derived.by(() => {
		const classes: string[] = ['spinner'];
		classes.push(`spinner-${size}`);
		classes.push(`spinner-${variant}`);
		return twcm(classes, props.class);
	});
</script>

<div {...props} class={classes} role="status" aria-label="loading">
	<span class="sr-only">Loading...</span>
</div>

<style lang="postcss">
	.spinner {
		@apply inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent;

		&.spinner-xs {
			@apply size-2;
		}
		&.spinner-sm {
			@apply size-4;
		}
		&.spinner-md {
			@apply size-6;
		}
		&.spinner-lg {
			@apply size-8;
		}
		&.spinner-xl {
			@apply size-10;
		}
		&.spinner-2xl {
			@apply size-12;
		}
		&.spinner-3xl {
			@apply size-16;
		}

		&.spinner-primary {
			@apply text-primary;
		}
		&.spinner-secondary {
			@apply text-secondary;
		}
		&.spinner-success {
			@apply text-success;
		}
		&.spinner-error {
			@apply text-error;
		}
		&.spinner-warning {
			@apply text-warning;
		}
		&.spinner-info {
			@apply text-info;
		}
		&.spinner-neutral {
			@apply text-neutral;
		}
	}
</style>
