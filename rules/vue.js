module.exports = {
    // https://github.com/maranran/eslint-plugin-vue-a11y
    extends: ['plugin:vue/strongly-recommended', 'plugin:vue-a11y/base'],
    plugins: ['vue', 'vue-a11y'],
    rules: {
        'vue/html-indent': ['warn', 4],
        'vue/script-indent': 'off',
        'vue/attributes-order': 'off', // FIXME: This should be turned on
        'vue/html-quotes': 'error',
        'vue/no-v-html': 'error',
        'vue/order-in-components': 'error',
        'vue/this-in-template': 'error',
        'vue/html-closing-bracket-newline': 'error',
        'vue/html-closing-bracket-spacing': 'error',
        'vue/no-confusing-v-for-v-if': 'off',
        'vue/no-use-v-if-with-v-for': 'error',
        'vue/prop-name-casing': 'error',
        // disallow parameter object manipulation except for specific exclusions
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'acc', // for reduce accumulators
                    'accumulator', // for reduce accumulators
                    'e', // for e.returnvalue
                    'state' // for vuex state
                ]
            }
        ],
        'vue-a11y/label-has-for': 'off',
        'vue-a11y/form-has-label': 'off',
        'vue-a11y/accessible-emoji': 'off',
        'vue-a11y/aria-props': 'error',
        'vue-a11y/aria-role': 'error',
        'vue-a11y/aria-unsupported-elements': 'error',
        'vue-a11y/interactive-supports-focus': 'error',
        'vue-a11y/no-redundant-roles': 'error',
        'vue-a11y/role-has-required-aria-props': 'error'
    }
};
