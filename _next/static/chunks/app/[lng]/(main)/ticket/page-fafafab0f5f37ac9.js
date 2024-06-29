(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93895],{46792:function(e,t,a){Promise.resolve().then(a.bind(a,89922))},89922:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return R}});var s=a(52948),n=a(30786),i=a(22336),r=a(68119),l=a(24293),d=a(89986),c=a(44645),o=a(26614),u=a(92887),m=a(33412),f=a(19921),x=a(572);let g=e=>{let{shouldScaleBackground:t=!0,...a}=e;return(0,s.jsx)(x.d.Root,{shouldScaleBackground:t,...a})};g.displayName="Drawer",x.d.Trigger;let p=x.d.Portal;x.d.Close;let h=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(x.d.Overlay,{ref:t,className:(0,m.cn)("fixed inset-0 z-50 bg-black/80",a),...n})});h.displayName=x.d.Overlay.displayName;let y=n.forwardRef((e,t)=>{let{className:a,children:n,...i}=e;return(0,s.jsxs)(p,{children:[(0,s.jsx)(h,{}),(0,s.jsxs)(x.d.Content,{ref:t,className:(0,m.cn)("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",a),...i,children:[(0,s.jsx)("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"}),n]})]})});y.displayName="DrawerContent";let b=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,m.cn)("grid gap-1.5 p-4 text-center sm:text-left",t),...a})};b.displayName="DrawerHeader";let v=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,m.cn)("mt-auto flex flex-col gap-2 p-4",t),...a})};v.displayName="DrawerFooter";let j=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(x.d.Title,{ref:t,className:(0,m.cn)("text-lg font-semibold leading-none tracking-tight",a),...n})});j.displayName=x.d.Title.displayName;let N=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(x.d.Description,{ref:t,className:(0,m.cn)("text-sm text-muted-foreground",a),...n})});N.displayName=x.d.Description.displayName;var w=a(44783),_=a(81623),k=a(60753),C=a(44517),T=a(78324);function R(){let{lng:e}=(0,i.useParams)(),{t}=(0,r.$G)(e,"ticket"),[a,x]=(0,n.useState)({status:1,page:1,size:50}),{data:p,refetch:h}=(0,c.a)({queryKey:["postAdminTicketList",a],queryFn:async()=>{let{data:e}=await (0,l.xT)(a);return e.data}}),R=[{accessorKey:"title",header:t("title")},{accessorKey:"created_at",header:t("createdAt"),cell:e=>{let{row:t}=e;return(0,o.p6)(t.getValue("created_at"),"yyyy-MM-dd HH:mm:ss")}},{accessorKey:"updated_at",header:t("updatedAt"),cell:e=>{let{row:t}=e;return(0,o.p6)(t.getValue("updated_at"),"yyyy-MM-dd HH:mm:ss")}},{id:"actions",accessorKey:"id",header:()=>(0,s.jsx)("div",{className:"text-right",children:t("actions")}),cell:e=>{let{row:n}=e;if(2!==a.status)return(0,s.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,s.jsx)(f.z,{size:"sm",onClick:()=>D(n.original),children:t("reply")}),(0,s.jsx)(T.Z,{trigger:t("close"),title:t("confirmClose"),description:t("closeWarning"),onConfirm:async()=>{await (0,l.bH)({ticket_id:n.original.id}),u.A.success(t("closeSuccess")),h()},onCancelText:t("cancel"),onConfirmText:t("confirm")})]})}}],[z,D]=(0,n.useState)(null),[H,M]=(0,n.useState)(""),{data:A,refetch:F}=(0,c.a)({queryKey:["postAdminTicketContentGet",null==z?void 0:z.id],enabled:!!(null==z?void 0:z.id),queryFn:async()=>{let{data:e}=await (0,l.LN)({ticket_id:z.id});return e.data.list}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(C.w,{header:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("h1",{children:t("ticketList")}),(0,s.jsx)(k.Tabs,{value:String(a.status),onValueChange:e=>{x({...a,page:1,status:Number(e)})},children:(0,s.jsxs)(k.TabsList,{children:[(0,s.jsx)(k.TabsTrigger,{value:"1",children:t("open")}),(0,s.jsx)(k.TabsTrigger,{value:"2",children:t("closed")})]})})]}),columns:R,data:(null==p?void 0:p.list)||[],pagination:{page:a.page,size:a.size,total:null==p?void 0:p.total,onChange:(e,t)=>{x({...a,page:e,size:t})}}}),(0,s.jsx)(g,{open:!!(null==z?void 0:z.id),onOpenChange:e=>{e||D(null)},children:(0,s.jsxs)(y,{className:"container h-screen",children:[(0,s.jsxs)(b,{className:"border-b",children:[(0,s.jsx)(j,{children:null==z?void 0:z.title}),(0,s.jsx)(N,{children:null==z?void 0:z.context})]}),(0,s.jsx)("div",{className:"flex flex-col gap-4 p-4",children:null==A?void 0:A.map(e=>(0,s.jsx)("div",{className:(0,m.cn)("flex items-center gap-4",{"flex-row-reverse":!!e.sender_id}),children:(0,s.jsxs)("div",{className:(0,m.cn)("flex flex-col gap-1",{"items-end":!!e.sender_id}),children:[(0,s.jsx)("p",{className:"text-sm text-muted-foreground",children:(0,o.p6)(e.created_at,"yyyy-MM-dd HH:mm:ss")}),(0,s.jsxs)("p",{className:(0,m.cn)("w-fit rounded-lg bg-accent p-2 font-medium",{"bg-primary text-primary-foreground":!!e.sender_id}),children:["text"===e.content_type&&e.content,"image"===e.content_type&&(0,s.jsx)("img",{src:e.content,alt:"image"})]})]})},e.id))}),(0,s.jsx)(v,{children:(0,s.jsxs)("form",{className:"flex w-full flex-row items-center gap-2",onSubmit:async e=>{e.preventDefault(),H&&(await (0,l.b6)({content:H,content_type:"text",ticket_id:z.id}),F(),M(""))},children:[(0,s.jsxs)(f.z,{type:"button",variant:"outline",className:"p-0",children:[(0,s.jsx)(_._,{htmlFor:"picture",className:"p-2",children:(0,s.jsx)(d.Icon,{icon:"mdi:image",className:"text-2xl"})}),(0,s.jsx)(w.I,{id:"picture",type:"file",className:"hidden",accept:"image/*",onChange:e=>{var t;let a=null===(t=e.target.files)||void 0===t?void 0:t[0];if(a&&a.type.startsWith("image/")){let e=new FileReader;e.readAsDataURL(a),e.onload=e=>{var t;let a=new Image;a.src=null===(t=e.target)||void 0===t?void 0:t.result,a.onload=()=>{let e=document.createElement("canvas"),t=e.getContext("2d"),s=a.width,n=a.height;s>n?s>300&&(n=Math.round(300/s*n),s=300):n>300&&(s=Math.round(300/n*s),n=300),e.width=s,e.height=n,null==t||t.drawImage(a,0,0,s,n),e.toBlob(e=>{let t=new FileReader;t.readAsDataURL(e),t.onloadend=async()=>{await (0,l.b6)({content:t.result,content_type:"image",ticket_id:z.id}),F()}},"image/webp",.8)}}}}})]}),(0,s.jsx)(w.I,{placeholder:t("inputPlaceholder"),onChange:e=>M(e.target.value),value:H}),(0,s.jsx)(f.z,{type:"submit",disabled:!H,children:t("send")})]})})]})})]})}},60753:function(e,t,a){"use strict";a.d(t,{Tabs:function(){return l},TabsContent:function(){return o},TabsList:function(){return d},TabsTrigger:function(){return c}});var s=a(52948),n=a(30786),i=a(3536),r=a(33412);let l=i.fC,d=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(i.aV,{ref:t,className:(0,r.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",a),...n})});d.displayName=i.aV.displayName;let c=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(i.xz,{ref:t,className:(0,r.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",a),...n})});c.displayName=i.xz.displayName;let o=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(i.VY,{ref:t,className:(0,r.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",a),...n})});o.displayName=i.VY.displayName}},function(e){e.O(0,[30792,61896,94699,3869,89986,34099,92494,66035,61488,97647,17399,3536,12405,82349,44517,12100,81162,1744],function(){return e(e.s=46792)}),_N_E=e.O()}]);