import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./node_modules/flyonui/**/*.{js,ts}",
  ],
} satisfies Config;
