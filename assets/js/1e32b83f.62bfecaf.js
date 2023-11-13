"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},50129:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={id:"rn-1.1.0",title:"Release Announcement v1.1.0"},o=void 0,s={type:"mdx",permalink:"/release-announce/1.1.0",source:"@site/src/pages/release-announce/1.1.0.md",title:"Release Announcement v1.1.0",description:"\x3c!--",frontMatter:{id:"rn-1.1.0",title:"Release Announcement v1.1.0"}},l=[{value:"Overview",id:"overview",level:2},{value:"Highlights",id:"highlights",level:2},{value:"REST API documentation and enhancements",id:"rest-api-documentation-and-enhancements",level:3},{value:"Multi-architecture build",id:"multi-architecture-build",level:3},{value:"Recovery stabilization",id:"recovery-stabilization",level:3},{value:"DaemonSet scheduling",id:"daemonset-scheduling",level:3},{value:"e2e testing improvements",id:"e2e-testing-improvements",level:3},{value:"Community",id:"community",level:2}],c={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-announcement-v110"},"Release Announcement v1.1.0"),(0,a.kt)("p",null,"We are pleased to announce that the Apache YuniKorn community has voted to release 1.1.0. Apache YuniKorn is a standalone resource scheduler, designed for managing, and scheduling Big Data workloads on container orchestration frameworks like Kubernetes for on-prem and on-cloud use cases."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Apache YuniKorn community has fixed 89 ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/issues/?filter=12351692"},"JIRAs")," in this release. "),(0,a.kt)("p",null,"Release manager: Peter Bacsko"),(0,a.kt)("p",null,"Release date: 2022-09-08"),(0,a.kt)("h2",{id:"highlights"},"Highlights"),(0,a.kt)("h3",{id:"rest-api-documentation-and-enhancements"},"REST API documentation and enhancements"),(0,a.kt)("p",null,"The REST API now can return the details of a ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1217"},"specific application")," and list the ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1263"},"pending allocations")," of an application.\nDocumentation of the REST API have also been enhanced."),(0,a.kt)("h3",{id:"multi-architecture-build"},"Multi-architecture build"),(0,a.kt)("p",null,"With the ARM architecture becoming more popular, we now ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1215"},"build")," binaries and Docker images for both ",(0,a.kt)("inlineCode",{parentName:"p"},"amd64")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"arm64")," targets."),(0,a.kt)("h3",{id:"recovery-stabilization"},"Recovery stabilization"),(0,a.kt)("p",null,"Several issues have been identified during the recovery phase of Yunikorn which mostly affected gang scheduling (eg. running placeholders getting replaced ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1197"},"immediately"),") but also Spark ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1217"},"workloads"),". "),(0,a.kt)("h3",{id:"daemonset-scheduling"},"DaemonSet scheduling"),(0,a.kt)("p",null,"Scheduling of DaemonSet pods were problematic before this release. If the node was full, then those pods might not have been scheduled. However, it is usually important to start DeamonSet pods as they often perform tasks that are necessary on all nodes like log collection and aggregation, resource monitoring, storage management, etc. meaning they have priority over regular application pods."),(0,a.kt)("p",null,"The implementation of ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1085"},"YUNIKORN-1085")," ensures that we have a predictable preemption mechanism which terminates running pods if necessary to make room for DaemonSet pods."),(0,a.kt)("h3",{id:"e2e-testing-improvements"},"e2e testing improvements"),(0,a.kt)("p",null,"Additional end-to-end tests have been ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-751"},"written")," to increase the coverage of Yunikorn as we support more K8s versions."),(0,a.kt)("h2",{id:"community"},"Community"),(0,a.kt)("p",null,"The Apache YuniKorn community is pleased to welcome new PMC members Peter Bacsko, Manikandan Ramaraj and committer Ted Lin."))}u.isMDXComponent=!0}}]);