"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{350:function(t,n,e){e.d(n,{M1:function(){return v},TP:function(){return f},tx:function(){return d},wr:function(){return p},yA:function(){return o},z1:function(){return s}});var r=e(861),a=e(757),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="3987ef8b50a8e2daa6230641b3d0f9ca",o="https://image.tmdb.org/t/p/w500",s=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(n),t.next=3,c.Z.get(e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(){var n,e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="trending/movie/day?api_key=".concat(i),t.next=3,c.Z.get(n);case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="movie/".concat(n,"$?api_key=").concat(i,"&language=en-US"),t.next=3,c.Z.get(e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"),t.next=3,c.Z.get(e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"),t.next=3,c.Z.get(e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},415:function(t,n,e){e.r(n);var r=e(861),a=e(439),u=e(757),c=e.n(u),i=e(791),o=e(350),s=e(689),p=e(87),f=e(184);n.default=function(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),e=n[0],u=n[1],v=(0,s.TH)();return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.wr)();case 2:n=t.sent,e=n.results,u(e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Popular Movies"}),(0,f.jsx)("ul",{children:e&&e.map((function(t){var n=t.id,e=t.title;return(0,f.jsx)("li",{children:(0,f.jsx)(p.rU,{to:{pathname:"/movies/".concat("".concat(n)),state:{from:{location:v}}},children:(0,f.jsx)("p",{children:e})})},n)}))})]})}}}]);
//# sourceMappingURL=415.0138a91d.chunk.js.map