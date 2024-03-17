"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19393],{58860:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>g});var t=n(37953);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=t.createContext({}),p=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(i.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=s,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return n?t.createElement(g,a(a({ref:r},u),{},{components:n})):t.createElement(g,a({ref:r},u))}));function g(e,r){var n=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[c]="string"==typeof e?e:s,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41164:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=n(72994),s=(n(37953),n(58860));const o={id:"cluster",title:"Cluster"},a=void 0,l={unversionedId:"api/cluster",id:"version-1.5.0/api/cluster",title:"Cluster",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.0/api/cluster.md",sourceDirName:"api",slug:"/api/cluster",permalink:"/docs/api/cluster",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"cluster",title:"Cluster"},sidebar:"docs",previous:{title:"Run MPI Jobs",permalink:"/docs/user_guide/workloads/run_mpi"},next:{title:"Scheduler",permalink:"/docs/api/scheduler"}},i={},p=[{value:"Clusters",id:"clusters",level:2},{value:"Success response",id:"success-response",level:3},{value:"Error response",id:"error-response",level:3}],u={toc:p},c="wrapper";function m(e){let{components:r,...n}=e;return(0,s.yg)(c,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"clusters"},"Clusters"),(0,s.yg)("p",null,"Returns general information about the clusters managed by the YuniKorn Scheduler.\nThe response includes build information about resource managers.  "),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"URL")," : ",(0,s.yg)("inlineCode",{parentName:"p"},"/ws/v1/clusters")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Method")," : ",(0,s.yg)("inlineCode",{parentName:"p"},"GET")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Auth required")," : NO"),(0,s.yg)("h3",{id:"success-response"},"Success response"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Code")," : ",(0,s.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Content examples")),(0,s.yg)("p",null,"As an example, here is a response from a cluster with 1 resource manager."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "startTime": 1697100824863892713,\n        "rmBuildInformation": [\n            {\n                "arch": "amd64",\n                "buildDate": "2023-09-04T18:11:43+0800",\n                "buildVersion": "latest",\n                "coreSHA": "0ecf24d2aad2",\n                "goVersion": "1.21",\n                "isPluginVersion": "false",\n                "rmId": "mycluster",\n                "shimSHA": "8b26c373b4b5",\n                "siSHA": "e7622cf54e95"\n            }\n        ],\n        "partition": "default",\n        "clusterName": "kubernetes"\n    }\n]\n')),(0,s.yg)("h3",{id:"error-response"},"Error response"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Code")," : ",(0,s.yg)("inlineCode",{parentName:"p"},"500 Internal Server Error")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Content examples")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status_code": 500,\n    "message": "system error message. for example, json: invalid UTF-8 in string: ..",\n    "description": "system error message. for example, json: invalid UTF-8 in string: .."\n}\n')))}m.isMDXComponent=!0}}]);