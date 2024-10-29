import type { Appearance } from './Appearance';
import type { OrEmpty } from './Helpers.js';
import type { ComponentSize, RoundedSize, ShadowSize } from './Sizing.js';
import type { Variant } from './Variants.js';

export type ResizableComponent = { size?: OrEmpty<ComponentSize> };
export type RoundableComponent = { round?: OrEmpty<RoundedSize> };
export type ShadowableComponent = { shadow?: OrEmpty<ShadowSize> };
export type VariantComponent = { variant?: OrEmpty<Variant> };
export type AppearanceComponent = { appearance?: OrEmpty<Appearance> };
export type DisabledComponent = { disabled?: boolean };

export type Component = 'button' | 'badge' | 'card' | 'input'



