(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-js-test"],{"1b94":function(t,e,r){"use strict";var n=r("cdc5"),i=r.n(n);i.a},6062:function(t,e,r){"use strict";var n=r("6d61"),i=r("6566");t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,r){"use strict";var n=r("9bf2").f,i=r("7c73"),s=r("e2cc"),o=r("0366"),a=r("19aa"),u=r("2266"),c=r("7dd0"),l=r("2626"),f=r("83ab"),v=r("f183").fastKey,d=r("69f3"),h=d.set,p=d.getterFor;t.exports={getConstructor:function(t,e,r,c){var l=t((function(t,n){a(t,l,e),h(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=n&&u(n,t[c],t,r)})),d=p(e),g=function(t,e,r){var n,i,s=d(t),o=m(t,e);return o?o.value=r:(s.last=o={index:i=v(e,!0),key:e,value:r,previous:n=s.last,next:void 0,removed:!1},s.first||(s.first=o),n&&(n.next=o),f?s.size++:t.size++,"F"!==i&&(s.index[i]=o)),t},m=function(t,e){var r,n=d(t),i=v(e);if("F"!==i)return n.index[i];for(r=n.first;r;r=r.next)if(r.key==e)return r};return s(l.prototype,{clear:function(){var t=this,e=d(t),r=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete r[n.index],n=n.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,r=d(e),n=m(e,t);if(n){var i=n.next,s=n.previous;delete r.index[n.index],n.removed=!0,s&&(s.next=i),i&&(i.previous=s),r.first==n&&(r.first=i),r.last==n&&(r.last=s),f?r.size--:e.size--}return!!n},forEach:function(t){var e,r=d(this),n=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:r.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),s(l.prototype,r?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),f&&n(l.prototype,"size",{get:function(){return d(this).size}}),l},setStrong:function(t,e,r){var n=e+" Iterator",i=p(e),s=p(n);c(t,e,(function(t,e){h(this,{type:n,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=s(this),e=t.kind,r=t.last;while(r&&r.removed)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),l(e)}}},"6d61":function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),s=r("94ca"),o=r("6eeb"),a=r("f183"),u=r("2266"),c=r("19aa"),l=r("861d"),f=r("d039"),v=r("1c7e"),d=r("d44e"),h=r("7156");t.exports=function(t,e,r){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),m=p?"set":"add",y=i[t],b=y&&y.prototype,x=y,w={},k=function(t){var e=b[t];o(b,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(s(t,"function"!=typeof y||!(g||b.forEach&&!f((function(){(new y).entries().next()})))))x=r.getConstructor(e,t,p,m),a.REQUIRED=!0;else if(s(t,!0)){var O=new x,_=O[m](g?{}:-0,1)!=O,E=f((function(){O.has(1)})),I=v((function(t){new y(t)})),S=!g&&f((function(){var t=new y,e=5;while(e--)t[m](e,e);return!t.has(-0)}));I||(x=e((function(e,r){c(e,x,t);var n=h(new y,e,x);return void 0!=r&&u(r,n[m],n,p),n})),x.prototype=b,b.constructor=x),(E||S)&&(k("delete"),k("has"),p&&k("get")),(S||_)&&k(m),g&&b.clear&&delete b.clear}return w[t]=x,n({global:!0,forced:x!=y},w),d(x,t),g||r.setStrong(x,t,p),x}},9044:function(t,e,r){t.exports=r.p+"img/background-image.f93fabc9.jpg"},bb2f:function(t,e,r){var n=r("d039");t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c3bf:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("p",[t._v("数组去重：双层for循环，Array.filter()和indexOf，Array.sort加一行遍历冒泡(相邻元素去重)，ES6的set去重，Object键值对")]),r("div",[r("p",[t._v("filter："+t._s(t.array1))]),r("el-button",{attrs:{type:"primary"},on:{click:t.onFilter}},[t._v("filter去重")]),r("p",[t._v("去重后："+t._s(t.result1))])],1),r("el-divider"),r("div",[r("p",[t._v("set："+t._s(t.array2))]),r("el-button",{attrs:{type:"primary"},on:{click:t.onSet}},[t._v("set去重")]),r("p",[t._v("去重后："+t._s(t.result2))])],1)],1)},i=[],s=(r("4de4"),r("a630"),r("c975"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),r("2ef0")),o={name:"ArrayDeduplication",data:function(){return{name:"123",array:[1,3,4,1,2,3,5,1],array1:[],result1:[],array2:[],result2:[]}},created:function(){this.array1=Object(s["cloneDeep"])(this.array),this.array2=Object(s["cloneDeep"])(this.array)},methods:{onFilter:function(){var t=this;this.result1=[],this.array.filter((function(e,r){t.array.indexOf(e)===r&&t.result1.push(e)}))},onSet:function(){this.result2=[],this.result2=Array.from(new Set(this.array2))}}},a=o,u=r("2877"),c=Object(u["a"])(a,n,i,!1,null,null,null);e["default"]=c.exports},c543:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{attrs:{id:"box"},on:{mouseover:t.onMouseOver,mouseout:t.onMouseOut}},[t._m(0),r("ol",{attrs:{id:"olTag"}},[r("li",{on:{click:function(e){return t.onOlLiMove(0)}}}),r("li",{on:{click:function(e){return t.onOlLiMove(1)}}}),r("li",{on:{click:function(e){return t.onOlLiMove(2)}}}),r("li")]),r("div",{staticClass:"left",attrs:{id:"left"},on:{click:t.onLeft}},[r("span",[t._v("←")])]),r("div",{staticClass:"right",attrs:{id:"right"},on:{click:t.onRight}},[r("span",[t._v("→")])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{attrs:{id:"ulTag"}},[n("li",[n("img",{attrs:{src:r("ee92"),alt:""}})]),n("li",[n("img",{attrs:{src:r("9044"),alt:""}})]),n("li",[n("img",{attrs:{src:r("c59d"),alt:""}})]),n("li",[n("img",{attrs:{src:r("ee92"),alt:""}})])])}],s={name:"JsTest",data:function(){return{timer:setInterval(this.move,2e3),timer1:null,cur:0,target:0,moveTarget:0,speed:0}},mounted:function(){this.buttonShow()},destroyed:function(){clearInterval(this.timer)},methods:{onLeft:function(){this.moveTarget=400,this.target=this.moveTarget+this.cur,this.target>=380&&(this.cur=-1200,this.target=-800),this.sport(this.target),this.buttonShow()},onRight:function(){this.moveTarget=-400,this.target=this.moveTarget+this.cur,this.target<=-1200&&(this.cur=0,this.target=-400),this.sport(this.target),this.buttonShow()},onOlLiMove:function(t){this.target=-400*t,this.sport(this.target),this.buttonShow()},move:function(){this.target<=-1200?(this.cur=0,this.target=-400):this.target-=400,this.sport(this.target),this.buttonShow()},sport:function(t){var e=this;clearInterval(this.timer1),this.timer1=setInterval((function(){e.cur===t?clearInterval(e.timer1):(e.speed=(t-e.cur)/10,e.cur=e.cur+e.speed,document.getElementById("ulTag").style.left=e.cur+"px")}),20)},buttonShow:function(){var t=document.getElementById("olTag").getElementsByTagName("li"),e=-Math.round(this.target/400);console.log(e),3===e&&(e=0);for(var r=0;r<t.length;r++)t[r].style.background="";t[e].style.background="#ffffff"},onMouseOver:function(){clearInterval(this.timer)},onMouseOut:function(){this.timer=setInterval(this.move,2e3)}}},o=s,a=(r("1b94"),r("2877")),u=Object(a["a"])(o,n,i,!1,null,"8265132c",null);e["default"]=u.exports},c59d:function(t,e,r){t.exports=r.p+"img/person.cfd12d69.jpg"},cdc5:function(t,e,r){},f183:function(t,e,r){var n=r("d012"),i=r("861d"),s=r("5135"),o=r("9bf2").f,a=r("90e3"),u=r("bb2f"),c=a("meta"),l=0,f=Object.isExtensible||function(){return!0},v=function(t){o(t,c,{value:{objectID:"O"+ ++l,weakData:{}}})},d=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,c)){if(!f(t))return"F";if(!e)return"E";v(t)}return t[c].objectID},h=function(t,e){if(!s(t,c)){if(!f(t))return!0;if(!e)return!1;v(t)}return t[c].weakData},p=function(t){return u&&g.REQUIRED&&f(t)&&!s(t,c)&&v(t),t},g=t.exports={REQUIRED:!1,fastKey:d,getWeakData:h,onFreeze:p};n[c]=!0}}]);