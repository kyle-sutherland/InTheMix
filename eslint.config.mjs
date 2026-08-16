import js from "@eslint/js";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

/* eslint-config-next 16 ships a native flat config, so it is imported
   directly. The previous setup bridged it through FlatCompat, which crashed
   with "Converting circular structure to JSON" and made `lint` unrunnable.
 *
 * NOTE: pinned to ESLint 9. eslint-config-next bundles eslint-plugin-react-hooks,
 * which declares a peer of eslint <=9; on ESLint 10 linting dies with
 * "scopeManager.addGlobals is not a function". Revisit once those plugins
 * ship ESLint 10 support. */
const config = [
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
  js.configs.recommended,
  ...nextCoreWebVitals,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
];

export default config;
