import{u as b,p as m,m as D,x as f,j as l,o as y,s as N,r as L}from"./vendor-f1fdae2f.js";import{S as k}from"./index-3c410008.js";import{af as w,h as A,ag as C,ah as V,T as E,X as F}from"./index-4822c931.js";const G=50;function M(t){const{getFx:s,limit:o=G,reset:u=[]}=t,r=b(),g=b(),c=m(null),n=m(null);n.on(s.doneData,(e,a)=>[...e||[],...a.results||[]]),n.reset([r,...u]);const d=m(1);d.on(s.doneData,e=>++e),d.reset([r,...u]);const p=s.pending,h=m(!1);h.reset([r,...u]);const i=D(n,h,(e,a)=>!!(e!=null&&e.length)&&!a);return f({clock:r,fn:e=>({...e,limit:e.limit||o,page:e.page??1}),target:[s,c]}),f({clock:g,source:{lastArgs:c,page:d},fn:({lastArgs:e={},page:a})=>({...e,limit:o,page:a}),target:s}),f({clock:s.doneData,source:c,fn:(e,a)=>!!e&&(a.results||[]).length<e.limit,target:h}),{$items:n,$isPending:p,$hasNext:i,next:g,load:r}}const I=({setExternalValue:t,inputAppearance:s,placeholder:o,validationCheck:u,searchApi:r,triggerSearchOn:g,hints:c})=>{const n=async e=>{await r(e)},[d,p,h]=w({onDebounce:n,onClear:n,delay:1e3,triggerDelay:0,deps:g}),i=e=>{p(e),t&&t(e)};return l.jsx(A,{value:d??"",setValue:i,inputAppearance:s,placeholder:o,validationCheck:u,loading:h,hints:c})},H=({filter:t,paginationList:s,noResultContent:o})=>{const{$items:u,$isPending:r,$hasNext:g,next:c,load:n}=s,d=y(r),p=y(g),h=()=>{c({filter:t})},i=()=>{n({filter:t})};return l.jsx(C,{items:u.getState(),renderItem:O,handleNext:h,isPending:d,hasNext:p,filter:t,handleReload:i,showAlphabetLetters:!0,noResultContent:o})};function O(t,s,o){return l.jsx(V,{name:t.fio,type:t.division?"staff":"stud",avatar:t.avatar,faculty:t.faculty,group:t.group,isMe:s,division:t.division,indexNumber:(o??0)+1},o)}const U=N.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .search-and-filter {
        display: flex;
        gap: 0.5rem;
        width: 100%;
        margin-bottom: 0.5rem;
    }
`,R=({title:t,searchPlaceholder:s,paginationList:o,defaultFilter:u,noResultContent:r,filterPlaceholder:g,filterRequest:c,underSearchText:n,customMask:d,search:p=!0})=>{const{load:h}=o,[i,e]=L.useState(u),[a,j]=L.useState({id:i,value:i,title:i}),v=n==null?void 0:n(a),S=async x=>{await h({filter:a,search:x})},$=x=>{j(x??null)},P=()=>{j(null)};return l.jsxs(U,{children:[t&&l.jsx(E,{size:2,align:"left",bottomGap:!0,children:t}),l.jsxs("div",{className:"search-and-filter",children:[p&&l.jsx(I,{triggerSearchOn:[(a==null?void 0:a.id)??""],placeholder:s??"Поиск",searchApi:S,validationCheck:!0}),c&&l.jsx(k,{value:i,setValue:e,onHintClick:$,onValueEmpty:P,customMask:d,placeholder:g??"Поиск",request:c})]}),l.jsx(F,{visible:!!v,children:v}),l.jsx(H,{paginationList:o,noResultContent:r,filter:a})]})};export{R as L,M as c};
