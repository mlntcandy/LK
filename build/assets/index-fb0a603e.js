import{j as t}from"./vendor-e9654bfa.js";import{T as i}from"./index-facc3ca2.js";import{g as r}from"./get-basic-fields-application-teacher-5af9e295.js";import{g as a,a as l}from"./get-method-obtaining-fields-0c9569f9.js";import{g as o}from"./get-teacher-subdivisions-500dfe3f.js";import{t as m}from"./get-default-subdivision-ee1a988f.js";import{A as s}from"./index-d7ba1400.js";import"./get-method-obstaing-c0726de9.js";const d=e=>({title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",data:[...r(e),{title:"ФИО ребенка",value:null,fieldName:"child_fio",mask:!0,editable:!0,required:!0},{title:"Дата рождения ребенка",type:"date",value:"",editable:!0,fieldName:"birth_child",required:!0},...a(),...o(),...l(),{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),A=()=>t.jsx(i,{model:m,getForm:d,isSpecialField:!0,formId:s.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE});export{A as default};
