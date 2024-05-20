import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // 让 Tailwind 处理 src 目录下的所有文件
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      utilities: {
        '.no-scrollbar': {
          /* For WebKit browsers */
          '-webkit-overflow-scrolling': 'touch',
          'scrollbar-width': 'none',  /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none',  /* Safari and Chrome */
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
