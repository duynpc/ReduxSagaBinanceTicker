module.exports = {
  root: true,
  extends: [
    "plugin:react/recommended",
    "@react-native-community",
    "eslint-plugin-react-hooks",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        indent: ["error", 2],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "react/jsx-pascal-case": 2,
        "no-unused-vars": "error",
        "object-curly-spacing": ["error", "always", { arraysInObjects: false }],
        "prettier/prettier": "off",
        radix: "off",
        "eol-last": ["error", "always"],
        "prefer-template": "error",
        "prefer-const": "error",
        curly: "error",
        "no-multi-spaces": "error",
        "keyword-spacing": ["error"],
        "function-paren-newline": ["error", "consistent"],
        "no-duplicate-imports": "error",
        "max-len": [
          "error",
          {
            code: 80,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
          },
        ],
        "object-shorthand": "error",
      },
    },
  ],
};
