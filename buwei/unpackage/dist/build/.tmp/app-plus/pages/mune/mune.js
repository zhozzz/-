(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mune/mune"],{1596:function(i,t,c){"use strict";c.r(t);var n=c("1c99"),e=c.n(n);for(var a in n)"default"!==a&&function(i){c.d(t,i,function(){return n[i]})}(a);t["default"]=e.a},"1c99":function(i,t,c){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=e(c("be02"));function e(i){return i&&i.__esModule?i:{default:i}}var a={data:function(){return{name:"wkiwi",height:0,categoryActive:0,scrollTop:0,scrollLeftTop:0,classifyData:n.default,arr:[0,584,1168,1752,2336,2805,3274,3858,4442,4911,5380,5734,6203,6672,7017],leftItemHeight:51,navLeftHeight:0,diff:0,tabBarHeight:0}},onShow:function(){},onLoad:function(){this.height=i.getSystemInfoSync().windowHeight-this.tabBarHeight},onReady:function(){var t=this,c=i.createSelectorQuery();c.selectAll(".nav-left-item").boundingClientRect(function(i){t.leftItemHeight=i[0].height,t.navLeftHeight=t.leftItemHeight*n.default.length,t.diff=t.navLeftHeight-t.height}),c.selectAll(".box").boundingClientRect(function(i){var c=[0],n=0;i.forEach(function(i){n+=i.height,c.push(n)}),console.log(c),t.arr=c}).exec()},methods:{scroll:function(i){var t=this;this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){t.scrollHeight=i.detail.scrollTop+t.height/2;for(var c=0;c<t.arr.length;c++){var e=t.arr[c],a=t.arr[c+1];if(!a||t.scrollHeight>=e&&t.scrollHeight<a)return t.categoryActive=c,t.diff>0&&(t.scrollLeftTop=Math.round(t.categoryActive*t.diff/(n.default.length-1))),!1}t.categoryActive=0,t.timeoutId=void 0},10)},categoryClickMain:function(i){this.categoryActive=i,this.scrollTop=this.arr[i]},cart:function(t){i.showToast({title:t,icon:"none"})}},components:{}};t.default=a}).call(this,c("649d")["default"])},"3b80":function(i,t,c){"use strict";c.r(t);var n=c("4afc"),e=c("1596");for(var a in e)"default"!==a&&function(i){c.d(t,i,function(){return e[i]})}(a);c("ece3");var s=c("2877"),f=Object(s["a"])(e["default"],n["a"],n["b"],!1,null,null,null);t["default"]=f.exports},"4afc":function(i,t,c){"use strict";var n=function(){var i=this,t=i.$createElement,c=i._self._c||t;return c("view",{staticClass:"page-body",style:"height:"+i.height+"px"},[c("scroll-view",{staticClass:"nav-left",style:"height:"+i.height+"px",attrs:{"scroll-y":"","scroll-top":i.scrollLeftTop,"scroll-with-animation":""}},i._l(i.classifyData,function(t,n){return c("view",{key:n,staticClass:"nav-left-item",class:n==i.categoryActive?"active":"",attrs:{eventid:"7e87e260-0-"+n},on:{click:function(t){i.categoryClickMain(n)}}},[i._v(i._s(t.name))])})),c("scroll-view",{staticClass:"nav-right",style:"height:"+i.height+"px",attrs:{"scroll-y":"","scroll-top":i.scrollTop,"scroll-with-animation":"",eventid:"7e87e260-2"},on:{scroll:i.scroll}},i._l(i.classifyData,function(t,n){return c("view",{key:n,staticClass:"box"},i._l(t.foods,function(t,e){return c("view",{key:e,staticClass:"nav-right-item",attrs:{id:0==e?"first":"",eventid:"7e87e260-1-"+n+"-"+e},on:{click:function(c){i.cart(t.name)}}},[c("image",{attrs:{src:t.icon}}),c("view",[i._v(i._s(t.name))])])}))}))],1)},e=[];c.d(t,"a",function(){return n}),c.d(t,"b",function(){return e})},7850:function(i,t,c){},be02:function(i,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{name:"品牌",foods:[{name:"A字裙",key:"A字裙",icon:"http://img.kiwifruits.cn/classify/1/1.jpg",cat:10},{name:"T恤",key:"T恤",icon:"http://img.kiwifruits.cn/classify/1/2.jpg",cat:10},{name:"半身裙",key:"半身裙",icon:"http://img.kiwifruits.cn/classify/1/3.jpg",cat:10},{name:"衬衫",key:"衬衫",icon:"http://img.kiwifruits.cn/classify/1/4.jpg",cat:10},{name:"短裙",key:"短裙",icon:"http://img.kiwifruits.cn/classify/1/5.jpg",cat:10},{name:"阔腿裤",key:"阔腿裤",icon:"http://img.kiwifruits.cn/classify/1/6.jpg",cat:10},{name:"连衣裙",key:"连衣裙",icon:"http://img.kiwifruits.cn/classify/1/7.jpg",cat:10},{name:"妈妈装",key:"妈妈装",icon:"http://img.kiwifruits.cn/classify/1/8.jpg",cat:10},{name:"牛仔裤",key:"牛仔裤",icon:"http://img.kiwifruits.cn/classify/1/9.jpg",cat:10},{name:"情侣装",key:"情侣装",icon:"http://img.kiwifruits.cn/classify/1/10.jpg",cat:10},{name:"休闲裤",key:"休闲裤",icon:"http://img.kiwifruits.cn/classify/1/11.jpg",cat:10},{name:"雪纺衫",key:"雪纺衫",icon:"http://img.kiwifruits.cn/classify/1/12.jpg",cat:10},{name:"防晒衣",key:"防晒衣",icon:"http://img.kiwifruits.cn/classify/1/13.jpg",cat:10},{name:"礼服/婚纱",key:"礼服婚纱",icon:"http://img.kiwifruits.cn/classify/1/14.jpg",cat:10}]},{name:"美食",foods:[{name:"火锅",key:"火锅",icon:"http://img.kiwifruits.cn/classify/2/1.jpg",cat:6},{name:"糕点饼干",key:"糕点饼干",icon:"http://img.kiwifruits.cn/classify/2/2.jpg",cat:6},{name:"坚果果干",key:"坚果果干",icon:"http://img.kiwifruits.cn/classify/2/3.jpg",cat:6},{name:"酒类",key:"酒类",icon:"http://img.kiwifruits.cn/classify/2/4.jpg",cat:6},{name:"辣条",key:"辣条",icon:"http://img.kiwifruits.cn/classify/2/5.jpg",cat:6},{name:"大礼包",key:"大礼包",icon:"http://img.kiwifruits.cn/classify/2/6.jpg",cat:6},{name:"精品茗茶",key:"茶",icon:"http://img.kiwifruits.cn/classify/2/7.jpg",cat:6},{name:"休闲食品",key:"休闲食品",icon:"http://img.kiwifruits.cn/classify/2/8.jpg",cat:6},{name:"糖果巧克力",key:"糖果巧克力",icon:"http://img.kiwifruits.cn/classify/2/9.jpg",cat:6},{name:"方便速食",key:"方便速食",icon:"http://img.kiwifruits.cn/classify/2/10.jpg",cat:6},{name:"营养代餐",key:"营养代餐",icon:"http://img.kiwifruits.cn/classify/2/11.jpg",cat:6},{name:"粮油副食",key:"粮油",icon:"http://img.kiwifruits.cn/classify/2/12.jpg",cat:6},{name:"生鲜水果",key:"水果",icon:"http://img.kiwifruits.cn/classify/2/13.jpg",cat:6},{name:"饮品",key:"饮品",icon:"http://img.kiwifruits.cn/classify/2/14.jpg",cat:6}]},{name:"饮品",foods:[{name:"化妆刷",key:"化妆刷",icon:"http://img.kiwifruits.cn/classify/3/1.jpg",cat:3},{name:"粉底",key:"粉底",icon:"http://img.kiwifruits.cn/classify/3/2.jpg",cat:3},{name:"洗发护发",key:"洗发护发",icon:"http://img.kiwifruits.cn/classify/3/3.jpg",cat:3},{name:"美容工具",key:"美容工具",icon:"http://img.kiwifruits.cn/classify/3/4.jpg",cat:3},{name:"眼部护理",key:"眼部护理",icon:"http://img.kiwifruits.cn/classify/3/5.jpg",cat:3},{name:"眉妆",key:"眉妆",icon:"http://img.kiwifruits.cn/classify/3/6.jpg",cat:3},{name:"卸妆品",key:"卸妆品",icon:"http://img.kiwifruits.cn/classify/3/7.jpg",cat:3},{name:"基础护肤",key:"基础护肤",icon:"http://img.kiwifruits.cn/classify/3/8.jpg",cat:3},{name:"眼妆",key:"眼妆",icon:"http://img.kiwifruits.cn/classify/3/9.jpg",cat:3},{name:"唇妆",key:"唇妆",icon:"http://img.kiwifruits.cn/classify/3/10.jpg",cat:3},{name:"面膜",key:"面膜",icon:"http://img.kiwifruits.cn/classify/3/11.jpg",cat:3},{name:"沐浴用品",key:"沐浴用品",icon:"http://img.kiwifruits.cn/classify/3/12.jpg",cat:3},{name:"护肤套装",key:"护肤套装",icon:"http://img.kiwifruits.cn/classify/3/13.jpg",cat:3},{name:"防晒品",key:"防晒品",icon:"http://img.kiwifruits.cn/classify/3/14.jpg",cat:3},{name:"美甲",key:"美甲",icon:"http://img.kiwifruits.cn/classify/3/15.jpg",cat:3}]},{name:"住宿",foods:[{name:"垃圾袋",key:"垃圾袋",icon:"http://img.kiwifruits.cn/classify/4/1.jpg",cat:4},{name:"纸巾",key:"纸巾",icon:"http://img.kiwifruits.cn/classify/4/2.jpg",cat:4},{name:"驱蚊用品",key:"驱蚊用品",icon:"http://img.kiwifruits.cn/classify/4/3.jpg",cat:4},{name:"收纳神器",key:"收纳神器",icon:"http://img.kiwifruits.cn/classify/4/4.jpg",cat:4},{name:"厨房用品",key:"厨房用品",icon:"http://img.kiwifruits.cn/classify/4/5.jpg",cat:4},{name:"厨房烹饪",key:"烹饪",icon:"http://img.kiwifruits.cn/classify/4/6.jpg",cat:4},{name:"衣物晾晒",key:"衣物晾晒",icon:"http://img.kiwifruits.cn/classify/4/7.jpg",cat:4},{name:"衣物护理",key:"衣物护理",icon:"http://img.kiwifruits.cn/classify/4/8.jpg",cat:4},{name:"宠物用品",key:"宠物用品",icon:"http://img.kiwifruits.cn/classify/4/9.jpg",cat:4},{name:"医药保健",key:"医药",icon:"http://img.kiwifruits.cn/classify/4/10.jpg",cat:4},{name:"日用百货",key:"百货",icon:"http://img.kiwifruits.cn/classify/4/11.jpg",cat:4},{name:"清洁用品",key:"清洁",icon:"http://img.kiwifruits.cn/classify/4/12.jpg",cat:4},{name:"绿植园艺",key:"绿植",icon:"http://img.kiwifruits.cn/classify/4/13.jpg",cat:4}]},{name:"玩乐",foods:[{name:"爸爸装",key:"爸爸装",icon:"http://img.kiwifruits.cn/classify/5/1.jpg",cat:12},{name:"牛仔裤",key:"牛仔裤",icon:"http://img.kiwifruits.cn/classify/5/2.jpg",cat:12},{name:"衬衫",key:"衬衫",icon:"http://img.kiwifruits.cn/classify/5/3.jpg",cat:12},{name:"休闲裤",key:"休闲裤",icon:"http://img.kiwifruits.cn/classify/5/4.jpg",cat:12},{name:"外套",key:"外套",icon:"http://img.kiwifruits.cn/classify/5/5.jpg",cat:12},{name:"T恤",key:"T恤",icon:"http://img.kiwifruits.cn/classify/5/6.jpg",cat:12},{name:"套装",key:"套装",icon:"http://img.kiwifruits.cn/classify/5/7.jpg",cat:12},{name:"运动裤",key:"运动裤",icon:"http://img.kiwifruits.cn/classify/5/8.jpg",cat:12},{name:"马甲/背心",key:"马甲背心",icon:"http://img.kiwifruits.cn/classify/5/9.jpg",cat:12},{name:"POLO衫",key:"POLO衫",icon:"http://img.kiwifruits.cn/classify/5/10.jpg",cat:12},{name:"商务装",key:"商务装",icon:"http://img.kiwifruits.cn/classify/5/11.jpg",cat:12}]}];t.default=n},df89:function(i,t,c){"use strict";c("1942");var n=a(c("b0ce")),e=a(c("3b80"));function a(i){return i&&i.__esModule?i:{default:i}}Page((0,n.default)(e.default))},ece3:function(i,t,c){"use strict";var n=c("7850"),e=c.n(n);e.a}},[["df89","common/runtime","common/vendor"]]]);