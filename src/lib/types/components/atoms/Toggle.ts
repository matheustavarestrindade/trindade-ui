import type { CheckedComponent, VariantComponent } from '$lib/types/components/GenericComponent';
import type { ComponentSize } from '$lib/types/Sizing';
import { type HTMLAttributes } from 'svelte/elements';

export type ToggleProps = HTMLAttributes<HTMLDivElement> &
	VariantComponent &
	CheckedComponent & {
		label?: string;
		size?: Omit<ComponentSize, 'xl'| '2xl' | '3xl'>;
	};
