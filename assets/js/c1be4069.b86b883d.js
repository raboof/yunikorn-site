"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83738],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||u;return n?r.createElement(k,o(o({ref:t},l),{},{components:n})):r.createElement(k,o({ref:t},l))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<u;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18821:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),u=(n(67294),n(3905)),o=["components"],i={id:"queue",title:"Queue"},p=void 0,c={unversionedId:"metrics/queue",id:"metrics/queue",title:"Queue",description:"\x3c!--",source:"@site/docs/metrics/queue.md",sourceDirName:"metrics",slug:"/metrics/queue",permalink:"/docs/next/metrics/queue",draft:!1,tags:[],version:"current",frontMatter:{id:"queue",title:"Queue"},sidebar:"docs",previous:{title:"Runtime",permalink:"/docs/next/metrics/runtime"},next:{title:"Troubleshooting",permalink:"/docs/next/user_guide/troubleshooting"}},l={},s=[{value:"Queue",id:"queue",level:2},{value:"Application",id:"application",level:3},{value:"Resource",id:"resource",level:3}],m={toc:s},d="wrapper";function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,u.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"queue"},"Queue"),(0,u.kt)("h3",{id:"application"},"Application"),(0,u.kt)("p",null,"Eech queue has a ",(0,u.kt)("inlineCode",{parentName:"p"},"<queue_name> queue_app")," metric to trace the applications in the queue.\n",(0,u.kt)("inlineCode",{parentName:"p"},"<queue_name> queue_app")," metrics records the number of applications in different states.\nThese application states include ",(0,u.kt)("inlineCode",{parentName:"p"},"running"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"accepted"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"rejected"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"failed")," and ",(0,u.kt)("inlineCode",{parentName:"p"},"completed"),".\n",(0,u.kt)("inlineCode",{parentName:"p"},"<queue_name> queue_app")," metrics record container states including ",(0,u.kt)("inlineCode",{parentName:"p"},"released"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"allocated"),".\n",(0,u.kt)("strong",{parentName:"p"},"Metric Type"),": ",(0,u.kt)("inlineCode",{parentName:"p"},"guage")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Namespace"),": ",(0,u.kt)("inlineCode",{parentName:"p"},"yunikorn")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Subsystem"),": ",(0,u.kt)("inlineCode",{parentName:"p"},"<queue name>")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"TYPE"),": ",(0,u.kt)("inlineCode",{parentName:"p"},"yunikorn_<queue name>_queue_app")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'yunikorn_root_default_queue_app{state="accepted"} 3\nyunikorn_root_default_queue_app{state="running"} 3\n')),(0,u.kt)("h3",{id:"resource"},"Resource"),(0,u.kt)("p",null,"The ",(0,u.kt)("inlineCode",{parentName:"p"},"<queue_name> queue_resource")," metric to trace the resource in the queue.\nThese resource states include ",(0,u.kt)("inlineCode",{parentName:"p"},"guaranteed"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"max"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"allocated"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"pending"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"preempting"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Metric Type"),": ",(0,u.kt)("inlineCode",{parentName:"p"},"guage")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Namespace"),": ",(0,u.kt)("inlineCode",{parentName:"p"},"yunikorn")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Subsystem"),": ",(0,u.kt)("inlineCode",{parentName:"p"},"<queue name>")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"TYPE"),": ",(0,u.kt)("inlineCode",{parentName:"p"},"yunikorn_<queue name>_queue_resource")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'yunikorn_root_queue_resource{resource="ephemeral-storage",state="max"} 9.41009558e+10\nyunikorn_root_queue_resource{resource="hugepages-1Gi",state="max"} 0\nyunikorn_root_queue_resource{resource="hugepages-2Mi",state="max"} 0\nyunikorn_root_queue_resource{resource="memory",state="max"} 1.6223076352e+10\nyunikorn_root_queue_resource{resource="pods",state="max"} 110\nyunikorn_root_queue_resource{resource="vcore",state="max"} 8000\n')))}k.isMDXComponent=!0}}]);