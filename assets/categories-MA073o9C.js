import{_ as j}from"./layout-CX2xREeM.js";import{_ as D,a as E}from"./SakuraArticleListCustom-sSEy6Is6.js";import{d as q,u as K,a as x,a6 as b,q as B,Q as A,ag as N,h as P,L as R,o as t,c,j as p,A as h,f as r,F as S,y as V,ah as F,e as y,w as g,t as T,l as m,ad as U,ae as W,ac as H,aa as M,ai as O,aj as Q,ab as G,af as J,z as X,_ as Y}from"./app-DHTlVhQf.js";import{_ as Z}from"./SakuraPageHeader-D_19rEe5.js";import"./ArticleListThemeCard.vue_vue_type_style_index_0_lang-G2g86Ord.js";import"./SakuraDate.vue_vue_type_script_setup_true_lang-Uctrlt1p.js";import"./SakuraImageCard-CDGJLt3E.js";const I={class:"category-list-item inline-flex items-center cursor-pointer"},ee={key:0,"i-ri-folder-add-line":""},te={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},ae={key:0},oe={m:"l-1",font:"serif black"},ne=q({__name:"SakuraCategory",props:{parentKey:{},category:{},level:{},collapsable:{type:Boolean,default:!0}},setup(v){const _=v,l=K(),o=x(),d=b(()=>{const e=o.query.category||"";return Array.isArray(e)?[e]:e.split("/")}),u=B(_.collapsable),{t:a}=A(),{locale:f}=A();function $(e){const s=f.value==="zh-CN"?"zh":f.value;return e[`title_${s}`]?e[`title_${s}`]:e.title}const k=B(),{show:L}=N(k);function i(e){l.push({query:{category:e}}),L()}return P(()=>{const e=document.querySelector(".post-collapse-container");e&&(k.value=e)}),(e,s)=>{const z=R("SakuraCategory",!0),C=R("RouterLink");return t(),c(S,null,[p("li",I,[p("span",{class:"folder-action inline-flex",onClick:s[0]||(s[0]=n=>u.value=!u.value)},[u.value?(t(),c("div",ee)):(t(),c("div",te))]),p("span",{class:"category-name",m:"l-1",onClick:s[1]||(s[1]=n=>i(e.parentKey))},h(e.category.name==="Uncategorized"?r(a)("category.uncategorized"):e.category.name)+" ["+h(e.category.total)+"] ",1)]),u.value?T("v-if",!0):(t(),c("ul",ae,[(t(!0),c(S,null,V(e.category.children.values(),(n,w)=>(t(),c("li",{key:w,class:"sakura-sidebar-item",m:"l-4"},[r(F)(n)?(t(),y(z,{key:0,"parent-key":e.parentKey?`${e.parentKey}/${n.name}`:n.name,category:n,collapsable:!d.value.includes(n.name)},null,8,["parent-key","category","collapsable"])):(t(),c(S,{key:1},[n.title?(t(),y(C,{key:0,to:n.path||"",class:"inline-flex items-center"},{default:g(()=>[s[2]||(s[2]=p("div",{"i-ri-file-text-line":""},null,-1)),p("span",oe,h($(n)),1)]),_:2},1032,["to"])):T("v-if",!0)],64))]))),128))]))],64)}}}),se=q({__name:"SakuraCategories",props:{categories:{},level:{default:0},collapsable:{type:Boolean,default:!0}},setup(v){const _=x(),l=b(()=>{const o=_.query.category||"";return Array.isArray(o)?[o]:o.split("/")});return(o,d)=>{const u=ne;return t(!0),c(S,null,V(o.categories.values(),a=>(t(),c("ul",{key:a.name,class:"category-list",m:"l-4"},[m(u,{"parent-key":a.name,category:a,level:o.level+1,collapsable:!l.value.includes(a.name)},null,8,["parent-key","category","level","collapsable"])]))),128)}}}),re={text:"center",class:"yun-text-light",p:"2"},le={key:0,class:"categories-margin-control"},ie=q({__name:"CategoriesThemeSakura",setup(v){U([W({"@type":"CollectionPage"})]);const _=H(),l=M(),o=O(),{t:d}=A(),u=x(),a=b(()=>u.query.category||""),f=Q(),$=b(()=>_.postList.filter(i=>i.categories&&a.value!=="Uncategorized"?typeof i.categories=="string"?i.categories===a.value:i.categories.join("/").startsWith(a.value)&&i.categories[0]===a.value.split("/")[0]:!i.categories&&a.value==="Uncategorized"?i.categories===void 0:!1)),k=G(l);return(L,i)=>{const e=Z,s=se,z=D,C=R("RouterView"),n=E;return t(),y(C,null,{default:g(({Component:w})=>[(t(),y(J(w),null,{"main-header":g(()=>[m(e,{title:r(k)||r(d)("menu.categories"),"sub-title":a.value,icon:r(l).icon||"i-ri-tag-line",color:r(l).color,cover:r(l).cover},null,8,["title","sub-title","icon","color","cover"])]),"main-content":g(()=>[p("div",{class:X([r(o).animation&&"element-slide-up","categories-margin-control"])},[p("div",re,h(r(d)("counter.categories",Array.from(r(f).children).length)),1),m(s,{categories:r(f).children},null,8,["categories"]),m(z,{icon:"i-fa6-solid:water",text:"文章列表",divider:!1}),m(C)],2)]),"main-nav-before":g(()=>[a.value?(t(),c("div",le,[m(n,{w:"full",posts:$.value},null,8,["posts"])])):T("v-if",!0)]),_:2},1024))]),_:1})}}}),ce={};function ue(v,_){const l=ie,o=j;return t(),y(o,null,{default:g(()=>[m(l)]),_:1})}const ve=Y(ce,[["render",ue]]);export{ve as default};