<script lang="ts">
	import type { BadgeProps } from '$lib/types/components/atoms/Badge';
	import { twcm } from '$lib/utils/TailwindClassMerge';

	type Badge = BadgeProps & {
		appearance?: 'normal' | 'rounded' | 'pill';
	};

	const { position = 'top-center', size = 'md', appearance = 'pill', disabled = false, variant = 'primary', children, ...props }: Badge = $props();

	const classes: string = $derived.by(() => {
		const classes: string[] = ['badge'];
		classes.push(`badge-${position}`);
		classes.push(`badge-${size}`);
		classes.push(`badge-${variant}`);
		classes.push(`badge-${appearance}`);
		return twcm(classes, props.class);
	});
</script>

<span {...props} class={classes}>
	{@render children?.()}
</span>

<style lang="postcss">
	.badge {
		@apply absolute;

		&.badge-rounded {
			@apply rounded-full;
		}

		&.badge-pill {
			@apply rounded-full;
		}

		&.badge-primary {
			@apply bg-primary text-white;
		}

		&.badge-secondary {
			@apply bg-secondary text-white;
		}

		&.badge-neutral {
			@apply bg-neutral text-black;
		}

		&.badge-success {
			@apply bg-success text-white;
		}

		&.badge-error {
			@apply bg-error text-white;
		}

		&.badge-warning {
			@apply bg-warning text-white;
		}

		&.badge-info {
			@apply bg-info text-white;
		}

		&.badge-top-start {
			@apply left-0 top-0 -translate-x-1/2 -translate-y-1/2;
		}

		&.badge-top-center {
			@apply left-1/2 top-0 -translate-x-1/2 -translate-y-1/2;
		}

		&.badge-top-end {
			@apply right-0 top-0 -translate-y-1/2 translate-x-1/2;
		}

		&.badge-middle-start {
			@apply left-0 top-1/2 -translate-x-1/2 -translate-y-1/2;
		}

		&.badge-middle-center {
			@apply left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2;
		}

		&.badge-middle-end {
			@apply right-0 top-1/2 -translate-y-1/2 translate-x-1/2;
		}

		&.badge-bottom-start {
			@apply bottom-0 left-0 -translate-x-1/2 translate-y-1/2;
		}

		&.badge-bottom-center {
			@apply bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2;
		}

		&.badge-bottom-end {
			@apply bottom-0 right-0 translate-x-1/2 translate-y-1/2;
		}

		&.badge-xs {
			@apply px-2 py-0.5 text-xs;
		}

		&.badge-sm {
			@apply px-3 py-1 text-sm;
		}

		&.badge-md {
			@apply px-4 py-1.5;
		}

		&.badge-lg {
			@apply px-5 py-2 text-lg;
		}

		&.badge-xl {
			@apply px-6 py-2.5 text-xl;
		}

		&.badge-2xl {
			@apply px-8 py-3 text-2xl;
		}

		&.badge-3xl {
			@apply px-10 py-4 text-3xl;
		}
	}
</style>
