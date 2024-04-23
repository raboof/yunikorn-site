"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97446],{36290:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=r(13274),t=r(1780);const s={id:"preemption_cases",title:"Preemption"},d=void 0,o={id:"user_guide/preemption_cases",title:"Preemption",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.0/user_guide/preemption.md",sourceDirName:"user_guide",slug:"/user_guide/preemption_cases",permalink:"/docs/user_guide/preemption_cases",draft:!1,unlisted:!1,tags:[],version:"1.5.0",frontMatter:{id:"preemption_cases",title:"Preemption"},sidebar:"docs",previous:{title:"App & Queue Priorities",permalink:"/docs/user_guide/priorities"},next:{title:"ACLs",permalink:"/docs/user_guide/acls"}},c={},l=[{value:"Kubernetes Preemption",id:"kubernetes-preemption",level:2},{value:"YuniKorn Preemption",id:"yunikorn-preemption",level:2},{value:"General Preemption Case",id:"general-preemption-case",level:3},{value:"Priority",id:"priority",level:3},{value:"PriorityClass",id:"priorityclass",level:3},{value:"Priority Queue",id:"priority-queue",level:3},{value:"Preemption Fence",id:"preemption-fence",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Preemption is an essential feature found in most schedulers, and it plays a crucial role in enabling key system functionalities like DaemonSets in K8s, as well as SLA and prioritization-based features."}),"\n",(0,i.jsxs)(n.p,{children:["This document provides a brief introduction to the concepts and configuration methods of preemption in YuniKorn. For a more comprehensive understanding of YuniKorn's design and practical ideas related to preemption, please refer to the ",(0,i.jsx)(n.a,{href:"/docs/design/preemption",children:"design document"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"kubernetes-preemption",children:"Kubernetes Preemption"}),"\n",(0,i.jsxs)(n.p,{children:["Preemption in Kubernetes operates based on priorities. Starting from Kubernetes 1.14, you can configure preemption by adding a ",(0,i.jsx)(n.code,{children:"preemptionPolicy"})," to the ",(0,i.jsx)(n.code,{children:"PriorityClass"}),". However, it is important to note that preemption in Kubernetes is solely based on the priority of the pod during scheduling. The full documentation can be found ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/#preemption",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"While Kubernetes does support preemption, it does have some limitations. Preemption in Kubernetes only occurs during the scheduling cycle and does not change once the scheduling is complete. However, when considering batch or data processing workloads, it becomes necessary to account for the possibility of opting out at runtime."}),"\n",(0,i.jsx)(n.h2,{id:"yunikorn-preemption",children:"YuniKorn Preemption"}),"\n",(0,i.jsxs)(n.p,{children:["In Yunikorn, we offer two preemption types: general and DaemonSet. DaemonSet preemption is much more straightforward, as it ensures that pods which must run on a particular node are allowed to do so. The rest of the documentation only concerns generic preemption. For a comprehensive explanation of DaemonSet preemption, please consult the ",(0,i.jsx)(n.a,{href:"/docs/design/simple_preemptor",children:"design document"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["YuniKorn's generic preemption is based on a hierarchical queue model, enabling pods to opt out of running. Preemption is triggered after a specified delay, ensuring that each queue's resource usage reaches at least the guaranteed amount of resources. To configure the delay time for preemption triggering, you can utilize the ",(0,i.jsx)(n.code,{children:"preemption.delay"})," property in the configuration."]}),"\n",(0,i.jsx)(n.p,{children:"To prevent the occurrence of preemption storms or loops, where subsequent preemption tasks trigger additional preemption tasks, we have designed seven preemption laws. These laws are as follows:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Preemption policies are strong suggestions, not guarantees"}),"\n",(0,i.jsx)(n.li,{children:"Preemption can never leave a queue lower than its guaranteed capacity"}),"\n",(0,i.jsx)(n.li,{children:"A task cannot preempt other tasks in the same application"}),"\n",(0,i.jsx)(n.li,{children:"A task cannot trigger preemption unless its queue is under its guaranteed capacity"}),"\n",(0,i.jsx)(n.li,{children:"A task cannot be preempted unless its queue is over its guaranteed capacity"}),"\n",(0,i.jsx)(n.li,{children:"A task can only preempt a task with lower or equal priority"}),"\n",(0,i.jsx)(n.li,{children:"A task cannot preempt tasks outside its preemption fence"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For a detailed explanation of these preemption laws, please refer to the preemption ",(0,i.jsx)(n.a,{href:"/docs/design/preemption#the-laws-of-preemption",children:"design document"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Next, we will provide a few examples to help you understand the functionality and impact of preemption, allowing you to deploy it effectively in your environment. You can find the necessary files for the examples in the yunikorn-k8shim/deployment/example/preemption directory."}),"\n",(0,i.jsx)(n.p,{children:"Included in the files is a YuniKorn configuration that defines the queue configuration as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"queues.yaml: |\n    partitions: \n    - name: default\n      placementrules:\n        - name: provided\n          create: true\n      queues:\n        - name: root\n          submitacl: '*'\n          properties:\n            preemption.policy: fence\n            preemption.delay: 10s\n          queues:\n          - name: 1-normal ...\n          - name: 2-no-guaranteed ...\n          - name: 3-priority-class ...\n          - name: 4-priority-queue ...\n          - name: 5-fence ...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Each queue corresponds to a different example, and the preemption will be triggered 10 seconds after deployment, as indicated in the configuration ",(0,i.jsx)(n.code,{children:"preemption.delay: 10s"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"general-preemption-case",children:"General Preemption Case"}),"\n",(0,i.jsx)(n.p,{children:"In this case, we will demonstrate the outcome of triggering preemption when the queue resources are distributed unevenly in a general scenario."}),"\n",(0,i.jsxs)(n.p,{children:["We will deploy 10 pods with a resource requirement of 1 to both ",(0,i.jsx)(n.code,{children:"queue-1"})," and ",(0,i.jsx)(n.code,{children:"queue-2"}),". First, we deploy to ",(0,i.jsx)(n.code,{children:"queue-1"})," and then introduce a few seconds delay before deploying to ",(0,i.jsx)(n.code,{children:"queue-2"}),". This ensures that the resource usage in ",(0,i.jsx)(n.code,{children:"queue-1"})," will exceed that of ",(0,i.jsx)(n.code,{children:"queue-2"}),", depleting all resources in the parent queue and triggering preemption."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Queue"}),(0,i.jsx)(n.th,{children:"Max Resource"}),(0,i.jsx)(n.th,{children:"Guaranteed Resource"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"normal"})}),(0,i.jsx)(n.td,{children:"12"}),(0,i.jsx)(n.td,{children:"- (not configured)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"normal.queue-1"})}),(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{children:"5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"normal.queue-2"})}),(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{children:"5"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Result:"}),"\n",(0,i.jsx)(n.p,{children:"When a set of guaranteed resources is defined, preemption aims to ensure that all queues satisfy their guaranteed resources. Preemption stops once the guaranteed resources are met (law 4). A queue may be preempted if it has more resources than its guaranteed amount. For instance, in this case, if queue-1 has fewer resources than its guaranteed amount (<5), it will not be preempted (law 5)."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Queue"}),(0,i.jsx)(n.th,{children:"Resource before preemption"}),(0,i.jsx)(n.th,{children:"Resource after preemption"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"normal.queue-1"})}),(0,i.jsx)(n.td,{children:"10 (victim)"}),(0,i.jsx)(n.td,{children:"7"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"normal.queue-2"})}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"5 (guaranteed minimum)"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"preemption_normal_case",src:r(68877).A+"",width:"668",height:"624"})}),"\n",(0,i.jsx)(n.h3,{id:"priority",children:"Priority"}),"\n",(0,i.jsxs)(n.p,{children:["In general, a pod can preempt a pod with equal or lower priority. You can set the priority by defining a ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/",children:"PriorityClass"})," or by utilizing ",(0,i.jsx)(n.a,{href:"priorities",children:"queue priorities"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"While preemption allows service-type pods to scale up or down through preemption, it can also lead to the preemption of pods that should not be preempted in certain scenarios:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Spark Jobs, where the driver pod manages a large number of jobs, and if preempted, all jobs will be affected."}),"\n",(0,i.jsx)(n.li,{children:"Interactive pods, such as Python notebooks, have a significant impact when restarted and should be avoided from preemption."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:['To address this issue, we have designed a "do not preempt me" flag. You can set the annotation ',(0,i.jsx)(n.code,{children:"yunikorn.apache.org/allow-preemption"})," to ",(0,i.jsx)(n.code,{children:"false"})," in the PriorityClass to prevent pod requests from being preempted."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"NOTE:"})})," The flag ",(0,i.jsx)(n.code,{children:"yunikorn.apache.org/allow-preemption"})," is a request only. It is not guaranteed but Pods annotated with this flag will be preempted last."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"priorityclass",children:"PriorityClass"}),"\n",(0,i.jsxs)(n.p,{children:["In this example, we will demonstrate the configuration of ",(0,i.jsx)(n.code,{children:"yunikorn.apache.org/allow-preemption"})," using PriorityClass and observe its effect. The default value for this configuration is set to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'apiVersion: scheduling.k8s.io/v1\nkind: PriorityClass\nmetadata:\n  name: preemption-not-allow\n  annotations:\n    "yunikorn.apache.org/allow-preemption": "false"\nvalue: 0\n'})}),"\n",(0,i.jsxs)(n.p,{children:["We will deploy 8 pods with a resource requirement of 1 to ",(0,i.jsx)(n.code,{children:"queue-1"}),", ",(0,i.jsx)(n.code,{children:"queue-2"}),", and ",(0,i.jsx)(n.code,{children:"queue-3"}),", respectively. We will deploy to ",(0,i.jsx)(n.code,{children:"queue-1"})," and ",(0,i.jsx)(n.code,{children:"queue-2"})," first, followed by a few seconds delay before deploying to ",(0,i.jsx)(n.code,{children:"queue-3"}),". This ensures that the resource usage in ",(0,i.jsx)(n.code,{children:"queue-1"})," and ",(0,i.jsx)(n.code,{children:"queue-2"})," will be greater than that in ",(0,i.jsx)(n.code,{children:"queue-3"}),", depleting all resources in the parent queue and triggering preemption."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Queue"}),(0,i.jsx)(n.th,{children:"Max Resource"}),(0,i.jsx)(n.th,{children:"Guaranteed Resource"}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.code,{children:"allow-preemption"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt"})}),(0,i.jsx)(n.td,{children:"16"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.queue-1"})}),(0,i.jsx)(n.td,{children:"8"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.queue-2"})}),(0,i.jsx)(n.td,{children:"8"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.queue-3"})}),(0,i.jsx)(n.td,{children:"8"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Result:"}),"\n",(0,i.jsxs)(n.p,{children:["When preemption is triggered, ",(0,i.jsx)(n.code,{children:"queue-3"})," will start searching for a victim. However, since ",(0,i.jsx)(n.code,{children:"queue-2"})," is set with allow-preemption as false, the resources of ",(0,i.jsx)(n.code,{children:"queue-1"})," will be preempted."]}),"\n",(0,i.jsxs)(n.p,{children:["Please note that setting ",(0,i.jsx)(n.code,{children:"yunikorn.apache.org/allow-preemption"})," is a strong recommendation but does not guarantee the lack of preemption. When this flag is set to ",(0,i.jsx)(n.code,{children:"false"}),", it moves the Pod to the back of the preemption list, giving it a lower priority for preemption compared to other Pods. However, in certain scenarios, such as when no other preemption options are available, Pods with this flag may still be preempted."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, even with ",(0,i.jsx)(n.code,{children:"allow-preemption"})," set to ",(0,i.jsx)(n.code,{children:"false"}),", DaemonSet pods can still trigger preemption. Additionally, if an application in ",(0,i.jsx)(n.code,{children:"queue-1"})," has a higher priority than one in ",(0,i.jsx)(n.code,{children:"queue-3"}),", the application in ",(0,i.jsx)(n.code,{children:"queue-2"})," will be preempted because an application can never preempt another application with a higher priority. In such cases where no other preemption options exist, the ",(0,i.jsx)(n.code,{children:"allow-preemption"})," flag may not prevent preemption."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Queue"}),(0,i.jsx)(n.th,{children:"Resource before preemption"}),(0,i.jsx)(n.th,{children:"Resource after preemption"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.queue-1"})}),(0,i.jsx)(n.td,{children:"8 (victim)"}),(0,i.jsx)(n.td,{children:"5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.queue-2"})}),(0,i.jsx)(n.td,{children:"8"}),(0,i.jsx)(n.td,{children:"8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.queue-3"})}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"3 (guaranteed minimum)"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"preemption_priorityclass_case",src:r(66586).A+"",width:"722",height:"763"})}),"\n",(0,i.jsx)(n.h3,{id:"priority-queue",children:"Priority Queue"}),"\n",(0,i.jsxs)(n.p,{children:["In addition to utilizing the default PriorityClass in Kubernetes, you can configure priorities directly on a ",(0,i.jsx)(n.a,{href:"priorities",children:"YuniKorn queue"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"In the following example, we will demonstrate preemption based on queue priority."}),"\n",(0,i.jsxs)(n.p,{children:["We will deploy five pods with a resource demand of 3 in the ",(0,i.jsx)(n.code,{children:"high-pri"})," queue, ",(0,i.jsx)(n.code,{children:"norm-pri"})," queue, and ",(0,i.jsx)(n.code,{children:"low-pri"})," queue, respectively. We will deploy them to the ",(0,i.jsx)(n.code,{children:"norm-pri"})," queue first, ensuring that the resources in the ",(0,i.jsx)(n.code,{children:"root"}),"(parent queue) will be fully utilized. This will result in uneven resource distribution among the queues, triggering preemption."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Queue"}),(0,i.jsx)(n.th,{children:"Max Resource"}),(0,i.jsx)(n.th,{children:"Guaranteed Resource"}),(0,i.jsx)(n.th,{children:"priority.offset"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"root"})}),(0,i.jsx)(n.td,{children:"18"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"root.high-pri"})}),(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{children:"6"}),(0,i.jsx)(n.td,{children:"100"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"root.norm-pri"})}),(0,i.jsx)(n.td,{children:"18"}),(0,i.jsx)(n.td,{children:"6"}),(0,i.jsx)(n.td,{children:"0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"root.low-pri"})}),(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{children:"6"}),(0,i.jsx)(n.td,{children:"-100"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Result:"}),"\n",(0,i.jsx)(n.p,{children:"A queue with higher priority can preempt resources from a queue with lower priority, and preemption stops when the queue has preempted enough resources to satisfy its guaranteed resources."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Queue"}),(0,i.jsx)(n.th,{children:"Resource before preemption"}),(0,i.jsx)(n.th,{children:"Resource after preemption"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"root.high-pri"})}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"6 (guaranteed minimum)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"root.norm-pri"})}),(0,i.jsx)(n.td,{children:"18 (victim)"}),(0,i.jsx)(n.td,{children:"12"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"root.low-pri"})}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"preemption_priority_queue_case",src:r(53206).A+"",width:"646",height:"762"})}),"\n",(0,i.jsx)(n.h3,{id:"preemption-fence",children:"Preemption Fence"}),"\n",(0,i.jsx)(n.p,{children:"In a multi-tenant environment, it is essential to prevent one tenant from occupying the resources of another tenant. In YuniKorn, we map tenants to a queue hierarchy, the queue hierarchy can thus cross tenant boundaries."}),"\n",(0,i.jsxs)(n.p,{children:["To address this issue, YuniKorn introduces a ",(0,i.jsx)(n.a,{href:"/docs/design/preemption#preemption-fence",children:"preemption fence"}),", which is a setting on the queue that prevents preemption from looking at queues outside the fence boundary.  The fence is a one-way fence. It prevents going out (i.e. higher up the queue hierarchy), but does not prevent coming in (or down) the queue hierarchy."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"...\nqueues:\n- name: default\n  properties:\n    preemption.policy: fence\n"})}),"\n",(0,i.jsx)(n.p,{children:"We will use the following diagram as an example:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"preemption_fence_hierarchy_case",src:r(94819).A+"",width:"1579",height:"633"})}),"\n",(0,i.jsx)(n.p,{children:"In this example, we will sequentially deploy 15 pods with a resource requirement of 1 to each sub-queue."}),"\n",(0,i.jsxs)(n.p,{children:["First, we deploy ",(0,i.jsx)(n.code,{children:"queue-1"})," in ",(0,i.jsx)(n.code,{children:"tenant-a"})," and wait until the application in ",(0,i.jsx)(n.code,{children:"queue-1"})," occupies all the resources of ",(0,i.jsx)(n.code,{children:"tenant-a"}),". Then, we deploy ",(0,i.jsx)(n.code,{children:"queue-2"})," after the resources of ",(0,i.jsx)(n.code,{children:"tenant-a"})," are fully utilized. Next, we deploy the application ",(0,i.jsx)(n.code,{children:"ten-b.queue-3"})," and allocate resources to the system when the fence queue is full."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Queue"}),(0,i.jsx)(n.th,{children:"Max Resource"}),(0,i.jsx)(n.th,{children:"Guaranteed Resource"}),(0,i.jsx)(n.th,{children:"fence"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt"})}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.ten-a"})}),(0,i.jsx)(n.td,{children:"15"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.ten-a.queue-1"})}),(0,i.jsx)(n.td,{children:"15"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.ten-a.queue-2"})}),(0,i.jsx)(n.td,{children:"15"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.ten-b"})}),(0,i.jsx)(n.td,{children:"15"}),(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.ten-b.queue-3"})}),(0,i.jsx)(n.td,{children:"15"}),(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.sys"})}),(0,i.jsx)(n.td,{children:"15"}),(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Result:"}),"\n",(0,i.jsx)(n.p,{children:"In this example, two imbalances are observed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Within ",(0,i.jsx)(n.code,{children:"ten-a"}),", ",(0,i.jsx)(n.code,{children:"queue-1"})," occupies all the resources, while ",(0,i.jsx)(n.code,{children:"queue-2"})," has no resources. However, since ",(0,i.jsx)(n.code,{children:"queue-2"})," is configured with a fence, it cannot acquire resources from outside the fence.\n",(0,i.jsx)(n.img,{alt:"preemption_fence_case1",src:r(68510).A+"",width:"809",height:"332"})]}),"\n",(0,i.jsxs)(n.li,{children:["Inside the ",(0,i.jsx)(n.code,{children:"rt"})," queue, both ",(0,i.jsx)(n.code,{children:"ten-a"})," and ",(0,i.jsx)(n.code,{children:"ten-b"})," occupy all the resources, while the ",(0,i.jsx)(n.code,{children:"sys"})," queue has no resources, and no fence is set up. Therefore, the ",(0,i.jsx)(n.code,{children:"sys"})," queue can acquire resources from the queues in the hierarchy until its guaranteed resources are met. In this case, the ",(0,i.jsx)(n.code,{children:"sys"})," queue acquires resources from both ",(0,i.jsx)(n.code,{children:"ten-a"})," and ",(0,i.jsx)(n.code,{children:"ten-b"}),".\n",(0,i.jsx)(n.img,{alt:"preemption_fence_case2",src:r(54261).A+"",width:"548",height:"886"})]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Queue"}),(0,i.jsx)(n.th,{children:"Resource before preemption"}),(0,i.jsx)(n.th,{children:"Resource after preemption"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.ten-a"})}),(0,i.jsx)(n.td,{children:"15"}),(0,i.jsx)(n.td,{children:"10"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.ten-a.queue-1"})}),(0,i.jsx)(n.td,{children:"15"}),(0,i.jsx)(n.td,{children:"10"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.ten-a.queue-2"})}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.ten-b"})}),(0,i.jsx)(n.td,{children:"15"}),(0,i.jsx)(n.td,{children:"10"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.ten-b.queue-3"})}),(0,i.jsx)(n.td,{children:"15"}),(0,i.jsx)(n.td,{children:"10"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rt.sys"})}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"10"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},68510:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/preemption_fence_case1-774a3f77aa98fdf9084e314e40e13e56.png"},54261:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/preemption_fence_case2-5b1821999da91de2c6e3aab3e31026d4.png"},94819:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/preemption_fence_hierarchy_case-1575612a5cd83829e9361f4eab0afd9c.png"},68877:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/preemption_normal_case-ba5958d682dd2e94e9cd3afd272e840e.png"},53206:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/preemption_priority_queue_case-3353239aaaa37023bb69ecc662f954a8.png"},66586:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/preemption_priorityclass_case-a02a8b5b00a77ba6861bdf7f2839563c.png"},1780:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>o});var i=r(79474);const t={},s=i.createContext(t);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);