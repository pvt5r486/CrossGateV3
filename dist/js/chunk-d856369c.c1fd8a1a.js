(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d856369c"],{"6e78":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("navbarFront"),e("router-view"),e("footerSection")],1)},i=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sticky-top  shadow-sm"},[e("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-white"},[e("div",{staticClass:"container"},[t._m(0),e("router-link",{staticClass:"navbar-brand",attrs:{to:"/index"},nativeOn:{click:function(a){return t.closeNavbar(a)}}},[e("h2",[t._v("CrossGate寶貝商店")])]),e("div",{staticClass:"shopcart-icon d-flex align-items-center order-md-1",class:{active:t.showSubMenu},on:{click:function(a){a.preventDefault(),t.showSubMenu=!t.showSubMenu}}},[e("i",{staticClass:"material-icons"},[t._v("shopping_cart")]),t.cart.carts&&0!=t.cart.carts.length?e("span",{staticClass:"badge badge-pill  badge-danger shopcart-icon-counter"},[t._v("\n          "+t._s(t.cart.carts.length)+"\n        ")]):t._e(),e("ul",{staticClass:"subMenu"},[e("li",[e("router-link",{attrs:{to:"/myshoppingCart"}},[t._v("我的購物車")])],1),e("li",[e("router-link",{attrs:{to:"/myOrders"}},[t._v("我的訂單")])],1)])]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav menu mt-2"},[e("router-link",{staticClass:"nav-item",attrs:{to:"/index",tag:"li","active-class":"active"},nativeOn:{click:function(a){return t.closeNavbar(a)}}},[e("a",{staticClass:"nav-link py-2 py-md-0 w-100",attrs:{href:"#"}},[t._v("首頁")])]),e("router-link",{staticClass:"nav-item",attrs:{to:"/gamehost",tag:"li","active-class":"active"},nativeOn:{click:function(a){return t.closeNavbar(a)}}},[e("a",{staticClass:"nav-link py-2 py-md-0 w-100",attrs:{href:"#"}},[t._v("主機介紹")])]),e("router-link",{staticClass:"nav-item",attrs:{to:"/shopping",tag:"li","active-class":"active"},nativeOn:{click:function(a){return t.closeNavbar(a)}}},[e("a",{staticClass:"nav-link py-2 py-md-0 w-100",attrs:{href:"#"}},[t._v("CrossGate")])])],1)])],1)])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler py-0",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("i",{staticClass:"material-icons d-flex align-items-center"},[t._v("menu")])])}],c=e("be94"),l=e("1157"),o=e.n(l),u=e("2f62"),m={name:"navbarFront",data:function(){return{showSubMenu:!1}},methods:Object(c["a"])({closeNavbar:function(){o()(".collapse").collapse("hide")}},Object(u["b"])("cartModules",["getCart"])),computed:Object(c["a"])({},Object(u["c"])("cartModules",["cart"])),created:function(){this.getCart()}},v=m,d=e("2877"),f=Object(d["a"])(v,n,r,!1,null,null,null);f.options.__file="navbarFront.vue";var p=f.exports,b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"bg-main"},[e("div",{staticClass:"container py-3"},[e("div",{staticClass:"row justify-content-center"},[t._m(0),e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"subcribe-form h-100"},[t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempEmail,expression:"tempEmail"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-input w-100 h-100 text-main",class:{"bg-warning":t.errors.has("email")},attrs:{type:"email",name:"email",id:"useremail",placeholder:"ex@gmail.com"},domProps:{value:t.tempEmail},on:{input:function(a){a.target.composing||(t.tempEmail=a.target.value)}}}),e("button",{staticClass:"btn btn-becare d-flex align-items-center",on:{click:function(a){return a.preventDefault(),t.subscription(a)}}},[e("i",{staticClass:"fas fa-arrow-right"})])])])])])]),e("div",{staticClass:"bg-second"},[e("div",{staticClass:"container py-3"},[e("div",{staticClass:"row justify-content-center flex-column-reverse flex-md-row"},[e("div",{staticClass:"col-md-6  d-flex align-items-md-end"},[t._m(2),e("div",[e("ul",{staticClass:"socialLink"},[t._m(3),e("li",[e("router-link",{attrs:{to:"/login"}},[e("i",{staticClass:"fas fa-chart-pie"})])],1)]),t._m(4)])]),t._m(5)])])])])},g=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-5 d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0"},[s("img",{attrs:{src:e("e789"),width:"30",alt:""}}),s("span",{staticClass:"subcribe-slogan"},[t._v("訂閱CrossGate")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"subcribe-form-icon",attrs:{for:"subscription"}},[e("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d-none d-md-block"},[s("img",{staticClass:"img-fluid",attrs:{src:e("ac1a"),alt:"",width:"150"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"https://github.com/pvt5r486/CrossGate"}},[e("i",{staticClass:"fab fa-github"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"authorInfo  shadow-sm"},[e("li",[t._v("僅個人練習使用．不做商業用途")]),e("li",[t._v("圖片版權屬於任天堂、SONY、大宇資訊所有")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-6 text-md-right d-flex flex-column justify-content-between"},[s("div",[s("img",{attrs:{src:e("b804"),alt:"",height:"60"}})]),s("ul",{staticClass:"companyInfo"},[s("li",[t._v("07-1234-5678")]),s("li",[s("a",{attrs:{href:"mailto:service@crossgate.com"}},[t._v("service@crossgate.com")])]),s("li",[t._v("520 高雄市魔力區寶貝路173號")])])])}],h={name:"footerSection",data:function(){return{tempEmail:""}},methods:{subscription:function(){var t=this;this.$validator.validate().then(function(a){a?(t.$store.dispatch("alertModules/updateMessage",{message:"感謝 ".concat(t.tempEmail," 的訂閱 :D"),status:"success"},{root:!0}),t.tempEmail=""):(t.$store.dispatch("alertModules/updateMessage",{message:"噢！Email欄位怪怪的哦"},{root:!0}),o()("#useremail").focus())})}}},_=h,C=Object(d["a"])(_,b,g,!1,null,null,null);C.options.__file="footer.vue";var w=C.exports,x={components:{navbarFront:p,footerSection:w}},k=x,y=Object(d["a"])(k,s,i,!1,null,null,null);y.options.__file="index.vue";a["default"]=y.exports},ac1a:function(t,a,e){t.exports=e.p+"img/yeedai.46f331c7.gif"},b804:function(t,a,e){t.exports=e.p+"img/crossgate-logo.9a00f280.png"},e789:function(t,a,e){t.exports=e.p+"img/firemouse.a88feda3.png"}}]);
//# sourceMappingURL=chunk-d856369c.c1fd8a1a.js.map