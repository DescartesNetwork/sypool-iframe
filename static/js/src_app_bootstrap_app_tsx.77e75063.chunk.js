(globalThis.webpackChunksypool=globalThis.webpackChunksypool||[]).push([["src_app_bootstrap_app_tsx"],{79937:(e,t,n)=>{"use strict";Object.defineProperty(t,"X$",{value:!0}),Object.defineProperty(t,"jY",{enumerable:!0,get:function(){return s.default}}),t.h0=void 0,Object.defineProperty(t,"ng",{enumerable:!0,get:function(){return o.default}});var r=i(n(83990)),a=i(n(33143)),s=i(n(17100)),o=i(n(89374));function i(e){return e&&e.__esModule?e:{default:e}}const c=[r.default,a.default];t.h0=c},48687:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Page:()=>I,__esModule:()=>k.X$,logo:()=>k.jY,panels:()=>k.h0,readme:()=>k.ng});var r=n(55754),a=n(53836),s=n(92950),o=n(80754),i=n(45263);const c=e=>{let{appId:t,src:n,title:r,background:c}=e;const{setBackground:l}=(0,a.useUI)(),u=(0,s.useMemo)((()=>JSON.stringify(c)),[c]);return(0,s.useEffect)((()=>{u&&l(JSON.parse(u))}),[l,u]),(0,s.useEffect)((()=>new o.Gateway(window.sentre.wallet).terminate),[]),(0,i.jsx)("iframe",{id:t+"-iframe",src:n,title:r,style:{height:"calc(100vh - 64px)",margin:-12,marginTop:-24,border:"none",width:"100vw"},loading:"lazy",allowFullScreen:!0})};var l=n(63805);const u={appId:"sypool",url:"https://descartesnetwork.github.io/sypool-iframe/index.js"},d={manifest:{development:{...u},staging:{...u},production:{...u}}[l.OB]},{manifest:{appId:p}}=d,f=()=>(0,i.jsx)(c,{appId:p,src:"https://app.sypool.io",title:"Sypool: Synthetic Asset Pools Management",background:{light:"#1b142b",dark:"#1b142b"}});var g=n(19289),b=n(71256),m=n(48744),y=n.n(m),h=n(97429).Buffer;BigInt.prototype.toJSON=function(){return this.toString()};const v={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof b.PublicKey||e instanceof y()||h.isBuffer(e)}},w="main",j=(0,g.createAsyncThunk)("main/increaseCounter",(async(e,t)=>{let{getState:n}=t;const{main:{counter:r}}=n();return{counter:r+1}})),O=(0,g.createSlice)({name:w,initialState:{counter:0},reducers:{},extraReducers:e=>{e.addCase(j.fulfilled,((e,t)=>{let{payload:n}=t;Object.assign(e,n)}))}}).reducer,S=(0,g.configureStore)({middleware:e=>e(v),devTools:!1,reducer:{main:O}});var k=n(79937);const{manifest:{appId:x}}=d,I=()=>(0,i.jsx)(a.UIProvider,{appId:x,antd:!0,children:(0,i.jsx)(r.Provider,{store:S,children:(0,i.jsx)(f,{})})})},63805:(e,t,n)=>{"use strict";n.d(t,{Bv:()=>o,OB:()=>a,ef:()=>s,f4:()=>i});var r=n(53933);const a="production",s=(()=>{switch(r.Z.get("network")){case"devnet":return"devnet";case"testnet":return"testnet";default:return"mainnet"}})(),o=(()=>{switch(s){case"devnet":return 103;case"testnet":return 102;default:return 101}})(),i={devnet:"https://api.devnet.solana.com",testnet:"https://api.testnet.solana.com",mainnet:"development"===a?"https://api.mainnet-beta.solana.com":"https://solitary-autumn-water.solana-mainnet.quiknode.pro/dcbac9d444818a20ac583541dec35b44c6840888/"}[s]},53933:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const r="sentre",a=window.localStorage,s=e=>{try{return e?JSON.parse(e):null}catch(t){return null}},o={set:(e,t)=>{let n=s(a.getItem(r));n&&"object"===typeof n||(n={}),n[e]=t,a.setItem(r,JSON.stringify(n))},get:e=>{let t=s(a.getItem(r));return t&&"object"===typeof t?t[e]:null},clear:e=>{o.set(e,null)}},i=o},89374:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/README.2a09f9b6fe1e5a714628.md"},17100:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/logo.cfb6ff2c4dfd74c6da67.png"},83990:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/panel-1.82ba904700883b4d1b7e.png"},33143:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/panel-2.9f54f97cd994b8b27218.png"},46601:()=>{},89214:()=>{},85568:()=>{},55024:()=>{}}]);
//# sourceMappingURL=src_app_bootstrap_app_tsx.77e75063.chunk.js.map