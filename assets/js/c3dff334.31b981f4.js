"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97551],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return n?t.createElement(f,a(a({ref:r},c),{},{components:n})):t.createElement(f,a({ref:r},c))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29809:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var t=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],i={id:"cluster",title:"Cluster"},l=void 0,u={unversionedId:"api/cluster",id:"api/cluster",title:"Cluster",description:"\x3c!--",source:"@site/docs/api/cluster.md",sourceDirName:"api",slug:"/api/cluster",permalink:"/docs/next/api/cluster",draft:!1,tags:[],version:"current",frontMatter:{id:"cluster",title:"Cluster"},sidebar:"docs",previous:{title:"Run MPI Jobs",permalink:"/docs/next/user_guide/workloads/run_mpi"},next:{title:"Scheduler",permalink:"/docs/next/api/scheduler"}},c={},p=[{value:"Clusters",id:"clusters",level:2},{value:"Success response",id:"success-response",level:3},{value:"Error response",id:"error-response",level:3}],m={toc:p},d="wrapper";function f(e){var r=e.components,n=(0,o.Z)(e,a);return(0,s.kt)(d,(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"clusters"},"Clusters"),(0,s.kt)("p",null,"Returns general information about the clusters managed by the YuniKorn Scheduler.\nThe response includes build information about resource managers.  "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"URL")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"/ws/v1/clusters")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Method")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"GET")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Auth required")," : NO"),(0,s.kt)("h3",{id:"success-response"},"Success response"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("p",null,"As an example, here is a response from a cluster with 1 resource manager."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "startTime": 1697100824863892713,\n        "rmBuildInformation": [\n            {\n                "arch": "amd64",\n                "buildDate": "2023-09-04T18:11:43+0800",\n                "buildVersion": "latest",\n                "coreSHA": "0ecf24d2aad2",\n                "goVersion": "1.21",\n                "isPluginVersion": "false",\n                "rmId": "mycluster",\n                "shimSHA": "8b26c373b4b5",\n                "siSHA": "e7622cf54e95"\n            }\n        ],\n        "partition": "default",\n        "clusterName": "kubernetes"\n    }\n]\n')),(0,s.kt)("h3",{id:"error-response"},"Error response"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"500 Internal Server Error")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status_code": 500,\n    "message": "system error message. for example, json: invalid UTF-8 in string: ..",\n    "description": "system error message. for example, json: invalid UTF-8 in string: .."\n}\n')))}f.isMDXComponent=!0}}]);