<script lang="ts">
	import { browser } from '$app/environment';
	import { type HTMLAttributes } from 'svelte/elements';
	import { onMount, type Snippet } from 'svelte';
	import { twcm } from '$lib/utils/TailwindClassMerge';

	type Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & { collapsed?: boolean; children: Snippet<[{ collapsed: boolean }]> };
	let { collapsed = $bindable(false), children, ...props }: Props = $props();

	let divElement: HTMLDivElement;
	let sectionHeight = 0;

	const requestFrame = () => new Promise(requestAnimationFrame);

	async function collapseSection() {
		if (!divElement) return;
		var elementTransition = divElement.style.transition;

		divElement.style.transition = '';
		await requestFrame();

		divElement.style.height = sectionHeight + 'px';
		divElement.style.transition = elementTransition;
		await requestFrame();

		divElement.style.height = '0px';
		divElement.style.overflow = 'hidden';
	}

	async function openSection() {
		if (!divElement) return;
		divElement.style.height = sectionHeight + 'px';
	}

	function handleTransitionEnd() {
		if (!divElement || collapsed) return;
		divElement.style.height = 'auto';
		divElement.style.overflow = '';
	}

	onMount(() => {
		if (!browser || !divElement) return;
		sectionHeight = divElement.scrollHeight;
	});

	$effect(() => {
		if (collapsed) {
			collapseSection();
		} else {
			openSection();
		}
	});
</script>

<div bind:this={divElement} ontransitionend={handleTransitionEnd} class={twcm(`transition-all`, `duration-300`, props.class)}>
	{@render children?.({ collapsed })}
</div>
