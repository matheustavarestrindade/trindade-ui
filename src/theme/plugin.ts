import type { Config } from 'tailwindcss';
import type { PluginCreator } from 'tailwindcss/types/config.js';
import { TrindadeUITheme } from './themes.js';
import { colorsToVariables } from './utils.js';
import plugin from 'tailwindcss/plugin.js';

const theme: Config['theme'] = {
	extend: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',

			primary: {
				DEFAULT: 'oklch(var(--p)/<alpha-value>)',
				100: 'oklch(var(--p-lightest)/<alpha-value>)',
				200: 'oklch(var(--p-lighter)/<alpha-value>)',
				300: 'oklch(var(--p-light)/<alpha-value>)',
				400: 'oklch(var(--p-medium-light)/<alpha-value>)',
				500: 'oklch(var(--p)/<alpha-value>)',
				600: 'oklch(var(--p-dark)/<alpha-value>)',
				700: 'oklch(var(--p-darker)/<alpha-value>)',
				800: 'oklch(var(--p-darkest)/<alpha-value>)',
				900: 'oklch(var(--p-deepest)/<alpha-value>)'
			},

			secondary: {
				DEFAULT: 'oklch(var(--s)/<alpha-value>)',
				100: 'oklch(var(--s-lightest)/<alpha-value>)',
				200: 'oklch(var(--s-lighter)/<alpha-value>)',
				300: 'oklch(var(--s-light)/<alpha-value>)',
				400: 'oklch(var(--s-medium-light)/<alpha-value>)',
				500: 'oklch(var(--s)/<alpha-value>)',
				600: 'oklch(var(--s-dark)/<alpha-value>)',
				700: 'oklch(var(--s-darker)/<alpha-value>)',
				800: 'oklch(var(--s-darkest)/<alpha-value>)',
				900: 'oklch(var(--s-deepest)/<alpha-value>)'
			},

			base: {
				DEFAULT: 'oklch(var(--b)/<alpha-value>)',
				100: 'oklch(var(--b-lightest)/<alpha-value>)',
				200: 'oklch(var(--b-lighter)/<alpha-value>)',
				300: 'oklch(var(--b-light)/<alpha-value>)',
				400: 'oklch(var(--b-medium-light)/<alpha-value>)',
				500: 'oklch(var(--b)/<alpha-value>)',
				600: 'oklch(var(--b-dark)/<alpha-value>)',
				700: 'oklch(var(--b-darker)/<alpha-value>)',
				800: 'oklch(var(--b-darkest)/<alpha-value>)',
				900: 'oklch(var(--b-deepest)/<alpha-value>)'
			},

			accent: {
				DEFAULT: 'oklch(var(--a)/<alpha-value>)',
				100: 'oklch(var(--a-lightest)/<alpha-value>)',
				200: 'oklch(var(--a-lighter)/<alpha-value>)',
				300: 'oklch(var(--a-light)/<alpha-value>)',
				400: 'oklch(var(--a-medium-light)/<alpha-value>)',
				500: 'oklch(var(--a)/<alpha-value>)',
				600: 'oklch(var(--a-dark)/<alpha-value>)',
				700: 'oklch(var(--a-darker)/<alpha-value>)',
				800: 'oklch(var(--a-darkest)/<alpha-value>)',
				900: 'oklch(var(--a-deepest)/<alpha-value>)'
			},

			neutral: {
				DEFAULT: 'oklch(var(--n)/<alpha-value>)',
				100: 'oklch(var(--n-lightest)/<alpha-value>)',
				200: 'oklch(var(--n-lighter)/<alpha-value>)',
				300: 'oklch(var(--n-light)/<alpha-value>)',
				400: 'oklch(var(--n-medium-light)/<alpha-value>)',
				500: 'oklch(var(--n)/<alpha-value>)',
				600: 'oklch(var(--n-dark)/<alpha-value>)',
				700: 'oklch(var(--n-darker)/<alpha-value>)',
				800: 'oklch(var(--n-darkest)/<alpha-value>)',
				900: 'oklch(var(--n-deepest)/<alpha-value>)'
			},

			info: {
				DEFAULT: 'oklch(var(--in)/<alpha-value>)',
				100: 'oklch(var(--in-lightest)/<alpha-value>)',
				200: 'oklch(var(--in-lighter)/<alpha-value>)',
				300: 'oklch(var(--in-light)/<alpha-value>)',
				400: 'oklch(var(--in-medium-light)/<alpha-value>)',
				500: 'oklch(var(--in)/<alpha-value>)',
				600: 'oklch(var(--in-dark)/<alpha-value>)',
				700: 'oklch(var(--in-darker)/<alpha-value>)',
				800: 'oklch(var(--in-darkest)/<alpha-value>)',
				900: 'oklch(var(--in-deepest)/<alpha-value>)'
			},

			success: {
				DEFAULT: 'oklch(var(--su)/<alpha-value>)',
				100: 'oklch(var(--su-lightest)/<alpha-value>)',
				200: 'oklch(var(--su-lighter)/<alpha-value>)',
				300: 'oklch(var(--su-light)/<alpha-value>)',
				400: 'oklch(var(--su-medium-light)/<alpha-value>)',
				500: 'oklch(var(--su)/<alpha-value>)',
				600: 'oklch(var(--su-dark)/<alpha-value>)',
				700: 'oklch(var(--su-darker)/<alpha-value>)',
				800: 'oklch(var(--su-darkest)/<alpha-value>)',
				900: 'oklch(var(--su-deepest)/<alpha-value>)'
			},

			warning: {
				DEFAULT: 'oklch(var(--wa)/<alpha-value>)',
				100: 'oklch(var(--wa-lightest)/<alpha-value>)',
				200: 'oklch(var(--wa-lighter)/<alpha-value>)',
				300: 'oklch(var(--wa-light)/<alpha-value>)',
				400: 'oklch(var(--wa-medium-light)/<alpha-value>)',
				500: 'oklch(var(--wa)/<alpha-value>)',
				600: 'oklch(var(--wa-dark)/<alpha-value>)',
				700: 'oklch(var(--wa-darker)/<alpha-value>)',
				800: 'oklch(var(--wa-darkest)/<alpha-value>)',
				900: 'oklch(var(--wa-deepest)/<alpha-value>)'
			},

			error: {
				DEFAULT: 'oklch(var(--er)/<alpha-value>)',
				100: 'oklch(var(--er-lightest)/<alpha-value>)',
				200: 'oklch(var(--er-lighter)/<alpha-value>)',
				300: 'oklch(var(--er-light)/<alpha-value>)',
				400: 'oklch(var(--er-medium-light)/<alpha-value>)',
				500: 'oklch(var(--er)/<alpha-value>)',
				600: 'oklch(var(--er-dark)/<alpha-value>)',
				700: 'oklch(var(--er-darker)/<alpha-value>)',
				800: 'oklch(var(--er-darkest)/<alpha-value>)',
				900: 'oklch(var(--er-deepest)/<alpha-value>)'
			}
		}
	},
	container: {
		center: true,
		padding: {
			DEFAULT: '1rem',
			sm: '2rem',
			lg: '4rem',
			xl: '5rem',
			'2xl': '6rem'
		}
	}
};

type PluginConfiguration = { themes?: { [key: string]: TrindadeUITheme } };

const createThemePlugin = (config?: PluginConfiguration) => {
	//TODO: Handle a better loading of defaults
	const themes = config?.themes ?? TrindadeUITheme;

	const themesPlugin: PluginCreator = ({ addBase }) => {
		Object.entries(themes).map(([themeName, theme]) => {
			const cssVars = colorsToVariables(theme);
			addBase({ [`[data-theme="${themeName}"]`]: cssVars });
		});
	};
	return plugin(themesPlugin, { theme });
};

export { createThemePlugin as getTrindadeUIPlugin };
