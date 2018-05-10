import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import doc from '../components/doc.vue'
import about from '../components/about.vue'
import person from '../components/person.vue'
import com from '../components/com.vue'
import hobbit from '../components/hobbit.vue'
import error from '../components/error.vue'
import user from '../components/user.vue'

Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        // 重定向方法的使用，如果是根目录的话，进入home，不然进入error
        // path *，除基本配置之外的都会走这个路由
        {
            path: '*',
            redirect(to) {
                if(to.path == '/') {
                    return '/home'
                } else {
                    return '/error'
                }
            }
        },
        {
            name: 'error',
            path: '/error',
            component: error
        },
        {   
            name: 'home',
            path: '/home',
            component: home
        },
        {
            name: 'doc',
            path: '/doc',
            component: doc
        },
        // 动态路由
        {
            name: 'user',
            // 匹配有user的id或者没有的，两者都可以
            path: '/user/:id?',
            component: user
        },        
        {
            path: '/about',
            component: about,
            children: [
                {
                    path: 'person',
                    component: person
                },
                {
                    path: 'hobbit',
                    component: hobbit
                },
                {
                    path: 'com',
                    component: com
                }
            ]
    }],
    mode: 'hash',   //默认hash值，还有abstract,history模式
    // 把router-link-active变成下面这个class
    linkActiveClass: 'active-link'
  })
  