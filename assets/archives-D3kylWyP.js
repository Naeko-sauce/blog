import{_ as E}from"./layout-CX2xREeM.js";import{d as D,Q as Y,q as x,a5 as O,a6 as P,L as V,o as a,c as i,j as v,A as d,f as l,F as C,y as M,e as N,w as _,a7 as T,z as R,a8 as b,t as L,l as y,k as F,a9 as I,aa as z,ab as J,ac as q,ad as A,ae as G,af as H}from"./app-DHTlVhQf.js";import{_ as Q}from"./SakuraPageHeader-D_19rEe5.js";import"./SakuraDate.vue_vue_type_script_setup_true_lang-Uctrlt1p.js";const W={class:"post-collapse px-10 lt-sm:px-5 mx-auto"},K={w:"full",text:"center",class:"yun-text-light",p:"2"},U={class:"post-collapse-action",text:"center"},X={key:0,"i-ri-sort-desc":""},Z={key:1,"i-ri-sort-asc":""},j=["id"],ee={key:0,class:"post-meta absolute left--40"},te={key:0,class:"post-time",font:"mono",opacity:"80"},se={class:"text-$st-c-text"},ae={key:1,class:"post-meta"},oe={key:0,class:"post-time text-$st-c-timeline-text-color",font:"mono",opacity:"80"},ne={class:"post-title","inline-flex":"","items-center":"",font:"serif black"},ie=D({__name:"SakuraTimeLine",props:{posts:{}},setup(B){const g=B,{t:m}=Y(),c=x(!0),p=x([]),h=x({}),s=x({}),f=x({});O(()=>g.posts,()=>{s.value={},p.value=[],h.value={},g.posts.forEach(t=>{if(!(t.hide&&t.hide!=="index")&&t.date){const e=Number.parseInt(b(t.date,"YYYY")),n=Number.parseInt(b(t.date,"MM"));s.value[e]||(p.value.push(e),h.value[e]=[],s.value[e]={}),s.value[e][n]||(h.value[e].push(n),s.value[e][n]=[],s.value[e][n].push(t)),s.value[e][n].push(t)}}),f.value=JSON.parse(JSON.stringify(s.value)),Object.keys(s.value).forEach(t=>{Object.keys(s.value[t]).forEach(e=>{s.value[t][e].length>1&&(s.value[t][e]=[s.value[t][e][0]])})})},{immediate:!0});const S=P(()=>{const e=[...p.value].sort((n,o)=>o-n);return c.value?e:e.reverse()});function $(t){const n=[...h.value[t]].sort((o,r)=>r-o);return c.value?n:n.reverse()}function w(t,e){s.value[t][e]=[...f.value[t][e]]}return(t,e)=>{const n=V("RouterLink");return a(),i("div",W,[v("div",K,d(l(m)("counter.archives",t.posts.length)),1),v("div",U,[v("button",{class:"yun-icon-btn shadow hover:shadow-md",onClick:e[0]||(e[0]=o=>c.value=!c.value)},[c.value?(a(),i("div",X)):(a(),i("div",Z))])]),(a(!0),i(C,null,M(S.value,o=>(a(),i("div",{key:o,class:"ml-1/3"},[v("h2",{id:`#archive-year-${o}`,class:"archive-year ml--8",text:"2xl"},d(o)+"年 ",9,j),(a(!0),i(C,null,M($(o),r=>(a(),N(I,{key:r,name:"timeline",tag:"ul",class:"relative p-0",onMouseenter:u=>w(o,r)},{default:_(()=>[(a(!0),i(C,null,M(l(T)(s.value[o][r],c.value),(u,k)=>(a(),i("li",{key:`post-${o}-${r}-${k}`,class:"post-item relative"},[v("header",{class:R(["post-header",[k===0?"circle-indicator":"hover-indicator",k!==s.value[o][r].length&&"h-$st-c-timeline-height"]]),flex:"","items-center":""},[k===0?(a(),i("div",ee,[u.date?(a(),i("time",te,d(l(b)(u.date,"MM"))+"月 ",1)):L("v-if",!0),v("span",se," ("+d(f.value[o][r].length)+" 篇文章) ",1)])):L("v-if",!0),k!==0?(a(),i("div",ae,[u.date?(a(),i("time",oe,d(l(b)(u.date,"DD"))+"日 ",1)):L("v-if",!0),v("h2",ne,[y(n,{to:u.path||"",class:"post-title-link text-$st-c-text hover:text-$st-c-accent"},{default:_(()=>[F(d(u.title),1)]),_:2},1032,["to"])])])):L("v-if",!0)],2)]))),128))]),_:2},1032,["onMouseenter"]))),128))]))),128))])}}}),ve=D({__name:"archives",setup(B){const{t:g}=Y(),m=z(),c=J(m),p=q();return A([G({"@type":"CollectionPage"})]),(h,s)=>{const f=Q,S=ie,$=V("RouterView"),w=E;return a(),N(w,null,{default:_(()=>[y($,null,{default:_(({Component:t})=>[(a(),N(H(t),null,{"main-header":_(()=>[y(f,{title:l(c)||l(g)("menu.archives"),icon:l(m).icon||"i-ri-archive-line",color:l(m).color},null,8,["title","icon","color"])]),"main-content":_(()=>[y(S,{posts:l(p).postList},null,8,["posts"]),y($)]),_:2},1024))]),_:1})]),_:1})}}});export{ve as default};