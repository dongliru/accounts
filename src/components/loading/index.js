import LoadingComponent from './Loading.vue'
// 将插件install一下，才能使用
const Loading ={

    install:function(Vue){
        Vue.component('Loading',LoadingComponent)
    }
}
export default Loading