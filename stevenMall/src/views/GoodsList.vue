<template>
    <div>這是商品列表頁面
        goodId:<span>{{$route.params.goodsId}}</span><br>
        user:<span>{{$route.params.name}}</span>

        <router-link to="/goods/title">顯示商品標題</router-link>      <!-- 如果寫'/title'會發現沒有在goods/底下喔!' 另外其實router-link就是a -->  
        <router-link to="/goods/img">顯示商品圖片</router-link>

        <div>
            <router-view></router-view>
        </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style>

</style>
