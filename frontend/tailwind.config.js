// import daisyui from "daisyui";

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")], // Ensure DaisyUI is correctly loaded
//   daisyui: {
//     themes: [
//       "light", "dark", "cupcake", "bumblebee", "emerald", "corporate",
//       "synthwave", "retro", "cyberpunk", "valentine", "halloween",
//       "garden", "forest", "aqua", "lofi", "pastel", "fantasy",
//       "wireframe", "black", "luxury", "dracula", "cmyk", "autumn",
//       "business", "acid", "lemonade", "night", "coffee", "winter",
//       "dim", "nord", "sunset",
//     ],
//   },
// };
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
