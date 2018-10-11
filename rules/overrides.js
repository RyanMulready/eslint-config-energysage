module.exports = {
    rules: {
        indent: ['warn', 4],
        'max-len': ['warn', { code: 119 }],
        'linebreak-style': 'off',
        'no-underscore-dangle': 'off',

        'import/no-extraneous-dependencies': 'off',
        'import/no-cycle': 'off',
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
            }
        ],
        'import/order': 'off'
    }
};
