(self.webpackChunkcookbook_web=self.webpackChunkcookbook_web||[]).push([[681],{34719:function(){},60202:function(J,Z,l){"use strict";l.r(Z),l.d(Z,{default:function(){return At}});var X=l(58024),M=l(39144),Y=l(43673),ye=l(34719),he=l(22385),$=l(47673),f=l(22122),S=l(96156),o=l(67294),q=l(94184),k=l.n(q),K=l(42550),m=l(86032),w=l(21687),te=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},R=function(r,i){var e=r.prefixCls,t=r.component,a=t===void 0?"article":t,s=r.className,c=r["aria-label"],u=r.setContentRef,d=r.children,v=te(r,["prefixCls","component","className","aria-label","setContentRef","children"]),p=i;return u&&((0,w.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),p=(0,K.sQ)(i,u)),o.createElement(m.C,null,function(h){var C=h.getPrefixCls,B=h.direction,N=a,x=C("typography",e),j=k()(x,(0,S.Z)({},"".concat(x,"-rtl"),B==="rtl"),s);return o.createElement(N,(0,f.Z)({className:j,"aria-label":c,ref:p},v),d)})},W=o.forwardRef(R);W.displayName="Typography";var De=W,Ee=De,G=l(90484),me=l(98423),Ze=l(85061),Be=l(6610),Pe=l(5991),Re=l(10379),Le=l(44144),ne=l(50344),we=l(20640),je=l.n(we),ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},Ie=ke,re=l(27029),ge=function(r,i){return o.createElement(re.Z,Object.assign({},r,{ref:i,icon:Ie}))};ge.displayName="EditOutlined";var ze=o.forwardRef(ge),He=l(79508),Me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},$e=Me,Ce=function(r,i){return o.createElement(re.Z,Object.assign({},r,{ref:i,icon:$e}))};Ce.displayName="CopyOutlined";var Ke=o.forwardRef(Ce),Ue=l(4084),Ve=l(69224),We=l(42051),xe=l(34952),ie=l(32637),be=l(31808),ae=l(69713),Ge=l(28481),Oe=l(15105),Xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},Qe=Xe,Se=function(r,i){return o.createElement(re.Z,Object.assign({},r,{ref:i,icon:Qe}))};Se.displayName="EnterOutlined";var Je=o.forwardRef(Se),Ye=l(45839),qe=function(r){var i=r.prefixCls,e=r["aria-label"],t=r.className,a=r.style,s=r.direction,c=r.maxLength,u=r.autoSize,d=u===void 0?!0:u,v=r.value,p=r.onSave,h=r.onCancel,C=r.onEnd,B=o.useRef(),N=o.useRef(!1),x=o.useRef(),j=o.useState(v),I=(0,Ge.Z)(j,2),T=I[0],V=I[1];o.useEffect(function(){V(v)},[v]),o.useEffect(function(){if(B.current&&B.current.resizableTextArea){var g=B.current.resizableTextArea.textArea;g.focus();var O=g.value.length;g.setSelectionRange(O,O)}},[]);var y=function(O){var A=O.target;V(A.value.replace(/[\n\r]/g,""))},E=function(){N.current=!0},D=function(){N.current=!1},F=function(O){var A=O.keyCode;N.current||(x.current=A)},P=function(){p(T.trim())},z=function(O){var A=O.keyCode,de=O.ctrlKey,pe=O.altKey,fe=O.metaKey,ve=O.shiftKey;x.current===A&&!N.current&&!de&&!pe&&!fe&&!ve&&(A===Oe.Z.ENTER?(P(),C==null||C()):A===Oe.Z.ESC&&h())},L=function(){P()},H=k()(i,"".concat(i,"-edit-content"),(0,S.Z)({},"".concat(i,"-rtl"),s==="rtl"),t);return o.createElement("div",{className:H,style:a},o.createElement(Ye.Z,{ref:B,maxLength:c,value:T,onChange:y,onKeyDown:F,onKeyUp:z,onCompositionStart:E,onCompositionEnd:D,onBlur:L,"aria-label":e,autoSize:d}),o.createElement(Je,{className:"".concat(i,"-edit-content-confirm")}))},_e=qe,oe=l(73935),et=1,tt=3,nt=8,b,le={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function se(n){if(!n)return 0;var r=n.match(/^\d*(\.\d*)?/);return r?Number(r[0]):0}function rt(n){var r=Array.prototype.slice.apply(n);return r.map(function(i){return"".concat(i,": ").concat(n.getPropertyValue(i),";")}).join("")}function it(n){var r=[];return n.forEach(function(i){var e=r[r.length-1];typeof i=="string"&&typeof e=="string"?r[r.length-1]+=i:r.push(i)}),r}function Fe(n,r){n.setAttribute("aria-hidden","true");var i=window.getComputedStyle(r),e=rt(i);n.setAttribute("style",e),n.style.position="fixed",n.style.left="0",n.style.height="auto",n.style.minHeight="auto",n.style.maxHeight="auto",n.style.top="-999999px",n.style.zIndex="-1000",n.style.textOverflow="clip",n.style.whiteSpace="normal",n.style.webkitLineClamp="none"}function at(n){var r=document.createElement("div");Fe(r,n),r.appendChild(document.createTextNode("text")),document.body.appendChild(r);var i=r.offsetHeight,e=se(window.getComputedStyle(n).lineHeight);return document.body.removeChild(r),i>e?i:e}var ot=function(n,r,i,e,t){b||(b=document.createElement("div"),b.setAttribute("aria-hidden","true")),b.parentNode||document.body.appendChild(b);var a=r.rows,s=r.suffix,c=s===void 0?"":s,u=window.getComputedStyle(n),d=at(n),v=Math.floor(d)*(a+1)+se(u.paddingTop)+se(u.paddingBottom);Fe(b,n);var p=it((0,ne.Z)(i));(0,oe.render)(o.createElement("div",{style:le},o.createElement("span",{style:le},p,c),o.createElement("span",{style:le},e)),b);function h(){return Math.ceil(b.getBoundingClientRect().height)<v}if(h())return(0,oe.unmountComponentAtNode)(b),{content:i,text:b.innerHTML,ellipsis:!1};var C=Array.prototype.slice.apply(b.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(y){var E=y.nodeType;return E!==nt}),B=Array.prototype.slice.apply(b.childNodes[0].childNodes[1].cloneNode(!0).childNodes);(0,oe.unmountComponentAtNode)(b);var N=[];b.innerHTML="";var x=document.createElement("span");b.appendChild(x);var j=document.createTextNode(t+c);x.appendChild(j),B.forEach(function(y){b.appendChild(y)});function I(y){x.insertBefore(y,j)}function T(y,E){var D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,F=arguments.length>3&&arguments[3]!==void 0?arguments[3]:E.length,P=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,z=Math.floor((D+F)/2),L=E.slice(0,z);if(y.textContent=L,D>=F-1)for(var H=F;H>=D;H-=1){var g=E.slice(0,H);if(y.textContent=g,h()||!g)return H===E.length?{finished:!1,reactNode:E}:{finished:!0,reactNode:g}}return h()?T(y,E,z,F,z):T(y,E,D,z,P)}function V(y,E){var D=y.nodeType;if(D===et)return I(y),h()?{finished:!1,reactNode:p[E]}:(x.removeChild(y),{finished:!0,reactNode:null});if(D===tt){var F=y.textContent||"",P=document.createTextNode(F);return I(P),T(P,F)}return{finished:!1,reactNode:null}}return C.some(function(y,E){var D=V(y,E),F=D.finished,P=D.reactNode;return P&&N.push(P),F}),{content:N,text:b.innerHTML,ellipsis:!0}},lt=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},st=(0,be.GL)("webkitLineClamp"),ut=(0,be.GL)("textOverflow");function ct(n,r){var i=n.mark,e=n.code,t=n.underline,a=n.delete,s=n.strong,c=n.keyboard,u=n.italic,d=r;function v(p,h){!p||(d=o.createElement(h,{},d))}return v(s,"strong"),v(t,"u"),v(a,"del"),v(e,"code"),v(i,"mark"),v(c,"kbd"),v(u,"i"),d}function _(n,r,i){return n===!0||n===void 0?r:n||i&&r}var Ae="...",ue=function(n){(0,Re.Z)(i,n);var r=(0,Le.Z)(i);function i(){var e;return(0,Be.Z)(this,i),e=r.apply(this,arguments),e.contentRef=o.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,a=e.context.getPrefixCls;return a("typography",t)},e.onExpandClick=function(t){var a,s=e.getEllipsis(),c=s.onExpand;e.setState({expanded:!0}),(a=c)===null||a===void 0||a(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var a=e.getEditable(),s=a.onChange;s==null||s(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,a;(a=(t=e.getEditable()).onCancel)===null||a===void 0||a.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var a=e.props,s=a.children,c=a.copyable,u=(0,f.Z)({},(0,G.Z)(c)==="object"?c:null);u.text===void 0&&(u.text=String(s)),je()(u.text||""),e.setState({copied:!0},function(){u.onCopy&&u.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var a=e.getEditable(),s=a.onStart;t&&s&&s(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){ie.Z.cancel(e.rafId),e.rafId=(0,ie.Z)(function(){e.syncEllipsis()})},e}return(0,Pe.Z)(i,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var a=this.props.children,s=this.getEllipsis(),c=this.getEllipsis(t);(a!==t.children||s.rows!==c.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),ie.Z.cancel(this.rafId)}},{key:"getEditable",value:function(t){var a=this.state.edit,s=t||this.props,c=s.editable;return c?(0,f.Z)({editing:a},(0,G.Z)(c)==="object"?c:null):{editing:a}}},{key:"getEllipsis",value:function(t){var a=t||this.props,s=a.ellipsis;return s?(0,f.Z)({rows:1,expandable:!1},(0,G.Z)(s)==="object"?s:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,a=this.props,s=a.editable,c=a.copyable,u=this.getEllipsis(),d=u.rows,v=u.expandable,p=u.suffix,h=u.onEllipsis,C=u.tooltip;return p||C||s||c||v||!t||h?!1:d===1?ut:st}},{key:"syncEllipsis",value:function(){var t=this.state,a=t.ellipsisText,s=t.isEllipsis,c=t.expanded,u=this.getEllipsis(),d=u.rows,v=u.suffix,p=u.onEllipsis,h=this.props.children;if(!(!d||d<0||!this.contentRef.current||c)&&!this.canUseCSSEllipsis()){(0,w.Z)((0,ne.Z)(h).every(function(j){return typeof j=="string"}),"Typography","`ellipsis` should use string as children only.");var C=ot(this.contentRef.current,{rows:d,suffix:v},h,this.renderOperations(!0),Ae),B=C.content,N=C.text,x=C.ellipsis;(a!==N||s!==x)&&(this.setState({ellipsisText:N,ellipsisContent:B,isEllipsis:x}),s!==x&&p&&p(x))}}},{key:"renderExpand",value:function(t){var a=this.getEllipsis(),s=a.expandable,c=a.symbol,u=this.state,d=u.expanded,v=u.isEllipsis;if(!s||!t&&(d||!v))return null;var p;return c?p=c:p=this.expandStr,o.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},p)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var a=t.icon,s=t.tooltip,c=(0,ne.Z)(s)[0]||this.editStr,u=typeof c=="string"?c:"";return o.createElement(ae.Z,{key:"edit",title:s===!1?"":c},o.createElement(xe.Z,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":u},a||o.createElement(ze,{role:"button"})))}}},{key:"renderCopy",value:function(){var t=this.state.copied,a=this.props.copyable;if(!!a){var s=this.getPrefixCls(),c=a.tooltips,u=a.icon,d=Array.isArray(c)?c:[c],v=Array.isArray(u)?u:[u],p=t?_(d[1],this.copiedStr):_(d[0],this.copyStr),h=t?this.copiedStr:this.copyStr,C=typeof p=="string"?p:h;return o.createElement(ae.Z,{key:"copy",title:p},o.createElement(xe.Z,{className:k()("".concat(s,"-copy"),t&&"".concat(s,"-copy-success")),onClick:this.onCopyClick,"aria-label":C},t?_(v[1],o.createElement(He.Z,null),!0):_(v[0],o.createElement(Ke,null),!0)))}}},{key:"renderEditInput",value:function(){var t=this.props,a=t.children,s=t.className,c=t.style,u=this.context.direction,d=this.getEditable(),v=d.maxLength,p=d.autoSize,h=d.onEnd;return o.createElement(_e,{value:typeof a=="string"?a:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:h,prefixCls:this.getPrefixCls(),className:s,style:c,direction:u,maxLength:v,autoSize:p})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(a){return a})}},{key:"renderContent",value:function(){var t=this,a=this.state,s=a.ellipsisContent,c=a.isEllipsis,u=a.expanded,d=this.props,v=d.component,p=d.children,h=d.className,C=d.type,B=d.disabled,N=d.style,x=lt(d,["component","children","className","type","disabled","style"]),j=this.context.direction,I=this.getEllipsis(),T=I.rows,V=I.suffix,y=I.tooltip,E=this.getPrefixCls(),D=(0,me.Z)(x,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat((0,Ze.Z)(Ve.nf))),F=this.canUseCSSEllipsis(),P=T===1&&F,z=T&&T>1&&F,L=p;if(T&&c&&!u&&!F){var H=x.title,g=H||"";!H&&(typeof p=="string"||typeof p=="number")&&(g=String(p)),g=g.slice(String(s||"").length),L=o.createElement(o.Fragment,null,s,o.createElement("span",{title:g,"aria-hidden":"true"},Ae),V),y&&(L=o.createElement(ae.Z,{title:y===!0?p:y},o.createElement("span",null,L)))}else L=o.createElement(o.Fragment,null,p,V);return L=ct(this.props,L),o.createElement(We.Z,{componentName:"Text"},function(O){var A,de=O.edit,pe=O.copy,fe=O.copied,ve=O.expand;return t.editStr=de,t.copyStr=pe,t.copiedStr=fe,t.expandStr=ve,o.createElement(Ue.Z,{onResize:t.resizeOnNextFrame,disabled:F},o.createElement(Ee,(0,f.Z)({className:k()((A={},(0,S.Z)(A,"".concat(E,"-").concat(C),C),(0,S.Z)(A,"".concat(E,"-disabled"),B),(0,S.Z)(A,"".concat(E,"-ellipsis"),T),(0,S.Z)(A,"".concat(E,"-single-line"),T===1),(0,S.Z)(A,"".concat(E,"-ellipsis-single-line"),P),(0,S.Z)(A,"".concat(E,"-ellipsis-multiple-line"),z),A),h),style:(0,f.Z)((0,f.Z)({},N),{WebkitLineClamp:z?T:void 0}),component:v,ref:t.contentRef,direction:j},D),L,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),a=t.editing;return a?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var a=t.children,s=t.editable;return(0,w.Z)(!s||typeof a=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),i}(o.Component);ue.contextType=m.E_,ue.defaultProps={children:""};var ee=ue,dt=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},pt=function(r){var i=r.ellipsis,e=dt(r,["ellipsis"]),t=o.useMemo(function(){return i&&(0,G.Z)(i)==="object"?(0,me.Z)(i,["expandable","rows"]):i},[i]);return(0,w.Z)((0,G.Z)(i)!=="object"||!i||!("expandable"in i)&&!("rows"in i),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),o.createElement(ee,(0,f.Z)({},e,{ellipsis:t,component:"span"}))},ft=pt,vt=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},yt=function(r,i){var e=r.ellipsis,t=r.rel,a=vt(r,["ellipsis","rel"]);(0,w.Z)((0,G.Z)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var s=o.useRef(null);o.useImperativeHandle(i,function(){var u;return(u=s.current)===null||u===void 0?void 0:u.contentRef.current});var c=(0,f.Z)((0,f.Z)({},a),{rel:t===void 0&&a.target==="_blank"?"noopener noreferrer":t});return delete c.navigate,o.createElement(ee,(0,f.Z)({},c,{ref:s,ellipsis:!!e,component:"a"}))},ht=o.forwardRef(yt),Et=l(93355),mt=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},gt=(0,Et.a)(1,2,3,4,5),Ct=function(r){var i=r.level,e=i===void 0?1:i,t=mt(r,["level"]),a;return gt.indexOf(e)!==-1?a="h".concat(e):((0,w.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),a="h1"),o.createElement(ee,(0,f.Z)({},t,{component:a}))},xt=Ct,bt=function(r){return o.createElement(ee,(0,f.Z)({},r,{component:"div"}))},Ot=bt,Q=Ee;Q.Text=ft,Q.Link=ht,Q.Title=xt,Q.Paragraph=Ot;var ce=Q,St=l(70844),U=l(85893),Ft=ce.Title,Ne=ce.Paragraph,Te=ce.Text,At=function(){return(0,U.jsx)(St.ZP,{children:(0,U.jsxs)(M.Z,{children:[(0,U.jsx)(Ft,{children:"\u4ECB\u7ECD"}),(0,U.jsx)(Ne,{children:"\u8682\u8681\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u662F\u4E00\u4E2A\u5E9E\u5927\u4E14\u590D\u6742\u7684\u4F53\u7CFB\u3002\u8FD9\u7C7B\u4EA7\u54C1\u4E0D\u4EC5\u91CF\u7EA7\u5DE8\u5927\u4E14\u529F\u80FD\u590D\u6742\uFF0C\u800C\u4E14\u53D8\u52A8\u548C\u5E76\u53D1\u9891\u7E41\uFF0C\u5E38\u5E38\u9700\u8981\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u80FD\u591F\u5FEB\u901F\u7684\u505A\u51FA\u54CD\u5E94\u3002\u540C\u65F6\u8FD9\u7C7B\u4EA7\u54C1\u4E2D\u6709\u5B58\u5728\u5F88\u591A\u7C7B\u4F3C\u7684\u9875\u9762\u4EE5\u53CA\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u62BD\u8C61\u5F97\u5230\u4E00\u4E9B\u7A33\u5B9A\u4E14\u9AD8\u590D\u7528\u6027\u7684\u5185\u5BB9\u3002"}),(0,U.jsxs)(Ne,{children:["\u968F\u7740\u5546\u4E1A\u5316\u7684\u8D8B\u52BF\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u5BF9\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u6709\u4E86\u8FDB\u4E00\u6B65\u7684\u8981\u6C42\u3002\u5E26\u7740\u8FD9\u6837\u7684\u4E00\u4E2A\u7EC8\u6781\u76EE\u6807\uFF0C\u6211\u4EEC\uFF08\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\uFF09\u7ECF\u8FC7\u5927\u91CF\u7684\u9879\u76EE\u5B9E\u8DF5\u548C\u603B\u7ED3\uFF0C\u9010\u6B65\u6253\u78E8\u51FA\u4E00\u4E2A\u670D\u52A1\u4E8E\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u7684\u8BBE\u8BA1\u4F53\u7CFB Ant Design\u3002\u57FA\u4E8E",(0,U.jsx)(Te,{mark:!0,children:"\u300E\u786E\u5B9A\u300F\u548C\u300E\u81EA\u7136\u300F"}),"\u7684\u8BBE\u8BA1\u4EF7\u503C\u89C2\uFF0C\u901A\u8FC7\u6A21\u5757\u5316\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u964D\u4F4E\u5197\u4F59\u7684\u751F\u4EA7\u6210\u672C\uFF0C\u8BA9\u8BBE\u8BA1\u8005\u4E13\u6CE8\u4E8E",(0,U.jsx)(Te,{strong:!0,children:"\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C"}),"\u3002"]})]})})}},20640:function(J,Z,l){"use strict";var X=l(11742),M={"text/plain":"Text","text/html":"Url",default:"Text"},Y="Copy to clipboard: #{key}, Enter";function ye($){var f=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return $.replace(/#{\s*key\s*}/g,f)}function he($,f){var S,o,q,k,K,m,w=!1;f||(f={}),S=f.debug||!1;try{q=X(),k=document.createRange(),K=document.getSelection(),m=document.createElement("span"),m.textContent=$,m.style.all="unset",m.style.position="fixed",m.style.top=0,m.style.clip="rect(0, 0, 0, 0)",m.style.whiteSpace="pre",m.style.webkitUserSelect="text",m.style.MozUserSelect="text",m.style.msUserSelect="text",m.style.userSelect="text",m.addEventListener("copy",function(R){if(R.stopPropagation(),f.format)if(R.preventDefault(),typeof R.clipboardData=="undefined"){S&&console.warn("unable to use e.clipboardData"),S&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var W=M[f.format]||M.default;window.clipboardData.setData(W,$)}else R.clipboardData.clearData(),R.clipboardData.setData(f.format,$);f.onCopy&&(R.preventDefault(),f.onCopy(R.clipboardData))}),document.body.appendChild(m),k.selectNodeContents(m),K.addRange(k);var te=document.execCommand("copy");if(!te)throw new Error("copy command was unsuccessful");w=!0}catch(R){S&&console.error("unable to copy using execCommand: ",R),S&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(f.format||"text",$),f.onCopy&&f.onCopy(window.clipboardData),w=!0}catch(W){S&&console.error("unable to copy using clipboardData: ",W),S&&console.error("falling back to prompt"),o=ye("message"in f?f.message:Y),window.prompt(o,$)}}finally{K&&(typeof K.removeRange=="function"?K.removeRange(k):K.removeAllRanges()),m&&document.body.removeChild(m),q()}return w}J.exports=he},11742:function(J){J.exports=function(){var Z=document.getSelection();if(!Z.rangeCount)return function(){};for(var l=document.activeElement,X=[],M=0;M<Z.rangeCount;M++)X.push(Z.getRangeAt(M));switch(l.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":l.blur();break;default:l=null;break}return Z.removeAllRanges(),function(){Z.type==="Caret"&&Z.removeAllRanges(),Z.rangeCount||X.forEach(function(Y){Z.addRange(Y)}),l&&l.focus()}}}}]);
