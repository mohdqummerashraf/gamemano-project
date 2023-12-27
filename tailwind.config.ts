import type { Config } from 'tailwindcss'

const config: Config = {
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
        'button-bg': 'linear-gradient(90deg, #920AA8 2%, #E019CC 20%, #FF81E3 48%, #FC75D6 52%, #DF55F6 60%, #E822EC 71%, #E80F91 75%, #ED19D8 81.25%, #FE3873 100%)',
        'bottomBar-bg': './app/utility/images/BottomBar.png'
      },
      fontFamily: {

        "poppins": "var(--font-Poppins)", // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font

        "inter-medium": "var(--font-inter)", // note: the bit that goes inside the var() function is the same variable name we defined in app.tsx

      }
    },
  },
  plugins: [],
}
export default config
