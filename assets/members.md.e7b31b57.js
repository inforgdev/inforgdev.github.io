import{o as b,c as d,a as l,w as n,u as m,V as g,b as i,d as _,e as w}from"./app.0246f278.js";const V=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"members.md"}'),f={name:"members.md"},k=Object.assign(f,{setup(v){const p=a=>a&&`https://www.github.com/${a}.png`,u=(a,r,t)=>t={done:()=>r,prop:(e,o)=>(r={...r,[e]:o})&&t,propArray:(e,o)=>t.prop(e,[...r[e]||[],o]),link:(e,o)=>t.propArray("links",{icon:e,link:o}),social:(e,o,c=a)=>t.link(e,c&&`${o}${c}`),name:e=>t.prop("name",e),title:e=>t.prop("title",e),avatar:e=>t.prop("avatar",e||p(a)),ghAvatar:e=>t.avatar(p(e)),twitter:e=>t.social("twitter","https://twitter.com/",e),github:e=>t.social("github","https://github.com/",e)},s=(a,r,t)=>u(a).name(r).title(t).avatar(),h=[s("luisfloat","Luis Float","Founder | Software Developer").github().twitter().done(),s("kruceo","Kruceo","Software Developer").github().done(),s("vinicenter","Vini Center","Software Developer").github().twitter().done()];return(a,r)=>(b(),d("div",null,[l(m(w),null,{default:n(()=>[l(m(g),null,{title:n(()=>[i("Members")]),lead:n(()=>[i("Feel free to contact us!")]),_:1}),l(m(_),{size:"small",members:h})]),_:1})]))}});export{V as __pageData,k as default};
