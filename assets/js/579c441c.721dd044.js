"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8010],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=o,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},24730:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"usergroup_resolution",title:"User & Group Resolution"},u=void 0,l={unversionedId:"user_guide/usergroup_resolution",id:"user_guide/usergroup_resolution",title:"User & Group Resolution",description:"\x3c!--",source:"@site/docs/user_guide/usergroup_resolution.md",sourceDirName:"user_guide",slug:"/user_guide/usergroup_resolution",permalink:"/docs/next/user_guide/usergroup_resolution",draft:!1,tags:[],version:"current",frontMatter:{id:"usergroup_resolution",title:"User & Group Resolution"},sidebar:"docs",previous:{title:"App Placement Rules",permalink:"/docs/next/user_guide/placement_rules"},next:{title:"Sorting Policies",permalink:"/docs/next/user_guide/sorting_policies"}},p={},d=[{value:"User resolution",id:"user-resolution",level:2},{value:"Group resolution",id:"group-resolution",level:2}],c={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"user-resolution"},"User resolution"),(0,a.kt)("p",null,"User information is an important aspect of the scheduling cycle. It is one of the key identifier that can be used to determine the queue to which a job should be submitted. The Yunikorn Scheduler relies on the K8s Shim to provide user information. In the world of Kubernetes, there is no object defined that identfies the actual user. This is by design and more information can be found ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#users-in-kubernetes"},"here"),"."),(0,a.kt)("p",null,"Since, Kubernetes has no pre-defined field or resource for user information and individual cluster deployments with unique user identification tools can vary, we have defined a standard way of identifying the user. Yunikorn requires a Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"Label")," added. Using the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/"},"recommendation")," provided here, the default label is defined as below:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Label"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"yunikorn.apache.org/username"),(0,a.kt)("td",{parentName:"tr",align:null},"User name. It can have duplicate entries but only the first value will be used. The default user is ",(0,a.kt)("inlineCode",{parentName:"td"},"nobody"))))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'metadata:\n  labels:\n    yunikorn.apache.org/username: "john"\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In order to make this field uniquiely identifiable to the authorized user, the suggestion is to add this label as an immutable field by the user identification tool used by the cluster administrators. The cluster administrators or users are free to use any method or tool to add this field and value. This includes adding it manually at the time of submission. ")),(0,a.kt)("admonition",{title:"Assumption ",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Assumption:\nYunikorn assumes that all pods belonging to an application are owned by the same user. We recommend that the user label is added to every pod of an app. This is to ensure that there is no discrepency. ")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"yunikorn.apache.org/username")," key can be customized by overriding the default value using the ",(0,a.kt)("inlineCode",{parentName:"p"},"USER_LABEL_KEY"),"env variable in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-release/blob/master/helm-charts/yunikorn/templates/deployment.yaml"},"K8s Deployment"),". This is particularly useful in scenarios where the user label is already being added or if the label has to be modified for some secuirty reasons. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'            env:\n            - name: USER_LABEL_KEY\n              value: "custom_user_label"\n')),(0,a.kt)("h2",{id:"group-resolution"},"Group resolution"),(0,a.kt)("p",null,"Group membership resolution is pluggables and is defined here. Groups do not have to be part of provided user and group object. When the object is added to the cache the groups are automatically resolved based on the resolution that is configured.\nThe resolver which is linked to the cache can be set per partition."),(0,a.kt)("p",null,'The default group resolver is "no resolver".\nThis resolver just echos the user name and a primary group with the same name as the user.'),(0,a.kt)("p",null,"Other resolvers are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OS resolver"),(0,a.kt)("li",{parentName:"ul"},"test resolver")))}m.isMDXComponent=!0}}]);