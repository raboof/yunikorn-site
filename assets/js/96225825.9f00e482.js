"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64818],{58860:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>m});var t=r(37953);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return r?t.createElement(m,s(s({ref:n},c),{},{components:r})):t.createElement(m,s({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},47549:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=r(72994),a=(r(37953),r(58860));const o={id:"cluster",title:"Cluster"},s=void 0,i={unversionedId:"api/cluster",id:"version-1.2.0/api/cluster",title:"Cluster",description:"\x3c!--",source:"@site/versioned_docs/version-1.2.0/api/cluster.md",sourceDirName:"api",slug:"/api/cluster",permalink:"/docs/1.2.0/api/cluster",draft:!1,tags:[],version:"1.2.0",frontMatter:{id:"cluster",title:"Cluster"},sidebar:"docs",previous:{title:"Run MPI Jobs",permalink:"/docs/1.2.0/user_guide/workloads/run_mpi"},next:{title:"Scheduler",permalink:"/docs/1.2.0/api/scheduler"}},l={},p=[{value:"Clusters",id:"clusters",level:2},{value:"Success response",id:"success-response",level:3},{value:"Error response",id:"error-response",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"clusters"},"Clusters"),(0,a.yg)("p",null,"Returns general information about the clusters managed by the YuniKorn Scheduler. Information includes number of (total, failed, pending, running, completed) applications and containers and the build information of resource managers.  "),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"URL")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"/ws/v1/clusters")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Method")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"GET")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Auth required")," : NO"),(0,a.yg)("h3",{id:"success-response"},"Success response"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Code")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Content examples")),(0,a.yg)("p",null,"As an example, here is a response from a 2-node cluster with 3 applications and 4 running containers and 1 resource manager."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "startTime": 1649167576110754000,\n        "rmBuildInformation": [\n            {\n                "buildDate": "2022-02-21T19:09:16+0800",\n                "buildVersion": "latest",\n                "isPluginVersion": "false",\n                "rmId": "rm-123"\n            }\n        ],\n        "partition": "default",\n        "clusterName": "kubernetes",\n        "totalApplications": "3",\n        "failedApplications": "1",\n        "pendingApplications": "",\n        "runningApplications": "3",\n        "completedApplications": "",\n        "totalContainers": "4",\n        "failedContainers": "",\n        "pendingContainers": "",\n        "runningContainers": "4",\n        "activeNodes": "2",\n        "totalNodes": "2",\n        "failedNodes": ""\n    }\n]\n')),(0,a.yg)("h3",{id:"error-response"},"Error response"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Code")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"500 Internal Server Error")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Content examples")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status_code": 500,\n    "message": "system error message. for example, json: invalid UTF-8 in string: ..",\n    "description": "system error message. for example, json: invalid UTF-8 in string: .."\n}\n')))}d.isMDXComponent=!0}}]);