(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[905],{350:function(n,e,r){"use strict";r.d(e,{M1:function(){return l},TP:function(){return d},tx:function(){return f},wr:function(){return p},yA:function(){return s},z1:function(){return u}});var t=r(861),a=r(757),i=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="3987ef8b50a8e2daa6230641b3d0f9ca",s="https://image.tmdb.org/t/p/w500",u=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(e),n.next=3,c.Z.get(r);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(){var e,r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="trending/movie/day?api_key=".concat(o),n.next=3,c.Z.get(e);case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(e,"$?api_key=").concat(o,"&language=en-US"),n.next=3,c.Z.get(r);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"),n.next=3,c.Z.get(r);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US"),n.next=3,c.Z.get(r);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},905:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return _}});var t,a,i,c,o=r(861),s=r(439),u=r(757),p=r.n(u),d=r(87),l=r(689),f=r(168),h=r(444),x=h.ZP.img(t||(t=(0,f.Z)(["\n  border-radius: 5%;\n  margin-right: 20px;\n  width: 200px;\n  height: 300px;\n"]))),v=h.ZP.div(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: block;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),g=(h.ZP.div(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),r(791)),m=r(7),y=r.n(m),b=r(184),k=(0,h.ZP)(d.rU)(c||(c=(0,f.Z)(["\n  background-color: grey;\n  margin-bottom: 10px;\n  border-radius: 4px;\n  color: white;\n  padding: 8px 15px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin-left: 10px;\n  cursor: pointer;\n  font-weight: 500;\n  :hover {\n    background-color: orangered;\n    color: black;\n  }\n"]))),w=function(n){var e=n.children,r=(0,l.s0)();return(0,b.jsx)(k,{onClick:function(){r(-1)},children:e})};w.ropTypes={onGoBack:y().func,children:y().string};var j=r(350);var _=function(){var n=(0,g.useState)(null),e=(0,s.Z)(n,2),r=e[0],t=e[1],a=(0,l.UO)().movieId;return(0,g.useEffect)((function(){var n=function(){var n=(0,o.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,j.TP)(a);case 2:e=n.sent,t(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[a]),(0,b.jsxs)("div",{children:[r?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(w,{children:"Go back"}),(0,b.jsxs)(v,{children:[(0,b.jsx)(x,{src:j.yA+r.poster_path,alt:r.title}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("h1",{children:[r.title," (",r.release_date.slice(0,4),")"]}),(0,b.jsxs)("p",{children:["User score: ",10*r.vote_average,"%"]}),(0,b.jsx)("h3",{children:"Overview"}),(0,b.jsx)("p",{children:r.overview}),(0,b.jsx)("h3",{children:"Genres"}),(0,b.jsx)("p",{children:"".concat(r.genres.map((function(n){return n.name})).join(", "))})]})]})]}):(0,b.jsx)("div",{children:"This movie is not found"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{children:"Additional information"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsx)(d.rU,{to:"cast",children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(d.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,b.jsx)(g.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading subpage..."}),children:(0,b.jsx)(l.j3,{})})]})}},888:function(n,e,r){"use strict";var t=r(47);function a(){}function i(){}i.resetWarningCache=a,n.exports=function(){function n(n,e,r,a,i,c){if(c!==t){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function e(){return n}n.isRequired=n;var r={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:a};return r.PropTypes=r,r}},7:function(n,e,r){n.exports=r(888)()},47:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=905.850f3c33.chunk.js.map