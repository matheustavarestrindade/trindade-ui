import type { Icon } from 'lucide-svelte';
import type { Snippet } from 'svelte';
import type { ButtonProps } from '../atoms/Button';

export type ActionsCardProps = {
	children: Snippet;
	heading: string;
	actions?: {
        onClick?: () => void;
		Icon?: typeof Icon;
		label?: string;
		props?: Omit<ButtonProps, 'size'>;
	}[];
};
