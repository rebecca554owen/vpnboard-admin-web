(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40547],{70302:function(e,l,t){Promise.resolve().then(t.bind(t,1346)),Promise.resolve().then(t.bind(t,24290)),Promise.resolve().then(t.bind(t,60753))},1346:function(e,l,t){"use strict";t.d(l,{default:function(){return p}});var r=t(52948),s=t(22336),n=t(68119),a=t(24293),i=t(44645),d=t(92887),c=t(44783),u=t(81623),o=t(56815),x=t(26478),h=t(5151);function p(){let{lng:e}=(0,s.useParams)(),{t:l}=(0,n.$G)(e,"paymeny.alipayf2f"),{data:t,refetch:p}=(0,i.a)({queryKey:["postAdminConfigGetAlipayF2FConfig"],queryFn:async()=>{let{data:e}=await (0,a.uu)();return e.data}});async function j(e,r){if((null==t?void 0:t[e])!==r)try{await (0,a.a0)({...t,[e]:r}),d.A.success(l("saveSuccess")),p()}catch(e){}}return(0,r.jsx)(x.iA,{children:(0,r.jsxs)(x.RM,{children:[(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("enable")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:l("enableDescription")})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(o.r,{defaultChecked:null==t?void 0:t.enable,onCheckedChange:e=>{j("enable",e)}})})]}),(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("showName")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:l("showNameDescription")})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(c.I,{placeholder:l("inputPlaceholder"),defaultValue:null==t?void 0:t.show_name,onBlur:e=>{j("show_name",e.target.value)}})})]}),(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("iconUrl")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:l("iconUrlDescription")})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(c.I,{placeholder:l("inputPlaceholder"),defaultValue:null==t?void 0:t.icon_url,onBlur:e=>{j("icon_url",e.target.value)}})})]}),(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("notifyUrl")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:l("notifyUrlDescription")})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(c.I,{placeholder:l("inputPlaceholder"),defaultValue:null==t?void 0:t.notify_url,onBlur:e=>{j("notify_url",e.target.value)}})})]}),(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("feePercent")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:l("feePercentDescription")})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(c.I,{placeholder:l("inputPlaceholder"),type:"number",defaultValue:(null==t?void 0:t.fee_percent)?Number(null==t?void 0:t.fee_percent):void 0,onBlur:e=>{j("fee_percent",Number(e.target.value))}})})]}),(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("fixedFee")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:l("fixedFeeDescription")})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(c.I,{placeholder:l("inputPlaceholder"),type:"number",defaultValue:(null==t?void 0:t.fee)?Number(null==t?void 0:t.fee):void 0,onBlur:e=>{j("fee",Number(e.target.value))}})})]}),(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("alipayAppId")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground"})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(c.I,{placeholder:l("inputPlaceholder"),defaultValue:null==t?void 0:t.alipay_app_id,onBlur:e=>{j("alipay_app_id",e.target.value)}})})]}),(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("alipayPrivateKey")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground"})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(h.g,{placeholder:l("inputPlaceholder"),defaultValue:null==t?void 0:t.alipay_private_key,onBlur:e=>{j("alipay_private_key",e.target.value)}})})]}),(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("alipayPublicKey")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground"})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(h.g,{placeholder:l("inputPlaceholder"),defaultValue:null==t?void 0:t.alipay_public_key,onBlur:e=>{j("alipay_public_key",e.target.value)}})})]}),(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("goodsName")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground"})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(c.I,{placeholder:l("goodsNamePlaceholder"),defaultValue:null==t?void 0:t.goods_name,onBlur:e=>{j("goods_name",e.target.value)}})})]})]})})}},24290:function(e,l,t){"use strict";t.d(l,{default:function(){return h}});var r=t(52948),s=t(22336),n=t(68119),a=t(24293),i=t(44645),d=t(92887),c=t(44783),u=t(81623),o=t(56815),x=t(26478);function h(){let{lng:e}=(0,s.useParams)(),{t:l}=(0,n.$G)(e,"payment.epay"),{data:t,refetch:h}=(0,i.a)({queryKey:["postAdminConfigGetEpayConfig"],queryFn:async()=>{let{data:e}=await (0,a.TW)();return e.data}});async function p(e,r){if((null==t?void 0:t[e])!==r)try{await (0,a.GL)({...t,[e]:r}),d.A.success(l("saveSuccess")),h()}catch(e){}}return(0,r.jsx)(x.iA,{children:(0,r.jsxs)(x.RM,{children:[(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("enable")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:l("enableDescription")})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(o.r,{defaultChecked:null==t?void 0:t.enable,onCheckedChange:e=>{p("enable",e)}})})]}),(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("showName")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:l("showNameDescription")})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(c.I,{placeholder:l("inputPlaceholder"),defaultValue:null==t?void 0:t.show_name,onBlur:e=>{p("show_name",e.target.value)}})})]}),(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("iconUrl")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:l("iconUrlDescription")})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(c.I,{placeholder:l("inputPlaceholder"),defaultValue:null==t?void 0:t.icon_url,onBlur:e=>{p("icon_url",e.target.value)}})})]}),(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("notifyUrl")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:l("notifyUrlDescription")})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(c.I,{placeholder:l("inputPlaceholder"),defaultValue:null==t?void 0:t.notify_url,onBlur:e=>{p("notify_url",e.target.value)}})})]}),(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("feePercent")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:l("feePercentDescription")})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(c.I,{placeholder:l("inputPlaceholder"),type:"number",defaultValue:(null==t?void 0:t.fee_percent)?Number(null==t?void 0:t.fee_percent):void 0,onBlur:e=>{p("fee_percent",Number(e.target.value))}})})]}),(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("fixedFee")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:l("fixedFeeDescription")})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(c.I,{placeholder:l("inputPlaceholder"),type:"number",defaultValue:(null==t?void 0:t.fee)?Number(null==t?void 0:t.fee):void 0,onBlur:e=>{p("fee",Number(e.target.value))}})})]}),(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("url")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground"})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(c.I,{placeholder:l("inputPlaceholder"),defaultValue:null==t?void 0:t.url,onBlur:e=>{p("url",e.target.value)}})})]}),(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("pid")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground"})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(c.I,{placeholder:l("inputPlaceholder"),defaultValue:null==t?void 0:t.pid,onBlur:e=>{p("pid",e.target.value)}})})]}),(0,r.jsxs)(x.SC,{children:[(0,r.jsxs)(x.pj,{children:[(0,r.jsx)(u._,{children:l("key")}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground"})]}),(0,r.jsx)(x.pj,{className:"text-right",children:(0,r.jsx)(c.I,{placeholder:l("inputPlaceholder"),defaultValue:null==t?void 0:t.key,onBlur:e=>{p("key",e.target.value)}})})]})]})})}},56815:function(e,l,t){"use strict";t.d(l,{r:function(){return i}});var r=t(52948),s=t(30786),n=t(84051),a=t(33412);let i=s.forwardRef((e,l)=>{let{className:t,...s}=e;return(0,r.jsx)(n.fC,{className:(0,a.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",t),...s,ref:l,children:(0,r.jsx)(n.bU,{className:(0,a.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});i.displayName=n.fC.displayName},60753:function(e,l,t){"use strict";t.d(l,{Tabs:function(){return i},TabsContent:function(){return u},TabsList:function(){return d},TabsTrigger:function(){return c}});var r=t(52948),s=t(30786),n=t(3536),a=t(33412);let i=n.fC,d=s.forwardRef((e,l)=>{let{className:t,...s}=e;return(0,r.jsx)(n.aV,{ref:l,className:(0,a.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",t),...s})});d.displayName=n.aV.displayName;let c=s.forwardRef((e,l)=>{let{className:t,...s}=e;return(0,r.jsx)(n.xz,{ref:l,className:(0,a.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",t),...s})});c.displayName=n.xz.displayName;let u=s.forwardRef((e,l)=>{let{className:t,...s}=e;return(0,r.jsx)(n.VY,{ref:l,className:(0,a.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...s})});u.displayName=n.VY.displayName},5151:function(e,l,t){"use strict";t.d(l,{g:function(){return a}});var r=t(52948),s=t(30786),n=t(33412);let a=s.forwardRef((e,l)=>{let{className:t,...s}=e;return(0,r.jsx)("textarea",{className:(0,n.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",t),ref:l,...s})});a.displayName="Textarea"}},function(e){e.O(0,[61896,94699,3869,92494,61488,3536,86419,82349,12100,81162,1744],function(){return e(e.s=70302)}),_N_E=e.O()}]);