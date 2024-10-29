import type { ThemeColors } from './themes.js';
import { parse, oklch, formatCss, formatHsl } from 'culori';

function generateCssVariables(baseColor: string, prefix: string) {
	// Parse the base color into an object
	const parsedColor = oklch(parse(baseColor));

	if (!parsedColor || !parsedColor.l) {
		throw new Error('Invalid base color');
	}

	// Subtle adjustments to lightness and chroma
	const lightnessAdjustment = 0.05; // Smaller changes for a more gradual lightening/darkening
	const chromaAdjustment = 0.03;    // Subtle chroma adjustments

	// Define the suffixes for the CSS variable names
	const variableSuffixes = [
		'lightest',   // Lightest (will have highest lightness)
		'lighter',    // Lighter
		'light',      // Light
		'medium-light', // Medium-light
		'',           // DEFAULT (500, no change)
		'dark',       // Dark
		'darker',     // Darker
		'darkest',    // Darkest (will not be too dark)
		'deepest'     // Deepest
	];

	// Function to check if a color is neutral (gray scale or white-like)
	const isNeutral = parsedColor.c === 0;

	// Generate variants by adjusting the lightness and chroma
	const cssVariables = variableSuffixes.map((suffix, index) => {
		let colorVariant;

		// For neutral colors, only adjust lightness, keep chroma at 0
		if (isNeutral) {
			if (index < 4) {
				colorVariant = {
					...parsedColor,
					l: Math.min(parsedColor.l + lightnessAdjustment * (4 - index), 1), // Lighten the color subtly
					c: 0 // Keep chroma at 0 for neutral colors
				};
			} else if (index > 4) {
				colorVariant = {
					...parsedColor,
					l: Math.max(parsedColor.l - lightnessAdjustment * (index - 4), 0.1), // Darken, but avoid full black
					c: 0 // Keep chroma at 0 for neutral colors
				};
			} else {
				// DEFAULT (base color 500)
				colorVariant = parsedColor;
			}
		} else {
			// For non-neutral colors, adjust both lightness and chroma
			if (index < 4) {
				colorVariant = {
					...parsedColor,
					l: Math.min(parsedColor.l + lightnessAdjustment * (4 - index), 1), // Lighten the color subtly
					c: Math.min(parsedColor.c + chromaAdjustment * (4 - index), 1)     // Slight chroma increase
				};
			} else if (index > 4) {
				colorVariant = {
					...parsedColor,
					l: Math.max(parsedColor.l - lightnessAdjustment * (index - 4), 0.1), // Darken, but avoid full black
					c: Math.max(parsedColor.c - chromaAdjustment * (index - 4), 0.05)    // Subtle chroma decrease
				};
			} else {
				// DEFAULT (base color 500)
				colorVariant = parsedColor;
			}
		}

		const cssVariableName = index === 4 ? `--${prefix}` : `--${prefix}-${suffix}`;
		const color = formatCss(colorVariant); // Convert to rgb format for CSS

		return {
			[cssVariableName]: color.replace('oklch(', '').replace(')', '') // Use the RGB color value in the variable
		};
	});

	// Combine the results into a single object
	return Object.assign({}, ...cssVariables);
}

export const colorsToVariables = (colors: Record<ThemeColors, string>): Record<string, string> => {
	return {
		...generateCssVariables(colors.primary, 'p'),
		...generateCssVariables(colors.secondary, 's'),
		...generateCssVariables(colors.accent, 'a'),
		...generateCssVariables(colors.neutral, 'n'),
		...generateCssVariables(colors.base, 'b'),
		...generateCssVariables(colors.info, 'in'),
		...generateCssVariables(colors.success, 'su'),
		...generateCssVariables(colors.warning, 'wa'),
		...generateCssVariables(colors.error, 'er')
	};
};
