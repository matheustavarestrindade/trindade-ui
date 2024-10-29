<script lang="ts">
	import type { CardProps } from '$lib/types/components/atoms/Card';
	import { twcm } from '$lib/utils/TailwindClassMerge';

	const { size = 'md', round = 'md', shadow = 'md', children, ...props }: CardProps = $props();

	const classes: string = $derived.by(() => {
		const classes: string[] = ['card'];
		classes.push(`card-${size}`);
		classes.push(`card-round-${round}`);
		classes.push(`card-shadow-${shadow}`);
		return twcm(classes, props.class);
	});
</script>

<div {...props} class={classes}>
	{@render children?.()}
</div>

<style lang="postcss">
	.card {
		@apply rounded-md bg-base;

		&.card-shadow-sm {
			@apply shadow-sm;
		}

		&.card-shadow-md {
			@apply shadow-md;
		}

		&.card-shadow-lg {
			@apply shadow-lg;
		}

		&.card-shadow-xl {
			@apply shadow-xl;
		}

		&.card-shadow-2xl {
			@apply shadow-2xl;
		}

		&.card-shadow-inner {
			@apply shadow-inner;
		}

		&.card-round-sm {
			@apply rounded-sm;
		}

		&.card-round-md {
			@apply rounded-md;
		}

		&.card-round-lg {
			@apply rounded-lg;
		}

		&.card-round-xl {
			@apply rounded-xl;
		}

		&.card-round-2xl {
			@apply rounded-2xl;
		}

		&.card-round-3xl {
			@apply rounded-3xl;
		}

		&.card-round-full {
			@apply rounded-full;
		}

		&.card-sm {
			@apply p-4;
		}

		&.card-md {
			@apply p-6;
		}

		&.card-lg {
			@apply p-8;
		}

		&.card-xl {
			@apply p-10;
		}

		&.card-2xl {
			@apply p-12;
		}

		&.card-3xl {
			@apply p-14;
		}
	}
</style>
