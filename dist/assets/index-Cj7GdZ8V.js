import{B as we,_ as Le,a as Fe,i as $e,b as oe,C as Ce}from"./center-map-C9O0I3Da.js";import{d as F,c as m,u as N,j as w,e as S,f as u,C as W,D as ae,g as H,G as X,x as L,q as le,s as ne,a as v,r as K,H as U,L as j,B as Y,I as Ne,J as x,w as ee,n as Te,K as ke,o as G,h as D,t as pe,F as ve,M as he,N as _e,i as _}from"./index-1JUdFa1c.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./api-DgRWLGle.js";import{c as Oe,i as We}from"./index-CWsa1NE8.js";/* empty css             *//* empty css                   */import{u as ge}from"./setting-wc02x3qU.js";import"./yanmai-Dq-DmbnI.js";import"./linq-BSqhCn6e.js";const be=e=>(le("data-v-9d88689f"),e=e(),ne(),e),Ee={key:0,class:"item_title"},Ie=be(()=>u("div",{class:"zuo"},null,-1)),Ae={class:"title-inner"},Re=be(()=>u("div",{class:"you"},null,-1)),De=F({__name:"item-wrap",props:{title:{default:""}},setup(e){return(n,r)=>(m(),N(L(we),null,{default:w(()=>[n.title!==""?(m(),S("div",Ee,[Ie,u("span",Ae,"   "+W(n.title)+"   ",1),Re])):ae("",!0),u("div",{class:X(n.title!==""?"item_title_content":"item_title_content_def")},[H(n.$slots,"default",{},void 0,!0)],2)]),_:3}))}}),O=E(De,[["__scopeId","data-v-9d88689f"]]),He=F({__name:"left-top",setup(e){v(2),K({alarmNum:0,offlineNum:0,onlineNum:0,totalNum:0});const n=v({});var r;const t=()=>{r={cy:["红山区","元宝山区","松山区","阿鲁科尔沁旗","巴林左旗","巴林右旗","林西县","克什克腾旗","翁牛特旗","喀喇沁旗","宁城县","敖汉旗"],category:["红山","元宝山","松山","阿旗","左旗","右旗","林西","克旗","翁旗","喀旗","宁城","敖汉"],data:[.09361,.21516,1.180556667,1.242046667,1.112173333,.95986,.833176667,3.45785,1.535306667,.969613333,1.26445,1.45134]};for(var a=0;a<r.data.length;a++)r.data[a]=parseFloat(r.data[a].toFixed(2));s(r)},s=async a=>{n.value={tooltip:{trigger:"axis",backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"},formatter:function(c){var o=c[0].name+"<br>";return c.forEach(function(l){l.value?o+=l.marker+" "+l.seriesName+" : "+l.value+"</br>":o+=l.marker+" "+l.seriesName+" :  - </br>"}),o}},legend:{data:["已安装","计划安装","安装率"],textStyle:{color:"#B4B4B4"},top:"0"},grid:{left:"50px",right:"40px",bottom:"30px",top:"20px"},xAxis:{data:a.category,axisLine:{lineStyle:{color:"#B4B4B4"}},axisTick:{show:!1},axisLabel:{show:!0,interval:0}},yAxis:[{splitLine:{show:!1},axisLine:{lineStyle:{color:"#B4B4B4"}},axisLabel:{formatter:"{value}"}},{splitLine:{show:!1},axisLine:{lineStyle:{color:"#B4B4B4"}},axisLabel:{formatter:"{value}% "}}],series:[{name:"生态碳汇（百万吨）",type:"bar",barWidth:10,itemStyle:{borderRadius:5,color:new j(0,0,0,1,[{offset:0,color:"#956FD4"},{offset:1,color:"#3EACE5"}])},data:a.data}]}};return t(),(a,c)=>{const o=U("v-chart");return m(),N(o,{class:"chart",option:n.value},null,8,["option"])}}}),Me=E(He,[["__scopeId","data-v-9d0d901b"]]),ze=F({__name:"left-center",setup(e){let n=["#0BFC7F","#A0A0A0","#F48C02","#F4023C"];const r=v({}),t=K({totalNum:5821.22,wzcpNum:489.92,tjfwNum:5069.3,whfwNum:262}),s=o=>new j(1,0,0,0,[{offset:0,color:o[0]},{offset:1,color:o[1]}]);(()=>{Oe().then(o=>{console.log("左中--用户总览",o),o.success?c():Y.error(o.msg)}).catch(o=>{Y.error(o)})})();const c=()=>{r.value={title:{top:"center",left:"center",text:[`{value|${t.totalNum}}`,"{name|总值（亿元）}"].join(`
`),textStyle:{rich:{value:{color:"#ffffff",fontSize:20,fontWeight:"bold",lineHeight:20,padding:[4,0,4,0]},name:{color:"#ffffff",lineHeight:20}}}},tooltip:{trigger:"item",backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"}},series:[{name:"生态产品价值（亿元）",type:"pie",radius:["40%","70%"],itemStyle:{borderRadius:6,borderColor:"rgba(255,255,255,0)",borderWidth:2},color:n,label:{show:!0,formatter:`   {b|{b}}   
   {c|{c}}   {per|{d}%}  `,rich:{b:{color:"#fff",fontSize:12,lineHeight:26},c:{color:"#31ABE3",fontSize:14},per:{color:"#31ABE3",fontSize:14}}},emphasis:{show:!1},legend:{show:!1},tooltip:{show:!0},labelLine:{show:!0,length:20,length2:36,smooth:.2,lineStyle:{}},data:[{value:t.wzcpNum,name:"物质产品",itemStyle:{color:s(["#0BFC7F","#A3FDE0"])}},{value:t.tjfwNum,name:"调节服务",itemStyle:{color:s(["#00FFFF","#008B8B"])}},{value:t.whfwNum,name:"文化服务",itemStyle:{color:s(["#F48C02","#FDDB7D"])}}]}]}};return(o,l)=>{const p=U("v-chart");return m(),N(p,{class:"chart",option:r.value},null,8,["option"])}}});var Ve=Le,je=function(){return Ve.Date.now()},Ue=je,Ge=/\s/;function Pe(e){for(var n=e.length;n--&&Ge.test(e.charAt(n)););return n}var qe=Pe,Je=qe,Xe=/^\s+/;function Ye(e){return e&&e.slice(0,Je(e)+1).replace(Xe,"")}var Ke=Ye,Qe=Fe,Ze=$e,et="[object Symbol]";function tt(e){return typeof e=="symbol"||Ze(e)&&Qe(e)==et}var ot=tt,at=Ke,de=oe,lt=ot,fe=NaN,nt=/^[-+]0x[0-9a-f]+$/i,st=/^0b[01]+$/i,rt=/^0o[0-7]+$/i,it=parseInt;function ct(e){if(typeof e=="number")return e;if(lt(e))return fe;if(de(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=de(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=at(e);var r=st.test(e);return r||rt.test(e)?it(e.slice(2),r?2:8):nt.test(e)?fe:+e}var ut=ct,dt=oe,te=Ue,me=ut,ft="Expected a function",mt=Math.max,pt=Math.min;function vt(e,n,r){var t,s,a,c,o,l,p=0,M=!1,h=!1,g=!0;if(typeof e!="function")throw new TypeError(ft);n=me(n)||0,dt(r)&&(M=!!r.leading,h="maxWait"in r,a=h?mt(me(r.maxWait)||0,n):a,g="trailing"in r?!!r.trailing:g);function $(d){var B=t,y=s;return t=s=void 0,p=d,c=e.apply(y,B),c}function b(d){return p=d,o=setTimeout(C,n),M?$(d):c}function I(d){var B=d-l,y=d-p,R=n-B;return h?pt(R,a-y):R}function z(d){var B=d-l,y=d-p;return l===void 0||B>=n||B<0||h&&y>=a}function C(){var d=te();if(z(d))return P(d);o=setTimeout(C,I(d))}function P(d){return o=void 0,g&&t?$(d):(t=s=void 0,c)}function A(){o!==void 0&&clearTimeout(o),p=0,t=l=s=o=void 0}function q(){return o===void 0?c:P(te())}function T(){var d=te(),B=z(d);if(t=arguments,s=this,l=d,B){if(o===void 0)return b(l);if(h)return clearTimeout(o),o=setTimeout(C,n),$(l)}return o===void 0&&(o=setTimeout(C,n)),c}return T.cancel=A,T.flush=q,T}var ht=vt,_t=ht,gt=oe,bt="Expected a function";function yt(e,n,r){var t=!0,s=!0;if(typeof e!="function")throw new TypeError(bt);return gt(r)&&(t="leading"in r?!!r.leading:t,s="trailing"in r?!!r.trailing:s),_t(e,n,{leading:t,maxWait:n,trailing:s})}var xt=yt;const St=Ne(xt),ye=F({__name:"seamless-scroll",props:{modelValue:{type:Boolean,default:!0},list:{default:()=>[]},step:{default:1},limitScrollNum:{default:3},hover:{type:Boolean,default:!1},direction:{default:"up"},singleHeight:{default:0},singleWidth:{default:0},singleWaitTime:{default:1e3},isRemUnit:{type:Boolean,default:!1},isWatch:{type:Boolean,default:!0},delay:{default:0},ease:{default:"ease-in"},count:{default:-1},copyNum:{default:1},wheel:{type:Boolean,default:!1},singleLine:{type:Boolean,default:!1}},emits:["count","stop"],setup(e,{expose:n,emit:r}){const t=e,s=r;v(null);const a=v(null),c=v(null),o=v(null),l=v(null),p=v(0),M=v(0),h=v(0),g=v(0),$=v(!1),b=v(0),I=x(()=>t.list?t.list.length>=t.limitScrollNum:!1),z=x(()=>({width:p.value?`${p.value}px`:"auto",transform:`translate(${h.value}px,${g.value}px)`,transition:`all ${typeof t.ease=="string"?t.ease:"cubic-bezier("+t.ease.x1+","+t.ease.y1+","+t.ease.x2+","+t.ease.y2+")"} ${t.delay}ms`,overflow:"hidden",display:t.singleLine?"flex":"block"})),C=x(()=>t.direction=="left"||t.direction=="right");function P(i){i&&typeof i!="boolean"&&i.length>100&&console.warn(`数据达到了${i.length}条有点多哦~,可能会造成部分老旧浏览器卡顿。`)}const A=x(()=>C.value?{float:"left",overflow:"hidden",display:t.singleLine?"flex":"block",flexShrink:t.singleLine?0:1}:{overflow:"hidden"}),q=x(()=>t.isRemUnit?parseInt(globalThis.window.getComputedStyle(globalThis.document.documentElement,null).fontSize):1),T=x(()=>t.singleWidth*q.value),d=x(()=>t.singleHeight*q.value),B=x(()=>{let i,f=t.step;return C.value?i=T.value:i=d.value,i>0&&i%f>0&&console.error("如果设置了单步滚动，step 需是单步大小的约数，否则无法保证单步滚动结束的位置是否准确。~~~~~"),f}),y=()=>{cancelAnimationFrame(o.value),o.value=null},R=(i,f,Z)=>{o.value=requestAnimationFrame(function(){const ie=M.value/2,ce=p.value/2;if(i==="up"?(Math.abs(g.value)>=ie&&(g.value=0,b.value+=1,s("count",b.value)),g.value-=f):i==="down"?(g.value>=0&&(g.value=ie*-1,b.value+=1,s("count",b.value)),g.value+=f):i==="left"?(Math.abs(h.value)>=ce&&(h.value=0,b.value+=1,s("count",b.value)),h.value-=f):i==="right"&&(h.value>=0&&(h.value=ce*-1,b.value+=1,s("count",b.value)),h.value+=f),Z)return;let{singleWaitTime:ue}=t;l.value&&clearTimeout(l.value),d.value?Math.abs(g.value)%d.value<f?l.value=setTimeout(()=>{k()},ue):k():T.value&&Math.abs(h.value)%T.value<f?l.value=setTimeout(()=>{k()},ue):k()})},k=()=>{if(y(),$.value||!I.value||b.value===t.count){s("stop",b.value),b.value=0;return}R(t.direction,B.value,!1)},se=()=>{if(P(t.list),C.value){let i=a.value.offsetWidth;i=i*2+1,p.value=i}I.value?(M.value=c.value.offsetHeight,t.modelValue&&k()):(y(),g.value=h.value=0)},J=()=>{$.value=!1,k()},Q=()=>{$.value=!0,l.value&&clearTimeout(l.value),y()},V=x(()=>t.hover&&t.modelValue&&I.value),Se=St(i=>{y();const f=d.value?d.value:15;i.deltaY<0&&R("down",f,!0),i.deltaY>0&&R("up",f,!0)},30),Be=i=>{Se(i)},re=()=>{y(),$.value=!1,se()};return n({Reset:()=>{re()}}),ee(()=>t.list,()=>{t.isWatch&&Te(()=>{re()})},{deep:!0}),ee(()=>t.modelValue,i=>{i?J():Q()}),ee(()=>t.count,i=>{i!==0&&J()}),ke(()=>{y(),clearTimeout(l.value)}),G(()=>{I.value&&se()}),(i,f)=>t.wheel&&t.hover?(m(),S("div",{key:0,ref_key:"realBoxRef",ref:c,style:D(z.value),onMouseenter:f[0]||(f[0]=()=>{V.value&&Q()}),onMouseleave:f[1]||(f[1]=()=>{V.value&&J()}),onWheel:f[2]||(f[2]=Z=>{V.value&&Be(Z)})},[u("div",{ref_key:"slotListRef",ref:a,style:D(A.value)},[H(i.$slots,"default")],4),u("div",{style:D(A.value)},[H(i.$slots,"default")],4)],36)):(m(),S("div",{key:1,style:D(z.value),ref_key:"realBoxRef",ref:c,onMouseenter:f[3]||(f[3]=()=>{V.value&&Q()}),onMouseleave:f[4]||(f[4]=()=>{V.value&&J()})},[u("div",{ref_key:"slotListRef",ref:a,style:D(A.value)},[H(i.$slots,"default")],4),u("div",{style:D(A.value)},[H(i.$slots,"default")],4)],36))}}),Bt={};function wt(e,n){return m(),S("div",null,[H(e.$slots,"default")])}const xe=E(Bt,[["render",wt]]),Lt=e=>(le("data-v-6932ab03"),e=e(),ne(),e),Ft={class:"left_boottom"},$t={class:"orderNum doudong"},Ct={class:"inner_right"},Nt=Lt(()=>u("div",{class:"dibu"},null,-1)),Tt={class:"info"},kt={class:"text-content zhuyao"},Ot={class:"info"},Wt={class:"text-content ciyao"},Et=F({__name:"left-bottom",setup(e){const n=ge(),{defaultOption:r,indexConfig:t}=pe(n),s=K({list:[{head:"流程1：基本情况",content:"全市种植面积：60万亩     主要分布：克旗、翁旗、阿旗"},{head:"流程2：生产基地",content:"基地总面积：9万亩       燕麦种植面积：5000亩"},{head:"流程3：种植",content:"种植条件：适宜干旱半干旱地区的冷凉地区"},{head:"流程4：初加工",content:"途径：去皮、洗核"},{head:"流程5：运输",content:"物流方式：汽车、海运     是否需要冷链：是"},{head:"流程6：深加工",content:"加工产品：燕麦米、燕麦片等   加工企业：克什克腾旗康弘农产品有限责任公司"},{head:"流程7：营养成分分析",content:"蛋白质含量：15.6%    β葡聚糖含量：4.6%"},{head:"流程8：包装",content:"包装材料：纸箱"},{head:"流程9：配送",content:"配送方式：直供"},{head:"流程10：销售",content:"线上销售：国铁商城、中粮      线下销售：超市、门店"},{head:"流程11：生态保护",content:"碳积分：10g CO2e        固碳效果：7g CO2"}],defaultOption:{...r.value,singleHeight:256,limitScrollNum:4},scroll:!0}),a=x(()=>t.value.leftBottomSwiper?ye:xe);return G(()=>{}),(c,o)=>(m(),S("div",{class:X(["left_boottom_wrap beautify-scroll-def",{"overflow-y-auto":!L(t).leftBottomSwiper}])},[(m(),N(_e(a.value),{list:s.list,modelValue:s.scroll,"onUpdate:modelValue":o[0]||(o[0]=l=>s.scroll=l),singleHeight:s.defaultOption.singleHeight,step:s.defaultOption.step,limitScrollNum:s.defaultOption.limitScrollNum,hover:s.defaultOption.hover,singleWaitTime:s.defaultOption.singleWaitTime,wheel:s.defaultOption.wheel},{default:w(()=>[u("ul",Ft,[(m(!0),S(ve,null,he(s.list,(l,p)=>(m(),S("li",{class:"left_boottom_item",key:p},[u("span",$t,W(p+1),1),u("div",Ct,[Nt,u("div",Tt,[u("span",kt,W(l.head),1)]),u("div",Ot,[u("span",Wt,W(l.content),1)])])]))),128))])]),_:1},8,["list","modelValue","singleHeight","step","limitScrollNum","hover","singleWaitTime","wheel"]))],2))}}),It=E(Et,[["__scopeId","data-v-6932ab03"]]),At=F({__name:"center-bottom",setup(e){var n;const r=v({}),t=()=>{n={x:[2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],data1:[26.48,25.34,29.33,71.46,75.58,97.78,119.38,121.88,165.36,190.45,212.14,256.68,285.02,276.26,270.32,279.03,281.56,299.59,320.03,348.84,409.03],data2:[24.2,28.97,38.37,71.77,79.53,90.14,104.06,108.53,108.86,136.19,159.45,153.12,143.23,156.57,165.87,180.68,203.94,215.95,243.54,265.93,278.39],data3:[4.42,8.8,12.9,25.39,31.3,40.8,50.1,61,74,88,110,145.21,180,190.7,228,262,306,349.6,201.05,211.46,202.17]},We().then(a=>{console.log("中下--安装计划",a),a.success?s(n):Y({message:a.msg,type:"warning"})}).catch(a=>{Y.error(a)})},s=async a=>{r.value={tooltip:{trigger:"axis",backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"},formatter:function(c){var o=c[0].name+"<br>";return c.forEach(function(l){l.value?(l.seriesName=="旅游价值/亿元",o+=l.marker+" "+l.seriesName+" : "+l.value+"</br>"):o+=l.marker+" "+l.seriesName+" :  - </br>"}),o}},legend:{data:["农业产值/亿元","牧业产值/亿元","旅游价值/亿元"],textStyle:{color:"#B4B4B4"},top:"0"},grid:{left:"50px",right:"40px",bottom:"30px",top:"20px"},xAxis:{data:a.x,axisLine:{lineStyle:{color:"#B4B4B4"}},axisTick:{show:!1}},yAxis:[{splitLine:{show:!1},axisLine:{lineStyle:{color:"#B4B4B4"}},axisLabel:{formatter:"{value}"}},{splitLine:{show:!1},axisLine:{lineStyle:{color:"#B4B4B4"}},axisLabel:{formatter:"{value} "}}],series:[{name:"农业产值/亿元",type:"bar",barWidth:10,itemStyle:{borderRadius:5,color:new j(0,0,0,1,[{offset:0,color:"#956FD4"},{offset:1,color:"#3EACE5"}])},data:a.data1},{name:"牧业产值/亿元",type:"bar",barWidth:10,itemStyle:{borderRadius:5,color:new j(0,0,0,1,[{offset:0,color:"rgba(156,107,211,0.8)"},{offset:.2,color:"rgba(156,107,211,0.5)"},{offset:1,color:"rgba(156,107,211,0.2)"}])},z:-12,data:a.data2},{name:"旅游价值/亿元",type:"line",smooth:!0,showAllSymbol:!0,symbol:"emptyCircle",symbolSize:8,yAxisIndex:1,itemStyle:{color:"#F02FC2"},data:a.data3}]}};return G(()=>{t()}),(a,c)=>{const o=U("v-chart");return JSON.stringify(r.value)!="{}"?(m(),N(o,{key:0,class:"chart",option:r.value},null,8,["option"])):ae("",!0)}}}),Rt=F({__name:"right-top",setup(e){var n;const r=v({}),t=()=>{n={dateList:[1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],numList:[15.3291825,10.45540525,11.97455993,11.99714492,13.17946534,13.36141598,15.8580853,18.56219478,26.72760158,29.7789261,34.74209691,39.60658626,41.86662447,47.87023948,56.15912869,55.84794951,55.96805285,56.4150373,54.48397117,55.5042339,55.738948]};for(var a=0;a<n.numList.length;a++)n.numList[a]=parseFloat(n.numList[a].toFixed(2));s(n.dateList,n.numList)},s=async(a,c)=>{r.value={xAxis:{type:"category",data:a,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"rgba(31,99,163,.2)"}},axisLine:{lineStyle:{color:"rgba(31,99,163,.1)"}},axisLabel:{color:"#7EB7FD",fontWeight:"500"}},yAxis:{type:"value",splitLine:{show:!0,lineStyle:{color:"rgba(31,99,163,.2)"}},axisLine:{lineStyle:{color:"rgba(31,99,163,.1)"}},axisLabel:{color:"#7EB7FD",fontWeight:"500"}},tooltip:{trigger:"axis",backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"}},grid:{show:!0,left:"10px",right:"30px",bottom:"10px",top:"32px",containLabel:!0,borderColor:"#1F63A3"},series:[{data:c,type:"line",smooth:!0,symbol:"none",name:"碳排放（百万吨）",color:"rgba(252,144,16,.7)",areaStyle:{color:new j(0,0,0,1,[{offset:0,color:"rgba(252,144,16,.7)"},{offset:1,color:"rgba(252,144,16,.0)"}],!1)},markPoint:{data:[{name:"最大值",type:"max",valueDim:"y",symbol:"rect",symbolSize:[60,26],symbolOffset:[0,-20],itemStyle:{color:"rgba(0,0,0,0)"},label:{color:"#FC9010",backgroundColor:"rgba(252,144,16,0.1)",borderRadius:6,padding:[7,14],borderWidth:.5,borderColor:"rgba(252,144,16,.5)",formatter:"碳排放峰值：{c}"}},{name:"最大值",type:"max",valueDim:"y",symbol:"circle",symbolSize:6,itemStyle:{color:"#FC9010",shadowColor:"#FC9010",shadowBlur:8},label:{formatter:""}}]}}]}};return G(()=>{t()}),(a,c)=>{const o=U("v-chart");return JSON.stringify(r.value)!="{}"?(m(),N(o,{key:0,class:"chart",option:r.value},null,8,["option"])):ae("",!0)}}}),Dt=F({__name:"right-center",setup(e){const n=v({});var r;const t=()=>{r={name:["克什克腾旗","阿鲁科尔沁旗","巴林右旗","翁牛特旗","巴林左旗","敖汉旗","松山区","林西县"],data:[1578.99,710.86,565.94,495.19,408.03,345.52,284.61,219.3]};for(var a=0;a<r.data.length;a++)r.data[a]=parseFloat(r.data[a].toFixed(2));s(r)},s=async a=>{n.value={tooltip:{trigger:"axis",backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"},formatter:function(c){var o=c[0].name+"<br>";return c.forEach(function(l){l.value?o+=l.marker+" "+l.seriesName+" : "+l.value+"</br>":o+=l.marker+" "+l.seriesName+" :  - </br>"}),o}},grid:{left:"100px",right:"40px",bottom:"30px",top:"20px"},yAxis:{data:a.name,inverse:!0,axisLine:{lineStyle:{color:"#B4B4B4"}},axisTick:{show:!1},axisLabel:{show:!0,interval:0}},xAxis:[{splitLine:{show:!1},max:a.data[0],axisLine:{lineStyle:{color:"#B4B4B4"}},axisLabel:{formatter:"{value}"}},{splitLine:{show:!1},axisLine:{lineStyle:{color:"#B4B4B4"}},axisLabel:{formatter:"{value}% "}}],series:[{name:"生态产品价值（亿元）",type:"bar",barWidth:10,itemStyle:{borderRadius:5,color:function(c){var o=["#37a2da","#32c5e9","#67e0e3","#9fe6b8","#ffdb5c","#ff9f7f","#fb7293","#37a2da"];return o[c.dataIndex]}},data:a.data}]}};return t(),(a,c)=>{const o=U("v-chart");return m(),N(o,{class:"chart",option:n.value},null,8,["option"])}}}),Ht=E(Dt,[["__scopeId","data-v-6832e0a2"]]),Mt=e=>(le("data-v-ac1cb545"),e=e(),ne(),e),zt={class:"right_bottom"},Vt={class:"orderNum"},jt={class:"inner_right"},Ut=Mt(()=>u("div",{class:"dibu"},null,-1)),Gt={class:"flex"},Pt={class:"info"},qt={class:"text-content zhuyao"},Jt={class:"flex"},Xt={class:"info"},Yt=F({__name:"right-bottom",setup(e){const n=ge(),{defaultOption:r,indexConfig:t}=pe(n),s=K({list:[{head:"流程1：基本情况",content:"特征：体型大、产肉多、产毛量高等    主要产区：克旗、阿旗、右旗、翁旗"},{head:"流程2：繁育",content:"牵头单位：内蒙古草原金峰畜牧有限公司    繁育方式：本交繁殖、胚胎移植"},{head:"流程3：养殖端基地建设",content:"牵头单位：赤峰市农投集团     养殖管理方式：个人购买草料，承包母羊"},{head:"流程4：有机肥生产与饲料加工",content:"牵头单位：内蒙古绿田园农业有限公司     饲草料：天然青干草配绿色玉米"},{head:"流程5：安全检测",content:"协作单位：市农牧局检验检测中心"},{head:"流程6：屠宰加工",content:"加工工艺：吊挂、刺杀放血、预剥、倒挂、去头蹄等      附加产品：羊毛"},{head:"流程7：品质鉴定",content:"牵头单位：赤峰农投集团、国家草原所鉴定中心      协作单位：赤峰市畜牧研究所"},{head:"流程8：肉制品加工",content:"加工类型：生鲜羊肉、肉制品、副产物   产品：带骨涮、西式分割、中式分割系列等"}],defaultOption:{...r.value,singleHeight:252,limitScrollNum:3},scroll:!0}),a=x(()=>t.value.rightBottomSwiper?ye:xe);return G(()=>{}),(c,o)=>(m(),S("div",{class:X(["right_bottom_wrap beautify-scroll-def",{"overflow-y-auto":!L(t).rightBottomSwiper}])},[(m(),N(_e(a.value),{list:s.list,modelValue:s.scroll,"onUpdate:modelValue":o[0]||(o[0]=l=>s.scroll=l),singleHeight:s.defaultOption.singleHeight,step:s.defaultOption.step,limitScrollNum:s.defaultOption.limitScrollNum,hover:s.defaultOption.hover,singleWaitTime:s.defaultOption.singleWaitTime,wheel:s.defaultOption.wheel},{default:w(()=>[u("ul",zt,[(m(!0),S(ve,null,he(s.list,(l,p)=>(m(),S("li",{class:"right_center_item",key:p},[u("span",Vt,W(p+1),1),u("div",jt,[Ut,u("div",Gt,[u("div",Pt,[u("span",qt,W(l.head),1)])]),u("div",Jt,[u("div",Xt,[u("span",{class:X(["text-content ciyao",{warning:l.alertdetail}])},W(l.content),3)])])])]))),128))])]),_:1},8,["list","modelValue","singleHeight","step","limitScrollNum","hover","singleWaitTime","wheel"]))],2))}}),Kt=E(Yt,[["__scopeId","data-v-ac1cb545"]]),Qt={class:"index-box"},Zt={class:"contetn_left"},eo={class:"contetn_center"},to={class:"contetn_right"},oo=F({__name:"index",setup(e){return(n,r)=>(m(),S("div",Qt,[u("div",Zt,[_(L(O),{class:"contetn_left-top contetn_lr-item",title:"生态碳汇"},{default:w(()=>[_(Me)]),_:1}),_(L(O),{class:"contetn_left-center contetn_lr-item",title:"生态产品价值占比"},{default:w(()=>[_(ze)]),_:1}),_(L(O),{class:"contetn_left-bottom contetn_lr-item",title:"农产品溯源信息—燕麦",style:{padding:"0 10px 16px 10px"}},{default:w(()=>[_(It)]),_:1})]),u("div",eo,[_(Ce),_(L(O),{class:"contetn_center-bottom",title:"旅游生态价值"},{default:w(()=>[_(At)]),_:1})]),u("div",to,[_(L(O),{class:"contetn_left-bottom contetn_lr-item",title:"城市碳排放"},{default:w(()=>[_(Rt)]),_:1}),_(L(O),{class:"contetn_left-bottom contetn_lr-item",title:"生态价值排名",style:{padding:"0 10px 16px 10px"}},{default:w(()=>[_(Ht)]),_:1}),_(L(O),{class:"contetn_left-bottom contetn_lr-item",title:"牧产品溯源信息—昭乌达羊"},{default:w(()=>[_(Kt)]),_:1})])]))}}),vo=E(oo,[["__scopeId","data-v-0225eab2"]]);export{vo as default};
