# vue-cli

> 学习使用vue-cli构建项目
## 如何使用vue-cli构建一个项目
需要安装git，安装node.js

## 项目里面都有什么东西
#### .babelrc
把es6语法转换成es5，让主流浏览器都跑的起来

``` js
{
  "presets": [
    ["env", { "modules": false }],
    "stage-3"
  ]
}
//env表示所有的年份都支持
//stage-3：ECMA接收所有开发者对ECMScript的改进意见
//但是不能把所有的人的意见提交到正式意见中去，会进行一个筛选
//筛选的流程就是stage-0，stage-1，stage-2，stage-3，stage-4
//stage-0展示阶段，看一下代码都有什么，语法怎么写的
//stage-1讨论阶段，讨论语法该不该添加到标准中去
//stage-3草案阶段，基本上进入草案阶段的语法最后都能添加到正式的标准中去
```
#### .editorconfig 编辑器配置
会覆盖掉当前编辑器的设置
``` js
charset = utf-8         //字符集
indent_style = space    //空格多少
indent_size = 2         //缩进多少
```
#### .gitignore 上传到git忽略文件的配置
``` js
.DS_Store           //如果在mac上开发会生成的文件
node_modules/       //忽略开发环境配置的文件
```
#### package.json
``` bash
# dependencies
项目运行需要的依赖

# devDependencies
项目开发需要的依赖
```
#### webpack.config 
