"use strict";(self.webpackChunk_4dev=self.webpackChunk_4dev||[]).push([[798],{798:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var s,r,i=n(9439),l="Tasks_header__C1Mpl",a="Tasks_wrapper__sPWtI",c="Tasks_groups__Q3Fon",o="Tasks_group__f59D8",u="Tasks_group__title__WFep5",d="Tasks_sort__HX-gl",_="Tasks_sort__icon__KtrVt",f="Tasks_sort__icon_active__lvENX",h="Tasks_description__AKl1w",x="Tasks_buttons__FDuE4",j="Tasks_form__UgiPg",T=n(7689),E=n(5355),m=n(2791),C=n(887),S=function(e){return e.tasks},Z=n(4942),p=function(e){return e[e.IN_QUEUE=0]="IN_QUEUE",e[e.IN_PROGRESS=1]="IN_PROGRESS",e[e.DONE=2]="DONE",e}({}),v=function(e){return e[e.FIRST=0]="FIRST",e[e.SECOND=1]="SECOND",e[e.THIRD=2]="THIRD",e}({}),D=(s={},(0,Z.Z)(s,p.IN_QUEUE,"\u0412 \u043e\u0447\u0435\u0440\u0435\u0434\u0438"),(0,Z.Z)(s,p.IN_PROGRESS,"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435"),(0,Z.Z)(s,p.DONE,"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e"),s),N=(r={},(0,Z.Z)(r,v.FIRST,"\u0421\u0440\u043e\u0447\u043d\u043e"),(0,Z.Z)(r,v.SECOND,"\u0412\u0430\u0436\u043d\u043e"),(0,Z.Z)(r,v.THIRD,"\u041d\u0435 \u0441\u0440\u043e\u0447\u043d\u043e"),r),k=n(7309),I=n(9489),R=n(4949),P=n(184),A=function(){var e=(0,E.aC)(),t=e.user,n=e.logout,s=(0,R.dd)().setContentType;return(0,P.jsxs)("div",{className:l,children:[(0,P.jsx)(k.ZP,{onClick:function(){s("CREATE")},children:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"}),(0,P.jsxs)("div",{children:[(0,P.jsx)(k.ZP,{type:"link",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"}),(0,P.jsx)(I.C,{children:null===t||void 0===t?void 0:t.id})]})]})},O=n(1413),g=n(358),y="TaskCardTitle_container__2TMQA",b="TaskCardTitle_indicator__ybPDO",U="TaskCardTitle_first__ST5Js",Q="TaskCardTitle_second__UABCV",Y="TaskCardTitle_third__70Jp0",H=n(1694),F=n.n(H),G=function(e){var t,n=e.title,s=e.priority;return(0,P.jsxs)("div",{className:y,children:[(0,P.jsx)("div",{className:F()(b,(t={},(0,Z.Z)(t,U,s===v.FIRST),(0,Z.Z)(t,Q,s===v.SECOND),(0,Z.Z)(t,Y,s===v.THIRD),t))}),(0,P.jsx)("div",{children:n})]})},w=function(e){var t=e.task,n=t.title,s=t.author_name,r=t.priority,i=(0,C.ol)().setCurrentTask,l=(0,R.dd)().setContentType;return(0,P.jsxs)(g.Z,{hoverable:!0,bordered:!1,onClick:function(){l("UPDATE"),i(t)},children:[(0,P.jsx)(G,{title:n,priority:r}),(0,P.jsx)("hr",{}),(0,P.jsx)("div",{children:s})]})},q=n(6662),M=n(7892),V=n.n(M),J=n(8185),K=function(e){return e.PRIORITY="PRIORITY",e.DATE="DATE",e}(K||{}),W=function(e){return e.P_ASC="P_ASC",e.P_DESC="P_DESC",e.D_ASC="D_ASC",e.D_DESC="D_DESC",e}(W||{}),X=function(e){var t,n=e.title,s=e.tasks,r=(0,m.useState)(K.PRIORITY),l=(0,i.Z)(r,2),a=l[0],c=l[1],h=(0,m.useState)((t={},(0,Z.Z)(t,K.PRIORITY,W.P_ASC),(0,Z.Z)(t,K.DATE,W.D_ASC),t)),x=(0,i.Z)(h,2),j=x[0],T=x[1],E=(0,m.useMemo)((function(){switch(j[a]){case W.P_DESC:return s.sort((function(e,t){return t.priority-e.priority}));case W.D_ASC:return s.sort((function(e,t){return+V()(e.schedule.creation_time)-+V()(t.schedule.creation_time)}));case W.D_DESC:return s.sort((function(e,t){return+V()(t.schedule.creation_time)-+V()(e.schedule.creation_time)}));default:return s.sort((function(e,t){return e.priority-t.priority}))}}),[a,j,s]),C=(0,m.useCallback)((function(e,t){return function(){c(e),e===K.PRIORITY&&T((0,O.Z)((0,O.Z)({},j),{},(0,Z.Z)({},e,t===W.P_ASC?W.P_DESC:W.P_ASC))),e===K.DATE&&T((0,O.Z)((0,O.Z)({},j),{},(0,Z.Z)({},e,t===W.D_ASC?W.D_DESC:W.D_ASC)))}}),[j]);return(0,P.jsxs)(g.Z,{children:[(0,P.jsxs)("div",{className:u,children:[(0,P.jsx)("div",{children:n}),(0,P.jsxs)("div",{className:d,children:[(0,P.jsx)(q.Z,{placement:"top",title:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0443",children:j[K.PRIORITY]===W.P_ASC?(0,P.jsx)("i",{onClick:C(K.PRIORITY,W.P_ASC),className:F()(_,(0,Z.Z)({},f,a===K.PRIORITY)),children:(0,P.jsx)(J.pHf,{})}):(0,P.jsx)("i",{onClick:C(K.PRIORITY,W.P_DESC),className:F()(_,(0,Z.Z)({},f,a===K.PRIORITY)),children:(0,P.jsx)(J.LZ7,{})})}),(0,P.jsx)(q.Z,{placement:"top",title:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u0434\u0430\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f",children:j[K.DATE]===W.D_ASC?(0,P.jsx)("i",{onClick:C(K.DATE,W.D_ASC),className:F()(_,(0,Z.Z)({},f,a===K.DATE)),children:(0,P.jsx)(J.A89,{})}):(0,P.jsx)("i",{onClick:C(K.DATE,W.D_DESC),className:F()(_,(0,Z.Z)({},f,a===K.DATE)),children:(0,P.jsx)(J.Vjs,{})})})]})]}),(0,P.jsx)("div",{className:o,children:E.map((function(e){return(0,P.jsx)(w,{task:e},e.id)}))})]})},B=n(8488),L=n(208),z=n(1134),$=function(e){return Object.entries(e).map((function(e){var t=(0,i.Z)(e,2);return{value:t[0],label:t[1]}}))},ee=function(e){var t=e.task,n=t.id,s=t.title,r=t.author_name,l=t.description,a=t.status,c=t.priority,o=(0,C.ol)(),u=o.deleteTask,d=o.updateTask,_=o.setCurrentTask,f=(0,z.cI)(),T=f.control,E=f.handleSubmit,S=f.watch,Z=(0,R.dd)(),p=Z.onClose,v=Z.contentType,I=(0,m.useState)([]),A=(0,i.Z)(I,2),g=A[0],y=A[1],b=(0,m.useState)([]),U=(0,i.Z)(b,2),Q=U[0],Y=U[1],H=(0,m.useState)(!0),F=(0,i.Z)(H,2),G=F[0],w=F[1],q=(0,m.useCallback)((function(e){var t={id:n};"undefined"!==typeof e.status&&(t.status=+e.status),"undefined"!==typeof e.priority&&(t.priority=+e.priority),d(t),p(),_(null)}),[n,p,_,d]);return(0,m.useEffect)((function(){y($(D)),Y($(N))}),[]),(0,m.useEffect)((function(){S((function(e){w(!(a!==+e.status||c!==+e.priority))}))}),[c,a,S]),(0,P.jsx)(B.Z,{title:s,open:"UPDATE"===v,onCancel:p,footer:null,destroyOnClose:!0,children:(0,P.jsxs)("form",{onSubmit:E(q),className:j,children:[(0,P.jsxs)("div",{className:h,children:[(0,P.jsx)("strong",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c:"}),(0,P.jsx)("i",{children:r})]}),(0,P.jsxs)("div",{className:h,children:[(0,P.jsx)("strong",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438:"}),(0,P.jsx)("i",{children:l})]}),(0,P.jsxs)("div",{className:h,children:[(0,P.jsx)("strong",{children:"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435:"}),(0,P.jsx)(z.Qr,{render:function(e){var t=e.field;return(0,P.jsx)(L.Z,(0,O.Z)((0,O.Z)({},t),{},{options:g,defaultValue:a.toString()}))},name:"status",control:T},g.length)]}),(0,P.jsxs)("div",{className:h,children:[(0,P.jsx)("strong",{children:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442:"}),(0,P.jsx)(z.Qr,{render:function(e){var t=e.field;return(0,P.jsx)(L.Z,(0,O.Z)((0,O.Z)({},t),{},{options:Q,defaultValue:c.toString()}))},name:"priority",control:T},Q.length)]}),(0,P.jsxs)("div",{className:x,children:[(0,P.jsx)(k.ZP,{danger:!0,onClick:function(){u(n),p(),_(null)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),(0,P.jsx)(k.ZP,{disabled:G,htmlType:"submit",type:"primary",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})},te=n(2298),ne=te.Z.TextArea,se=function(){var e=(0,C.ix)(S).authors,t=(0,C.ol)().createTask,n=(0,z.cI)(),s=n.control,r=n.handleSubmit,l=n.reset,a=(0,R.dd)(),c=a.onClose,o=a.contentType,u=(0,m.useState)([]),d=(0,i.Z)(u,2),_=d[0],f=d[1],T=(0,m.useState)([]),E=(0,i.Z)(T,2),Z=E[0],p=E[1],v=(0,m.useState)([]),I=(0,i.Z)(v,2),A=I[0],g=I[1],y=(0,m.useCallback)((function(){c(),l()}),[c,l]),b=(0,m.useCallback)((function(t){var n=e.find((function(e){return e.id===t}));return n?n.author_name:""}),[e]),U=(0,m.useCallback)((function(e){var n=(0,O.Z)((0,O.Z)({},e),{},{priority:+e.priority,status:+e.status,schedule:{creation_time:V()().format("YYYY-MM-DDTHH:mm:ss")},author_name:b(e.author_name)});t(n),y()}),[t,b,y]);return(0,m.useEffect)((function(){f($(D)),p($(N))}),[]),(0,m.useEffect)((function(){e.length&&g(e.map((function(e){return{value:e.id,label:e.author_name}})))}),[e]),(0,P.jsx)(B.Z,{title:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430",open:"CREATE"===o,onCancel:y,footer:null,destroyOnClose:!0,children:(0,P.jsxs)("form",{onSubmit:r(U),className:j,children:[(0,P.jsxs)("div",{className:h,children:[(0,P.jsx)("strong",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:"}),(0,P.jsx)(z.Qr,{render:function(e){var t=e.field;return(0,P.jsx)(te.Z,(0,O.Z)({},t))},name:"title",control:s,rules:{required:!0}},A.length)]}),(0,P.jsxs)("div",{className:h,children:[(0,P.jsx)("strong",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c:"}),(0,P.jsx)(z.Qr,{render:function(e){var t=e.field;return(0,P.jsx)(L.Z,(0,O.Z)((0,O.Z)({},t),{},{options:A}))},name:"author_name",control:s,rules:{required:!0}},A.length)]}),(0,P.jsxs)("div",{className:h,children:[(0,P.jsx)("strong",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438:"}),(0,P.jsx)(z.Qr,{render:function(e){var t=e.field;return(0,P.jsx)(ne,(0,O.Z)({},t))},name:"description",control:s,rules:{required:!0}},A.length)]}),(0,P.jsxs)("div",{className:h,children:[(0,P.jsx)("strong",{children:"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435:"}),(0,P.jsx)(z.Qr,{render:function(e){var t=e.field;return(0,P.jsx)(L.Z,(0,O.Z)((0,O.Z)({},t),{},{options:_}))},name:"status",control:s,rules:{required:!0}},_.length)]}),(0,P.jsxs)("div",{className:h,children:[(0,P.jsx)("strong",{children:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442:"}),(0,P.jsx)(z.Qr,{render:function(e){var t=e.field;return(0,P.jsx)(L.Z,(0,O.Z)((0,O.Z)({},t),{},{options:Z}))},name:"priority",control:s,rules:{required:!0}},Z.length)]}),(0,P.jsxs)("div",{className:x,children:[(0,P.jsx)(k.ZP,{onClick:y,children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"}),(0,P.jsx)(k.ZP,{htmlType:"submit",type:"primary",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})},re=function(){var e,t,n,s=(0,C.ix)(S),r=s.tasks,l=s.currentTask,o=(0,E.aC)().authenticated,u=(0,T.TH)(),d=(0,C.ol)(),_=d.fetchTasks,f=d.fetchAuthors,h=(0,m.useState)({}),x=(0,i.Z)(h,2),j=x[0],Z=x[1];return(0,m.useEffect)((function(){o&&(_(),f())}),[o,f,_]),(0,m.useEffect)((function(){if(r.length){var e={};e[p.IN_QUEUE]=r.filter((function(e){return e.status===p.IN_QUEUE})),e[p.IN_PROGRESS]=r.filter((function(e){return e.status===p.IN_PROGRESS})),e[p.DONE]=r.filter((function(e){return e.status===p.DONE})),Z(e)}}),[r]),o?(0,P.jsxs)("div",{className:a,children:[(0,P.jsx)(A,{}),(0,P.jsx)(se,{}),l&&(0,P.jsx)(ee,{task:l}),(0,P.jsxs)("div",{className:c,children:[!(null===(e=j[p.IN_QUEUE])||void 0===e||!e.length)&&(0,P.jsx)(X,{tasks:j[p.IN_QUEUE],title:D[p.IN_QUEUE]}),!(null===(t=j[p.IN_PROGRESS])||void 0===t||!t.length)&&(0,P.jsx)(X,{tasks:j[p.IN_PROGRESS],title:D[p.IN_PROGRESS]}),!(null===(n=j[p.DONE])||void 0===n||!n.length)&&(0,P.jsx)(X,{tasks:j[p.DONE],title:D[p.DONE]})]})]}):(0,P.jsx)(T.Fg,{to:"/error",state:{from:u},replace:!0})}}}]);
//# sourceMappingURL=798.3971efa2.chunk.js.map