import{B as Ce,G as pe,C as Fe}from"./center-map-dvw5u6h6.js";import{d as C,c as m,l as W,m as $,e as S,f as c,z as O,A as oe,g as H,B as J,u as x,p as ae,k as le,a as v,r as Y,C as K,L as j,y as X,D as Le,G as B,w as ee,n as Ne,H as Te,o as U,h as D,s as ve,F as he,I as _e,J as ge,q as h}from"./index-D2RTGz1T.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css             */import{u as be}from"./el-message-DPA2WjDB.js";import{_ as ke,a as Oe,i as We,b as ne}from"./merge-nPWFJLk-.js";import{C as Ee}from"./capsule-chart-1519VakN.js";const ye=e=>(ae("data-v-9d88689f"),e=e(),le(),e),Ie={key:0,class:"item_title"},Ae=ye(()=>c("div",{class:"zuo"},null,-1)),Re={class:"title-inner"},De=ye(()=>c("div",{class:"you"},null,-1)),He=C({__name:"item-wrap",props:{title:{default:""}},setup(e){return(o,s)=>(m(),W(x(Ce),null,{default:$(()=>[o.title!==""?(m(),S("div",Ie,[Ae,c("span",Re,"   "+O(o.title)+"   ",1),De])):oe("",!0),c("div",{class:J(o.title!==""?"item_title_content":"item_title_content_def")},[H(o.$slots,"default",{},void 0,!0)],2)]),_:3}))}}),k=E(He,[["__scopeId","data-v-9d88689f"]]),Me=C({__name:"left-top",setup(e){v(2),Y({alarmNum:0,offlineNum:0,onlineNum:0,totalNum:0});const o=v({});var s;const t=()=>{s={cy:["红山区","元宝山区","松山区","阿鲁科尔沁旗","巴林左旗","巴林右旗","林西县","克什克腾旗","翁牛特旗","喀喇沁旗","宁城县","敖汉旗"],category:["红山","元宝山","松山","阿旗","左旗","右旗","林西","克旗","翁旗","喀旗","宁城","敖汉"],data:[.09361,.21516,1.180556667,1.242046667,1.112173333,.95986,.833176667,3.45785,1.535306667,.969613333,1.26445,1.45134]};for(var r=0;r<s.data.length;r++)s.data[r]=parseFloat(s.data[r].toFixed(2));a(s)},a=async r=>{o.value={tooltip:{trigger:"axis",backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"},formatter:function(u){var l=u[0].name+"<br>";return u.forEach(function(n){n.value?l+=n.marker+" "+n.seriesName+" : "+n.value+"</br>":l+=n.marker+" "+n.seriesName+" :  - </br>"}),l}},legend:{data:["已安装","计划安装","安装率"],textStyle:{color:"#B4B4B4"},top:"0"},grid:{left:"50px",right:"40px",bottom:"30px",top:"20px"},xAxis:{data:r.category,axisLine:{lineStyle:{color:"#B4B4B4"}},axisTick:{show:!1},axisLabel:{show:!0,interval:0}},yAxis:[{splitLine:{show:!1},axisLine:{lineStyle:{color:"#B4B4B4"}},axisLabel:{formatter:"{value}"}},{splitLine:{show:!1},axisLine:{lineStyle:{color:"#B4B4B4"}},axisLabel:{formatter:"{value}% "}}],series:[{name:"生态碳汇（百万吨）",type:"bar",barWidth:10,itemStyle:{borderRadius:5,color:new j(0,0,0,1,[{offset:0,color:"#956FD4"},{offset:1,color:"#3EACE5"}])},data:r.data}]}};return t(),(r,u)=>{const l=K("v-chart");return m(),W(l,{class:"chart",option:o.value},null,8,["option"])}}}),ze=E(Me,[["__scopeId","data-v-ae50c1d9"]]),xe={leftTop:"/bigscreen/countDeviceNum",leftCenter:"/bigscreen/countUserNum",centerMap:"/bigscreen/centerMap",centerBottom:"/bigscreen/installationPlan",leftBottom:"/bigscreen/leftBottom",rightTop:"/bigscreen/alarmNum",rightBottom:"/bigscreen/rightBottom",rightCenter:"/bigscreen/ranking"},Ve=(e={})=>pe(xe.leftCenter,e),je=(e={})=>pe(xe.centerBottom,e),Ue=C({__name:"left-center",setup(e){let o=["#0BFC7F","#A0A0A0","#F48C02","#F4023C"];const s=v({}),t=Y({totalNum:5821.22,wzcpNum:489.92,tjfwNum:5069.3,whfwNum:262}),a=l=>new j(1,0,0,0,[{offset:0,color:l[0]},{offset:1,color:l[1]}]);(()=>{Ve().then(l=>{console.log("左中--用户总览",l),l.success?u():X.error(l.msg)}).catch(l=>{X.error(l)})})();const u=()=>{s.value={title:{top:"center",left:"center",text:[`{value|${t.totalNum}}`,"{name|总值（亿元）}"].join(`
`),textStyle:{rich:{value:{color:"#ffffff",fontSize:20,fontWeight:"bold",lineHeight:20,padding:[4,0,4,0]},name:{color:"#ffffff",lineHeight:20}}}},tooltip:{trigger:"item",backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"}},series:[{name:"生态产品价值（亿元）",type:"pie",radius:["40%","70%"],itemStyle:{borderRadius:6,borderColor:"rgba(255,255,255,0)",borderWidth:2},color:o,label:{show:!0,formatter:`   {b|{b}}   
   {c|{c}}   {per|{d}%}  `,rich:{b:{color:"#fff",fontSize:12,lineHeight:26},c:{color:"#31ABE3",fontSize:14},per:{color:"#31ABE3",fontSize:14}}},emphasis:{show:!1},legend:{show:!1},tooltip:{show:!0},labelLine:{show:!0,length:20,length2:36,smooth:.2,lineStyle:{}},data:[{value:t.wzcpNum,name:"物质产品",itemStyle:{color:a(["#0BFC7F","#A3FDE0"])}},{value:t.tjfwNum,name:"调节服务",itemStyle:{color:a(["#00FFFF","#008B8B"])}},{value:t.whfwNum,name:"文化服务",itemStyle:{color:a(["#F48C02","#FDDB7D"])}}]}]}};return(l,n)=>{const p=K("v-chart");return m(),W(p,{class:"chart",option:s.value},null,8,["option"])}}});var Ge=ke,Pe=function(){return Ge.Date.now()},qe=Pe,Je=/\s/;function Xe(e){for(var o=e.length;o--&&Je.test(e.charAt(o)););return o}var Ye=Xe,Ke=Ye,Qe=/^\s+/;function Ze(e){return e&&e.slice(0,Ke(e)+1).replace(Qe,"")}var et=Ze,tt=Oe,ot=We,at="[object Symbol]";function lt(e){return typeof e=="symbol"||ot(e)&&tt(e)==at}var nt=lt,st=et,de=ne,rt=nt,fe=NaN,it=/^[-+]0x[0-9a-f]+$/i,ct=/^0b[01]+$/i,ut=/^0o[0-7]+$/i,dt=parseInt;function ft(e){if(typeof e=="number")return e;if(rt(e))return fe;if(de(e)){var o=typeof e.valueOf=="function"?e.valueOf():e;e=de(o)?o+"":o}if(typeof e!="string")return e===0?e:+e;e=st(e);var s=ct.test(e);return s||ut.test(e)?dt(e.slice(2),s?2:8):it.test(e)?fe:+e}var mt=ft,pt=ne,te=qe,me=mt,vt="Expected a function",ht=Math.max,_t=Math.min;function gt(e,o,s){var t,a,r,u,l,n,p=0,M=!1,_=!1,g=!0;if(typeof e!="function")throw new TypeError(vt);o=me(o)||0,pt(s)&&(M=!!s.leading,_="maxWait"in s,r=_?ht(me(s.maxWait)||0,o):r,g="trailing"in s?!!s.trailing:g);function F(d){var w=t,y=a;return t=a=void 0,p=d,u=e.apply(y,w),u}function b(d){return p=d,l=setTimeout(L,o),M?F(d):u}function I(d){var w=d-n,y=d-p,R=o-w;return _?_t(R,r-y):R}function z(d){var w=d-n,y=d-p;return n===void 0||w>=o||w<0||_&&y>=r}function L(){var d=te();if(z(d))return G(d);l=setTimeout(L,I(d))}function G(d){return l=void 0,g&&t?F(d):(t=a=void 0,u)}function A(){l!==void 0&&clearTimeout(l),p=0,t=n=a=l=void 0}function P(){return l===void 0?u:G(te())}function N(){var d=te(),w=z(d);if(t=arguments,a=this,n=d,w){if(l===void 0)return b(n);if(_)return clearTimeout(l),l=setTimeout(L,o),F(n)}return l===void 0&&(l=setTimeout(L,o)),u}return N.cancel=A,N.flush=P,N}var bt=gt,yt=bt,xt=ne,St="Expected a function";function Bt(e,o,s){var t=!0,a=!0;if(typeof e!="function")throw new TypeError(St);return xt(s)&&(t="leading"in s?!!s.leading:t,a="trailing"in s?!!s.trailing:a),yt(e,o,{leading:t,maxWait:o,trailing:a})}var wt=Bt;const $t=Le(wt),Se=C({__name:"seamless-scroll",props:{modelValue:{type:Boolean,default:!0},list:{default:()=>[]},step:{default:1},limitScrollNum:{default:3},hover:{type:Boolean,default:!1},direction:{default:"up"},singleHeight:{default:0},singleWidth:{default:0},singleWaitTime:{default:1e3},isRemUnit:{type:Boolean,default:!1},isWatch:{type:Boolean,default:!0},delay:{default:0},ease:{default:"ease-in"},count:{default:-1},copyNum:{default:1},wheel:{type:Boolean,default:!1},singleLine:{type:Boolean,default:!1}},emits:["count","stop"],setup(e,{expose:o,emit:s}){const t=e,a=s;v(null);const r=v(null),u=v(null),l=v(null),n=v(null),p=v(0),M=v(0),_=v(0),g=v(0),F=v(!1),b=v(0),I=B(()=>t.list?t.list.length>=t.limitScrollNum:!1),z=B(()=>({width:p.value?`${p.value}px`:"auto",transform:`translate(${_.value}px,${g.value}px)`,transition:`all ${typeof t.ease=="string"?t.ease:"cubic-bezier("+t.ease.x1+","+t.ease.y1+","+t.ease.x2+","+t.ease.y2+")"} ${t.delay}ms`,overflow:"hidden",display:t.singleLine?"flex":"block"})),L=B(()=>t.direction=="left"||t.direction=="right");function G(i){i&&typeof i!="boolean"&&i.length>100&&console.warn(`数据达到了${i.length}条有点多哦~,可能会造成部分老旧浏览器卡顿。`)}const A=B(()=>L.value?{float:"left",overflow:"hidden",display:t.singleLine?"flex":"block",flexShrink:t.singleLine?0:1}:{overflow:"hidden"}),P=B(()=>t.isRemUnit?parseInt(globalThis.window.getComputedStyle(globalThis.document.documentElement,null).fontSize):1),N=B(()=>t.singleWidth*P.value),d=B(()=>t.singleHeight*P.value),w=B(()=>{let i,f=t.step;return L.value?i=N.value:i=d.value,i>0&&i%f>0&&console.error("如果设置了单步滚动，step 需是单步大小的约数，否则无法保证单步滚动结束的位置是否准确。~~~~~"),f}),y=()=>{cancelAnimationFrame(l.value),l.value=null},R=(i,f,Z)=>{l.value=requestAnimationFrame(function(){const ie=M.value/2,ce=p.value/2;if(i==="up"?(Math.abs(g.value)>=ie&&(g.value=0,b.value+=1,a("count",b.value)),g.value-=f):i==="down"?(g.value>=0&&(g.value=ie*-1,b.value+=1,a("count",b.value)),g.value+=f):i==="left"?(Math.abs(_.value)>=ce&&(_.value=0,b.value+=1,a("count",b.value)),_.value-=f):i==="right"&&(_.value>=0&&(_.value=ce*-1,b.value+=1,a("count",b.value)),_.value+=f),Z)return;let{singleWaitTime:ue}=t;n.value&&clearTimeout(n.value),d.value?Math.abs(g.value)%d.value<f?n.value=setTimeout(()=>{T()},ue):T():N.value&&Math.abs(_.value)%N.value<f?n.value=setTimeout(()=>{T()},ue):T()})},T=()=>{if(y(),F.value||!I.value||b.value===t.count){a("stop",b.value),b.value=0;return}R(t.direction,w.value,!1)},se=()=>{if(G(t.list),L.value){let i=r.value.offsetWidth;i=i*2+1,p.value=i}I.value?(M.value=u.value.offsetHeight,t.modelValue&&T()):(y(),g.value=_.value=0)},q=()=>{F.value=!1,T()},Q=()=>{F.value=!0,n.value&&clearTimeout(n.value),y()},V=B(()=>t.hover&&t.modelValue&&I.value),we=$t(i=>{y();const f=d.value?d.value:15;i.deltaY<0&&R("down",f,!0),i.deltaY>0&&R("up",f,!0)},30),$e=i=>{we(i)},re=()=>{y(),F.value=!1,se()};return o({Reset:()=>{re()}}),ee(()=>t.list,()=>{t.isWatch&&Ne(()=>{re()})},{deep:!0}),ee(()=>t.modelValue,i=>{i?q():Q()}),ee(()=>t.count,i=>{i!==0&&q()}),Te(()=>{y(),clearTimeout(n.value)}),U(()=>{I.value&&se()}),(i,f)=>t.wheel&&t.hover?(m(),S("div",{key:0,ref_key:"realBoxRef",ref:u,style:D(z.value),onMouseenter:f[0]||(f[0]=()=>{V.value&&Q()}),onMouseleave:f[1]||(f[1]=()=>{V.value&&q()}),onWheel:f[2]||(f[2]=Z=>{V.value&&$e(Z)})},[c("div",{ref_key:"slotListRef",ref:r,style:D(A.value)},[H(i.$slots,"default")],4),c("div",{style:D(A.value)},[H(i.$slots,"default")],4)],36)):(m(),S("div",{key:1,style:D(z.value),ref_key:"realBoxRef",ref:u,onMouseenter:f[3]||(f[3]=()=>{V.value&&Q()}),onMouseleave:f[4]||(f[4]=()=>{V.value&&q()})},[c("div",{ref_key:"slotListRef",ref:r,style:D(A.value)},[H(i.$slots,"default")],4),c("div",{style:D(A.value)},[H(i.$slots,"default")],4)],36))}}),Ct={};function Ft(e,o){return m(),S("div",null,[H(e.$slots,"default")])}const Be=E(Ct,[["render",Ft]]),Lt=e=>(ae("data-v-6932ab03"),e=e(),le(),e),Nt={class:"left_boottom"},Tt={class:"orderNum doudong"},kt={class:"inner_right"},Ot=Lt(()=>c("div",{class:"dibu"},null,-1)),Wt={class:"info"},Et={class:"text-content zhuyao"},It={class:"info"},At={class:"text-content ciyao"},Rt=C({__name:"left-bottom",setup(e){const o=be(),{defaultOption:s,indexConfig:t}=ve(o),a=Y({list:[{head:"流程1：基本情况",content:"全市种植面积：60万亩     主要分布：克旗、翁旗、阿旗"},{head:"流程2：生产基地",content:"基地总面积：9万亩       燕麦种植面积：5000亩"},{head:"流程3：种植",content:"种植条件：适宜干旱半干旱地区的冷凉地区"},{head:"流程4：初加工",content:"途径：去皮、洗核"},{head:"流程5：运输",content:"物流方式：汽车、海运     是否需要冷链：是"},{head:"流程6：深加工",content:"加工产品：燕麦米、燕麦片等   加工企业：克什克腾旗康弘农产品有限责任公司"},{head:"流程7：营养成分分析",content:"蛋白质含量：15.6%    β葡聚糖含量：4.6%"},{head:"流程8：包装",content:"包装材料：纸箱"},{head:"流程9：配送",content:"配送方式：直供"},{head:"流程10：销售",content:"线上销售：国铁商城、中粮      线下销售：超市、门店"},{head:"流程11：生态保护",content:"碳积分：10g CO2e        固碳效果：7g CO2"}],defaultOption:{...s.value,singleHeight:256,limitScrollNum:4},scroll:!0}),r=B(()=>t.value.leftBottomSwiper?Se:Be);return U(()=>{}),(u,l)=>(m(),S("div",{class:J(["left_boottom_wrap beautify-scroll-def",{"overflow-y-auto":!x(t).leftBottomSwiper}])},[(m(),W(ge(r.value),{list:a.list,modelValue:a.scroll,"onUpdate:modelValue":l[0]||(l[0]=n=>a.scroll=n),singleHeight:a.defaultOption.singleHeight,step:a.defaultOption.step,limitScrollNum:a.defaultOption.limitScrollNum,hover:a.defaultOption.hover,singleWaitTime:a.defaultOption.singleWaitTime,wheel:a.defaultOption.wheel},{default:$(()=>[c("ul",Nt,[(m(!0),S(he,null,_e(a.list,(n,p)=>(m(),S("li",{class:"left_boottom_item",key:p},[c("span",Tt,O(p+1),1),c("div",kt,[Ot,c("div",Wt,[c("span",Et,O(n.head),1)]),c("div",It,[c("span",At,O(n.content),1)])])]))),128))])]),_:1},8,["list","modelValue","singleHeight","step","limitScrollNum","hover","singleWaitTime","wheel"]))],2))}}),Dt=E(Rt,[["__scopeId","data-v-6932ab03"]]),Ht=C({__name:"center-bottom",setup(e){var o;const s=v({}),t=()=>{o={x:[2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],data1:[26.48,25.34,29.33,71.46,75.58,97.78,119.38,121.88,165.36,190.45,212.14,256.68,285.02,276.26,270.32,279.03,281.56,299.59,320.03,348.84,409.03],data2:[24.2,28.97,38.37,71.77,79.53,90.14,104.06,108.53,108.86,136.19,159.45,153.12,143.23,156.57,165.87,180.68,203.94,215.95,243.54,265.93,278.39],data3:[4.42,8.8,12.9,25.39,31.3,40.8,50.1,61,74,88,110,145.21,180,190.7,228,262,306,349.6,201.05,211.46,202.17]},je().then(r=>{console.log("中下--安装计划",r),r.success?a(o):X({message:r.msg,type:"warning"})}).catch(r=>{X.error(r)})},a=async r=>{s.value={tooltip:{trigger:"axis",backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"},formatter:function(u){var l=u[0].name+"<br>";return u.forEach(function(n){n.value?(n.seriesName=="旅游价值/亿元",l+=n.marker+" "+n.seriesName+" : "+n.value+"</br>"):l+=n.marker+" "+n.seriesName+" :  - </br>"}),l}},legend:{data:["农业产值/亿元","牧业产值/亿元","旅游价值/亿元"],textStyle:{color:"#B4B4B4"},top:"0"},grid:{left:"50px",right:"40px",bottom:"30px",top:"20px"},xAxis:{data:r.x,axisLine:{lineStyle:{color:"#B4B4B4"}},axisTick:{show:!1}},yAxis:[{splitLine:{show:!1},axisLine:{lineStyle:{color:"#B4B4B4"}},axisLabel:{formatter:"{value}"}},{splitLine:{show:!1},axisLine:{lineStyle:{color:"#B4B4B4"}},axisLabel:{formatter:"{value} "}}],series:[{name:"农业产值/亿元",type:"bar",barWidth:10,itemStyle:{borderRadius:5,color:new j(0,0,0,1,[{offset:0,color:"#956FD4"},{offset:1,color:"#3EACE5"}])},data:r.data1},{name:"牧业产值/亿元",type:"bar",barWidth:10,itemStyle:{borderRadius:5,color:new j(0,0,0,1,[{offset:0,color:"rgba(156,107,211,0.8)"},{offset:.2,color:"rgba(156,107,211,0.5)"},{offset:1,color:"rgba(156,107,211,0.2)"}])},z:-12,data:r.data2},{name:"旅游价值/亿元",type:"line",smooth:!0,showAllSymbol:!0,symbol:"emptyCircle",symbolSize:8,yAxisIndex:1,itemStyle:{color:"#F02FC2"},data:r.data3}]}};return U(()=>{t()}),(r,u)=>{const l=K("v-chart");return JSON.stringify(s.value)!="{}"?(m(),W(l,{key:0,class:"chart",option:s.value},null,8,["option"])):oe("",!0)}}}),Mt=C({__name:"right-top",setup(e){var o;const s=v({}),t=()=>{o={dateList:[1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],numList:[15.3291825,10.45540525,11.97455993,11.99714492,13.17946534,13.36141598,15.8580853,18.56219478,26.72760158,29.7789261,34.74209691,39.60658626,41.86662447,47.87023948,56.15912869,55.84794951,55.96805285,56.4150373,54.48397117,55.5042339,55.738948]};for(var r=0;r<o.numList.length;r++)o.numList[r]=parseFloat(o.numList[r].toFixed(2));a(o.dateList,o.numList)},a=async(r,u)=>{s.value={xAxis:{type:"category",data:r,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"rgba(31,99,163,.2)"}},axisLine:{lineStyle:{color:"rgba(31,99,163,.1)"}},axisLabel:{color:"#7EB7FD",fontWeight:"500"}},yAxis:{type:"value",splitLine:{show:!0,lineStyle:{color:"rgba(31,99,163,.2)"}},axisLine:{lineStyle:{color:"rgba(31,99,163,.1)"}},axisLabel:{color:"#7EB7FD",fontWeight:"500"}},tooltip:{trigger:"axis",backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"}},grid:{show:!0,left:"10px",right:"30px",bottom:"10px",top:"32px",containLabel:!0,borderColor:"#1F63A3"},series:[{data:u,type:"line",smooth:!0,symbol:"none",name:"碳排放（百万吨）",color:"rgba(252,144,16,.7)",areaStyle:{color:new j(0,0,0,1,[{offset:0,color:"rgba(252,144,16,.7)"},{offset:1,color:"rgba(252,144,16,.0)"}],!1)},markPoint:{data:[{name:"最大值",type:"max",valueDim:"y",symbol:"rect",symbolSize:[60,26],symbolOffset:[0,-20],itemStyle:{color:"rgba(0,0,0,0)"},label:{color:"#FC9010",backgroundColor:"rgba(252,144,16,0.1)",borderRadius:6,padding:[7,14],borderWidth:.5,borderColor:"rgba(252,144,16,.5)",formatter:"碳排放峰值：{c}"}},{name:"最大值",type:"max",valueDim:"y",symbol:"circle",symbolSize:6,itemStyle:{color:"#FC9010",shadowColor:"#FC9010",shadowBlur:8},label:{formatter:""}}]}}]}};return U(()=>{t()}),(r,u)=>{const l=K("v-chart");return JSON.stringify(s.value)!="{}"?(m(),W(l,{key:0,class:"chart",option:s.value},null,8,["option"])):oe("",!0)}}}),zt={class:"right_bottom"},Vt=C({__name:"right-center",setup(e){const o=v({showValue:!0,unit:"亿元"});v([]);var s;return(()=>{s=[{value:1578.99,name:"克什克腾旗"},{value:710.86,name:"阿鲁科尔沁旗"},{value:565.94,name:"巴林右旗"},{value:495.19,name:"翁牛特旗"},{value:408.03,name:"巴林左旗"},{value:345.52,name:"敖汉旗"},{value:284.61,name:"松山区"},{value:219.3,name:"林西县"}]})(),(a,r)=>(m(),S("div",zt,[h(x(Ee),{config:o.value,style:{width:"100%",height:"260px"},data:x(s)},null,8,["config","data"])]))}}),jt=E(Vt,[["__scopeId","data-v-331ebf05"]]),Ut=e=>(ae("data-v-ac1cb545"),e=e(),le(),e),Gt={class:"right_bottom"},Pt={class:"orderNum"},qt={class:"inner_right"},Jt=Ut(()=>c("div",{class:"dibu"},null,-1)),Xt={class:"flex"},Yt={class:"info"},Kt={class:"text-content zhuyao"},Qt={class:"flex"},Zt={class:"info"},eo=C({__name:"right-bottom",setup(e){const o=be(),{defaultOption:s,indexConfig:t}=ve(o),a=Y({list:[{head:"流程1：基本情况",content:"特征：体型大、产肉多、产毛量高等    主要产区：克旗、阿旗、右旗、翁旗"},{head:"流程2：繁育",content:"牵头单位：内蒙古草原金峰畜牧有限公司    繁育方式：本交繁殖、胚胎移植"},{head:"流程3：养殖端基地建设",content:"牵头单位：赤峰市农投集团     养殖管理方式：个人购买草料，承包母羊"},{head:"流程4：有机肥生产与饲料加工",content:"牵头单位：内蒙古绿田园农业有限公司     饲草料：天然青干草配绿色玉米"},{head:"流程5：安全检测",content:"协作单位：市农牧局检验检测中心"},{head:"流程6：屠宰加工",content:"加工工艺：吊挂、刺杀放血、预剥、倒挂、去头蹄等      附加产品：羊毛"},{head:"流程7：品质鉴定",content:"牵头单位：赤峰农投集团、国家草原所鉴定中心      协作单位：赤峰市畜牧研究所"},{head:"流程8：肉制品加工",content:"加工类型：生鲜羊肉、肉制品、副产物   产品：带骨涮、西式分割、中式分割系列等"}],defaultOption:{...s.value,singleHeight:252,limitScrollNum:3},scroll:!0}),r=B(()=>t.value.rightBottomSwiper?Se:Be);return U(()=>{}),(u,l)=>(m(),S("div",{class:J(["right_bottom_wrap beautify-scroll-def",{"overflow-y-auto":!x(t).rightBottomSwiper}])},[(m(),W(ge(r.value),{list:a.list,modelValue:a.scroll,"onUpdate:modelValue":l[0]||(l[0]=n=>a.scroll=n),singleHeight:a.defaultOption.singleHeight,step:a.defaultOption.step,limitScrollNum:a.defaultOption.limitScrollNum,hover:a.defaultOption.hover,singleWaitTime:a.defaultOption.singleWaitTime,wheel:a.defaultOption.wheel},{default:$(()=>[c("ul",Gt,[(m(!0),S(he,null,_e(a.list,(n,p)=>(m(),S("li",{class:"right_center_item",key:p},[c("span",Pt,O(p+1),1),c("div",qt,[Jt,c("div",Xt,[c("div",Yt,[c("span",Kt,O(n.head),1)])]),c("div",Qt,[c("div",Zt,[c("span",{class:J(["text-content ciyao",{warning:n.alertdetail}])},O(n.content),3)])])])]))),128))])]),_:1},8,["list","modelValue","singleHeight","step","limitScrollNum","hover","singleWaitTime","wheel"]))],2))}}),to=E(eo,[["__scopeId","data-v-ac1cb545"]]),oo={class:"index-box"},ao={class:"contetn_left"},lo={class:"contetn_center"},no={class:"contetn_right"},so=C({__name:"index",setup(e){return(o,s)=>(m(),S("div",oo,[c("div",ao,[h(x(k),{class:"contetn_left-top contetn_lr-item",title:"生态碳汇"},{default:$(()=>[h(ze)]),_:1}),h(x(k),{class:"contetn_left-center contetn_lr-item",title:"生态产品价值占比"},{default:$(()=>[h(Ue)]),_:1}),h(x(k),{class:"contetn_left-bottom contetn_lr-item",title:"牧产品溯源信息—燕麦",style:{padding:"0 10px 16px 10px"}},{default:$(()=>[h(Dt)]),_:1})]),c("div",lo,[h(Fe),h(x(k),{class:"contetn_center-bottom",title:"旅游生态价值"},{default:$(()=>[h(Ht)]),_:1})]),c("div",no,[h(x(k),{class:"contetn_left-bottom contetn_lr-item",title:"城市碳排放"},{default:$(()=>[h(Mt)]),_:1}),h(x(k),{class:"contetn_left-bottom contetn_lr-item",title:"区县排名",style:{padding:"0 10px 16px 10px"}},{default:$(()=>[h(jt)]),_:1}),h(x(k),{class:"contetn_left-bottom contetn_lr-item",title:"农产品溯源信息—昭乌达羊"},{default:$(()=>[h(to)]),_:1})])]))}}),ho=E(so,[["__scopeId","data-v-51c999af"]]);export{ho as default};
