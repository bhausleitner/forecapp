(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[54],{438:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(18),r=s(353),n=(s(356),s(360)),i=s(368),l=s(19);t.default=()=>{const e=Object(c.g)(),{csvData:t,setCsvData:s,setDataProps:o}=Object(a.useContext)(n.a);return Object(l.jsx)(r.rb,{children:Object(l.jsx)(r.A,{xs:12,children:Object(l.jsxs)(r.n,{className:"mb-12",children:[Object(l.jsxs)(r.r,{children:[Object(l.jsx)("small",{className:"smallHeader",children:"UPLOAD"}),Object(l.jsx)("h3",{className:"midHeader",children:"Collect data"}),Object(l.jsx)("small",{className:"bottomHeader",children:"Select your .csv file and upload it."})]}),Object(l.jsxs)(r.o,{children:[Object(l.jsx)(i.a,{paramFunc:e=>{s(e)}}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsx)(r.j,{type:"submit",className:"text-white",onClick:()=>function(){var a=new Headers;a.append("Content-Type","application/json");var c={method:"POST",headers:a,body:JSON.stringify(t),redirect:"follow"};fetch("https://npforecast.herokuapp.com/api/analysis/",c).then((e=>e.json())).then((t=>{s(t.data),o(t.data_props),e.push("/train")}))}(),children:"Submit"})})]})]})})})}}}]);
//# sourceMappingURL=54.c742ae86.chunk.js.map