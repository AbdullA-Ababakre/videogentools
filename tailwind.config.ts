import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
	darkMode: ["class"],
	content: [
		'./src/app/**/*.{ts,tsx}',
		'./src/components/**/*.{ts,tsx}',
	],
	prefix: "",
	theme: {
    	container: {
    		center: true,
    		padding: '1rem'
    	},
    	extend: {
    		colors: {
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		fontFamily: {
    			bricolage: ['var(--font-bricolage)', ...fontFamily.sans],
    			sourceSans: ['var(--font-source-sans)', ...fontFamily.sans],
    			sourceSerif: ['var(--font-source-serif)', ...fontFamily.serif],
    			workSans: ['var(--font-work-sans)', ...fontFamily.sans]
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			'fade-up': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(10px)'
    				},
    				'80%': {
    					opacity: '0.7'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0px)'
    				}
    			},
    			'fade-down': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(-10px)'
    				},
    				'80%': {
    					opacity: '0.6'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0px)'
    				}
    			},
    			'fade-in': {
    				'0%': {
    					opacity: '0'
    				},
    				'50%': {
    					opacity: '0.6'
    				},
    				'100%': {
    					opacity: '1'
    				}
    			},
    			'fade-out': {
    				'0%': {
    					opacity: '0'
    				},
    				'50%': {
    					opacity: '0.6'
    				},
    				'100%': {
    					opacity: '1'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'fade-up': 'fade-up 0.5s',
    			'fade-down': 'fade-down 0.5s',
    			'fade-in': 'fade-in 0.4s',
    			'fade-out': 'fade-out 0.4s'
    		}
    	}
    },
	plugins: [
		require("tailwindcss-animate"),
		require('@tailwindcss/typography'),
	],
} satisfies Config;

export default config;