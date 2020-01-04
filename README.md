# wx-mpvue-demo

> 测试

## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

## 项目初始化

- 封装vuex，需要在根main.js中引入 
```
// 导入vuex
import store from './pages/counter/store'
Vue.prototype.$store = store

```

- 配置别名 @js @img @com @pages @css 直接在build/webpack.base.conf.js中配置

- 引用UI库 vant weapp（iViewUI weapp、colorUI） 

- 引用scss，并设置公共类名

- 配置axios请求

- 设置公共方法和全局方法

- 组件和全局组件

- 路由待定（或使用方法）

- 常用插件，如 dayjs

## 小程序开发注意事项

- 模板中v-html指令不可用

- {{}}表达式只能做简单的运算符运算（+ - * % ?: ! == === > < [] .），函数，复杂表达式，过滤器等均不可用，可用computed代替

- 在模板中，只有事件可调用methods的方法

- style class 绑定对象或数组直接写在模板中，不支持对象变量，或者在computed中计算

- 使用v-for必须制定index，如 `<li v-for="(item, index) in list">item</li>`

- `<input />` 和 `<textarea />` 的change事件会转为blur事件，没有键盘事件

```
// 左侧为WEB事件 : 右侧为对应的小程序事件
{
    click: 'tap',
    touchstart: 'touchstart',
    touchmove: 'touchmove',
    touchcancel: 'touchcancel',
    touchend: 'touchend',
    tap: 'tap',
    longtap: 'longtap',
    input: 'input',
    change: 'change',
    submit: 'submit',
    blur: 'blur',
    focus: 'focus',
    reset: 'reset',
    confirm: 'confirm',
    columnchange: 'columnchange',
    linechange: 'linechange',
    error: 'error',
    scrolltoupper: 'scrolltoupper',
    scrolltolower: 'scrolltolower',
    scroll: 'scroll'
}

```

- 表单组件推荐使用小程序原生的表单组件

- 图片，插件等尽量按需引入，避免应用过大

## 小程序问题及解决方法

#### 存放全局访问变量或方法？

- 使用 `vuex` 存放公共变量、方法，使用 `localStorage` 存放持久数据，使用js存放工具变量或方法，直接在 `vue` 全局挂载变量或方法

#### 页面跳转传递参数？

#### 返回上一页传递当前页数据？

#### 使用自定义UI库，如iview

- npm i iview-weapp  ==> 将组件库复制到static目录下，并更改该目录名称如iview ==> 配置组件（可全局配置也可在所需页面配置）{ "i-button": "../../static/iview/button/index" } ==> 直接在页面使用