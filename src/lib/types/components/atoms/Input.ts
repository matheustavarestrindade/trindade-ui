import type { ResizableComponent, DisabledComponent, RoundableComponent, ShadowableComponent, VariantComponent } from '$lib/types/components/GenericComponent';
import { type HTMLAttributes } from 'svelte/elements';

export type InputProps = HTMLAttributes<HTMLInputElement> & VariantComponent & ShadowableComponent & ResizableComponent & RoundableComponent & DisabledComponent;
