### 兼容性（ie8以上）
因为vue用的是es5，ie8以及ie8一下使用的是es3语法
### 思想
使用虚拟dom，数据进行改变的话和虚拟dom进行比对，如果有差别的话再进行渲染
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
``` HTML
<button ref="myButton"></button>
通过.$refs.myButton找到原生dom节点
```
##### vue实际挂载的两种方法
`el : '#app'`，vue实例生成的时候就挂载上去<br>
`vm1.$mount('#app')`,实例创建完再进行挂载（用在dom节点还没有生成或者不知道vue实例应该挂载到哪里的时候）<br>
##### template模板渲染 
``` javascript
var vm3 = new Vue({
    template : '<h1>hello world</h1>'
})
//把vm3里面渲染成真实dom
vm3.$mount();
document.getElementById('app2').appendChild(vm3.$el);
document.getElementById('app3').appendChild(vm3.$el);
// 通过new vue()实例的模板只能挂载到一个点上面,也就是只有app2上面渲染了模板
```
##### 模板创建
``` javascript
Vue.component('hello', {
    template : '<h1>hello</h1>'
})
//模板使用方法
<hello></hello>
```
### vue生命周期（重要）
[例子解说](lifeCycle.html)
如果el和template同时存在的话，就会编译template，忽略el了
![vue生命周期](https://vuejs.org/images/lifecycle.png)