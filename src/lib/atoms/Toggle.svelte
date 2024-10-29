<script lang="ts">
	import type { ToggleProps } from '$lib/types/components/atoms/Toggle';
	import { twcm } from '$lib/utils/TailwindClassMerge';

	const { size = 'md', label, variant = 'primary', checked = false, ...props }: ToggleProps = $props();

	const classes: string = $derived.by(() => {
		const classes: string[] = ['toggle'];
		classes.push(`toggle-${size}`);
		classes.push(`toggle-${variant}`);
		return twcm(classes, props.class);
	});
</script>

<label class={classes}>
	<input type="checkbox" {checked} class="peer sr-only" {...props} />
	<div class="toggle-switch" role="switch" aria-checked={checked}>
		<div class="toggle-knob"></div>
	</div>
	{#if label}
		<span class="toggle-label">{label}</span>
	{/if}
</label>

<style lang="postcss">
	.toggle {
		@apply relative inline-flex;

        .toggle-label {
            @apply ml-2;
        }

		.toggle-switch {
			@apply relative inline-flex rounded-full bg-neutral transition-colors;
		}

		:not(.peer:checked) + .toggle-switch + .toggle-label {
			@apply text-opacity-50;
		}

		/* Move knob when input is checked */
		.peer:checked + .toggle-switch .toggle-knob {
			@apply translate-x-full;
		}

		.toggle-knob {
			@apply absolute left-[2px] top-[2px] h-5 w-5 rounded-full border border-gray-300 bg-white transition-transform;
		}

		&.toggle-xs {
			.toggle-switch {
				@apply h-4 w-8;
			}
            .toggle-knob {
                @apply h-3 w-3 left-[4px];
            }
			.toggle-label {
				@apply text-xs;
			}
		}

		&.toggle-sm {
			.toggle-switch {
				@apply h-5 w-9;
			}
			.toggle-label {
				@apply text-sm;
			}
			.toggle-knob {
				@apply h-4 w-4 ;
			}
		}

		&.toggle-md {
			.toggle-switch {
				@apply h-6 w-11;
			}
			.toggle-knob {
				@apply h-5 w-5;
			}
		}

		&.toggle-lg {
			.toggle-switch {
				@apply h-7 w-14;
			}
			.toggle-label {
				@apply text-lg;
			}
			.toggle-knob {
				@apply h-6 w-6 left-[4px];
			}
		}

		&.toggle-xl {
			.toggle-switch {
				@apply h-8 w-16;
			}
			.toggle-label {
				@apply text-xl;
			}
			.toggle-knob {
				@apply h-7 w-7;
			}
		}

		&.toggle-primary {
			.toggle-switch {
				@apply peer-checked:bg-primary;
			}
			.toggle-label {
				@apply text-primary;
			}
		}

		&.toggle-secondary {
			.toggle-switch {
				@apply peer-checked:bg-secondary;
			}
			.toggle-label {
				@apply text-secondary;
			}
		}

		&.toggle-success {
			.toggle-switch {
				@apply peer-checked:bg-success;
			}
			.toggle-label {
				@apply text-success;
			}
		}

		&.toggle-error {
			.toggle-switch {
				@apply peer-checked:bg-error;
			}
			.toggle-label {
				@apply text-error;
			}
		}

		&.toggle-warning {
			.toggle-switch {
				@apply peer-checked:bg-warning;
			}
			.toggle-label {
				@apply text-warning;
			}
		}

		&.toggle-info {
			.toggle-switch {
				@apply peer-checked:bg-info;
			}
			.toggle-label {
				@apply text-info;
			}
		}

		&.toggle-neutral {
			.toggle-switch {
				@apply peer-checked:bg-neutral;
			}
			.toggle-label {
				@apply text-neutral;
			}
		}
	}
</style>
