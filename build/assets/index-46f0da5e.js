import{u as d,y as f,x as r,p as v,n as p,r as m,ah as E,j as i}from"./vendor-e9654bfa.js";import{ai as g,aj as y,ak as h,al as F,ac as T,am as b,F as A,I as B,S as w,d as S,w as j,an as W}from"./index-d7ba1400.js";import{S as D}from"./send-hr-form-holiday-work-22f40a8f.js";const $=d(),I=d(),k=f(async()=>{const{data:e}=await y.get(`InternalPartTime.GetAllHistory?PersonalGuid=${h(F()??"").IndividualGuid}`);return e.orders});r({clock:$,target:k});const l=f(async e=>(await y.post("Weekend.AddWeekend",e)).data);r({clock:I,target:l});const x=v([]),H=l.pending;r({clock:k.doneData,target:x});r({clock:l.doneData,fn:e=>{const t=e;return t.isError?{message:t.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:g.evokePopUpMessage});r({clock:l.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:g.evokePopUpMessage});const N={useBufferPartTimeEmployment:()=>({data:p(x),loading:p(H)})},O=(e,t)=>{const{surname:a,name:s,patronymic:o}=e;return{title:"Заявление на трудоустройство по совместительству",data:[{title:"ФИО",value:a+" "+s+" "+o,fieldName:"fio",type:"simple-text",visible:!0},{title:"Подразделениe, куда производится трудорустройство",type:"auto-complete-input",fieldName:"newPlaceOfWork",value:"",width:"100%",suggestions:t,required:!0,mask:!0,visible:!0,placeholder:"Начните вводить название подразделения"},{title:"Должность",value:null,fieldName:"post",mask:!0,editable:!0,required:!0},{title:"Ставка",type:"select",fieldName:"rate",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"1"},{id:1,title:"0.5"},{id:2,title:"0.25"}]}]}},L=()=>{var c;const[e,t]=m.useState(null),{data:{dataUserApplication:a}}=T.useApplications(),{loading:s}=N.useBufferPartTimeEmployment(),[o,u]=m.useState(!1),n=o??!1,P=E(W);return m.useEffect(()=>{a&&!s&&t(O(a,P))},[a,s]),i.jsx(b,{isDone:n,children:!!e&&!!t&&i.jsxs(A,{children:[i.jsx(B,{...e,collapsed:n,setData:t}),i.jsx(w,{text:"Отправить",action:()=>D(S.HOLIDAY_WORK,[e],u),isLoading:s,completed:o,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:n,isActive:j(e)&&(((c=e.optionalCheckbox)==null?void 0:c.value)??!0)})]})})};export{L as default};
