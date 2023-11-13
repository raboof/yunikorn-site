"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},47763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={id:"evaluate_perf_function_with_kubemark",title:"Perf With Kubemark"},o=void 0,s={unversionedId:"performance/evaluate_perf_function_with_kubemark",id:"version-0.8.0/performance/evaluate_perf_function_with_kubemark",title:"Perf With Kubemark",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/performance/evaluate_perf_function_with_kubemark.md",sourceDirName:"performance",slug:"/performance/evaluate_perf_function_with_kubemark",permalink:"/zh-cn/docs/0.8.0/performance/evaluate_perf_function_with_kubemark",draft:!1,tags:[],version:"0.8.0",frontMatter:{id:"evaluate_perf_function_with_kubemark",title:"Perf With Kubemark"},sidebar:"version-0.8.0/docs",previous:{title:"Acls",permalink:"/zh-cn/docs/0.8.0/configuration/acls"},next:{title:"Metrics",permalink:"/zh-cn/docs/0.8.0/performance/metrics"}},l={},u=[{value:"Scheduler Throughput",id:"scheduler-throughput",level:2},{value:"Resource Fairness between queues",id:"resource-fairness-between-queues",level:2},{value:"Node sorting policies",id:"node-sorting-policies",level:2},{value:"FAIR Policy",id:"fair-policy",level:3},{value:"BIN-PACKING",id:"bin-packing",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"evaluate-yunikorn-function--performance-with-kubemark"},"Evaluate YuniKorn function & performance with Kubemark"),(0,a.kt)("p",null,"All the following tests are done with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/release-1.3/docs/devel/kubemark-guide.md#starting-a-kubemark-cluster"},"Kubemark"),",\na tool helps us to simulate large K8s cluster and run experimental workloads.\nThere were 18 bare-metal servers being used to simulate 2000/4000 nodes for these tests. "),(0,a.kt)("h2",{id:"scheduler-throughput"},"Scheduler Throughput"),(0,a.kt)("p",null,"When running Big Data batch workloads, e.g Spark, on K8s, scheduler throughput becomes to be one of the main concerns.\nIn YuniKorn, we have done lots of optimizations to improve the performance, such as a fully async event-driven system\nand low-latency sorting policies. The following chart reveals the scheduler throughput (by using Kubemark simulated\nenvironment, and submitting 50,000 pods), comparing to the K8s default scheduler."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Scheduler Throughput",src:n(46903).Z,width:"2056",height:"1158"})),(0,a.kt)("p",null,"The charts record the time spent until all pods are running on the cluster"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:"center"},"THROUGHPUT (pods/sec)"),(0,a.kt)("th",{parentName:"tr",align:"center"},"THROUGHPUT (pods/sec)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ENVIRONMENT (# nodes)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Default Scheduler"),(0,a.kt)("td",{parentName:"tr",align:"center"},"YuniKorn")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"263"),(0,a.kt)("td",{parentName:"tr",align:"center"},"617")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"141"),(0,a.kt)("td",{parentName:"tr",align:"center"},"373")))),(0,a.kt)("h2",{id:"resource-fairness-between-queues"},"Resource Fairness between queues"),(0,a.kt)("p",null,"Each of YuniKorn queues has its guaranteed and maximum capacity. When we have lots of jobs submitted to these queues,\nYuniKorn ensures each of them gets its fair share. When we monitor the resource usage of these queues, we can clearly\nsee how fairness was enforced:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Scheduler Throughput",src:n(5066).Z,width:"2004",height:"824"})),(0,a.kt)("p",null,"We set up 4 heterogeneous queues on this cluster, and submit different workloads against these queues.\nFrom the chart, we can see the queue resources are increasing nearly in the same trend, which means the resource\nfairness across queues is honored."),(0,a.kt)("h2",{id:"node-sorting-policies"},"Node sorting policies"),(0,a.kt)("p",null,"There are 2 node sorting policies available in YuniKorn, with regarding the pod distributing flavors. One is ",(0,a.kt)("em",{parentName:"p"},"FAIR"),",\nwhich tries best to evenly distribute pods to nodes; the other one is ",(0,a.kt)("em",{parentName:"p"},"BIN-PACKING"),", which tries best to bin pack pods\nto less number of nodes. The former one is suitable for the Data Center scenarios, it helps to balance the stress of\ncluster nodes; the latter one is suitable to be used on Cloud, it can minimize the number of instances when working\nwith auto-scaler, in order to save cost."),(0,a.kt)("h3",{id:"fair-policy"},"FAIR Policy"),(0,a.kt)("p",null,"We group nodes into 10 buckets, each bucket represents for the number of nodes that has a similar resource\nutilization (a range).  To help you understand the chart, imagine the buckets have the following values at a certain\npoint of time:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"BUCKET"),(0,a.kt)("th",{parentName:"tr",align:"center"},"RESOURCE UTILIZATION RANGE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"VALUE"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"bucket-0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0% - 10%"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"bucket-1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10% - 20%"),(0,a.kt)("td",{parentName:"tr",align:"center"},"300")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"..."),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"bucket-9"),(0,a.kt)("td",{parentName:"tr",align:"center"},"90% - 100%"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0")))),(0,a.kt)("p",null,"This means at the given time, this cluster has 100 nodes whose utilization is in the range 0% to 10%;\nit has 300 nodes whose utilization is in the range 10% - 20%, and so on\u2026 Now, we run lots of workloads and\ncollect metrics, see the below chart:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Node Fairness",src:n(46352).Z,width:"1652",height:"1492"})),(0,a.kt)("p",null,"We can see all nodes have 0% utilization, and then all of them move to bucket-1, then bucket-2 \u2026 and eventually\nall nodes moved to bucket-9, which means all capacity is used. In another word, nodes\u2019 resource has been used in\na fairness manner."),(0,a.kt)("h3",{id:"bin-packing"},"BIN-PACKING"),(0,a.kt)("p",null,"This is When the bin-packing policy is enabled, we can see the following pattern:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Node Bin-Packing",src:n(34185).Z,width:"1420",height:"1254"})),(0,a.kt)("p",null,"On the contrary, all nodes are moving between 2 buckets, bucket-0 and bucket-9. Nodes in bucket-0 (0% - 10%)\nare decreasing in a linear manner, and nodes in bucket-9 (90% - 100%) are increasing with the same curve.\nIn other words, node resources are being used up one by one."))}d.isMDXComponent=!0},34185:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/node-bin-packing-7d63f9e4a088f0b271580b794ff8c71c.png"},46352:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/node-fair-1fecf15a75eff14ca8371bc927152d84.png"},5066:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/queue-fairness-3a524e14fa54750fdc0d5456852f05f2.png"},46903:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/throughput-5a45b5084a84d880c20179703af1e6b4.png"}}]);