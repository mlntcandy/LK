import{s as E,r as i,n as y,j as e,R as N}from"./vendor-e9654bfa.js";import{bI as S,c0 as c,O as b,x as z,aR as A,G as D,T as F,M as p,f as g,S as I}from"./index-d7ba1400.js";const L="Физическое лицо с указанными данными не найдено",R=E.span`
    display: flex;
    margin: 0 auto;
    gap: 5px;
    text-align: center;
`,P=()=>{const[a,u]=i.useState(""),[o,x]=i.useState("");S();const d=y(c.getLoginEuzFx.pending),[m,h]=i.useState(!1),{data:{loginEuz:s}}=b.useUser(),l=()=>{c.getLoginEuzFx({fio:a,pn:o})},f=t=>{t.key==="Enter"&&l()},j=()=>{const t=s.split("Логин ").slice(1),n=[];for(const r of t)n.push(e.jsxs(R,{children:["Логин ",r.split(":")[0]," ",e.jsx("strong",{children:r.split(":")[1]})]}));return n};return e.jsx(z,{height:"100%",alignItems:"center",padding:"15px",children:e.jsxs(A,{height:"fit-content",maxWidth:"500px",orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"15px",onKeyDown:f,noAppearanceInMobile:!0,children:[e.jsx(D,{}),e.jsx(F,{size:4,align:"left",children:"Узнать свой логин ЕУЗ"}),e.jsx(p,{type:"info",title:"Получение логина ЕУЗ",children:"Для того, чтобы узнать свой логин единой учетной записи, укажите ваши ФИО полностью (например, Иванов Петр Иванович) и 4 последние цифры номера паспорта:"}),e.jsx(g,{value:a,setValue:u,title:"ФИО полностью",placeholder:"Иванов Иван Иванович"}),e.jsx(g,{value:o,setValue:x,title:"Последние 4 цифры номера паспорта",placeholder:"1234",type:"password"}),e.jsx(I,{text:"Узнать логин ЕУЗ",action:()=>l(),isLoading:d,completed:m,setCompleted:h,isActive:!!a.length&&o.length===4,width:"100%"}),!!s&&j().map((t,n)=>e.jsx(N.Fragment,{children:t},n)),!!s&&s===L&&e.jsx(p,{type:"failure",title:"Не удалось найти пользователя"})]})})};export{P as default};
