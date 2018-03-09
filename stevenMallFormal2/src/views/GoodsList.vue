<template>
    <div>
        <!-- 使用時:  不能用大寫NavHeader   因為w3規定只能小寫和'-'' -->
        <!-- 必須使用nav-header -->   
        <nav-header></nav-header>

        <nav-bread>
            <span slot="bread">Goods</span>
            <span slot="Test">測試用</span>
        </nav-bread>
 
        

        <div class="accessory-result-page accessory-page">
        <div class="container">
            <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
            </div>
            <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter">
                <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)">All</a></dd>
                
                <dd v-for="price in priceFilter">
                    <a href="javascript:void(0)">{{price.startPrice}} - {{price.endPrice}}</a>                   
                </dd> 

                <!-- <dd>
                    <a href="javascript:void(0)">0 - 100</a>
                </dd> -->
                <!-- <dd>
                    <a href="javascript:void(0)">100 - 500</a>
                </dd>
                <dd>
                    <a href="javascript:void(0)">500 - 1000</a>
                </dd>
                <dd>
                    <a href="javascript:void(0)">1000 - 2000</a>
                </dd> -->
                </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
                <div class="accessory-list col-4">
                <ul>
                    <li v-for="(item, index) in goodsList" >
                        <!-- continue.... -->
                        <div class="pic">
                            <a href="#"><img v-bind:src="'static/' + item.productImg" alt=""></a> 
                              <!-- 記得一定要用v-bind src否則可能來不及渲染顯示不出，所以一定要用v-bind -->
                            <!-- <p>{{index}}</p> -->
                        </div>
                        <div class="main">
                            <div class="name">{{item.productName}}</div>       <!-- 其實大括號也可以用v-text -->
                            <div class="price">{{item.productPrice}}</div>
                            <div class="btn-area">
                            <a href="javascript:;" class="btn btn--m">加入购物车</a>
                            </div>
                        </div>
                    </li>

                    



                    <!-- <li>
                    <div class="pic">
                        <a href="#"><img src="static/2.jpg" alt=""></a>
                    </div>
                    <div class="main">
                        <div class="name">XX</div>
                        <div class="price">1000</div>
                        <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div class="pic">
                        <a href="#"><img src="static/3.jpg" alt=""></a>
                    </div>
                    <div class="main">
                        <div class="name">XX</div>
                        <div class="price">500</div>
                        <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div class="pic">
                        <a href="#"><img src="static/4.jpg" alt=""></a>
                    </div>
                    <div class="main">
                        <div class="name">XX</div>
                        <div class="price">2499</div>
                        <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                        </div>
                    </div> 
                    </li>-->
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>

        <nav-footer></nav-footer>
    </div>
</template>

<script>

    // 導入css:
    import './../assets/css/base.css'
    import './../assets/css/product.css'
    import './../assets/css/login.css'

    // 不要import Header 會和HTML5重複   // @就是指到src目錄(在webpack.base.conf.js有)
    import NavHeader from '@/components/Header.vue'
    import NavFooter from '@/components/Footer.vue'
    import NavBread from '@/components/Bread.vue'
    import axios from 'axios'

    export default{
        data(){          //提醒  data是一個function  所以每次加載組件都是一個獨立的，因為明確
            return{
                goodsList: [],
                priceFilter: [
                    {
                        startPrice: 0,
                        endPrice: 100
                    },
                    {
                        startPrice: 100,
                        endPrice: 500
                    },
                    {
                        startPrice: 500,
                        endPrice: 1000
                    },
                    {
                        startPrice: 1000,
                        endPrice: 2000
                    }
                ]
            }
        },
        components:{
            NavHeader,  // 沒有用key valu 會自動生成key和value名稱相同
            NavFooter,
            NavBread
        },
        mounted: function(){
            this.getGoodsList();

        },
        methods:{
            getGoodsList(){
                console.log("XDDD");
                // axios.get("/goods").then(function(res){
                //     console.log(res.data);
                // });

                // 改用arrow function
                axios.get("/goods").then((result) => {
                    console.log(result.data);
                    var res = result.data;
                    this.goodsList = res.result;   //此的result是在mock所設的key
                });
            }
        }

    }

</script>


