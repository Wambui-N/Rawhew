import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-foglihtenno07)']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "transparent": "transparent",
        "white": "#FFFBE8",
        "black": "#011305",
        "primary": "#FF8B37",
      },
      screens: {
        'sm': '568px',
        'md': '768px',
        'lg': '1068px',
        //'xl': '1280px',
        //'2xl': '1536px',
     },
    },
  },
  plugins: [],
};
export default config;
