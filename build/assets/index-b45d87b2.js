import{r as f,b1 as v,j as m}from"./vendor-e9654bfa.js";import{az as j,aq as p,ac as N,aA as _,am as x,F as h,I as S,S as g,d as D,w as A}from"./index-d7ba1400.js";const I=async(s,o,i)=>{i(!1);const n=o.map(u=>{if(Array.isArray(u.data[0])){const e=u.data.map(r=>Object.assign({},...r==null?void 0:r.map(t=>{var y,b;const c={};return t!=null&&t.fieldName&&(c[t==null?void 0:t.fieldName]=(y=t==null?void 0:t.value)!=null&&y.title?(b=t==null?void 0:t.value)==null?void 0:b.title:t==null?void 0:t.value),c}))),l={};return l[s]=JSON.stringify(e),l}else return u.data.map(e=>{const l={};return e!=null&&e.fieldName&&(l[(e==null?void 0:e.fieldName)??""]=typeof e.value!="object"?e==null?void 0:e.value:e.value.title),e.type==="multiselect"&&(l[(e==null?void 0:e.fieldName)??""]=JSON.stringify(e==null?void 0:e.value.map(r=>r.title))),l})}).flat(),a=Object.assign({},...n);!(await j.sendBufferHolidayTransferFx({employeeGuid:a.jobGuid,reason:a.reason,period:{from:{startDate:a.holiday_old_start,endDate:a.holiday_old_end},to:{startDate:a.holiday_new_start,endDate:a.holiday_new_end}}})).isError&&i(!0)},w=(s,o,i)=>{const{surname:n,name:a,patronymic:d}=s;return{title:"Заявление о переносе отпуска",data:[{title:"ФИО",type:"simple-text",value:n+" "+a+" "+d,fieldName:"fio",visible:!0},{title:"Должность",type:"simple-text",fieldName:"post",value:o[i].jobTitle.toString(),visible:!0},{title:"Подразделение",type:"simple-text",value:o[i].subDivision.toString(),fieldName:"subDivision",visible:!0},{title:"Начало отпуска до переноса:",type:"date",value:"",fieldName:"holiday_old_start",editable:!0,mask:!0,required:!0,minValueInput:p(0)},{title:"",type:"simple-text",value:o[i].jobGuid.toString(),fieldName:"jobGuid"},{title:"Окончание отпуска до переноса:",type:"date",value:"",fieldName:"holiday_old_end",editable:!0,mask:!0,required:!0,minValueInput:p(0)},{title:"Начало отпуска после переноса:",type:"date",value:"",fieldName:"holiday_new_start",editable:!0,mask:!0,required:!0,minValueInput:p(5)},{title:"Окончание отпуска после переноса:",type:"date",value:"",fieldName:"holiday_new_end",editable:!0,mask:!0,required:!0,minValueInput:p(5)},{title:"Причина",type:"select",fieldName:"reason",value:"",editable:!0,required:!0,width:"100%",items:[{id:0,title:"Семейные обстоятельства"},{id:1,title:"Рабочая необходимость"}]}]}},q=()=>{var t;const[s,o]=f.useState(null),{data:{dataUserApplication:i,dataWorkerApplication:n}}=N.useApplications(),{loading:a}=_.useBufferHolidayTransfer(),[d,u]=f.useState(!1),e=d??!1,{id:l}=v(),r=+l;return f.useEffect(()=>{i&&n&&!a&&o(w(i,n,r))},[i,r,a]),m.jsx(x,{isDone:e,children:!!s&&!!o&&m.jsxs(h,{children:[m.jsx(S,{...s,collapsed:e,setData:o}),m.jsx(g,{text:"Отправить",action:()=>I(D.DISMISSAL,[s],u),isLoading:a,completed:d,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:e,isActive:A(s)&&(((t=s.optionalCheckbox)==null?void 0:t.value)??!0),alerts:!1})]})})};export{q as default};
