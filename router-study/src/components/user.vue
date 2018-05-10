<template>
  <div>
      <span>我是{{name}}组件</span>
      <router-link :key="item.id" v-for="item in userLists" :to="{path: '/user/' + item.id}">{{item.name}}</router-link>
      <div class="content">
          <div>姓名:{{userInfo.name}}</div>
          <div>爱好:{{userInfo.hobbit}}</div>
      </div>
  </div>
</template>

<script>
const userLists = [
    {
        id: 1,
        name: 'cz',
        hobbit: 'money'
    },
    {
        id: 2,
        name: 'aa',
        hobbit: 'food'
    },
    {
        id: 3,
        name: 'lal',
        hobbit: 'lall'
    },
    {
        id: 4,
        name: 'asd',
        hobbit: 'dont'
    }
]
export default {
    created(){
        console.log(1)
        console.log(item)
        var temp = this.userLists.filter(item => this.$router.params.id == item.id)
        console.log(temp[0])
        this.userInfo = temp[0]
    },
    watch: {
        // $router() {
        //     this.temp = this.userLists.filter(item => {this.$router.params.id == item.id})
        //     this.userInfo = temp[0]
        // }
    },
    data() {
        return {
            name: 'user',
            userLists,
            userInfo: {}
        }
    }
}
</script>

<style>

</style>
