/* empty css             *//* empty css               */import{G as x}from"./api-DgRWLGle.js";import{s as H,y as R}from"./yanmai-Dq-DmbnI.js";import{d as ee,a as O,o as te,H as le,c as u,e as $,f as l,u as m,D as f,V as ae,W as ne,i as t,j as e,F as I,M as B,C as M,U as L,E as D,m as E,a1 as Y,a2 as J,a3 as P,q as T,s as X}from"./index-1JUdFa1c.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css                     *//* empty css                  */const W="/assets/shuidao-BMyHu2P-.png",A="/assets/putao--w9Derhw.png",se={class:"ncpsy-left"},oe=ee({__name:"ncpsy-left",emits:["changestate"],setup(n,{emit:o}){const S=O("chifeng"),C=O({}),_=O(),p=["燕麦","昭乌达羊","巴林大米","喀喇沁山葡萄"];let V=O();const k=o,N={ncpsy:[{name:"红山",value:""},{name:"元宝山",value:""},{name:"松山",value:""},{name:"阿旗",value:"昭乌达羊, 燕麦"},{name:"左旗",value:""},{name:"右旗",value:"昭乌达羊, 巴林大米"},{name:"林西",value:""},{name:"克旗",value:"昭乌达羊, 燕麦"},{name:"翁旗",value:"昭乌达羊, 燕麦"},{name:"喀旗",value:"喀喇沁山葡萄"},{name:"宁城",value:""},{name:"敖汉",value:""}]},a=(g,v,r)=>{let w=100,j=1,U="",F,Z="";const Q={type:"piecewise",left:45,bottom:40,itemWidth:50,itemHeight:50,categories:["昭乌达羊","燕麦","巴林大米","喀喇沁山葡萄"],itemSymbol:[`image://${H}`,`image://${R}`,`image://${W}`,`image://${A}`],inRange:{symbolSize:{昭乌达羊:50,燕麦:50,巴林大米:50,喀喇沁番茄:50},symbol:{昭乌达羊:`image://${H}`,燕麦:`image://${R}`,巴林大米:`image://${W}`,喀喇沁番茄:`image://${A}`}},textStyle:{color:"#fff"}};let G;return r=="ncpsy"&&(F=Q,G={type:"scatter",coordinateSystem:"geo",data:K}),{backgroundColor:"rgba(0,0,0,0)",tooltip:{show:!1},visualMap:F,geo:{map:g,selectedMode:!1,top:w,show:!1},series:[{name:"MAP",type:"map",map:g,data:v,selectedMode:!1,zoom:j,geoIndex:1,top:w,aspectScale:.9,tooltip:{show:!0,formatter:function(y){return y.data&&y.data.value!=""?y.name+"："+Z+y.data.value+U:y.name},backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"}},label:{show:!0,color:"#fff",formatter:function(y){return y.data!==void 0,y.name.slice(0,2)},rich:{}},emphasis:{label:{show:!1},itemStyle:{areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(56,155,183, .8)"}],globalCoord:!1},borderWidth:1}},itemStyle:{borderColor:"rgba(147, 235, 248, .8)",borderWidth:3,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(147, 235, 248, .2)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, .3)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10}},G]}},c=async(g,v,r)=>{const w=await s(g);let j={};w.features.forEach(U=>{j[U.properties.name]=U.properties.centroid||U.properties.center}),console.log("dataSetHandle"),C.value=a(g,v,r)},h=async(g,v,r)=>{console.log("getData"),c(g,v,r)},s=g=>new Promise(async v=>{let r=ae(g);r=await x(`./map-geojson/${g}.json`).then(w=>w),S.value=g,ne(g,{geoJSON:r,specialAreas:{}}),v(r)});h(S.value,N.ncpsy,"ncpsy");const b=g=>{console.log(g),g.componentSubType=="scatter"&&window.open("http://sy.ctc-zc.com/backend/#/login?redirect=%2F")},q=g=>{let v=g.selected,r=0;for(r=0;r<p.length;r++)if(v[p[r]]==!1){k("changestate",p[r]),v[p[r]]=!0;break}r<p.length&&V.value.chart.dispatchAction({type:"selectDataRange",selected:v})},K=[[117.242465,43.056233,"昭乌达羊"],[117.542465,43.256233,"燕麦"],[119.022619,42.937128,"昭乌达羊"],[119.422619,42.937128,"燕麦"],[120.094969,43.87877,"昭乌达羊"],[120.094969,44.17877,"燕麦"],[118.678347,43.528963,"昭乌达羊"],[118.93345,43.785471,"巴林大米"],[118.408572,41.82778,"喀喇沁山葡萄"]];return te(()=>{}),(g,v)=>{const r=le("v-chart");return u(),$("div",se,[l("div",{class:"ncpsy-left-main",id:"ncpsy-chart1",ref_key:"centermapref",ref:_},[JSON.stringify(C.value)!="{}"?(u(),m(r,{key:0,id:"ncpsy-chart",class:"chart",option:C.value,onClick:b,onDatarangeselected:q,ref_key:"myChart",ref:V},null,8,["option"])):f("",!0)],512)])}}}),ie=z(oe,[["__scopeId","data-v-d4eafa1f"]]),de="/assets/1-BgFx8mS9.png",ue="/assets/2-B0ZVc4N0.png",_e="/assets/3-B2w1MZav.png",me="/assets/4-CUoj2GIa.png",ce="/assets/5-FlNdBrGk.png",he="/assets/6-CiKz3TV5.png",fe="/assets/7-O2MnWOEo.png",re="/assets/8--nXDhKfL.png",ge={data(){return{typeItems1:[{value:"基本情况",image:de},{value:"繁育",image:ue},{value:"养殖端基地建设",image:_e},{value:"有机肥生产与饲料加工",image:me}],typeItems2:[{value:"安全检测",image:ce},{value:"屠宰加工",image:he},{value:"品质鉴定",image:fe},{value:"肉制品加工",image:re}],state:"基本情况"}},methods:{ncpsy_right_header_menu_click(n){this.state=n}}},i=n=>(T("data-v-d9ff5a32"),n=n(),X(),n),pe={class:"ncpsy-right"},ve={class:"ncpsy-right-header"},ye=["src"],Ce={style:{"font-size":"16px"}},Ve=["src"],$e={style:{"font-size":"16px"}},ke={class:"ncpsy-right-content"},Ne=i(()=>l("div",null," 　　 1958年，德国赠送给中国50只德国美利奴羊。周恩来总理批示在内蒙古自治区赤峰市（原昭乌达盟）克什克腾旗建立种畜场，主要负责德国美利奴等品种细毛羊的纯种繁育和推广。同年8月，经国务院批准，“昭乌达盟好鲁库种羊场”成立，这也是全国第一家核心育种场。1993年，好鲁库种羊场改制，建立了“中澳合资内蒙古金峰畜牧有限公司”。当时从澳大利亚引进了“邦德”及“澳美”种羊，同时培育发展肉毛兼用型细毛羊和毛肉兼用型细毛羊。2005年12月，在中澳合资公司的基础上，重组成立了现在的“内蒙古草原金峰畜牧有限公司”（以下简称“草原金峰”）。从当初的好鲁库种羊场开始，到现在的草原金峰，一直都致力于新品种肉羊的培育和研究。经过多年的努力，最后利用德国美利奴羊为父本，澳洲美利奴羊为母本进行繁育，通过横交固定和选育、提高三个阶段，培育出体型外貌一致、遗传性能稳定的草原型肉羊新品种，这就是“昭乌达肉羊”。昭乌达肉羊是以德国美利奴羊为父本，澳洲美利奴羊为母本，历经几十年的杂交改良、选育提高，育成的肉用特征明显、遗传性能稳定的肉毛兼用型新品种。2012年3月，通过了国家畜禽遗传资源委员会的审定，并正式命名为“昭乌达肉羊”。这也是自巴美肉羊育成之后，国内第二个拥有自主知识产权的肉羊新品种。昭乌达肉羊也是第一个适应北方草原牧区环境条件的草原型肉羊新品种，它的成功选育，不但给北方的牧民带来了经济效益，也推动了中国整个肉羊产业的发展。 ",-1)),be=i(()=>l("div",null," 　　 与普通羊相比，昭乌达肉羊体型较大，产肉更多，成年种公羊体重平均为95.7公斤，母羊为55.7公斤，并且肉质细嫩、肥瘦相间，没有膻味。同时，它产毛量较高，羊毛品质好，成年公羊年平均剪毛量8—12公斤，母羊5—7公斤，平均净毛率42.6%。 ",-1)),we=i(()=>l("div",null," 　　 昭乌达肉羊育种区域为赤峰市北部地区四个牧业旗：克什克腾旗、阿鲁科尔沁旗、巴林右旗、翁牛特旗，位于内蒙古自治区中部，在北纬42°—45°之间，海拔在300米—2000米之间，属中温带半干旱大陆性季风气候区，四季分明，夏季短促干旱，冬季漫长寒冷，昼夜温差较大，年平均气温5℃,冬季最低温度可达-40°，无霜期80—140天，年均降水量200—400毫米。地势不平，山地、丘陵、坨甸草原交错。 ",-1)),Se=i(()=>l("div",null," 　　 昭乌达肉羊饲养区一般分布在草原牧区及农牧结合区，昭乌达肉羊是草原型肉羊新品种；因此，昭乌达肉羊饲养方式以草原放牧与补饲相结合。首先对草牧场利用作出科学规划，根据季节变化，确定昭乌达肉羊放牧与补饲时间，主要划分出二个不同饲养时间段，具体为：在5—11月份为放牧期，12月到第二年4月为放牧补饲期。同时，对草牧场进行划分，利用围封轮牧方式，划定放牧场、打草场，一般情况下，每只昭乌达肉羊有10.3亩放牧草场，有5.2亩打草牧场。 ",-1)),Ue=i(()=>l("div",null," 　　 羔羊出生后105日龄断乳分群，合格公羔转为育成公羊、合格母羔转为育成母羊，不合格羔羊转为育肥羔羊；育成公羊18月龄出售或转为成年公羊，育成母羊18月龄出售或转为基础母羊，育肥羔羊6月龄屠宰出栏；成年公羊5周岁淘汰，基础母羊5周岁淘汰。基础母羊群淘汰更新率为25%。 昭乌达肉羊有良好的早熟性，羔羊生长发育快，6月龄胴体重达16kg以上，是理想的肥羔生产用羊，每年所产公母羔在留足后备种用外，其余羔羊搞肥羔生产，也可采取经济杂交生产商品肉羔，加快畜群周转。 ",-1)),Ie=i(()=>l("div",null," 　　 昭乌达羊肉中含有人体所有的必需氨基酸 , 且有大量鲜味氨基酸，具有肉质鲜美的优良特点，符合生产高档羊肉产品标准。同时，昭乌达肉羊是我国第一个草原型肉羊品种，肉羊饲养方式以采食优质天然牧草为主，符合生产绿色有机食品标准。因此，培育推广昭乌达肉羊新品种，严格按照国际市场对羊肉生产质量标准要求，对肉羊生产各环节进行全方位监控，生产绿色、安全、有机肉羊产品，打造肉羊驰名品牌，可以提升我市肉羊产品档次，拉动全市肉羊产业发展。 ",-1)),Be=i(()=>l("div",null," 　　 （一）降低了草原载畜量 ",-1)),Me=i(()=>l("div",null," 　　　　 昭乌达肉羊的养殖效益是蒙古羊的2.1倍，养殖1只蒙古羊占用草牧场为15亩(放牧场12亩，打草场3亩)，养殖2.1只蒙古羊占用草牧场31.5亩，养殖1只昭乌达肉羊占用草牧场15.5亩(放牧场10.3亩，打草场5.2亩)。因此，达到同样的养殖效益，养殖1只昭乌达肉羊即可比养殖2.1只蒙古羊节省草牧场16亩。目前，全市养殖昭乌达肉羊100万只，节省草牧场1600万亩，极大地缓解了草牧场的超载现象，利于恢复草原植被，实现了畜牧业与生态环境协调发展与可持续发展的良好局面。 ",-1)),Oe=i(()=>l("div",null," 　　 （二）减少了过牧时间 ",-1)),je=i(()=>l("div",null," 　　　　 昭乌达肉羊的饲养方式是季节放牧与舍饲补饲相结合，每年3至6月份休牧禁牧，与蒙古羊全年放牧相比减少了牲畜在草原的放牧期限，在休牧期利于草牧场植物生长，极大地缓解了草牧场的过牧现象，促进了草原生态平衡。 ",-1)),De=i(()=>l("div",null," 　　 （三）避免了草原污染破坏 ",-1)),Ee=i(()=>l("div",null," 　　　　 昭乌达肉羊实施无公害绿色有机生产方式，杜绝了生产中的污染现象，避免了对草原的工业污染和人为破坏，利于维系整个草原的生态平衡系统。 综上所述，昭乌达肉羊是根据赤峰市自然条件、社会经济基础和市场发展需求培育而成的体型外貌一致、遗传性能稳定的草原型肉羊新品种，其主要特点是：肉毛双优、生长发育快、繁殖率高、胴体肉质好；适应我国北方牧区夏秋放牧冬春补饲相结合的饲养方式，适应性强、耐粗饲、养殖效益非常高，适合专业化饲养和农牧户家庭养殖，昭乌达肉羊养殖成为农牧民增收致富的又一条有效途径，昭乌达肉羊新品种的培育成功必将对促进当地肉羊产业和经济社会发展起到了巨大的推动作用。由于昭乌达肉羊个体生产性能较高，在适当压缩养殖数量的前提下仍能保持较高的生产经营效益，因此昭乌达肉羊的推广可以在发展畜牧业的前提下更好地保护草原生态，开辟了草原牧区经济可持续发展的可靠途径。 ",-1)),ze=i(()=>l("div",null," 　　 内蒙古草原金峰畜牧有限公司",-1)),Fe=i(()=>l("div",null," 　　 中国农科院草原、饲料研究所、内蒙古自治区畜牧科学院畜牧所、内蒙古农业大学、赤峰市畜牧研究所、赤峰学院、赤峰应用技术职业学院。",-1)),Ge=i(()=>l("div",null," 　　 昭乌达肉羊是应用杂交育种方法培育的肉毛兼用品种，父本为德国肉用美利奴羊，母本为地方毛肉兼用细毛羊。产于内蒙古自治区赤峰市克什克腾旗、阿鲁科尔沁旗、巴林右旗、翁牛特旗等草原牧区。（产业链中昭乌达羊暂定克什克腾旗好鲁库） ",-1)),He=i(()=>l("div",null," 　　 昭乌达肉羊体格较大，体质结实，结构匀称，胸部宽而深，背部平直，臀部宽广，肌肉丰满，肉用体型明显，公羊、母羊均无角，颈部无皱褶或有1～2个不明显的皱褶，头部至两眼联线、前肢至腕关节和后肢至飞节均覆盖有细毛。被毛白色，闭合良好，密度适中，细度均匀,以22µm为主，有明显的正常弯曲,油汗呈白色或乳白色，腹毛着生呈毛丛结构。羊毛平均自然长度：公羊8.0cm，母羊7.5cm。性成熟：公羊9月龄，母羊7月龄；母羊12月龄可进行第一次配种。季节性发情，母羊发情周期平均17d，发情持续期24h～48h,妊娠期平均148d，经产母羊产羔率135%以上。 具有适宜于牧区草原环境条件下饲养特点，耐粗饲，抗逆性强。 ",-1)),Re=i(()=>l("div",null," 　　 本交繁殖,同期发情人工授精,胚胎移植",-1)),We=i(()=>l("div",null," 　　 公母羊选育,发情控制,人工授精,冷配,胚胎移植",-1)),Ae=i(()=>l("div",null," 　　 冬羔：保证羔羊吃早吃好初乳；产后第15天起每天哺喂羔羊专用配合饲料50-70克，青干草自由采食，逐渐加大饲喂量；青草期每天上、下午各放牧一次，约30-40分钟，逐渐延长时间至90–120分钟；4月龄断奶，单独组群，每只每天补饲精料0.1公斤，青干草自由采食至6-7月龄出栏。羔羊出生后及时注射羊三联（四防）苗，防止体内外寄生虫病。 早春羔：保证羔羊吃早吃好初乳；产后第15天起每天哺喂羔羊专用配合饲料50–70克，青干草自由采食，逐渐加大饲喂量；青草期每天上、下午各放牧一次，约30-40分钟，逐渐延长时间至90-120分钟；，4月龄断奶，单独组群，放牧育肥至6-7月龄出栏。羔羊出生后及时注射羊三联（四防）苗，防止体内外寄生虫病。 ",-1)),Le=i(()=>l("div",null," 　　 全价饲料,补充饲料",-1)),Ye=i(()=>l("div",null," 　　 放牧加补饲 1、将投入育肥的羊群在牧草青绿多汁，营养丰富的草场上放牧。早出晚归，使羊少走动，多吃草，充分利用青草期抓膘。晚间归牧后每只羊补混合精料0.5公斤，视草场情况再补喂青干草1公斤，以及适量青贮或氨化饲料。最好将青干草粉碎，与精料和青贮混合搅拌后一起喂给。自由饮水，每隔3天啖盐，自由采食。 2、 育肥指标：育肥期60—70天，日增重100—150克，出栏前体重达到40—45公斤。 3、 参考饲料配方：玉米55%，葵花籽饼（或油菜籽饼）15%，麸皮20%，苜蓿草粉9%，食盐1%。 舍饲育肥 1、舍饲育肥最好使用塑料暖棚，进入育肥期后每只羊每天饲喂混合精料0.8—1.2公斤，加喂青干草1–1.5公斤，以及适量青贮或氨化饲料。每天分早、午、晚三次喂料。根据体重和采食情况每隔15天调剂饲料喂量。自由饮水，盐槽内放入食盐和盐砖任其舔食。 2、育肥指标：舍饲育肥期40-60天，日增重200克以上，出栏体重达到50公斤以上。 3、参考饲料配方：玉米64%，豆饼25%，麸皮10%，食盐1%。 ",-1)),Je=i(()=>l("div",null," 　　 放牧加补饲 1、羔羊在2–3个月龄断奶后进入育肥期，选择牧草青绿多汁，营养丰富的草场上放牧，推广围栏轮牧适当延长放牧时间。每天每只羔羊补饲0.5公斤混合精料，在出牧前和归牧的，分早晚两次喂给。当草场牧草枯黄时再补给适当青干草和青贮。自由饮水，每隔3天啖盐，自由舔食。 2、育肥指标：育肥期60-90天，日增重150-180克，出栏体重达到30-35公斤。 3、参考饲料配方：玉米50%，豆饼20，麸皮28%，，矿物质添加剂1%，食盐1%。 舍饲育肥 1、预饲期：是由放牧过渡到舍饲过程，即育肥开始的15天，饲喂原则是：先喂草、 后喂料，先饮水、后饲喂，定时定量，每只羔羊日喂量：豆科和禾本科青干草1公斤，混合精料200克，分早、午、晚三次饲喂，自由饮水。 2、育肥期：适当增加饲草料喂量，每只羊每天青干草1–1.5公斤。青贮和氨化饲料适量。混合精料0.5–1公斤，分早、午、晚三次喂给，自由饮水，每隔3天啖盐，自由舔食，每隔15天视羔羊增重情况调整一次饲喂量。 3、育肥指标：舍饲育肥期40-60天，日增重150-220克，出栏重达40-45公斤。 4、参考饲料配方：玉米68%，豆饼20%，麸皮10%，微量元素添加剂1%，食盐1%。 育肥要点 1、羔羊最好不阉割，因公畜比阉畜生长快，饲料消耗低。 2、控制育肥畜的活动量，避免因活动量大而增加能量消耗，降低育肥 效果。 3、充分利用温暖季节，搞短期育肥、寒冷季节来临之前及时出栏。 4、提倡冬季育肥、春天羊肉缺少时上市，提高销售价。但需有充足的饲料和保温好的羊舍。 5、驱治体内外寄生虫、投健胃药。搞好疫病的防疫注射工作。 ",-1)),Pe=i(()=>l("div",null," 　　 出场期净化、产羔前消毒、平时羊舍空气质量监测 ",-1)),Te=i(()=>l("div",null," 　　 父本系谱 ",-1)),Xe=i(()=>l("div",null," 　　 出生鉴定登记,离乳鉴定,周岁鉴定 ",-1)),qe=i(()=>l("div",null," 　　 高繁基因,体大基因,后代同龄母羊对比、母女对比 ",-1)),Ke=i(()=>l("div",null," 　　 赤峰市农投集团 ",-1)),Ze=i(()=>l("div",null," 　　 克什克腾旗全境，其余阿鲁科尔沁旗、巴林左旗、巴林右旗、林西县、翁牛特旗五个旗县的重点乡镇。包括内蒙古草原金峰畜牧有限公司、克什克腾旗好鲁库昭乌达肉羊专业合作社、赤峰原牧昭乌达农牧业有限责任公司、内蒙古昭乌达肉羊生态养殖有限公司，以及与昭乌达肉羊产业产供销一体化建设关联的各类企业、合作社、家庭牧场等。 ",-1)),Qe=i(()=>l("div",null," 　　 具有民事行为能力的公民，从事畜牧生产经营，养殖规模达到5 0头只以上，能够利用并接受本社提供的服务，承认并遵守本章程，履行本章程规定的入社手续的，可申请成为合作社成员。 1、合作社吸收从事与合作社业务直接有关的生产经营活动的企业、 事业单位或者社会团体为团体成员。 2、具有管理公共事务职能的单位不得加入本社。 3、本社成员中，农民成员至少占成员总数的百分之八十。 4、凡符合前条规定，向合作社理事会提交书面入社申请，经理事会审核并讨论通过者， 即成为合作社成员。 ",-1)),xe=i(()=>l("div",null," 　　 草料目前为牧户个人购买，吃莜麦、草等。承包基本母羊，按承包30%交羔子。10几户设置一个厂长管理。 ",-1)),et=i(()=>l("div",null," 　　 内蒙古绿田园农业有限公司 ",-1)),tt=i(()=>l("div",null," 　　 暂无 ",-1)),lt=i(()=>l("div",null," 　　 天然青干草配绿色玉米 ",-1)),at=i(()=>l("div",null," 　　 暂无 ",-1)),nt=i(()=>l("div",null," 　　 市农牧局检验检测中心等 ",-1)),st=i(()=>l("div",null," 　　 暂无 ",-1)),ot=i(()=>l("div",null," 　　 暂无 ",-1)),it=i(()=>l("div",null," 　　 克什克腾旗好鲁库昭乌达肉羊专业合作社、赤峰市原牧农牧业有限责任公司 ",-1)),dt=i(()=>l("div",null," 　　 克什克腾旗鹤翔清真食品有限责任公司、赤峰天合天牧业有限公司、赤峰宏发食品有限责任公司等。 ",-1)),ut=i(()=>l("div",null," 　　 从工艺流程上来分，羊的屠宰工艺包括吊挂、刺杀放血、预剥、倒(dao 三声)挂、去头蹄、羊头检验、食管结扎、剥皮、拉皮、雕肛、出腔、出白脏、白脏检验、出红脏、红脏检验、修整、冲刷、排酸入库等步骤。 ",-1)),_t=i(()=>l("div",null," 　　 羊毛 ",-1)),mt=i(()=>l("div",null," 　　 赤峰农投集团、国家草原所鉴定中心 ",-1)),ct=i(()=>l("div",null," 　　 赤峰市畜牧研究所 ",-1)),ht=i(()=>l("div",null," 　　 暂无 ",-1)),ft=i(()=>l("div",null," 　　 暂无 ",-1)),rt=i(()=>l("div",null," 　　 生鲜羊肉加工,肉制品加工,副产物加工 ",-1)),gt=i(()=>l("div",null," 　　 产品分为带骨涮系列、西式分割系列、中式分割系列、户外烧烤系列、熟食制品系列等 ",-1));function pt(n,o,S,C,_,p){const V=L,k=D,N=E,a=Y,c=J,h=P;return u(),$("div",pe,[l("div",ve,[t(N,null,{default:e(()=>[(u(!0),$(I,null,B(_.typeItems1,s=>(u(),m(k,{span:6,type:"flex",justify:"center"},{default:e(()=>[t(V,{class:"image-button",onClick:b=>p.ncpsy_right_header_menu_click(s.value)},{default:e(()=>[l("img",{src:s.image,alt:"Option 1",class:"image"},null,8,ye)]),_:2},1032,["onClick"]),l("span",Ce,M(s.value),1)]),_:2},1024))),256))]),_:1}),t(N,null,{default:e(()=>[(u(!0),$(I,null,B(_.typeItems2,s=>(u(),m(k,{span:6,type:"flex",justify:"center"},{default:e(()=>[t(V,{class:"image-button",onClick:b=>p.ncpsy_right_header_menu_click(s.value)},{default:e(()=>[l("img",{src:s.image,alt:"Option 1",class:"image"},null,8,Ve)]),_:2},1032,["onClick"]),l("span",$e,M(s.value),1)]),_:2},1024))),256))]),_:1})]),l("div",ke,[_.state=="基本情况"?(u(),m(h,{key:0,height:"680px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[0]||(o[0]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"历史",name:"1"},{default:e(()=>[Ne]),_:1}),t(a,{title:"特貌特征",name:"2"},{default:e(()=>[be]),_:1}),t(a,{title:"饲养环境",name:"3"},{default:e(()=>[we]),_:1}),t(a,{title:"饲养方式",name:"4"},{default:e(()=>[Se]),_:1}),t(a,{title:"畜群周转",name:"5"},{default:e(()=>[Ue]),_:1}),t(a,{title:"营养价值",name:"6"},{default:e(()=>[Ie]),_:1}),t(a,{title:"生态效益",name:"7"},{default:e(()=>[Be,Me,Oe,je,De,Ee]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="繁育"?(u(),m(h,{key:1,height:"680px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[1]||(o[1]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"牵头单位",name:"1"},{default:e(()=>[ze]),_:1}),t(a,{title:"协作单位",name:"2"},{default:e(()=>[Fe]),_:1}),t(a,{title:"血统",name:"3"},{default:e(()=>[Ge]),_:1}),t(a,{title:"特征",name:"4"},{default:e(()=>[He]),_:1}),t(a,{title:"繁育方式",name:"5"},{default:e(()=>[Re]),_:1}),t(a,{title:"繁殖技术支持",name:"6"},{default:e(()=>[We]),_:1}),t(a,{title:"羊羔哺育管理",name:"7"},{default:e(()=>[Ae]),_:1}),t(a,{title:"营养饲料",name:"8"},{default:e(()=>[Le]),_:1}),t(a,{title:"成羊育肥方式",name:"9"},{default:e(()=>[Ye]),_:1}),t(a,{title:"羔羊育肥方式",name:"10"},{default:e(()=>[Je]),_:1}),t(a,{title:"羊舍卫生情况",name:"11"},{default:e(()=>[Pe]),_:1}),t(a,{title:"系谱选择",name:"12"},{default:e(()=>[Te]),_:1}),t(a,{title:"表型鉴定",name:"13"},{default:e(()=>[Xe]),_:1}),t(a,{title:"基因检测",name:"14"},{default:e(()=>[qe]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="养殖端基地建设"?(u(),m(h,{key:2,height:"680px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[2]||(o[2]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"牵头单位",name:"1"},{default:e(()=>[Ke]),_:1}),t(a,{title:"协作单位",name:"2"},{default:e(()=>[Ze]),_:1}),t(a,{title:"养殖入社条件",name:"3"},{default:e(()=>[Qe]),_:1}),t(a,{title:"养殖管理方式",name:"4"},{default:e(()=>[xe]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="有机肥生产与饲料加工"?(u(),m(h,{key:3,height:"680px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[3]||(o[3]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"牵头单位",name:"1"},{default:e(()=>[et]),_:1}),t(a,{title:"协作单位",name:"2"},{default:e(()=>[tt]),_:1}),t(a,{title:"饲草料",name:"3"},{default:e(()=>[lt]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="安全检测"?(u(),m(h,{key:4,height:"680px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[4]||(o[4]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"牵头单位",name:"1"},{default:e(()=>[at]),_:1}),t(a,{title:"协作单位",name:"2"},{default:e(()=>[nt]),_:1}),t(a,{title:"检测项目",name:"3"},{default:e(()=>[st]),_:1}),t(a,{title:"检测报告",name:"4"},{default:e(()=>[ot]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="屠宰加工"?(u(),m(h,{key:5,height:"680px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[5]||(o[5]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"牵头单位",name:"1"},{default:e(()=>[it]),_:1}),t(a,{title:"协作单位",name:"2"},{default:e(()=>[dt]),_:1}),t(a,{title:"加工工艺",name:"3"},{default:e(()=>[ut]),_:1}),t(a,{title:"附加产品",name:"4"},{default:e(()=>[_t]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="品质鉴定"?(u(),m(h,{key:6,height:"680px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[6]||(o[6]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"牵头单位",name:"1"},{default:e(()=>[mt]),_:1}),t(a,{title:"协作单位",name:"2"},{default:e(()=>[ct]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="肉制品加工"?(u(),m(h,{key:7,height:"680px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[7]||(o[7]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"牵头单位",name:"1"},{default:e(()=>[ht]),_:1}),t(a,{title:"协作单位",name:"2"},{default:e(()=>[ft]),_:1}),t(a,{title:"加工类型",name:"3"},{default:e(()=>[rt]),_:1}),t(a,{title:"产品",name:"4"},{default:e(()=>[gt]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0)])])}const vt=z(ge,[["render",pt],["__scopeId","data-v-d9ff5a32"]]),yt="/assets/1-BxjOXpjJ.png",Ct="/assets/2-Ds--GzwF.png",Vt="/assets/3-CqBj41GG.png",$t="/assets/4-BMrVeU_D.png",kt="/assets/5-_DLDvOtN.png",Nt="/assets/4-BMrVeU_D.png",bt="/assets/7-dN8yhBYy.png",wt="/assets/8-C9fo503e.png",St="/assets/8-C9fo503e.png",Ut="/assets/8-C9fo503e.png",It="/assets/8-C9fo503e.png",Bt="/assets/8-C9fo503e.png",Mt={data(){return{typeItems1:[{value:"基本情况",image:yt},{value:"生产基地",image:Ct},{value:"种植",image:Vt},{value:"初加工",image:$t}],typeItems2:[{value:"运输",image:kt},{value:"深加工",image:Nt},{value:"营养成分分析",image:bt},{value:"包装",image:wt}],typeItems3:[{value:"配送",image:St},{value:"销售",image:Ut},{value:"售后",image:It},{value:"生态保护",image:Bt}],state:"基本情况"}},methods:{ncpsy_right_header_menu_click(n){this.state=n}}},d=n=>(T("data-v-7e3e7cbe"),n=n(),X(),n),Ot={class:"ncpsy-right"},jt={class:"ncpsy-right-header"},Dt=["src"],Et={style:{"font-size":"16px"}},zt=["src"],Ft={style:{"font-size":"16px"}},Gt=["src"],Ht={style:{"font-size":"16px"}},Rt={class:"ncpsy-right-content"},Wt=d(()=>l("div",null," 　　 赤峰市的燕麦种植历史悠久，早在魏晋南北朝时期，内蒙古阴山地区的农民就已开始种植燕麦。据《绥远通志稿》记载：“莜麦，一作油麦，即燕麦也，旱瘠之地亦宜播种，山前、山后各县均广种之。”赤峰市燕麦主要分布在克旗、翁旗和阿旗（阿旗以饲草种植为主），全市常年燕麦种植面积在60万亩左右，食用燕麦和饲草燕麦约各占一半。 ",-1)),At=d(()=>l("div",null," 　　 燕麦喜冷、耐旱，对温度和光照等条件要求较高。赤峰市位于内蒙古中东部地区，是干旱山坡丘陵地貌的典型地区，适宜种植耐寒、耐旱、耐瘠薄、耐盐碱的各类杂粮杂豆。同时燕麦是赤峰地区传统的特色杂粮作物，其生育期短，耐旱，耐瘠薄，并且适宜在干旱半干旱地区的冷凉地区种植，赤峰的生态环境非常适合燕麦生长。 ",-1)),Lt=d(()=>l("div",null," 　　 燕麦在我国东北、华北、西北、西南及广东、广西和华中等省区多为栽培，主要种植在内蒙古、河北、河南、山西、甘肃、陕西、云南、四川、宁夏、贵州、青海等地，其中前4个省区种植面积约占全国总面积的90%。国内燕麦供需情况而言，随着燕麦加工产品种类的增多，燕麦产品需求持续总体呈现出增长态势，数据显示，2022年我国燕麦产量60万吨，进口量39万吨左右，出口量极小，仅约90吨，需求量在99万吨左右。 ",-1)),Yt=d(()=>l("div",null," 　　 国产裸燕麦的主要营养成分均高于进口皮燕麦。根据中国医学科学院测定，蛋白质含量，进口皮燕麦为12.4%，而国产裸燕麦高达15.6%，比皮燕麦高出3.2个百分点；β葡聚糖含量，皮燕麦为4.3%，裸燕麦为4.6%，高出皮燕麦0.3个百分点；不饱和脂肪酸中亚油酸含量，皮燕麦为40.42%，裸燕麦为42.44%，高出皮燕麦2.02个百分点；此外，国产裸燕麦中维生素、矿物质、膳食纤维等含量均高于进口皮燕麦，部分元素含量均位于谷物之首。国产裸燕麦与进口皮燕麦相比营养更好、保健功能更强，而且吃起来润滑粘稠，口感更好，所以说国产燕麦才是世界上最优质的燕麦。 ",-1)),Jt=d(()=>l("div",null,[l("div",null," 　　 1、具有较高的营养价值，其主要营养成分蛋白质、脂肪（主要是不饱和脂肪酸）、粗纤维、矿物质等高于小麦、水稻、玉米等谷类作物。 "),l("div",null," 　　 2、据第一册《中国燕麦品种资源目录》记载，722份裸燕麦籽实蛋白质平均含量为16.09±1.27（11.9~19.62）%，脂肪含量6.3±1.01（3.44~9.82）%。裸燕麦富含人体必须的8种氨基酸，尤其是对人体骨骼和智力发育有增进功能的赖氨酸含量高，每100克含量达到0.68g，是小麦和大米的3倍。 "),l("div",null," 　　 3、研究表明，食用燕麦产品可以降低心血管疾病发生的风险，表现在具有降血压、改善动脉粥样硬化、降低餐后血糖水平、增加胰岛素应激反应、抗肿瘤、免疫调节、调节肠道菌群、预防和治疗皮肤炎症、瘦身减肥、平衡心态、解除焦虑等功效。根据国内外燕麦研究成果，以燕麦为主要原料加工出的相关产品，营养功能可以概括为：控糖降脂护血管，美容减肥防衰老，增强免疫抗疲劳，润肠通便缓焦虑。 "),l("div",null," 　　 4、燕麦的营养较均衡，燕麦产业属于健康食品产业，燕麦膳食纤维含量13-15%（蔬菜、水果含量仅为1%左右），可以很好的补充每日膳食纤维需要。膳食纤维等营养成分及有益健康的植物化合物，燕麦的血糖生成指数远低于精制米面，是最经济、合理能量来源。 ")],-1)),Pt=d(()=>l("div",null," 　　 从农业农村部、财政部到国务院，各级政府纷纷出台政策文件，明确将燕麦等优质饲草产业作为推动农业结构调整和乡村振兴的重要抓手。政策中不仅强调了对规模化草食家畜养殖场、农民专业合作社等主体的支持，还注重金融助力，推动燕麦种植和收储的现代化、标准化。此外，政策还明确了具体的种植目标，如内蒙古政府提出保持饲用燕麦种植面积在193万亩以上，显示了政府对于燕麦产业发展的坚定决心。一系列政策的出台，为我国燕麦行业提供了有力的政策保障，为产业的持续健康发展奠定了坚实基础。 ",-1)),Tt=d(()=>l("div",null," 　　 农投集团 ",-1)),Xt=d(()=>l("div",null," 　　 9万亩 ",-1)),qt=d(()=>l("div",null," 　　 1.8万亩 ",-1)),Kt=d(()=>l("div",null," 　　 358户675人 ",-1)),Zt=d(()=>l("div",null," 　　 990户1949人 ",-1)),Qt=d(()=>l("div",null," 　　 5000亩 ",-1)),xt=d(()=>l("div",null," 　　 1020亩 ",-1)),el=d(()=>l("div",null," 　　 420亩 ",-1)),tl=d(()=>l("div",null," 　　 1、依托高标准农田进行土地治理、坡改梯，增强田面平整度，提高田面保墒能力。 　　 2、土壤改良:测土配肥。 ",-1)),ll=d(()=>l("div",null," 　　 暂无 ",-1)),al=d(()=>l("div",null," 　　 暂无 ",-1)),nl=d(()=>l("div",null," 　　 暂无 ",-1)),sl=d(()=>l("div",null," 　　 暂无 ",-1)),ol=d(()=>l("div",null," 　　 暂无 ",-1)),il=d(()=>l("div",null," 　　 去皮 ",-1)),dl=d(()=>l("div",null," 　　 洗核 ",-1)),ul=d(()=>l("div",null," 　　 汽车,海运 ",-1)),_l=d(()=>l("div",null," 　　 是 ",-1)),ml=d(()=>l("div",null," 　　 燕麦米、燕麦片、燕麦粉、燕麦乳、燕麦面包、燕麦饼干、燕麦粥、谷物棒、婴幼儿食品等。 ",-1)),cl=d(()=>l("div",null," 　　 由克什克腾旗三地农业专业合作社统一回收原粮，委托宇宙地镇晶峰米面加工厂(绿色)加工包装。 ",-1)),hl=d(()=>l("div",null," 　　 克什克腾旗康宏农产品有限责任公司 ",-1)),fl=d(()=>l("div",null," 　　 ",-1)),rl=d(()=>l("div",null," 　　 国产裸燕麦的主要营养成分均高于进口皮燕麦。根据中国医学科学院测定，蛋白质含量，进口皮燕麦为12.4%，而国产裸燕麦高达15.6%，比皮燕麦高出3.2个百分点；β葡聚糖含量，皮燕麦为4.3%，裸燕麦为4.6%，高出皮燕麦0.3个百分点；不饱和脂肪酸中亚油酸含量，皮燕麦为40.42%，裸燕麦为42.44%，高出皮燕麦2.02个百分点；此外，国产裸燕麦中维生素、矿物质、膳食纤维等含量均高于进口皮燕麦，部分元素含量均位于谷物之首。国产裸燕麦与进口皮燕麦相比营养更好、保健功能更强，而且吃起来润滑粘稠，口感更好，所以说国产燕麦才是世界上最优质的燕麦。 ",-1)),gl=d(()=>l("div",null," 　　 燕麦米 ",-1)),pl=d(()=>l("div",null," 　　 进口皮燕麦为12.4%，而国产裸燕麦高达15.6% ",-1)),vl=d(()=>l("div",null," 　　 皮燕麦为4.3%，裸燕麦为4.6% ",-1)),yl=d(()=>l("div",null," 　　 赤皮燕麦为40.42%，裸燕麦为42.44% ",-1)),Cl=d(()=>l("div",null," 　　 高于进口皮燕麦 ",-1)),Vl=d(()=>l("div",null," 　　 高于进口皮燕麦 ",-1)),$l=d(()=>l("div",null," 　　 高于进口皮燕麦 ",-1)),kl=d(()=>l("div",null," 　　 暂无 ",-1)),Nl=d(()=>l("div",null," 　　 纸箱 ",-1)),bl=d(()=>l("div",null," 　　 直供 ",-1)),wl=d(()=>l("div",null," 　　 国铁商城、中粮 ",-1)),Sl=d(()=>l("div",null," 　　 超市、门店 ",-1)),Ul=d(()=>l("div",null," 　　 暂无 ",-1)),Il=d(()=>l("div",null," 　　 暂无 ",-1)),Bl=d(()=>l("div",null," 　　 暂无 ",-1)),Ml=d(()=>l("div",null," 　　 10gCO2e ",-1)),Ol=d(()=>l("div",null," 　　 暂无 ",-1)),jl=d(()=>l("div",null," 　　 7gCO2 ",-1));function Dl(n,o,S,C,_,p){const V=L,k=D,N=E,a=Y,c=J,h=P;return u(),$("div",Ot,[l("div",jt,[t(N,null,{default:e(()=>[(u(!0),$(I,null,B(_.typeItems1,s=>(u(),m(k,{span:6,type:"flex",justify:"center"},{default:e(()=>[t(V,{class:"image-button",onClick:b=>p.ncpsy_right_header_menu_click(s.value)},{default:e(()=>[l("img",{src:s.image,alt:"Option 1",class:"image"},null,8,Dt)]),_:2},1032,["onClick"]),l("span",Et,M(s.value),1)]),_:2},1024))),256))]),_:1}),t(N,null,{default:e(()=>[(u(!0),$(I,null,B(_.typeItems2,s=>(u(),m(k,{span:6,type:"flex",justify:"center"},{default:e(()=>[t(V,{class:"image-button",onClick:b=>p.ncpsy_right_header_menu_click(s.value)},{default:e(()=>[l("img",{src:s.image,alt:"Option 1",class:"image"},null,8,zt)]),_:2},1032,["onClick"]),l("span",Ft,M(s.value),1)]),_:2},1024))),256))]),_:1}),t(N,null,{default:e(()=>[(u(!0),$(I,null,B(_.typeItems3,s=>(u(),m(k,{span:6,type:"flex",justify:"center"},{default:e(()=>[t(V,{class:"image-button",onClick:b=>p.ncpsy_right_header_menu_click(s.value)},{default:e(()=>[l("img",{src:s.image,alt:"Option 1",class:"image"},null,8,Gt)]),_:2},1032,["onClick"]),l("span",Ht,M(s.value),1)]),_:2},1024))),256))]),_:1})]),l("div",Rt,[_.state=="基本情况"?(u(),m(h,{key:0,height:"580px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[0]||(o[0]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"历史",name:"1"},{default:e(()=>[Wt]),_:1}),t(a,{title:"种植条件",name:"2"},{default:e(()=>[At]),_:1}),t(a,{title:"主产区信息",name:"3"},{default:e(()=>[Lt]),_:1}),t(a,{title:"国产燕麦优势",name:"4"},{default:e(()=>[Yt]),_:1}),t(a,{title:"营养价值",name:"5"},{default:e(()=>[Jt]),_:1}),t(a,{title:"行业相关政策",name:"6"},{default:e(()=>[Pt]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="生产基地"?(u(),m(h,{key:1,height:"580px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[1]||(o[1]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"牵头单位",name:"1"},{default:e(()=>[Tt]),_:1}),t(a,{title:"总面积",name:"2"},{default:e(()=>[Xt]),_:1}),t(a,{title:"耕地面积",name:"3"},{default:e(()=>[qt]),_:1}),t(a,{title:"常住人口",name:"4"},{default:e(()=>[Kt]),_:1}),t(a,{title:"户籍人口",name:"5"},{default:e(()=>[Zt]),_:1}),t(a,{title:"燕麦种植面积",name:"6"},{default:e(()=>[Qt]),_:1}),t(a,{title:"核心产区",name:"7"},{default:e(()=>[xt]),_:1}),t(a,{title:"农田示范区",name:"8"},{default:e(()=>[el]),_:1}),t(a,{title:"土地情况",name:"9"},{default:e(()=>[tl]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="种植"?(u(),m(h,{key:2,height:"580px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[2]||(o[2]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"主体信息",name:"1"},{default:e(()=>[ll]),_:1}),t(a,{title:"种子采购来源",name:"2"},{default:e(()=>[al]),_:1}),t(a,{title:"化肥采购来源",name:"3"},{default:e(()=>[nl]),_:1}),t(a,{title:"农药采购来源",name:"4"},{default:e(()=>[sl]),_:1}),t(a,{title:"农机来源",name:"5"},{default:e(()=>[ol]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="初加工"?(u(),m(h,{key:3,height:"580px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[3]||(o[3]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"去皮",name:"1"},{default:e(()=>[il]),_:1}),t(a,{title:"洗核",name:"2"},{default:e(()=>[dl]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="运输"?(u(),m(h,{key:4,height:"580px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[4]||(o[4]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"物流方式",name:"1"},{default:e(()=>[ul]),_:1}),t(a,{title:"是否需要冷链",name:"2"},{default:e(()=>[_l]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="深加工"?(u(),m(h,{key:5,height:"580px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[5]||(o[5]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"加工产品方向",name:"1"},{default:e(()=>[ml]),_:1}),t(a,{title:"加工途径",name:"2"},{default:e(()=>[cl]),_:1}),t(a,{title:"加工企业",name:"3"},{default:e(()=>[hl]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="营养成分分析"?(u(),m(h,{key:6,height:"580px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[6]||(o[6]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"检测单位",name:"1"},{default:e(()=>[fl]),_:1}),t(a,{title:"营养成分",name:"2"},{default:e(()=>[rl]),_:1}),t(a,{title:"下拉选择",name:"3"},{default:e(()=>[gl]),_:1}),t(a,{title:"蛋白质含量",name:"4"},{default:e(()=>[pl]),_:1}),t(a,{title:"β葡聚糖含量",name:"5"},{default:e(()=>[vl]),_:1}),t(a,{title:"不饱和脂肪酸",name:"6"},{default:e(()=>[yl]),_:1}),t(a,{title:"维生素",name:"7"},{default:e(()=>[Cl]),_:1}),t(a,{title:"矿物质",name:"8"},{default:e(()=>[Vl]),_:1}),t(a,{title:"膳食纤维",name:"9"},{default:e(()=>[$l]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="包装"?(u(),m(h,{key:7,height:"580px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[7]||(o[7]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"包装设备",name:"1"},{default:e(()=>[kl]),_:1}),t(a,{title:"包装材料",name:"2"},{default:e(()=>[Nl]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="配送"?(u(),m(h,{key:8,height:"580px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[8]||(o[8]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"配送方式",name:"1"},{default:e(()=>[bl]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="销售"?(u(),m(h,{key:9,height:"580px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[9]||(o[9]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"线上销售",name:"1"},{default:e(()=>[wl]),_:1}),t(a,{title:"线下销售",name:"2"},{default:e(()=>[Sl]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="售后"?(u(),m(h,{key:10,height:"580px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[10]||(o[10]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"热线电话",name:"1"},{default:e(()=>[Ul]),_:1}),t(a,{title:"联系地址",name:"2"},{default:e(()=>[Il]),_:1}),t(a,{title:"邮箱",name:"3"},{default:e(()=>[Bl]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0),_.state=="生态保护"?(u(),m(h,{key:11,height:"580px"},{default:e(()=>[t(c,{modelValue:n.activeNames,"onUpdate:modelValue":o[11]||(o[11]=s=>n.activeNames=s),onChange:n.handleChange},{default:e(()=>[t(a,{title:"碳积分",name:"1"},{default:e(()=>[Ml]),_:1}),t(a,{title:"土壤修复",name:"2"},{default:e(()=>[Ol]),_:1}),t(a,{title:"固碳效果",name:"3"},{default:e(()=>[jl]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})):f("",!0)])])}const El=z(Mt,[["render",Dl],["__scopeId","data-v-7e3e7cbe"]]),zl={class:"ncpsy"},Fl={data(){return{state:"昭乌达羊"}},methods:{onchangestate(n){this.state=n}}},Pl=Object.assign(Fl,{__name:"ncpsy",setup(n){return(o,S)=>{const C=D,_=E;return u(),$("div",zl,[t(_,{class:"ncpsy"},{default:e(()=>[t(C,{span:14},{default:e(()=>[t(ie,{onChangestate:o.onchangestate},null,8,["onChangestate"])]),_:1}),t(C,{span:1}),t(C,{span:9},{default:e(()=>[o.state=="昭乌达羊"?(u(),m(vt,{key:0})):f("",!0),o.state=="燕麦"?(u(),m(El,{key:1})):f("",!0)]),_:1})]),_:1})])}}});export{Pl as default};
