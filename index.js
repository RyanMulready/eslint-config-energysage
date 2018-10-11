module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        'eslint-config-airbnb-base/rules/strict',
        './rules/vue',
        './rules/overrides'
    ].map(require.resolve),
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true
    },
    rules: {}
};
