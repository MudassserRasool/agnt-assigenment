/** @type {import('tailwindcss').Config} */
/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // './node_modules/tw-elements/dist/js/**/*.js',

    // '/node_modules/preline/dist/*.js',

    './node_modules/flowbite-react/**/*.js',
  ],
  plugins: [
    require('preline/plugin'),
],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      black: {
        60: '#8F9BB7',
        70: '#1D1C26',
        90: '#12131C',
      },
      purple: {
        60: '#9764bf',
        70: '#8f56f0',
      },
    },

    fontFamily: {
      lato: ['Lato', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
};
