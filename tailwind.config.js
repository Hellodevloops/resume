/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        dot: "url('/assets/dots.svg')",
      },
      // screens: {
      //   '2xl': '2400px', 
      // },
      // maxWidth: {
      //   'screen-2xl': '2400px', 
      // },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/aspect-ratio"),
  ],
};
