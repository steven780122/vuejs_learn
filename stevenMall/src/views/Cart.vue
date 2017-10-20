<template>
    <div>
        這是購物車頁面
        <span>{{$route.query.goodsId}}</span>     
        <!-- 應該可以發現跟前面使用動態路由取參數的方式不太一樣:  前面是使用{$route.params.goodsId -->
        <!-- {$route.query.goodsId是 透國頁面傳遞直接使用"問號"傳遞 -->
        <!-- $route.params.goodsId 則是動態路由在router的index.js的path: '/goods/:goodsId/user/:name', 的寫法在傳遞 -->
    </div>

  
</template>

<script>
export default {

}
</script>

<style>

</style>
