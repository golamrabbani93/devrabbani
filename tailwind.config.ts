import type {Config} from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: '#ffffff', // white
			},

			keyframes: {
				scaleIn: {
					'0%': {transform: 'scale(0)'},
					'100%': {transform: 'scale(1)'},
				},
				fadeInUp: {
					'0%': {opacity: '0', transform: 'translateY(20px)'},
					'100%': {opacity: '1', transform: 'translateY(0)'},
				},
				fadeInDown: {
					'0%': {opacity: '0', transform: 'translateY(-20px)'},
					'100%': {opacity: '1', transform: 'translateY(0)'},
				},
				fadeInLeft: {
					'0%': {opacity: '0', transform: 'translateX(-20px)'},
					'100%': {opacity: '1', transform: 'translateX(0)'},
				},
				fadeInRight: {
					'0%': {opacity: '0', transform: 'translateX(20px)'},
					'100%': {opacity: '1', transform: 'translateX(0)'},
				},
			},
			animation: {
				scaleIn: 'scaleIn 1s ease-out forwards',
				fadeInUp: 'fadeInUp 1s ease-out',
				fadeInDown: 'fadeInDown 0.5s ease-out',
				fadeInLeft: 'fadeInLeft 0.5s ease-out',
				fadeInRight: 'fadeInRight 0.5s ease-out',
			},
		},
	},
	plugins: [],
} satisfies Config;
