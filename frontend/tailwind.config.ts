import type { Config } from "tailwindcss";
import { withGEL } from '@westpac/ui/tailwind';

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
const config = withGEL({
  relative: true,
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@westpac/ui/src/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: [],
  options: {
    brandFonts: {
      src: '/fonts', // path to font files
      brands: ['wbc', 'stg'], // takes a single brand string e.g. 'wbc' or an array of brands. If no brands are specified will import all brands by default
    },
  },
});

export default config;


