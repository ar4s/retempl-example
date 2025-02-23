import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "node_modules",
      "dist",
      "coverage",
      "**/*.d.ts",
      "packages/**/dist/",
      "eslint.config.js",
      "packages/builder/maac.js",
      "packages/dashboard/.astro",
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.stylisticTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.eslint.json"],
        tsconfigRootDir: new URL(".", import.meta.url).pathname,
      },
    },
  },
);
// export default [
// 	...tseslint.configs.recommendedTypeChecked,
// 	...tseslint.configs.stylisticTypeChecked,
//   eslintPluginPrettierRecommended,
//   {
//     ignores: ['node_modules', 'dist', 'coverage', '**/*.d.ts','packages/**/dist/', 'eslint.config.js', 'packages/builder/maac.js'],
//   },
//   {
// 		languageOptions: {
// 			parser: tseslint.parser,
// 			parserOptions: {
// 				project: ['./packages/*/tsconfig.json'],
// 				tsconfigRootDir: new URL('.', import.meta.url).pathname,
// 			},
// 		},
//   }
// ]
