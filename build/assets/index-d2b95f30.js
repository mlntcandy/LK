import{r as e,j as a}from"./vendor-3b6459b9.js";import{cR as n,s as T,a8 as U,a0 as _,cS as k,cT as q,cU as B,B as w,F as G,T as L,cV as M,S as V,aN as W,n as z,b as s}from"./index-b517f30d.js";const H=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],I=t=>{const{surname:l,name:r,patronymic:d,group:o,email:u,phone:i}=t;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:l+" "+r+" "+d,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:u,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:H},{title:"Период проживания - с:",type:"date",value:"",fieldName:"begin_of_stay",editable:!0,required:!0},{title:"по:",type:"date",value:"",fieldName:"end_of_stay",editable:!0,required:!0}]}},P=()=>{var v;const[t,l]=e.useState(null),[r,d]=e.useState(n.kvdCert),[o,u]=e.useState(n.fluorographyCert),[i,x]=e.useState(n.vichRwCert),[c,D]=e.useState(n.graftCert),{data:{dataUserApplication:m}}=T.useApplications(),{data:{user:p}}=U.useUser(),[F,C]=e.useState(!1),[A,j]=e.useState(!1),[S,N]=e.useState(null),[f,y]=e.useState(null),[g,b]=e.useState(null),h=F??!1,R=!!t&&!!g&&!!S&&!!f;if((p==null?void 0:p.educationForm)!=="Недоступен")return a.jsx(_,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});if(e.useEffect(()=>{m&&(l(I(m)),N(k()),b(q()),y(B()))},[m]),!R)return null;const E=[[{dataForm:t,setDataForm:l}],[{dataForm:g,setDataForm:b}],[{dataForm:r,setDataForm:d}],[{dataForm:o,setDataForm:u}],[{dataForm:i,setDataForm:x}],[{dataForm:c,setDataForm:D}],[{dataForm:f,setDataForm:y}]];return a.jsx(w,{isDone:h,children:a.jsxs(G,{children:[a.jsx(L,{size:4,align:"left",children:"Предоставление права проживания (заочная форма)"}),a.jsx(M,{stagesConfig:E}),a.jsx(V,{text:"Отправить",action:()=>W(z.USG_GETHOSTEL_Z,[t,g,S,f,r,o,i,c],j,C),isLoading:A,completed:F,setCompleted:C,repeatable:!1,buttonSuccessText:"Отправлено",isDone:h,isActive:s(t)&&(((v=t.optionalCheckbox)==null?void 0:v.value)??!0)&&s(t)&&s(o)&&s(i)&&s(c)&&s(r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{P as default};