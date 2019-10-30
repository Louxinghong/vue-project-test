module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: ["plugin:vue/essential"],
  globals: {
    saveAs: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    semi: ["error", "never"], // 行尾不使用分号
    "no-multi-spaces": 1, // 不能用多余的空格,
    "space-before-function-paren": [2, "always"], // 函数定义时括号前面要不要有空格
    "no-multiple-empty-lines": [2, { max: 1 }], // 空行最多不能超过2行
    quotes: [2, "single"], // 引号类型 `` "" ''
    "no-console": "off", // 可以使用console.log
    "no-return-await": "off"
  }
};
