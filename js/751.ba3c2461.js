"use strict";(self["webpackChunkvue3_tourguide"]=self["webpackChunkvue3_tourguide"]||[]).push([[751],{8515:function(e,t,l){l.d(t,{Z:function(){return d}});var a=l(3396),n=l(7139);const o={id:"AppDropDownMenu",class:"w-full"};function i(e,t,l,i,s,u){const c=(0,a.up)("a-select-option"),p=(0,a.up)("a-select");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(p,{value:e.option,"onUpdate:value":t[0]||(t[0]=t=>e.option=t),class:"w-full"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cityList,((e,t)=>((0,a.wg)(),(0,a.j4)(c,{key:t,value:e.City},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.CityName),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value"])])}var s=l(4870),u=l(4150),c=(0,a.aZ)({name:"AppDropDownMenu",props:["modelValue"],emits:{selectValue:null},setup(e,{emit:t}){const l=(0,s.iH)([]),n=(0,s.iH)("全部縣市");(0,a.ic)((()=>{console.log(n.value),console.log(e.modelValue)}));const o=()=>{(0,u.mX)().then((e=>{e.unshift({CityName:"全部縣市",City:""}),l.value=e,console.log(l.value)}))},i=()=>{o()};return(0,a.bv)((()=>{i()})),{cityList:l,option:n}}}),p=l(89);const r=(0,p.Z)(c,[["render",i]]);var d=r},4751:function(e,t,l){l.d(t,{Z:function(){return d}});var a=l(3396),n=l(7139);const o={id:"AppNav"},i=(0,a.Uk)("首頁");function s(e,t,l,s,u,c){const p=(0,a.up)("router-link"),r=(0,a.up)("a-breadcrumb-item"),d=(0,a.up)("a-breadcrumb");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{to:"/home"},{default:(0,a.w5)((()=>[i])),_:1})])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.breadcrumbList,((e,t)=>((0,a.wg)(),(0,a.j4)(r,{key:t},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{to:e.path},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.name),1)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})])}var u=l(9248),c=(0,a.aZ)({name:"AppNav",props:{breadcrumbList:u.Yj},setup(e){return console.log(e.breadcrumbList),{}}}),p=l(89);const r=(0,p.Z)(c,[["render",s]]);var d=r},8311:function(e,t,l){l.r(t),l.d(t,{default:function(){return Y}});var a=l(3396),n=l(7139);const o={id:"AppSpot"},i={class:"spot-main lg:px-20 px-5 mx-auto containers"},s={class:"spot-select lg:flex mt-4"},u=(0,a.Uk)(" 搜尋 "),c={key:0,class:"hot-topic mt-8"},p=(0,a._)("div",{class:"event__block w-full text-3xl"},"熱門主題",-1),r={class:"card-main flex flex-wrap justify-start"},d={class:""},m=["src"],g={key:1,class:"after-search mt-8"},v={class:"event__block w-full"},w=(0,a._)("span",{class:"text-3xl"},"搜尋結果",-1),f={class:"ml-1"},_=(0,a.Uk)("共有 "),x={class:"text-orange-300 ml-1"},b=(0,a.Uk)(" 筆"),h={class:"card-whole grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-x-4 gap-y-10"},k=["onClick"],D={class:"h-48 w-full rounded-xl overflow-hidden"},y=["src"],A={class:"content"},L={class:"content-title font-bold text-xl"},C={class:"content-place"};function H(e,t,l,H,S,Z){const U=(0,a.up)("AppHeader"),W=(0,a.up)("AppNav"),V=(0,a.up)("AppDropDownMenu"),j=(0,a.up)("a-input"),N=(0,a.up)("SearchOutlined"),z=(0,a.up)("a-button"),$=(0,a.up)("a-card");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(U),(0,a._)("div",i,[(0,a.Wm)(W,{breadcrumbList:[{name:"探索景點",path:`${e.route.path}`}]},null,8,["breadcrumbList"]),(0,a._)("div",s,[(0,a.Wm)(V,{modelValue:e.selectValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectValue=t)},null,8,["modelValue"]),(0,a.Wm)(j,{value:e.spot,"onUpdate:value":t[1]||(t[1]=t=>e.spot=t),placeholder:"你想吃甚麼? 請輸入關鍵字",class:"lg:mt-0 mt-2"},null,8,["value"]),(0,a.Wm)(z,{class:"bg-green-200 hover:bg-green-500 lg:mt-0 mt-2 lg:w-20 w-full"},{icon:(0,a.w5)((()=>[(0,a.Wm)(N)])),default:(0,a.w5)((()=>[u])),_:1})]),e.search?((0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",v,[w,(0,a._)("span",f,[_,(0,a._)("span",x,(0,n.zw)(e.spotList.length),1),b])]),(0,a._)("div",h,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.spotList,((t,l)=>((0,a.wg)(),(0,a.iD)("div",{key:l,class:"w-full cursor-pointer",onClick:l=>e.getRouteSpotDetail(t)},[(0,a._)("div",D,[(0,a._)("img",{src:t.Picture.PictureUrl1,alt:"",class:"object-cover h-48 w-full"},null,8,y)]),(0,a._)("div",A,[(0,a._)("div",L,(0,n.zw)(t.ScenicSpotName),1),(0,a._)("div",C,(0,n.zw)(t.Address?.substring(0,3)),1)])],8,k)))),128))])])):((0,a.wg)(),(0,a.iD)("div",c,[p,(0,a._)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.typeList,((t,l)=>((0,a.wg)(),(0,a.j4)($,{key:l,class:"rounded-3xl relative lg:w-64 sm:w-full lg:mx-4 md:mx-24 mx-4 my-4 cursor-pointer",onClick:l=>e.getApiSpotList(t.title)},{cover:(0,a.w5)((()=>[(0,a._)("img",{alt:"example",src:t.img},null,8,m)])),default:(0,a.w5)((()=>[(0,a._)("div",d,(0,n.zw)(t.title),1)])),_:2},1032,["onClick"])))),128))])]))])])}var S=l(4870),Z=l(4150),U=l(678),W=l(3927),V=l(3564),j=l(4751),N=l(8515),z=(0,a.aZ)({name:"AppSpot",components:{AppHeader:V.Z,AppNav:j.Z,AppDropDownMenu:N.Z,SearchOutlined:W.Z},setup(){const e=(0,U.yj)(),t=(0,U.tv)(),a=(0,S.iH)(""),n=(0,S.iH)(!1),o=(0,S.iH)("全部縣市"),i=(0,S.iH)([]),s=(0,S.qj)([{title:"自然風景類",value:"自然風景類",img:l(8526)},{title:"觀光工廠類",value:"觀光工廠類",img:l(5045)},{title:"遊憩類",value:"遊憩類",img:l(3831)},{title:"休閒農業類",value:"休閒農業類",img:l(7715)},{title:"生態類",value:"生態類",img:l(7230)},{title:"溫泉類",value:"溫泉類",img:l(2369)},{title:"古蹟類",value:"古蹟類",img:l(792)}]),u=e=>{const t=`$filter=Picture/PictureUrl1 ne null and Class1 eq '${e}' or Class2 eq '${e}' or Class3 eq '${e}'`;(0,Z.qX)(t).then((e=>{i.value=e,n.value=!0,console.log("spotList",i.value)}))},c=e=>{t.push({path:`/spot/${e.ScenicSpotID}`})};return{spot:a,typeList:s,route:e,selectValue:o,getApiSpotList:u,spotList:i,search:n,getRouteSpotDetail:c}}}),$=l(89);const q=(0,$.Z)(z,[["render",H]]);var Y=q},8526:function(e,t,l){e.exports=l.p+"img/1.6da43026.png"},5045:function(e,t,l){e.exports=l.p+"img/2.ed15dc48.png"},3831:function(e,t,l){e.exports=l.p+"img/3.0382c67d.png"},7715:function(e,t,l){e.exports=l.p+"img/4.a5c3efe8.png"},7230:function(e,t,l){e.exports=l.p+"img/5.253b7e3c.png"},2369:function(e,t,l){e.exports=l.p+"img/6.a542ca20.png"},792:function(e,t,l){e.exports=l.p+"img/7.2a03027a.png"}}]);
//# sourceMappingURL=751.ba3c2461.js.map