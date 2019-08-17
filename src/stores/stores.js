import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//初始化仓库
//从本地获取数据cart
var car = JSON.parse(localStorage.getItem('cart') || '[]');
const store = new Vuex.Store({
    state :{
        count :0,
        cart:car

    },
    mutations :{
        //购物车增加
        addmutations(state){
            state.count++

        },
        //购物车减少
        submutations(state){
            state.count-= 1

        },
        //添加购物车
        AddCart(state,goodsinfor){
            //点击加入购物车，把商品信息保存到仓库里
            //1.如果购物车已经有了这个商品，只需要增加数量
            //2.如果没有，就直接把商品数据直接push到数组cart里
            //假设没有找到对应的商品
            var flag = false;
            state.cart.some(item=>{
                if(item.goodsId == goodsinfor.goodsId){
                    item.count += parseInt(goodsinfor.count)
                    flag = true;
                    return true
                }
            })
            //如果循环后还是false，push到cart里
            if(!flag){
                state.cart.push(goodsinfor)
            }
            //当存到cart，把数据保存到本地里
            localStorage.setItem('cart',JSON.stringify(state.cart))

        }

    },
    getters :{
        getallcount(state){
            var c = 0;
            state.cart.forEach(item=>{
                c += item.count
                
            })
            return c
        },
        getallprice(state){
            var aaa = 0;
            state.cart.forEach(item=>{
                if(item.isok==true){
                    aaa += item.count * item.goodsPrice *100
                }

            })
            return aaa

        }

    }
})
export default store