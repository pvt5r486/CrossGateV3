(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01da3a60"],{"25bb":function(a,t,s){"use strict";s.r(t);var n=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("navbarBack"),s("alertMessage"),s("div",{staticClass:"container-fluid back-background"},[s("div",{staticClass:"row"},[s("main",{staticClass:"col-md-9 col-lg-10 px-4 mx-auto fixheight",attrs:{role:"main"}},[s("router-view")],1)])])],1)},i=[],e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"sticky-top"},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-main"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/admin/products"},nativeOn:{click:function(t){return a.closeNavbar(t)}}},[n("img",{staticClass:"img-fluid",attrs:{src:s("b804"),alt:"回首頁",width:"120"}})]),a._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products",activeClass:"active"},nativeOn:{click:function(t){return a.closeNavbar(t)}}},[n("i",{staticClass:"fas fa-box-open mr-1"}),a._v("產品列表\n          ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/admin/orders",activeClass:"active"},nativeOn:{click:function(t){return a.closeNavbar(t)}}},[n("i",{staticClass:"fas fa-clipboard-list mr-1"}),a._v("訂單列表\n          ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/admin/coupon",activeClass:"active"},nativeOn:{click:function(t){return a.closeNavbar(t)}}},[n("i",{staticClass:"fas fa-ticket-alt mr-1"}),a._v("優惠券\n          ")])],1)]),n("a",{staticClass:"nav-link pl-0 pl-md-3 text-dontcare",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),a.signout(t)}}},[n("i",{staticClass:"fas fa-sign-out-alt mr-1"}),a._v("登出\n      ")])])],1)])},r=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],l=s("1157"),c=s.n(l),o={name:"navbarBack",methods:{signout:function(){var a="".concat(Object({NODE_ENV:"production",VUE_APP_APIPATH:"https://vue-course-api.hexschool.io",VUE_APP_CUSTOMPATH:"crossgate",BASE_URL:"/CrossGateV3/dist/"}).APIPATH,"/logout"),t=this;this.$http.post(a).then(function(a){a.data.success&&t.$router.push("/login")})},closeNavbar:function(){c()(".collapse").collapse("hide")}}},u=o,v=s("2877"),p=Object(v["a"])(u,e,r,!1,null,null,null);p.options.__file="navbarBack.vue";var d=p.exports,b=s("56a6"),f={components:{navbarBack:d,alertMessage:b["a"]}},C=f,g=Object(v["a"])(C,n,i,!1,null,null,null);g.options.__file="dashboard.vue";t["default"]=g.exports},b804:function(a,t,s){a.exports=s.p+"img/crossgate-logo.9a00f280.png"}}]);
//# sourceMappingURL=chunk-01da3a60.e09f369b.js.map