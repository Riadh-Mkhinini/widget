module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /.*/, // ✅ preserve all Tailwind + shadcn classes
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
