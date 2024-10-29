import type { Config } from 'tailwindcss';
import { getTrindadeUIPlugin } from './src/theme/plugin';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('@tailwindcss/typography'), getTrindadeUIPlugin()]
} as Config;
