(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-582ae91b"],{"50e0":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"p-3"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[s("img",{attrs:{src:e("f8b2"),alt:"",width:"200"}})]),t.filterData.length>0?s("swiper",{staticClass:"prodSwiper",attrs:{options:t.swiperOption}},[t._l(t.filterData,function(a){return s("swiper-slide",{key:a.id},[s("prodCard",{attrs:{"card-data":a,status:t.status},on:{returnProdID:t.addtoCart}})],1)}),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},i=[],r=(e("cadf"),e("551c"),e("097d"),e("1157")),n=e.n(r),o=e("7212"),c=e("8e39"),l={name:"prodSilder",components:{swiper:o["swiper"],swiperSlide:o["swiperSlide"],prodCard:c["a"]},props:{prodCategory:{type:String,default:""},searchResult:{type:Array,default:function(){return[]}},searchFilter:{type:String,default:""}},data:function(){return{swiperOption:{slidesPerView:4,slidesPerGroup:4,spaceBetween:10,speed:600,grabCursor:!0,autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{480:{slidesPerView:1,slidesPerGroup:1,spaceBetween:20},767:{slidesPerView:2,slidesPerGroup:2,spaceBetween:30},992:{slidesPerView:3,slidesPerGroup:3,spaceBetween:30}}},products:[],status:{loadingItem:"",loadingIcon:!1},isLoading:!1}},methods:{getProducts:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/products/all"),a=this;a.isLoading=!0,this.$http.get(t).then(function(t){t.data.success&&(a.products=t.data.products,a.isLoading=!1)})},addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/cart"),s=this;s.status.loadingItem=t;var i=document.querySelector(".prodSwiper");i.swiper.autoplay.stop();var r={product_id:t,qty:a};this.$http.post(e,{data:r}).then(function(t){t.data.success&&(s.$bus.$emit("shopCart:update"),s.status.loadingItem="",i.swiper.autoplay.start(),s.$bus.$emit("message:push","【".concat(t.data.data.product.title,"】\n          ").concat(t.data.data.qty," ").concat(t.data.data.product.unit," \n          ").concat(t.data.message),"success"))})}},created:function(){var t=this;t.getProducts()},updated:function(){n()(".prodSwiper").on("mouseenter",function(){this.swiper.autoplay.stop()}),n()(".prodSwiper").on("mouseleave",function(){this.swiper.autoplay.start()})},computed:{filterData:function(){var t=this;return t.searchFilter||t.searchResult.length?t.searchResult:t.products.filter(function(a){return""===t.prodCategory?a:a.category===t.prodCategory})}},watch:{prodCategory:function(){var t=document.querySelector(".prodSwiper");t.swiper.slideTo(0,600)}}},d=l,p=(e("6ef5"),e("2877")),u=Object(p["a"])(d,s,i,!1,null,"543482ed",null);u.options.__file="prodsilder.vue";a["a"]=u.exports},"55c7":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container mb-3"},[e("swiper",{staticClass:"topSwiper",attrs:{options:t.swiperOption}},[t._l(t.sliderImg,function(t,a){return e("swiper-slide",{key:a},[e("div",{staticClass:"slide",style:"background-image: url('"+t.imgPath+"');",attrs:{title:""+t.info}})])}),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},i=[],r=e("1157"),n=e.n(r),o=e("7212"),c={name:"topSilder",data:function(){return{swiperOption:{loop:!0,spaceBetween:30,centeredSlides:!0,grabCursor:!0,autoplay:{delay:1e4,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}},sliderImg:[{imgPath:"silderImg/Call-of-Duty-Black-Ops-3-Logo.jpg",info:"決勝時刻：黑色行動III Call of Duty Black Ops III"},{imgPath:"silderImg/mariorabbids-kingdom-battle.jpg",info:"瑪利歐+瘋狂兔子 王國之戰 - Mario Rabbids KINDOM BATTLE"},{imgPath:"silderImg/Dragon-Quest-VII-3DS.jpg",info:"勇者鬥惡龍VII 伊甸的戰士們 - Dragon Quest VII"}]}},components:{swiper:o["swiper"],swiperSlide:o["swiperSlide"]},mounted:function(){n()(".topSwiper").on("mouseenter",function(){this.swiper.autoplay.stop()}),n()(".topSwiper").on("mouseleave",function(){this.swiper.autoplay.start()})}},l=c,d=(e("b2b2"),e("2877")),p=Object(d["a"])(l,s,i,!1,null,"dde9801e",null);p.options.__file="topsilder.vue";a["a"]=p.exports},"6ef5":function(t,a,e){"use strict";var s=e("74de"),i=e.n(s);i.a},"74de":function(t,a,e){},"754b":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("topSilder"),t._m(0),e("div",{staticClass:"container py-3"},[e("h1",{staticClass:"page_title"},[t._v("關於CrossGate")]),t._m(1),e("h2",{staticClass:"page_title"},[t._v("本期熱銷商品")]),e("prodSilder")],1)],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container py-3"},[e("ul",{staticClass:"daily_message"},[e("li",[t._v("2018.12.24")]),e("li",[e("span",{staticClass:"tag tag-danger"},[t._v("今日限定")])]),e("li",[t._v("「coupon50」這…難道是什麼的密碼嗎？")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"text-justify p-3 px-md-5"},[t._v("\n      這是一個練習 Vue 的作品，至於為什麼要叫做 CrossGate 呢？答案是因為作者很喜歡魔力寶貝，本來是想做個這一系列的主題商城，但註冊完 API 才發現，\n      尷尬了...可以用的素材圖怎麼這麼少！後來弄著弄著就變成販售 Switch、PS4、3DS 的商城了，希望各位喜歡。\n      "),e("em",{staticClass:"blockquote-footer"},[t._v("不過還是私心的置入一些魔力寶貝的圖片(笑)")])])}],r=e("55c7"),n=e("50e0"),o={components:{topSilder:r["a"],prodSilder:n["a"]}},c=o,l=e("2877"),d=Object(l["a"])(c,s,i,!1,null,null,null);d.options.__file="about.vue";a["default"]=d.exports},"8e39":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"prod_card"},[e("a",{staticClass:"prod_img",style:"background-image: url('"+t.cardData.imageUrl+"')",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.prodInfo(a)}}},[e("span",{staticClass:"categoryTag",class:t._f("category")(t.cardData.category)},[t._v(t._s(t.cardData.category))])]),e("div",{staticClass:"prod_info"},[e("h3",[t._v(t._s(t.cardData.title))]),e("p",[t._v(t._s(t.cardData.description))])]),e("div",{staticClass:"prod_price"},[e("span",[t._v("原價 "+t._s(t._f("currency")(t.cardData.origin_price)))]),e("h4",[t._v("售價 "+t._s(t._f("currency")(t.cardData.price)))])]),e("div",{staticClass:"prod_card_footer"},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-6"},[e("button",{staticClass:"btn btn-block",attrs:{disabled:""!=t.status.loadingItem},on:{click:function(a){return a.preventDefault(),t.prodInfo(a)}}},[t.status.loadingItem===t.cardData.id?e("i",{staticClass:"fas fa-spinner fa-spin mr-1"}):e("i",{staticClass:"fas fa-search mr-1"}),t._v("詳細介紹\n        ")])]),e("div",{staticClass:"col-6"},[e("button",{staticClass:"btn btn-block",attrs:{disabled:""!=t.status.loadingItem},on:{click:function(a){return a.preventDefault(),t.returnProdID(a)}}},[t.status.loadingItem===t.cardData.id?e("i",{staticClass:"fas fa-spinner fa-spin mr-1"}):e("i",{staticClass:"fas fa-cart-plus mr-1"}),t._v("加到購物車\n        ")])])])])])},i=[],r=(e("cadf"),e("551c"),e("097d"),{name:"prodcard",props:{cardData:{type:Object,default:function(){return{}}},status:{type:Object,default:function(){return{}}}},methods:{returnProdID:function(){var t=this;t.$emit("returnProdID",t.cardData.id)},prodInfo:function(){var t=this;t.$router.push("/productDetail/".concat(t.cardData.id))}}}),n=r,o=e("2877"),c=Object(o["a"])(n,s,i,!1,null,null,null);c.options.__file="prodcard.vue";a["a"]=c.exports},b2b2:function(t,a,e){"use strict";var s=e("f493"),i=e.n(s);i.a},f493:function(t,a,e){},f8b2:function(t,a,e){t.exports=e.p+"img/loading.0f6ddb71.gif"}}]);
//# sourceMappingURL=chunk-582ae91b.c49d6a1d.js.map