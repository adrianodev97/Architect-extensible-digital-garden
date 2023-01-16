const { join } = require("path");

const  { createGlobPatternsForDependencies } = require("@nrwl/next/tailwind")

module.exports = {
  // mode: "jit",
  purge: [
    join(__dirname, '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  presets: [require("../../tailwind-workspace-preset.js")],
}