import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/no-empty-object-type": "error",
    },
  },
];

export default eslintConfig;
