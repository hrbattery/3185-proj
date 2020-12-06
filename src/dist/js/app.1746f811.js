(function(t){function e(e){for(var r,a,c=e[0],u=e[1],d=e[2],s=0,p=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},i=[];function a(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-099e23a3":"414ff9d7","chunk-099e4bb6":"c68e7d1d","chunk-09b2c59b":"718e8da7","chunk-09b5d2ae":"08b6cecc","chunk-0e853b3c":"48b86f29"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(t);var d=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(s);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",d.name="ChunkLoadError",d.type=r,d.request=i,n[1](d)}o[t]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=d;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1fc3":function(t,e,n){t.exports=n.p+"img/Style Transfer.e7bc31c8.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("8c4f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:t.transitionName}},[n("keep-alive",[n("router-view")],1)],1)],1)},a=[],c={name:"App",data:function(){return{transitionName:""}},watch:{$route:function(t,e){t.meta.index<e.meta.index?this.transitionName="slide-right":this.transitionName="slide-left"}}},u=c,d=(n("034f"),n("2877")),s=Object(d["a"])(u,i,a,!1,null,null,null),l=s.exports,p=(n("d3b7"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-app-bar",{attrs:{app:""}},[r("v-toolbar-title",[r("v-btn",{attrs:{icon:""}},[r("router-link",{attrs:{to:"/"}},[r("v-icon",[t._v("mdi-home")])],1)],1)],1),r("v-spacer"),r("v-btn",{attrs:{icon:""}},[r("router-link",{attrs:{to:"about"}},[r("v-icon",[t._v("mdi-information")])],1)],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",{on:{click:t.darkModeTrigger}},[t._v("mdi-theme-light-dark")])],1)],1),r("transition",{attrs:{name:"fade"}},[t.displayBackground?r("div",{style:t.backgroundStyle,attrs:{id:"background"}}):t._e()]),r("v-main",{attrs:{id:"main"}},[r("h1",[t._v("Introduction to Computer Vision")]),r("v-container",{staticStyle:{width:"40%"},attrs:{"align-center":""}},[r("v-row",t._l(4,(function(e){return r("v-col",{key:e,ref:"cards",refInFor:!0,attrs:{cols:"6"}},[r("router-link",{attrs:{to:"p"+e}},[r("v-card",{attrs:{hover:!0},on:{mouseover:function(n){return t.mouseover(e)},mouseleave:function(e){return t.mouseleave()}}},[r("v-card-text",[t._v(" "+t._s(t.headerTitles[e-1])+" ")]),r("v-img",{attrs:{src:n("b5a1")("./"+t.headerTitles[e-1]+".jpg"),"aspect-ratio":16/9,alt:""}})],1)],1)],1)})),1)],1)],1),r("Footer")],1)}),f=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{padless:""}},[n("v-card",{staticClass:"cyan darken-2 white--text text-center",attrs:{flat:"",tile:"",dark:"",width:"100%"}},[n("v-card-text",[n("p",[t._v("Powered by")]),t._l(t.icons,(function(e){return n("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:"",href:t.iconLink[e]}},[n("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)}))],2)],1)],1)},h=[],b={data:function(){return{icons:["mdi-vuetify","mdi-material-design","mdi-book-multiple","mdi-github"],iconLink:{"mdi-vuetify":"https://vuetifyjs.com/","mdi-github":"https://github.com/hrbattery/3185-proj","mdi-material-design":"https://material.io/","mdi-book-multiple":"http://www4.comp.polyu.edu.hk/~csdzhang/CSC3185/index.html"}}}},v=b,g=Object(d["a"])(v,m,h,!1,null,null,null),y=g.exports,k={data:function(){return{headerTitles:["Introduction","Image Inpainting","Style Transfer","Motion Detection"],displayBackground:!1,backgroundStyle:{backgroundImage:""}}},methods:{darkModeTrigger:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark},mouseover:function(t){this.$data.backgroundStyle.backgroundImage="url("+encodeURI(n("b5a1")("./".concat(this.$data.headerTitles[t-1],".jpg")))+")",this.$data.displayBackground=!0},mouseleave:function(){this.$data.displayBackground=!1}},components:{Footer:y},mounted:function(){}},x=k,j=(n("89f1"),Object(d["a"])(x,p,f,!1,null,null,null)),w=j.exports,_=function(){return n.e("chunk-099e23a3").then(n.bind(null,"2cb6"))},I=function(){return n.e("chunk-0e853b3c").then(n.bind(null,"80b7"))},O=function(){return n.e("chunk-099e4bb6").then(n.bind(null,"4194"))},T=function(){return n.e("chunk-09b5d2ae").then(n.bind(null,"fff6"))},S=function(){return n.e("chunk-09b2c59b").then(n.bind(null,"a1d1"))},$=[{path:"/",component:w,meta:{title:"Home",index:0}},{path:"/home",name:"home",component:w,meta:{title:"Home",index:0}},{path:"/p1",name:"page1",component:_,meta:{title:"Introduction",index:1}},{path:"/p2",name:"page2",component:I,meta:{title:"Introduction",index:1}},{path:"/p3",name:"page3",component:O,meta:{title:"Introduction",index:1}},{path:"/p4",name:"page4",component:T,meta:{title:"Introduction",index:1}},{path:"/about",name:"about",component:S,meta:{title:"Introduction",index:1}}],M=$,P=n("ce5b"),C=n.n(P);n("bf40"),n("5363");r["default"].use(C.a);var E=new C.a({icons:{iconfont:"mdi"}});r["default"].config.productionTip=!1,r["default"].use(o["a"]),r["default"].use(E);var N=new o["a"]({mode:"history",routes:M});new r["default"]({router:N,vuetify:E,render:function(t){return t(l)}}).$mount("#app")},"6d61d":function(t,e,n){t.exports=n.p+"img/Introduction.2cc1ad35.jpg"},"85ec":function(t,e,n){},"89f1":function(t,e,n){"use strict";n("fca2")},a17d:function(t,e,n){t.exports=n.p+"img/Motion Detection.4c19dcd4.jpg"},b5a1:function(t,e,n){var r={"./GAN.jpg":"b867","./Image Inpainting.jpg":"ecb9","./Introduction.jpg":"6d61d","./Motion Detection.jpg":"a17d","./Style Transfer.jpg":"1fc3"};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id="b5a1"},b867:function(t,e,n){t.exports=n.p+"img/GAN.7c99bdcc.jpg"},ecb9:function(t,e,n){t.exports=n.p+"img/Image Inpainting.cac7a8f2.jpg"},fca2:function(t,e,n){}});
//# sourceMappingURL=app.1746f811.js.map