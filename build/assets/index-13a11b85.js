import{r as i,j as l}from"./vendor-e9654bfa.js";import{ac as m,am as p,F as n,I as c,S as f,as as b,d as v,w as x}from"./index-d7ba1400.js";const y=[{id:0,title:"Экзамен"},{id:1,title:"Дифференцированный зачет"},{id:2,title:"Курсовой проект"},{id:3,title:"Курсовую работу"},{id:4,title:"Практику"}],h=[{id:0,title:"1"},{id:1,title:"2"},{id:2,title:"3"},{id:3,title:"4"},{id:4,title:"5"},{id:5,title:"6"},{id:6,title:"7"},{id:7,title:"8"},{id:8,title:"9"},{id:9,title:"10"},{id:10,title:"11"},{id:11,title:"12"},{id:12,title:"13"}],F=[{id:0,title:"Очная"},{id:1,title:"Заочная"},{id:2,title:"Очно-заочная"}],g=[{id:0,title:"Удовлетворительно"},{id:1,title:"Хорошо"}],N=[{id:0,title:"2022/2023"},{id:0,title:"2021/2022"},{id:1,title:"2020/2021"},{id:3,title:"2019/2020"},{id:4,title:"2018/2019"},{id:5,title:"2017/2018"},{id:6,title:"2016/2017"}],_=e=>({title:"Заявление на пересдачу для получения диплома с отличием",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Прошу разрешить мне для получения диплома с отличием пересдать",fieldName:"type_exam",value:"",type:"select",width:"100%",editable:!0,required:!0,items:y},{title:"Дисциплина",fieldName:"name_discipline",value:"",type:"text",editable:!0,required:!0},{title:"Семестр",fieldName:"semester_number",value:"",type:"select",width:"100%",editable:!0,required:!0,items:h},{title:"Форма обучения",fieldName:"form_training",value:"",type:"select",width:"100%",editable:!0,required:!0,items:F},{title:"Учебный год",fieldName:"academic_year_of_delivery",value:"",type:"select",width:"100%",editable:!0,required:!0,items:N},{title:"Полученная оценка",fieldName:"received_assessment",value:"",type:"select",width:"100%",editable:!0,required:!0,items:g}],alert:"В соответствии с положением о проведении текущего контроля успеваемости и промежуточной аттестации обучающихся в Московском политехническом университете в порядке исключения допускается пересдача только одной дисциплины на последнем году обучения с целью получения диплома с отличием."}),A=()=>{const[e,s]=i.useState(null),[d,r]=i.useState(!1),[o,u]=i.useState(!1),t=d??!1,{data:{dataUserApplication:a}}=m.useApplications();return i.useEffect(()=>{a&&s(_(a))},[a]),l.jsx(p,{isDone:t,children:!!e&&!!s&&l.jsxs(n,{children:[l.jsx(c,{...e,collapsed:t,setData:s}),l.jsx(f,{text:t?"Отправлено":"Отправить",action:()=>b(v.DIPL_OTL,[e],u,r),isLoading:o,completed:d,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:x(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{A as default};
