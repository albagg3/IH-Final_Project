import{u as S,a as x,r as p,b as N,o as c,c as r,d as s,e as v,w as B,f as h,g as E,h as T,l as V,p as D,i as M,t as y,n as A,j as $,k,v as b,m as z,q as H,s as I,x as O,F as w,y as U,z as Y,A as j,B as F}from"./file_index.7dcb2c25.js";import{_ as q}from"./file_Message.e17800e1.js";import{_ as C}from"./file__plugin-vue_export-helper.e718e6fb.js";const G=l=>(D("data-v-dce13aac"),l=l(),M(),l),L={class:"navbar rel",role:"navigation","aria-label":"main navigation"},J=G(()=>s("div",{class:"navbar-brand"},[s("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},[s("span",{"aria-hidden":"true"}),s("span",{"aria-hidden":"true"}),s("span",{"aria-hidden":"true"})])],-1)),P={id:"navbarBasicExample",class:"navbar-menu"},R={class:"navbar-start"},K={__name:"Navbar",setup(l){const t=S(),o=x(),e=p({message:"",type:"",isShow:!1}),a=async()=>{await V()===!1?(e.value.message="Ha habido un error intentelo de nuevo m\xE1s tarde",e.value.type="is-danger",e.value.isShow=!0):(e.value.message="\xA1Hasta pronto!",e.value.type="is-success",e.value.isShow=!0,t.logout(),setTimeout(()=>{o.push({name:"login"})},1e3))};return(i,u)=>{const m=N("router-link");return c(),r("nav",L,[J,s("div",P,[s("div",R,[v(m,{to:{name:"home"},class:"navbar-item"},{default:B(()=>[h(" Home ")]),_:1})]),s("div",{class:"navbar-end"},[s("div",{class:"navbar-item"},[s("div",{class:"buttons"},[s("button",{onClick:a,class:"button is-danger"},"Log Out")])])])]),e.value.isShow?(c(),E(q,{key:0,class:"abs",message:e.value.message,type:e.value.type},null,8,["message","type"])):T("",!0)])}}},Q=C(K,[["__scopeId","data-v-dce13aac"]]),W={},X={class:"footer"},Z=s("div",{class:"content has-text-centered"},[s("p",null,[s("strong",null,"AskyourTask"),h(" by "),s("a",{href:""},"Alba Garcia Gonzalez"),h(". ")])],-1),ss=[Z];function es(l,t){return c(),r("footer",X,ss)}const as=C(W,[["render",es]]),ts={class:"modal-card"},os={class:"modal-card-body"},ns={__name:"Modalquestion",props:{modal:Object},emits:["Yes","No"],setup(l,{emit:t}){const o=l,e=()=>{t("Yes")},a=()=>{t("No")};return(i,u)=>(c(),r("div",{class:A(["modal",o.modal.isShow?"is-active":" "])},[s("div",{onClick:a,class:"modal-background"}),s("div",ts,[s("header",{class:"modal-card-head"},[s("button",{onClick:a,class:"delete","aria-label":"close"})]),s("section",os," hola caracola "+y(o.modal.message),1),s("footer",{class:"modal-card-foot"},[s("button",{onClick:e,class:"button is-success"},"yes"),s("button",{onClick:a,class:"button"},"No")])])],2))}},ls={key:0,class:"card"},is={class:"card-header"},cs={class:"card-header-title"},rs=s("button",{class:"card-header-icon","aria-label":"more options"},[s("span",{class:"icon"},[s("i",{class:"fas fa-angle-down","aria-hidden":"true"})])],-1),ds={class:"card-content"},us={class:"content"},_s=s("time",{datetime:"2016-1-1"},"11:09 PM - 1 Jan 2016",-1),ps=s("a",{href:"#",class:"card-footer-item"},"Done",-1),ms={key:1},vs={class:"card-header"},hs=s("button",{class:"card-header-icon","aria-label":"more options"},[s("span",{class:"icon"},[s("i",{class:"fas fa-angle-down","aria-hidden":"true"})])],-1),ks={class:"card-content"},bs={__name:"Task",props:{task:Object},setup(l){const t=l,o=$(),e=p(!1),a=p({message:"\xBFEst\xE1s seguro?",isShow:!1});p({message:"\xBFEst\xE1s seguro?",isShow:!1});const i=p({title:t.task.title,description:t.task.description}),u=()=>{a.value.isShow=!a.value.isShow,console.log(a.value.isShow)},m=async()=>{a.value.isShow=!a.value.isShow,o.deleteTask(t.task.id),await z(t.task.id)},f=()=>{e.value=!0},d=async()=>{e.value=!1,await H(t.task.id,i.value),o.updateTask(t.task.id,i.value)};return(_,n)=>e.value?(c(),r("div",ms,[s("header",vs,[k(s("input",{"onUpdate:modelValue":n[0]||(n[0]=g=>i.value.title=g),class:"input is-primary"},null,512),[[b,i.value.title]]),hs]),s("div",ks,[k(s("input",{"onUpdate:modelValue":n[1]||(n[1]=g=>i.value.description=g),class:"input is-primary"},null,512),[[b,i.value.description]])]),s("footer",{class:"card-footer"},[s("a",{onClick:d,href:"#",class:"card-footer-item"},"Done"),s("a",{onClick:u,href:"#",class:"card-footer-item"},"Cancel")])])):(c(),r("div",ls,[s("header",is,[s("p",cs," Task # "+y(t.task.title),1),rs]),s("div",ds,[s("div",us,[h(y(t.task.description)+" ",1),_s])]),s("footer",{class:"card-footer"},[ps,s("a",{onClick:f,href:"#",class:"card-footer-item"},"Edit"),s("a",{onClick:u,href:"#",class:"card-footer-item"},"Delete")]),v(ns,{onYes:m,onNo:u,modal:a.value},null,8,["modal"])]))}},fs={key:0},gs={class:"p-2"},ys=s("label",{for:""},"Task name",-1),ws={class:"p-2"},Ss=s("label",{for:""},"Task",-1),Ts={class:"columns is-multiline is-mobile"},$s={__name:"Addtask",setup(l){const t=S(),o=$(),e=p(!1),a=p({user_id:t.id,title:"",description:""});console.log(o.tasks);const i=()=>{e.value=!0},u=()=>{e.value=!1},m=async()=>{const d=await j();return o.setTask(d),console.log(d),d},f=async()=>{console.log("entra",a.value),await F(a.value),await m()};return I(async()=>{console.log(o.tasks),await m()}),(d,_)=>(c(),r(w,null,[s("button",{onClick:i,class:"button is-success"},"Add new task"),e.value?(c(),r("div",fs,[s("form",{onSubmit:_[2]||(_[2]=O((...n)=>d.onSubmit&&d.onSubmit(...n),["prevent"]))},[s("div",gs,[ys,k(s("input",{"onUpdate:modelValue":_[0]||(_[0]=n=>a.value.title=n),class:"input is-primary",type:"text",placeholder:"Task name"},null,512),[[b,a.value.title]])]),s("div",ws,[Ss,k(s("input",{"onUpdate:modelValue":_[1]||(_[1]=n=>a.value.description=n),class:"input is-primary",type:"text",placeholder:"Task"},null,512),[[b,a.value.description]])]),s("button",{onClick:f,class:"button is-primary",type:"submit"},"Done"),s("button",{onClick:u,class:"button is-danger",type:"submit"},"Cancel")],32)])):T("",!0),s("div",Ts,[(c(!0),r(w,null,U(Y(o).tasks,n=>(c(),r("div",{class:"column is-3-desktop is-6-tablet is-12-mobile",key:n.id},[v(bs,{task:n},null,8,["task"])]))),128))])],64))}},Cs={class:""},Es={__name:"Home",setup(l){return(t,o)=>(c(),r("div",Cs,[v(Q),v($s),v(as)]))}};export{Es as default};