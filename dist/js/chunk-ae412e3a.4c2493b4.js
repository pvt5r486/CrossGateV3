(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae412e3a"],{"25bb":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("navbarBack"),s("alertMessage"),s("div",{staticClass:"container-fluid back-background"},[s("div",{staticClass:"row"},[s("main",{staticClass:"col-md-9 col-lg-10 px-4 mx-auto fixheight",attrs:{role:"main"}},[s("router-view")],1)])])],1)},i=[],n=(s("cadf"),s("551c"),s("097d"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sticky-top"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-main"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/admin/products"},nativeOn:{click:function(a){return t.closeNavbar(a)}}},[e("img",{staticClass:"img-fluid",attrs:{src:s("b804"),alt:"回首頁",width:"120"}})]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products",activeClass:"active"},nativeOn:{click:function(a){return t.closeNavbar(a)}}},[e("i",{staticClass:"fas fa-box-open mr-1"}),t._v("產品列表\n          ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/admin/orders",activeClass:"active"},nativeOn:{click:function(a){return t.closeNavbar(a)}}},[e("i",{staticClass:"fas fa-clipboard-list mr-1"}),t._v("訂單列表\n          ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/admin/coupon",activeClass:"active"},nativeOn:{click:function(a){return t.closeNavbar(a)}}},[e("i",{staticClass:"fas fa-ticket-alt mr-1"}),t._v("優惠券\n          ")])],1)]),e("a",{staticClass:"nav-link pl-0 pl-md-3 text-dontcare",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.signout(a)}}},[e("i",{staticClass:"fas fa-sign-out-alt mr-1"}),t._v("登出\n      ")])])],1)])}),r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],l=s("1157"),o=s.n(l),c={name:"navbarBack",methods:{signout:function(){var t="".concat(Object({NODE_ENV:"production",VUE_APP_APIPATH:"https://vue-course-api.hexschool.io",VUE_APP_CUSTOMPATH:"crossgate",BASE_URL:"/CrossGateV3/dist/"}).APIPATH,"/logout"),a=this;this.$http.post(t).then(function(t){t.data.success&&a.$router.push("/login")})},closeNavbar:function(){o()(".collapse").collapse("hide")}}},u=c,v=s("2877"),m=Object(v["a"])(u,n,r,!1,null,null,null);m.options.__file="navbarBack.vue";var d=m.exports,g=s("56a6"),f={components:{navbarBack:d,alertMessage:g["a"]}},p=f,b=Object(v["a"])(p,e,i,!1,null,null,null);b.options.__file="dashboard.vue";a["default"]=b.exports},"56a6":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"message-alert",class:{active:0!==t.messages.length}},t._l(t.messages,function(a,e){return s("div",{key:e,staticClass:"alert alert-dismissible mb-0 rounded-0",class:"alert-"+a.status},[t._v("\n    "+t._s(a.message)+"\n    "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){t.removeMessage(e)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)},i=[],n=(s("ac6a"),{name:"alertMessage",data:function(){return{messages:[]}},methods:{updateMessage:function(t,a){var s=Math.floor(new Date/1e3);this.messages.push({message:t,status:a,timestamp:s}),this.removeMessageWithTiming(s)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var a=this;setTimeout(function(){a.messages.forEach(function(s,e){s.timestamp===t&&a.messages.splice(e,1)})},1500)}},created:function(){var t=this;t.$bus.$on("message:push",function(a){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(a,s)})}}),r=n,l=s("2877"),o=Object(l["a"])(r,e,i,!1,null,null,null);o.options.__file="AlertMessage.vue";a["a"]=o.exports},ac6a:function(t,a,s){for(var e=s("cadf"),i=s("0d58"),n=s("2aba"),r=s("7726"),l=s("32e9"),o=s("84f2"),c=s("2b4c"),u=c("iterator"),v=c("toStringTag"),m=o.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=i(d),f=0;f<g.length;f++){var p,b=g[f],h=d[b],C=r[b],k=C&&C.prototype;if(k&&(k[u]||l(k,u,m),k[v]||l(k,v,b),o[b]=m,h))for(p in e)k[p]||n(k,p,e[p],!0)}},b804:function(t,a,s){t.exports=s.p+"img/crossgate-logo.9a00f280.png"}}]);
//# sourceMappingURL=chunk-ae412e3a.4c2493b4.js.map