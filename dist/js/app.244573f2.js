(function(t){function e(e){for(var n,c,r=e[0],i=e[1],u=e[2],d=0,l=[];d<r.length;d++)c=r[d],o[c]&&l.push(o[c][0]),o[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(e);while(l.length)l.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var r=a[c];0!==o[r]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},c={app:0},o={app:0},s=[];function r(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-01da3a60":"79749f46","chunk-218c9962":"6c110409","chunk-277f114f":"42b6ab43","chunk-2a0a0556":"5270fe74","chunk-2c4f853d":"ec73c422","chunk-4c8e4b04":"b8d57372","chunk-52109ca6":"e10db967","chunk-d588c722":"fb1c089b","chunk-e1ebda76":"388f9479","chunk-26e33198":"f5d6f1e0","chunk-2d0c8d75":"b30cfc1c","chunk-2d0e4c21":"1715f1f4","chunk-2d207424":"62fc7dc4","chunk-4f565a0c":"c74b7463","chunk-6d78b18b":"5576f57c","chunk-7cc452a9":"06cb5116","chunk-985dba6e":"b9a5155a","chunk-d856369c":"c1fd8a1a"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"chunk-277f114f":1,"chunk-2a0a0556":1,"chunk-2c4f853d":1,"chunk-4c8e4b04":1,"chunk-52109ca6":1,"chunk-d588c722":1,"chunk-e1ebda76":1};c[t]?e.push(c[t]):0!==c[t]&&a[t]&&e.push(c[t]=new Promise(function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-01da3a60":"31d6cfe0","chunk-218c9962":"31d6cfe0","chunk-277f114f":"4bf32aad","chunk-2a0a0556":"4bf32aad","chunk-2c4f853d":"4bf32aad","chunk-4c8e4b04":"8dd540e1","chunk-52109ca6":"4bf32aad","chunk-d588c722":"aaa9c397","chunk-e1ebda76":"148026d7","chunk-26e33198":"31d6cfe0","chunk-2d0c8d75":"31d6cfe0","chunk-2d0e4c21":"31d6cfe0","chunk-2d207424":"31d6cfe0","chunk-4f565a0c":"31d6cfe0","chunk-6d78b18b":"31d6cfe0","chunk-7cc452a9":"31d6cfe0","chunk-985dba6e":"31d6cfe0","chunk-d856369c":"31d6cfe0"}[t]+".css",o=i.p+n,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var u=s[r],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===o))return e()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){u=l[r],d=u.getAttribute("data-href");if(d===n||d===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.request=n,delete c[t],p.parentNode.removeChild(p),a(s)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)}).then(function(){c[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise(function(e,a){n=o[t]=[e,a]});e.push(n[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=r(t),u=function(e){d.onerror=d.onload=null,clearTimeout(l);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+c+")");s.type=n,s.request=c,a[1](s)}o[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/CrossGateV3/dist/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=d;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56a6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-alert",class:{active:0!==t.messages.length}},t._l(t.messages,function(e,n){return a("div",{key:n,staticClass:"alert alert-dismissible mb-0 rounded-0",class:"alert-"+e.status},[t._v("\n    "+t._s(e.message)+"\n    "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){t.removeMessage(n)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)},c=[],o=a("be94"),s=a("2f62"),r={name:"alertMessage",methods:Object(o["a"])({},Object(s["d"])("alertModules",["removeMessage"])),computed:Object(o["a"])({},Object(s["c"])("alertModules",["messages"]))},i=r,u=a("2877"),d=Object(u["a"])(i,n,c,!1,null,null,null);d.options.__file="AlertMessage.vue";e["a"]=d.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),c=a("2f62"),o=a("bc3a"),s=a.n(o),r=a("a7fe"),i=a.n(r),u=a("9062"),d=a.n(u),l=(a("e40d"),a("4989"),a("7bb1")),p=a("427f"),h=a.n(p),m=a("1157"),f=a.n(m),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[n("img",{attrs:{src:a("f8b2"),alt:"",width:"200"}})]),n("router-view"),n("alertMessage")],1)},b=[],v=a("be94"),k=a("56a6"),O={name:"App",components:{alertMessage:k["a"]},computed:Object(v["a"])({},Object(c["c"])(["isLoading"]))},M=O,C=(a("5c0b"),a("2877")),I=Object(C["a"])(M,g,b,!1,null,null,null);I.options.__file="App.vue";var D=I.exports,_=a("8c4f");n["a"].use(_["a"]);var y=new _["a"]({scrollBehavior:function(t,e,a){return a||{x:0,y:0}},routes:[{path:"*",redirect:"/index"},{path:"/",redirect:"/index",component:function(){return a.e("chunk-d856369c").then(a.bind(null,"6e78"))},children:[{name:"關於我們",path:"index",component:function(){return Promise.all([a.e("chunk-218c9962"),a.e("chunk-d588c722")]).then(a.bind(null,"754b"))}},{path:"gamehost",component:function(){return a.e("chunk-2d0e4c21").then(a.bind(null,"921c"))},children:[{name:"主機介紹",path:"/",component:function(){return Promise.all([a.e("chunk-218c9962"),a.e("chunk-e1ebda76")]).then(a.bind(null,"7220"))}},{name:"主機介紹-Switch",path:"switch",component:function(){return Promise.all([a.e("chunk-218c9962"),a.e("chunk-277f114f")]).then(a.bind(null,"4def"))}},{name:"主機介紹-PS4",path:"ps4",component:function(){return Promise.all([a.e("chunk-218c9962"),a.e("chunk-2c4f853d")]).then(a.bind(null,"2d88"))}},{name:"主機介紹-N3DS",path:"n3ds",component:function(){return Promise.all([a.e("chunk-218c9962"),a.e("chunk-52109ca6")]).then(a.bind(null,"1d88"))}}]},{name:"CrossGate商城",path:"shopping",component:function(){return Promise.all([a.e("chunk-218c9962"),a.e("chunk-4c8e4b04")]).then(a.bind(null,"80eb"))}},{name:"產品介紹",path:"productDetail/:prodId",component:function(){return Promise.all([a.e("chunk-218c9962"),a.e("chunk-2a0a0556")]).then(a.bind(null,"2e1b"))}},{name:"我的購物車",path:"myshoppingCart",component:function(){return a.e("chunk-2d207424").then(a.bind(null,"a087"))}},{name:"我的訂單",path:"myorders",component:function(){return a.e("chunk-985dba6e").then(a.bind(null,"e800"))}},{name:"確認訂單",path:"orderCheckout/:orderID",component:function(){return a.e("chunk-2d0c8d75").then(a.bind(null,"5730"))}}]},{path:"/login",component:function(){return a.e("chunk-26e33198").then(a.bind(null,"dd7b"))}},{path:"/admin",redirect:"/login",component:function(){return a.e("chunk-01da3a60").then(a.bind(null,"25bb"))},children:[{path:"products",component:function(){return a.e("chunk-6d78b18b").then(a.bind(null,"2325"))},meta:{requiresAuth:!0}},{path:"orders",component:function(){return a.e("chunk-7cc452a9").then(a.bind(null,"ff9a"))},meta:{requiresAuth:!0}},{path:"coupon",component:function(){return a.e("chunk-4f565a0c").then(a.bind(null,"36bb"))},meta:{requiresAuth:!0}}]}]}),N=(a("ac6a"),{namespaced:!0,strict:!0,state:{messages:[]},actions:{updateMessage:function(t,e){var a=e.message,n=e.status,c=void 0===n?"danger":n,o=Math.floor(new Date/1e3);t.commit("PUSHMESSAGE",{message:a,status:c,timestamp:o}),t.dispatch("removeMessageWithTiming",o)},removeMessageWithTiming:function(t,e){setTimeout(function(){t.state.messages.forEach(function(a,n){a.timestamp===e&&t.commit("REMOVEMESSAGE",n)})},3e3)}},mutations:{PUSHMESSAGE:function(t,e){t.messages.push(e)},REMOVEMESSAGE:function(t,e){t.messages.splice(e,1)}},getters:{messages:function(t){return t.messages}}}),A={namespaced:!0,strict:!0,state:{cart:{carts:[]},loadingItem:""},actions:{getCart:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/cart");return t.commit("LOADING",!0,{root:!0}),new Promise(function(a){s.a.get(e).then(function(e){e.data.data.carts?(t.commit("CART",e.data.data),t.commit("LOADINGITEM",""),t.commit("LOADING",!1,{root:!0}),a()):(t.commit("LOADINGITEM",""),t.dispatch("alertModules/updateMessage",{message:"".concat(e.data.message)},{root:!0}))})})},addtoCart:function(t,e){var a=e.id,n=e.qty,c="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/cart"),o={product_id:a,qty:n};return new Promise(function(e){s.a.post(c,{data:o}).then(function(a){a.data.success?(t.dispatch("getCart"),t.dispatch("alertModules/updateMessage",{message:"【".concat(a.data.data.product.title,"】").concat(a.data.data.qty," ").concat(a.data.data.product.unit).concat(a.data.message),status:"success"},{root:!0}),e()):t.dispatch("alertModules/updateMessage",{message:"【".concat(a.data.data.product.title,"】").concat(a.data.data.qty," ").concat(a.data.data.product.unit).concat(a.data.message)},{root:!0})})})},delCartItem:function(t,e){var a=e.id,n=e.prodName;t.commit("LOADINGITEM",a);var c="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/cart/").concat(a);return new Promise(function(e){s.a.delete(c).then(function(a){a.data.success?(t.dispatch("alertModules/updateMessage",{message:"".concat(a.data.message,"【").concat(n,"】"),status:"success"},{root:!0}),t.dispatch("getCart"),e()):t.dispatch("alertModules/updateMessage",{message:"".concat(a.data.message,"【").concat(n,"】")},{root:!0})})})}},mutations:{CART:function(t,e){t.cart=e},LOADINGITEM:function(t,e){t.loadingItem=e}},getters:{cart:function(t){return t.cart},loadingItem:function(t){return t.loadingItem}}},L={namespaced:!0,strict:!0,state:{products:[],product:{}},actions:{getProducts:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/products/all");t.commit("LOADING",!0,{root:!0}),s.a.get(e).then(function(e){e.data.success&&(t.commit("PRODUCTS",e.data.products),t.commit("LOADING",!1,{root:!0}))})},getProduct:function(t,e){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/product/").concat(e);t.commit("LOADING",!0,{root:!0}),s.a.get(a).then(function(e){t.commit("PRODUCT",e.data.product),t.commit("LOADING",!1,{root:!0})})}},mutations:{PRODUCTS:function(t,e){t.products=e},PRODUCT:function(t,e){t.product=e}},getters:{products:function(t){return t.products},product:function(t){return t.product}}},P={namespaced:!0,strict:!0,state:{loadingIcon:!1},actions:{addCouponCode:function(t,e){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/coupon");return t.commit("LOADINGICON",!0),new Promise(function(n){s.a.post(a,{data:e}).then(function(e){e.data.success?(t.dispatch("alertModules/updateMessage",{message:"".concat(e.data.message),status:"success"},{root:!0}),t.commit("LOADINGICON",!1),t.dispatch("cartModules/getCart",null,{root:!0}),n()):(t.dispatch("alertModules/updateMessage",{message:"".concat(e.data.message)},{root:!0}),t.commit("LOADINGICON",!1))})})}},mutations:{LOADINGICON:function(t,e){t.loadingIcon=e}},getters:{loadingIcon:function(t){return t.loadingIcon}}},G={namespaced:!0,strict:!0,state:{order:{user:{}},status:{loadIcon:!1},orders:[],pagination:{}},actions:{createdOrder:function(t,e){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/order");t.commit("LOADING",!0,{root:!0}),s.a.post(a,{data:e}).then(function(e){e.data.success?(t.dispatch("cartModules/getCart",null,{root:!0}),t.dispatch("alertModules/updateMessage",{message:"".concat(e.data.message),status:"success"},{root:!0}),t.commit("LOADING",!1,{root:!0}),y.push("/orderCheckout/".concat(e.data.orderId))):(t.dispatch("alertModules/updateMessage",{message:"".concat(e.data.message)},{root:!0}),t.commit("LOADING",!1,{root:!0}))})},getOrder:function(t,e){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/order/").concat(e);t.commit("LOADING",!0,{root:!0}),s.a.get(a).then(function(e){e.data.success&&e.data.order?(t.commit("ORDER",e.data.order),t.commit("LOADING",!1,{root:!0})):(t.commit("LOADING",!1,{root:!0}),t.dispatch("alertModules/updateMessage",{message:"糟糕...沒有這筆訂單喔！"},{root:!0}),y.push("/shopping"))})},payOrder:function(t,e){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/pay/").concat(e);t.commit("LOADINGICON",!0),s.a.post(a).then(function(a){a.data.success?(t.dispatch("alertModules/updateMessage",{message:"".concat(a.data.message),status:"success"},{root:!0}),t.commit("LOADINGICON",!1),t.dispatch("getOrder",e)):(t.commit("LOADINGICON",!1),t.dispatch("alertModules/updateMessage",{message:"'付款失敗 :("},{root:!0}))})},getOrders:function(t,e){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/orders?page=").concat(e);t.commit("LOADING",!0,{root:!0}),s.a.get(a).then(function(e){t.commit("ORDERS",e.data.orders),t.commit("PAGINATION",e.data.pagination),t.commit("LOADING",!1,{root:!0})})}},mutations:{ORDER:function(t,e){t.order=e},LOADINGICON:function(t,e){t.status.loadIcon=e},ORDERS:function(t,e){t.orders=e},PAGINATION:function(t,e){t.pagination=e}},getters:{order:function(t){return t.order},status:function(t){return t.status},orders:function(t){return t.orders},pagination:function(t){return t.pagination}}};n["a"].use(c["a"]);var w=new c["a"].Store({strict:!0,state:{isLoading:!1},actions:{updateLoading:function(t,e){t.commit("LOADING",e)}},mutations:{LOADING:function(t,e){t.isLoading=e}},getters:{isLoading:function(t){return t.isLoading}},modules:{alertModules:N,cartModules:A,productsModules:L,couponModules:P,ordersModules:G}});n["a"].prototype.$bus=new n["a"];a("a481"),a("c5f6");var E=function(t){var e=Number(t);return"$".concat(e.toFixed(0).replace(/./g,function(t,e,a){var n=e&&"."!==t&&(a.length-e)%3===0?", ".concat(t).replace(/\s/g,""):t;return n}))},x=function(t){var e=new Date(1e3*Number(t)),a=e.getFullYear()+"-",n=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",c=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",o=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",s=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),r=a+n+c+o+s;return r},S=function(t){var e="";switch(t){case"Switch":e="badge-danger";break;case"3DS":e="badge-main";break;case"PS4":e="badge-dark";break}return e},T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!1===t.pageData.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){e.preventDefault(),t.changePage(t.pageData.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.pageData.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pageData.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.changePage(e)}}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item",class:{disabled:!1===t.pageData.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){e.preventDefault(),t.changePage(t.pageData.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])])},j=[],R={name:"pagination",props:{pageData:{type:Object,default:function(){return{}}}},methods:{changePage:function(t){window.scrollTo({top:0}),this.$emit("changepage",t)}}},q=R,$=Object(C["a"])(q,T,j,!1,null,null,null);$.options.__file="pagination.vue";var B=$.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"Modal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._t("modalHeader",[t._m(0)]),t._t("modalBody",[a("div",{staticClass:"modal-body"},[t._v("\n          是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.modalData.title))]),t._v(" (刪除後將無法恢復)。\n        ")])]),t._t("modalFooter",[a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger border-0",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-outline-secondary border-0",attrs:{type:"button",disabled:t.isloading},on:{click:t.doit}},[t.isloading?a("i",{staticClass:"fas fa-spinner fa-spin mr-1"}):t._e(),t._v("確認刪除\n          ")])])])],2)])])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("i",{staticClass:"fas fa-exclamation-triangle mr-1"}),a("span",[t._v("刪除警示")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{staticClass:"text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],V={name:"modal",props:{modalData:{type:Object,default:function(){return{}}},isloading:{type:Boolean,default:!1}},methods:{doit:function(){this.$emit("doit")}}},F=V,W=Object(C["a"])(F,H,U,!1,null,null,null);W.options.__file="modal.vue";var z=W.exports;n["a"].config.productionTip=!1,n["a"].use(i.a,s.a),n["a"].use(c["a"]),s.a.defaults.withCredentials=!0,n["a"].use(l["a"],{events:"change"}),l["a"].Validator.localize("zh_TW",h.a),n["a"].component("Loading",d.a),n["a"].component("pagination",B),n["a"].component("modal",z),n["a"].filter("currency",E),n["a"].filter("timeTamps",x),n["a"].filter("category",S),new n["a"]({router:y,store:w,render:function(t){return t(D)}}).$mount("#app"),y.beforeEach(function(t,e,a){if(f()(".modal").modal("hide"),t.meta.requiresAuth){var n="".concat("https://vue-course-api.hexschool.io","/api/user/check");s.a.post(n).then(function(t){t.data.success?a():a({path:"/login"})})}else a()})},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),c=a.n(n);c.a},"5e27":function(t,e,a){},f8b2:function(t,e,a){t.exports=a.p+"img/loading.0f6ddb71.gif"}});
//# sourceMappingURL=app.244573f2.js.map