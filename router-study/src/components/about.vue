<template>
  <div>
      <span>我是{{name}}组件</span>
        <li><router-link :to="{path: '/about/com'}">com</router-link></li>
        <li><router-link to="/about/hobbit">hobbit</router-link></li>
        <li><router-link to="/about/person">person</router-link></li>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'about'
        }
    }
}
</script>

<style>

</style>
