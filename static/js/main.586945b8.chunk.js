(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),l=(a(15),a(5)),s=a(4),m=a(1),u=(a(17),function(e){var t=e.createNewTask,a=Object(n.useState)(""),r=Object(m.a)(a,2),o=r[0],l=r[1];return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(o),l("")},className:"my-2 row"},c.a.createElement("div",{className:"col-9"},c.a.createElement("input",{type:"text",placeholder:"Enter a new task",value:o,onChange:function(e){return l(e.target.value)},className:"form-control"})),c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{className:"btn btn-primary btn-sm"},"Add task")))}),i=function(e){var t=e.task,a=e.toggleTask;return c.a.createElement("tr",null,c.a.createElement("td",{className:"d-flex justify-content-between"},t.name,c.a.createElement("input",{type:"checkbox",checked:t.done,onChange:function(){a(t)}})))},d=function(e){var t,a=e.tasks,n=e.toggleTask,r=e.showCompleted,o=void 0!==r&&r;return c.a.createElement("table",{className:"table table-dark table-striped table-bordered border-secondary"},c.a.createElement("thead",null,c.a.createElement("tr",{className:"table-primary"},c.a.createElement("th",null,"Tasks"))),c.a.createElement("tbody",null,(t=o,a.filter(function(e){return e.done===t}).map(function(e){return c.a.createElement(i,{task:e,key:e.name,toggleTask:n})}))))},f=function(e){var t=e.isChecked,a=e.setShowCompleted,n=e.cleanTasks;return c.a.createElement("div",{className:"d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary"},c.a.createElement("div",{className:"form-check form-switch"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",checked:t,onChange:function(e){return a(e.target.checked)}}),"",c.a.createElement("label",null,"Show Task Done")),c.a.createElement("button",{onClick:function(){window.confirm("Are you sure you want to delete all completed tasks?")&&n()},className:"btn btn-danger btn-sm"},"Clear"))};var b=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),i=Object(m.a)(o,2),b=i[0],k=i[1],E=function(e){r(a.map(function(t){return t.name===e.name?Object(l.a)({},t,{done:!t.done}):t}))};return Object(n.useEffect)(function(){var e=localStorage.getItem("tasks");e&&r(JSON.parse(e))},[]),Object(n.useEffect)(function(){localStorage.setItem("tasks",JSON.stringify(a))},[a]),c.a.createElement("main",{className:"bg-dark vh-100 text-white"},c.a.createElement("div",{className:"container p-4 col-md-4 offset-md-4"},c.a.createElement(u,{createNewTask:function(e){a.find(function(t){return t.name===e})||r([].concat(Object(s.a)(a),[{name:e,done:!1}]))}}),c.a.createElement(d,{tasks:a,toggleTask:E}),c.a.createElement(f,{isChecked:b,setShowCompleted:function(e){return k(e)},cleanTasks:function(){r(a.filter(function(e){return!e.done})),k(!1)}}),!0===b&&c.a.createElement(d,{tasks:a,toggleTask:E,showCompleted:b})))};a(19);o.a.createRoot(document.getElementById("root")).render(c.a.createElement(b,null))},6:function(e,t,a){e.exports=a(21)}},[[6,2,1]]]);
//# sourceMappingURL=main.586945b8.chunk.js.map