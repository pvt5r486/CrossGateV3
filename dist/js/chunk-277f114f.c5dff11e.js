(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-277f114f"],{"1ca2":function(t,a,s){},4716:function(t,a,s){t.exports=s.p+"img/Mario.53ebcbef.png"},"4def":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container py-3"},[t._m(0),s("h2",{staticClass:"page_title mt-4 mb-0"},[t._v("關於 Switch")]),s("p",{staticClass:"p-3 px-md-5 text-justify"},[t._v("\n    任天堂Switch（日語：ニンテンドースイッチ，英語：Nintendo Switch）是日本任天堂公司出品的電子遊戲機，\n    於2017年3月3日在日本、北美、歐洲和香港發售，同年12月1日在韓國和台灣發售。\n    擁有可拆卸控制器和可分離式主機，遊戲載體使用了專用卡匣。\n    主機處理器使用了NVIDIA客制的Tegra X1系統晶片，這是任天堂首次採用NVIDIA的系統晶片。\n    開發期中的主機於2015年3月17日以「NX」代號首次公布，在2016年10月20日首次於網路影片上公開正式名稱任天堂Switch和其造型。\n  ")]),t._m(1),s("h1",{staticClass:"page_title my-4"},[t._v("買 Switch 的理由")]),t._m(2),s("h3",{staticClass:"page_title my-4"},[t._v("相關遊戲特惠中")]),s("prodSilder",{attrs:{"prod-category":"Switch"}}),s("h3",{staticClass:"page_title my-4"},[t._v("想看更多？")]),s("div",{staticClass:"d-flex justify-content-center py-3"},[s("router-link",{staticClass:"go_crossgate",attrs:{to:"/shopping"}},[t._v("前往 CrossGate "),s("i",{staticClass:"fas fa-caret-right ml-1"})])],1)],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-10"},[e("img",{staticClass:"img-fluid",attrs:{src:s("eab6"),alt:""}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-10"},[e("img",{staticClass:"img-fluid",attrs:{src:s("7b36"),alt:""}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-6"},[e("ul",{staticClass:"buy-switch-reason"},[e("li",[e("img",{staticClass:"img-fluid",attrs:{src:s("4716"),alt:"",width:"50"}}),e("span",[t._v("陪伴你童年的瑪莉歐大叔")])]),e("li",[e("img",{staticClass:"img-fluid",attrs:{src:s("e145"),alt:"",width:"50"}}),e("span",[t._v("全世界火紅的精靈寶可夢")])]),e("li",[e("img",{staticClass:"img-fluid",attrs:{src:s("9ddd"),alt:"",width:"50"}}),e("span",[t._v("耐玩性超高的「薩爾達」系列")])])])])])}],r=s("50e0"),n={components:{prodSilder:r["a"]}},c=n,o=s("2877"),l=Object(o["a"])(c,e,i,!1,null,null,null);l.options.__file="switch.vue";a["default"]=l.exports},"50e0":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"p-3"},[t.filterData.length>0?s("swiper",{staticClass:"prodSwiper",attrs:{options:t.swiperOption}},[t._l(t.filterData,function(a){return s("swiper-slide",{key:a.id},[s("prodCard",{attrs:{"card-data":a,status:t.status},on:{returnProdID:t.addtoCart}})],1)}),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},i=[],r=s("be94"),n=s("1157"),c=s.n(n),o=s("2f62"),l=s("7212"),d=s("8e39"),p={name:"prodSilder",components:{swiper:l["swiper"],swiperSlide:l["swiperSlide"],prodCard:d["a"]},props:{prodCategory:{type:String,default:""},searchResult:{type:Array,default:function(){return[]}},searchFilter:{type:String,default:""}},data:function(){return{swiperOption:{slidesPerView:4,slidesPerGroup:4,spaceBetween:10,speed:600,grabCursor:!0,autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{480:{slidesPerView:1,slidesPerGroup:1,spaceBetween:20},767:{slidesPerView:2,slidesPerGroup:2,spaceBetween:30},992:{slidesPerView:3,slidesPerGroup:3,spaceBetween:30}}},status:{loadingItem:""}}},methods:Object(r["a"])({addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=this;s.status.loadingItem=t;var e=document.querySelector(".prodSwiper");e.swiper.autoplay.stop(),this.$store.dispatch("cartModules/addtoCart",{id:t,qty:a}).then(function(){s.status.loadingItem="",e.swiper.autoplay.start()}).catch(function(){s.status.loadingItem="",e.swiper.autoplay.start()})}},Object(o["b"])("productsModules",["getProducts"])),created:function(){this.getProducts()},updated:function(){c()(".prodSwiper").on("mouseenter",function(){this.swiper.autoplay.stop()}),c()(".prodSwiper").on("mouseleave",function(){this.swiper.autoplay.start()})},computed:Object(r["a"])({filterData:function(){var t=this;return t.searchFilter||t.searchResult.length?t.searchResult:t.products.filter(function(a){return""===t.prodCategory?a:a.category===t.prodCategory})}},Object(o["c"])("productsModules",["products"])),watch:{prodCategory:function(){var t=document.querySelector(".prodSwiper");t.swiper.slideTo(0,600)}}},u=p,f=(s("5b92"),s("2877")),g=Object(f["a"])(u,e,i,!1,null,"3a0af14f",null);g.options.__file="prodsilder.vue";a["a"]=g.exports},"5b92":function(t,a,s){"use strict";var e=s("1ca2"),i=s.n(e);i.a},"7b36":function(t,a,s){t.exports=s.p+"img/switch-3.4cd6df31.jpg"},"8e39":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"prod_card"},[s("a",{staticClass:"prod_img",style:"background-image: url('"+t.cardData.imageUrl+"')",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.prodInfo(a)}}},[s("span",{staticClass:"categoryTag",class:t._f("category")(t.cardData.category)},[t._v(t._s(t.cardData.category))])]),s("div",{staticClass:"prod_info"},[s("h3",[t._v(t._s(t.cardData.title))]),s("p",[t._v(t._s(t.cardData.description))])]),s("div",{staticClass:"prod_price"},[s("span",[t._v("原價 "+t._s(t._f("currency")(t.cardData.origin_price)))]),s("h4",[t._v("售價 "+t._s(t._f("currency")(t.cardData.price)))])]),s("div",{staticClass:"prod_card_footer"},[s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col-6"},[s("button",{staticClass:"btn btn-block",attrs:{disabled:""!=t.status.loadingItem},on:{click:function(a){return a.preventDefault(),t.prodInfo(a)}}},[t.status.loadingItem===t.cardData.id?s("i",{staticClass:"fas fa-spinner fa-spin mr-1"}):s("i",{staticClass:"fas fa-search mr-1"}),t._v("詳細介紹\n        ")])]),s("div",{staticClass:"col-6"},[s("button",{staticClass:"btn btn-block",attrs:{disabled:""!=t.status.loadingItem},on:{click:function(a){return a.preventDefault(),t.returnProdID(a)}}},[t.status.loadingItem===t.cardData.id?s("i",{staticClass:"fas fa-spinner fa-spin mr-1"}):s("i",{staticClass:"fas fa-cart-plus mr-1"}),t._v("加到購物車\n        ")])])])])])},i=[],r=(s("cadf"),s("551c"),s("097d"),{name:"prodcard",props:{cardData:{type:Object,default:function(){return{}}},status:{type:Object,default:function(){return{}}}},methods:{returnProdID:function(){var t=this;t.$emit("returnProdID",t.cardData.id)},prodInfo:function(){var t=this;t.$router.push("/productDetail/".concat(t.cardData.id))}}}),n=r,c=s("2877"),o=Object(c["a"])(n,e,i,!1,null,null,null);o.options.__file="prodcard.vue";a["a"]=o.exports},"9ddd":function(t,a,s){t.exports=s.p+"img/link.415a562a.png"},e145:function(t,a,s){t.exports=s.p+"img/eve.a7e8f9d1.png"},eab6:function(t,a,s){t.exports=s.p+"img/switch-2.ff4d0181.jpg"}}]);
//# sourceMappingURL=chunk-277f114f.c5dff11e.js.map