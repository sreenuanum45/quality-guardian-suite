import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
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
				tech: {
					primary: 'hsl(var(--tech-primary))',
					secondary: 'hsl(var(--tech-secondary))',
					accent: 'hsl(var(--tech-accent))'
				},
				section: {
					bg: 'hsl(var(--section-bg))'
				},
				recruiter: {
					available: 'hsl(var(--recruiter-available))',
					urgent: 'hsl(var(--recruiter-urgent))',
					success: 'hsl(var(--recruiter-success))',
					warning: 'hsl(var(--recruiter-warning))',
					info: 'hsl(var(--recruiter-info))'
				},
				status: {
					online: 'hsl(var(--status-online))',
					busy: 'hsl(var(--status-busy))',
					away: 'hsl(var(--status-away))',
					offline: 'hsl(var(--status-offline))'
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
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'slide-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-left': {
					from: { opacity: '0', transform: 'translateX(-100px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-in-right': {
					from: { opacity: '0', transform: 'translateX(100px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					from: { opacity: '0', transform: 'scale(0.95)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(217 91% 60% / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(217 91% 60% / 0.6)' }
				},
				'gradient-shift': {
					'0%, 100%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' }
				},
				'gradient-rotate': {
					'0%': { 'background-position': '0% 50%' },
					'25%': { 'background-position': '100% 50%' },
					'50%': { 'background-position': '100% 100%' },
					'75%': { 'background-position': '0% 100%' },
					'100%': { 'background-position': '0% 50%' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1)',
						filter: 'brightness(1)'
					},
					'50%': { 
						opacity: '0.8',
						transform: 'scale(1.05)',
						filter: 'brightness(1.2)'
					}
				},
				'rotate-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'tilt': {
					'0%, 50%, 100%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(1deg)' },
					'75%': { transform: 'rotate(-1deg)' }
				},
				'glass-morph': {
					'0%': { 
						background: 'rgba(255, 255, 255, 0.1)',
						backdropFilter: 'blur(16px)'
					},
					'50%': { 
						background: 'rgba(255, 255, 255, 0.15)',
						backdropFilter: 'blur(20px)'
					},
					'100%': { 
						background: 'rgba(255, 255, 255, 0.1)',
						backdropFilter: 'blur(16px)'
					}
				},
				'skill-glow': {
					'0%': { 
						boxShadow: '0 0 5px hsl(var(--primary) / 0.3)',
					},
					'50%': { 
						boxShadow: '0 0 20px hsl(var(--primary) / 0.6), 0 0 30px hsl(var(--tech-secondary) / 0.4)',
					},
					'100%': { 
						boxShadow: '0 0 5px hsl(var(--primary) / 0.3)',
					}
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease infinite',
				'gradient-rotate': 'gradient-rotate 6s ease infinite',
				'shimmer': 'shimmer 2s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 10s linear infinite',
				'tilt': 'tilt 3s ease-in-out infinite',
				'glass-morph': 'glass-morph 4s ease-in-out infinite',
				'skill-glow': 'skill-glow 2s ease-in-out infinite',
				'fade-in': 'fade-in 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
