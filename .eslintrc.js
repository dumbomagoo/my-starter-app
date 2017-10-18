module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "strict": [2, "never"], // ES Modules are implicitly strict
        "no-use-before-define": [2, "nofunc"], // allow referencing function declarations in the whole scope where they're defined
        "no-var": 1,
        "no-console": 1, //Warning for now, definitely want to evaluate later
        "no-debugger": 2,
        "no-only-tests/no-only-tests": 2,
        "curly": 2,
        "space-infix-ops": 1,
        "default-case": 2,
        "no-else-return": 2,
        "no-param-reassign": 2,
        "indent": [2, 2],
        "space-after-keywords": [2, "always"],
        "space-in-parens": [2, "never"],
        "prefer-const": 2,
        "brace-style": 1,
        "comma-style": 2,
        "no-multiple-empty-lines": [2, {
          "max": 2
        }],
        "quotes": [2, "single"],
        "spaced-comment": 2,
        "no-loop-func": 0, // this is more annoying than useful when properly using ES2015 block bindings
        "no-underscore-dangle": 0,
        "no-alert": 0,
        "no-shadow": 0,
        "complexity": [2, 10],
        "dot-notation": 1,
        "eqeqeq": [2, "smart"],
        "guard-for-in": 2,
        //react rules
        "react/display-name": [1, {"acceptTranspilerName": true}],
        "react/forbid-prop-types": [1, { "forbid": ["any", "array"] }], // Excludes 'object' because there are several areas where we cannot reasonaly define a shape instead
        "react/jsx-boolean-value": 1,
        "react/jsx-closing-bracket-location": 1,
        "react/jsx-curly-spacing": [2, "never"],
        "react/jsx-indent-props": 1,
        "react/jsx-max-props-per-line": [1, {"maximum": 5}],
        "react/jsx-no-duplicate-props": 1,
        "react/jsx-no-literals": 1,
        "react/jsx-no-undef": 1,
        "no-unused-vars" : [1, { "argsIgnorePattern": "^_$" }], // Warn about unused variables. Do not error.
        "jsx-quotes": 1,
        "react/sort-prop-types": 1,
        "react/jsx-sort-props": 0,
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/no-danger": 1,
        "react/no-did-mount-set-state": 1,
        "react/no-did-update-set-state": 1,
        "react/no-direct-mutation-state": 1,
        "react/no-multi-comp": 1,
        "react/no-set-state": 1,
        "react/no-unknown-property": 1,
        "react/prop-types": 1,
        "react/prefer-stateless-function": 1,
        "react/react-in-jsx-scope": 1,
        "react/require-extension": 0, //consider setting this to 1 if we can switch to a webpack babel loader
        "react/self-closing-comp": 1,
        "react/sort-comp": 1,
        "react/wrap-multilines": 1
    }
};