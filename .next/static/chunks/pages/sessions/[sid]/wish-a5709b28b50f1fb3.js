(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695],{8878:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sessions/[sid]/wish",function(){return t(4314)}])},5604:function(n,e,t){"use strict";t.d(e,{Z:function(){return d}});var r=t(5893),o=t(1528),a=t(2359),i=t(8157),s=t(6478),c=t(6321),u=t(7294),l=t(1163),f=["wish","queue","poll"],p={"/wish":0,"/queue":1,"/poll":2};function d(){var n=(0,l.useRouter)(),e=(0,u.useState)(p[n.pathname]||0),t=e[0],d=e[1];return(0,r.jsxs)(o.Z,{showLabels:!0,sx:{position:"fixed",top:"auto",bottom:0,width:"100vw",backgroundColor:"#343a3f"},value:t,onChange:function(e,t){d(t),n.push("/".concat(f[t]))},children:[(0,r.jsx)(a.Z,{label:"Song w\xfcnschen",icon:(0,r.jsx)(i.Z,{}),sx:{color:"#fff"}}),(0,r.jsx)(a.Z,{label:"Queue",icon:(0,r.jsx)(s.Z,{}),sx:{color:"#fff"}}),(0,r.jsx)(a.Z,{label:"Playlist voting",icon:(0,r.jsx)(c.Z,{}),sx:{color:"#fff"}})]})}},4314:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return S}});var r=t(5666),o=t.n(r),a=t(5893),i=t(5604),s=t(6744),c=(0,s.zo)("div",{marginTop:"1vh",marginBottom:"60px",marginLeft:"2vw",marginRight:"2vw",maxWidth:"96vw",overflowX:"hidden"});function u(n){var e=n.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{children:e}),(0,a.jsx)(i.Z,{})]})}var l=t(5333),f=t(8795),p=t(3321),d=t(7294),h=t(7450),x=t(8239),v=t(2255),w=(0,x.Z)({palette:{primary:{main:"#24a148"},info:{main:"#24a148"},text:{primary:"#000000",secondary:"#21272a",disabled:"#c1c7cd"},action:{hover:"#c1c7cd"}}}),m=(0,s.zo)(l.Z,{position:"absolute",top:"30%",left:"50%",transform:"translate(-50%, -50%)",width:"96vw",backgroundColor:"#f2f4f8",padding:"20px"}),b=(0,s.zo)(f.Z,{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"Black"}});function g(n){var e,t=n.open,r=n.onClose,o=n.onChange,i=n.onSubmit;return(0,a.jsx)(h.Z,{open:t,children:(0,a.jsx)(m,{children:(0,a.jsxs)(v.Z,{theme:w,children:[(0,a.jsx)(b,{label:"Spotify URL",variant:"outlined",size:"small",placeholder:"Bitte f\xfcge den Spotify URL hier ein",fullWidth:!0,onChange:o,onKeyDown:(e=i,function(n){"Enter"===n.code&&e()})}),(0,a.jsxs)(l.Z,{sx:{marginTop:"15px"},children:[(0,a.jsx)(p.Z,{onClick:r,children:"Abbrechen"}),(0,a.jsx)(p.Z,{variant:"contained",onClick:i,children:"Ok"})]})]})})})}function j(n,e,t,r,o,a,i){try{var s=n[a](i),c=s.value}catch(u){return void t(u)}s.done?e(c):Promise.resolve(c).then(r,o)}function Z(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var a=n.apply(e,t);function i(n){j(a,r,o,i,s,"next",n)}function s(n){j(a,r,o,i,s,"throw",n)}i(void 0)}))}}var k=Z(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.startsWith("https://open.spotify.com/track")){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,fetch("/api/playlist?song_id=".concat(e.split("/").pop().split("?")[0]),{method:"POST"});case 4:case"end":return n.stop()}}),n)}))),C=Z(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/tracks?q=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})));function S(){var n=(0,d.useState)(),e=n[0],t=n[1],r=(0,d.useState)(),i=r[0],s=r[1],c=(0,d.useState)(!1),h=c[0],x=c[1],v=(0,d.useState)([]),w=v[0],m=v[1],b=function(){s(""),x(!1)},j=Z(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("Enter"===t.code){n.next=2;break}return n.abrupt("return");case 2:return n.t0=m,n.next=5,C(e);case 5:n.t1=n.sent,(0,n.t0)(n.t1);case 7:case"end":return n.stop()}}),n)}))),S=Z(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(navigator.clipboard){n.next=3;break}return x(!0),n.abrupt("return");case 3:return n.next=5,navigator.clipboard.readText();case 5:return e=n.sent,n.next=8,k(e);case 8:case"end":return n.stop()}}),n)})));return(0,a.jsxs)(u,{children:[(0,a.jsx)(g,{onClose:b,onChange:function(n){return s(n.target.value)},onSubmit:Z(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k(i);case 2:b();case 3:case"end":return n.stop()}}),n)}))),open:h}),(0,a.jsx)(l.Z,{sx:{paddingTop:"15px"},children:(0,a.jsx)(f.Z,{label:"Suche",variant:"outlined",size:"small",placeholder:"Suche nach deinem Wunschsong",fullWidth:!0,onChange:function(n){return t(n.target.value)},onKeyDown:j})}),(0,a.jsxs)(l.Z,{sx:{marginTop:"15px"},children:[(0,a.jsx)(p.Z,{onClick:S,children:"Aus Zwischenablage"}),(0,a.jsx)(p.Z,{variant:"contained",onClick:Z(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=m,n.next=3,C(e);case 3:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 5:case"end":return n.stop()}}),n)}))),children:"Suchen"})]}),(0,a.jsx)(l.Z,{sx:{color:"white"},children:w.map((function(n,e){return(0,a.jsxs)("div",{children:[n.name," | ",n.artist]},e)}))})]})}}},function(n){n.O(0,[289,549,561,774,888,179],(function(){return e=8878,n(n.s=e);var e}));var e=n.O();_N_E=e}]);