const themes = {
	light: {
		primary: '#8231D3', // Purple for icons and charts.
		secondary: '#5840FF', // Light blue for user icons and certain highlights.
		accent: '#FFA53E', // Orange for highlighting elements (e.g., New Customer).
		neutral: '#f4f5f7', // Light gray background for cards and neutral areas.
		base: '#FFFFFF', // Main background color.
		info: '#00AAFF', // Blue badge for informational highlights.
		success: '#22C55E', // Green for positive stats like growth.
		warning: '#F59E0B', // Orange/yellow for warnings or alerts.
		error: '#EF4444' // Red for errors or negative stats.
	},
	dark: {
		primary: '#6236FF', // Purple for icons and charts in dark mode.
		secondary: '#00A7E1', // Light blue for icons and highlights in dark mode.
		accent: '#FFA53E', // Orange for accents in dark mode.
		neutral: '#1F2937', // Dark gray for backgrounds in dark mode.
		base: '#121212', // Dark background for the main page.
		info: '#00AAFF', // Same blue for informational highlights in dark mode.
		success: '#22C55E', // Same green for success indicators.
		warning: '#F59E0B', // Same yellow/orange for warnings.
		error: '#EF4444' // Same red for errors or negative stats.
	}
};
export type ThemeColors = 'primary' | 'secondary' | 'accent' | 'neutral' | 'base' | 'info' | 'success' | 'warning' | 'error';

export type TrindadeUITheme = Record<ThemeColors, string>;
export const TrindadeUITheme = themes;
