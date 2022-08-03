module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["plugin:react/recommended", "google"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "always",
        asyncArrow: "always"
      }
    ],
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "never",
        imports: "never",
        exports: "never",
        functions: "never"
      }
    ],
    "react/react-in-jsx-scope": "off",
    "max-len": [2, 110, 4, { ignoreUrls: true }],
    indent: [2, 2],
    commonjs: "off",
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "object-curly-spacing": [2, "always"],
    "no-undef": 2,
    "no-var": 2,
    "no-const-assign": 2,
    "no-unused-vars": 2,
    "prefer-const": 2,
    "no-case-declarations": "off",
    "quote-props": "consistent-as-needed",
    "quote-props": [2, "as-needed"],
    "require-jsdoc": 0,
    "linebreak-style": 0,
    "comma-dangle": [
      "error",
      {
        objects: "only-multiline",
        arrays: "only-multiline"
      }
    ],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "ignore",
        named: "never",
        asyncArrow: "never"
      }
    ]
  }
};
