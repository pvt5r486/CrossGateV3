(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b852da70"],{"122c":function(t,a,e){t.exports=e.p+"img/Nintendo_Switch_icon.f89394dd.png"},"1ca2":function(t,a,e){},4917:function(t,a,e){"use strict";var r=e("cb7c"),i=e("9def"),s=e("0390"),A=e("5f1b");e("214f")("match",1,function(t,a,e,n){return[function(e){var r=t(this),i=void 0==e?void 0:e[a];return void 0!==i?i.call(e,r):new RegExp(e)[a](String(r))},function(t){var a=n(e,t,this);if(a.done)return a.value;var o=r(t),c=String(this);if(!o.global)return A(o,c);var l=o.unicode;o.lastIndex=0;var d,p=[],u=0;while(null!==(d=A(o,c))){var g=String(d[0]);p[u]=g,""===g&&(o.lastIndex=s(c,i(o.lastIndex),l)),u++}return 0===u?null:p}]})},"50e0":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-3"},[t.filterData.length>0?e("swiper",{staticClass:"prodSwiper",attrs:{options:t.swiperOption}},[t._l(t.filterData,function(a){return e("swiper-slide",{key:a.id},[e("prodCard",{attrs:{"card-data":a,status:t.status},on:{returnProdID:t.addtoCart}})],1)}),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},i=[],s=e("be94"),A=e("1157"),n=e.n(A),o=e("2f62"),c=e("7212"),l=e("8e39"),d={name:"prodSilder",components:{swiper:c["swiper"],swiperSlide:c["swiperSlide"],prodCard:l["a"]},props:{prodCategory:{type:String,default:""},searchResult:{type:Array,default:function(){return[]}},searchFilter:{type:String,default:""}},data:function(){return{swiperOption:{slidesPerView:4,slidesPerGroup:4,spaceBetween:10,speed:600,grabCursor:!0,autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{480:{slidesPerView:1,slidesPerGroup:1,spaceBetween:20},767:{slidesPerView:2,slidesPerGroup:2,spaceBetween:30},992:{slidesPerView:3,slidesPerGroup:3,spaceBetween:30}}},status:{loadingItem:""}}},methods:Object(s["a"])({addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=this;e.status.loadingItem=t;var r=document.querySelector(".prodSwiper");r.swiper.autoplay.stop(),this.$store.dispatch("cartModules/addtoCart",{id:t,qty:a}).then(function(){e.status.loadingItem="",r.swiper.autoplay.start()}).catch(function(){e.status.loadingItem="",r.swiper.autoplay.start()})}},Object(o["b"])("productsModules",["getProducts"])),created:function(){this.getProducts()},updated:function(){n()(".prodSwiper").on("mouseenter",function(){this.swiper.autoplay.stop()}),n()(".prodSwiper").on("mouseleave",function(){this.swiper.autoplay.start()})},computed:Object(s["a"])({filterData:function(){var t=this;return t.searchFilter||t.searchResult.length?t.searchResult:t.products.filter(function(a){return""===t.prodCategory?a:a.category===t.prodCategory})}},Object(o["c"])("productsModules",["products"])),watch:{prodCategory:function(){var t=document.querySelector(".prodSwiper");t.swiper.slideTo(0,600)}}},p=d,u=(e("5b92"),e("2877")),g=Object(u["a"])(p,r,i,!1,null,"3a0af14f",null);g.options.__file="prodsilder.vue";a["a"]=g.exports},"55c7":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container mb-3"},[e("swiper",{staticClass:"topSwiper",attrs:{options:t.swiperOption}},[t._l(t.sliderImg,function(t,a){return e("swiper-slide",{key:a},[e("div",{staticClass:"slide",style:"background-image: url('"+t.imgPath+"');",attrs:{title:""+t.info}})])}),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},i=[],s=e("1157"),A=e.n(s),n=e("7212"),o={name:"topSilder",data:function(){return{swiperOption:{loop:!0,spaceBetween:30,centeredSlides:!0,grabCursor:!0,autoplay:{delay:1e4,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}},sliderImg:[{imgPath:"silderImg/Call-of-Duty-Black-Ops-3-Logo.jpg",info:"決勝時刻：黑色行動III Call of Duty Black Ops III"},{imgPath:"silderImg/mariorabbids-kingdom-battle.jpg",info:"瑪利歐+瘋狂兔子 王國之戰 - Mario Rabbids KINDOM BATTLE"},{imgPath:"silderImg/Dragon-Quest-VII-3DS.jpg",info:"勇者鬥惡龍VII 伊甸的戰士們 - Dragon Quest VII"}]}},components:{swiper:n["swiper"],swiperSlide:n["swiperSlide"]},mounted:function(){A()(".topSwiper").on("mouseenter",function(){this.swiper.autoplay.stop()}),A()(".topSwiper").on("mouseleave",function(){this.swiper.autoplay.start()})}},c=o,l=(e("b2b2"),e("2877")),d=Object(l["a"])(c,r,i,!1,null,"dde9801e",null);d.options.__file="topsilder.vue";a["a"]=d.exports},"5b92":function(t,a,e){"use strict";var r=e("1ca2"),i=e.n(r);i.a},"80eb":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("topSilder"),t._m(0),r("div",{staticClass:"container py-3"},[r("h1",{staticClass:"page_title mb-3"},[t._v("購物專區")]),r("div",{staticClass:"row justify-content-end"},[r("div",{staticClass:"col-md-8 col-lg-4"},[r("div",{staticClass:"input-group mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchFilter,expression:"searchFilter",modifiers:{trim:!0}}],staticClass:"form-control border border-main text-main",attrs:{type:"text",placeholder:"Search something..."},domProps:{value:t.searchFilter},on:{input:[function(a){a.target.composing||(t.searchFilter=a.target.value.trim())},t.searchProducts],blur:function(a){t.$forceUpdate()}}}),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-becare text-main border border-main border-left-0",attrs:{type:"button"},on:{click:t.searchProducts}},[r("i",{staticClass:"fas fa-search"})])])])])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4 col-lg-2"},[r("ul",{staticClass:"category_Menu"},[r("li",[r("a",{class:{active:"Switch"===t.prodCategory},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.changeTab("Switch")}}},[r("img",{staticClass:"img-fluid",attrs:{src:e("122c"),alt:"",width:"50"}}),r("span",[t._v("Switch 遊戲")])])]),r("li",[r("a",{class:{active:"PS4"===t.prodCategory},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.changeTab("PS4")}}},[r("img",{staticClass:"img-fluid",attrs:{src:e("e51e"),alt:"",width:"50"}}),r("span",[t._v("PS4 遊戲")])])]),r("li",[r("a",{class:{active:"3DS"===t.prodCategory},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.changeTab("3DS")}}},[r("img",{staticClass:"img-fluid",attrs:{src:e("9846"),alt:"",width:"50"}}),r("span",[t._v("N3DS 遊戲")])])])])]),r("div",{staticClass:"col-md-8 col-lg-10 d-none d-sm-block"},[(t.searchFilter||t.searchResult.length)&&0==t.searchResult.length?r("div",{staticClass:"alert alert-warning h-100 d-flex justify-content-center align-items-center"},[t._v("\n          Sorry,依您的關鍵字「"+t._s(t.searchFilter)+"」搜尋不到產品呢...\n        ")]):[r("div",{staticClass:"row"},t._l(t.filterPager,function(a){return r("div",{key:a.id,staticClass:"col-sm-6 col-md-6 col-lg-4 mb-3"},[r("prodCard",{attrs:{"card-data":a,status:t.status},on:{returnProdID:t.addtoCart}})],1)}),0),t.pagination.total_pages?r("pagination",{staticClass:"d-flex justify-content-center",attrs:{"page-data":t.pagination},on:{changepage:t.getPage}}):t._e()]],2),r("div",{staticClass:"col d-sm-none"},[(t.searchFilter||t.searchResult.length)&&0==t.searchResult.length?r("div",{staticClass:"alert alert-warning"},[t._v("\n          Sorry,依您的關鍵字「"+t._s(t.searchFilter)+"」搜尋不到產品呢...\n        ")]):r("prodSilder",{attrs:{"prod-category":t.prodCategory,"search-result":t.searchResult,"search-filter":t.searchFilter}})],1)])])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container py-3",attrs:{id:"position"}},[e("ul",{staticClass:"daily_message"},[e("li",[t._v("2018.12.24")]),e("li",[e("span",{staticClass:"tag tag-danger"},[t._v("今日限定")])]),e("li",[t._v("「coupon50」這…難道是什麼的密碼嗎？")])])])}],s=(e("4917"),e("be94")),A=e("1157"),n=e.n(A),o=e("2f62"),c=e("55c7"),l=e("8e39"),d=e("50e0"),p={components:{topSilder:c["a"],prodCard:l["a"],prodSilder:d["a"]},data:function(){return{pagination:{page_Size:6,total_pages:1,current_page:1,has_pre:!1,has_next:!1},status:{loadingItem:""},prodCategory:"",searchFilter:"",searchResult:[]}},methods:Object(s["a"])({addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=this;e.status.loadingItem=t;var r=document.querySelector(".prodSwiper");r.swiper.autoplay.stop(),this.$store.dispatch("cartModules/addtoCart",{id:t,qty:a}).then(function(){e.status.loadingItem="",r.swiper.autoplay.start()}).catch(function(){e.status.loadingItem="",r.swiper.autoplay.start()})},getPage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this;n()("html, body").scrollTop(n()("#position").offset().top),a.pagination.current_page=t},searchProducts:function(){var t=this;t.pagination.current_page=1,t.prodCategory="",t.searchFilter?t.searchResult=t.products.filter(function(a){return a.title.match(t.searchFilter)}):t.searchResult=[]},changeTab:function(t){var a=this;a.prodCategory=t,a.pagination.current_page=1,a.searchFilter="",a.searchResult=[]}},Object(o["b"])("productsModules",["getProducts"])),created:function(){this.getProducts()},computed:Object(s["a"])({filterData:function(){var t=this;return t.searchFilter||t.searchResult.length?t.searchResult:t.products.filter(function(a){return""===t.prodCategory?a:a.category===t.prodCategory})},filterPager:function(){var t=this,a=t.filterData.length,e=t.pagination.page_Size;t.pagination.total_pages=Math.ceil(a/e);var r=t.pagination.current_page;return t.pagination.has_pre=r>1,r<t.pagination.total_pages&&(t.pagination.has_next=!0),r+1>t.pagination.total_pages&&(t.pagination.has_next=!1),t.filterData.filter(function(t,a){return a<r*e&&a>=(r-1)*e})}},Object(o["c"])("productsModules",["products"]))},u=p,g=e("2877"),f=Object(g["a"])(u,r,i,!1,null,null,null);f.options.__file="crossgate.vue";a["default"]=f.exports},"8e39":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"prod_card"},[e("a",{staticClass:"prod_img",style:"background-image: url('"+t.cardData.imageUrl+"')",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.prodInfo(a)}}},[e("span",{staticClass:"categoryTag",class:t._f("category")(t.cardData.category)},[t._v(t._s(t.cardData.category))])]),e("div",{staticClass:"prod_info"},[e("h3",[t._v(t._s(t.cardData.title))]),e("p",[t._v(t._s(t.cardData.description))])]),e("div",{staticClass:"prod_price"},[e("span",[t._v("原價 "+t._s(t._f("currency")(t.cardData.origin_price)))]),e("h4",[t._v("售價 "+t._s(t._f("currency")(t.cardData.price)))])]),e("div",{staticClass:"prod_card_footer"},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-6"},[e("button",{staticClass:"btn btn-block",attrs:{disabled:""!=t.status.loadingItem},on:{click:function(a){return a.preventDefault(),t.prodInfo(a)}}},[t.status.loadingItem===t.cardData.id?e("i",{staticClass:"fas fa-spinner fa-spin mr-1"}):e("i",{staticClass:"fas fa-search mr-1"}),t._v("詳細介紹\n        ")])]),e("div",{staticClass:"col-6"},[e("button",{staticClass:"btn btn-block",attrs:{disabled:""!=t.status.loadingItem},on:{click:function(a){return a.preventDefault(),t.returnProdID(a)}}},[t.status.loadingItem===t.cardData.id?e("i",{staticClass:"fas fa-spinner fa-spin mr-1"}):e("i",{staticClass:"fas fa-cart-plus mr-1"}),t._v("加到購物車\n        ")])])])])])},i=[],s=(e("cadf"),e("551c"),e("097d"),{name:"prodcard",props:{cardData:{type:Object,default:function(){return{}}},status:{type:Object,default:function(){return{}}}},methods:{returnProdID:function(){var t=this;t.$emit("returnProdID",t.cardData.id)},prodInfo:function(){var t=this;t.$router.push("/productDetail/".concat(t.cardData.id))}}}),A=s,n=e("2877"),o=Object(n["a"])(A,r,i,!1,null,null,null);o.options.__file="prodcard.vue";a["a"]=o.exports},9846:function(t,a,e){t.exports=e.p+"img/n3ds_icon.f2f9ef99.png"},b2b2:function(t,a,e){"use strict";var r=e("f493"),i=e.n(r);i.a},e51e:function(t,a){t.exports="data:image/png;base64,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"},f493:function(t,a,e){}}]);
//# sourceMappingURL=chunk-b852da70.9b0c1c9a.js.map