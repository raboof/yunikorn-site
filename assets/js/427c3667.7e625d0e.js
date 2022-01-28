"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3155],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),a=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=a(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=a(t),m=o,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||i;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=p;var u={};for(var d in n)hasOwnProperty.call(n,d)&&(u[d]=n[d]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var a=2;a<i;a++)l[a]=t[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},84859:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return a},toc:function(){return s},default:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),l=["components"],u={id:"deployment_modes",title:"Deployment Modes"},d=void 0,a={unversionedId:"user_guide/deployment_modes",id:"user_guide/deployment_modes",title:"Deployment Modes",description:"\x3c!--",source:"@site/docs/user_guide/deployment_modes.md",sourceDirName:"user_guide",slug:"/user_guide/deployment_modes",permalink:"/docs/next/user_guide/deployment_modes",tags:[],version:"current",frontMatter:{id:"deployment_modes",title:"Deployment Modes"},sidebar:"docs",previous:{title:"Features",permalink:"/docs/next/get_started/core_features"},next:{title:"Partition and Queue Configuration",permalink:"/docs/next/user_guide/queue_config"}},s=[{value:"YuniKorn deployment modes",id:"yunikorn-deployment-modes",children:[],level:2},{value:"Which version should I use?",id:"which-version-should-i-use",children:[{value:"Standard mode",id:"standard-mode",children:[],level:3},{value:"Plugin mode",id:"plugin-mode",children:[],level:3}],level:2}],c={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"yunikorn-deployment-modes"},"YuniKorn deployment modes"),(0,i.kt)("p",null,"YuniKorn can be deployed in two different modes: standard and plugin. In standard mode, YuniKorn runs as a customized\nKubernetes scheduler. In plugin mode, YuniKorn is implemented as a set of plugins on top of the default Kubernetes\nscheduling framework."),(0,i.kt)("p",null,"In both cases, it is recommended to run the admission controller as well, as this will ensure that only a single\nscheduler is active within your Kubernetes cluster. In this mode, the default Kubernetes scheduler (which is always running)\nwill be bypassed for all pods except YuniKorn itself."),(0,i.kt)("h2",{id:"which-version-should-i-use"},"Which version should I use?"),(0,i.kt)("h3",{id:"standard-mode"},"Standard mode"),(0,i.kt)("p",null,"Standard mode is currently the default. It is stable, efficient, and very performant. It is well-suited for\ndeployments where most if not all pods are leveraging the queueing features of YuniKorn."),(0,i.kt)("h3",{id:"plugin-mode"},"Plugin mode"),(0,i.kt)("p",null,"Plugin mode is a new deployment model where the scheduler is implemented on top of the default Kubernetes scheduling\nlogic, allowing for better compatibility with the default Kubernetes scheduler. It is well-suited for mixed\nworkloads (traditional Kubernetes as well as queued applications)."),(0,i.kt)("p",null,"Plugin mode is currently very new and has therefore not yet reached the maturity level of standard mode."),(0,i.kt)("p",null,"To activate plugin mode when deploying with Helm, set the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"enableSchedulerPlugin")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."))}p.isMDXComponent=!0}}]);