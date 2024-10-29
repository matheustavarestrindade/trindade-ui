import type { VariantComponent } from '$lib/types/components/GenericComponent';
import type { Icon } from 'lucide-svelte';
import type { Snippet } from 'svelte';

export type StatsCardProps = VariantComponent & {
    heading: string;
    Icon: typeof Icon;
    subheading?: string;
    info?: Snippet
};
