(self.webpackChunkcookbook_web=self.webpackChunkcookbook_web||[]).push([[371],{19422:function(){},44320:function(V,W,n){"use strict";n.r(W);var b=n(58024),L=n(39144),M=n(49111),d=n(19650),D=n(98858),f=n(4914),g=n(12968),C=n(90933),U=n(67294),R=n(70844),P=n(48971),x=n(19611),K=n(25296),E=n(85893);W.default=function(){var T,B=(0,P.QT)("/api/get_all_recipes/"),p=B.data;return(0,E.jsx)(R.ZP,{title:"Home",children:(0,E.jsx)(L.Z,{title:"Most Liked Recipes",children:(0,E.jsx)(d.Z,{direction:"vertical",children:p!=null&&p.recipes?p==null||(T=p.recipes)===null||T===void 0?void 0:T.map(function(O){return(0,E.jsx)(x.rU,{to:"/recipe/".concat(O.recipeId,"/"),children:(0,E.jsx)(L.Z,{hoverable:!0,children:(0,E.jsxs)(d.Z,{size:"large",children:[(0,E.jsx)(C.Z,{preview:!1,alt:"".concat(O.recipeTitle," Picture"),style:{width:200,height:200,objectFit:"cover"},src:O.recipePicture}),(0,E.jsx)(f.Z,{title:O.recipeTitle,children:(0,E.jsx)(f.Z.Item,{children:(0,E.jsx)(K.Z,{ellipsis:"...",clamp:3,children:O.recipeDirection})})})]})})},"recipe-".concat(O.recipeId))}):null})})})}},4914:function(V,W,n){"use strict";n.d(W,{K:function(){return $},Z:function(){return w}});var b=n(96156),L=n(28481),M=n(90484),d=n(67294),D=n(94184),f=n.n(D),g=n(50344),C=n(24308),U=n(21687),R=n(86032),P=n(22122);function x(u){return u!=null}var K=function(i){var a=i.itemPrefixCls,l=i.component,r=i.span,o=i.className,e=i.style,t=i.labelStyle,c=i.contentStyle,m=i.bordered,s=i.label,v=i.content,h=i.colon,Z=l;if(m){var y;return d.createElement(Z,{className:f()((y={},(0,b.Z)(y,"".concat(a,"-item-label"),x(s)),(0,b.Z)(y,"".concat(a,"-item-content"),x(v)),y),o),style:e,colSpan:r},x(s)&&d.createElement("span",{style:t},s),x(v)&&d.createElement("span",{style:c},v))}return d.createElement(Z,{className:f()("".concat(a,"-item"),o),style:e,colSpan:r},d.createElement("div",{className:"".concat(a,"-item-container")},s&&d.createElement("span",{className:f()("".concat(a,"-item-label"),(0,b.Z)({},"".concat(a,"-item-no-colon"),!h)),style:t},s),v&&d.createElement("span",{className:f()("".concat(a,"-item-content")),style:c},v)))},E=K;function T(u,i,a){var l=i.colon,r=i.prefixCls,o=i.bordered,e=a.component,t=a.type,c=a.showLabel,m=a.showContent,s=a.labelStyle,v=a.contentStyle;return u.map(function(h,Z){var y=h.props,Y=y.label,G=y.children,k=y.prefixCls,z=k===void 0?r:k,H=y.className,N=y.style,Q=y.labelStyle,F=y.contentStyle,J=y.span,q=J===void 0?1:J,_=h.key;return typeof e=="string"?d.createElement(E,{key:"".concat(t,"-").concat(_||Z),className:H,style:N,labelStyle:(0,P.Z)((0,P.Z)({},s),Q),contentStyle:(0,P.Z)((0,P.Z)({},v),F),span:q,colon:l,component:e,itemPrefixCls:z,bordered:o,label:c?Y:null,content:m?G:null}):[d.createElement(E,{key:"label-".concat(_||Z),className:H,style:(0,P.Z)((0,P.Z)((0,P.Z)({},s),N),Q),span:1,colon:l,component:e[0],itemPrefixCls:z,bordered:o,label:Y}),d.createElement(E,{key:"content-".concat(_||Z),className:H,style:(0,P.Z)((0,P.Z)((0,P.Z)({},v),N),F),span:q*2-1,component:e[1],itemPrefixCls:z,bordered:o,content:G})]})}var B=function(i){var a=d.useContext($),l=i.prefixCls,r=i.vertical,o=i.row,e=i.index,t=i.bordered;return r?d.createElement(d.Fragment,null,d.createElement("tr",{key:"label-".concat(e),className:"".concat(l,"-row")},T(o,i,(0,P.Z)({component:"th",type:"label",showLabel:!0},a))),d.createElement("tr",{key:"content-".concat(e),className:"".concat(l,"-row")},T(o,i,(0,P.Z)({component:"td",type:"content",showContent:!0},a)))):d.createElement("tr",{key:e,className:"".concat(l,"-row")},T(o,i,(0,P.Z)({component:t?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},a)))},p=B,O=function(i){var a=i.children;return a},j=O,te=n(96159),$=d.createContext({}),X={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function S(u,i){if(typeof u=="number")return u;if((0,M.Z)(u)==="object")for(var a=0;a<C.c4.length;a++){var l=C.c4[a];if(i[l]&&u[l]!==void 0)return u[l]||X[l]}return 3}function I(u,i,a){var l=u;return(i===void 0||i>a)&&(l=(0,te.Tm)(u,{span:a}),(0,U.Z)(i===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),l}function oe(u,i){var a=(0,g.Z)(u).filter(function(e){return e}),l=[],r=[],o=i;return a.forEach(function(e,t){var c,m=(c=e.props)===null||c===void 0?void 0:c.span,s=m||1;if(t===a.length-1){r.push(I(e,m,o)),l.push(r);return}s<o?(o-=s,r.push(e)):(r.push(I(e,s,o)),l.push(r),o=i,r=[])}),l}function A(u){var i,a=u.prefixCls,l=u.title,r=u.extra,o=u.column,e=o===void 0?X:o,t=u.colon,c=t===void 0?!0:t,m=u.bordered,s=u.layout,v=u.children,h=u.className,Z=u.style,y=u.size,Y=u.labelStyle,G=u.contentStyle,k=d.useContext(R.E_),z=k.getPrefixCls,H=k.direction,N=z("descriptions",a),Q=d.useState({}),F=(0,L.Z)(Q,2),J=F[0],q=F[1],_=S(e,J);d.useEffect(function(){var ne=C.ZP.subscribe(function(ee){(0,M.Z)(e)==="object"&&q(ee)});return function(){C.ZP.unsubscribe(ne)}},[]);var re=oe(v,_);return d.createElement($.Provider,{value:{labelStyle:Y,contentStyle:G}},d.createElement("div",{className:f()(N,(i={},(0,b.Z)(i,"".concat(N,"-").concat(y),y&&y!=="default"),(0,b.Z)(i,"".concat(N,"-bordered"),!!m),(0,b.Z)(i,"".concat(N,"-rtl"),H==="rtl"),i),h),style:Z},(l||r)&&d.createElement("div",{className:"".concat(N,"-header")},l&&d.createElement("div",{className:"".concat(N,"-title")},l),r&&d.createElement("div",{className:"".concat(N,"-extra")},r)),d.createElement("div",{className:"".concat(N,"-view")},d.createElement("table",null,d.createElement("tbody",null,re.map(function(ne,ee){return d.createElement(p,{key:ee,index:ee,colon:c,prefixCls:N,vertical:s==="vertical",bordered:m,row:ne})}))))))}A.Item=j;var w=A},98858:function(V,W,n){"use strict";var b=n(43673),L=n.n(b),M=n(19422),d=n.n(M)},2016:function(V,W,n){"use strict";n.d(W,{Z:function(){return i}});var b=n(6610),L=n(5991),M=n(10379),d=n(44144),D=n(90484),f=n(67294),g=n(75164),C=n(59015),U=n(98924),R=n(74204);function P(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!a)return{};var r=l.element,o=r===void 0?document.body:r,e={},t=Object.keys(a);return t.forEach(function(c){e[c]=o.style[c]}),t.forEach(function(c){o.style[c]=a[c]}),e}var x=P;function K(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var E={},T=function(a){if(!(!K()&&!a)){var l="ant-scrolling-effect",r=new RegExp("".concat(l),"g"),o=document.body.className;if(a){if(!r.test(o))return;x(E),E={},document.body.className=o.replace(r,"").trim();return}var e=(0,R.Z)();if(e&&(E=x({position:"relative",width:"calc(100% - ".concat(e,"px)")}),!r.test(o))){var t="".concat(o," ").concat(l);document.body.className=t.trim()}}},B=n(85061),p=[],O="ant-scrolling-effect",j=new RegExp("".concat(O),"g"),te=0,$=new Map,X=function a(l){var r=this;(0,b.Z)(this,a),this.lockTarget=void 0,this.options=void 0,this.getContainer=function(){var o;return(o=r.options)===null||o===void 0?void 0:o.container},this.reLock=function(o){var e=p.find(function(t){var c=t.target;return c===r.lockTarget});e&&r.unLock(),r.options=o,e&&(e.options=o,r.lock())},this.lock=function(){var o;if(!p.some(function(s){var v=s.target;return v===r.lockTarget})){if(p.some(function(s){var v,h=s.options;return(h==null?void 0:h.container)===((v=r.options)===null||v===void 0?void 0:v.container)})){p=[].concat((0,B.Z)(p),[{target:r.lockTarget,options:r.options}]);return}var e=0,t=((o=r.options)===null||o===void 0?void 0:o.container)||document.body;(t===document.body&&window.innerWidth-document.documentElement.clientWidth>0||t.scrollHeight>t.clientHeight)&&(e=(0,R.Z)());var c=t.className;if(p.filter(function(s){var v,h=s.options;return(h==null?void 0:h.container)===((v=r.options)===null||v===void 0?void 0:v.container)}).length===0&&$.set(t,x({width:e!==0?"calc(100% - ".concat(e,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:t})),!j.test(c)){var m="".concat(c," ").concat(O);t.className=m.trim()}p=[].concat((0,B.Z)(p),[{target:r.lockTarget,options:r.options}])}},this.unLock=function(){var o,e=p.find(function(m){var s=m.target;return s===r.lockTarget});if(p=p.filter(function(m){var s=m.target;return s!==r.lockTarget}),!(!e||p.some(function(m){var s,v=m.options;return(v==null?void 0:v.container)===((s=e.options)===null||s===void 0?void 0:s.container)}))){var t=((o=r.options)===null||o===void 0?void 0:o.container)||document.body,c=t.className;!j.test(c)||(x($.get(t),{element:t}),$.delete(t),t.className=t.className.replace(j,"").trim())}},this.lockTarget=te++,this.options=l},S=0,I=(0,U.Z)();function oe(){return 0}var A={},w=function(l){if(!I)return null;if(l){if(typeof l=="string")return document.querySelectorAll(l)[0];if(typeof l=="function")return l();if((0,D.Z)(l)==="object"&&l instanceof window.HTMLElement)return l}return document.body},u=function(a){(0,M.Z)(r,a);var l=(0,d.Z)(r);function r(o){var e;return(0,b.Z)(this,r),e=l.call(this,o),e.container=void 0,e.componentRef=f.createRef(),e.rafId=void 0,e.scrollLocker=void 0,e.renderComponent=void 0,e.updateScrollLocker=function(t){var c=t||{},m=c.visible,s=e.props,v=s.getContainer,h=s.visible;h&&h!==m&&I&&w(v)!==e.scrollLocker.getContainer()&&e.scrollLocker.reLock({container:w(v)})},e.updateOpenCount=function(t){var c=t||{},m=c.visible,s=c.getContainer,v=e.props,h=v.visible,Z=v.getContainer;h!==m&&I&&w(Z)===document.body&&(h&&!m?S+=1:t&&(S-=1));var y=typeof Z=="function"&&typeof s=="function";(y?Z.toString()!==s.toString():Z!==s)&&e.removeCurrentContainer()},e.attachToParent=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(t||e.container&&!e.container.parentNode){var c=w(e.props.getContainer);return c?(c.appendChild(e.container),!0):!1}return!0},e.getContainer=function(){return I?(e.container||(e.container=document.createElement("div"),e.attachToParent(!0)),e.setWrapperClassName(),e.container):null},e.setWrapperClassName=function(){var t=e.props.wrapperClassName;e.container&&t&&t!==e.container.className&&(e.container.className=t)},e.removeCurrentContainer=function(){var t,c;(t=e.container)===null||t===void 0||(c=t.parentNode)===null||c===void 0||c.removeChild(e.container)},e.switchScrollingEffect=function(){S===1&&!Object.keys(A).length?(T(),A=x({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"})):S||(x(A),A={},T(!0))},e.scrollLocker=new X({container:w(o.getContainer)}),e}return(0,L.Z)(r,[{key:"componentDidMount",value:function(){var e=this;this.updateOpenCount(),this.attachToParent()||(this.rafId=(0,g.Z)(function(){e.forceUpdate()}))}},{key:"componentDidUpdate",value:function(e){this.updateOpenCount(e),this.updateScrollLocker(e),this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.visible,c=e.getContainer;I&&w(c)===document.body&&(S=t&&S?S-1:S),this.removeCurrentContainer(),g.Z.cancel(this.rafId)}},{key:"render",value:function(){var e=this.props,t=e.children,c=e.forceRender,m=e.visible,s=null,v={getOpenCount:function(){return S},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect,scrollLocker:this.scrollLocker};return(c||m||this.componentRef.current)&&(s=f.createElement(C.Z,{getContainer:this.getContainer,ref:this.componentRef},t(v))),s}}]),r}(f.Component),i=u},74204:function(V,W,n){"use strict";n.d(W,{Z:function(){return L}});var b;function L(D){if(typeof document=="undefined")return 0;if(D||b===void 0){var f=document.createElement("div");f.style.width="100%",f.style.height="200px";var g=document.createElement("div"),C=g.style;C.position="absolute",C.top="0",C.left="0",C.pointerEvents="none",C.visibility="hidden",C.width="200px",C.height="150px",C.overflow="hidden",g.appendChild(f),document.body.appendChild(g);var U=f.offsetWidth;g.style.overflow="scroll";var R=f.offsetWidth;U===R&&(R=g.clientWidth),document.body.removeChild(g),b=U-R}return b}function M(D){var f=D.match(/^(.*)px$/),g=Number(f==null?void 0:f[1]);return Number.isNaN(g)?L():g}function d(D){if(typeof document=="undefined"||!D||!(D instanceof Element))return{width:0,height:0};var f=getComputedStyle(D,"::-webkit-scrollbar"),g=f.width,C=f.height;return{width:M(g),height:M(C)}}}}]);