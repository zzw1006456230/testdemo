import{d as $,r as P,a as C,w as L,o as G,n as z,b as Y,c as x,e as W,f as a,g as A,h as B,i as e,j as l,k as p,l as O,m as E,E as X,p as q,q as J,s as K,t as U,u as D,v as M,x as Q,y,z as Z,A as ee,B as te,C as oe,F as se,R as ae}from"./index-CBqIot1I.js";/* empty css             *//* empty css                 *//* empty css               */import{u as R}from"./setting-CUJSkm8l.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css                   */const le=$({__name:"scale-screen",props:{width:{type:[String,Number],default:1920},height:{type:[String,Number],default:1080},fullScreen:{type:Boolean,default:!1},autoScale:{type:[Object,Boolean],default:!0},delay:{type:Number,default:500},boxStyle:{type:Object,default:()=>({})},wrapperStyle:{type:Object,default:()=>({})}},setup(u){function g(c,f){let m;return function(...V){m&&clearTimeout(m),m=setTimeout(()=>{typeof c=="function"&&c.apply(null,V),clearTimeout(m)},f>0?f:100)}}const d=u,n=P({width:0,height:0,originalWidth:0,originalHeight:0,observer:null}),s={box:{overflow:"hidden",backgroundSize:"100% 100%",background:"#000",width:"100vw",height:"100vh"},wrapper:{transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",position:"relative",overflow:"hidden",zIndex:100,transformOrigin:"left top"}},t=C(),i=C();L(()=>d.autoScale,async c=>{c?(w(),r()):(T(),_())});const h=()=>new Promise(c=>{i.value.scrollLeft=0,i.value.scrollTop=0,z(()=>{var f,m;d.width&&d.height?(n.width=d.width,n.height=d.height):(n.width=(f=t.value)==null?void 0:f.clientWidth,n.height=(m=t.value)==null?void 0:m.clientHeight),(!n.originalHeight||!n.originalWidth)&&(n.originalWidth=window.screen.width,n.originalHeight=window.screen.height),c()})}),b=()=>{n.width&&n.height?(t.value.style.width=`${n.width}px`,t.value.style.height=`${n.height}px`):(t.value.style.width=`${n.originalWidth}px`,t.value.style.height=`${n.originalHeight}px`)},_=()=>{},o=c=>{if(!d.autoScale)return;const f=t.value.clientWidth,m=t.value.clientHeight,V=document.body.clientWidth,k=document.body.clientHeight;t.value.style.transform=`scale(${c},${c})`;let j=Math.max((V-f*c)/2,0),F=Math.max((k-m*c)/2,0);typeof d.autoScale=="object"&&(!d.autoScale.x&&(j=0),!d.autoScale.y&&(F=0)),t.value.style.margin=`${F}px ${j}px`},v=()=>{const c=document.body.clientWidth,f=document.body.clientHeight,m=n.width||n.originalWidth,V=n.height||n.originalHeight,k=c/+m,j=f/+V;if(d.fullScreen)return t.value.style.transform=`scale(${k},${j})`,!1;const F=Math.min(k,j);o(F)},w=g(async()=>{await h(),b(),v()},d.delay),T=()=>{window.removeEventListener("resize",w)},r=()=>{window.addEventListener("resize",w)};return G(()=>{z(async()=>{await h(),b(),v(),r()})}),Y(()=>{T()}),(c,f)=>(x(),W("section",{style:B({...s.box,...u.boxStyle}),class:"v-screen-box",ref_key:"box",ref:i},[a("div",{style:B({...s.wrapper,...u.wrapperStyle}),class:"screen-wrapper",ref_key:"screenWrapper",ref:t},[A(c.$slots,"default")],4)],4))}}),ie="/assets/bodychatu-DmGu3jFX.png",N="/assets/bodytext-rvh1LXSf.png",I=u=>(U("data-v-957029fc"),u=u(),D(),u),ne={class:"d-flex jc-center title_wrap"},de=I(()=>a("div",{class:"zuojuxing"},null,-1)),re=I(()=>a("div",{class:"youjuxing"},null,-1)),ue={class:"left_menu"},ce={class:"right_menu"},ge=O('<div class="guang" data-v-957029fc></div><div class="d-flex jc-center" data-v-957029fc><div class="title" data-v-957029fc><span class="title-text" data-v-957029fc>赤峰市生态产品价值实现平台</span></div></div><div class="timers" data-v-957029fc></div>',3),pe=I(()=>a("div",{class:"login-dialog"},[a("div",{class:"login-dialog-bodyimg"},[a("img",{src:ie,height:"300",width:"300"})]),a("div",{class:"login-dialog-bodytext"},[a("img",{src:N,width:"350"})])],-1)),he={class:"login-dialog-footer"},me={class:"regedit-dialog"},fe=I(()=>a("div",{class:"regedit-dialog-bodytext"},[a("img",{src:N,width:"400"})],-1)),_e={class:"regedit-dialog-footer"},ve={data(){return{dialogFormVisible:!1,dialogRegistFormVisible:!1,state:"index",username:"",password:"",telephone:""}},methods:{goToIndex(){this.state="index",this.$router.push("/index")},goToCalculateValue(){this.state="jzhs",this.$router.push("/jzhs")},goToCalculateCarbonSink(){this.state="thjl",this.$router.push("/thjl")},goToIndagateAgricultureProduct(){this.state="ncpsy",this.$router.push("/ncpsy")},goToCalculateCarbonSrc(){this.state="tphs",this.$router.push("/tphs")},goToGreenFinance(){this.state!="jylj"&&(this.dialogFormVisible=!0)},fromlogingotojyljPage(){this.state="jylj",this.dialogFormVisible=!1,this.dialogRegistFormVisible=!1,this.$router.push("/jylj")},fromregeditgotojyljPage(){this.dialogFormVisible=!1,this.dialogRegistFormVisible=!1,this.username==""||this.password==""||this.telephone==""?alert("信息不能为空"):(this.state="jylj",alert("注册成功自动登录"),this.username="",this.password="",this.telephone="",this.$router.push("/jylj"))},gotoregist(){this.dialogFormVisible=!1,this.dialogRegistFormVisible=!0}}},be=$({...ve,__name:"header",setup(u){const g=P({dateDay:"",dateYear:"",dateWeek:"",timing:null});R();const d=["周日","周一","周二","周三","周四","周五","周六"];return(()=>{g.timing=setInterval(()=>{g.dateDay=E().format("YYYY-MM-DD hh : mm : ss"),g.dateWeek=d[E().day()]},1e3)})(),(s,t)=>{const i=X,h=q,b=J,_=K;return x(),W("div",ne,[de,re,a("div",ue,[a("button",{class:"menu_button",onClick:t[0]||(t[0]=(...o)=>s.goToIndex&&s.goToIndex(...o))},"综合展示"),a("button",{class:"menu_button",onClick:t[1]||(t[1]=(...o)=>s.goToCalculateValue&&s.goToCalculateValue(...o))},"价值核算"),a("button",{class:"menu_button",onClick:t[2]||(t[2]=(...o)=>s.goToIndagateAgricultureProduct&&s.goToIndagateAgricultureProduct(...o))},"农产品溯源")]),a("div",ce,[a("button",{class:"menu_button",onClick:t[3]||(t[3]=(...o)=>s.goToCalculateCarbonSrc&&s.goToCalculateCarbonSrc(...o))},"碳排核算"),a("button",{class:"menu_button",onClick:t[4]||(t[4]=(...o)=>s.goToCalculateCarbonSink&&s.goToCalculateCarbonSink(...o))},"碳汇计量"),a("button",{class:"menu_button",onClick:t[5]||(t[5]=(...o)=>s.goToGreenFinance&&s.goToGreenFinance(...o))},"交易市场")]),ge,e(b,{modal:"false",modelValue:s.dialogFormVisible,"onUpdate:modelValue":t[8]||(t[8]=o=>s.dialogFormVisible=o),width:"500"},{footer:l(()=>[a("div",he,[e(h,null,{default:l(()=>[e(i,{span:24},{default:l(()=>[e(h,null,{default:l(()=>[e(i,{span:4}),e(i,{span:7},{default:l(()=>[a("button",{class:"login-dialog-footer-left",onClick:t[6]||(t[6]=(...o)=>s.fromlogingotojyljPage&&s.fromlogingotojyljPage(...o))})]),_:1}),e(i,{span:2}),e(i,{span:7},{default:l(()=>[a("button",{class:"login-dialog-footer-right",onClick:t[7]||(t[7]=(...o)=>s.gotoregist&&s.gotoregist(...o))})]),_:1}),e(i,{span:4})]),_:1})]),_:1})]),_:1})])]),default:l(()=>[pe]),_:1},8,["modelValue"]),e(b,{modal:"false",modelValue:s.dialogRegistFormVisible,"onUpdate:modelValue":t[13]||(t[13]=o=>s.dialogRegistFormVisible=o),width:"500"},{footer:l(()=>[a("div",_e,[e(h,null,{default:l(()=>[e(i,{span:4}),e(i,{span:16},{default:l(()=>[a("button",{class:"regedit-dialog-footer-right",onClick:t[12]||(t[12]=(...o)=>s.fromregeditgotojyljPage&&s.fromregeditgotojyljPage(...o))})]),_:1}),e(i,{span:4})]),_:1})])]),default:l(()=>[a("div",me,[fe,e(h,null,{default:l(()=>[e(i,{span:4}),e(i,{span:4},{default:l(()=>[p(" 用户名:")]),_:1}),e(i,{span:1}),e(i,{span:10},{default:l(()=>[e(_,{modelValue:s.username,"onUpdate:modelValue":t[9]||(t[9]=o=>s.username=o),class:"transparent-input",placeholder:""},null,8,["modelValue"])]),_:1}),e(i,{span:3})]),_:1}),e(h,null,{default:l(()=>[e(i,{span:4}),e(i,{span:4},{default:l(()=>[p(" 　密码:")]),_:1}),e(i,{span:1}),e(i,{span:10},{default:l(()=>[e(_,{modelValue:s.password,"onUpdate:modelValue":t[10]||(t[10]=o=>s.password=o),type:"password",class:"transparent-input",placeholder:""},null,8,["modelValue"])]),_:1}),e(i,{span:3})]),_:1}),e(h,null,{default:l(()=>[e(i,{span:4}),e(i,{span:4},{default:l(()=>[p(" 手机号:")]),_:1}),e(i,{span:1}),e(i,{span:10},{default:l(()=>[e(_,{modelValue:s.telephone,"onUpdate:modelValue":t[11]||(t[11]=o=>s.telephone=o),class:"transparent-input",placeholder:""},null,8,["modelValue"])]),_:1}),e(i,{span:3})]),_:1})])]),_:1},8,["modelValue"])])}}}),we=H(be,[["__scopeId","data-v-957029fc"]]),S=u=>(U("data-v-7b4649d8"),u=u(),D(),u),ye=S(()=>a("h2",{class:"setting-title"},"设置",-1)),Se=S(()=>a("div",{class:"left_shu"},"全局设置",-1)),Ve={class:"setting_item"},je=S(()=>a("span",{class:"setting_label"},[p(" 是否进行自动适配"),a("span",{class:"setting_label_tip"},"(默认分辨率1920*1080)"),p(": ")],-1)),Ce={class:"setting_content"},$e=S(()=>a("div",{class:"left_shu"},"实时监测",-1)),Te={class:"setting_item"},ke=S(()=>a("span",{class:"setting_label"},[p(" 设备提醒自动轮询: "),a("span",{class:"setting_label_tip"})],-1)),Fe={class:"setting_content"},xe={class:"setting_item"},Ie=S(()=>a("span",{class:"setting_label"}," 实时预警轮播: ",-1)),We={class:"setting_content"},Re=$({__name:"setting",setup(u){const g=C(!1),d=C(!0),n=C(!0),s=R(),{indexConfig:t}=M(s);(()=>{s.initSetting(),g.value=s.isScale,d.value=t.value.leftBottomSwiper,n.value=t.value.rightBottomSwiper})();const h=_=>{s.setIsScale(_)},b=_=>{s.setIndexConfig({leftBottomSwiper:d.value,rightBottomSwiper:n.value})};return(_,o)=>{const v=Z,w=ee,T=te;return x(),Q(T,{modelValue:y(s).settingShow,"onUpdate:modelValue":o[6]||(o[6]=r=>y(s).settingShow=r),direction:"rtl",size:"360px"},{header:l(()=>[ye]),default:l(()=>[Se,a("div",Ve,[je,a("div",Ce,[e(w,{modelValue:g.value,"onUpdate:modelValue":o[0]||(o[0]=r=>g.value=r),onChange:o[1]||(o[1]=r=>h(r))},{default:l(()=>[e(v,{label:!0},{default:l(()=>[p("是")]),_:1}),e(v,{label:!1},{default:l(()=>[p("否")]),_:1})]),_:1},8,["modelValue"])])]),$e,a("div",Te,[ke,a("div",Fe,[e(w,{modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=r=>d.value=r),onChange:o[3]||(o[3]=r=>b(r))},{default:l(()=>[e(v,{label:!0},{default:l(()=>[p("是")]),_:1}),e(v,{label:!1},{default:l(()=>[p("否")]),_:1})]),_:1},8,["modelValue"])])]),a("div",xe,[Ie,a("div",We,[e(w,{modelValue:n.value,"onUpdate:modelValue":o[4]||(o[4]=r=>n.value=r),onChange:o[5]||(o[5]=r=>b(r))},{default:l(()=>[e(v,{label:!0},{default:l(()=>[p("是")]),_:1}),e(v,{label:!1},{default:l(()=>[p("否")]),_:1})]),_:1},8,["modelValue"])])])]),_:1},8,["modelValue"])}}}),He=H(Re,[["__scopeId","data-v-7b4649d8"]]),ze=$({__name:"index",setup(u){return window.$message=oe,(g,d)=>null}}),Be={class:"content_wrap"},Ee=$({__name:"HomeView",setup(u){const g=R(),{isScale:d}=M(g),n={};return(s,t)=>(x(),W(se,null,[e(y(le),{width:"1920",height:"1080",delay:500,fullScreen:!1,boxStyle:{background:"#03050C",overflow:y(d)?"hidden":"auto"},wrapperStyle:n,autoScale:y(d)},{default:l(()=>[a("div",Be,[e(we),e(y(ae)),e(y(ze))])]),_:1},8,["boxStyle","autoScale"]),e(He)],64))}}),Ye=H(Ee,[["__scopeId","data-v-99725123"]]);export{Ye as default};
