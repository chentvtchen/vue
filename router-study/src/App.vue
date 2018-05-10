<template>
  <div id="app">
      <ul>
        <!-- <li><a href="#/home">home</a></li>
        <li><a href="#/doc">doc</a></li>
        <li><a href="#/about">about</a></li> -->
        <!-- 等同于 -->
        <!-- <li><router-link to="/home" tag="li" activeClass="a">home</router-link></li> -->
        <li><router-link :to="{path: '/home'}">home</router-link></li>
        <li><router-link to="/doc">doc</router-link></li>
        <li><router-link to="/about">about</router-link></li>
        <li><router-link to="/user">user</router-link></li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  ul {
    li {
      list-style: none;
      width: 200px;
      height: 100px;
      display: inline-block;
      a {
        text-decoration: none;
      }
    }
  }
  .active-link {
    color: red;
  }
  .a {
    color: green;
  }
</style>

