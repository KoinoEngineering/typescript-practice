module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  plugins: ["@typescript-eslint"],
  // add your custom rules here
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/no-explicit-any": "error",
    semi: ["error", "never", { beforeStatementContinuationChars: "never" }],
    "@typescript-eslint/member-ordering": "warn",
  },
};
