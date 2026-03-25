import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
];
