(self.webpackChunkcookbook_web=self.webpackChunkcookbook_web||[]).push([[139],{97432:function(){},37753:function(){},34719:function(){},39144:function(q,b,n){"use strict";n.d(b,{Z:function(){return k}});var s=n(96156),y=n(22122),a=n(67294),V=n(94184),S=n.n(V),G=n(98423),P=n(86032),w=function(E,d){var _={};for(var c in E)Object.prototype.hasOwnProperty.call(E,c)&&d.indexOf(c)<0&&(_[c]=E[c]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,c=Object.getOwnPropertySymbols(E);h<c.length;h++)d.indexOf(c[h])<0&&Object.prototype.propertyIsEnumerable.call(E,c[h])&&(_[c[h]]=E[c[h]]);return _},Ce=function(d){var _=d.prefixCls,c=d.className,h=d.hoverable,te=h===void 0?!0:h,J=w(d,["prefixCls","className","hoverable"]);return a.createElement(P.C,null,function(ce){var de=ce.getPrefixCls,ie=de("card",_),ne=S()("".concat(ie,"-grid"),c,(0,s.Z)({},"".concat(ie,"-grid-hoverable"),te));return a.createElement("div",(0,y.Z)({},J,{className:ne}))})},ue=Ce,X=function(E,d){var _={};for(var c in E)Object.prototype.hasOwnProperty.call(E,c)&&d.indexOf(c)<0&&(_[c]=E[c]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,c=Object.getOwnPropertySymbols(E);h<c.length;h++)d.indexOf(c[h])<0&&Object.prototype.propertyIsEnumerable.call(E,c[h])&&(_[c[h]]=E[c[h]]);return _},ee=function(d){return a.createElement(P.C,null,function(_){var c=_.getPrefixCls,h=d.prefixCls,te=d.className,J=d.avatar,ce=d.title,de=d.description,ie=X(d,["prefixCls","className","avatar","title","description"]),ne=c("card",h),_e=S()("".concat(ne,"-meta"),te),D=J?a.createElement("div",{className:"".concat(ne,"-meta-avatar")},J):null,ae=ce?a.createElement("div",{className:"".concat(ne,"-meta-title")},ce):null,ye=de?a.createElement("div",{className:"".concat(ne,"-meta-description")},de):null,K=ae||ye?a.createElement("div",{className:"".concat(ne,"-meta-detail")},ae,ye):null;return a.createElement("div",(0,y.Z)({},ie,{className:_e}),D,K)})},u=ee,U=n(51752),M=n(71230),m=n(15746),g=n(97647),xe=function(E,d){var _={};for(var c in E)Object.prototype.hasOwnProperty.call(E,c)&&d.indexOf(c)<0&&(_[c]=E[c]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,c=Object.getOwnPropertySymbols(E);h<c.length;h++)d.indexOf(c[h])<0&&Object.prototype.propertyIsEnumerable.call(E,c[h])&&(_[c[h]]=E[c[h]]);return _};function W(E){var d=E.map(function(_,c){return a.createElement("li",{style:{width:"".concat(100/E.length,"%")},key:"action-".concat(c)},a.createElement("span",null,_))});return d}var Z=function(d){var _,c,h=a.useContext(P.E_),te=h.getPrefixCls,J=h.direction,ce=a.useContext(g.Z),de=function(We){var De;(De=d.onTabChange)===null||De===void 0||De.call(d,We)},ie=function(){var We;return a.Children.forEach(d.children,function(De){De&&De.type&&De.type===ue&&(We=!0)}),We},ne=d.prefixCls,_e=d.className,D=d.extra,ae=d.headStyle,ye=ae===void 0?{}:ae,K=d.bodyStyle,be=K===void 0?{}:K,me=d.title,z=d.loading,B=d.bordered,R=B===void 0?!0:B,re=d.size,Re=d.type,Ne=d.cover,Ae=d.actions,Ee=d.tabList,Ue=d.children,Oe=d.activeTabKey,he=d.defaultActiveTabKey,T=d.tabBarExtraContent,Le=d.hoverable,Pe=d.tabProps,Ie=Pe===void 0?{}:Pe,Ve=xe(d,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),L=te("card",ne),Xe=be.padding===0||be.padding==="0px"?{padding:24}:void 0,fe=a.createElement("div",{className:"".concat(L,"-loading-block")}),Je=a.createElement("div",{className:"".concat(L,"-loading-content"),style:Xe},a.createElement(M.Z,{gutter:8},a.createElement(m.Z,{span:22},fe)),a.createElement(M.Z,{gutter:8},a.createElement(m.Z,{span:8},fe),a.createElement(m.Z,{span:15},fe)),a.createElement(M.Z,{gutter:8},a.createElement(m.Z,{span:6},fe),a.createElement(m.Z,{span:18},fe)),a.createElement(M.Z,{gutter:8},a.createElement(m.Z,{span:13},fe),a.createElement(m.Z,{span:9},fe)),a.createElement(M.Z,{gutter:8},a.createElement(m.Z,{span:4},fe),a.createElement(m.Z,{span:3},fe),a.createElement(m.Z,{span:16},fe))),He=Oe!==void 0,Qe=(0,y.Z)((0,y.Z)({},Ie),(_={},(0,s.Z)(_,He?"activeKey":"defaultActiveKey",He?Oe:he),(0,s.Z)(_,"tabBarExtraContent",T),_)),Ge,Ke=Ee&&Ee.length?a.createElement(U.Z,(0,y.Z)({size:"large"},Qe,{className:"".concat(L,"-head-tabs"),onChange:de}),Ee.map(function(Be){return a.createElement(U.Z.TabPane,{tab:Be.tab,disabled:Be.disabled,key:Be.key})})):null;(me||D||Ke)&&(Ge=a.createElement("div",{className:"".concat(L,"-head"),style:ye},a.createElement("div",{className:"".concat(L,"-head-wrapper")},me&&a.createElement("div",{className:"".concat(L,"-head-title")},me),D&&a.createElement("div",{className:"".concat(L,"-extra")},D)),Ke));var ke=Ne?a.createElement("div",{className:"".concat(L,"-cover")},Ne):null,ze=a.createElement("div",{className:"".concat(L,"-body"),style:be},z?Je:Ue),je=Ae&&Ae.length?a.createElement("ul",{className:"".concat(L,"-actions")},W(Ae)):null,Ye=(0,G.Z)(Ve,["onTabChange"]),Fe=re||ce,qe=S()(L,(c={},(0,s.Z)(c,"".concat(L,"-loading"),z),(0,s.Z)(c,"".concat(L,"-bordered"),R),(0,s.Z)(c,"".concat(L,"-hoverable"),Le),(0,s.Z)(c,"".concat(L,"-contain-grid"),ie()),(0,s.Z)(c,"".concat(L,"-contain-tabs"),Ee&&Ee.length),(0,s.Z)(c,"".concat(L,"-").concat(Fe),Fe),(0,s.Z)(c,"".concat(L,"-type-").concat(Re),!!Re),(0,s.Z)(c,"".concat(L,"-rtl"),J==="rtl"),c),_e);return a.createElement("div",(0,y.Z)({},Ye,{className:qe}),Ge,ke,ze,je)};Z.Grid=ue,Z.Meta=u;var k=Z},58024:function(q,b,n){"use strict";var s=n(43673),y=n.n(s),a=n(97432),V=n.n(a),S=n(18106),G=n(13062),P=n(89032)},15746:function(q,b,n){"use strict";var s=n(21584);b.Z=s.Z},89032:function(q,b,n){"use strict";var s=n(43673),y=n.n(s),a=n(6999)},99134:function(q,b,n){"use strict";var s=n(67294),y=(0,s.createContext)({});b.Z=y},21584:function(q,b,n){"use strict";var s=n(96156),y=n(22122),a=n(90484),V=n(67294),S=n(94184),G=n.n(S),P=n(99134),w=n(86032),Ce=function(u,U){var M={};for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&U.indexOf(m)<0&&(M[m]=u[m]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,m=Object.getOwnPropertySymbols(u);g<m.length;g++)U.indexOf(m[g])<0&&Object.prototype.propertyIsEnumerable.call(u,m[g])&&(M[m[g]]=u[m[g]]);return M};function ue(u){return typeof u=="number"?"".concat(u," ").concat(u," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(u)?"0 0 ".concat(u):u}var X=["xs","sm","md","lg","xl","xxl"],ee=V.forwardRef(function(u,U){var M,m=V.useContext(w.E_),g=m.getPrefixCls,xe=m.direction,W=V.useContext(P.Z),Z=W.gutter,k=W.wrap,E=W.supportFlexGap,d=u.prefixCls,_=u.span,c=u.order,h=u.offset,te=u.push,J=u.pull,ce=u.className,de=u.children,ie=u.flex,ne=u.style,_e=Ce(u,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),D=g("col",d),ae={};X.forEach(function(z){var B,R={},re=u[z];typeof re=="number"?R.span=re:(0,a.Z)(re)==="object"&&(R=re||{}),delete _e[z],ae=(0,y.Z)((0,y.Z)({},ae),(B={},(0,s.Z)(B,"".concat(D,"-").concat(z,"-").concat(R.span),R.span!==void 0),(0,s.Z)(B,"".concat(D,"-").concat(z,"-order-").concat(R.order),R.order||R.order===0),(0,s.Z)(B,"".concat(D,"-").concat(z,"-offset-").concat(R.offset),R.offset||R.offset===0),(0,s.Z)(B,"".concat(D,"-").concat(z,"-push-").concat(R.push),R.push||R.push===0),(0,s.Z)(B,"".concat(D,"-").concat(z,"-pull-").concat(R.pull),R.pull||R.pull===0),(0,s.Z)(B,"".concat(D,"-rtl"),xe==="rtl"),B))});var ye=G()(D,(M={},(0,s.Z)(M,"".concat(D,"-").concat(_),_!==void 0),(0,s.Z)(M,"".concat(D,"-order-").concat(c),c),(0,s.Z)(M,"".concat(D,"-offset-").concat(h),h),(0,s.Z)(M,"".concat(D,"-push-").concat(te),te),(0,s.Z)(M,"".concat(D,"-pull-").concat(J),J),M),ce,ae),K={};if(Z&&Z[0]>0){var be=Z[0]/2;K.paddingLeft=be,K.paddingRight=be}if(Z&&Z[1]>0&&!E){var me=Z[1]/2;K.paddingTop=me,K.paddingBottom=me}return ie&&(K.flex=ue(ie),ie==="auto"&&k===!1&&!K.minWidth&&(K.minWidth=0)),V.createElement("div",(0,y.Z)({},_e,{style:(0,y.Z)((0,y.Z)({},K),ne),className:ye,ref:U}),de)});ee.displayName="Col",b.Z=ee},92820:function(q,b,n){"use strict";var s=n(22122),y=n(96156),a=n(90484),V=n(28481),S=n(67294),G=n(94184),P=n.n(G),w=n(86032),Ce=n(99134),ue=n(93355),X=n(24308),ee=n(98082),u=function(g,xe){var W={};for(var Z in g)Object.prototype.hasOwnProperty.call(g,Z)&&xe.indexOf(Z)<0&&(W[Z]=g[Z]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var k=0,Z=Object.getOwnPropertySymbols(g);k<Z.length;k++)xe.indexOf(Z[k])<0&&Object.prototype.propertyIsEnumerable.call(g,Z[k])&&(W[Z[k]]=g[Z[k]]);return W},U=(0,ue.b)("top","middle","bottom","stretch"),M=(0,ue.b)("start","end","center","space-around","space-between"),m=S.forwardRef(function(g,xe){var W,Z=g.prefixCls,k=g.justify,E=g.align,d=g.className,_=g.style,c=g.children,h=g.gutter,te=h===void 0?0:h,J=g.wrap,ce=u(g,["prefixCls","justify","align","className","style","children","gutter","wrap"]),de=S.useContext(w.E_),ie=de.getPrefixCls,ne=de.direction,_e=S.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),D=(0,V.Z)(_e,2),ae=D[0],ye=D[1],K=(0,ee.Z)(),be=S.useRef(te);S.useEffect(function(){var Ue=X.ZP.subscribe(function(Oe){var he=be.current||0;(!Array.isArray(he)&&(0,a.Z)(he)==="object"||Array.isArray(he)&&((0,a.Z)(he[0])==="object"||(0,a.Z)(he[1])==="object"))&&ye(Oe)});return function(){return X.ZP.unsubscribe(Ue)}},[]);var me=function(){var Oe=[0,0],he=Array.isArray(te)?te:[te,0];return he.forEach(function(T,Le){if((0,a.Z)(T)==="object")for(var Pe=0;Pe<X.c4.length;Pe++){var Ie=X.c4[Pe];if(ae[Ie]&&T[Ie]!==void 0){Oe[Le]=T[Ie];break}}else Oe[Le]=T||0}),Oe},z=ie("row",Z),B=me(),R=P()(z,(W={},(0,y.Z)(W,"".concat(z,"-no-wrap"),J===!1),(0,y.Z)(W,"".concat(z,"-").concat(k),k),(0,y.Z)(W,"".concat(z,"-").concat(E),E),(0,y.Z)(W,"".concat(z,"-rtl"),ne==="rtl"),W),d),re={},Re=B[0]>0?B[0]/-2:void 0,Ne=B[1]>0?B[1]/-2:void 0;if(Re&&(re.marginLeft=Re,re.marginRight=Re),K){var Ae=(0,V.Z)(B,2);re.rowGap=Ae[1]}else Ne&&(re.marginTop=Ne,re.marginBottom=Ne);var Ee=S.useMemo(function(){return{gutter:B,wrap:J,supportFlexGap:K}},[B,J,K]);return S.createElement(Ce.Z.Provider,{value:Ee},S.createElement("div",(0,s.Z)({},ce,{className:R,style:(0,s.Z)((0,s.Z)({},re),_),ref:xe}),c))});m.displayName="Row",b.Z=m},6999:function(q,b,n){"use strict";var s=n(43673),y=n.n(s),a=n(37753),V=n.n(a)},71230:function(q,b,n){"use strict";var s=n(92820);b.Z=s.Z},13062:function(q,b,n){"use strict";var s=n(43673),y=n.n(s),a=n(6999)},97314:function(q,b,n){"use strict";n.d(b,{Z:function(){return ut}});var s=n(22122),y=n(96156),a=n(67294),V=n(94184),S=n.n(V),G=n(42550),P=n(86032),w=n(21687),Ce=function(r,i){var o={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&i.indexOf(e)<0&&(o[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(o[e[t]]=r[e[t]]);return o},ue=function(i,o){var e=i.prefixCls,t=i.component,l=t===void 0?"article":t,f=i.className,p=i["aria-label"],v=i.setContentRef,C=i.children,O=Ce(i,["prefixCls","component","className","aria-label","setContentRef","children"]),x=o;return v&&((0,w.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),x=(0,G.sQ)(o,v)),a.createElement(P.C,null,function(A){var $=A.getPrefixCls,ve=A.direction,oe=l,H=$("typography",e),Ze=S()(H,(0,y.Z)({},"".concat(H,"-rtl"),ve==="rtl"),f);return a.createElement(oe,(0,s.Z)({className:Ze,"aria-label":p,ref:x},O),C)})},X=a.forwardRef(ue);X.displayName="Typography";var ee=X,u=ee,U=n(90484),M=n(98423),m=n(85061),g=n(6610),xe=n(5991),W=n(10379),Z=n(44144),k=n(50344),E=n(20640),d=n.n(E),_=n(8212),c=n(79508),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},te=h,J=n(27029),ce=function(i,o){return a.createElement(J.Z,Object.assign({},i,{ref:o,icon:te}))};ce.displayName="CopyOutlined";var de=a.forwardRef(ce),ie=n(4084),ne=n(58184),_e=n(42051),D=n(34952),ae=n(32637),ye=n(31808),K=n(69713),be=n(28481),me=n(15105),z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},B=z,R=function(i,o){return a.createElement(J.Z,Object.assign({},i,{ref:o,icon:B}))};R.displayName="EnterOutlined";var re=a.forwardRef(R),Re=n(96330),Ne=function(i){var o=i.prefixCls,e=i["aria-label"],t=i.className,l=i.style,f=i.direction,p=i.maxLength,v=i.autoSize,C=v===void 0?!0:v,O=i.value,x=i.onSave,A=i.onCancel,$=i.onEnd,ve=a.useRef(),oe=a.useRef(!1),H=a.useRef(),Ze=a.useState(O),Te=(0,be.Z)(Ze,2),le=Te[0],we=Te[1];a.useEffect(function(){we(O)},[O]),a.useEffect(function(){if(ve.current&&ve.current.resizableTextArea){var j=ve.current.resizableTextArea.textArea;j.focus();var F=j.value.length;j.setSelectionRange(F,F)}},[]);var N=function(F){var Y=F.target;we(Y.value.replace(/[\n\r]/g,""))},I=function(){oe.current=!0},se=function(){oe.current=!1},Q=function(F){var Y=F.keyCode;oe.current||(H.current=Y)},pe=function(){x(le.trim())},Se=function(F){var Y=F.keyCode,et=F.ctrlKey,tt=F.altKey,nt=F.metaKey,at=F.shiftKey;H.current===Y&&!oe.current&&!et&&!tt&&!nt&&!at&&(Y===me.Z.ENTER?(pe(),$==null||$()):Y===me.Z.ESC&&A())},ge=function(){pe()},Me=S()(o,"".concat(o,"-edit-content"),(0,y.Z)({},"".concat(o,"-rtl"),f==="rtl"),t);return a.createElement("div",{className:Me,style:l},a.createElement(Re.Z,{ref:ve,maxLength:p,value:le,onChange:N,onKeyDown:Q,onKeyUp:Se,onCompositionStart:I,onCompositionEnd:se,onBlur:ge,"aria-label":e,autoSize:C}),a.createElement(re,{className:"".concat(o,"-edit-content-confirm")}))},Ae=Ne,Ee=n(73935),Ue=1,Oe=3,he=8,T,Le={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function Pe(r){if(!r)return 0;var i=r.match(/^\d*(\.\d*)?/);return i?Number(i[0]):0}function Ie(r){var i=Array.prototype.slice.apply(r);return i.map(function(o){return"".concat(o,": ").concat(r.getPropertyValue(o),";")}).join("")}function Ve(r){var i=[];return r.forEach(function(o){var e=i[i.length-1];typeof o=="string"&&typeof e=="string"?i[i.length-1]+=o:i.push(o)}),i}function L(r,i){r.setAttribute("aria-hidden","true");var o=window.getComputedStyle(i),e=Ie(o);r.setAttribute("style",e),r.style.position="fixed",r.style.left="0",r.style.height="auto",r.style.minHeight="auto",r.style.maxHeight="auto",r.style.top="-999999px",r.style.zIndex="-1000",r.style.textOverflow="clip",r.style.whiteSpace="normal",r.style.webkitLineClamp="none"}function Xe(r){var i=document.createElement("div");L(i,r),i.appendChild(document.createTextNode("text")),document.body.appendChild(i);var o=i.offsetHeight,e=Pe(window.getComputedStyle(r).lineHeight);return document.body.removeChild(i),o>e?o:e}var fe=function(r,i,o,e,t){T||(T=document.createElement("div"),T.setAttribute("aria-hidden","true")),T.parentNode||document.body.appendChild(T);var l=i.rows,f=i.suffix,p=f===void 0?"":f,v=window.getComputedStyle(r),C=Xe(r),O=Math.floor(C)*(l+1)+Pe(v.paddingTop)+Pe(v.paddingBottom);L(T,r);var x=Ve((0,k.Z)(o));(0,Ee.render)(a.createElement("div",{style:Le},a.createElement("span",{style:Le},x,p),a.createElement("span",{style:Le},e)),T);function A(){return Math.ceil(T.getBoundingClientRect().height)<O}if(A())return(0,Ee.unmountComponentAtNode)(T),{content:o,text:T.innerHTML,ellipsis:!1};var $=Array.prototype.slice.apply(T.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(N){var I=N.nodeType;return I!==he}),ve=Array.prototype.slice.apply(T.childNodes[0].childNodes[1].cloneNode(!0).childNodes);(0,Ee.unmountComponentAtNode)(T);var oe=[];T.innerHTML="";var H=document.createElement("span");T.appendChild(H);var Ze=document.createTextNode(t+p);H.appendChild(Ze),ve.forEach(function(N){T.appendChild(N)});function Te(N){H.insertBefore(N,Ze)}function le(N,I){var se=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,Q=arguments.length>3&&arguments[3]!==void 0?arguments[3]:I.length,pe=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,Se=Math.floor((se+Q)/2),ge=I.slice(0,Se);if(N.textContent=ge,se>=Q-1)for(var Me=Q;Me>=se;Me-=1){var j=I.slice(0,Me);if(N.textContent=j,A()||!j)return Me===I.length?{finished:!1,reactNode:I}:{finished:!0,reactNode:j}}return A()?le(N,I,Se,Q,Se):le(N,I,se,Se,pe)}function we(N,I){var se=N.nodeType;if(se===Ue)return Te(N),A()?{finished:!1,reactNode:x[I]}:(H.removeChild(N),{finished:!0,reactNode:null});if(se===Oe){var Q=N.textContent||"",pe=document.createTextNode(Q);return Te(pe),le(pe,Q)}return{finished:!1,reactNode:null}}return $.some(function(N,I){var se=we(N,I),Q=se.finished,pe=se.reactNode;return pe&&oe.push(pe),Q}),{content:oe,text:T.innerHTML,ellipsis:!0}},Je=function(r,i){var o={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&i.indexOf(e)<0&&(o[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(o[e[t]]=r[e[t]]);return o},He=(0,ye.GL)("webkitLineClamp"),Qe=(0,ye.GL)("textOverflow");function Ge(r,i){var o=r.mark,e=r.code,t=r.underline,l=r.delete,f=r.strong,p=r.keyboard,v=r.italic,C=i;function O(x,A){!x||(C=a.createElement(A,{},C))}return O(f,"strong"),O(t,"u"),O(l,"del"),O(e,"code"),O(o,"mark"),O(p,"kbd"),O(v,"i"),C}function Ke(r,i,o){return r===!0||r===void 0?i:r||o&&i}var ke="...",ze=function(r){(0,W.Z)(o,r);var i=(0,Z.Z)(o);function o(){var e;return(0,g.Z)(this,o),e=i.apply(this,arguments),e.contentRef=a.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,l=e.context.getPrefixCls;return l("typography",t)},e.onExpandClick=function(t){var l,f=e.getEllipsis(),p=f.onExpand;e.setState({expanded:!0}),(l=p)===null||l===void 0||l(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var l=e.getEditable(),f=l.onChange;f==null||f(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,l;(l=(t=e.getEditable()).onCancel)===null||l===void 0||l.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var l=e.props,f=l.children,p=l.copyable,v=(0,s.Z)({},(0,U.Z)(p)==="object"?p:null);v.text===void 0&&(v.text=String(f)),d()(v.text||""),e.setState({copied:!0},function(){v.onCopy&&v.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var l=e.getEditable(),f=l.onStart;t&&f&&f(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){ae.Z.cancel(e.rafId),e.rafId=(0,ae.Z)(function(){e.syncEllipsis()})},e}return(0,xe.Z)(o,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var l=this.props.children,f=this.getEllipsis(),p=this.getEllipsis(t);(l!==t.children||f.rows!==p.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),ae.Z.cancel(this.rafId)}},{key:"getEditable",value:function(t){var l=this.state.edit,f=t||this.props,p=f.editable;return p?(0,s.Z)({editing:l},(0,U.Z)(p)==="object"?p:null):{editing:l}}},{key:"getEllipsis",value:function(t){var l=t||this.props,f=l.ellipsis;return f?(0,s.Z)({rows:1,expandable:!1},(0,U.Z)(f)==="object"?f:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,l=this.props,f=l.editable,p=l.copyable,v=this.getEllipsis(),C=v.rows,O=v.expandable,x=v.suffix,A=v.onEllipsis,$=v.tooltip;return x||$||f||p||O||!t||A?!1:C===1?Qe:He}},{key:"syncEllipsis",value:function(){var t=this.state,l=t.ellipsisText,f=t.isEllipsis,p=t.expanded,v=this.getEllipsis(),C=v.rows,O=v.suffix,x=v.onEllipsis,A=this.props.children;if(!(!C||C<0||!this.contentRef.current||p)&&!this.canUseCSSEllipsis()){(0,w.Z)((0,k.Z)(A).every(function(Ze){return typeof Ze=="string"}),"Typography","`ellipsis` should use string as children only.");var $=fe(this.contentRef.current,{rows:C,suffix:O},A,this.renderOperations(!0),ke),ve=$.content,oe=$.text,H=$.ellipsis;(l!==oe||f!==H)&&(this.setState({ellipsisText:oe,ellipsisContent:ve,isEllipsis:H}),f!==H&&x&&x(H))}}},{key:"renderExpand",value:function(t){var l=this.getEllipsis(),f=l.expandable,p=l.symbol,v=this.state,C=v.expanded,O=v.isEllipsis;if(!f||!t&&(C||!O))return null;var x;return p?x=p:x=this.expandStr,a.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},x)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var l=t.icon,f=t.tooltip,p=(0,k.Z)(f)[0]||this.editStr,v=typeof p=="string"?p:"";return a.createElement(K.Z,{key:"edit",title:f===!1?"":p},a.createElement(D.Z,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":v},l||a.createElement(_.Z,{role:"button"})))}}},{key:"renderCopy",value:function(){var t=this.state.copied,l=this.props.copyable;if(!!l){var f=this.getPrefixCls(),p=l.tooltips,v=l.icon,C=Array.isArray(p)?p:[p],O=Array.isArray(v)?v:[v],x=t?Ke(C[1],this.copiedStr):Ke(C[0],this.copyStr),A=t?this.copiedStr:this.copyStr,$=typeof x=="string"?x:A;return a.createElement(K.Z,{key:"copy",title:x},a.createElement(D.Z,{className:S()("".concat(f,"-copy"),t&&"".concat(f,"-copy-success")),onClick:this.onCopyClick,"aria-label":$},t?Ke(O[1],a.createElement(c.Z,null),!0):Ke(O[0],a.createElement(de,null),!0)))}}},{key:"renderEditInput",value:function(){var t=this.props,l=t.children,f=t.className,p=t.style,v=this.context.direction,C=this.getEditable(),O=C.maxLength,x=C.autoSize,A=C.onEnd;return a.createElement(Ae,{value:typeof l=="string"?l:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:A,prefixCls:this.getPrefixCls(),className:f,style:p,direction:v,maxLength:O,autoSize:x})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(l){return l})}},{key:"renderContent",value:function(){var t=this,l=this.state,f=l.ellipsisContent,p=l.isEllipsis,v=l.expanded,C=this.props,O=C.component,x=C.children,A=C.className,$=C.type,ve=C.disabled,oe=C.style,H=Je(C,["component","children","className","type","disabled","style"]),Ze=this.context.direction,Te=this.getEllipsis(),le=Te.rows,we=Te.suffix,N=Te.tooltip,I=this.getPrefixCls(),se=(0,M.Z)(H,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat((0,m.Z)(ne.nf))),Q=this.canUseCSSEllipsis(),pe=le===1&&Q,Se=le&&le>1&&Q,ge=x;if(le&&p&&!v&&!Q){var Me=H.title,j=Me||"";!Me&&(typeof x=="string"||typeof x=="number")&&(j=String(x)),j=j.slice(String(f||"").length),ge=a.createElement(a.Fragment,null,f,a.createElement("span",{title:j,"aria-hidden":"true"},ke),we),N&&(ge=a.createElement(K.Z,{title:N===!0?x:N},a.createElement("span",null,ge)))}else ge=a.createElement(a.Fragment,null,x,we);return ge=Ge(this.props,ge),a.createElement(_e.Z,{componentName:"Text"},function(F){var Y,et=F.edit,tt=F.copy,nt=F.copied,at=F.expand;return t.editStr=et,t.copyStr=tt,t.copiedStr=nt,t.expandStr=at,a.createElement(ie.Z,{onResize:t.resizeOnNextFrame,disabled:Q},a.createElement(u,(0,s.Z)({className:S()((Y={},(0,y.Z)(Y,"".concat(I,"-").concat($),$),(0,y.Z)(Y,"".concat(I,"-disabled"),ve),(0,y.Z)(Y,"".concat(I,"-ellipsis"),le),(0,y.Z)(Y,"".concat(I,"-single-line"),le===1),(0,y.Z)(Y,"".concat(I,"-ellipsis-single-line"),pe),(0,y.Z)(Y,"".concat(I,"-ellipsis-multiple-line"),Se),Y),A),style:(0,s.Z)((0,s.Z)({},oe),{WebkitLineClamp:Se?le:void 0}),component:O,ref:t.contentRef,direction:Ze},se),ge,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),l=t.editing;return l?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var l=t.children,f=t.editable;return(0,w.Z)(!f||typeof l=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),o}(a.Component);ze.contextType=P.E_,ze.defaultProps={children:""};var je=ze,Ye=function(r,i){var o={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&i.indexOf(e)<0&&(o[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(o[e[t]]=r[e[t]]);return o},Fe=function(i){var o=i.ellipsis,e=Ye(i,["ellipsis"]),t=a.useMemo(function(){return o&&(0,U.Z)(o)==="object"?(0,M.Z)(o,["expandable","rows"]):o},[o]);return(0,w.Z)((0,U.Z)(o)!=="object"||!o||!("expandable"in o)&&!("rows"in o),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),a.createElement(je,(0,s.Z)({},e,{ellipsis:t,component:"span"}))},qe=Fe,Be=function(r,i){var o={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&i.indexOf(e)<0&&(o[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(o[e[t]]=r[e[t]]);return o},We=function(i,o){var e=i.ellipsis,t=i.rel,l=Be(i,["ellipsis","rel"]);(0,w.Z)((0,U.Z)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var f=a.useRef(null);a.useImperativeHandle(o,function(){var v;return(v=f.current)===null||v===void 0?void 0:v.contentRef.current});var p=(0,s.Z)((0,s.Z)({},l),{rel:t===void 0&&l.target==="_blank"?"noopener noreferrer":t});return delete p.navigate,a.createElement(je,(0,s.Z)({},p,{ref:f,ellipsis:!!e,component:"a"}))},De=a.forwardRef(We),rt=n(93355),it=function(r,i){var o={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&i.indexOf(e)<0&&(o[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(o[e[t]]=r[e[t]]);return o},ot=(0,rt.a)(1,2,3,4,5),lt=function(i){var o=i.level,e=o===void 0?1:o,t=it(i,["level"]),l;return ot.indexOf(e)!==-1?l="h".concat(e):((0,w.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),l="h1"),a.createElement(je,(0,s.Z)({},t,{component:l}))},st=lt,ct=function(i){return a.createElement(je,(0,s.Z)({},i,{component:"div"}))},dt=ct,$e=u;$e.Text=qe,$e.Link=De,$e.Title=st,$e.Paragraph=dt;var ut=$e},402:function(q,b,n){"use strict";var s=n(43673),y=n.n(s),a=n(34719),V=n.n(a),S=n(22385),G=n(47673)},20640:function(q,b,n){"use strict";var s=n(11742),y={"text/plain":"Text","text/html":"Url",default:"Text"},a="Copy to clipboard: #{key}, Enter";function V(G){var P=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return G.replace(/#{\s*key\s*}/g,P)}function S(G,P){var w,Ce,ue,X,ee,u,U=!1;P||(P={}),w=P.debug||!1;try{ue=s(),X=document.createRange(),ee=document.getSelection(),u=document.createElement("span"),u.textContent=G,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(m){if(m.stopPropagation(),P.format)if(m.preventDefault(),typeof m.clipboardData=="undefined"){w&&console.warn("unable to use e.clipboardData"),w&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var g=y[P.format]||y.default;window.clipboardData.setData(g,G)}else m.clipboardData.clearData(),m.clipboardData.setData(P.format,G);P.onCopy&&(m.preventDefault(),P.onCopy(m.clipboardData))}),document.body.appendChild(u),X.selectNodeContents(u),ee.addRange(X);var M=document.execCommand("copy");if(!M)throw new Error("copy command was unsuccessful");U=!0}catch(m){w&&console.error("unable to copy using execCommand: ",m),w&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(P.format||"text",G),P.onCopy&&P.onCopy(window.clipboardData),U=!0}catch(g){w&&console.error("unable to copy using clipboardData: ",g),w&&console.error("falling back to prompt"),Ce=V("message"in P?P.message:a),window.prompt(Ce,G)}}finally{ee&&(typeof ee.removeRange=="function"?ee.removeRange(X):ee.removeAllRanges()),u&&document.body.removeChild(u),ue()}return U}q.exports=S},11742:function(q){q.exports=function(){var b=document.getSelection();if(!b.rangeCount)return function(){};for(var n=document.activeElement,s=[],y=0;y<b.rangeCount;y++)s.push(b.getRangeAt(y));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null;break}return b.removeAllRanges(),function(){b.type==="Caret"&&b.removeAllRanges(),b.rangeCount||s.forEach(function(a){b.addRange(a)}),n&&n.focus()}}}}]);