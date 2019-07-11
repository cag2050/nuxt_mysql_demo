module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    plugins: [
        'prettier'
    ],
    // add your custom rules here
    rules: {
        'nuxt/no-cjs-in-config': 'off',
        indent: ['error', 4], // 4个空格缩进,更多配置请戳 http://eslint.cn/docs/rules/
        // template 部分：1.4个空格；2.一开始是4个空格
        "vue/html-indent": ["error", 4, {
            "baseIndent": 1
        }]
    }
}
