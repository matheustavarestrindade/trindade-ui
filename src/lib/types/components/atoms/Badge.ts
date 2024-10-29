import type {
	ResizableComponent,
	DisabledComponent,
	VariantComponent,
	PositionComponent
} from '$lib/types/components/GenericComponent';
import { type HTMLAttributes } from 'svelte/elements';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> &
	VariantComponent &
	ResizableComponent &
	DisabledComponent &
	PositionComponent;
