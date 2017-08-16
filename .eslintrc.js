module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        worker: true,
        serviceworker: true,
        phantomjs: true,
        mocha: true
    },
    parserOptions: {
        sourceType: 'module'
    },
    extends: 'eslint:recommended',
    root: true,
    rules: {
        indent: [2, 4, { 'SwitchCase': 1 }],
        'linebreak-style': [2, 'unix'],
        quotes: [2, 'single'],
        semi: [2, 'always'],
        'accessor-pairs': [2, { getWithoutSet: false }],
        'array-callback-return': 2,
        complexity: [2, 20],
        curly: [2, 'all'],
        'dot-location': [2, 'property'],
        'dot-notation': 2,
        eqeqeq: [2, 'smart'],
        'guard-for-in': 2,
        'no-alert': 2,
        'no-caller': 2,
        'no-console': 2,
        'no-else-return': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-implicit-coercion': [2, {
            boolean: true,
            number: true,
            string: true,
            allow: ['!!']
        }],
        'no-implicit-globals': 2,
        'no-implied-eval': 2,
        'no-invalid-this': 2,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        // 'no-magic-numbers': 2 // TODO (mirande): lots of weird errors but would be nice to support
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-octal-escape': 2,
        'no-proto': 2,
        'no-return-assign': [2, 'except-parens'],
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-use-before-define': [2, 'nofunc'],
        'no-void': 2,
        'no-with': 2,
        radix: 2,
        'vars-on-top': 2,
        'wrap-iife': [2, 'outside'],
        yoda: 2,
        strict: 2,
        'no-catch-shadow': 2,
        'no-label-var': 2,
        'no-shadow-restricted-names': 2,
        'no-new-require': 2,
        'no-path-concat': 2,
        'array-bracket-spacing': 2,
        'block-spacing': 2,
        'brace-style': [2, '1tbs', { allowSingleLine: true }],
        camelcase: [2, { properties: 'never' }],
        'comma-spacing': [2, { before: false, after: true }],
        'comma-style': [2, 'last'],
        'computed-property-spacing': 2,
        'consistent-this': [2, 'self'],
        'key-spacing': [2, { beforeColon: false, afterColon: true }],
        'keyword-spacing': [2, {
            before: true,
            after: true,
            overrides: {
                catch: { after: false }
            }
        }],
        'max-depth': [2, 3],
        /*
        // TODO (mirande): this one is a PITA b/c of strings and chai's expect()
        // chaining. we could come up with an ignorePattern that does the right
        // thing but i'm not sure it's worth it
        'max-len': [2, {
            code: 120,
            tabWidth: 4,
            ignoreUrls: true,
            ignoreComments: true
        }],
        */
        'max-nested-callbacks': [2, 4],
        'max-params': [2, 4],
        'max-statements': [2, 50, { ignoreTopLevelFunctions: true }],
        'new-cap': [2, {
            newIsCap: true,
            capIsNew: true,
            capIsNewExceptions: []
        }],
        'new-parens': 2,
        'no-nested-ternary': 2,
        'no-new-object': 2,
        'no-spaced-func': 2,
        'no-trailing-spaces': 2,
        'no-unneeded-ternary': 2,
        'no-whitespace-before-property': 2,
        'object-curly-spacing': [2, 'always'],
        'one-var': [2, {
            var: 'always',
            let: 'always',
            const: 'never'
        }],
        'space-before-function-paren': [2, 'never'],
        'space-in-parens': [2, 'never'],
        'arrow-body-style': [2, 'as-needed'],
        'arrow-parens': [2, 'as-needed'],
        'arrow-spacing': [2, { before: true, after: true }],
        'generator-star-spacing': [2, { before: true, after: false }],
        'no-confusing-arrow': 2,
        'no-useless-constructor': 2,
        // 'prefer-template': 2, // TODO (mirande): node v4+ and a few fixes needed
        'require-yield': 2,
        'template-curly-spacing': [2, 'never']
    }
};
