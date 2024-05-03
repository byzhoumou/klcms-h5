module.exports = {
  // 一行的最大字符数，超过将会进行折行
  printWidth: 80,

  // 一个制表符代表的空格数
  tabWidth: 4,

  // 使用空格代替制表符进行缩进
  useTabs: false,

  // 语句末尾不使用分号
  semi: false,

  // 使用单引号而非双引号
  singleQuote: true,

  // 对象的key仅在必要时用引号
  quoteProps: "as-needed",

  // JSX中不使用单引号，而使用双引号
  jsxSingleQuote: false,

  // 在ES5中有效的地方使用尾随逗号（如多行的对象字面量，数组等）
  trailingComma: "es5",

  // 对象字面量的大括号内两侧使用空格
  bracketSpacing: true,

  // HTML、Vue、Angular的尖括号是否同行显示，设置为false则>会单独一行
  bracketSameLine: false,

  // 箭头函数参数总是包括圆括号
  arrowParens: "always",

  // HTML文件的空白敏感度，"ignore"选项可以防止格式化时对空格的更改
  htmlWhitespaceSensitivity: "ignore",

  // Vue文件中的<script>和<style>标签是否缩进
  vueIndentScriptAndStyle: true,

  // 文件结束使用换行符，lf表示只使用\n，其他选项包括crlf（\r\n）和cr（\r）
  endOfLine: "lf",
};
