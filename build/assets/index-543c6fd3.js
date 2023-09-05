import{r as b,s as j,j as e,R as C,L as y,an as M,be as O,aM as P}from"./vendor-1f18e8c3.js";import{V as D,K as F,H as w,Q as I,y as S,n as T,bq as U,br as _,bs as z,bt as f,bu as H,aV as N,bv as $,bw as G,bx as V,by as K,bz as q,bA as Q,B as v,a7 as x,bB as m,bC as Y,bD as J,bE as X,bF as Z,a1 as ee,E as te,W as se,bG as re}from"./index-8228fcb5.js";const ae=t=>t==="Male"?"Мужской":"Женский",k=b.memo(ie),ne=j.div`
    width: 100%;
`;function ie({user:t}){const{status:s,sex:a,birthday:o,code:n,faculty:h,course:u,group:c,specialty:p,specialization:g,degreeLength:W,educationForm:A,finance:L,degreeLevel:E,enterYear:R,subdivisions:i,authorIDs:l}=t,B=[{key:"Статус",value:s},{key:"Пол",value:ae(a)},{key:"Дата рождения",value:o},{key:"Код студента",value:n},{key:"Факультет",value:h},{key:"Курс",value:u},{key:"Группа",value:c},{key:"Направление",value:p},{key:"Специализация",value:g},{key:"Срок обучения",value:W},{key:"Форма обучения",value:A},{key:"Вид финансирования",value:L},{key:"Сведения о трудоустройстве",value:!!(i!=null&&i.length)&&(i==null?void 0:i.map((r,d)=>e.jsxs(C.Fragment,{children:[e.jsxs("div",{style:{width:"100%",marginTop:"5px",lineHeight:"1.8rem"},children:[r.subdivision&&e.jsxs("div",{children:["Подразделение: ",r.subdivision]}),r.post&&e.jsxs("div",{children:["Должность: ",r.post]}),r.wage&&r.jobType&&e.jsxs("div",{children:["Ставка: ",r.wage,"; ",r.jobType]})]}),d<i.length-1&&e.jsx(D,{margin:"16px 0",width:"100%"})]},d)))},{key:"Уровень образования",value:E},{key:"Год набора",value:R},{key:"Авторские идентификаторы",value:!!l&&e.jsxs("div",{style:{width:"100%",marginTop:"5px",lineHeight:"1.8rem"},children:[l.wosReasearcher&&e.jsxs("div",{children:["Web of Science Researcher ID: ",l.wosReasearcher]}),l.scopus&&e.jsxs("div",{children:["Scopus Author ID: ",l.scopus]}),l.eLibrary&&e.jsxs("div",{children:["eLibrary Author ID: ",l.eLibrary]})]})}];return e.jsx(ne,{children:B.map(({key:r,value:d})=>!!d&&e.jsx(F,{keyStr:r,value:d,direction:typeof d=="object"?"vertical":"horizontal"},r))})}const le=j.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,oe=j.div``,ce=({orders:t})=>e.jsxs(le,{children:[!(t!=null&&t.length)&&e.jsx(w,{children:"Нет приказов"}),t==null?void 0:t.map(s=>e.jsx(oe,{children:s},s))]}),de=b.memo(ce),xe=({pages:t,currentPage:s})=>{const{data:{user:a}}=I.useUser();return a?e.jsx(S,{children:e.jsx(T,{height:"100%",noAppearanceInMobile:!0,maxWidth:"750px",children:t[s]})}):null},he=({pages:t,user:s,currentPage:a,setCurrentPage:o})=>{const{fullName:n,avatar:h,user_status:u,degreeLevel:c}=s,p=u==="stud"?"Студент":"Сотрудник",g=()=>{X.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:Z.logout})};return e.jsxs(U,{children:[e.jsx(_,{fullName:n,width:"calc(100% + 32px)",height:"210px",baseScale:1.5}),e.jsxs(z,{children:[e.jsxs(f,{maxWidth:"530px",height:"180px",orientation:"vertical",children:[e.jsx(H,{children:e.jsx(N,{name:n,avatar:h,width:"110px",height:"110px",marginRight:"0",border:!0,avatarModal:!0})}),e.jsxs($,{children:[e.jsxs(G,{children:[e.jsx("b",{children:n}),e.jsx(w,{maxWidth:"100%",width:"100%",align:"center",fontSize:"0.9rem",children:e.jsx(V,{words:[p,c??""]})})]}),e.jsx(K,{sliderWidth:"100%",pages:t,currentPage:a,setCurrentPage:o,appearance:!1})]})]}),e.jsx(f,{maxWidth:"250px",height:"fit-content",children:e.jsxs(q,{children:[e.jsx(y,{to:Q,children:e.jsx(v,{background:x.white.transparent2,icon:e.jsx(m,{width:"30px",background:x.grey.main,children:e.jsx(M,{})}),width:"100%",height:"73px",text:"Настройки",direction:"vertical",shrinkTextInMobile:!0})}),e.jsx(Y,{type:"v-button"}),e.jsx(y,{to:J,children:e.jsx(v,{background:x.white.transparent2,icon:e.jsx(m,{width:"30px",background:x.purple.main,children:e.jsx(O,{})}),text:"Изменить",width:"100%",height:"73px",direction:"vertical",shrinkTextInMobile:!0})}),e.jsx(v,{background:x.white.transparent2,icon:e.jsx(m,{width:"30px",background:x.red.main,children:e.jsx(P,{})}),text:"Выйти",height:"73px",onClick:g,width:"calc(50% - 5px)",direction:"vertical",shrinkTextInMobile:!0})]})})]})]})},ue=j.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    align-items: center;
`,ge=()=>{const{data:{user:t},error:s}=I.useUser(),{allRoutes:a}=ee.useMenu(),[o,n]=b.useState(0);if(!t||!a)return null;if(s)return e.jsx(te,{text:s});const h=[{title:"Учетная карточка",content:e.jsx(k,{user:t})},{title:"Приказы",content:e.jsx(de,{orders:t.orders})}],u=[{title:"Учетная карточка",content:e.jsx(k,{user:t})}],c=t.user_status==="stud"?h:u;return e.jsx(se,{load:function(){},loading:!1,data:[],error:null,children:e.jsxs(ue,{children:[e.jsx(he,{user:t,currentPage:o,setCurrentPage:n,pages:c}),e.jsx(S,{children:e.jsx(T,{height:"100%",maxWidth:"750px",children:e.jsx(re,{})})}),e.jsx(xe,{currentPage:o,pages:c.map(p=>p.content)})]})})};export{ge as default};
