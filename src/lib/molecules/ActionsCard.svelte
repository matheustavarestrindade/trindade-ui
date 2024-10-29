<script lang="ts">
	import Button from '$lib/atoms/Button.svelte';
	import Card from '$lib/atoms/Card.svelte';
	import type { ActionsCardProps } from '$lib/types/components/molecules/ActionsCard';

	const { children, heading, actions }: ActionsCardProps = $props();
</script>

<div class="presentation-card">
	<Card class="card flex flex-col !p-0">
		<div class="heading flex flex-row p-4">
			<h2 class="text-lg font-semibold">{heading}</h2>
			{#if actions}
				<div class="actions">
					{#each actions as action}
						<Button onclick={action.onClick} appearance="light" size="xs" {...action.props}>
							{#if action.Icon}
								<action.Icon class="{action.label ? 'me-1' : ''} inline-block h-4 w-4" />
							{/if}
							{action?.label}
						</Button>
					{/each}
				</div>
			{/if}
		</div>
		<div class="p-4">
			{@render children?.()}
		</div>
	</Card>
</div>

<style lang="postcss">
	.presentation-card {
		@apply contents;
		.card {
			@apply flex flex-col;
		}
		.heading {
			@apply flex flex-row justify-between border-b border-neutral pb-3;
		}

		.actions {
			@apply flex flex-row gap-2;
		}
	}
</style>
