<script lang="ts">
	import { twcm } from '$lib/utils/TailwindClassMerge';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement>;
	const { children, ...props }: Props = $props();
</script>

<div {...props} class={twcm('h-dvh', 'w-dvw', 'overflow-y-scroll', props.class)}>
	{@render children?.()}
</div>
