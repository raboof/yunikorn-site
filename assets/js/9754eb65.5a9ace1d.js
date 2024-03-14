"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97446],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,y=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?a.createElement(y,l(l({ref:t},g),{},{components:n})):a.createElement(y,l({ref:t},g))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(58168),r=(n(96540),n(15680));const i={id:"preemption_cases",title:"Preemption"},l=void 0,o={unversionedId:"user_guide/preemption_cases",id:"version-1.5.0/user_guide/preemption_cases",title:"Preemption",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.0/user_guide/preemption.md",sourceDirName:"user_guide",slug:"/user_guide/preemption_cases",permalink:"/docs/user_guide/preemption_cases",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"preemption_cases",title:"Preemption"},sidebar:"docs",previous:{title:"App & Queue Priorities",permalink:"/docs/user_guide/priorities"},next:{title:"ACLs",permalink:"/docs/user_guide/acls"}},p={},u=[{value:"Kubernetes Preemption",id:"kubernetes-preemption",level:2},{value:"YuniKorn Preemption",id:"yunikorn-preemption",level:2},{value:"General Preemption Case",id:"general-preemption-case",level:3},{value:"Priority",id:"priority",level:3},{value:"PriorityClass",id:"priorityclass",level:3},{value:"Priority Queue",id:"priority-queue",level:3},{value:"Preemption Fence",id:"preemption-fence",level:3}],g={toc:u},s="wrapper";function m(e){let{components:t,...i}=e;return(0,r.yg)(s,(0,a.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Preemption is an essential feature found in most schedulers, and it plays a crucial role in enabling key system functionalities like DaemonSets in K8s, as well as SLA and prioritization-based features."),(0,r.yg)("p",null,"This document provides a brief introduction to the concepts and configuration methods of preemption in YuniKorn. For a more comprehensive understanding of YuniKorn's design and practical ideas related to preemption, please refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/design/preemption"},"design document"),"."),(0,r.yg)("h2",{id:"kubernetes-preemption"},"Kubernetes Preemption"),(0,r.yg)("p",null,"Preemption in Kubernetes operates based on priorities. Starting from Kubernetes 1.14, you can configure preemption by adding a ",(0,r.yg)("inlineCode",{parentName:"p"},"preemptionPolicy")," to the ",(0,r.yg)("inlineCode",{parentName:"p"},"PriorityClass"),". However, it is important to note that preemption in Kubernetes is solely based on the priority of the pod during scheduling. The full documentation can be found ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/#preemption"},"here"),"."),(0,r.yg)("p",null,"While Kubernetes does support preemption, it does have some limitations. Preemption in Kubernetes only occurs during the scheduling cycle and does not change once the scheduling is complete. However, when considering batch or data processing workloads, it becomes necessary to account for the possibility of opting out at runtime."),(0,r.yg)("h2",{id:"yunikorn-preemption"},"YuniKorn Preemption"),(0,r.yg)("p",null,"In Yunikorn, we offer two preemption types: general and DaemonSet. DaemonSet preemption is much more straightforward, as it ensures that pods which must run on a particular node are allowed to do so. The rest of the documentation only concerns generic preemption. For a comprehensive explanation of DaemonSet preemption, please consult the ",(0,r.yg)("a",{parentName:"p",href:"/docs/design/simple_preemptor"},"design document"),"."),(0,r.yg)("p",null,"YuniKorn's generic preemption is based on a hierarchical queue model, enabling pods to opt out of running. Preemption is triggered after a specified delay, ensuring that each queue's resource usage reaches at least the guaranteed amount of resources. To configure the delay time for preemption triggering, you can utilize the ",(0,r.yg)("inlineCode",{parentName:"p"},"preemption.delay")," property in the configuration."),(0,r.yg)("p",null,"To prevent the occurrence of preemption storms or loops, where subsequent preemption tasks trigger additional preemption tasks, we have designed seven preemption laws. These laws are as follows:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Preemption policies are strong suggestions, not guarantees"),(0,r.yg)("li",{parentName:"ol"},"Preemption can never leave a queue lower than its guaranteed capacity"),(0,r.yg)("li",{parentName:"ol"},"A task cannot preempt other tasks in the same application"),(0,r.yg)("li",{parentName:"ol"},"A task cannot trigger preemption unless its queue is under its guaranteed capacity"),(0,r.yg)("li",{parentName:"ol"},"A task cannot be preempted unless its queue is over its guaranteed capacity"),(0,r.yg)("li",{parentName:"ol"},"A task can only preempt a task with lower or equal priority"),(0,r.yg)("li",{parentName:"ol"},"A task cannot preempt tasks outside its preemption fence")),(0,r.yg)("p",null,"For a detailed explanation of these preemption laws, please refer to the preemption ",(0,r.yg)("a",{parentName:"p",href:"/docs/design/preemption#the-laws-of-preemption"},"design document"),"."),(0,r.yg)("p",null,"Next, we will provide a few examples to help you understand the functionality and impact of preemption, allowing you to deploy it effectively in your environment. You can find the necessary files for the examples in the yunikorn-k8shim/deployment/example/preemption directory."),(0,r.yg)("p",null,"Included in the files is a YuniKorn configuration that defines the queue configuration as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"queues.yaml: |\n    partitions: \n    - name: default\n      placementrules:\n        - name: provided\n          create: true\n      queues:\n        - name: root\n          submitacl: '*'\n          properties:\n            preemption.policy: fence\n            preemption.delay: 10s\n          queues:\n          - name: 1-normal ...\n          - name: 2-no-guaranteed ...\n          - name: 3-priority-class ...\n          - name: 4-priority-queue ...\n          - name: 5-fence ...\n")),(0,r.yg)("p",null,"Each queue corresponds to a different example, and the preemption will be triggered 10 seconds after deployment, as indicated in the configuration ",(0,r.yg)("inlineCode",{parentName:"p"},"preemption.delay: 10s"),"."),(0,r.yg)("h3",{id:"general-preemption-case"},"General Preemption Case"),(0,r.yg)("p",null,"In this case, we will demonstrate the outcome of triggering preemption when the queue resources are distributed unevenly in a general scenario."),(0,r.yg)("p",null,"We will deploy 10 pods with a resource requirement of 1 to both ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-1")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-2"),". First, we deploy to ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-1")," and then introduce a few seconds delay before deploying to ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-2"),". This ensures that the resource usage in ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-1")," will exceed that of ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-2"),", depleting all resources in the parent queue and triggering preemption."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Queue"),(0,r.yg)("th",{parentName:"tr",align:null},"Max Resource"),(0,r.yg)("th",{parentName:"tr",align:null},"Guaranteed Resource"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"normal")),(0,r.yg)("td",{parentName:"tr",align:null},"12"),(0,r.yg)("td",{parentName:"tr",align:null},"- (not configured)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"normal.queue-1")),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"normal.queue-2")),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"5")))),(0,r.yg)("p",null,"Result:"),(0,r.yg)("p",null,"When a set of guaranteed resources is defined, preemption aims to ensure that all queues satisfy their guaranteed resources. Preemption stops once the guaranteed resources are met (law 4). A queue may be preempted if it has more resources than its guaranteed amount. For instance, in this case, if queue-1 has fewer resources than its guaranteed amount (<5), it will not be preempted (law 5)."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Queue"),(0,r.yg)("th",{parentName:"tr",align:null},"Resource before preemption"),(0,r.yg)("th",{parentName:"tr",align:null},"Resource after preemption"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"normal.queue-1")),(0,r.yg)("td",{parentName:"tr",align:null},"10 (victim)"),(0,r.yg)("td",{parentName:"tr",align:null},"7")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"normal.queue-2")),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"5 (guaranteed minimum)")))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"preemption_normal_case",src:n(35415).A,width:"668",height:"624"})),(0,r.yg)("h3",{id:"priority"},"Priority"),(0,r.yg)("p",null,"In general, a pod can preempt a pod with equal or lower priority. You can set the priority by defining a ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/"},"PriorityClass")," or by utilizing ",(0,r.yg)("a",{parentName:"p",href:"priorities"},"queue priorities"),"."),(0,r.yg)("p",null,"While preemption allows service-type pods to scale up or down through preemption, it can also lead to the preemption of pods that should not be preempted in certain scenarios:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Spark Jobs, where the driver pod manages a large number of jobs, and if preempted, all jobs will be affected."),(0,r.yg)("li",{parentName:"ol"},"Interactive pods, such as Python notebooks, have a significant impact when restarted and should be avoided from preemption.")),(0,r.yg)("p",null,'To address this issue, we have designed a "do not preempt me" flag. You can set the annotation ',(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org/allow-preemption")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"false")," in the PriorityClass to prevent pod requests from being preempted. "),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"NOTE:"))," The flag ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org/allow-preemption")," is a request only. It is not guaranteed but Pods annotated with this flag will be preempted last.")),(0,r.yg)("h3",{id:"priorityclass"},"PriorityClass"),(0,r.yg)("p",null,"In this example, we will demonstrate the configuration of ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org/allow-preemption")," using PriorityClass and observe its effect. The default value for this configuration is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'apiVersion: scheduling.k8s.io/v1\nkind: PriorityClass\nmetadata:\n  name: preemption-not-allow\n  annotations:\n    "yunikorn.apache.org/allow-preemption": "false"\nvalue: 0\n')),(0,r.yg)("p",null,"We will deploy 8 pods with a resource requirement of 1 to ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-1"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-2"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-3"),", respectively. We will deploy to ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-1")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-2")," first, followed by a few seconds delay before deploying to ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-3"),". This ensures that the resource usage in ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-1")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-2")," will be greater than that in ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-3"),", depleting all resources in the parent queue and triggering preemption."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Queue"),(0,r.yg)("th",{parentName:"tr",align:null},"Max Resource"),(0,r.yg)("th",{parentName:"tr",align:null},"Guaranteed Resource"),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"th"},"allow-preemption")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt")),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.queue-1")),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.queue-2")),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.queue-3")),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))))),(0,r.yg)("p",null,"Result:"),(0,r.yg)("p",null,"When preemption is triggered, ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-3")," will start searching for a victim. However, since ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-2")," is set with allow-preemption as false, the resources of ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-1")," will be preempted."),(0,r.yg)("p",null,"Please note that setting ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org/allow-preemption")," is a strong recommendation but does not guarantee the lack of preemption. When this flag is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),", it moves the Pod to the back of the preemption list, giving it a lower priority for preemption compared to other Pods. However, in certain scenarios, such as when no other preemption options are available, Pods with this flag may still be preempted."),(0,r.yg)("p",null,"For example, even with ",(0,r.yg)("inlineCode",{parentName:"p"},"allow-preemption")," set to ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),", DaemonSet pods can still trigger preemption. Additionally, if an application in ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-1")," has a higher priority than one in ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-3"),", the application in ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-2")," will be preempted because an application can never preempt another application with a higher priority. In such cases where no other preemption options exist, the ",(0,r.yg)("inlineCode",{parentName:"p"},"allow-preemption")," flag may not prevent preemption."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Queue"),(0,r.yg)("th",{parentName:"tr",align:null},"Resource before preemption"),(0,r.yg)("th",{parentName:"tr",align:null},"Resource after preemption"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.queue-1")),(0,r.yg)("td",{parentName:"tr",align:null},"8 (victim)"),(0,r.yg)("td",{parentName:"tr",align:null},"5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.queue-2")),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.queue-3")),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"3 (guaranteed minimum)")))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"preemption_priorityclass_case",src:n(55764).A,width:"722",height:"763"})),(0,r.yg)("h3",{id:"priority-queue"},"Priority Queue"),(0,r.yg)("p",null,"In addition to utilizing the default PriorityClass in Kubernetes, you can configure priorities directly on a ",(0,r.yg)("a",{parentName:"p",href:"priorities"},"YuniKorn queue"),"."),(0,r.yg)("p",null,"In the following example, we will demonstrate preemption based on queue priority."),(0,r.yg)("p",null,"We will deploy five pods with a resource demand of 3 in the ",(0,r.yg)("inlineCode",{parentName:"p"},"high-pri")," queue, ",(0,r.yg)("inlineCode",{parentName:"p"},"norm-pri")," queue, and ",(0,r.yg)("inlineCode",{parentName:"p"},"low-pri")," queue, respectively. We will deploy them to the ",(0,r.yg)("inlineCode",{parentName:"p"},"norm-pri")," queue first, ensuring that the resources in the ",(0,r.yg)("inlineCode",{parentName:"p"},"root"),"(parent queue) will be fully utilized. This will result in uneven resource distribution among the queues, triggering preemption."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Queue"),(0,r.yg)("th",{parentName:"tr",align:null},"Max Resource"),(0,r.yg)("th",{parentName:"tr",align:null},"Guaranteed Resource"),(0,r.yg)("th",{parentName:"tr",align:null},"priority.offset"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"root")),(0,r.yg)("td",{parentName:"tr",align:null},"18"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"root.high-pri")),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null},"100")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"root.norm-pri")),(0,r.yg)("td",{parentName:"tr",align:null},"18"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null},"0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"root.low-pri")),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null},"-100")))),(0,r.yg)("p",null,"Result:"),(0,r.yg)("p",null,"A queue with higher priority can preempt resources from a queue with lower priority, and preemption stops when the queue has preempted enough resources to satisfy its guaranteed resources."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Queue"),(0,r.yg)("th",{parentName:"tr",align:null},"Resource before preemption"),(0,r.yg)("th",{parentName:"tr",align:null},"Resource after preemption"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"root.high-pri")),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"6 (guaranteed minimum)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"root.norm-pri")),(0,r.yg)("td",{parentName:"tr",align:null},"18 (victim)"),(0,r.yg)("td",{parentName:"tr",align:null},"12")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"root.low-pri")),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"0")))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"preemption_priority_queue_case",src:n(26476).A,width:"646",height:"762"})),(0,r.yg)("h3",{id:"preemption-fence"},"Preemption Fence"),(0,r.yg)("p",null,"In a multi-tenant environment, it is essential to prevent one tenant from occupying the resources of another tenant. In YuniKorn, we map tenants to a queue hierarchy, the queue hierarchy can thus cross tenant boundaries."),(0,r.yg)("p",null,"To address this issue, YuniKorn introduces a ",(0,r.yg)("a",{parentName:"p",href:"/docs/design/preemption#preemption-fence"},"preemption fence"),", which is a setting on the queue that prevents preemption from looking at queues outside the fence boundary.  The fence is a one-way fence. It prevents going out (i.e. higher up the queue hierarchy), but does not prevent coming in (or down) the queue hierarchy."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"...\nqueues:\n- name: default\n  properties:\n    preemption.policy: fence\n")),(0,r.yg)("p",null,"We will use the following diagram as an example:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"preemption_fence_hierarchy_case",src:n(94169).A,width:"1579",height:"633"})),(0,r.yg)("p",null,"In this example, we will sequentially deploy 15 pods with a resource requirement of 1 to each sub-queue."),(0,r.yg)("p",null,"First, we deploy ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-1")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"tenant-a")," and wait until the application in ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-1")," occupies all the resources of ",(0,r.yg)("inlineCode",{parentName:"p"},"tenant-a"),". Then, we deploy ",(0,r.yg)("inlineCode",{parentName:"p"},"queue-2")," after the resources of ",(0,r.yg)("inlineCode",{parentName:"p"},"tenant-a")," are fully utilized. Next, we deploy the application ",(0,r.yg)("inlineCode",{parentName:"p"},"ten-b.queue-3")," and allocate resources to the system when the fence queue is full."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Queue"),(0,r.yg)("th",{parentName:"tr",align:null},"Max Resource"),(0,r.yg)("th",{parentName:"tr",align:null},"Guaranteed Resource"),(0,r.yg)("th",{parentName:"tr",align:null},"fence"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt")),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.ten-a")),(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.ten-a.queue-1")),(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.ten-a.queue-2")),(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.ten-b")),(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.ten-b.queue-3")),(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.sys")),(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("p",null,"Result:"),(0,r.yg)("p",null,"In this example, two imbalances are observed:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Within ",(0,r.yg)("inlineCode",{parentName:"li"},"ten-a"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"queue-1")," occupies all the resources, while ",(0,r.yg)("inlineCode",{parentName:"li"},"queue-2")," has no resources. However, since ",(0,r.yg)("inlineCode",{parentName:"li"},"queue-2")," is configured with a fence, it cannot acquire resources from outside the fence.\n",(0,r.yg)("img",{alt:"preemption_fence_case1",src:n(14984).A,width:"809",height:"332"})),(0,r.yg)("li",{parentName:"ul"},"Inside the ",(0,r.yg)("inlineCode",{parentName:"li"},"rt")," queue, both ",(0,r.yg)("inlineCode",{parentName:"li"},"ten-a")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"ten-b")," occupy all the resources, while the ",(0,r.yg)("inlineCode",{parentName:"li"},"sys")," queue has no resources, and no fence is set up. Therefore, the ",(0,r.yg)("inlineCode",{parentName:"li"},"sys")," queue can acquire resources from the queues in the hierarchy until its guaranteed resources are met. In this case, the ",(0,r.yg)("inlineCode",{parentName:"li"},"sys")," queue acquires resources from both ",(0,r.yg)("inlineCode",{parentName:"li"},"ten-a")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"ten-b"),".\n",(0,r.yg)("img",{alt:"preemption_fence_case2",src:n(76963).A,width:"548",height:"886"}))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Queue"),(0,r.yg)("th",{parentName:"tr",align:null},"Resource before preemption"),(0,r.yg)("th",{parentName:"tr",align:null},"Resource after preemption"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.ten-a")),(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null},"10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.ten-a.queue-1")),(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null},"10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.ten-a.queue-2")),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.ten-b")),(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null},"10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.ten-b.queue-3")),(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null},"10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rt.sys")),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"10")))))}m.isMDXComponent=!0},14984:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/preemption_fence_case1-774a3f77aa98fdf9084e314e40e13e56.png"},76963:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/preemption_fence_case2-5b1821999da91de2c6e3aab3e31026d4.png"},94169:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/preemption_fence_hierarchy_case-1575612a5cd83829e9361f4eab0afd9c.png"},35415:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/preemption_normal_case-ba5958d682dd2e94e9cd3afd272e840e.png"},26476:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/preemption_priority_queue_case-3353239aaaa37023bb69ecc662f954a8.png"},55764:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/preemption_priorityclass_case-a02a8b5b00a77ba6861bdf7f2839563c.png"}}]);