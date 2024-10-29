import type { ResizableComponent, RoundableComponent, ShadowableComponent } from '$lib/types/components/GenericComponent';
import { type HTMLAttributes } from 'svelte/elements';

export type CardProps = HTMLAttributes<HTMLDivElement> & ResizableComponent & RoundableComponent & ShadowableComponent 
