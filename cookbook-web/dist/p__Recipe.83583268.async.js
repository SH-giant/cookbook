(self.webpackChunkcookbook_web=self.webpackChunkcookbook_web||[]).push([[341],{1460:function(U){U.exports={"comment-action":"comment-action___35cH_","comment-action-liked":"comment-action-liked___2PBY7","recipe-img":"recipe-img___2j0aT",desc:"desc___2m1Zw","page-card":"page-card___3B0Mq"}},9887:function(U,x,t){"use strict";t.r(x),t.d(x,{default:function(){return b}});var w=t(49111),Z=t(19650),q=t(18313),y=t(20807),ee=t(60663),B=t(31990),te=t(94233),S=t(51890),ne=t(98858),I=t(4914),_e=t(20228),F=t(11382),N=t(86582),se=t(57663),z=t(60404),ae=t(34792),g=t(48086),oe=t(9715),E=t(82482),T=t(2824),Y=t(80177),H=t(58812),Q=t(70844),K=t(19630),v=t(48971),l=t(30202),V=t(1460),d=t.n(V),W=t(88793),X=t(17566),h=t(67294),n=t(85893),$=function(r){var R=r.onRefresh,u=E.Z.useForm(),c=(0,T.Z)(u,1),o=c[0],f=(0,K.UO)(),P=f.recipeId,D=(0,v.QT)(function(a){return{url:"/api/recipe/".concat(P,"/add_review/"),method:"post",data:a}},{manual:!0,onSuccess:function(s){s!=null&&s.userName&&g.default.success("Successfully commented.")}}),e=D.run,M=o.getFieldValue,C=o.resetFields,L=o.submit,O=function(){var s=M("content");if(!s){g.default.warn("Empty content!");return}L(),e({id:3,content:s}),C(),setTimeout(function(){R()},100)};return(0,n.jsxs)(E.Z,{form:o,children:[(0,n.jsx)(E.Z.Item,{name:"content",children:(0,n.jsx)(X.Z,{rows:4})}),(0,n.jsx)(E.Z.Item,{children:(0,n.jsx)(z.Z,{onClick:O,type:"primary",children:"Add Comment"})})]})};function b(){var m,r,R=(0,h.useState)([]),u=(0,T.Z)(R,2),c=u[0],o=u[1],f=(0,K.UO)(),P=f.recipeId,D=(0,v.QT)("/api/recipe/".concat(P,"/"),{onSuccess:function(_){for(var A=(0,N.Z)(c),p=0;p<(_==null||(j=_.reviews)===null||j===void 0?void 0:j.length)-c.length;p++){var j;A.unshift(W.aY[Math.floor(Math.random()*W.aY.length)])}o(A)}}),e=D.data,M=D.run,C=(0,v.md)(),L=(0,h.useState)(!1),O=(0,T.Z)(L,2),a=O[0],s=O[1],G=(0,v.QT)("/api/recipe/".concat(P,"/rec_add_like/"),{manual:!0}),J=G.run,k=function(){a||(s(!0),J(),setTimeout(function(){M()},100))};return(0,n.jsx)(Q.ZP,{title:"Recipe: ".concat(e==null?void 0:e.recipeTitle),extra:e?(0,n.jsxs)("span",{onClick:k,children:[(0,h.createElement)(a?Y.Z:H.Z),(0,n.jsx)("span",{className:a?d()["comment-action-liked"]:d()["comment-action"],children:e==null?void 0:e.recipeLike})]}):null,children:(0,n.jsxs)(Z.Z,{size:"large",direction:"vertical",className:d()["page-card"],children:[(0,n.jsxs)(l.ZP,{split:"vertical",layout:"center",children:[(0,n.jsx)(l.ZP,{colSpan:"30%",children:e?(0,n.jsx)("img",{alt:"".concat(e==null?void 0:e.recipeTitle," Picture"),src:e==null?void 0:e.recipeUrl,className:d()["recipe-img"]}):(0,n.jsx)(F.Z,{})}),(0,n.jsx)(l.ZP,{children:(0,n.jsxs)(I.Z,{title:"Recipe Detail",column:1,bordered:!0,labelStyle:{fontSize:"1.005rem"},contentStyle:{fontSize:"1.005rem"},children:[(0,n.jsx)(I.Z.Item,{label:"Recipe Name",children:e==null?void 0:e.recipeTitle}),(0,n.jsx)(I.Z.Item,{label:"Ingredients",children:e==null?void 0:e.recipeIngredients.map(function(i,_){return(0,n.jsx)("div",{children:"".concat(_+1,".","\xA0","\xA0").concat(i)},"ing-idx-".concat(_))})})]})})]}),(0,n.jsx)(l.ZP,{title:"Directions",className:d().desc,children:e==null?void 0:e.recipeDirections.map(function(i,_){return(0,n.jsx)("div",{children:"Step ".concat(_+1,":","\xA0","\xA0","\xA0").concat(i)},"ing-idx-".concat(_))})}),(0,n.jsxs)(l.ZP,{title:"Comment",children:[C.isLoggedin&&(0,n.jsx)(B.Z,{avatar:(0,n.jsx)(S.C,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",alt:"Han Solo"}),content:(0,n.jsx)($,{onRefresh:M})}),e!=null&&e.reviews?(0,n.jsx)(y.ZP,{className:"comment-list",header:"".concat(e==null||(m=e.reviews)===null||m===void 0?void 0:m.length," repl").concat((e==null||(r=e.reviews)===null||r===void 0?void 0:r.length)>1?"ies":"y"),itemLayout:"horizontal",dataSource:e==null?void 0:e.reviews,renderItem:function(_,A){return(0,n.jsx)("li",{children:(0,n.jsx)(B.Z,{author:_.posterName,avatar:c[A],content:_.reviewContent})})}}):null]})]})})}}}]);