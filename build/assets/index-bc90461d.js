import{y as l,s as p,o as d,bZ as g,j as e}from"./vendor-f1fdae2f.js";import{aT as m,V as x,W as P,w as j,m as k,k as v}from"./index-7f2344cd.js";import{c as y,L as w}from"./index-63feeec3.js";import"./index-e92a14a5.js";const F=l(async n=>{const{search:o="",page:c,limit:r,filter:s}=n,{data:a}=await m(o,(s==null?void 0:s.id.toString())??"",c,r);return{results:a.items}}),u=y({getFx:F,limit:50}),L=p.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 125px);
    }
`,W=()=>{const{$isPending:n,$items:o}=u,c=d(n),r=g(),s=d(o),{data:{user:a}}=x.useUser(),i=r.params.filter??(a==null?void 0:a.group)??"",h=t=>(t==null?void 0:t.title)==="Все"||!(t!=null&&t.id)?null:`Группа: ${t==null?void 0:t.id} • Всего: ${(s==null?void 0:s.length)??0}`;return e.jsx(P,{load:function(){},loading:c,error:null,data:s,children:e.jsx(L,{children:e.jsx(j,{children:e.jsx(w,{searchPlaceholder:"Поиск студентов",paginationList:u,filterRequest:k,filterPlaceholder:"Группа",defaultFilter:i,filter:(a==null?void 0:a.user_status)==="stud"?i:void 0,customMask:v.groupMask,underSearchText:h})})})})};export{W as default};
