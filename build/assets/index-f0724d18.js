import{j as t}from"./vendor-e9654bfa.js";import{T as r}from"./index-219fafdd.js";import{g as a}from"./get-basic-fields-application-teacher-fd71b806.js";import{g as i,a as o}from"./get-method-obtaining-fields-89a45a5a.js";import{g as m}from"./get-teacher-subdivisions-500dfe3f.js";import{g as s}from"./get-last-year-for-period-e1de6b16.js";import{t as l}from"./get-default-subdivision-d07be281.js";import{A as d}from"./index-0d70e53d.js";import"./get-method-obstaing-c0726de9.js";const p=e=>({title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",data:[...a(e),{title:"Период",type:"select",value:null,fieldName:"period",editable:!0,width:"100",required:!0,items:s()},...i(),...m(),...o(),{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),T=()=>t.jsx(r,{model:l,getForm:p,isSpecialField:!0,formId:d.PAYMENT_FOR_CHILD_CARE});export{T as default};
