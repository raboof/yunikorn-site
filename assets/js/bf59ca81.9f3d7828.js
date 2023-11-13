"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={id:"queue_config",title:"Partition and Queue Configuration"},o=void 0,l={unversionedId:"user_guide/queue_config",id:"version-1.1.0/user_guide/queue_config",title:"Partition and Queue Configuration",description:"\x3c!--",source:"@site/versioned_docs/version-1.1.0/user_guide/queue_config.md",sourceDirName:"user_guide",slug:"/user_guide/queue_config",permalink:"/docs/1.1.0/user_guide/queue_config",draft:!1,tags:[],version:"1.1.0",frontMatter:{id:"queue_config",title:"Partition and Queue Configuration"},sidebar:"docs",previous:{title:"Deployment Modes",permalink:"/docs/1.1.0/user_guide/deployment_modes"},next:{title:"App Placement Rules",permalink:"/docs/1.1.0/user_guide/placement_rules"}},u={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Partitions",id:"partitions",level:2},{value:"Queues",id:"queues",level:3},{value:"Placement rules",id:"placement-rules",level:3},{value:"Statedump filepath",id:"statedump-filepath",level:3},{value:"Limits",id:"limits",level:3},{value:"Resources",id:"resources",level:3},{value:"Child Template",id:"child-template",level:3}],p={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The basis for the queue configuration is given in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.1.0/design/scheduler_configuration"},"configuration design document"),"."),(0,i.kt)("p",null,"This document provides the generic queue configuration.\nIt references both the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.1.0/user_guide/acls"},"Access Control Lists")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.1.0/user_guide/placement_rules"},"Placement rules")," documentation."),(0,i.kt)("p",null,"This document explains how to create the partition and queue configuration for the scheduler with examples."),(0,i.kt)("p",null,"The scheduler relies on the shim to reliably provide user information as part of the application submission.\nThe current shim identifies the user and the groups the user belongs to using the methodology provided in ",(0,i.kt)("a",{parentName:"p",href:"usergroup_resolution"},"User & Group Resolution"),"."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The configuration file for the scheduler that is described here only provides the configuration for the partitions and queues."),(0,i.kt)("p",null,"By default we use the file called ",(0,i.kt)("inlineCode",{parentName:"p"},"queues.yaml")," in our deployments.\nThe filename can be changed via the command line flag ",(0,i.kt)("inlineCode",{parentName:"p"},"policyGroup")," of the scheduler.\nChanging the filename must be followed by corresponding changes in the deployment details, either the ",(0,i.kt)("inlineCode",{parentName:"p"},"configmap")," or the file included in the docker container."),(0,i.kt)("p",null,"The example file for the configuration is located in the scheduler core's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-core/blob/master/config/queues.yaml"},"queues.yaml"),".  "),(0,i.kt)("h2",{id:"partitions"},"Partitions"),(0,i.kt)("p",null,"Partitions are the top level of the scheduler configuration.\nThere can be more than one partition defined in the configuration."),(0,i.kt)("p",null,"Basic structure for the partition definition in the configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: <name of the 1st partition>\n  - name: <name of the 2nd partition>\n")),(0,i.kt)("p",null,"The default name for the partition is ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),".\nThe partition definition contains the full configuration for the scheduler for a particular shim.\nEach shim uses its own unique partition."),(0,i.kt)("p",null,"The partition must have at least the following keys defined:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#queues"},"queues"))),(0,i.kt)("p",null,"The queues configuration is explained below."),(0,i.kt)("p",null,"Optionally the following keys can be defined for a partition:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#placement-rules"},"placementrules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#statedump-filepath"},"statedumpfilepath")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#limits"},"limits")),(0,i.kt)("li",{parentName:"ul"},"nodesortpolicy"),(0,i.kt)("li",{parentName:"ul"},"preemption")),(0,i.kt)("p",null,"Placement rules and limits are explained in their own chapters"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nodesortpolicy")," defines the way the nodes are sorted for the partition.\nDetails on the values that can be used are in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.1.0/user_guide/sorting_policies#node-sorting"},"sorting policy")," documentation."),(0,i.kt)("p",null,"The preemption key can currently have only one sub key: ",(0,i.kt)("em",{parentName:"p"},"enabled"),".\nThis boolean value defines the preemption behaviour for the whole partition."),(0,i.kt)("p",null,"The default value for ",(0,i.kt)("em",{parentName:"p"},"enabled")," is ",(0,i.kt)("em",{parentName:"p"},"false"),".\nAllowed values: ",(0,i.kt)("em",{parentName:"p"},"true")," or ",(0,i.kt)("em",{parentName:"p"},"false"),", any other value will cause a parse error."),(0,i.kt)("p",null,"Example ",(0,i.kt)("inlineCode",{parentName:"p"},"partition")," yaml entry with ",(0,i.kt)("em",{parentName:"p"},"preemption")," flag set and a ",(0,i.kt)("inlineCode",{parentName:"p"},"nodesortpolicy")," of ",(0,i.kt)("em",{parentName:"p"},"fair"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: <name of the partition>\n    nodesortpolicy: fair\n    preemption:\n      enabled: true\n")),(0,i.kt)("p",null,"NOTE:\nCurrently the Kubernetes unique shim does not support any other partition than the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," partition..\nThis has been logged as an ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-22"},"jira")," for the shim."),(0,i.kt)("h3",{id:"queues"},"Queues"),(0,i.kt)("p",null,"YuniKorn manages resources by leveraging resource queues. The resource queue has the following characters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"queues can have ",(0,i.kt)("strong",{parentName:"li"},"hierarchical")," structure"),(0,i.kt)("li",{parentName:"ul"},"each queue can be preset with ",(0,i.kt)("strong",{parentName:"li"},"min/max capacity")," where min-capacity defines the guaranteed resource and the max-capacity defines the resource limit (aka resource quota)"),(0,i.kt)("li",{parentName:"ul"},"tasks must be running under a certain leaf queue"),(0,i.kt)("li",{parentName:"ul"},"queues can be ",(0,i.kt)("strong",{parentName:"li"},"static")," (loading from configuration file) or ",(0,i.kt)("strong",{parentName:"li"},"dynamical")," (internally managed by YuniKorn)"),(0,i.kt)("li",{parentName:"ul"},"queue level ",(0,i.kt)("strong",{parentName:"li"},"resource fairness is")," enforced by the scheduler"),(0,i.kt)("li",{parentName:"ul"},"a job can only run under a specific queue")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The difference between YuniKorn queue and ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"Kubernetes namespace"),":\nKubernetes namespace provides the scope for the Kubernetes resources, including the security context (i.e who can access the objects), and resource\nboundary when ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"resource quota")," is defined (i.e how many resources can be used by the objects).\nOn the other hand, YuniKorn queue is only used how many resources can be used by a group of jobs, and in which order. It provides\na more fine-grained control on resource sharing across multiple tenants with considering of resource fairness, job ordering, etc. In most of the cases,\nYuniKorn queue can be used to replace the namespace resource quota, in order to provide more scheduling features.")),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"queues")," entry is the main configuration element.\nIt defines a hierarchical structure for the queues."),(0,i.kt)("p",null,"It can have a ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," queue defined but it is not a required element.\nIf the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," queue is not defined the configuration parsing will insert the root queue for consistency.\nThe insertion of the root queue is triggered by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the configuration has more than one queue defined at the top level a root queue is inserted."),(0,i.kt)("li",{parentName:"ul"},"If there is only one queue defined at the top level and it is not called ",(0,i.kt)("inlineCode",{parentName:"li"},"root")," a root queue is inserted.  ")),(0,i.kt)("p",null,"The defined queue or queues will become a child queue of the inserted ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," queue."),(0,i.kt)("p",null,"Basic ",(0,i.kt)("inlineCode",{parentName:"p"},"queues")," yaml entry with sub queue:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"queues:\n- name: <name of the queue>\n  queues:\n  - name: <name of the queue>\n")),(0,i.kt)("p",null,"Supported parameters for the queues:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"name"),(0,i.kt)("li",{parentName:"ul"},"parent"),(0,i.kt)("li",{parentName:"ul"},"queues"),(0,i.kt)("li",{parentName:"ul"},"properties"),(0,i.kt)("li",{parentName:"ul"},"adminacl"),(0,i.kt)("li",{parentName:"ul"},"submitacl"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#resources"},"resources")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#limits"},"limits"))),(0,i.kt)("p",null,"Each queue must have a ",(0,i.kt)("em",{parentName:"p"},"name"),".\nThe name of a queue must be unique at the level that the queue is defined.\nSince the queue structure is fully hierarchical queues at different points in the hierarchy may have the same name.\nAs an example: the queue structure ",(0,i.kt)("inlineCode",{parentName:"p"},"root.testqueue")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"root.parent.testqueue"),' is a valid structure.\nA queue cannot contain a dot "." character as that character is used to separate the queues in the hierarchy.\nIf the name is not unique for the queue in the configuration or contains a dot a parsing error is generated and the configuration is rejected. '),(0,i.kt)("p",null,"Queues in the structure will automatically get a type assigned.\nThe type of the queue is based on the fact that the queue has children or sub queues.\nThe two types of queues are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parent"),(0,i.kt)("li",{parentName:"ul"},"leaf")),(0,i.kt)("p",null,"Applications can only be assigned to a ",(0,i.kt)("em",{parentName:"p"},"leaf")," queue.\nA queue that has a child or sub queue in the configuration is automatically a ",(0,i.kt)("em",{parentName:"p"},"parent")," queue.\nIf a queue does not have a sub the queue in the configuration it is a ",(0,i.kt)("em",{parentName:"p"},"leaf")," queue, unless the ",(0,i.kt)("inlineCode",{parentName:"p"},"parent")," parameter is set to ",(0,i.kt)("em",{parentName:"p"},"true"),".\nTrying to override a ",(0,i.kt)("em",{parentName:"p"},"parent")," queue type in the configuration will cause a parsing error of the configuration.   "),(0,i.kt)("p",null,"Sub queues for a parent queue are defined under the ",(0,i.kt)("inlineCode",{parentName:"p"},"queues")," entry.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"queues")," entry is a recursive entry for a queue level and uses the exact same set of parameters.  "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"properties")," parameter is a simple key value pair list.\nThe list provides a simple set of properties for the queue.\nThere are no limitations on the key or value values, anything is allowed.\nCurrently, the property list is only used in the scheduler to define a ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.1.0/user_guide/sorting_policies#application-sorting"},"sorting order")," for a leaf queue.\nFuture expansions, like the option to turn on or off preemption on a queue or other sorting policies, would use this same property construct without the need to change the configuration."),(0,i.kt)("p",null,"Access to a queue is set via the ",(0,i.kt)("inlineCode",{parentName:"p"},"adminacl")," for administrative actions and for submitting an application via the ",(0,i.kt)("inlineCode",{parentName:"p"},"submitacl")," entry.\nACLs are documented in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.1.0/user_guide/acls"},"Access control lists")," document."),(0,i.kt)("p",null,"Queue resource limits are set via the ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," parameter.\nUser and group limits are set via the ",(0,i.kt)("inlineCode",{parentName:"p"},"limits")," parameter.\nAs both entries are complex configuration entries they are explained in ",(0,i.kt)("a",{parentName:"p",href:"#resources"},"resources")," and ",(0,i.kt)("a",{parentName:"p",href:"#limits"},"limits")," below."),(0,i.kt)("p",null,"An example configuration of a queue ",(0,i.kt)("inlineCode",{parentName:"p"},"root.namespaces")," as a ",(0,i.kt)("em",{parentName:"p"},"parent")," queue with limits:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: default\n    queues:\n      - name: namespaces\n        parent: true\n        resources:\n          guaranteed:\n            {memory: 1G, vcore: 10}\n          max:\n            {memory: 10G, vcore: 100}\n")),(0,i.kt)("h3",{id:"placement-rules"},"Placement rules"),(0,i.kt)("p",null,"The placement rules are defined and documented in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.1.0/user_guide/placement_rules"},"placement rule")," document."),(0,i.kt)("p",null,"Each partition can have only one set of placement rules defined.\nIf no rules are defined the placement manager is not started and each application ",(0,i.kt)("em",{parentName:"p"},"must")," have a queue set on submit."),(0,i.kt)("h3",{id:"statedump-filepath"},"Statedump filepath"),(0,i.kt)("p",null,"The statedump filepath defines the output file for YuniKorn statedumps. It is optionally set on the partition level. If set,\nthe value of this field can be either a relative (to working directory) or absolute path. YuniKorn scheduler will be unable\nto start if it does not have sufficient permissions to create the statedump file at the specified path."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"statedumpfilepath: <path/to/statedump/file>\n")),(0,i.kt)("p",null,"If the above key is not specified in the partition config, its value will default to ",(0,i.kt)("inlineCode",{parentName:"p"},"yunikorn-state.txt"),". If the key is specified\nin multiple partitions, the value of its first occurrence will take precedence."),(0,i.kt)("p",null,"The statedump file also has a fixed rotation policy. Currently, each statedump file has a capacity of 10MB and there can be a maximum\nof 10 such files. The statedump file currently being written to will always be the configured value above or default ",(0,i.kt)("inlineCode",{parentName:"p"},"yunikorn-state.txt"),". When the file size limit is reached, the log rotator (",(0,i.kt)("inlineCode",{parentName:"p"},"lumberjack"),") will modify the file by prefixing it with a timestamp and create a new file with the same non-prefixed name to write statedumps to. If the maximum number of statedump files are reached, the oldest file timestamped as per the rotation policy will be deleted."),(0,i.kt)("h3",{id:"limits"},"Limits"),(0,i.kt)("p",null,"Limits define a set of limit objects for a partition or queue.\nIt can be set on either the partition or on a queue at any level."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"limits:\n  - limit: <description>\n  - limit: <description>\n")),(0,i.kt)("p",null,"A limit object is a complex configuration object.\nIt defines one limit for a set of users and or groups.\nMultiple independent limits can be set as part of one ",(0,i.kt)("inlineCode",{parentName:"p"},"limits")," entry on a queue or partition.\nUsers and or groups that are not part of the limit setting will not be limited."),(0,i.kt)("p",null,"A sample limits entry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'limits:\n  - limit: <description>\n    users:\n    - <user name or "*">\n    - <user name>\n    groups:\n    - <group name or "*">\n    - <group name>\n    maxapplications: <1..maxint>\n    maxresources:\n      <resource name 1>: <0..maxint>[suffix]\n      <resource name 2>: <0..maxint>[suffix]\n')),(0,i.kt)("p",null,"Limits are applied recursively in the case of a queue limit.\nThis means that a limit on the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," queue is an overall limit in the cluster for the user or group.\nA ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," queue limit is thus also equivalent with the ",(0,i.kt)("inlineCode",{parentName:"p"},"partition")," limit."),(0,i.kt)("p",null,"The limit object parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"limit"),(0,i.kt)("li",{parentName:"ul"},"users"),(0,i.kt)("li",{parentName:"ul"},"groups"),(0,i.kt)("li",{parentName:"ul"},"maxapplications"),(0,i.kt)("li",{parentName:"ul"},"maxresources")),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"limit")," parameter is an optional description of the limit entry.\nIt is not used for anything but making the configuration understandable and readable. "),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"users")," and ",(0,i.kt)("em",{parentName:"p"},"groups")," that can be configured can be one of two types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'a star "*" '),(0,i.kt)("li",{parentName:"ul"},"a list of users or groups.")),(0,i.kt)("p",null,'If the entry for users or groups contains more than one (1) entry it is always considered a list of either users or groups.\nThe star "*" is the wildcard character and matches all users or groups.\nDuplicate entries in the lists are ignored and do not cause a parsing error.\nSpecifying a star beside other list elements is not allowed.'),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"maxapplications")," is an unsigned integer value, larger than 1, which allows you to limit the number of running applications for the configured user or group.\nSpecifying a zero maximum applications limit is not allowed as it would implicitly deny access.\nDenying access must be handled via the ACL entries.  "),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"maxresources")," parameter can be used to specify a limit for one or more resources.\nThe ",(0,i.kt)("em",{parentName:"p"},"maxresources")," uses the same syntax as the ",(0,i.kt)("a",{parentName:"p",href:"#resources"},"resources")," parameter for the queue.\nResources that are not specified in the list are not limited.\nA resource limit can be set to 0.\nThis prevents the user or group from requesting the specified resource even though the queue or partition has that specific resource available.",(0,i.kt)("br",{parentName:"p"}),"\n","Specifying an overall resource limit of zero is not allowed.\nThis means that at least one of the resources specified in the limit must be greater than zero."),(0,i.kt)("p",null,"If a resource is not available on a queue the maximum resources on a queue definition should be used.\nSpecifying a limit that is effectively zero, ",(0,i.kt)("em",{parentName:"p"},"maxapplications")," is zero and all resource limits are zero, is not allowed and will cause a parsing error."),(0,i.kt)("p",null,"A limit is per user or group.\nIt is ",(0,i.kt)("em",{parentName:"p"},"not")," a combined limit for all the users or groups together."),(0,i.kt)("p",null,"As an example: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'limit: "example entry"\nmaxapplications: 10\nusers:\n- sue\n- bob\n')),(0,i.kt)("p",null,"In this case both the users ",(0,i.kt)("inlineCode",{parentName:"p"},"sue")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"bob")," are allowed to run 10 applications."),(0,i.kt)("h3",{id:"resources"},"Resources"),(0,i.kt)("p",null,"The resources entry for the queue can set the ",(0,i.kt)("em",{parentName:"p"},"guaranteed")," and or ",(0,i.kt)("em",{parentName:"p"},"maximum")," resources for a queue.\nResource limits are checked recursively.\nThe usage of a leaf queue is the sum of all assigned resources for that queue.\nThe usage of a parent queue is the sum of the usage of all queues, leafs and parents, below the parent queue. "),(0,i.kt)("p",null,"The root queue, when defined, cannot have any resource limit set.\nIf the root queue has any limit set a parsing error will occur.\nThe maximum resource limit for the root queue is automatically equivalent to the cluster size.\nThere is no guaranteed resource setting for the root queue."),(0,i.kt)("p",null,"Maximum resources when configured place a hard limit on the size of all allocations that can be assigned to a queue at any point in time.\nA maximum resource can be set to 0 which makes the resource not available to the queue.\nGuaranteed resources are used in calculating the share of the queue and during allocation.\nIt is used as one of the inputs for deciding which queue to give the allocation to.\nPreemption uses the ",(0,i.kt)("em",{parentName:"p"},"guaranteed")," resource of a queue as a base which a queue cannot go below."),(0,i.kt)("p",null,"Basic ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," yaml entry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"resources:\n  guaranteed:\n    <resource name 1>: <0..maxint>[suffix]\n    <resource name 2>: <0..maxint>[suffix]\n  max:\n    <resource name 1>: <0..maxint>[suffix]\n    <resource name 2>: <0..maxint>[suffix]\n")),(0,i.kt)("p",null,"Resources that are not specified in the list are not limited, for max resources, or guaranteed in the case of guaranteed resources."),(0,i.kt)("p",null,"An optional suffix may be specified for resource quantities. Valid suffixes are ",(0,i.kt)("inlineCode",{parentName:"p"},"k"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"M"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"G"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"P"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"E")," for SI powers of 10,\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"Ki"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Mi"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Gi"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Ti"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Pi"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Ei")," for SI powers of 2. Additionally, resources of type ",(0,i.kt)("inlineCode",{parentName:"p"},"vcore")," may have a suffix of ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," to indicate millicores. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"500m")," is 50% of a vcore. Units of type ",(0,i.kt)("inlineCode",{parentName:"p"},"memory")," are interpreted in bytes by default. All other resource types have no designated base unit."),(0,i.kt)("p",null,"Note that this is a behavioral change as of YuniKorn 1.0. Prior versions interpreted ",(0,i.kt)("inlineCode",{parentName:"p"},"memory")," as units of 1000000 (1 million) bytes and ",(0,i.kt)("inlineCode",{parentName:"p"},"vcore")," as millicores."),(0,i.kt)("h3",{id:"child-template"},"Child Template"),(0,i.kt)("p",null,"The parent queue can provide a template to define the behaviour of dynamic leaf queues below it. A parent queue having no child template inherits the child template\nfrom its parent if that parent has one defined. A child template can be defined at any level in the queue hierarchy on a queue that is of the type parent."),(0,i.kt)("p",null,"The supported configuration in template are shown below."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"application sort policy"),(0,i.kt)("li",{parentName:"ol"},"max resources"),(0,i.kt)("li",{parentName:"ol"},"guaranteed resources"),(0,i.kt)("li",{parentName:"ol"},"max applications")),(0,i.kt)("p",null,"As an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"}," partitions:\n   - name: default\n     placementrules:\n       - name: provided\n         create: true\n     queues:\n       - name: root\n         submitacl: '*'\n         childtemplate:\n           maxapplications: 10\n           properties:\n             application.sort.policy: stateaware\n           resources:\n             guaranteed:\n               vcore: 1\n               memory: 1G\n             max:\n               vcore: 20\n               memory: 600G\n         queues:\n           - name: parent\n             parent: true\n             childtemplate:\n               resources:\n                 max:\n                   vcore: 21\n                   memory: 610G\n           - name: notemplate\n             parent: true\n")),(0,i.kt)("p",null,"In this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"root.parent.sales")," will directly use the child template of parent queue ",(0,i.kt)("inlineCode",{parentName:"p"},"root.parent"),". By contrast,\n",(0,i.kt)("inlineCode",{parentName:"p"},"root.notemplate.sales")," will use the child template set on the queue ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," since its parent queue ",(0,i.kt)("inlineCode",{parentName:"p"},"root.notemplate")," inherits the child template from the queue ",(0,i.kt)("inlineCode",{parentName:"p"},"root"),"."),(0,i.kt)("p",null,"[DEPRECATED]"," Please migrate to template if your cluster is relying on old behavior that dynamic leaf queue can inherit\n",(0,i.kt)("inlineCode",{parentName:"p"},"application.sort.policy")," from parent (introduced by ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-195"},"YUNIKORN-195"),"). The old behavior will get removed in the future release."))}c.isMDXComponent=!0}}]);