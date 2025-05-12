module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ["build", "node_modules", "report", ".eslintrc.cjs", ".d.ts", "vite.config.ts"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:import/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:vitest/recommended",
    "plugin:prettier/recommended",
    "plugin:vue/recommended",
  ],
  plugins: ["@stylistic", "simple-import-sort", "@typescript-eslint", "promise", "import", "vitest"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: [".vue"],
  },
  // Disable react rules bring by Airbnb config
  settings: {
    react: {
      version: "999.999.999",
    },
  },
  rules: {
    // Classic rules
    "no-console": ["warn", { allow: ["error"] }],
    "no-param-reassign": "error",

    // Prettier rules
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: false,
        quoteProps: "consistent",
        jsxSingleQuote: false,
        trailingComma: "all",
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: "always",
        endOfLine: "auto",
        singleAttributePerLine: true,
      },
    ],

    // Import rules
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",
    "import/first": "error",
    "import/no-extraneous-dependencies": ["error", { 
      devDependencies: ["vite.config.ts", "vitest.setup.ts", "**/*.test.ts?(x)"] 
    }],
    "import/no-unused-modules": ["error", { "missingExports ": true, "unusedExports": true }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        vue: "never",
      },
    ],

    // Typescript
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-use-before-define": "error",

    // Vue
    "vue/multi-word-component-names": "off",

    // Disable old and depreciated rules
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/no-throw-literal": "off",
  },
  overrides: [],
};
