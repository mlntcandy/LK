import{r as e,j as s}from"./vendor-e9654bfa.js";import{cc as N,cd as c,ac as T,O as U,E as k,ce as q,cf as B,cg as O,am as G,F as L,T as _,ch as H,S as M,as as W,d as z,w as l}from"./index-0d70e53d.js";const I=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],K=t=>{const{surname:n,name:r,patronymic:d,group:o,email:u,phone:i}=t;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:n+" "+r+" "+d,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:u,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:I},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:"",type:"select",width:"100%",editable:!0,required:!0,items:N}]}},$=()=>{var x;const[t,n]=e.useState(null),[r,d]=e.useState(c.kvdCert),[o,u]=e.useState(c.fluorographyCert),[i,v]=e.useState(c.vichRwCert),[m,D]=e.useState(c.graftCert),{data:{dataUserApplication:p}}=T.useApplications(),{data:{user:f}}=U.useUser(),[F,S]=e.useState(!1),[A,j]=e.useState(!1),[h,E]=e.useState(null),[a,C]=e.useState(null),[g,y]=e.useState(null),b=F??!1,R=!!t&&!!a&&!!h&&!!g;if((f==null?void 0:f.educationForm)!=="Очная")return s.jsx(k,{text:"Сервис доступен только для обучающихся очной формы"});if(e.useEffect(()=>{p&&(n(K(p)),E(q()),C(B()),y(O()))},[p]),!R)return null;const w=[[{dataForm:t,setDataForm:n}],[{dataForm:a,setDataForm:C}],[{dataForm:r,setDataForm:d}],[{dataForm:o,setDataForm:u}],[{dataForm:i,setDataForm:v}],[{dataForm:m,setDataForm:D}],[{dataForm:g,setDataForm:y}]];return s.jsx(G,{isDone:b,children:s.jsxs(L,{children:[s.jsx(_,{size:4,align:"left",children:"Предоставление права проживания (очная форма)"}),s.jsx(H,{stagesConfig:w}),s.jsx(M,{text:"Отправить",action:()=>W(z.USG_GETHOSTEL_O,[t,a,h,g,r,o,i,m],j,S),isLoading:A,completed:F,setCompleted:S,repeatable:!1,buttonSuccessText:"Отправлено",isDone:b,isActive:l(t)&&l(o)&&l(i)&&l(m)&&l(r)&&!!((x=a==null?void 0:a.documents)!=null&&x.files.length),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{$ as default};
