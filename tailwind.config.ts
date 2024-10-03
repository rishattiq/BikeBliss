import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

    theme: {
      extend: {
        colors: {
          dark: 'black',
          purple: {
            600: '#6B46C1',
            700: '#553C9A',
          },
        },
      },
    },
    plugins: [],
  }
  

export default config;
