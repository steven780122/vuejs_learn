<template>
    <div>
        <!-- 使用時:  不能用大寫NavHeader   因為w3規定只能小寫和'-'' -->
        <!-- 必須使用nav-header -->   
        <nav-header></nav-header>


        <body>
       
        <div class="nav-breadcrumb-wrap">
        <div class="container">
            <nav class="nav-breadcrumb">
            <a href="/">Home</a>
            <span>Goods</span>
            </nav>
        </div>
        </div>
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
                <dd>
                    <a href="javascript:void(0)">0 - 100</a>
                </dd>
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
                    <li>
                    <div class="pic">
                        <a href="#"><img src="static/1.jpg" alt=""></a>
                    </div>
                    <div class="main">
                        <div class="name">XX</div>
                        <div class="price">999</div>
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
        <footer class="footer">
        <div class="footer__wrap">
            <div class="footer__secondary">
            <div class="footer__inner">
                <div class="footer__region">
                <span>Region</span>
                <select class="footer__region__select">
                    <option value="en-US">USA</option>
                    <option value="zh-CN">China</option>
                    <option value="in">India</option>
                </select>
                </div>
                <div class="footer__secondary__nav">
                <span>Copyright © 2017 IMooc All Rights Reserved.</span>
                <a href="http://us.lemall.com/us/aboutUs.html">
                    About Us
                </a>
                <a href="http://us.lemall.com/us/termsofUse.html">
                    Terms &amp; Conditions
                </a>
                <a href="http://us.lemall.com/us/privacyPolicy.html">
                    Privacy Policy
                </a>
                </div>
            </div>
            </div>
        </div>
        </footer>
        </body>

    </div>
</template>

<script>

    // 導入css:
    import './../assets/css/base.css'
    import './../assets/css/product.css'
    import './../assets/css/login.css'

    // 不要import Header 會和HTML5重複   // 
    import NavHeader from '@/components/Header.vue'

    export default{
        data(){
            return{
                msg: 'hello vue'
            }
        },
        components:{
            NavHeader  // 沒有用key valu 會自動生成key和value名稱相同
        }

    }

</script>


