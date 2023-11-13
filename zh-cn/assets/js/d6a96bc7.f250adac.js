"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62405],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(t),c=r,k=d["".concat(i,".").concat(c)]||d[c]||m[c]||l;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=c;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},68564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const l={id:"gang_scheduling",title:"\u5206\u7ec4\u8c03\u5ea6"},o=void 0,p={unversionedId:"user_guide/gang_scheduling",id:"version-1.3.0/user_guide/gang_scheduling",title:"\u5206\u7ec4\u8c03\u5ea6",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.3.0/user_guide/gang_scheduling.md",sourceDirName:"user_guide",slug:"/user_guide/gang_scheduling",permalink:"/zh-cn/docs/user_guide/gang_scheduling",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"gang_scheduling",title:"\u5206\u7ec4\u8c03\u5ea6"},sidebar:"docs",previous:{title:"\u8d44\u6e90\u914d\u989d\u7ba1\u7406",permalink:"/zh-cn/docs/user_guide/resource_quota_management"},next:{title:"Labels and Annotations in YuniKorn",permalink:"/zh-cn/docs/user_guide/labels_and_annotations_in_yunikorn"}},i={},u=[{value:"\u4ec0\u4e48\u662f\u5206\u7ec4\u8c03\u5ea6",id:"\u4ec0\u4e48\u662f\u5206\u7ec4\u8c03\u5ea6",level:2},{value:"\u542f\u7528\u5206\u7ec4\u8c03\u5ea6",id:"\u542f\u7528\u5206\u7ec4\u8c03\u5ea6",level:2},{value:"\u524d\u63d0",id:"\u524d\u63d0",level:3},{value:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528 &quot;FIFO&quot; \u6392\u5e8f\u7b56\u7565\uff1f",id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528-fifo-\u6392\u5e8f\u7b56\u7565",level:4},{value:"&quot;StateAware&quot; \u6392\u5e8f\u7b56\u7565\u7684\u526f\u4f5c\u7528",id:"stateaware-\u6392\u5e8f\u7b56\u7565\u7684\u526f\u4f5c\u7528",level:4},{value:"\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e",id:"\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e",level:3},{value:"\u9700\u8981\u591a\u5c11\u4e2a\u4efb\u52a1\u7ec4\uff1f",id:"\u9700\u8981\u591a\u5c11\u4e2a\u4efb\u52a1\u7ec4",level:4},{value:"\u5982\u4f55\u5b9a\u4e49\u4efb\u52a1\u7ec4\uff1f",id:"\u5982\u4f55\u5b9a\u4e49\u4efb\u52a1\u7ec4",level:4},{value:"\u8c03\u5ea6\u7b56\u7565\u53c2\u6570",id:"\u8c03\u5ea6\u7b56\u7565\u53c2\u6570",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"\u542f\u7528Spark\u4f5c\u4e1a\u7684Gang\u8c03\u5ea6",id:"\u542f\u7528spark\u4f5c\u4e1a\u7684gang\u8c03\u5ea6",level:3},{value:"\u5206\u7ec4\u8c03\u5ea6\u98ce\u683c",id:"\u5206\u7ec4\u8c03\u5ea6\u98ce\u683c",level:2},{value:"Example",id:"example",level:4},{value:"\u9a8c\u8bc1\u914d\u7f6e",id:"\u9a8c\u8bc1\u914d\u7f6e",level:2},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2}],s={toc:u},d="wrapper";function m(e){let{components:n,...l}=e;return(0,r.kt)(d,(0,a.Z)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662f\u5206\u7ec4\u8c03\u5ea6"},"\u4ec0\u4e48\u662f\u5206\u7ec4\u8c03\u5ea6"),(0,r.kt)("p",null,"\u5f53\u5206\u7ec4\u8c03\u5ea6\u88ab\u542f\u7528\u65f6\uff0cYuniKorn \u53ea\u5728\u4ee5\u4e0b\u60c5\u51b5\u4e0b\u8c03\u5ea6\u5e94\u7528\u7a0b\u5e8f\n\u5e94\u7528\u7a0b\u5e8f\u7684\u6700\u5c0f\u8d44\u6e90\u8bf7\u6c42\u80fd\u591f\u5f97\u5230\u6ee1\u8db3\u65f6\u624d\u4f1a\u8c03\u5ea6\u3002\u5426\u5219\uff0c\u5e94\u7528\u7a0b\u5e8f\n\u5c06\u5728\u961f\u5217\u4e2d\u7b49\u5f85\u3002\u5e94\u7528\u7a0b\u5e8f\u88ab\u6392\u5728\u5c42\u6b21\u961f\u5217\u4e2d\u3001\n\u542f\u7528\u5206\u7ec4\u8c03\u5ea6\u540e\uff0c\u6bcf\u4e2a\u8d44\u6e90\u961f\u5217\u90fd\u88ab\u5206\u914d\u6709\n\u5728\u4fdd\u8bc1\u6700\u5c0f\u8d44\u6e90\u7684\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e2a\u8d44\u6e90\u961f\u5217\u90fd\u88ab\u5206\u914d\u4e86\u6700\u5927\u6570\u91cf\u7684\u5e94\u7528\u7a0b\u5e8f\u5e76\u53d1\u8fd0\u884c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5206\u7ec4\u8c03\u5ea6",src:t(62883).Z,width:"1186",height:"444"})),(0,r.kt)("h2",{id:"\u542f\u7528\u5206\u7ec4\u8c03\u5ea6"},"\u542f\u7528\u5206\u7ec4\u8c03\u5ea6"),(0,r.kt)("p",null,"\u542f\u7528\u5206\u7ec4\u8c03\u5ea6\u4e0d\u9700\u8981\u5728\u96c6\u7fa4\u8303\u56f4\u5185\u8fdb\u884c\u914d\u7f6e\u3002\n\u8c03\u5ea6\u5668\u4f1a\u4e3b\u52a8\u76d1\u63a7\u6bcf\u4e2a\u5e94\u7528\u7684\u5143\u6570\u636e\uff0c\u5982\u679c\u8be5\u5e94\u7528\u5305\u542b\u4e86\n\u4e00\u4e2a\u6709\u6548\u7684\u4efb\u52a1\u7ec4\u5b9a\u4e49\uff0c\u5b83\u5c31\u4f1a\u88ab\u8ba4\u4e3a\u662f\u6240\u9700\u7684\u5206\u7ec4\u8c03\u5ea6\u3002"),(0,r.kt)("admonition",{title:"\u4efb\u52a1\u7ec4",type:"info"},(0,r.kt)("p",{parentName:"admonition"},'\u4e00\u4e2a\u4efb\u52a1\u7ec4\u662f\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u4efb\u52a1 "\u7fa4\u7ec4"\uff0c\u8fd9\u4e9b\u4efb\u52a1\u5177\u6709\u76f8\u540c\u7684\u8d44\u6e90\u6982\u51b5\n\u548c\u76f8\u540c\u7684\u653e\u7f6e\u9650\u5236\u3002\u5b83\u4eec\u88ab\u8ba4\u4e3a\u662f\u540c\u8d28\u5316\u7684\u8bf7\u6c42\uff0c\u5728\u8c03\u5ea6\u5668\u4e2d\u53ef\u4ee5\u88ab\u89c6\u4e3a\n\u5728\u8c03\u5ea6\u5668\u4e2d\u88ab\u5f53\u4f5c\u540c\u4e00\u7c7b\u8bf7\u6c42\u5904\u7406\u3002')),(0,r.kt)("h3",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,r.kt)("p",null,'\u5bf9\u4e8e\u8fd0\u884c\u652f\u6301\u8c03\u5ea6\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u961f\u5217\uff0c\u961f\u5217\u6392\u5e8f\u7b56\u7565\u5e94\u8be5\u88ab\u8bbe\u7f6e\u4e3a "FIFO"\u3002\n\u8981\u914d\u7f6e\u961f\u5217\u6392\u5e8f\u7b56\u7565\uff0c\u8bf7\u53c2\u8003\u6587\u6863\uff1a',(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/user_guide/sorting_policies#%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E6%8E%92%E5%BA%8F"},"\u5e94\u7528\u7a0b\u5e8f\u6392\u5e8f"),"\u3002"),(0,r.kt)("h4",{id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528-fifo-\u6392\u5e8f\u7b56\u7565"},'\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528 "FIFO" \u6392\u5e8f\u7b56\u7565\uff1f'),(0,r.kt)("p",null,"\u5f53\u5206\u7ec4\u8c03\u5ea6\u88ab\u542f\u7528\u65f6\uff0c\u8c03\u5ea6\u5668\u4f1a\u4e3b\u52a8\u4e3a\u6bcf\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4fdd\u7559\u8d44\u6e90\u3002\n\u5982\u679c\u961f\u5217\u6392\u5e8f\u7b56\u7565\u4e0d\u662f\u57fa\u4e8eFIFO\uff08StateAware \u662f\u57fa\u4e8e FIFO \u7684\u6392\u5e8f\u7b56\u7565\uff09\u3001\n\u8c03\u5ea6\u5668\u53ef\u80fd\u4f1a\u4e3a\u6bcf\u4e2a\u5e94\u7528\u4fdd\u7559\u90e8\u5206\u8d44\u6e90\u5e76\u5bfc\u81f4\u8d44\u6e90\u5206\u5272\u95ee\u9898\u3002"),(0,r.kt)("h4",{id:"stateaware-\u6392\u5e8f\u7b56\u7565\u7684\u526f\u4f5c\u7528"},'"StateAware" \u6392\u5e8f\u7b56\u7565\u7684\u526f\u4f5c\u7528'),(0,r.kt)("p",null,"\u6211\u4eec\u4e0d\u5efa\u8bae\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"StateAware"),"\uff0c\u5c3d\u7ba1\u5b83\u662f\u4e00\u4e2a\u57fa\u4e8e FIFO \u7684\u7b56\u7565\u3002\u7b2c\u4e00\u4e2a pod \u7684\u5931\u8d25\u6216\u8005\u8be5 pod \u7684\u521d\u59cb\u5316\u65f6\u95f4\u8fc7\u957f\u90fd\u4f1a\u4f7f\u5904\u7406\u8fc7\u7a0b\u53d8\u6162\u3002\n\u5f53\u9a71\u52a8\u5728\u8bf7\u6c42\u6267\u884c\u5668\u4e4b\u524d\u8fdb\u884c\u5927\u91cf\u7684\u9884\u5904\u7406\u65f6\uff0c\u5c24\u5176\u662f Spark\u3002\n\u5728\u8fd9\u4e9b\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"StateAware")," \u8d85\u65f6\u4f1a\u4f7f\u5904\u7406\u901f\u5ea6\u51cf\u6162\u5230\u6bcf\u6b21\u8d85\u65f6\u53ea\u6709\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u3002\n\u8fd9\u5b9e\u9645\u4e0a\u4f1a\u63a8\u7ffb\u7fa4\u7ec4\u7684\u4fdd\u7559\uff0c\u5e76\u5bfc\u81f4\u51cf\u901f\u548c\u8fc7\u5ea6\u4f7f\u7528\u8d44\u6e90\u3002"),(0,r.kt)("h3",{id:"\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e"},"\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e"),(0,r.kt)("p",null,"\u5728 Kubernetes \u4e0a\uff0cYuniKorn \u901a\u8fc7\u4ece\u5355\u4e2apod\u52a0\u8f7d\u5143\u6570\u636e\u6765\u53d1\u73b0\u5e94\u7528\uff0c\u5e94\u7528\u7684\u7b2c\u4e00\u4e2apod\n\u88ab\u8981\u6c42\u9644\u4e0a\u4e00\u4efd\u5b8c\u6574\u7684\u5e94\u7528\u5143\u6570\u636e\u526f\u672c\u3002\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u6ca1\u6709\u5173\u4e8e\u7b2c\u4e00\u4e2a\u6216\u7b2c\u4e8c\u4e2apod\u7684\u4efb\u4f55\u6ce8\u91ca\uff0c\n\u90a3\u4e48\u6240\u6709\u7684pod\u90fd\u9700\u8981\u643a\u5e26\u76f8\u540c\u7684 taskGroups \u4fe1\u606f\u3002\u5206\u7ec4\u8abf\u5ea6\u9700\u8981 taskGroups \u7684\u5b9a\u4e49\uff0c\n\u53ef\u4ee5\u901a\u8fc7 pod \u6ce8\u89e3\u6765\u6307\u5b9a\u3002\u6240\u9700\u7684\u5b57\u6bb5\u662f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6ce8\u91ca"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4ef7\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yunikorn.apache.org/task-group-name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u7ec4\u540d\u79f0\uff0c\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5fc5\u987b\u662f\u552f\u4e00\u7684\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yunikorn.apache.org/task-groups"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u7ec4\u7684\u5217\u8868\uff0c\u6bcf\u4e00\u9879\u90fd\u5305\u542b\u4e86\u4e3a\u8be5\u4efb\u52a1\u7ec4\u5b9a\u4e49\u7684\u6240\u6709\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yunikorn.apache.org/schedulingPolicyParameters"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u3002\u4e00\u4e2a\u4efb\u610f\u7684\u952e\u503c\u5bf9\u6765\u5b9a\u4e49\u8c03\u5ea6\u7b56\u7565\u53c2\u6570\u3002\u8bf7\u9605\u8bfb",(0,r.kt)("a",{parentName:"td",href:"#%E8%B0%83%E5%BA%A6%E7%AD%96%E7%95%A5%E5%8F%82%E6%95%B0"},"\u8c03\u5ea6\u7b56\u7565\u53c2\u6570"))))),(0,r.kt)("h4",{id:"\u9700\u8981\u591a\u5c11\u4e2a\u4efb\u52a1\u7ec4"},"\u9700\u8981\u591a\u5c11\u4e2a\u4efb\u52a1\u7ec4\uff1f"),(0,r.kt)("p",null,'\u8fd9\u53d6\u51b3\u4e8e\u8fd9\u4e2a\u5e94\u7528\u7a0b\u5e8f\u5411 K8s \u8bf7\u6c42\u591a\u5c11\u4e0d\u540c\u7c7b\u578b\u7684 pod\u3002\u4e00\u4e2a\u4efb\u52a1\u7ec4\u662f\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u4efb\u52a1 "\u7fa4\u7ec4"\u3001\n\u8fd9\u4e9b\u4efb\u52a1\u5177\u6709\u76f8\u540c\u7684\u8d44\u6e90\u6982\u51b5\u548c\u76f8\u540c\u7684\u653e\u7f6e\u9650\u5236\u3002\u5b83\u4eec\u88ab\u8ba4\u4e3a\u662f\u540c\u8d28\u7684\n\u5728\u8c03\u5ea6\u5668\u4e2d\u53ef\u4ee5\u88ab\u89c6\u4e3a\u540c\u7c7b\u7684\u8bf7\u6c42\u3002\u4ee5 Spark \u4e3a\u4f8b\uff0c\u6bcf\u4e2a\u4f5c\u4e1a\u90fd\u9700\u8981\u67092\u4e2a\u4efb\u52a1\u7ec4\u3001\n\u4e00\u4e2a\u7528\u4e8edriver pod\uff0c\u53e6\u4e00\u4e2a\u7528\u4e8e executor pods\u3002'),(0,r.kt)("h4",{id:"\u5982\u4f55\u5b9a\u4e49\u4efb\u52a1\u7ec4"},"\u5982\u4f55\u5b9a\u4e49\u4efb\u52a1\u7ec4\uff1f"),(0,r.kt)("p",null,"\u4efb\u52a1\u7ec4\u7684\u5b9a\u4e49\u662f\u5e94\u7528\u7a0b\u5e8f\u7684\u771f\u5b9epod\u5b9a\u4e49\u7684\u526f\u672c\uff0c\u50cf\u8d44\u6e90\u3001\u8282\u70b9\u9009\u62e9\u5668\u3001\u5bb9\u5fcd\u5ea6\n\u548c\u4eb2\u548c\u529b\u5e94\u8be5\u4e0e\u771f\u6b63\u7684pod\u76f8\u540c\u3002\u8fd9\u662f\u4e3a\u4e86\u786e\u4fdd\u8c03\u5ea6\u5668\u80fd\u591f\u4ee5\u51c6\u786e\u7684pod\u89c4\u683c\u4fdd\u7559\u8d44\u6e90\u3002\n\u786e\u5207\u6b63\u786e\u7684pod\u89c4\u8303\u3002"),(0,r.kt)("h4",{id:"\u8c03\u5ea6\u7b56\u7565\u53c2\u6570"},"\u8c03\u5ea6\u7b56\u7565\u53c2\u6570"),(0,r.kt)("p",null,"\u8c03\u5ea6\u7b56\u7565\u76f8\u5173\u7684\u53ef\u914d\u7f6e\u53c2\u6570\u3002\u5728pod\u7684\u6ce8\u91ca\u4e2d\u4ee5\u4e0b\u5217\u683c\u5f0f\u5e94\u7528\u8fd9\u4e9b\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'annotations:\n   yunikorn.apache.org/schedulingPolicyParameters: "PARAM1=VALUE1 PARAM2=VALUE2 ..."\n')),(0,r.kt)("p",null,"\u76ee\u524d\uff0c\u652f\u6301\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"placeholderTimeoutInSeconds")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("em",{parentName:"p"},"15\u5206\u949f"),"\u3002\n\u8fd9\u4e2a\u53c2\u6570\u5b9a\u4e49\u4e86\u9884\u7ea6\u8d85\u65f6\uff0c\u5373\u8c03\u5ea6\u5668\u5728\u653e\u5f03\u5206\u914d\u6240\u6709\u5360\u4f4d\u7b26\u4e4b\u524d\u5e94\u8be5\u7b49\u5f85\u591a\u957f\u65f6\u95f4\u3002\n\u5f53\u8c03\u5ea6\u5668",(0,r.kt)("em",{parentName:"p"},"\u5206\u914d\u7b2c\u4e00\u4e2a\u5360\u4f4d\u5668pod"),"\u65f6\uff0c\u8d85\u65f6\u8ba1\u65f6\u5668\u5f00\u59cb\u8ba1\u65f6\u3002\u8fd9\u786e\u4fdd\u4e86\u5982\u679c\u8c03\u5ea6\u5668\n\u65e0\u6cd5\u8c03\u5ea6\u6240\u6709\u7684\u5360\u4f4d\u835a\uff0c\u5b83\u6700\u7ec8\u4f1a\u5728\u4e00\u5b9a\u7684\u65f6\u95f4\u540e\u653e\u5f03\u3002\u8fd9\u6837\uff0c\u8d44\u6e90\u53ef\u4ee5\u88ab\n\u91ca\u653e\u51fa\u6765\uff0c\u4f9b\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u3002\u5982\u679c\u6ca1\u6709\u5360\u4f4d\u7b26\u53ef\u4ee5\u88ab\u5206\u914d\uff0c\u8fd9\u4e2a\u8d85\u65f6\u5c31\u4e0d\u4f1a\u542f\u52a8\u3002\u4e3a\u4e86\u907f\u514d\u5360\u4f4d\u7b26\npods\u6c38\u8fdc\u5361\u4f4f\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/user_guide/troubleshooting#%E6%88%90%E7%BB%84%E8%B0%83%E5%BA%A6"},"\u6545\u969c\u6392\u9664")," \u4e86\u89e3\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gangSchedulingStyle")),(0,r.kt)("p",null,"\u6709\u6548\u503c\uff1a ",(0,r.kt)("em",{parentName:"p"},"Soft"),", ",(0,r.kt)("em",{parentName:"p"},"Hard")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("em",{parentName:"p"},"Soft"),".\n\u8fd9\u4e2a\u53c2\u6570\u5b9a\u4e49\u4e86\u5f53\u5e94\u7528\u7a0b\u5e8f\u7531\u4e8e\u5360\u4f4d\u7b26 pod \u5206\u914d\u800c\u9047\u5230\u5206\u7ec4\u95ee\u9898\u65f6\u7684\u540e\u9000\u673a\u5236\u3002\n\u66f4\u591a\u7ec6\u8282\u89c1",(0,r.kt)("a",{parentName:"p",href:"#%E5%88%86%E7%BB%84%E8%B0%83%E5%BA%A6%E9%A3%8E%E6%A0%BC"},"\u5206\u7ec4\u8c03\u5ea6\u98ce\u683c"),"\u90e8\u5206"),(0,r.kt)("p",null,"\u66f4\u591a\u7684\u8c03\u5ea6\u53c2\u6570\u5c06\u88ab\u6dfb\u52a0\uff0c\u4ee5\u4fbf\u5728\u8c03\u5ea6\u5e94\u7528\u7a0b\u5e8f\u65f6\u63d0\u4f9b\u66f4\u591a\u7684\u7075\u6d3b\u6027\u3002"),(0,r.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u662f\u4e00\u4e2a\u5de5\u4f5c\u7684yaml\u6587\u4ef6\u3002\u8fd9\u4e2a\u5de5\u4f5c\u542f\u52a8\u4e862\u4e2a pod\uff0c\u6bcf\u4e2a pod \u7761\u7720\u65f6\u95f4\u4e3a 30 \u79d2\u3002\n\u5728 pod \u89c4\u8303\u4e2d\u503c\u5f97\u6ce8\u610f\u7684\u53d8\u5316\u662f ",(0,r.kt)("em",{parentName:"p"},"spec.template.metadata.annotations"),"\uff0c\u5728\u8fd9\u91cc\u6211\u4eec\u5b9a\u4e49\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"yunikorn.apache.org/task-group-name\n\u548c "),"yunikorn.apache.org/task-groups` \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: gang-scheduling-job-example\nspec:\n  completions: 2\n  parallelism: 2\n  template:\n    metadata:\n      labels:\n        app: sleep\n        applicationId: "gang-scheduling-job-example"\n        queue: root.sandbox\n      annotations:\n        yunikorn.apache.org/task-group-name: task-group-example\n        yunikorn.apache.org/task-groups: |-\n          [{\n              "name": "task-group-example",\n              "minMember": 2,\n              "minResource": {\n                "cpu": "100m",\n                "memory": "50M"\n              },\n              "nodeSelector": {},\n              "tolerations": [],\n              "affinity": {}\n          }]\n    spec:\n      schedulerName: yunikorn\n      restartPolicy: Never\n      containers:\n        - name: sleep30\n          image: "alpine:latest"\n          command: ["sleep", "30"]\n          resources:\n            requests:\n              cpu: "100m"\n              memory: "50M"\n')),(0,r.kt)("p",null,"\u5f53\u8fd9\u9879\u5de5\u4f5c\u63d0\u4ea4\u7ed9 Kubernetes \u65f6\uff0c\u5c06\u4f7f\u7528\u540c\u4e00\u6a21\u677f\u521b\u5efa2\u4e2apod\uff0c\u5b83\u4eec\u90fd\u5c5e\u4e8e\u4e00\u4e2a\u4efb\u52a1\u7ec4\uff1a\n",(0,r.kt)("em",{parentName:"p"},'"task-group-example"'),"\u3002 YuniKorn\u5c06\u521b\u5efa2\u4e2a\u5360\u4f4d\u7b26pod\uff0c\u6bcf\u4e2a\u90fd\u4f7f\u7528\u4efb\u52a1\u7ec4\u5b9a\u4e49\u4e2d\u6307\u5b9a\u7684\u8d44\u6e90\u3002\n\u5f53\u6240\u67092\u4e2a\u5360\u4f4d\u7b26\u5206\u914d\u5b8c\u6bd5\u540e\uff0c\u8c03\u5ea6\u5668\u5c06\u4f7f\u7528\u5360\u4f4d\u7b26\u4fdd\u7559\u7684\u4f4d\u7f6e\u6765\u7ed1\u5b9a\u771f\u6b63\u76842\u4e2a\u7761\u7720pods\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6709\u5fc5\u8981\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u591a\u4e2a\u4efb\u52a1\u7ec4\uff0c\u6bcf\u4e2a\u4efb\u52a1\u7ec4\u7531\u4efb\u52a1\u7ec4\u540d\u79f0\u6807\u8bc6\u3001\n\u901a\u8fc7\u8bbe\u7f6e\u4efb\u52a1\u7ec4\u540d\u79f0\uff0c\u9700\u8981\u5c06\u6bcf\u4e2a\u771f\u5b9e\u7684pod\u4e0e\u4e00\u4e2a\u9884\u5148\u5b9a\u4e49\u7684\u4efb\u52a1\u7ec4\u8fdb\u884c\u6620\u5c04\u3002\u6ce8\u610f\u3001\n\u4efb\u52a1\u7ec4\u540d\u79f0\u53ea\u8981\u6c42\u5728\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u662f\u552f\u4e00\u7684\u3002"),(0,r.kt)("h3",{id:"\u542f\u7528spark\u4f5c\u4e1a\u7684gang\u8c03\u5ea6"},"\u542f\u7528Spark\u4f5c\u4e1a\u7684Gang\u8c03\u5ea6"),(0,r.kt)("p",null,"\u6bcf\u4e2aSpark\u4f5c\u4e1a\u90fd\u8fd0\u884c2\u79cd\u7c7b\u578b\u7684pod\uff0c\u9a71\u52a8\u548c\u6267\u884c\u5668\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u4e3a\u6bcf\u4e2a\u4f5c\u4e1a\u5b9a\u4e492\u4e2a\u4efb\u52a1\u7ec4\u3002\n\u9a71\u52a8\u5668pod\u7684\u6ce8\u91ca\u770b\u8d77\u6765\u50cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Annotations:\n  yunikorn.apache.org/schedulingPolicyParameters: \u201cplaceholderTimeoutSeconds=30\u201d\n  yunikorn.apache.org/taskGroupName: \u201cspark-driver\u201d\n  yunikorn.apache.org/taskGroup: \u201c\n    TaskGroups: [\n     {\n       Name: \u201cspark-driver\u201d,\n       minMember: 1,\n       minResource: {\n         Cpu: 1,\n         Memory: 2Gi\n       },\n       Node-selector: ...,\n       Tolerations: ...,\n       Affinity: ...\n     },\n      {\n        Name: \u201cspark-executor\u201d,\n        minMember: 10, \n        minResource: {\n          Cpu: 1,\n          Memory: 2Gi\n        }\n      }\n  ]\n  \u201d\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4efb\u52a1\u7ec4\u7684\u8d44\u6e90\u5fc5\u987b\u8003\u8651\u5230Spark\u9a71\u52a8\u548c\u6267\u884c\u5668\u7684\u5185\u5b58\u5f00\u9500\u3002\n\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/configuration.html#application-properties"},"Spark documentation")," \u4ee5\u4e86\u89e3\u5982\u4f55\u8ba1\u7b97\u8fd9\u4e9b\u6570\u503c\u7684\u7ec6\u8282\u3002")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u6240\u6709\u7684\u6267\u884c\u8005 pod\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Annotations:\n  # \u4efb\u52a1\u7ec4\u5b57\u6bb5\u4e2d\u5b9a\u4e49\u7684\u540d\u79f0\u76f8\u5339\u914d\n  # \u5728\u4efb\u52a1\u7ec4\u5b57\u6bb5\u4e2d\u5b9a\u4e49\n  yunikorn.apache.org/taskGroupName: \u201cspark-executor\u201d\n")),(0,r.kt)("p",null,"\u4e00\u65e6\u5de5\u4f5c\u88ab\u63d0\u4ea4\u7ed9\u8c03\u5ea6\u5668\uff0c\u5de5\u4f5c\u5c31\u4e0d\u4f1a\u88ab\u7acb\u5373\u8c03\u5ea6\u3002\n\u76f8\u53cd\uff0c\u5728\u5b9e\u9645\u542f\u52a8\u9a71\u52a8/\u6267\u884c\u5668\u4e4b\u524d\uff0c\u8c03\u5ea6\u5668\u5c06\u786e\u4fdd\u5b83\u83b7\u5f97\u6700\u5c0f\u7684\u8d44\u6e90\u3002"),(0,r.kt)("h2",{id:"\u5206\u7ec4\u8c03\u5ea6\u98ce\u683c"},"\u5206\u7ec4\u8c03\u5ea6\u98ce\u683c"),(0,r.kt)("p",null,"\u67092\u79cd\u5206\u7ec4\u8c03\u5ea6\u65b9\u5f0f\u652f\u6301\uff0c\u5206\u522b\u662f Soft \u548c Hard\u3002\u5b83\u53ef\u4ee5\u5728\u6bcf\u4e2a\u5e94\u7528\u5c42\u9762\u8fdb\u884c\u914d\u7f6e\uff0c\u4ee5\u5b9a\u4e49\u5e94\u7528\u5728\u5206\u7ec4\u8c03\u5ea6\u5931\u8d25\u65f6\u7684\u884c\u4e3a\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Hard Style"),"\uff1a\u5f53\u4f7f\u7528\u8fd9\u79cd\u98ce\u683c\u65f6\uff0c\u6211\u4eec\u5c06\u6709\u521d\u59cb\u884c\u4e3a\uff0c\u66f4\u786e\u5207\u5730\u8bf4\uff0c\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u4e0d\u80fd\u6839\u636e\u5206\u7ec4\u8c03\u5ea6\u89c4\u5219\u8fdb\u884c\u8c03\u5ea6\uff0c\u5e76\u4e14\u8d85\u65f6\uff0c\u5b83\u5c06\u88ab\u6807\u8bb0\u4e3a\u5931\u8d25\uff0c\u800c\u4e0d\u4f1a\u91cd\u65b0\u5c1d\u8bd5\u8c03\u5ea6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Soft Style"),"\uff1a\u5f53\u5e94\u7528\u7a0b\u5e8f\u4e0d\u80fd\u88ab\u5206\u7ec4\u8c03\u5ea6\u65f6\uff0c\u5b83\u5c06\u9000\u56de\u5230\u6b63\u5e38\u7684\u8c03\u5ea6\uff0c\u5e76\u4f7f\u7528\u975e\u5206\u7ec4\u8c03\u5ea6\u7b56\u7565\u6765\u5b9e\u73b0\u6700\u4f73\u52aa\u529b\u7684\u8c03\u5ea6\u3002\u5f53\u8fd9\u79cd\u60c5\u51b5\u53d1\u751f\u65f6\uff0c\u5e94\u7528\u7a0b\u5e8f\u5c06\u8fc7\u6e21\u5230\u6062\u590d\u72b6\u6001\uff0c\u6240\u6709\u5269\u4f59\u7684\u5360\u4f4d\u7b26 pod \u5c06\u88ab\u6e05\u7406\u6389\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u7684\u9ed8\u8ba4\u6837\u5f0f"),"\uff1a ``Soft\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u542f\u7528\u4e00\u4e2a\u7279\u5b9a\u7684\u98ce\u683c"),"\uff1a\u53ef\u4ee5\u901a\u8fc7\u5728\u5e94\u7528\u7a0b\u5e8f\u5b9a\u4e49\u4e2d\u8bbe\u7f6e'gangSchedulingStyle'\u53c2\u6570\u6765\u6539\u53d8\u98ce\u683c\uff0c\u5373 Soft \u6216 Hard\u3002"),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: gang-app-timeout\nspec:\n  completions: 4\n  parallelism: 4\n  template:\n    metadata:\n      labels:\n        app: sleep\n        applicationId: gang-app-timeout\n        queue: fifo\n      annotations:\n        yunikorn.apache.org/task-group-name: sched-style\n        yunikorn.apache.org/schedulingPolicyParameters: "placeholderTimeoutInSeconds=60 gangSchedulingStyle=Hard"\n        yunikorn.apache.org/task-groups: |-\n          [{\n              "name": "sched-style",\n              "minMember": 4,\n              "minResource": {\n                "cpu": "1",\n                "memory": "1000M"\n              },\n              "nodeSelector": {},\n              "tolerations": [],\n              "affinity": {}\n          }]\n    spec:\n      schedulerName: yunikorn\n      restartPolicy: Never\n      containers:\n        - name: sleep30\n          image: "alpine:latest"\n          imagePullPolicy: "IfNotPresent"\n          command: ["sleep", "30"]\n          resources:\n            requests:\n              cpu: "1"\n              memory: "1000M"\n\n')),(0,r.kt)("h2",{id:"\u9a8c\u8bc1\u914d\u7f6e"},"\u9a8c\u8bc1\u914d\u7f6e"),(0,r.kt)("p",null,"\u4e3a\u4e86\u9a8c\u8bc1\u914d\u7f6e\u662f\u5426\u5df2\u7ecf\u5b8c\u5168\u6b63\u786e\uff0c\u8bf7\u68c0\u67e5\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5f53\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u88ab\u63d0\u4ea4\u65f6\uff0c\u9a8c\u8bc1\u9884\u671f\u7684\u5360\u4f4d\u7b26\u6570\u91cf\u662f\u5426\u88ab\u8c03\u5ea6\u5668\u521b\u5efa\u3002\n\u5982\u679c\u4f60\u5b9a\u4e49\u4e86\u4e24\u4e2a\u4efb\u52a1\u7ec4\uff0c\u4e00\u4e2a\u662fminMember 1\uff0c\u53e6\u4e00\u4e2a\u662fminMember 5\uff0c\u8fd9\u610f\u5473\u7740\u6211\u4eec\u671f\u671b\u5728\u4efb\u52a1\u63d0\u4ea4\u540e\u67096\u4e2a\u5360\u4f4d\u7b26\u88ab\u521b\u5efa\u3002\n\u88ab\u521b\u5efa\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u5360\u4f4d\u7b26\u7684\u89c4\u683c\u662f\u5426\u6b63\u786e\u3002\u6bcf\u4e2a\u5360\u4f4d\u7b26\u90fd\u9700\u8981\u6709\u4e0e\u540c\u4e00\u4efb\u52a1\u7ec4\u4e2d\u7684\u771f\u5b9epod\u76f8\u540c\u7684\u4fe1\u606f\u3002\n\u68c0\u67e5\u9886\u57df\u5305\u62ec\uff1a\u547d\u540d\u7a7a\u95f4\u3001pod\u8d44\u6e90\u3001\u8282\u70b9\u9009\u62e9\u5668\u3001\u5bb9\u5fcd\u5ea6\u548c\u4eb2\u548c\u529b\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u5360\u4f4d\u7b26\u53ef\u4ee5\u5206\u914d\u5230\u6b63\u786e\u7684\u8282\u70b9\u7c7b\u578b\u4e0a\uff0c\u5e76\u9a8c\u8bc1\u771f\u6b63\u7684pod\u662f\u901a\u8fc7\u66ff\u6362\u5360\u4f4d\u7b26pod\u800c\u542f\u52a8\u7684\u3002")),(0,r.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,r.kt)("p",null,"\u8bf7\u53c2\u9605\u542f\u7528\u5e2e\u6d3e\u8c03\u5ea6\u65f6\u7684\u6545\u969c\u6392\u9664\u6587\u6863 ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/user_guide/troubleshooting#%E6%88%90%E7%BB%84%E8%B0%83%E5%BA%A6"},"\u9019\u88e1")))}m.isMDXComponent=!0},62883:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/gang_scheduling_intro-7f458cff1f69a386818aedfbc0443a34.png"}}]);