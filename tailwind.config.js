/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // primary
        'light-red': '#ff5757',
        'orangey-yellow': '#ffb01f',
        'green-teal': '#00bd91',
        'cobalt-blue': '#1125d4',
        // background
        'light-slate-blue': '#7857ff',
        'light-royal-blue': '#2e2be9',
        // circle
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',
        // summary
        'pale-blue': '#ebf1ff',
        'light-lavender': '#c8c7ff',
        'dark-gray-blue': '#303b5a'
      }
    },
  },
  plugins: [],
}
