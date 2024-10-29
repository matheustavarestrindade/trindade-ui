import type { Appearance } from '../Appearance';
import type { Position } from '../Position';
import type { ComponentSize, RoundedSize, ShadowSize } from '../Sizing';
import type { Variant } from '../Variants';

export type ResizableComponent = { size?: ComponentSize};
export type RoundableComponent = { round?: RoundedSize};
export type ShadowableComponent = { shadow?: ShadowSize};
export type VariantComponent = { variant?: Variant };
export type AppearanceComponent = { appearance?: Appearance };

export type DisabledComponent = { disabled?: boolean };
export type CheckedComponent = { checked?: boolean };

export type PositionComponent = { position?: Position };
