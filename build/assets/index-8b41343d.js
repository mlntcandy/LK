import{j as i,V as p,z as d,F as u}from"./vendor-f1fdae2f.js";import{r as x,Y as f,a2 as r,M as a,B as s,E as h,a3 as g,u as m,W as w,a4 as y,w as F,j,a5 as k}from"./index-7f2344cd.js";const C=()=>[{title:"Запрос",field:"subject",priority:"one",search:!0,showFull:!0,render:(t,e)=>{var n;return i.jsxs(x,{jc:"space-between",children:[t,!!((n=e==null?void 0:e.files_output)!=null&&n.length)&&i.jsx(f,{icon:i.jsx(p,{}),background:"transparent",href:e==null?void 0:e.files_output[0].url})]})}},{title:"Дата",field:"created",priority:"two",sort:!0,type:"date",align:"center",width:"120px"},{title:"Рег. номер",field:"num",priority:"five",align:"center",width:"170px"},{title:"Статус",field:"status",priority:"one",width:"130px",catalogs:[...Object.values(r).map((t,e)=>({id:e.toString(),title:t}))??[]],render:t=>{const e=A(t);return i.jsx(a,{type:e==="Готово"?"success":e==="Отклонено"?"failure":"alert",title:e||"—",align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Структурное подразделение, адрес",priority:"four",field:"response_div",showFull:!1},{title:"Примечание",field:"comment",priority:"five",width:"150px"},{title:"Файлы для скачивания",align:"center",field:"files_output",priority:"five",width:"150px",render:t=>!!t.length&&i.jsx(s,{onClick:()=>v(t),text:"Скачать",background:"transparent",textColor:h.green.main,width:"100%"})}],A=t=>{switch(t){case"На рассмотрении":return r.pending;case"Принято в работу":return r.pending;case"Получено":return r.ready;default:return t}},v=t=>{t.map(e=>{const n=document.createElement("a");n.href=e.url,n.download=e.name,n.target="_blank",n.click(),n.remove()})},M=({isTeachers:t})=>{const{data:{listApplication:e,dataUserApplication:n},error:l}=g.useApplications(),{open:o}=m(),c=()=>{o(i.jsx(k,{isTeachers:t,currentFormEducation:n==null?void 0:n.educationForm}),"Создать заявку")};return i.jsx(w,{load:()=>y.getApplicationsFx(),loading:!e,error:l,data:e,children:i.jsxs(F,{topRightCornerElement:i.jsx(s,{onClick:c,text:"Подать заявку",background:"var(--reallyBlue)",textColor:"#fff",icon:i.jsx(d,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[i.jsx(a,{type:"info",title:"Информация",icon:i.jsx(u,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),i.jsx(j,{loading:!e,columns:C(),data:e,maxOnPage:7})]})})};export{M as T};
