(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{26:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n.n(r),c=n(27),s=n.n(c),o=(n(26),n(17)),i=n(10),j=n(8),u=n(9);function b(e){var t=Object(r.useRef)(null),n=0;Object(o.b)((function(){var e=5*Math.sin(j.MathUtils.degToRad(n+=.01));t.current.rotation.set(e,e,e)}));var a=Object(r.useMemo)((function(){return[new j.SphereBufferGeometry(1,32,32),new j.MeshBasicMaterial({color:new j.Color("white")}),new Array(2e3).fill(0).map((function(e){return[800*Math.random()-400,800*Math.random()-400,800*Math.random()-400]}))]}),[]),c=Object(i.a)(a,3),s=c[0],b=c[1],l=c[2];return Object(u.jsx)("group",{ref:t,children:l.map((function(e,t){var n=Object(i.a)(e,3),r=n[0],a=n[1],c=n[2];return Object(u.jsx)("mesh",{geometry:s,material:b,position:[r,a,c]},t)}))})}var l=n(5);function h(e){var t=Object(r.useRef)(null);return Object(o.b)((function(e,n){return t.current.rotation.y+=.01,t.current.rotation.x+=.005})),Object(u.jsxs)("mesh",Object(l.a)(Object(l.a)({},e),{},{ref:t,scale:1.5,children:[Object(u.jsx)("sphereGeometry",{args:[2,64,64]}),Object(u.jsx)("meshStandardMaterial",{color:"blue"})]}))}function O(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(o.a,{className:"canvas",children:[Object(u.jsx)("ambientLight",{}),Object(u.jsx)("pointLight",{position:[10,10,10],castShadow:!0}),Object(u.jsx)(h,{position:[6,-3,0]}),Object(u.jsx)(b,{position:[6,-3,0]})]}),Object(u.jsxs)("div",{className:"overlay",children:[Object(u.jsx)("h1",{className:"text",children:"Newto"}),Object(u.jsx)("input",{className:"input",type:"text",name:"text"})]})]})}s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.52bd25df.chunk.js.map