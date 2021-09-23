module.exports = {
  root: true,
  extends: '@react-native-community',
  globals: {
    window: true,
    google: true,
    document: true,
    localStorage: true,
  },
  rules: {
    /*
     0：不使用此规则
     1：使用规则警告但不报错
     2：应用规则并报错
     */
    /*风格相关配置*/
    // 行尾使用分号
    semi: [1, 'always'],
    // 禁用 alert、confirm 和 prompt，避免生产环境时被使用
    'no-alert': 0,
    // 禁止 if 语句中有 return 之后有 else
    'no-else-return': 2,
    // 禁止使用空解构模式no-empty-pattern
    'no-empty-pattern': 2,
    // 禁止在全局范围内使用 var 和命名的 function 声明
    'no-implicit-globals': 1,
    // 某一行中禁止使用多个空格
    'no-multi-spaces': 2,
    // 禁止多次声明同一变量
    'no-redeclare': 2,
    // 要求 IIFE 使用括号括起来
    'wrap-iife': [2, 'any'],
    /*ES6语法相关*/
    // 禁止修改 const 声明的变量
    'no-const-assign': 2,
    // 强制在箭头函数体周围使用大括号
    'arrow-body-style': 2,
    //禁止重复的函数声明
    'no-func-assign': 2,
    //不能有无法执行的代码
    'no-unreachable': 1,
    // 要求箭头函数的前后都要有空格
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    // 禁止出现空函数，但是空函数中如果有一行注释可以被通过
    // eslint-disable-next-line no-undef
    'no-empty-function': [2, {allow: ['functions', 'arrowFunctions']}],
    //禁止无用的表达式
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'vue/no-mutating-props': 0,
    'no-console': 'off',
    'no-debugger': 'off', //process.env.NODE_ENV === 'production' ? 'error' : 'off'
    'no-control-regex': 0,
    'no-useless-escape': 0,
    // 禁用行尾空格
    'no-trailing-spaces': 2,
    // 换行缩进2个空格
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    // 要求数组元素前后无空格
    'array-bracket-spacing': [2, 'never'],
    // 强制在关键字前后使用一致的空格
    'keyword-spacing': 2,
    // 不允许空格和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 2,
    // 不允许多个空行
    'no-multiple-empty-lines': [
      2,
      {
        max: 2,
      },
    ],
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': 2,
    // 要求操作符周围有空格
    'space-infix-ops': 2,
    /* ESLint 官网推荐的最佳实践*/
    // 限制圈复杂度为 13，这里仅 warning 警示，如果确实需要不要 ESLint 校验下列代码，请增加注释：// eslint-disable-next-line no-undef
    complexity: [1, 13],
    // 当代码块只有一条语句时，JavaScript 不允许省略大括号
    curly: [2, 'all'],
    // switch 语句要有 default 分支，这里仅 warning 警示
    'default-case': 1,
    // 使用 === 替代 == allow-null允许null和undefined==
    eqeqeq: [1, 'allow-null'],
    // 要求 for-in 循环中有一个 if 语句，避免原型链继承来的属性被使用
    'guard-for-in': 2,
    quotes: 0,
  },
};
