import type { AppearanceComponent, ResizableComponent, DisabledComponent, RoundableComponent, VariantComponent } from '$lib/types/components/GenericComponent';
import { type HTMLButtonAttributes } from 'svelte/elements';

export type ButtonProps = HTMLButtonAttributes & VariantComponent & ResizableComponent & RoundableComponent & AppearanceComponent & DisabledComponent;
