import{r as o,j as i}from"./vendor-f1fdae2f.js";import{a5 as d,av as c,F as m,I as f,S as x,az as b,d as g,Q as v}from"./index-4822c931.js";const F=e=>{const{surname:t,name:a,patronymic:l,group:s,email:r,phone:p}=e;return{title:"Переселение внутри общежития",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+l,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:s,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:r,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:p,editable:!0,required:!0},{title:"Комната",fieldName:"room",value:"",placeholder:"Укажите номер комнаты, в которую хотите переселиться",editable:!0,required:!1},{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",placeholder:"Укажите необходимость переселения",editable:!0,required:!0}]}},h=()=>{var n;const[e,t]=o.useState(null),{data:{dataUserApplication:a}}=d.useApplications(),[l,s]=o.useState(!1),[r,p]=o.useState(!1),u=l??!1;return o.useEffect(()=>{a&&t(F(a))},[a]),i.jsx(c,{isDone:u,children:!!e&&!!t&&i.jsxs(m,{children:[i.jsx(f,{...e,collapsed:u,setData:t}),i.jsx(x,{text:"Отправить",action:()=>b(g.USG_RELOCATION_INNER,[e],p,s),isLoading:r,completed:l,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:u,isActive:v(e)&&(((n=e.optionalCheckbox)==null?void 0:n.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{h as default};
