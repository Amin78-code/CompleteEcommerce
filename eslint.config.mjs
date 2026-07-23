import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // ❌ "error" -> 'any' type dene par BUILD FAIL ho jayegi
      // ⚠️ "warn"  -> Warning dikhayega (Default)
      // 🟢 "off"   -> 'any' type ko completely ALLOW kar dega
      "@typescript-eslint/no-explicit-any": "off", 
    },
  },
]);

export default eslintConfig;
