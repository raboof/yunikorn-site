"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18646],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(t),c=r,d=s["".concat(i,".").concat(c)]||s[c]||k[c]||l;return t?a.createElement(d,p(p({ref:n},m),{},{components:t})):a.createElement(d,p({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=c;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[s]="string"==typeof e?e:r,p[1]=o;for(var u=2;u<l;u++)p[u]=t[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},70214:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const l={id:"resource_quota_management",title:"\u8d44\u6e90\u914d\u989d\u7ba1\u7406"},p=void 0,o={unversionedId:"user_guide/resource_quota_management",id:"version-1.3.0/user_guide/resource_quota_management",title:"\u8d44\u6e90\u914d\u989d\u7ba1\u7406",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.3.0/user_guide/resource_quota_mgmt.md",sourceDirName:"user_guide",slug:"/user_guide/resource_quota_management",permalink:"/zh-cn/docs/user_guide/resource_quota_management",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"resource_quota_management",title:"\u8d44\u6e90\u914d\u989d\u7ba1\u7406"},sidebar:"docs",previous:{title:"ACLs",permalink:"/zh-cn/docs/user_guide/acls"},next:{title:"\u5206\u7ec4\u8c03\u5ea6",permalink:"/zh-cn/docs/user_guide/gang_scheduling"}},i={},u=[{value:"\u914d\u989d\u914d\u7f6e\u548c\u89c4\u5219",id:"\u914d\u989d\u914d\u7f6e\u548c\u89c4\u5219",level:2},{value:"\u8f6c\u6362 Kubernetes \u8d44\u6e90\u548c\u914d\u989d",id:"\u8f6c\u6362-kubernetes-\u8d44\u6e90\u548c\u914d\u989d",level:2},{value:"Kubernetes \u548c YuniKorn \u914d\u989d\u4e92\u52a8",id:"kubernetes-\u548c-yunikorn-\u914d\u989d\u4e92\u52a8",level:2},{value:"\u9759\u6001\u961f\u5217\u5b9a\u4e49",id:"\u9759\u6001\u961f\u5217\u5b9a\u4e49",level:2},{value:"\u76ee\u6807",id:"\u76ee\u6807",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u8fd0\u884c\u4e00\u4e2a\u5de5\u4f5c\u8d1f\u8f7d",id:"\u8fd0\u884c\u4e00\u4e2a\u5de5\u4f5c\u8d1f\u8f7d",level:3},{value:"\u540d\u79f0\u7a7a\u95f4\u5230\u961f\u5217\u7684\u6620\u5c04",id:"\u540d\u79f0\u7a7a\u95f4\u5230\u961f\u5217\u7684\u6620\u5c04",level:2},{value:"\u76ee\u6807",id:"\u76ee\u6807-1",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e-1",level:3},{value:"\u547d\u540d\u7a7a\u95f4\u914d\u989d",id:"\u547d\u540d\u7a7a\u95f4\u914d\u989d",level:3},{value:"\u8fd0\u884c\u4e00\u4e2a\u5de5\u4f5c\u8d1f\u8f7d",id:"\u8fd0\u884c\u4e00\u4e2a\u5de5\u4f5c\u8d1f\u8f7d-1",level:3},{value:"\u547d\u540d\u7a7a\u95f4\u7684\u7236\u961f\u5217\u6620\u5c04",id:"\u547d\u540d\u7a7a\u95f4\u7684\u7236\u961f\u5217\u6620\u5c04",level:2},{value:"\u76ee\u6807",id:"\u76ee\u6807-2",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e-2",level:3},{value:"\u547d\u540d\u7a7a\u95f4\u7236\u961f\u5217",id:"\u547d\u540d\u7a7a\u95f4\u7236\u961f\u5217",level:3},{value:"\u8fd0\u884c\u4e00\u4e2a\u5de5\u4f5c\u8d1f\u8f7d",id:"\u8fd0\u884c\u4e00\u4e2a\u5de5\u4f5c\u8d1f\u8f7d-2",level:3}],m={toc:u},s="wrapper";function k(e){let{components:n,...l}=e;return(0,r.kt)(s,(0,a.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u914d\u989d\u914d\u7f6e\u548c\u89c4\u5219"},"\u914d\u989d\u914d\u7f6e\u548c\u89c4\u5219"),(0,r.kt)("p",null,"\u4e0e Kubernetes \u63d0\u4f9b\u7684\u7b80\u5355\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d\u76f8\u6bd4\uff0cYuniKorn \u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u66f4\u7ec6\u5316\u7684\u8d44\u6e90\u914d\u989d\u7ba1\u7406\u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,"\u5728 Kubernetes \u4e0a\uff0c\u4e00\u4e2a pod \u5728\u63d0\u4ea4\u65f6\u5fc5\u987b\u7b26\u5408\u547d\u540d\u7a7a\u95f4\u7684\u914d\u989d\u3002\n\u5982\u679c pod \u4e0d\u9002\u5408\u547d\u540d\u7a7a\u95f4\u914d\u989d\uff0c pod \u5c31\u4f1a\u88ab\u62d2\u7edd\u3002\n\u5ba2\u6237\u7aef\u5fc5\u987b\u5b9e\u73b0\u91cd\u8bd5\u673a\u5236\uff0c\u5982\u679c\u5b83\u9700\u8981\u8be5 pod \u88ab\u8c03\u5ea6\uff0c\u5c31\u91cd\u65b0\u63d0\u4ea4\u8be5 pod \u3002"),(0,r.kt)("p",null,"\u4e0e Kubernetes \u4e2d\u7684\u914d\u989d\u76f8\u53cd\uff0c YuniKorn \u4e0d\u5728\u63d0\u4ea4\u65f6\u5f3a\u5236\u6267\u884c\u914d\u989d\uff0c\u800c\u53ea\u5bf9\u4e3b\u52a8\u6d88\u8017\u7684\u8d44\u6e90\u6267\u884c\u914d\u989d\u3002\n\u89e3\u91ca\u4e00\u4e0b\u533a\u522b\uff1a\u5f53\u4f7f\u7528 YuniKorn \u6267\u884c\u914d\u989d\u65f6\uff0c\u63d0\u4ea4\u7ed9 Kubernetes \u7684\u65b0 pod \u603b\u662f\u88ab\u63a5\u53d7\u3002\nYunikorn \u5c06\u5bf9 pod \u8fdb\u884c\u6392\u961f\uff0c\u800c\u4e0d\u5c06\u6392\u961f\u7684 pod \u7684\u8d44\u6e90\u8ba1\u5165\u5df2\u6d88\u8017\u7684\u914d\u989d\u3002\n\u5f53 YuniKorn \u8bd5\u56fe\u8c03\u5ea6 pod \u65f6\uff0c\u5b83\u4f1a\u5728\u8c03\u5ea6\u65f6\u68c0\u67e5 pod \u662f\u5426\u7b26\u5408\u4e3a pod \u6240\u5206\u914d\u7684\u961f\u5217\u914d\u7f6e\u7684\u914d\u989d\u3002\n\u5982\u679c\u8fd9\u65f6 pod \u4e0d\u7b26\u5408\u914d\u989d\uff0c pod \u5c31\u4f1a\u88ab\u8df3\u8fc7\uff0c\u4e0d\u8ba1\u5165\u8d44\u6e90\u6d88\u8017\u3002\n\u8fd9\u610f\u5473\u7740\uff0c\u5728\u4e00\u4e2a pod \u7684\u8c03\u5ea6\u5c1d\u8bd5\u6210\u529f\u4e4b\u524d\uff0c\u4e00\u4e2a pod \u5728 YuniKorn \u914d\u989d\u7cfb\u7edf\u4e2d\u4e0d\u6d88\u8017\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"YuniKorn \u4e2d\u7684\u8d44\u6e90\u914d\u989d\u4e0e\u961f\u5217\u53ca\u5176\u5728\u961f\u5217\u5c42\u6b21\u7ed3\u6784\u4e2d\u7684\u4f4d\u7f6e\u6709\u5173\u3002\n\u961f\u5217\u7ed3\u6784\u7684\u57fa\u7840\uff0c\u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," \u961f\u5217\uff0c\u4e0d\u5141\u8bb8\u8bbe\u7f6e\u914d\u989d\uff0c\u56e0\u4e3a\u5b83\u53cd\u6620\u4e86\u96c6\u7fa4\u7684\u5f53\u524d\u89c4\u6a21\u3002\n\u8282\u70b9\u7684\u589e\u52a0\u548c\u5220\u9664\u4f1a\u81ea\u52a8\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," \u961f\u5217\u7684\u914d\u989d\u3002"),(0,r.kt)("p",null,"\u9664\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," \u961f\u5217\uff0c\u914d\u989d\u53ef\u4ee5\u8bbe\u7f6e\uff0c\u5e76\u5728\u5c42\u6b21\u7ed3\u6784\u7684\u4efb\u4f55\u4e00\u70b9\u4e0a\u6267\u884c\u3002\n\u6bcf\u4e2a\u961f\u5217\u90fd\u53ef\u4ee5\u6709\u4e00\u4e2a\u914d\u989d\u8bbe\u7f6e\u3002\u914d\u989d\u5728\u6574\u4e2a\u5c42\u6b21\u7ed3\u6784\u4e2d\u662f\u9012\u5f52\u6267\u884c\u7684\u3002\n\u8fd9\u610f\u5473\u7740\u5b50\u961f\u5217\u4f7f\u7528\u7684\u8d44\u6e90\u4e0d\u80fd\u8d85\u8fc7\u7236\u961f\u5217\u7684",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u7684"),"\u914d\u989d\u3002\n\u56e0\u6b64\uff0c\u5728\u5b50\u961f\u5217\u4e0a\u8bbe\u7f6e\u5927\u4e8e\u5176\u7236\u961f\u5217\u914d\u989d\u7684\u914d\u989d\u4e0d\u4f1a\u6709\u4efb\u4f55\u5f71\u54cd\uff0c\u5e76\u88ab\u4f5c\u4e3a\u914d\u7f6e\u9519\u8bef\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u5728\u5c42\u6b21\u7ed3\u6784\u4e2d\uff0c\u8fd8\u6709\u4e00\u4e9b\u9700\u8981\u8003\u8651\u7684\u89c4\u5219\u3002\n\u5982\u679c\u4e00\u4e2a\u7236\u961f\u5217\u6709\u591a\u4e2a\u5b50\u961f\u5217\uff0c\u6240\u6709\u5b50\u961f\u5217\u7684",(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u91cf\u4e4b\u548c\u4e0d\u80fd\u8d85\u8fc7\u7236\u961f\u5217\u7684"),"\u914d\u7f6e\u914d\u989d\u3002\n\u7136\u800c\uff0c\u4ece\u914d\u7f6e\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u8fd9\u5e76\u4e0d\u610f\u5473\u7740\u6240\u6709\u5b50\u961f\u7684",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u7684"),"\u914d\u989d\u4e4b\u548c\u5fc5\u987b\u5c0f\u4e8e\u7236\u961f\u7684\u914d\u989d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u961f\u5217\u5b9a\u989d",src:t(60106).Z,width:"1364",height:"732"})),(0,r.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"root.parent")," \u961f\u5217\u7684\u914d\u989d\u662f 900\u3002\n\u5b83\u5305\u542b\u4e09\u4e2a\u5b50\u961f\u5217\uff0c\u5176\u4e2d\u4e24\u4e2a\u6709\u914d\u989d\u8bbe\u7f6e\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"root.parent.child1")," \u6ca1\u6709\u8bbe\u7f6e\u914d\u989d\uff0c\u56e0\u6b64\u5c06\u88ab\u9650\u5236\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"root.parent")," \u7684\u914d\u989d\u5185\u3002\n\u53e6\u5916\u4e24\u4e2a\u961f\u5217 ",(0,r.kt)("inlineCode",{parentName:"p"},"root.parent.child2")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"root.parent.child3")," \u5404\u8bbe\u7f6e\u4e86 750 \u7684\u914d\u989d\u3002\n\u5728\u6b63\u5e38\u8fd0\u884c\u671f\u95f4\uff0c3 \u4e2a\u5b50\u961f\u5217\u7684\u603b\u4f7f\u7528\u91cf\u5c06\u662f 900\u3002\n\u5728\u6bcf\u4e2a\u5b50\u961f\u5217\u4e2d\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u6bcf\u4e2a\u90fd\u6709\u8d85\u8fc7 1000 \u7684\u9700\u6c42\u3002 "),(0,r.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5206\u914d\u53ef\u80fd\u662f\u4ee5\u4e0b\u4efb\u4f55\u4e00\u79cd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6240\u6709 900 \u4e2a\u90fd\u88ab ",(0,r.kt)("inlineCode",{parentName:"li"},"child1")," \u961f\u5217\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u5e73\u5747\u5206\u5e03\u5728 3 \u4e2a\u961f\u5217\u4e2d\uff08\u6bcf\u4e2a\u961f\u5217 300 \u4e2a\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"child2")," \u6700\u5927\u4f7f\u7528 750\uff0c\u5269\u4e0b\u7684 150 \u7531 ",(0,r.kt)("inlineCode",{parentName:"li"},"child3")," \u4f7f\u7528\u3002 ")),(0,r.kt)("p",null,"\u961f\u5217\u4e4b\u95f4\u7684\u786e\u5207\u5206\u5e03\u5c06\u662f\u6ce2\u52a8\u7684\uff0c\u53d6\u51b3\u4e8e\u8c03\u5ea6\u7b56\u7565\u3002"),(0,r.kt)("h2",{id:"\u8f6c\u6362-kubernetes-\u8d44\u6e90\u548c\u914d\u989d"},"\u8f6c\u6362 Kubernetes \u8d44\u6e90\u548c\u914d\u989d"),(0,r.kt)("p",null,"\u5bf9pod\u7684\u8d44\u6e90\u652f\u6301\u4ec5\u9650\u4e8e\u4f5c\u4e3a",(0,r.kt)("em",{parentName:"p"},"\u9700\u6c42"),"\u89c4\u8303\u7684\u4e00\u90e8\u5206\u800c\u6307\u5b9a\u7684\u8d44\u6e90\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"cpu")," \u88ab\u6620\u5c04\u5230 ",(0,r.kt)("em",{parentName:"li"},"vcore"),"\uff0c\u5176\u503c\u4e3a milli cpu\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"memory")," \u88ab\u6620\u5c04\u5230 ",(0,r.kt)("em",{parentName:"li"},"memory"),"\uff0c\u5176\u503c\u4e3aMB\uff081 MB = 10^6 B = 1 000 000 B\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6240\u6709\u5176\u4ed6\u8d44\u6e90\u90fd\u6309\u7167\u89c4\u5b9a\u8fdb\u884c\u6620\u5c04\u3002")),(0,r.kt)("p",null,"\u652f\u6301 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"Kubernetes\u6587\u6863")," \u4e2d\u63d0\u5230\u7684\u6269\u5c55\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"\u6709\u4e00\u4e2a\u5355\u4e00\u5bb9\u5668\u7684 pod \u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nspec:\n  containers:\n  - name: container-1\n    resources:\n      requests:\n        cpu: "250m"\n        memory: "1Gi"\n        hugepages-1Gi: "1"\n')),(0,r.kt)("p",null,"\u4e0a\u8ff0\u89c4\u8303\u5c06\u5728 YuniKorn \u4e2d\u4e3a\u8c03\u5ea6\u8bbe\u7f6e pod \u8d44\u6e90\u8bf7\u6c42\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"vcore")," -> 250m"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"memory")," -> 1073741824"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"hugepages-1Gi")," -> 1")),(0,r.kt)("p",null,"\u4e24\u4e2a\u5907\u6ce8\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n","\u591a\u4e2a\u5bb9\u5668\u89c4\u683c\u5c06\u88ab\u81ea\u52a8\u6c47\u603b\u4e3a\u4e00\u4e2a\u603b\u7684 pod \u8d44\u6e90\u8bf7\u6c42\u3002\u6240\u6709\u7684\u5185\u5b58\u90fd\u662f\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u62a5\u544a\u7684\u3002"),(0,r.kt)("p",null,"\u5728\u4e3a\u961f\u5217\u4f7f\u7528\u9759\u6001\u961f\u5217\u5b9a\u4e49\u7684\u60c5\u51b5\u4e0b\uff0c\u5bf9\u914d\u989d\u4e2d\u53ef\u6307\u5b9a\u7684\u8d44\u6e90\u7c7b\u578b\u6ca1\u6709\u9650\u5236\u3002\n\u4f5c\u4e3a\u81ea\u52a8\u961f\u5217\u521b\u5efa\u7684\u4e00\u90e8\u5206\uff0c\u547d\u540d\u7a7a\u95f4\u4e0a\u7684\u914d\u989d\u6ce8\u91ca\u88ab\u9650\u5236\u5728\u76f8\u5f53\u4e8e ",(0,r.kt)("em",{parentName:"p"},"cpu")," \u548c ",(0,r.kt)("em",{parentName:"p"},"memory")," \u7684\u8d44\u6e90\u3002\n\u53c2\u89c1\u4e0b\u9762\u7684 ",(0,r.kt)("a",{parentName:"p",href:"#Namespace-quota"},"\u8bbe\u7f6e"),"\uff0c\u4e86\u89e3\u547d\u540d\u7a7a\u95f4\u4e0a\u7684\u914d\u989d\u6ce8\u91ca\u3002"),(0,r.kt)("h2",{id:"kubernetes-\u548c-yunikorn-\u914d\u989d\u4e92\u52a8"},"Kubernetes \u548c YuniKorn \u914d\u989d\u4e92\u52a8"),(0,r.kt)("p",null,"\u5efa\u8bae\u5173\u95ed\u800c\u4e0d\u662f\u914d\u7f6e Kubernetes \u547d\u540d\u7a7a\u95f4\u914d\u989d\u3002\n\u53ea\u4f7f\u7528 YuniKorn \u961f\u5217\u914d\u989d\u63d0\u4f9b\u4e86\u4e00\u4e2a\u66f4\u7075\u6d3b\u7684\u8bbe\u7f6e\uff0c\u5e76\u5141\u8bb8\u5bf9\u5de5\u4f5c\u8d1f\u8f7d\u8fdb\u884c\u6392\u961f\u3002 "),(0,r.kt)("p",null,"\u5728\u540c\u65f6\u5f00\u542f YuniKorn \u548c Kubernetes \u914d\u989d\u7684\u8bbe\u7f6e\u4e2d\uff0c\u8003\u8651\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u7ef4\u62a4\u4e24\u4e2a\u72ec\u7acb\u7684\u914d\u7f6e\u3002\n\u8fd9\u589e\u52a0\u4e86\u7ef4\u62a4\u8d1f\u62c5\uff0c\u4ee5\u53ca\u914d\u7f6e\u9519\u8bef\u7684\u53ef\u80fd\u6027\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u914d\u989d\u90fd\u4f1a\u88ab\u5f3a\u5236\u6267\u884c\u3002")),(0,r.kt)("p",null,"\u5f00\u542f\u8fd9\u4e24\u4e2a\u914d\u989d\u53ef\u80fd\u4f1a\u5bfc\u81f4\u610f\u5916\u7684\u884c\u4e3a\u3002\n\u4e3b\u8981\u95ee\u9898\u662f\uff0cKubernetes \u547d\u540d\u7a7a\u95f4\u914d\u989d\u5728\u63d0\u4ea4\u65f6\u88ab\u5f3a\u5236\u6267\u884c\u3002\n\u6709\u4e09\u79cd\u914d\u989d\u914d\u7f6e\u7684\u7ec4\u5408\u662f\u53ef\u80fd\u7684\u3002\n\u5f53\u4e0e YuniKorn \u914d\u989d\u7ed3\u5408\u4f7f\u7528\u65f6\uff0c\u8fd93\u79cd\u7ec4\u5408\u53ef\u80fd\u6709\u4e24\u79cd\u6548\u679c\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e24\u79cd\u914d\u989d\u90fd\u662f",(0,r.kt)("em",{parentName:"li"},"\u5e73\u7b49\u7684"),"\uff1a\u5de5\u4f5c\u8d1f\u8f7d\u5c06\u4e0d\u88ab\u6392\u961f\uff0c\u53ef\u4ee5\u4f7f\u7528\u5168\u90e8\u914d\u7f6e\u7684\u914d\u989d\u3002 ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6700\u5927\u4f7f\u7528\u91cf\u548c\u6392\u961f\u5c06\u88ab\u9650\u5236\u5728\u8bbe\u5b9a\u7684\u914d\u989d\u5185"))),(0,r.kt)("li",{parentName:"ol"},"Kubernetes \u914d\u989d\u6bd4 YuniKorn \u4f4e\uff1aYuniKorn \u914d\u989d\u5c06\u6c38\u8fdc\u4e0d\u4f1a\u8fbe\u5230\uff0c\u5de5\u4f5c\u8d1f\u8f7d\u5c06\u4e0d\u4f1a\u88ab\u6392\u961f\u3002  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6700\u5927\u4f7f\u7528\u91cf\u5c06\u88ab\u9650\u5236\u5728 Kubernetes \u7684\u914d\u989d\u5185\u3002"))),(0,r.kt)("li",{parentName:"ol"},"Kubernetes \u914d\u989d\u6bd4 YuniKorn \u9ad8\uff1a YuniKorn \u5c06\u628a\u4f7f\u7528\u91cf\u9650\u5236\u5728 YuniKorn \u4e2d\u8bbe\u7f6e\u7684\u914d\u989d\u3002\nKubernetes \u914d\u989d\u5c06\u5728\u63d0\u4ea4\u65f6\u5f3a\u5236\u6267\u884c\uff0c\u4ece\u800c\u4e3a\u53ef\u4ee5\u5728 YuniKorn \u914d\u989d\u4e4b\u4e0a\u6392\u961f\u7684\u5de5\u4f5c\u8d1f\u8f7d\u8bbe\u7f6e\u9650\u5236\u3002 ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6700\u5927\u4f7f\u7528\u91cf\u5c06\u88ab\u9650\u5236\u5728 YuniKorn \u7684\u914d\u989d\u5185\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u8d1f\u8f7d\u7684\u6392\u961f\u5c06\u88ab\u9650\u5236\u5728 Kubernetes \u914d\u989d\u5185\u3002")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0b\u9762\u7684\u914d\u7f6e\u4f8b\u5b50\u53ea\u662f\u4e3a\u4e86\u6f14\u793a\u9700\u8981\u7684\u683c\u5f0f\n\u6765\u521b\u5efa\u4e00\u4e2a\u8bbe\u7f6e\u4e86\u914d\u989d\u7684\u961f\u5217\u5c42\u6b21\u7ed3\u6784\u3002")),(0,r.kt)("h2",{id:"\u9759\u6001\u961f\u5217\u5b9a\u4e49"},"\u9759\u6001\u961f\u5217\u5b9a\u4e49"),(0,r.kt)("h3",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,r.kt)("p",null,"\u4e00\u4e2a\u9884\u5148\u914d\u7f6e\u597d\u7684\u5177\u6709\u6700\u5927\u548c\u4fdd\u8bc1\u5bb9\u91cf\u7684\u961f\u5217\u5c42\u6b21\u7ed3\u6784\u3002\n\u7528\u6237\u53ea\u80fd\u5411\u53f6\u5b50\u961f\u5217\u63d0\u4ea4\u7533\u8bf7\u3002\n\u8fd9\u79cd\u65b9\u6cd5\u7ba1\u7406\u6bcf\u4e2a\u961f\u5217\u7684\u8d44\u6e90\u5bb9\u91cf\uff0c\u9002\u7528\u4e8e\u961f\u5217\u4e0d\u7ecf\u5e38\u53d8\u5316\u7684\u60c5\u51b5\u3002"),(0,r.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u5c06\u4ee5\u4e0b\u914d\u7f6e\u5e94\u7528\u4e8e YuniKorn \u7684 configmap\uff0c\u4ee5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," \u4e0b\u8bbe\u7f6e 3 \u4e2a\u961f\u5217"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u961f\u5217\u90fd\u6709\u4e00\u4e2a\u7279\u5b9a\u7684\u4fdd\u8bc1\u548c\u6700\u5927\u5bb9\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u5411\u4efb\u4f55\u961f\u5217\u63d0\u4ea4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: default\n    queues:\n      - name: root\n        submitacl: '*'\n        queues:\n          - name: advertisement\n            resources:\n              guaranteed:\n                memory: 500G\n                vcore: 50\n              max:\n                memory: 800G\n                vcore: 80\n          - name: search\n            resources:\n              guaranteed:\n                memory: 400G\n                vcore: 40\n              max:\n                memory: 600G\n                vcore: 60\n          - name: sandbox\n            resources:\n              guaranteed:\n                memory: 100G\n                vcore: 10\n              max:\n                memory: 100G\n                vcore: 10\n")),(0,r.kt)("h3",{id:"\u8fd0\u884c\u4e00\u4e2a\u5de5\u4f5c\u8d1f\u8f7d"},"\u8fd0\u884c\u4e00\u4e2a\u5de5\u4f5c\u8d1f\u8f7d"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5728\u7279\u5b9a\u961f\u5217\u4e2d\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f60\u9700\u8981\u5728\u6240\u6709 pod \u89c4\u683c\u4e2d\u8bbe\u7f6e\u4ee5\u4e0b\u6807\u7b7e\u3002\n\u6240\u6709\u5177\u6709\u76f8\u540c ",(0,r.kt)("inlineCode",{parentName:"p"},"applicationID")," \u6807\u7b7e\u7684 pod \u88ab\u8ba4\u4e3a\u662f\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u3002\n\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u5e94\u7528\u7a0b\u5e8f ",(0,r.kt)("inlineCode",{parentName:"p"},"my-test-app")," \u5c06\u5728\u961f\u5217 ",(0,r.kt)("inlineCode",{parentName:"p"},"root.sandbox")," \u4e2d\u8fd0\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'labels:\n  app: my-test-app\n  applicationId: "my-test-app-01"\n  queue: root.sandbox\n')),(0,r.kt)("h2",{id:"\u540d\u79f0\u7a7a\u95f4\u5230\u961f\u5217\u7684\u6620\u5c04"},"\u540d\u79f0\u7a7a\u95f4\u5230\u961f\u5217\u7684\u6620\u5c04"),(0,r.kt)("h3",{id:"\u76ee\u6807-1"},"\u76ee\u6807"),(0,r.kt)("p",null,"\u81ea\u52a8\u5c06Kubernetes\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace")," \u6620\u5c04\u5230 YuniKorn \u7684\u961f\u5217\u3002\n\u7528\u6237\u5728 Kubernetes \u4e2d\u521b\u5efa\u6240\u9700\u7684\u547d\u540d\u7a7a\u95f4\u3002\nYuniKorn k8s shim \u548c\u6838\u5fc3\u8c03\u5ea6\u5668\u4f1a\u81ea\u52a8\u4f20\u9012\u6240\u9700\u4fe1\u606f\uff0c\u5e76\u5c06\u547d\u540d\u7a7a\u95f4\u6620\u5c04\u5230\u961f\u5217\u4e2d\uff0c\u5982\u679c\u961f\u5217\u4e0d\u5b58\u5728\uff0c\u5219\u521b\u5efa\u961f\u5217\u3002\n\u8d44\u6e90\u914d\u989d\u5c06\u7531 YuniKorn \u7ba1\u7406\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 Kubernetes \u547d\u540d\u7a7a\u95f4\u914d\u989d\u3002\n\u8fd9\u786e\u5b9e\u9700\u8981\u6309\u7167\u4e0b\u9762\u7684 ",(0,r.kt)("a",{parentName:"p",href:"#Namespace-quota"},"\u8bbe\u7f6e")," \u8bbe\u7f6e\u547d\u540d\u7a7a\u95f4\uff0c\u4e0d\u9700\u8981 Kubernetes \u914d\u989d\u7684\u6267\u884c\u548c\u6807\u7b7e\u3002"),(0,r.kt)("h3",{id:"\u914d\u7f6e-1"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u5c06\u4ee5\u4e0b\u914d\u7f6e\u5e94\u7528\u4e8e YuniKorn \u7684\u914d\u7f6e\u56fe\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: default\n    placementrules:\n      - name: tag\n        value: namespace\n        create: true\n    queues:\n      - name: root\n        submitacl: '*'\n        properties:\n          application.sort.policy: stateaware\n")),(0,r.kt)("p",null,"\u8be5\u914d\u7f6e\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," \u89c4\u5219\u653e\u7f6e\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u3002\n\u9009\u62e9\u7684\u6807\u7b7e\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace")," \u6807\u7b7e\uff0c\u5b83\u7531 k8s shim \u81ea\u52a8\u6dfb\u52a0\u5230\u6240\u6709\u88ab\u521b\u5efa\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"create")," \u6807\u5fd7\u88ab\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5982\u679c\u961f\u5217\u4e0d\u5b58\u5728\uff0c\u5b83\u5c06\u89e6\u53d1\u4e0e\u547d\u540d\u7a7a\u95f4\u540c\u540d\u7684\u961f\u5217\u7684\u521b\u5efa\u3002"),(0,r.kt)("p",null,"\u81ea\u52a8\u521b\u5efa\u7684\u5b50\u961f\u5217\u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f\u5c06\u6839\u636e\u7236\u961f\u5217\u4e0a\u8bbe\u7f6e\u7684\u6392\u5e8f\u7b56\u7565\u8fdb\u884c\u6392\u5e8f\u3002\n\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"application.sort.policy")," \u5728\u6b64\u914d\u7f6e\u4e2d\u88ab\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"stateaware")," \u3002\n\u8fd9\u662f\u4e00\u4e2a\u9002\u7528\u4e8e\u6279\u5904\u7406\u4f5c\u4e1a\u7684\u7b80\u5355\u5e94\u7528\u6392\u5e8f\u7b56\u7565\uff0c\u4f60\u53ef\u4ee5\u627e\u5230\u66f4\u591a\u7684\u6587\u4ef6 ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/user_guide/sorting_policies#StateAwarePolicy"},"\u8fd9\u91cc"),"\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u4f7f\u7528 helm charts \u6765\u6539\u53d8\u914d\u7f6e\uff0c\u901a\u8fc7\u8986\u76d6\u5728\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-release/blob/master/helm-charts/yunikorn/values.yaml#L71-L81"},"helm chart template"),"\u3002"),(0,r.kt)("h3",{id:"\u547d\u540d\u7a7a\u95f4\u914d\u989d"},"\u547d\u540d\u7a7a\u95f4\u914d\u989d"),(0,r.kt)("p",null,"Kubernetes \u4e2d\u7684\u547d\u540d\u7a7a\u95f4\u5305\u542b\u914d\u989d\u4fe1\u606f\u3002\n\u5982\u679c\u5728\u547d\u540d\u7a7a\u95f4\u4e0a\u8bbe\u7f6e\u4e86\u914d\u989d\uff0cKubernetes \u5c06\u81ea\u52a8\u6267\u884c\u8be5\u914d\u989d\u3002\n\u5728 YuniKorn \u88ab\u7528\u4e8e\u6267\u884c\u914d\u989d\u7684\u60c5\u51b5\u4e0b\uff0c\u5fc5\u987b\u5728\u547d\u540d\u7a7a\u95f4\u4e0a\u8bbe\u7f6e\u914d\u989d\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5141\u8bb8\u5728\u547d\u540d\u7a7a\u95f4\u4e0a\u6307\u5b9a\u914d\u989d\uff0c\u5e94\u5728\u547d\u540d\u7a7a\u95f4\u5bf9\u8c61\u4e2d\u8bbe\u7f6e\u4ee5\u4e0b\u6ce8\u91ca\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'yunikorn.apache.org/namespace.quota: "{\\"cpu\\": \\"64\\", \\"memory\\": \\"100G\\", \\"nvidia.com/gpu\\": \\"1\\"}"\n')),(0,r.kt)("p",null,"YuniKorn \u5c06\u89e3\u6790\u8fd9\u4e9b\u6ce8\u91ca\uff0c\u5e76\u8bbe\u7f6e\u6620\u5c04\u5230\u8be5\u547d\u540d\u7a7a\u95f4\u7684\u961f\u5217\u7684\u6700\u5927\u5bb9\u91cf\u3002\n\u6307\u5b9a\u7684\u503c\u9075\u5faa\u6807\u51c6\u7684 Kubernetes \u683c\u5f0f\u548c\u5355\u4f4d\u89c4\u8303\u3002\n\u6ce8\u91ca\u503c\u5fc5\u987b\u662f\u4e00\u4e2a\u7b26\u5408 json \u7684\u5b57\u7b26\u4e32\u3002\u786e\u4fdd\u53cc\u5f15\u53f7\u88ab\u6b63\u786e\u8f6c\u4e49\uff0c\u4ee5\u514d\u9020\u6210\u4efb\u4f55\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u5c06\u628a\u6620\u5c04\u5230\u6ce8\u91ca\u547d\u540d\u7a7a\u95f4\u7684\u961f\u5217\u9650\u5236\u5728 64 \u4e2a CPU\u3001100GB \u5185\u5b58\u548c 1 \u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"nvidia.com/gpu"),"\u3002"),(0,r.kt)("p",null,"[\u5df2\u5e9f\u5f03]","\n\u4ee5\u4e0b\u6ce8\u91ca\u5df2\u88ab\u5e9f\u5f03\uff0c\u5e76\u5c06\u5728\u4e0b\u4e00\u4e2a\u4e3b\u8981\u7248\u672c\u4e2d\u88ab\u5220\u9664\u3002\n\u5b83\u4eec\u53ea\u652f\u6301\u6620\u5c04\u5185\u5b58\u548ccpu\uff0c\u4e0d\u652f\u6301\u5176\u4ed6\u8d44\u6e90\u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'yunikorn.apache.org/namespace.max.cpu: "64"\nyunikorn.apache.org/namespace.max.memory: "100Gi"\n')),(0,r.kt)("p",null,"\u5e9f\u5f03\u6ce8\u91ca\u7684\u4f8b\u5b50\u5c06\u628a\u961f\u5217\u914d\u989d\u8bbe\u7f6e\u4e3a 64 \u4e2a CPU \u548c 100GB \u5185\u5b58\u3002"),(0,r.kt)("h3",{id:"\u8fd0\u884c\u4e00\u4e2a\u5de5\u4f5c\u8d1f\u8f7d-1"},"\u8fd0\u884c\u4e00\u4e2a\u5de5\u4f5c\u8d1f\u8f7d"),(0,r.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\uff0c\u4ee5\u53ca\u4f5c\u4e3a\u5e94\u7528\u7a0b\u5e8f\u4e00\u90e8\u5206\u7684 pod\uff0c\u53ef\u4ee5\u5728\u6ca1\u6709\u7279\u5b9a\u6807\u7b7e\u7684\u60c5\u51b5\u4e0b\u63d0\u4ea4\u3002\nYuniKorn \u5c06\u81ea\u52a8\u6dfb\u52a0\u6240\u9700\u7684\u6807\u7b7e\u3002\n\u5982\u679c\u9700\u8981\uff0c\u914d\u7f6e\u7684\u653e\u7f6e\u89c4\u5219\u5c06\u521b\u5efa\u961f\u5217\uff0c\u5e76\u5c06\u5e94\u7528\u7a0b\u5e8f\u6dfb\u52a0\u5230\u961f\u5217\u4e2d\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u88ab\u63d0\u4ea4\u5230\u547d\u540d\u7a7a\u95f4 ",(0,r.kt)("inlineCode",{parentName:"p"},"development")," \uff0c\u90a3\u4e48\u8be5\u5e94\u7528\u7a0b\u5e8f\u5c06\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"root.development")," \u961f\u5217\u4e2d\u8fd0\u884c\u3002"),(0,r.kt)("h2",{id:"\u547d\u540d\u7a7a\u95f4\u7684\u7236\u961f\u5217\u6620\u5c04"},"\u547d\u540d\u7a7a\u95f4\u7684\u7236\u961f\u5217\u6620\u5c04"),(0,r.kt)("h3",{id:"\u76ee\u6807-2"},"\u76ee\u6807"),(0,r.kt)("p",null,"\u5c3d\u7ba1\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace")," \u6807\u7b7e\u7684\u6807\u7b7e\u653e\u7f6e\u89c4\u5219\u80fd\u591f\u5c06\u5e94\u7528\u7a0b\u5e8f\u653e\u7f6e\u5728\u961f\u5217\u4e2d\uff0c\u4f46\u8fd9\u5728\u6240\u6709\u8bbe\u7f6e\u4e2d\u53ef\u80fd\u662f\u4e0d\u591f\u7684\u3002\n\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f8b\u5982\u591a\u79df\u6237\uff0c\u547d\u540d\u7a7a\u95f4\u9700\u8981\u88ab\u5f52\u4e3a\u4e00\u7ec4\u3002\n\u7ba1\u7406\u5458\u53ef\u4ee5\u5bf9\u547d\u540d\u7a7a\u95f4\u8fdb\u884c\u6ce8\u91ca\uff0c\u5982\u679c\u8bbe\u7f6e\u4e86\u653e\u7f6e\u89c4\u5219\uff0c\u53ef\u4ee5\u6839\u636e\u591a\u4e2a\u6ce8\u91ca\u52a8\u6001\u653e\u7f6e\u5e94\u7528\u7a0b\u5e8f\u3002\nYuniKorn \u4e0d\u80fd\u4e5f\u4e0d\u4f1a\u5c06\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u7684\u6240\u6709\u6ce8\u89e3\u6dfb\u52a0\u5230\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5e2e\u52a9\u652f\u6301\u8fd9\u79cd\u5206\u7ec4\u60c5\u51b5\uff0c\u53ef\u4ee5\u5728\u547d\u540d\u7a7a\u95f4\u4e0a\u6807\u8bb0\u4e00\u4e2a\u7236\u961f\u5217\u3002  "),(0,r.kt)("h3",{id:"\u914d\u7f6e-2"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u529f\u80fd\u7684\u914d\u7f6e\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6620\u5c04\u89c4\u5219"),(0,r.kt)("li",{parentName:"ol"},"\u547d\u540d\u7a7a\u95f4\u6ce8\u91ca")),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5728 YuniKorn \u7684 configmap \u4e0a\u8bbe\u7f6e\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n   - name: default\n     placementrules:\n        - name: tag\n          value: namespace\n          create: true\n          parent:\n             name: tag\n             value: namespace.parentqueue\n     queues:\n        - name: root\n          queues:\n             - name: production\n               parent: true\n             - name: development\n               parent: true\n")),(0,r.kt)("p",null,"\u7528\u4e8e\u547d\u540d\u7a7a\u95f4\u5230\u961f\u5217\u6620\u5c04\u7684\u914d\u7f6e\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"#%E5%90%8D%E7%A7%B0%E7%A9%BA%E9%97%B4%E5%88%B0%E9%98%9F%E5%88%97%E7%9A%84%E6%98%A0%E5%B0%84"},"\u4e0a\u6587")," \u76f8\u540c\u3002\n\u4f5c\u4e3a\u653e\u7f6e\u89c4\u5219\u7684\u6269\u5c55\uff0c\u6dfb\u52a0\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"parent")," \u89c4\u5219\u4ee5\u652f\u6301\u5206\u7ec4\u3002\n\u7236\u7ea7\u89c4\u5219\u7528\u4e8e\u751f\u6210\u5c42\u6b21\u7ed3\u6784\u4e2d\u7684\u7236\u7ea7\uff0c\u6216\u4e0a\u9762\u7684\u961f\u5217\u3002\n\u8be5\u89c4\u5219\u4f7f\u7528\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u6807\u7b7e ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace.parentqueue")," \u6765\u751f\u6210\u7236\u961f\u5217\u540d\u79f0\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"namespace.parentqueue")," \u6807\u7b7e\u7531 Kubernetes shim \u81ea\u52a8\u6dfb\u52a0\uff0c\u4f46\u786e\u5b9e\u9700\u8981\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u6ce8\u91ca\uff08\u89c1\u4e0b\u6587\uff09\u3002"),(0,r.kt)("p",null,"\u5728\u7ed9\u51fa\u7684\u89c4\u5219\u914d\u7f6e\u793a\u4f8b\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"create")," \u6807\u5fd7\u6ca1\u6709\u5728\u7236\u89c4\u5219\u4e0a\u8bbe\u7f6e\u3002\n\u8fd9\u610f\u5473\u7740\u7236\u961f\u5217\u5fc5\u987b\u5b58\u5728\u4e8e\u914d\u7f6e\u4e2d\uff0c\u5426\u5219\u5e94\u7528\u63d0\u4ea4\u5c06\u5931\u8d25\u3002\n\u5bf9\u4e8e\u8fd9\u4e2a\u4f8b\u5b50\u7684\u914d\u7f6e\uff0c\u8fd9\u610f\u5473\u7740\u7236\u961f\u7684\u652f\u6301\u503c\u88ab\u9650\u5236\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"production")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"development"),"\u3002"),(0,r.kt)("p",null,"\u4e0d\u80fd\u4f7f\u7528\u4efb\u4f55\u8fd9\u4e9b\u6620\u5c04\u5728\u7236\u961f\u5217\u4e0a\u8bbe\u7f6e\u914d\u989d\u3002\n\u6839\u636e\u524d\u9762\u63d0\u4f9b\u7684\u547d\u540d\u7a7a\u95f4\u6620\u5c04\uff0c\u4e0e\u547d\u540d\u7a7a\u95f4\u76f8\u5173\u7684\u914d\u989d\u8bbe\u7f6e\u5728\u547d\u540d\u7a7a\u95f4\u961f\u5217\u4e0a\uff0c\u800c\u4e0d\u662f\u7236\u961f\u3002"),(0,r.kt)("p",null,"\u7236\u961f\u5217\u7684\u914d\u989d\u5fc5\u987b\u603b\u662f\u76f4\u63a5\u5728\u914d\u7f6e\u4e2d\u8bbe\u7f6e\u3002\n\u8fd9\u9700\u8981\u5728\u7236\u89c4\u5219\u4e0a\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," \u6807\u5fd7\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,r.kt)("h3",{id:"\u547d\u540d\u7a7a\u95f4\u7236\u961f\u5217"},"\u547d\u540d\u7a7a\u95f4\u7236\u961f\u5217"),(0,r.kt)("p",null,"\u4e0e\u547d\u540d\u7a7a\u95f4\u540d\u79f0\u672c\u8eab\u76f8\u53cd\uff0c\u5e76\u4e0e\u914d\u989d\u8bbe\u7f6e\u76f8\u4e00\u81f4\uff0c\u547d\u540d\u7a7a\u95f4\u9700\u8981\u88ab\u6ce8\u89e3\u4ee5\u4f7f\u7528\u7236\u961f\u5217\u6620\u5c04\u3002\n\u547d\u540d\u7a7a\u95f4\u540d\u79f0\u5728 Kubernetes \u4e2d\u5fc5\u987b\u662f\u552f\u4e00\u7684\uff0c\u8fd9\u4e0d\u53d7\u6b64\u6ce8\u91ca\u7684\u5f71\u54cd\u3002\n\u76f8\u540c\u7684\u6ce8\u89e3\u503c\u53ef\u4ee5\u7528\u4e8e\u591a\u4e2a\u547d\u540d\u7a7a\u95f4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"yunikorn.apache.org/parentqueue: root.production\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u6ce8\u91ca\u5c06\u628a\u7236\u961f\u5217\u6620\u5c04\u5230\u73b0\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"root.production")," \u961f\u5217\u3002\n\u6ce8\u610f\uff0c\u5982\u679c\u9700\u8981\u7684\u8bdd\uff0c\u89c4\u5219\u5c06\u5b8c\u5168\u9650\u5b9a\u540d\u79f0\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u7701\u7565\u6ce8\u91ca\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"root.")," \u90e8\u5206\u3002\n\u5982\u679c\u6ce8\u91ca\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"root.")," \u5f00\u5934\uff0c\u7cfb\u7edf\u4f1a\u8ba4\u4e3a\u8fd9\u662f\u4e00\u4e2a\u5b8c\u5168\u5408\u683c\u7684\u961f\u5217\u540d\u79f0\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u4f7f\u56fe\u7247\u66f4\u5b8c\u6574\uff0c\u8fd9\u91cc\u6709\u4e00\u5f20\u56fe\u7247\uff0c\u663e\u793a\u4e86 YuniKorn \u4e2d\u4ece Kubernetes \u547d\u540d\u7a7a\u95f4\u5230\u961f\u5217\u7684\u6620\u5c04\u3002\n\u5b83\u4f7f\u7528\u4e86 Kubernetes \u4e2d\u547d\u540d\u7a7a\u95f4\u7684\u6ce8\u91ca\uff0c\u4ee5\u53ca\u6620\u5c04\u89c4\u5219\u7684\u914d\u7f6e\u793a\u4f8b\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"finance")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"sales"),"\u547d\u540d\u7a7a\u95f4\u6210\u4e3a\u961f\u5217\uff0c\u5f52\u5165\u7236\u961f\u5217 ",(0,r.kt)("inlineCode",{parentName:"p"},"production")," \u4e4b\u4e0b\u3002\n\u547d\u540d\u7a7a\u95f4 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," \u88ab\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"development")," \u7236\u961f\u5217\u4e0b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u961f\u5217\u914d\u989d",src:t(53068).Z,width:"1600",height:"624"})),(0,r.kt)("h3",{id:"\u8fd0\u884c\u4e00\u4e2a\u5de5\u4f5c\u8d1f\u8f7d-2"},"\u8fd0\u884c\u4e00\u4e2a\u5de5\u4f5c\u8d1f\u8f7d"),(0,r.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\uff0c\u4ee5\u53ca\u4f5c\u4e3a\u5e94\u7528\u7a0b\u5e8f\u4e00\u90e8\u5206\u7684 pod\uff0c\u53ef\u4ee5\u5728\u6ca1\u6709\u7279\u5b9a\u6807\u7b7e\u6216\u66f4\u6539\u7684\u60c5\u51b5\u4e0b\u63d0\u4ea4\u3002\nYuniKorn \u5c06\u6dfb\u52a0\u6807\u7b7e\uff0c\u5b89\u7f6e\u89c4\u5219\u5c06\u505a\u5176\u4f59\u7684\u4e8b\u60c5\u3002\n\u914d\u7f6e\u7684\u653e\u7f6e\u89c4\u5219\u5c06\u521b\u5efa\u961f\u5217\uff08\u5982\u679c\u9700\u8981\uff09\uff0c\u5e76\u5c06\u5e94\u7528\u7a0b\u5e8f\u6dfb\u52a0\u5230\u961f\u5217\u4e2d\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e\u547d\u540d\u7a7a\u95f4 ",(0,r.kt)("inlineCode",{parentName:"p"},"finance")," \u88ab\u6ce8\u91ca\u4e3a\u793a\u4f8b\u503c\uff0c\u5e76\u4e14\u89c4\u5219\u5df2\u7ecf\u5230\u4f4d\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"finance")," \u547d\u540d\u7a7a\u95f4\u7684\u5e94\u7528\u7a0b\u5e8f\u5c06\u5728\u52a8\u6001\u521b\u5efa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"root.production.finance")," \u961f\u5217\u4e2d\u8fd0\u884c\u3002"))}k.isMDXComponent=!0},53068:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/namespace-mapping-703b2384a21c2e401291fbb49acdb1f4.png"},60106:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/queue-resource-quotas-02ec11ddedad1f2057bbc4d3ef1c900a.png"}}]);