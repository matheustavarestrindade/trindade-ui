import type { ResizableComponent, VariantComponent } from '$lib/types/components/GenericComponent';
import { type HTMLAttributes } from 'svelte/elements';

export type SpinnerProps = HTMLAttributes<HTMLDivElement> & VariantComponent & ResizableComponent;
