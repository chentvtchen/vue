### 属性
##### v-once: 值渲染一次，不再重新绑定
##### v-on: 绑定事件
`v-on:click` 可以简写成`@click`<br>
##### v-bind:动态绑定属性
`v-bind:href`可以简写成`:href`<br>
`<a v-bind:href="link">baidu</a>`<br>
##### v-show和v-if的区别
v-show没有渲染的的节点是用display:none的形式在页面上面，v-if没有渲染的节点在dom节点里面找不到，一般情况下用v-if更好，因为能够减少页面不必要的一些dom节点
##### v-model：双向数据绑定
##### key值
因为vue相似的模板会进行复用，比如input框什么的，所以要加上key值
##### 侦听属性watch 和 计算属性computed
当你有一些数据需要随着其它数据变动而变动时，可以使用这些功能,computed是函数立即执行的,watch可以做一些异步操作
##### 变量命名
 如果变量是通过 `$` 或者 `_` 命名的，vue是不会把这个变量代理到最顶层，不能通过`this.$someThing`获取到，需要通过`this.$data.$someThing`获取到<br>
 `this.$data = this.data`
 ##### ref属性
``` javascript
<button ref="myButton"></button>
通过.$refs.myButton找到原生dom节点
```
### 兼容性（ie8以上）
因为vue用的是es5，ie8以及ie8一下使用的是es3语法