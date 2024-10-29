<script lang="ts">
	import Card from '$lib/atoms/Card.svelte';
	import type { StatsCardProps } from '$lib/types/components/molecules/StatsCard';

	const { variant, heading, subheading, Icon, info }: StatsCardProps = $props();
</script>

<div class="stats-card {variant}">
	<Card class="card flex flex-col">
		<div class="header flex flex-row justify-between">
			<div class="flex flex-col">
				<h1 class={'mb-1 text-3xl font-bold'}>{heading}</h1>
				{#if subheading}
					<p class="text-sm">{subheading}</p>
				{/if}
			</div>
			<div class="icon flex items-center justify-center">
				<Icon class="h-8 w-8" />
			</div>
		</div>
		{#if info}
			<div class="mt-6"></div>
			<div class="info">
				{@render info?.()}
			</div>
		{/if}
	</Card>
</div>

<style lang="postcss">
	.stats-card {
		@apply contents;

		.card {
			@apply flex max-w-80 flex-col;
		}

		.icon {
			@apply h-12 w-12 rounded-md bg-neutral/80 text-neutral-900;
		}

		.info {
			@apply mt-auto w-full rounded-md bg-neutral p-2;
		}

		&.primary {
			.icon {
				@apply bg-primary/10 text-primary;
			}
			.info {
				@apply bg-primary/10 text-primary;
			}
		}

		&.secondary {
			.icon {
				@apply bg-secondary/10 text-secondary;
			}
			.info {
				@apply bg-secondary/10 text-secondary;
			}
		}

		&.success {
			.icon {
				@apply bg-success/10 text-success;
			}
			.info {
				@apply bg-success/10 text-success;
			}
		}

		&.error {
			.icon {
				@apply bg-error/10 text-error;
			}
			.info {
				@apply bg-error/10 text-error;
			}
		}

		&.warning {
			.icon {
				@apply bg-warning/10 text-warning;
			}
			.info {
				@apply bg-warning/10 text-warning;
			}
		}

		&.info {
			.icon {
				@apply bg-info/10 text-info;
			}
			.info {
				@apply bg-info/10 text-info;
			}
		}
	}
</style>
