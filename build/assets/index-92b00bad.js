import{r as a,j as s}from"./vendor-e9654bfa.js";import{ac as d,am as m,F as c,I as n,S as f,as as x,d as F,w as b}from"./index-d7ba1400.js";import{g as S}from"./get-divisions-96cfa1b1.js";const v=e=>({title:"Произвольный запрос",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email333",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Выберите структурное подразделение для обращения",type:"radio",fieldName:"structural-subdivision",value:null,editable:!0,items:S(e.divisions_all),isSpecificRadio:!0},{title:"Тематика обращения",type:"text",fieldName:"subject_appeal",value:"",editable:!0,required:!0},{title:"Суть обращения",type:"textarea",fieldName:"essence ",value:"",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1},alert:"Данный запрос позволит отправить Ваш запрос в любое доступное структурное подразделение. Используйте эту функцию только при крайней необходимости.",hint:"При необходимости получения скана готового документа по электронной почте или оригинала по обычной почте укажите это в поле комментария. Для получения оргигинала укажите также ваш почтовый адрес, включая индекс."}),N=()=>{const[e,i]=a.useState(null),[r,o]=a.useState(!1),[u,p]=a.useState(!1),t=r??!1,{data:{dataUserApplication:l}}=d.useApplications();return a.useEffect(()=>{l&&i(v(l))},[l]),s.jsx(m,{isDone:t,children:!!e&&!!i&&s.jsxs(c,{children:[s.jsx(n,{...e,collapsed:t,setData:i}),s.jsx(f,{text:t?"Отправлено":"Отправить",action:()=>x(F.FREE_REQUEST,[e],p,o),isLoading:u,completed:r,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:b(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{N as default};
