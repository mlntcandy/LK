import{r as e,j as s}from"./vendor-2324f29b.js";import{cN as E,cO as d,a6 as U,Y as T,J as k,cP as q,cQ as B,cR as O,aw as G,F as L,T as _,cS as H,S as M,aA as P,d as W,U as l}from"./index-386db3e9.js";const z=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],I=t=>{const{surname:n,name:r,patronymic:c,group:o,email:u,phone:i}=t;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:n+" "+r+" "+c,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:u,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:z},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:"",type:"select",width:"100%",editable:!0,required:!0,items:E}]}},Q=()=>{var x;const[t,n]=e.useState(null),[r,c]=e.useState(d.kvdCert),[o,u]=e.useState(d.fluorographyCert),[i,v]=e.useState(d.vichRwCert),[m,A]=e.useState(d.graftCert),{data:{dataUserApplication:p}}=U.useApplications(),{data:{user:f}}=T.useUser(),[F,S]=e.useState(!1),[D,j]=e.useState(!1),[C,R]=e.useState(null),[a,h]=e.useState(null),[g,y]=e.useState(null),b=F??!1,N=!!t&&!!a&&!!C&&!!g;if((f==null?void 0:f.educationForm)!=="Очная")return s.jsx(k,{text:"Сервис доступен только для обучающихся очной формы"});if(e.useEffect(()=>{p&&(n(I(p)),R(q()),h(B()),y(O()))},[p]),!N)return null;const w=[[{dataForm:t,setDataForm:n}],[{dataForm:a,setDataForm:h}],[{dataForm:r,setDataForm:c}],[{dataForm:o,setDataForm:u}],[{dataForm:i,setDataForm:v}],[{dataForm:m,setDataForm:A}],[{dataForm:g,setDataForm:y}]];return s.jsx(G,{isDone:b,children:s.jsxs(L,{children:[s.jsx(_,{size:4,align:"left",children:"Предоставление права проживания (очная форма)"}),s.jsx(H,{stagesConfig:w}),s.jsx(M,{text:"Отправить",action:()=>P(W.USG_GETHOSTEL_O,[t,a,C,g,r,o,i,m],j,S),isLoading:D,completed:F,setCompleted:S,repeatable:!1,buttonSuccessText:"Отправлено",isDone:b,isActive:l(t)&&l(o)&&l(i)&&l(m)&&l(r)&&!!((x=a==null?void 0:a.documents)!=null&&x.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{Q as default};