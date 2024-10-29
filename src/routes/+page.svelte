<script lang="ts">
	import Badge from '$lib/atoms/Badge.svelte';
	import Button from '$lib/atoms/Button.svelte';
	import Card from '$lib/atoms/Card.svelte';
	import Input from '$lib/atoms/Input.svelte';
	import Spinner from '$lib/atoms/Spinner.svelte';
	import Toggle from '$lib/atoms/Toggle.svelte';
	import Viewport from '$lib/atoms/Viewport.svelte';
	import ActionsCard from '$lib/molecules/ActionsCard.svelte';
	import StatsCard from '$lib/molecules/StatsCard.svelte';
	import { type Position } from '$lib/types/Position';
	import { User } from 'lucide-svelte';

	const positions: Position[] = ['top-start', 'top-center', 'top-end', 'middle-start', 'middle-center', 'middle-end', 'bottom-start', 'bottom-center', 'bottom-end'];
</script>

<Viewport class="bg-neutral p-16">
	<div class="container">
		<div class="mb-3 grid grid-cols-1 gap-3 md:grid-cols-2">
			<ActionsCard
				heading="Presentation Card"
				actions={[
					{
						label: 'Edit',
						onClick: () => console.log('action 1 clicked')
					},
					{
						Icon: User,
						label: 'Delete',
						onClick: () => console.log('action 2 clicked'),
						props: { variant: 'error' }
					},
					{
						Icon: User,
						onClick: () => console.log('action 3 clicked')
					}
				]}
			>
				Here are some presentation content
			</ActionsCard>
		</div>
		<div class="mb-3 grid grid-cols-1 gap-3 md:grid-cols-3">
			<StatsCard Icon={User} heading="+30,000" variant="neutral" subheading="some Subheaind">
				{#snippet info()}
					<p class="text-sm">Total Subscribers</p>
				{/snippet}
			</StatsCard>
			<StatsCard Icon={User} heading="+30,000" variant="primary">
				{#snippet info()}
					<p class="text-sm">Total Subscribers</p>
				{/snippet}
			</StatsCard>
			<StatsCard Icon={User} heading="+30,000" variant="secondary">
				{#snippet info()}
					<p class="text-sm">Total Subscribers</p>
				{/snippet}
			</StatsCard>
			<StatsCard Icon={User} heading="+30,000" variant="success">
				{#snippet info()}
					<p class="text-sm">Total Subscribers</p>
				{/snippet}
			</StatsCard>
			<StatsCard Icon={User} heading="+30,000" variant="error">
				{#snippet info()}
					<p class="text-sm">Total Subscribers</p>
				{/snippet}
			</StatsCard>
			<StatsCard Icon={User} heading="+30,000" variant="warning">
				{#snippet info()}
					<p class="text-sm">Total Subscribers</p>
				{/snippet}
			</StatsCard>
			<StatsCard Icon={User} heading="+30,000" variant="info">
				{#snippet info()}
					<p class="text-sm">Total Subscribers</p>
				{/snippet}
			</StatsCard>
		</div>
		<Card class="mb-3">
			<p>Normal buttons</p>
			<div class="grid items-center justify-center gap-3 sm:grid-cols-2 lg:grid-cols-6">
				<Button>Test default button</Button>
				<Button variant="secondary">Test secondary</Button>
				<Button variant="neutral">Test neutral</Button>
				<Button variant="error">Test error</Button>
				<Button variant="warning">Test Warning</Button>
				<Button variant="success">Test success</Button>
				<Button variant="info">Test info</Button>
			</div>
			<p>Outline buttons</p>
			<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
				<Button appearance="outline">Test default button</Button>
				<Button appearance="outline" variant="secondary">Test secondary</Button>
				<Button appearance="outline" variant="neutral">Test neutral</Button>
				<Button appearance="outline" variant="error">Test error</Button>
				<Button appearance="outline" variant="warning">Test Warning</Button>
				<Button appearance="outline" variant="success">Test success</Button>
				<Button appearance="outline" variant="info">Test info</Button>
			</div>
			<p>Light buttons</p>
			<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
				<Button appearance="light">Test default button</Button>
				<Button appearance="light" variant="secondary">Test secondary</Button>
				<Button appearance="light" variant="neutral">Test neutral</Button>
				<Button appearance="light" variant="error">Test error</Button>
				<Button appearance="light" variant="warning">Test Warning</Button>
				<Button appearance="light" variant="success">Test success</Button>
				<Button appearance="light" variant="info">Test info</Button>
			</div>

			<p>Disabled</p>
			<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
				<Button disabled>Test default button</Button>
				<Button disabled variant="secondary">Test secondary</Button>
				<Button disabled variant="neutral">Test neutral</Button>
				<Button disabled variant="error">Test error</Button>
				<Button disabled variant="warning">Test Warning</Button>
				<Button disabled variant="success">Test success</Button>
				<Button disabled variant="info">Test info</Button>
			</div>
		</Card>
		<Card class="mb-3">
			<p>Badge</p>
			<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
				{#each positions as position, i}
					<div class="relative flex h-16 w-16 items-center justify-center bg-neutral">
						<Badge {position} appearance="pill" size="xs">{i}</Badge>
						{position}
					</div>
				{/each}
			</div>
		</Card>
		<Card class="mb-3">
			<p>Inputs</p>
			<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
				<Input placeholder="Default input" />
				<Input placeholder="Secondary input" variant="secondary" />
				<Input placeholder="Neutral input" variant="neutral" />
				<Input placeholder="Error input" variant="error" />
				<Input placeholder="Warning input" variant="warning" />
				<Input placeholder="Success input" variant="success" />
				<Input placeholder="Info input" variant="info" />
			</div>
		</Card>
		<Card>
			<p>Spinners size</p>
			<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
				<Spinner />
				<Spinner size="xs" />
				<Spinner size="sm" />
				<Spinner size="md" />
				<Spinner size="lg" />
				<Spinner size="xl" />
			</div>
			<p>Spinner variants</p>
			<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
				<Spinner variant="primary" />
				<Spinner variant="secondary" />
				<Spinner variant="success" />
				<Spinner variant="error" />
				<Spinner variant="warning" />
				<Spinner variant="info" />
				<Spinner variant="neutral" />
			</div>
		</Card>
		<Card>
			<p>Toggle</p>
			<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
				<Toggle size="xs" label="Toggle extra small" />
				<Toggle size="sm" label="Toggle small" />
				<Toggle label="Toggle md" />
				<Toggle size="lg" label="Toggle large" />
				<Toggle variant="primary" label="Toggle primary" />
				<Toggle variant="secondary" label="Toggle secondary" />
				<Toggle variant="success" label="Toggle success" />
				<Toggle variant="error" label="Toggle error" />
				<Toggle variant="warning" label="Toggle warning" />
				<Toggle variant="info" label="Toggle info" />
			</div>
		</Card>
	</div>
</Viewport>
