### 属性
v-once: 值渲染一次，不再重新绑定
v-on: 绑定事件
`v-on:click` 可以简写成`@click`
v-bind:动态绑定属性
`v-bind:href`可以简写成`:href`
`<a v-bind:href="link">baidu</a>`
### 侦听属性watch 和 计算属性comoputed
当你有一些数据需要随着其它数据变动而变动时，可以使用这些功能
computed是函数立即执行的
watch可以做一些异步操作