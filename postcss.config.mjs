/* PostCSS config for Tailwind v4.
   Without this file, Next.js doesn't run your CSS through Tailwind, so
   `@import "tailwindcss";` and the `@theme {}` block in globals.css are
   silently dropped — which is why backgrounds were transparent and the
   typefaces were falling back to system defaults. */

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
