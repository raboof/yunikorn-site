"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return n?o.createElement(m,s(s({ref:t},u),{},{components:n})):o.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={id:"generic_resource",title:"Generic Resource Types in Namespace Quota"},s=void 0,i={unversionedId:"design/generic_resource",id:"version-1.3.0/design/generic_resource",title:"Generic Resource Types in Namespace Quota",description:"\x3c!--",source:"@site/versioned_docs/version-1.3.0/design/generic_resource.md",sourceDirName:"design",slug:"/design/generic_resource",permalink:"/docs/design/generic_resource",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"generic_resource",title:"Generic Resource Types in Namespace Quota"},sidebar:"docs",previous:{title:"DaemonSet Scheduling using Simple Preemptor",permalink:"/docs/design/simple_preemptor"},next:{title:"Pluggable App Management",permalink:"/docs/design/pluggable_app_management"}},l={},c=[{value:"Functional gap",id:"functional-gap",level:2},{value:"Current solution",id:"current-solution",level:2},{value:"Proposed solution",id:"proposed-solution",level:2},{value:"Annotation name",id:"annotation-name",level:3},{value:"Annotation content",id:"annotation-content",level:3}],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generic-resource-types-in-namespace-quota"},"Generic Resource Types in Namespace Quota"),(0,a.kt)("p",null,"Tracking jira: ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1279"},"YUNIKORN-1275")),(0,a.kt)("h2",{id:"functional-gap"},"Functional gap"),(0,a.kt)("p",null,"The queue configuration allows all resource types to be set in a quota. Namespace annotations do not. Support for the same resource types in the annotations on namespaces should be possible."),(0,a.kt)("h2",{id:"current-solution"},"Current solution"),(0,a.kt)("p",null,"In the current setup YuniKorn supports annotations on a namespace to specify a resource quota for that namespace. This is used in combination with placement rules to create a quota limited queue automatically based on the namespace in Kubernetes."),(0,a.kt)("p",null,"The annotations that are supported limit the possible resource types that are supported on these auto created queues. Each resource type uses its own annotation. Current annotations supported as per the quota management documentation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yunikorn.apache.org/namespace.max.cpu\nyunikorn.apache.org/namespace.max.memory\n")),(0,a.kt)("p",null,"The queue configuration itself, as part of the yaml file, supports all Kubernetes resources including extended resources."),(0,a.kt)("h2",{id:"proposed-solution"},"Proposed solution"),(0,a.kt)("p",null,"The current solution uses a specific annotation for each type that is supported. This means that each new resource would require a new annotation to be defined. Reading a new annotation requires a code change in the k8shim."),(0,a.kt)("p",null,"In comparison when we look at the gang scheduling setup with the task groups specification we are far more flexible. In that case we allow a map of resources to be specified. The map uses the resource name as the key and allows a value as per the Kubenetes resource specification. This solution allows any resource type to be set as a request for a task group."),(0,a.kt)("p",null,"An equivalent solution should be allowed for the quota annotation on the namespace. This would provide a more flexible solution that does not require code changes for every new resource type that must be supported as part of the namespace quota."),(0,a.kt)("h3",{id:"annotation-name"},"Annotation name"),(0,a.kt)("p",null,"The new name for the annotation should not interfere with the existing annotations that are used for the memory and cpu resource quota. Beside that rule we are free to use any name that complies with the naming conventions for names."),(0,a.kt)("p",null,"The proposal is to use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yunikorn.apache.org/namespace.quota\n")),(0,a.kt)("h3",{id:"annotation-content"},"Annotation content"),(0,a.kt)("p",null,"The content of the annotation must be a simple string. There are no length limits for a specific annotation. All annotations together on one object do have a size limit however that is not a restriction we have to plan around."),(0,a.kt)("p",null,"Since the content must be a simple string we should use a simple json representation for the quota that contains a list of resources. Representing the quota:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'yunikorn.apache.org/namespace.quota: "\n{\ncpu: 100m,\nmemory: 1GB,\nnvidia.com/gpu: 1\n}\n"\n')),(0,a.kt)("p",null,"Similar as for other resources we allow in annotations: we allow any string as the key content.\nThe value content should be interpreted as a Kubernetes formatted resource quantity. Parsing will handle that enforcement. If any of the values do not comply with the formatting no quota will be set.\nPropagation to the core\nNo changes are proposed or required. The quota is passed from the k8shim into the core via the application tags. The content of the tag is a Resource object as defined in the scheduler interface. The schedule interface Resource object supports arbitrary resources already. The content passed from the k8shim to the core will not change. There will also be no changes in the way the quota will be processed in the core as that processing is not linked to resource types.\nBackwards compatibility\nThe current annotations will remain supported for the 1.x minor releases. Deprecation will be announced with the first release that supports the new annotation. Messages mentioning the processing of the old annotation will also be logged at a WARN level in the logs."),(0,a.kt)("p",null,"Removing the existing annotation processing is a breaking change that could cause a large change in behaviour. Removal of processing for the old annotations should be part of the next major release. The next major release is 2.0.0. This is based on the fact that we do not have a deprecation policy defined as yet."),(0,a.kt)("p",null,"Preference in processing will be with the new annotations. In the case that both the old and new annotations are present on the namespace the new annotation will be used. Using both old and new annotations, i.e. merging of the two sets, will not be supported."))}h.isMDXComponent=!0}}]);