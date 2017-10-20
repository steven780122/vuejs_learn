<template>
    <div>這是商品列表頁面
        goodId:<span>{{$route.params.goodsId}}</span><br>
        user:<span>{{$route.params.name}}</span>

        <router-link to="/goods/title">顯示商品標題</router-link>      <!-- 如果寫'/title'會發現沒有在goods/底下喔!' 另外其實router-link就是a -->  
        <router-link to="/goods/img">顯示商品圖片</router-link>

        <div>
            <router-view></router-view>
        </div>

        <router-link to="/cart">跳到購物車頁面 by to屬性</router-link>     <!-- 這是透過標籤router-link -->
        <!-- 如何不用呢，如以下 -->
        <br>
        <button @click="jump">button-跳轉到購物車頁面 by @click</button>   <!-- button的話可使用@click -->
        <br>
        <!-- <router-link to="{name:'cart'}">跳轉到購物車頁面 by name</router-link>    用name來指定路由,給一個含name的物件 -->
        <!-- 但是帶name物件的話不能直接用to寫!!! -->
        <!-- 要寫成>> v-bind:   如以下才會成功!-->
        <router-link v-bind:to="{name:'cartid', params:{cartId:123}}">跳轉到購物車頁面 by name</router-link>  



    </div>
    
</template>

<script>
export default {
    methods:{
        jump(){
            // this.router是在定義多路由~   如果傳參數到某個路由，該路由要取某個參數則是使用$route.query.XXXX!
            // this.$router.push("/cart")    // 此為編程路由法一
            // this.$router.push({path:'/cart'})  // 此為編程路由法二
            this.$router.push({path:'/cart?goodsId=123'})  // 此編程路由為可以拿來傳參數  

            // 還可以透過.go去實現history往前頁往後頁的概念:
            // this.$router.go(-2);     //和在console輸入history.go(-2)概念同
        }
    }

}
</script>

<style>

</style>
