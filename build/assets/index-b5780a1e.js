import{r as a,j as i}from"./vendor-1f18e8c3.js";import{ad as u,an as p,F as c,I as m,S as f,at as x,d as b,x as F}from"./index-8228fcb5.js";const S=[{id:0,title:"по собственному желанию"},{id:1,title:"за академическую неуспеваемость"},{id:2,title:"за неоплату обучения"},{id:3,title:"в связи с переводом"},{id:4,title:"отчисление с расторжением договора"}],g=e=>({title:"Отчисление по инициативе обучающегося",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Причина отчисления",type:"select",fieldName:"reason",width:"100",value:null,required:!0,editable:!0,items:S},{title:"Дата отчисления c:",type:"date",fieldName:"time-before",value:"",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),h=()=>{const[e,s]=a.useState(null),[o,r]=a.useState(!1),[d,n]=a.useState(!1),t=o??!1,{data:{dataUserApplication:l}}=u.useApplications();return a.useEffect(()=>{l&&s(g(l))},[l]),i.jsx(p,{isDone:t,children:!!e&&!!s&&i.jsxs(c,{children:[i.jsx(m,{...e,collapsed:t,setData:s}),i.jsx(f,{text:t?"Отправлено":"Отправить",action:()=>x(b.CRS_EXPULSION,[e],n,r),isLoading:d,completed:o,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:F(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{h as default};
