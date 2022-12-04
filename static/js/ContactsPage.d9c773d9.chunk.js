"use strict";(self.webpackChunkPhonebook=self.webpackChunkPhonebook||[]).push([[518],{6060:function(e,t,a){a.r(t),a.d(t,{default:function(){return X}});var n=a(885),r=a(2791),i=a(4903),s=a(4554),o=a(3316),c=a(6151),d=a(3239),l=a(4223),u=a(184),m=(0,l.Z)((0,u.jsx)("path",{d:"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"}),"AddIcCall"),v=a(9105);function p(){var e=(0,r.useState)(""),t=(0,n.Z)(e,2),a=t[0],l=t[1],p=(0,r.useState)(""),h=(0,n.Z)(p,2),b=h[0],g=h[1],f=(0,i.wY)().data,Z=(0,i.Tn)(),x=(0,n.Z)(Z,2),y=x[0],C=x[1],S=C.isLoading,j=C.isSuccess,w=C.isError,A=C.error,I=(0,v.Ds)(),k=I.enqueueSnackbar,z=I.closeSnackbar,M=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":l(n);break;case"number":g(n)}};return(0,r.useEffect)((function(){j&&k("Contact added successfully",{variant:"success"}),w&&404===(null===A||void 0===A?void 0:A.originalStatus)?k("Sorry, we can't find this page",{variant:"error"}):w&&"FETCH_ERROR"===(null===A||void 0===A?void 0:A.status)?k("Internet is disconnected",{variant:"error"}):w&&k("Something went wrong, please try again later",{variant:"error"})}),[z,j,w,k,null===A||void 0===A?void 0:A.originalStatus,null===A||void 0===A?void 0:A.status]),(0,u.jsxs)(s.Z,{component:"form",onSubmit:function(e){e.preventDefault(),f.some((function(e){return e.name===a}))?alert("".concat(a," is already in contacts")):y({name:a,number:b}),l(""),g("")},sx:{display:"flex",flexDirection:"column",width:"20rem",border:"1px solid #005BBB",padding:"0 1rem"},children:[(0,u.jsx)(o.Z,{label:"Name",size:"small",margin:"normal",type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:M,required:!0}),(0,u.jsx)(o.Z,{label:"Number",size:"small",margin:"normal",type:"tel",name:"number",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:M,required:!0}),(0,u.jsx)(c.Z,{variant:"contained",type:"submit",margin:"normal",sx:{width:"15rem",m:"1rem 0"},endIcon:S?(0,u.jsx)(d.Z,{size:16,thickness:6,color:"inherit"}):(0,u.jsx)(m,{}),children:"Add contact"})]})}function h(e){var t=e.filter,a=e.handleChange;return(0,u.jsx)(o.Z,{label:"Find contacts by name",size:"small",type:"text",name:"filter",value:t,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(e){return a(e.target.value)},sx:{width:"22rem"}})}var b=a(224);function g(e){var t=e.id,a=e.currentName,l=e.currentNumber,m=e.updateContact,p=(0,r.useState)(a),h=(0,n.Z)(p,2),g=h[0],f=h[1],Z=(0,r.useState)(l),x=(0,n.Z)(Z,2),y=x[0],C=x[1],S=(0,i.wY)().data,j=(0,i.wv)(),w=(0,n.Z)(j,2),A=w[0],I=w[1],k=I.isLoading,z=I.isSuccess,M=I.isError,N=I.error,R=(0,v.Ds)(),L=R.enqueueSnackbar,P=R.closeSnackbar,F=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":f(n);break;case"number":C(n)}};return(0,r.useEffect)((function(){z&&(m(t),L("Contact successfully updated",{variant:"success"})),M&&400===(null===N||void 0===N?void 0:N.originalStatus)?L("Error updating contact",{variant:"error"}):M&&"FETCH_ERROR"===(null===N||void 0===N?void 0:N.status)?L("Internet is disconnected",{variant:"error"}):M&&L("Something went wrong, please try again later",{variant:"error"})}),[P,z,M,L,null===N||void 0===N?void 0:N.originalStatus,null===N||void 0===N?void 0:N.status,m,t]),(0,u.jsxs)(s.Z,{component:"form",onSubmit:function(e){e.preventDefault(),S.some((function(e){return e.name===g&&g!==a}))?L("This contact is already in the contacts",{variant:"error"}):g===a&&y===l?m(t):A({id:t,name:g,number:y})},sx:{display:"flex",alignItems:"baseline",padding:"0rem"},children:[(0,u.jsx)(o.Z,{variant:"standard",size:"small",margin:"normal",type:"text",name:"name",value:g,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:F,sx:{width:"".concat(Math.max(g.length/1.75,1),"rem")},required:!0}),(0,u.jsx)(o.Z,{variant:"standard",size:"small",margin:"normal",type:"tel",name:"number",value:y,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:F,sx:{width:"".concat(Math.max(y.length/1.75,1),"rem"),m:"0 1rem"},required:!0}),(0,u.jsx)(c.Z,{variant:"contained",type:"submit",margin:"normal",sx:{width:"12rem",m:"0 1rem"},endIcon:k?(0,u.jsx)(d.Z,{size:16,thickness:6,color:"inherit"}):(0,u.jsx)(b.Z,{}),children:"Update contact"})]})}var f=a(3400),Z=a(7247),x=a(9212);function y(e){var t=e.id,a=e.name,s=e.number,o=(0,r.useState)(!1),c=(0,n.Z)(o,2),l=c[0],m=c[1],p=(0,r.useState)(""),h=(0,n.Z)(p,2),y=h[0],C=h[1],S=(0,i.Nt)(),j=(0,n.Z)(S,2),w=j[0],A=j[1],I=A.isLoading,k=A.isSuccess,z=A.isError,M=A.error,N=(0,v.Ds)(),R=N.enqueueSnackbar,L=N.closeSnackbar,P=function(e){C(y?"":e)};return(0,r.useEffect)((function(){k&&R("Contact successfully deleted",{variant:"success"}),z&&404===(null===M||void 0===M?void 0:M.originalStatus)?R("Sorry, we can't find this page",{variant:"error"}):z&&"FETCH_ERROR"===(null===M||void 0===M?void 0:M.status)?R("Internet is disconnected",{variant:"error"}):z&&R("Something went wrong, please try again later",{variant:"error"})}),[L,k,z,R,null===M||void 0===M?void 0:M.originalStatus,null===M||void 0===M?void 0:M.status]),(0,r.useEffect)((function(){I&&m(!0)}),[I]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(f.Z,{"aria-label":"delete",onClick:function(){return w(t)},color:"primary",sx:{m:"0 1rem 0 0 ",p:"0"},children:l?(0,u.jsx)(d.Z,{size:16,thickness:6}):(0,u.jsx)(Z.Z,{})}),(0,u.jsx)(f.Z,{"aria-label":"update",onClick:function(){return P(t)},color:"primary",sx:{m:"0 1rem 0 0 ",p:"0"},children:y?(0,u.jsx)(x.Z,{}):(0,u.jsx)(b.Z,{})}),y?(0,u.jsx)(g,{id:t,currentName:a,currentNumber:s,updateContact:P}):(0,u.jsxs)("span",{children:[a,": ",s]})]})}var C=a(493),S=a(4942),j=a(3366),w=a(7462),A=a(8182),I=a(4419),k=a(627),z=a(2065),M=a(6934),N=a(1402),R=a(533),L=a(9103),P=a(162),F=a(2071),O=a(6199),G=a(1217),E=a(5878);function V(e){return(0,G.Z)("MuiListItem",e)}var q=(0,E.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var B=(0,E.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function D(e){return(0,G.Z)("MuiListItemSecondaryAction",e)}(0,E.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var T=["className"],H=(0,M.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,w.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),Y=r.forwardRef((function(e,t){var a=(0,N.Z)({props:e,name:"MuiListItemSecondaryAction"}),n=a.className,i=(0,j.Z)(a,T),s=r.useContext(O.Z),o=(0,w.Z)({},a,{disableGutters:s.disableGutters}),c=function(e){var t=e.disableGutters,a=e.classes,n={root:["root",t&&"disableGutters"]};return(0,I.Z)(n,D,a)}(o);return(0,u.jsx)(H,(0,w.Z)({className:(0,A.Z)(c.root,n),ownerState:o,ref:t},i))}));Y.muiName="ListItemSecondaryAction";var J=Y,_=["className"],U=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],$=(0,M.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,w.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!n.disablePadding&&(0,w.Z)({paddingTop:8,paddingBottom:8},n.dense&&{paddingTop:4,paddingBottom:4},!n.disableGutters&&{paddingLeft:16,paddingRight:16},!!n.secondaryAction&&{paddingRight:48}),!!n.secondaryAction&&(0,S.Z)({},"& > .".concat(B.root),{paddingRight:48}),(t={},(0,S.Z)(t,"&.".concat(q.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,S.Z)(t,"&.".concat(q.selected),(0,S.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,z.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(q.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,z.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,S.Z)(t,"&.".concat(q.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),"flex-start"===n.alignItems&&{alignItems:"flex-start"},n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},n.button&&(0,S.Z)({transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(q.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,z.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,z.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),n.hasSecondaryAction&&{paddingRight:48})})),K=(0,M.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),Q=r.forwardRef((function(e,t){var a=(0,N.Z)({props:e,name:"MuiListItem"}),n=a.alignItems,i=void 0===n?"center":n,s=a.autoFocus,o=void 0!==s&&s,c=a.button,d=void 0!==c&&c,l=a.children,m=a.className,v=a.component,p=a.components,h=void 0===p?{}:p,b=a.componentsProps,g=void 0===b?{}:b,f=a.ContainerComponent,Z=void 0===f?"li":f,x=a.ContainerProps,y=(x=void 0===x?{}:x).className,C=a.dense,S=void 0!==C&&C,z=a.disabled,M=void 0!==z&&z,G=a.disableGutters,E=void 0!==G&&G,B=a.disablePadding,D=void 0!==B&&B,T=a.divider,H=void 0!==T&&T,Y=a.focusVisibleClassName,Q=a.secondaryAction,W=a.selected,X=void 0!==W&&W,ee=(0,j.Z)(a.ContainerProps,_),te=(0,j.Z)(a,U),ae=r.useContext(O.Z),ne={dense:S||ae.dense||!1,alignItems:i,disableGutters:E},re=r.useRef(null);(0,P.Z)((function(){o&&re.current&&re.current.focus()}),[o]);var ie=r.Children.toArray(l),se=ie.length&&(0,L.Z)(ie[ie.length-1],["ListItemSecondaryAction"]),oe=(0,w.Z)({},a,{alignItems:i,autoFocus:o,button:d,dense:ne.dense,disabled:M,disableGutters:E,disablePadding:D,divider:H,hasSecondaryAction:se,selected:X}),ce=function(e){var t=e.alignItems,a=e.button,n=e.classes,r=e.dense,i=e.disabled,s={root:["root",r&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",i&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,I.Z)(s,V,n)}(oe),de=(0,F.Z)(re,t),le=h.Root||$,ue=g.root||{},me=(0,w.Z)({className:(0,A.Z)(ce.root,ue.className,m),disabled:M},te),ve=v||"li";return d&&(me.component=v||"div",me.focusVisibleClassName=(0,A.Z)(q.focusVisible,Y),ve=R.Z),se?(ve=me.component||v?ve:"div","li"===Z&&("li"===ve?ve="div":"li"===me.component&&(me.component="div")),(0,u.jsx)(O.Z.Provider,{value:ne,children:(0,u.jsxs)(K,(0,w.Z)({as:Z,className:(0,A.Z)(ce.container,y),ref:de,ownerState:oe},ee,{children:[(0,u.jsx)(le,(0,w.Z)({},ue,!(0,k.Z)(le)&&{as:ve,ownerState:(0,w.Z)({},oe,ue.ownerState)},me,{children:ie})),ie.pop()]}))})):(0,u.jsx)(O.Z.Provider,{value:ne,children:(0,u.jsxs)(le,(0,w.Z)({},ue,{as:ve,ref:de,ownerState:oe},!(0,k.Z)(le)&&{ownerState:(0,w.Z)({},oe,ue.ownerState)},me,{children:[ie,Q&&(0,u.jsx)(J,{children:Q})]}))})}));function W(e){var t=e.filter,a=(0,i.wY)().data,n=null===a||void 0===a?void 0:a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));if(n)return(0,u.jsx)(C.Z,{sx:{mt:"0.5rem"},children:n.map((function(e){var t=e.id,a=e.name,n=e.number;return(0,u.jsx)(Q,{sx:{height:"40px"},children:(0,u.jsx)(y,{id:t,name:a,number:n})},t)}))})}function X(){var e=(0,r.useState)(""),t=(0,n.Z)(e,2),a=t[0],i=t[1];return(0,u.jsxs)("div",{children:[(0,u.jsx)(p,{}),(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(h,{filter:a,handleChange:function(e){i(e)}}),(0,u.jsx)(W,{filter:a})]})}},9212:function(e,t,a){var n=a(5318);t.Z=void 0;var r=n(a(5649)),i=a(184),s=(0,r.default)([(0,i.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,i.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");t.Z=s},7247:function(e,t,a){var n=a(5318);t.Z=void 0;var r=n(a(5649)),i=a(184),s=(0,r.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=s},224:function(e,t,a){var n=a(5318);t.Z=void 0;var r=n(a(5649)),i=a(184),s=(0,r.default)((0,i.jsx)("path",{d:"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"}),"Update");t.Z=s}}]);
//# sourceMappingURL=ContactsPage.d9c773d9.chunk.js.map