import type { Config } from 'tailwindcss'
import homepage from "./app/utility/images/HomePageBanner.png"


                

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
        'homePageBar': './app/utility/images/HomePageBanner.png',
        'golden-bg': 'linear-gradient(90deg, #A8620A 2%, #E09519 20%, #FFE581 48%, #FCDC75 52%, #F6C755 60%, #ECA522 71%, #E8980F 75%, #FEB838 100%)'
      },
      colors:{
        'buttonBorder' : 'linear-gradient(90deg, #920AA8 2%, #E019CC 20%, #FF81E3 48%, #FC75D6 52%, #DF55F6 60%, #E822EC 71%, #E80F91 75%, #ED19D8 81.25%, #FE3873 100%)'
      },
     
      fontFamily: {

        "poppins": "var(--font-Poppins)", // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font
        "inter-medium": "var(--font-inter)", // note: the bit that goes inside the var() function is the same variable name we defined in app.tsx
         routhem: ["Routhem", "sans-serif"],
      }
    },
  },
  plugins: [],
}
export default config
