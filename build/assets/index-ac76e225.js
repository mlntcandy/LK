import{r as t,j as o}from"./vendor-1f18e8c3.js";import{ce as d,ad as j,cf as A,cg as E,an as N,F as R,T,ci as B,S as k,x as l,at as w,d as I}from"./index-8228fcb5.js";const U=[{id:0,title:"дети-сироты и дети, оставшиеся без попечения родителей, лица из числа детей-сирот и детей, оставшихся без попечения родителей"},{id:1,title:"дети-инвалиды, инвалиды I и II групп, инвалиды с детства"},{id:2,title:"подвергшиеся воздействию радиации вследствие катастрофы на Чернобыльской АЭС и иных радиационных катастроф, вследствие ядерных испытаний на Семипалатинском полигоне"},{id:3,title:"инвалиды вследствие военной травмы или заболевания, полученных в период прохождения военной службы, и ветераны боевых действий"},{id:4,title:"являющиеся инвалидами вследствие военной травмы или заболевания, полученных в период прохождения военной службы, и ветеранами боевых действий, а также из числа граждан, проходивших в течение не менее трех лет военную службу по контракту на воинских должностях, подлежащих замещению солдатами, матросами, сержантами, старшинами, и уволенных с военной службы по основаниям, предусмотренным подпунктами «б» – «г» пункта 1, подпунктом «а» пункта 2 и подпунктами «а» – «в» пункта 3 статьи 51 Федерального закона от 28.03.1998 N 53-ФЗ «О воинской обязанности и военной службе"},{id:5,title:"получившие государственную социальную помощь"}],q=e=>{const{surname:r,name:a,patronymic:c,group:s,email:m,phone:i}=e;return{title:"Контактная информация",hint:"Необходимо прикрепить документ, подтверждающий соответствие льготной категории",data:[{title:"ФИО",fieldName:"fio",value:r+" "+a+" "+c,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:s,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:m,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Отношусь к льготной категории граждан:",fieldName:"category",value:"",type:"select",width:"100%",editable:!0,required:!0,items:U}]}},M=()=>{const[e,r]=t.useState(null),[a,c]=t.useState(d.kvdCert),[s,m]=t.useState(d.fluorographyCert),[i,y]=t.useState(d.vichRwCert),[n,b]=t.useState(d.graftCert),{data:{dataUserApplication:u}}=j.useApplications(),[g,F]=t.useState(!1),[p,C]=t.useState(null),[f,S]=t.useState(null),[x,v]=t.useState(!1),h=g??!1;t.useEffect(()=>{u&&(r(q(u)),C(A()),S(E()))},[u]);const D=()=>w(I.USG_GETHOSTEL_BENEFIT,[e,f,p,a,s,i,n],v,F);return o.jsx(N,{isDone:h,children:!!e&&!!r&&!!f&&!!p&&o.jsxs(R,{children:[o.jsx(T,{size:4,align:"left",children:"Предоставление права проживания льготной категории граждан"}),o.jsx(B,{stagesConfig:[[{dataForm:e,setDataForm:r}],[{dataForm:p,setDataForm:C}],[{dataForm:f,setDataForm:S}],[{dataForm:a,setDataForm:c},{dataForm:s,setDataForm:m},{dataForm:i,setDataForm:y},{dataForm:n,setDataForm:b}]]}),o.jsx(k,{text:"Отправить",action:()=>D(),isLoading:x,completed:g,setCompleted:F,repeatable:!1,buttonSuccessText:"Отправлено",isDone:h,isActive:!!s&&!!i&&!!n&&!!a&&l(e)&&l(s)&&l(i)&&l(n)&&l(a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{M as default};
