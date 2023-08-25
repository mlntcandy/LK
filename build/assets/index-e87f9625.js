import{r as a,ah as P,ag as q,b1 as A,j as r,C as R}from"./vendor-e9654bfa.js";import{aq as B,ac as O,aB as W,am as E,F as I,B as H,ar as L,I as U,S as _,d as $,w as G,an as M,aC as K}from"./index-0d70e53d.js";import{s as V}from"./send-hr-form-work-transfer-bc53b345.js";const Y=(i,e,l,t,n,u,d,c,f,p,o,h,m,x,v,N)=>{const{surname:b,name:S,patronymic:g}=i;return{title:"Заявление на перевод",data:[{title:"ФИО",value:b+" "+S+" "+g,fieldName:"fio",type:"simple-text",visible:!0},{title:"",type:"simple-text",value:e[l].jobGuid.toString(),fieldName:"jobGuid",visible:!1},{title:"Текущее место работы",type:"text-header",fieldName:"post",value:"",visible:!0},{title:"Должность",type:"simple-text",fieldName:"post",value:e[l].jobTitle.toString(),visible:!0},{title:"Подразделение",type:"simple-text",value:e[l].subDivision.toString(),fieldName:"subDivision",visible:!0},{title:"Cтавка",type:"simple-text",value:e[l].rate.toString(),fieldName:"currentRate",visible:!0},{title:"Новое место работы",type:"text-header",fieldName:"post",value:"",visible:!0},{title:"Подразделение",type:"auto-complete-input",fieldName:"newPlaceOfWork",value:c,width:"100%",suggestions:N,required:!0,mask:!0,visible:!0,placeholder:"Начните вводить название подразделения",onChange:s=>{f(s)}},{title:"Должность",value:u,fieldName:"newPost",editable:!0,mask:!0,required:!0,onChange:s=>{d(s)}},{title:"Тип занятости",type:"select",fieldName:"employment",value:t,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Основное место работы"},{id:1,title:"По совместительству"}],onChange:s=>{n(s),s.title=="По совместительству"&&p.title=="1"&&o(null)}},{title:"Ставка",type:"select",fieldName:"newRate",value:p,editable:!0,required:!0,width:"100%",items:(t==null?void 0:t.title)=="По совместительству"?[{id:1,title:"0.5"},{id:2,title:"0.25"}]:[{id:0,title:"1"},{id:1,title:"0.5"},{id:2,title:"0.25"}],onChange:s=>{o(s)}},{title:"При устройстве по совместительству ставка не может превышать 0.5",type:"text-warning",fieldName:"PartTime",value:null,visible:(t==null?void 0:t.title)=="По совместительству",required:!1,width:"100%"},{title:"Тип совместительства",type:"select",fieldName:"parttime_type",value:x,editable:!0,required:(t==null?void 0:t.title)=="По совместительству",specialType:"PartTime",width:"100%",items:[{id:0,title:"Внутреннее"},{id:1,title:"Внешнее"}],onChange:s=>{v(s)}},{title:"Дата перевода",type:"date",value:h,fieldName:"transferDate",editable:!0,mask:!0,required:!0,minValueInput:B(0),onChange:s=>{m(s)}}]}},z=i=>{const e=i.find(l=>l.fieldName==="employment");return e!=null&&e.value&&(e==null?void 0:e.value).title==="По совместительству"?{reason:"PartTime"}:{reason:null}},Z=()=>{var w;const[i,e]=a.useState(null),l=P(M),{data:{dataUserApplication:t,dataWorkerApplication:n}}=O.useApplications(),{loading:u}=W.useBufferWorkTransfer(),[d,c]=a.useState(!1),[f,p]=a.useState(null),[o,h]=a.useState(null),[m,x]=a.useState(null),[v,N]=a.useState(null),[b,S]=a.useState(null),[g,s]=a.useState(null),[k,D]=a.useState({}),j=P(K),C=d??!1,y=q(),{id:F}=A(),T=+F;return a.useEffect(()=>{i&&t&&D(z(i.data))},[i]),a.useEffect(()=>{t&&n&&!u&&e(Y(t,n,T,o,h,m,x,v,N,b,S,g,s,f,p,l))},[t,T,u,o,m,v,b,g,f]),r.jsx(E,{isDone:C,children:!!i&&!!e&&r.jsxs(I,{children:[r.jsx(H,{text:"Назад к кадровым заявлениям",icon:r.jsx(R,{}),onClick:()=>y.push(L),background:"transparent",textColor:"var(--blue)"}),r.jsx(U,{...i,collapsed:C,setData:e,specialFieldsNameConfig:k}),r.jsx(_,{text:"Отправить",action:()=>V($.HOLIDAY_WORK,[i],c,j),isLoading:u,completed:d,setCompleted:c,repeatable:!1,buttonSuccessText:"Отправлено",isDone:C,isActive:G(i)&&(((w=i.optionalCheckbox)==null?void 0:w.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{Z as default};
