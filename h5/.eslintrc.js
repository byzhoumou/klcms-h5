/** @type {import('eslint').Linter.Config} */
module.exports = {
    env: {
        browser: true, // 在浏览器环境中运行
        es2021: true, // 启用ES2021语法支持
        node: true, // 在Node.js环境中运行
    },
    extends: [
        'vue-global-api', // 支持Vue 3的全局API
        'eslint:recommended', // 启用ESLint推荐的规则
        'plugin:vue/vue3-recommended', // 使用Vue 3推荐的规则
        '@vue/typescript/recommended', // 推荐的Vue TypeScript规则
        'plugin:prettier/recommended', // 结合Prettier的推荐规则
    ],
    parser: 'vue-eslint-parser', // 使用vue-eslint-parser
    parserOptions: {
        parser: {
            js: 'espree', // JavaScript的解析器
            ts: '@typescript-eslint/parser', // TypeScript的解析器
            '<template>': 'espree', // Vue模板的解析器
        },
        ecmaVersion: 2021, // 使用2021版本的ECMAScript
        sourceType: 'module', // 使用ES模块
    },
    plugins: ['vue'], // 使用Vue插件
    rules: {
        'no-undef': 'off', // 关闭未定义变量检查
        'no-console': 'off', // 允许使用console
        'no-debugger': 'off', // 允许使用debugger
        'prettier/prettier': 'warn', // Prettier的规则不符合时给出警告
        'prefer-template': 'error', // 要求使用模板字符串而非字符串连接
        'vue/no-reserved-component-names': 'off', // 允许使用Vue保留的组件名称
        '@typescript-eslint/no-this-alias': 'off', // 允许将this赋值给变量
        '@typescript-eslint/no-explicit-any': 'off', // 允许使用any类型
        '@typescript-eslint/no-var-requires': 'off', // 允许使用require语句
        '@typescript-eslint/no-empty-function': 'off', // 允许空函数
        '@typescript-eslint/ban-ts-comment': 'off', // 允许使用@ts-ignore等注释
        'vue/no-v-html': 'off', // 允许使用v-html指令
        'vue/html-self-closing': [
            'error', // 强制自闭合风格
            {
                html: {
                    void: 'any', // 对于无内容元素，不强制自闭合风格
                    normal: 'any', // 对于有内容的元素，不强制自闭合风格
                    component: 'always', // 组件必须自闭合
                },
                svg: 'always', // SVG元素必须自闭合
                math: 'always', // MathML元素必须自闭合
            },
        ],
        'vue/multi-word-component-names': 'off', // 允许单个单词的组件名称
        'vue/attributes-order': 'warn', // Vue属性应按一定顺序声明，给出警告级别的提示
    },
}
