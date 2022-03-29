(this.webpackJsonpadminapp=this.webpackJsonpadminapp||[]).push([[0],{154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(71),c=a.n(r),o=(a(82),a(83),a(1)),i=a(72),s=a.n(i),m=a(9);a(84);var u=function(e){var t=e.isSettings,a=e.setSettings;return l.a.createElement("div",null,l.a.createElement("section",{className:"setting "+(t&&"setting-visible")},l.a.createElement("div",{className:"setting-option"}),l.a.createElement("div",{className:"setting-option",onClick:function(){a(0)}},l.a.createElement(m.b,{to:"/homepage/build/dashboard"},"Home")),l.a.createElement("div",{className:"setting-option",onClick:function(){a(0)}},l.a.createElement(m.b,{to:"/homepage/build/projects"},"Project Details")),l.a.createElement("div",{className:"setting-option",onClick:function(){a(0)}},l.a.createElement(m.b,{to:"/homepage/build/employees"},"Employee")),l.a.createElement("div",{className:"setting-option",onClick:function(){a(0)}},l.a.createElement(m.b,{to:"/homepage/build/change_password"},"Change Password"))),l.a.createElement("div",{className:"overlay "+(t&&"overlay-visible"),onClick:function(){a(0)}}))};a(89);var d=function(e){var t=Object(n.useState)(0),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement("header",{className:"nav-bar"},l.a.createElement(m.b,{to:"/homepage/build/dashboard"},l.a.createElement("img",{src:s.a,alt:"logo",className:"logo"})),e.isAuth&&l.a.createElement("div",{className:"links"},l.a.createElement(m.b,{to:"/homepage/build",onClick:function(){e.setAuth(!1)}},"Log out"),l.a.createElement("div",{className:"avatar",onClick:function(e){c(1)}})),l.a.createElement(u,{isSettings:r,setSettings:c}))},p=a(4),b=a.n(p),E=a(74),f=a.n(E);a(154);var g=function(e){var t=e.workOrder,a=e.removeWorkOrder,r=e.employees,c=Object(n.useState)(!0),i=Object(o.a)(c,2),s=i[0],m=i[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),p=d[0],E=d[1];return l.a.createElement("div",{onClick:function(){m(!1)},className:"work-order "+(s&&"work-order-short")},l.a.createElement("h3",null,t.product_name),l.a.createElement("div",{className:"expand"},l.a.createElement("form",{action:""},l.a.createElement(f.a,null),l.a.createElement("label",null,"WO Number: ",t.work_order_type+"-"+t.woNumber),l.a.createElement("label",null,"Expected Date: ",t.expected_date),l.a.createElement("label",null,"Accepted By: ",t.accepted_by),l.a.createElement("label",null,"Customer Name: ",t.custtomer_name),l.a.createElement("label",null,"Customer Number: ",t.customer_contact),l.a.createElement("label",null,"Customer Email: ",t.customer_email),l.a.createElement("label",{htmlFor:"assign-to"},"Assign to:"),l.a.createElement("input",{list:"employees",autocomplete:"off",name:"assign-to",className:"textarea textarea-inline",onChange:function(e){E(e.target.value)},value:p}),l.a.createElement("button",{name:"submit",className:"btn btn-small btn-inline",onClick:function(e){if(r.map((function(e){return"".concat(e.emp_id," - ").concat(e.first_name," ").concat(e.last_name)})).includes(p)){m(!0),e.preventDefault(),e.stopPropagation();var n={method:"post",url:"/logger/api/web/post/assign_to",xsrfCookieName:"csrftoken",xsrfHeaderName:"X-CSRFTOKEN",data:{assigned_to:p,project_id:t.woNumber},crossorigin:!0,headers:{"Access-Control-Allow-Credentials":"*"}};b.a.defaults.withCredentials=!0,b()(n).then((function(e){a(),console.log(e.data)})).catch((function(e){console.log("Server Error")}))}else alert("Employee does not exist")}},"Assign"),l.a.createElement("button",{name:"submit",className:"btn btn-small btn-inline",onClick:function(e){m(!0),e.stopPropagation(),e.preventDefault()}},"Later"),l.a.createElement("datalist",{id:"employees"},r.map((function(e){return l.a.createElement("option",{value:"".concat(e.emp_id," - ").concat(e.first_name," ").concat(e.last_name)})}))))))};a(155);var h=function(e){var t=e.setClicked,a=e.rateArray,r=Object(n.useState)(""),c=Object(o.a)(r,2),i=c[0],s=c[1];return console.log(i),l.a.createElement("div",{className:"get-rate-container"},l.a.createElement("div",{className:"get-rate"},l.a.createElement("h3",null,"Activities of ",a[0].emp_id," on ",a[0].date),l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Activity"),l.a.createElement("th",null,"WO Number"),l.a.createElement("th",null,"Planned time"),l.a.createElement("th",null,"Actual time"),l.a.createElement("th",null,"Work Remark"),l.a.createElement("th",null,"Submission Remark"),l.a.createElement("th",null,"Dependency"))),l.a.createElement("tbody",null,a.map((function(e){return console.log(e),l.a.createElement("tr",null,l.a.createElement("td",null,e.activity),l.a.createElement("td",null,e.work_order_no),l.a.createElement("td",null,e.planned_time),l.a.createElement("td",null,e.actual_time),l.a.createElement("td",null,e.work_remark),l.a.createElement("td",null,e.submission_remark),l.a.createElement("td",null,e.dependency))})))),l.a.createElement("input",{type:"text",className:"textarea textarea-inline",value:i,placeholder:"Out of 100",onChange:function(e){return s(e.target.value)},min:"0",max:"100"}),l.a.createElement("button",{className:"btn btn-small btn-inline",onClick:function(){!function(){if(i<=100&&i>=0){var e={method:"post",url:"/logger/api/web/post/manager_rating",xsrfCookieName:"csrftoken",xsrfHeaderName:"X-CSRFTOKEN",data:{rating:parseInt(i),date:a[0].date,emp_id:a[0].emp_id},crossorigin:!0,headers:{"Access-Control-Allow-Credentials":"*"}};b.a.defaults.withCredentials=!0,b()(e).then((function(e){t(!1,!0)})).catch((function(e){console.log("Server Error")}))}else alert("Rating must be between 0-100"),s("")}()}},"Rated")),l.a.createElement("div",{className:"overlay overlay-visible",onClick:function(){t(!1,!1)}}))};a(156);var v=function(e){var t=e.rate,a=e.removeRate,r=e.handleScrool,c=Object(n.useState)({bool:!1}),i=Object(o.a)(c,2),s=i[0],m=i[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"rate",onClick:function(){m({bool:!0}),r(!0)}},l.a.createElement("h4",null,"Rate: ",t[0].emp_id)),s.bool&&l.a.createElement(h,{setClicked:function(e,n){!1===e&&m({bool:!1}),!0===n&&a(t[0].emp_id,t[0].date),r(!1)},rateArray:t}))};a(157);var N=function(e){var t=e.handleScrool,a=Object(n.useState)(!1),r=Object(o.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)([]),m=Object(o.a)(s,2),u=m[0],d=m[1];function p(e,t){d(u.filter((function(a){return"".concat(e,"+").concat(t)!=="".concat(a.emp_id,"+").concat(a.date)}))),i(!c)}return Object(n.useEffect)((function(){b.a.get("/logger/api/web/get/rating").then((function(e){var t=JSON.parse(e.data),a={},n=[];for(var l in t.forEach((function(e){var t=e.fields,n="".concat(t.emp_id,"_").concat(t.date);a.hasOwnProperty(n)?a[n].push(t):a[n]=[t]})),a)n.push(a[l]);d(n)})).catch((function(e){console.log(e),d([])}))}),[c]),l.a.createElement("div",null,0!==u.length?u.map((function(e,a){return l.a.createElement(v,{rate:e,key:a,id:a,removeRate:p,handleScrool:t})})):l.a.createElement("p",{className:"no-rate"},"No Works to Rate"))},O=a(2);a(158);var w=function(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!1),s=Object(o.a)(i,2),m=s[0],u=s[1],d=Object(n.useState)([]),p=Object(o.a)(d,2),E=p[0],f=p[1],h=Object(n.useState)([]),v=Object(o.a)(h,2),w=v[0],k=v[1];function j(){u((function(e){return!e}))}return Object(n.useEffect)((function(){var e=!0;return e&&(b.a.get("/logger/api/web/get/wo_pending").then((function(e){var t=JSON.parse(e.data).map((function(e){var t=e.pk,a=e.fields;return a.woNumber=t,a}));f(t)})).catch((function(e){console.log("ERROR")})),b.a.get("/logger/api/web/get/employee").then((function(e){var t=JSON.parse(e.data).map((function(e){var t=e.pk,a=e.fields;return a.empid=t,a}));k(t)})).catch((function(e){console.log("ERROR"+e)}))),function(){return e=!1}}),[m]),!1===e.isAuth?l.a.createElement(O.a,{to:"/homepage/build"}):l.a.createElement("section",{className:"dashboard-container "+(!r&&"scroll-hidden")},l.a.createElement("div",{className:"work-order-container"},l.a.createElement("h1",null,"Work Orders Pending:"),0!==E.length?E.map((function(e,t){return l.a.createElement(g,{workOrder:e,removeWorkOrder:j,key:e.woNumber,employees:w})})):l.a.createElement("h3",null,"No Work order pending refresh for updates")),l.a.createElement("div",{className:"rating-container"},l.a.createElement("h1",null,"Rate Works"),l.a.createElement(N,{handleScrool:function(e){c(!e)}})))},k=a(22),j=a(23);a(159);var y=function(e){var t=Object(n.useState)({password:""}),a=Object(o.a)(t,2),r=a[0],c=a[1];return!0===e.isAuth?l.a.createElement(O.a,{to:"/homepage/build/dashboard"}):l.a.createElement("section",{className:"login-container"},l.a.createElement("h1",null,"Welcome"),l.a.createElement("form",{action:"",className:"log-in"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",name:"password",autoComplete:"off",className:"textarea",value:r.password,onChange:function(e){c(Object(j.a)(Object(j.a)({},r),{},Object(k.a)({},e.target.name,e.target.value)))}}),l.a.createElement(m.b,{to:"/homepage/build/dashboard"},l.a.createElement("button",{className:"btn",onClick:function(t){var a={method:"post",url:"/logger/api/web/post/authenticate",xsrfCookieName:"csrftoken",xsrfHeaderName:"X-CSRFTOKEN",data:{id:1,password:r.password},crossorigin:!0,headers:{"Access-Control-Allow-Credentials":"*"}};b.a.defaults.withCredentials=!0,b()(a).then((function(t){"Success"===t.data&&e.setAuth(!0)}))}},"Log in"))))};var C=function(e){var t=e.workOrder,a=Object(n.useState)(!0),r=Object(o.a)(a,2),c=r[0],i=r[1];return l.a.createElement("div",{onClick:function(){i(!1)},className:"work-order "+(c&&"work-order-short")},l.a.createElement("h3",null,t.product_name),l.a.createElement("div",{className:"expand"},l.a.createElement("form",{action:""},l.a.createElement("label",null,"Project Status: ",t.status),l.a.createElement("label",null,"Work Order Issue Date: ",t.wo_issue_date),l.a.createElement("label",null,"WO Number: ",t.work_order_type+"-"+t.woNumber),l.a.createElement("label",null,"Expected Date: ",t.expected_date),l.a.createElement("label",null,"Accepted By: ",t.accepted_by),l.a.createElement("label",null,"Customer Name: ",t.custtomer_name),l.a.createElement("label",null,"Customer Number: ",t.customer_contact),l.a.createElement("label",null,"Customer Email: ",t.customer_email),l.a.createElement("label",{htmlFor:"assign-to"},"Assign to: ",t.assigned_to),l.a.createElement("button",{name:"submit",className:"btn btn-small btn-inline",onClick:function(e){i(!0),e.preventDefault(),e.stopPropagation()}},"OK"))))};a(160);var _=function(e){var t=e.isAuth,a=Object(n.useState)([]),r=Object(o.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){b.a.get("/logger/api/web/get/current_projects").then((function(e){var t=JSON.parse(e.data).map((function(e){var t=e.pk,a=e.fields;return a.woNumber=t,a}));i(t)}))}),[]),!1===t?l.a.createElement(O.a,{to:"/homepage/build"}):l.a.createElement("div",{className:"projects"},l.a.createElement("h1",null,"Projects"),c.length?c.map((function(e){return l.a.createElement(C,{workOrder:e})})):l.a.createElement("h3",null,"No Projects to display refresh for updates"))};a(161);function S(e){var t=e.msg,a=e.handleDelete,n=e.setPromptVisible;return l.a.createElement("div",{class:"prompt-container"},l.a.createElement("div",{class:"prompt"},l.a.createElement("p",null,t),l.a.createElement("button",{class:"btn btn-inline btn-small",onClick:function(e){n(!1),e.stopPropagation()}},"Cancel"),l.a.createElement("button",{class:"btn btn-inline btn-small",onClick:function(e){a(),e.stopPropagation()}},"Yes")),l.a.createElement("div",{class:"overlay overlay-visible"}))}var A=a(75),x=a(76);a(164);var R=function(e){e.img;var t=e.first_name,a=e.last_name,r=e.displayEmployee,c=e.id,i=e.setChange,s=Object(n.useState)(!1),m=Object(o.a)(s,2),u=m[0],d=m[1];return l.a.createElement("div",{className:"employee",onClick:function(){r(c)}},l.a.createElement("div",{className:"employee-avatar"},l.a.createElement("img",{src:""})),l.a.createElement("p",null,t," ",a),l.a.createElement("div",{className:"employee-delete",onClick:function(e){d(!0),e.stopPropagation()}},l.a.createElement(A.a,{icon:x.a})),u&&l.a.createElement(S,{msg:"Are you sure you want to delete this employee?",handleDelete:function(e){var t={method:"post",url:"/logger/api/web/post/delete_employee",xsrfCookieName:"csrftoken",xsrfHeaderName:"X-CSRFTOKEN",data:{emp_id:c},crossorigin:!0,headers:{"Access-Control-Allow-Credentials":"*"}};b.a.defaults.withCredentials=!0,b()(t).then((function(e){console.log(e.data),i((function(e){return!e}))}))},setPromptVisible:d}))};a(165);var P=function(e){var t=e.details,a=e.returnBack,r=Object(n.useState)([]),c=Object(o.a)(r,2),i=c[0],s=c[1];return Object(n.useEffect)((function(){var e=new Date;b.a.get("http://127.0.0.1:8000/logger/api/web/get/employee_work?id="+t.empid+"&date=".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate())).then((function(e){var t=JSON.parse(e.data).map((function(e){var t=e.pk,a=e.fields;return a.id=t,a}));console.log(t),s(t)})).catch((function(e){console.log("ERROR"+e)}))}),[]),l.a.createElement("div",{className:"employee-details"},l.a.createElement("div",{className:"employee-division"},l.a.createElement("h2",null,"Employee Details"),l.a.createElement("p",null,l.a.createElement("span",null,"Name: "),t.first_name+" "+t.last_name),l.a.createElement("p",null,l.a.createElement("span",null,"Id: "),t.empid),l.a.createElement("p",null,l.a.createElement("span",null,"E-mail: "),t.email),l.a.createElement("p",null,l.a.createElement("span",null,"Phone Number: "),t.phone_no),l.a.createElement("p",null,l.a.createElement("span",null,"Educational Qualification: "),t.educational_qualification),l.a.createElement("p",null,l.a.createElement("span",null,"Date of joining: "),t.date_of_joining),l.a.createElement("p",null,l.a.createElement("span",null,"Residence: "),l.a.createElement("br",null),t.street,l.a.createElement("br",null),t.district,l.a.createElement("br",null),t.state),l.a.createElement("button",{className:"btn",onClick:function(){a()}},"Done")),l.a.createElement("div",{className:"employee-work-table "},l.a.createElement("h2",null,"Current Activity"),l.a.createElement("table",{className:"table "},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Activity"),l.a.createElement("th",null,"Planned time"),l.a.createElement("th",null,"Remarks"))),l.a.createElement("tbody",null,i.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.activity),l.a.createElement("td",null,e.planned_time),l.a.createElement("td",null,e.work_remark))}))))))};a(166);function D(e){var t=e.handleAdd,a=e.setAddVisible,r=Object(n.useState)([]),c=Object(o.a)(r,2),i=c[0],s=c[1],m=Object(n.useState)(!0),u=Object(o.a)(m,2),d=u[0],p=u[1];return Object(n.useEffect)((function(){b.a.get("/logger/api/web/get/get_id").then((function(e){var t=JSON.parse(e.data).map((function(e){return e.pk}));s(t)}))}),[d]),l.a.createElement("div",{className:"add-container"},l.a.createElement("div",{className:"add"},l.a.createElement("h3",null,"Available ID"),i.map((function(e){return l.a.createElement("p",{key:e},e)})),l.a.createElement("button",{className:"btn btn-inline btn-small",onClick:function(e){a(!1),e.stopPropagation()}},"Cancel"),l.a.createElement("button",{className:"btn btn-inline btn-small",onClick:function(e){t(),p((function(e){return!e})),e.stopPropagation()}},"Yes")),l.a.createElement("div",{className:"overlay overlay-visible"}))}a(167);var W=function(e){var t=e.isAuth,a=Object(n.useState)(!1),r=Object(o.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(null),m=Object(o.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)([]),E=Object(o.a)(p,2),f=E[0],g=E[1],h=Object(n.useState)(!0),v=Object(o.a)(h,2),N=v[0],w=v[1],k=Object(n.useState)(!1),j=Object(o.a)(k,2),y=j[0],C=j[1];function _(e){i(!0);var t=f.find((function(t){return t.empid===e}));d(t)}return Object(n.useEffect)((function(){var e=!0;return e&&b.a.get("/logger/api/web/get/employee").then((function(e){var t=JSON.parse(e.data).map((function(e){var t=e.pk,a=e.fields;return a.empid=t,a}));g(t)})).catch((function(e){console.log("ERROR"+e)})),function(){return e=!1}}),[N]),t?c?l.a.createElement(P,{details:u,returnBack:function(){i(!1)}}):l.a.createElement("div",{className:"employee-container-outer"},l.a.createElement("h1",{style:{display:"flex",alignItems:"center"}},"Employees:",l.a.createElement("button",{className:"btn btn-inline btn-small",onClick:function(){return C(!0)}},"ADD")),l.a.createElement("div",{className:"employee-container"},f.map((function(e){return l.a.createElement(R,{first_name:e.first_name,last_name:e.last_name,displayEmployee:_,id:e.empid,key:e.empid,setChange:w})}))),y&&l.a.createElement(D,{setAddVisible:C,handleAdd:function(){b.a.get("/logger/api/web/get/add_employee").then((function(e){return console.log(e.data)}))}})):l.a.createElement(O.a,{to:"/homepage/build"})};a(168);function F(e){var t=e.isAuth,a=Object(n.useState)({old:"",new:"",confirm:""}),r=Object(o.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(""),m=Object(o.a)(s,2),u=m[0],d=m[1];function p(e){e.persist(),i((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(k.a)({},e.target.id,e.target.value))})),console.log(e.target)}return!1===t?l.a.createElement(O.a,{to:"/homepage/build"}):l.a.createElement("div",{className:"password-container"},l.a.createElement("label",null,"Old Password"),l.a.createElement("input",{id:"old",type:"password",className:"textarea",value:c.old,onChange:p}),l.a.createElement("label",null,"New Password"),l.a.createElement("input",{id:"new",type:"password",className:"textarea",value:c.new,onChange:p}),l.a.createElement("label",null,"Confirm New Password"),l.a.createElement("input",{id:"confirm",type:"password",className:"textarea",value:c.confirm,onChange:p}),l.a.createElement("button",{className:"btn",onClick:function(){if(""===c.old||""===c.new||""===c.confirm)d("Feilds cannot be Empty");else if(c.new!==c.confirm)d("Confirmed password did not match");else{var e={method:"post",url:"/logger/api/web/post/change_password",xsrfCookieName:"csrftoken",xsrfHeaderName:"X-CSRFTOKEN",data:{password:c.new,old:c.old,id:1},crossorigin:!0,headers:{"Access-Control-Allow-Credentials":"*"}};b.a.defaults.withCredentials=!0,b()(e).then((function(e){d(e.data)})).catch((function(e){d("Something went wrong try again later")}))}i({old:"",new:"",confirm:""})}},"Change"),l.a.createElement("div",{style:{color:"Updated Successfully"==u?"green":"red"}},"*",u))}var J=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.createElement(m.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(d,{isAuth:a,setAuth:r}),l.a.createElement(O.d,null,l.a.createElement(O.b,{exact:!0,path:"/homepage/build"},l.a.createElement(y,{isAuth:a,setAuth:r})),l.a.createElement(O.b,{path:"/homepage/build/employees"},l.a.createElement(W,{isAuth:a})),l.a.createElement(O.b,{path:"/homepage/build/projects"},l.a.createElement(_,{isAuth:a})),l.a.createElement(O.b,{path:"/homepage/build/dashboard"},l.a.createElement(w,{isAuth:a})),l.a.createElement(O.b,{path:"/homepage/build/change_password"},l.a.createElement(F,{isAuth:a})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){e.exports=a.p+"static/media/icon.fb1b5c09.jpg"},77:function(e,t,a){e.exports=a(169)},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},89:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.3d3a5fb8.chunk.js.map