module.exports = {
  root: true,
  globals: {
    __dirname: true,
    module: true,
    process: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.node.json"],
    tsconfigRootDir: "./",
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "prettier",
    "airbnb",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier.
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  plugins: ["@typescript-eslint", "react-hooks", "react", "import", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],

    // TypeScript
    // "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/default-param-last": "off",
    "@typescript-eslint/dot-notation": "off",

    // React
    "react/display-name": 0,
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "react/require-default-props": "off",
    "react/no-unused-prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-array-index-key": "off",

    // No-XXX
    "no-shadow": "off",
    "no-use-before-defne": "off",
    "no-debugger": "off",
    "no-unused-vars": "off",
    "no-plusplus": "off",

    // Import
    // "import/extensions": "off",
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,

    // Other
    "spaced-comment": "off",
    "jsx-a11y/anchor-is-valid": "off",
  },
};
