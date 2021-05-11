(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{168:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),o=(t(0),t(203)),c={id:"cluster",title:"Cluster"},i={unversionedId:"api/cluster",id:"api/cluster",isDocsHomePage:!1,title:"Cluster",description:"\x3c!--",source:"@site/docs/api/cluster.md",slug:"/api/cluster",permalink:"/docs/next/api/cluster",version:"current",sidebar:"docs",previous:{title:"Run Tensorflow Jobs",permalink:"/docs/next/user_guide/workloads/run_tf"},next:{title:"Scheduler",permalink:"/docs/next/api/scheduler"}},s=[{value:"Clusters",id:"clusters",children:[{value:"Success response",id:"success-response",children:[]}]},{value:"Clusters utilization",id:"clusters-utilization",children:[{value:"Success response",id:"success-response-1",children:[]}]}],l={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"clusters"},"Clusters"),Object(o.b)("p",null,"Returns general information about the clusters managed by the YuniKorn Scheduler. Information includes number of (total, failed, pending, running, completed) applications and containers.  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL")," : ",Object(o.b)("inlineCode",{parentName:"p"},"/ws/v1/clusters")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")," : ",Object(o.b)("inlineCode",{parentName:"p"},"GET")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Auth required")," : NO"),Object(o.b)("h3",{id:"success-response"},"Success response"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code")," : ",Object(o.b)("inlineCode",{parentName:"p"},"200 OK")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Content examples")),Object(o.b)("p",null,"As an example, here is a response from a 2-node cluster with 3 applications and 4 running containers."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "clusterName": "kubernetes",\n        "totalApplications": "3",\n        "failedApplications": "1",\n        "pendingApplications": "",\n        "runningApplications": "3",\n        "completedApplications": "",\n        "totalContainers": "4",\n        "failedContainers": "",\n        "pendingContainers": "",\n        "runningContainers": "4",\n        "activeNodes": "2",\n        "totalNodes": "2",\n        "failedNodes": ""\n    }\n]\n')),Object(o.b)("h2",{id:"clusters-utilization"},"Clusters utilization"),Object(o.b)("p",null,"Returns statistical data related the cluster resource utilization"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL")," : ",Object(o.b)("inlineCode",{parentName:"p"},"/ws/v1/clusters/utilization")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")," : ",Object(o.b)("inlineCode",{parentName:"p"},"GET")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Auth required")," : NO"),Object(o.b)("h3",{id:"success-response-1"},"Success response"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code")," : ",Object(o.b)("inlineCode",{parentName:"p"},"200 OK")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Content examples")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "partition": "[mycluster]default",\n        "utilization": [\n            {\n                "type": "memory",\n                "total": 5076,\n                "used": 1500,\n                "usage": "29%"\n            },\n            {\n                "type": "vcore",\n                "total": 4000,\n                "used": 300,\n                "usage": "7%"\n            }\n        ]\n    }\n]\n')))}p.isMDXComponent=!0},203:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return t?a.a.createElement(m,i(i({ref:n},l),{},{components:t})):a.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);