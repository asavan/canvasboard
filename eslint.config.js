import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        rules: {
            semi: ["error", "always"],
            "indent": ["error", 4],
            "linebreak-style": [
                "warn",
                "windows"
            ],
            "quotes": [
                "error",
                "double"
            ],
            "require-await": ["error"],
            "comma-spacing": ["error"],
            "no-var": ["error"],
            "prefer-arrow-callback": ["error"],
            "curly": ["error"],
            "prefer-const": ["error"],
            "brace-style": ["error", "1tbs"],
            "arrow-body-style": ["error"],
            "space-before-blocks": ["error", "always"],
            "no-multi-spaces": ["error"]
        }
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                __USE_SERVICE_WORKERS__: "readonly"
            }
        }
    },
    {
        ignores: ["old/*", "android/*", "docs/*"]
    }
];
