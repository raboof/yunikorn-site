"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,k=m["".concat(u,".").concat(g)]||m[g]||d[g]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},87702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={id:"use_cases",title:"Use Cases"},o=void 0,i={unversionedId:"user_guide/use_cases",id:"version-1.3.0/user_guide/use_cases",title:"Use Cases",description:"\x3c!--",source:"@site/versioned_docs/version-1.3.0/user_guide/use_case.md",sourceDirName:"user_guide",slug:"/user_guide/use_cases",permalink:"/docs/user_guide/use_cases",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"use_cases",title:"Use Cases"},sidebar:"docs",previous:{title:"Prometheus and Grafana",permalink:"/docs/user_guide/prometheus"},next:{title:"Overview",permalink:"/docs/user_guide/workloads/workload_overview"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Partition and Queue Configuration",id:"partition-and-queue-configuration",level:2},{value:"User/Group Resolution &amp; ACL",id:"usergroup-resolution--acl",level:2},{value:"Explanation of Configuration",id:"explanation-of-configuration",level:3},{value:"Testing",id:"testing",level:3},{value:"Placement of different users",id:"placement-of-different-users",level:2},{value:"Explanation of Configuration",id:"explanation-of-configuration-1",level:3},{value:"Testing",id:"testing-1",level:3},{value:"Limit usable resources on a queue level",id:"limit-usable-resources-on-a-queue-level",level:2},{value:"Explanation of Configuration",id:"explanation-of-configuration-2",level:3},{value:"Testing",id:"testing-2",level:3},{value:"Preemption &amp; Priority scheduling with fencing",id:"preemption--priority-scheduling-with-fencing",level:2},{value:"Explanation of Configuration",id:"explanation-of-configuration-3",level:3},{value:"Testing",id:"testing-3",level:3}],s={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Yunikorn offers a range of features, including advanced capabilities like hierarchical resource queues, access control lists, resource limits, preemption, priority, and placement rules for managing your cluster. This page presents a real-world scenario to demonstrate the practical application of these features."),(0,r.kt)("p",null,"We will now introduce the various functions and configurations of Yunikorn in sequence."),(0,r.kt)("p",null,"The following will be included in this article\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access control with ACL"),(0,r.kt)("li",{parentName:"ul"},"Placement of different users"),(0,r.kt)("li",{parentName:"ul"},"Limit usable resources on a queue level"),(0,r.kt)("li",{parentName:"ul"},"Preemption and priority scheduling with fencing")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"Before configuring yunikorn-config, we need to create users using ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/"},"Authenticating")," and ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"RBAC")," from Kubernetes."),(0,r.kt)("p",null,"To create the necessary users for the example, you can download the ",(0,r.kt)("inlineCode",{parentName:"p"},"create_user.sh")," script directly from yunikorn-k8shim under deployment/examples/use-case/access-control."),(0,r.kt)("p",null,"Here are the users we need to create:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"user"),(0,r.kt)("th",{parentName:"tr",align:null},"group"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null},"admin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sue"),(0,r.kt)("td",{parentName:"tr",align:null},"group-a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bob"),(0,r.kt)("td",{parentName:"tr",align:null},"group-a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kim"),(0,r.kt)("td",{parentName:"tr",align:null},"group-b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yono"),(0,r.kt)("td",{parentName:"tr",align:null},"group-b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"anonymous"),(0,r.kt)("td",{parentName:"tr",align:null},"anonymous")))),(0,r.kt)("p",null,"After the user is created, the pod can be obtained by the following command to confirm the creation is successful\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl --context=sue-context get pod\n")),(0,r.kt)("p",null,"When you are done testing, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"./remove-user.sh")," in the folder to delete all users."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"partition-and-queue-configuration"},"Partition and Queue Configuration"),(0,r.kt)("p",null,"In this use case, we configure the cluster for two purposes - system management and multi-tenancy, with two groups of tenants. Below is the queue configuration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Root",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"system"),(0,r.kt)("li",{parentName:"ul"},"tenants",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"group-a"),(0,r.kt)("li",{parentName:"ul"},"group-b")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: ConfigMap\nmetadata:\n  name: yunikorn-configs\n  namespace: yunikorn\napiVersion: v1\ndata:\n  queues.yaml: |\n    partitions: \n    - name: default\n      queues:\n        - name: root\n          queues:\n          - name: system\n          - name: tenants\n            queues:\n              - name: group-a\n              - name: group-b\n")),(0,r.kt)("p",null,"See the documentation on ",(0,r.kt)("a",{parentName:"p",href:"queue_config"},"Partition and Queue Configuration"),"\xa0for more information."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"usergroup-resolution--acl"},"User/Group Resolution & ACL"),(0,r.kt)("p",null,"In a multi-tenant environment, we want each user's workload to be independent from one another, with tenants restricted to using specific queues."),(0,r.kt)("p",null,"In Yunikorn, there are two steps to manage users:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The Admission Controller resolves the username and group and adds the user's informantion to the Annotation."),(0,r.kt)("li",{parentName:"ol"},"Yunikorn compares whether the user is in the ACL of a specific queue to determine whether the user has permission to deploy applications on that queue.")),(0,r.kt)("h3",{id:"explanation-of-configuration"},"Explanation of Configuration"),(0,r.kt)("p",null,"In the following example, we configure the configuration based on the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"user"),(0,r.kt)("th",{parentName:"tr",align:null},"group"),(0,r.kt)("th",{parentName:"tr",align:null},"Queue allowed to put"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null},"system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sue"),(0,r.kt)("td",{parentName:"tr",align:null},"group-a"),(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bob"),(0,r.kt)("td",{parentName:"tr",align:null},"group-a"),(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kim"),(0,r.kt)("td",{parentName:"tr",align:null},"group-b"),(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yono"),(0,r.kt)("td",{parentName:"tr",align:null},"group-b"),(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"anonymous"),(0,r.kt)("td",{parentName:"tr",align:null},"anonymous"),(0,r.kt)("td",{parentName:"tr",align:null},"x")))),(0,r.kt)("p",null,"In this configuration, we allow users in the admin group to use the system queue by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"adminacl: admin")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"root.system")," queue. We also allow the group-a and group-b groups to use their respective queues (",(0,r.kt)("inlineCode",{parentName:"p"},"root.tenants.group-a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"root.tenants.group-b"),") by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"adminacl: group-a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"adminacl: group-b")," for each queue, respectively."),(0,r.kt)("p",null,"Configuration for testing :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ConfigMap\nmetadata:\n  name: yunikorn-configs\n  namespace: yunikorn\napiVersion: v1\ndata:\n  admissionController.accessControl.externalGroups: "admin,group-a,group-b"\n  queues.yaml: |\n    partitions: \n    - name: default\n      queues:\n        - name: root\n          queues:\n          - name: system\n            adminacl: " admin"\n          - name: tenants\n            queues:\n              - name: group-a\n                adminacl: " group-a"\n              - name: group-b\n                adminacl: " group-b"\n')),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("p",null,"In this test scenario, we utilize three users to create a Pod, but the access control list restricts each user to create Pods only in the allowed queue."),(0,r.kt)("p",null,"Among these users, one is named Sue and belongs to the group-a. Whenever Sue tries to create a Pod, the admission controller will first add the user's name and group to the Pod's annotation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'Annotations:      \n   ...\n   yunikorn.apache.org/user.info: {"user":"sue","groups":["group-a","system:authenticated"]}\n   ...\n')),(0,r.kt)("p",null,"The scheduler will then determine whether to allow or block the user's pod based on the access control list of the assigned queue. "),(0,r.kt)("p",null,"Here are the results for different users assigned to different queues. You can use the YAML file we provide to test :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"user, group"),(0,r.kt)("th",{parentName:"tr",align:null},"Assign queue"),(0,r.kt)("th",{parentName:"tr",align:null},"result"),(0,r.kt)("th",{parentName:"tr",align:null},"YAML filename"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sue, group-a"),(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-a"),(0,r.kt)("td",{parentName:"tr",align:null},"created"),(0,r.kt)("td",{parentName:"tr",align:null},"nginx-1.yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sue, group-a"),(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-b"),(0,r.kt)("td",{parentName:"tr",align:null},"blocked"),(0,r.kt)("td",{parentName:"tr",align:null},"nginx-1.yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kim, group-b"),(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-a"),(0,r.kt)("td",{parentName:"tr",align:null},"blocked"),(0,r.kt)("td",{parentName:"tr",align:null},"nginx-2.yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kim, group-b"),(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-b"),(0,r.kt)("td",{parentName:"tr",align:null},"created"),(0,r.kt)("td",{parentName:"tr",align:null},"nginx-2.yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"anonymous, anonymous"),(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-a"),(0,r.kt)("td",{parentName:"tr",align:null},"blocked"),(0,r.kt)("td",{parentName:"tr",align:null},"nginx-3.yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"anonymous, anonymous"),(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-b"),(0,r.kt)("td",{parentName:"tr",align:null},"blocked"),(0,r.kt)("td",{parentName:"tr",align:null},"nginx-3.yaml")))),(0,r.kt)("p",null,"See the documentation on ",(0,r.kt)("a",{parentName:"p",href:"usergroup_resolution"},"User & Group Resolution")," or ",(0,r.kt)("a",{parentName:"p",href:"acls"},"ACLs"),"\xa0for more information."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"placement-of-different-users"},"Placement of different users"),(0,r.kt)("p",null,"To simplify the user's experience, the scheduler can dynamically assign the application to a queue and create a new queue if necessary. By setting up the placement rules properly, the user won't need to specify the queue to run their application on."),(0,r.kt)("h3",{id:"explanation-of-configuration-1"},"Explanation of Configuration"),(0,r.kt)("p",null,"Yunikorn offers extensive support for placement rules, allowing users to assign queues based on the namespace or username of the Pod, or to create queues based on user specifications."),(0,r.kt)("p",null,'Let\'s take the "admin" user as an example to explain the configuration. We want the scheduler to create a new queue based on the queue provided by the "admin":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: provided\n    create: true\n")),(0,r.kt)("p",null,"To further restrict users and provide different placement rules for different users, we need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," since the previous configuration cannot achieve this. "),(0,r.kt)("p",null,"Additionally, we want to separate the system and tenant queues, and for queues created by the admin, we want them to be under the system queue. To do so, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"parent")," attribute. "),(0,r.kt)("p",null,"To allow the queue to be designated as a parent, we need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"parent: true")," in the parent queue. "),(0,r.kt)("p",null,"Finally, we extend the configuration as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: provided\n    create: true\n    parent: # Specify the parent of the created queue as root.system\n      name: fixed\n      value: root.system\n    filter: # Only admin is allowed to use the rule\n      type: allow\n      users:\n        - admin\n      groups:\n        - admin\n")),(0,r.kt)("p",null,"In the following example, we configure the configuration based on the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"group"),(0,r.kt)("th",{parentName:"tr",align:null},"placement rule"),(0,r.kt)("th",{parentName:"tr",align:null},"fixed parent"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null},"provided"),(0,r.kt)("td",{parentName:"tr",align:null},"root.system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group-a"),(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group-b"),(0,r.kt)("td",{parentName:"tr",align:null},"namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-b")))),(0,r.kt)("p",null,"Configuration for testing :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ConfigMap\nmetadata:\n  name: yunikorn-configs\n  namespace: yunikorn\napiVersion: v1\ndata:\n  admissionController.accessControl.externalGroups: "admin,group-a,group-b"\n  queues.yaml: |\n    partitions: \n      - name: default\n        placementrules:\n          - name: provided\n            create: true\n            parent:\n              name: fixed\n              value: root.system\n              filter:\n                type: allow\n                users:\n                  - admin\n                groups:\n                  - admin\n          - name: user\n            create: true\n            filter:\n              type: allow\n              groups:\n                - group-a\n            parent:\n              name: fixed\n              value: root.tenants.group-a\n          - name: tag\n            value: namespace\n            create: true\n            filter:\n              type: allow\n              groups:\n                - group-b\n            parent:\n              name: fixed\n              value: root.tenants.group-b\n        queues:\n          - name: root\n            queues:\n            - name: system\n              adminacl: " admin"\n              parent: true  # Let the queue be designated as the parent queue\n            - name: tenants\n              parent: true\n              queues:\n                - name: group-a\n                  adminacl: " group-a"\n                  parent: true\n                - name: group-b\n                  adminacl: " group-b"\n                  parent: true\n')),(0,r.kt)("h3",{id:"testing-1"},"Testing"),(0,r.kt)("p",null,"In this test example, we use three users to verify all the placement rules. "),(0,r.kt)("p",null,"The following results are generated when creating a Pod according to different rules. You can use the YAML file we provide for testing:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"placement rule"),(0,r.kt)("th",{parentName:"tr",align:null},"user, group"),(0,r.kt)("th",{parentName:"tr",align:null},"provide queue"),(0,r.kt)("th",{parentName:"tr",align:null},"namespace"),(0,r.kt)("th",{parentName:"tr",align:null},"Expected to be placed on"),(0,r.kt)("th",{parentName:"tr",align:null},"YAML filename"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provided"),(0,r.kt)("td",{parentName:"tr",align:null},"admin, admin"),(0,r.kt)("td",{parentName:"tr",align:null},"root.system.high-priority"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"root.system.high-priority"),(0,r.kt)("td",{parentName:"tr",align:null},"nginx-admin.yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provided"),(0,r.kt)("td",{parentName:"tr",align:null},"admin, admin"),(0,r.kt)("td",{parentName:"tr",align:null},"root.system.low-priority"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"root.system.low-priority"),(0,r.kt)("td",{parentName:"tr",align:null},"nginx-admin.yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"sue, group-a"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-a.sue"),(0,r.kt)("td",{parentName:"tr",align:null},"nginx-sue.yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag (value: namespace)"),(0,r.kt)("td",{parentName:"tr",align:null},"kim, group-b"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"dev"),(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-b.dev"),(0,r.kt)("td",{parentName:"tr",align:null},"nginx-kim.yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag (value: namespace)"),(0,r.kt)("td",{parentName:"tr",align:null},"kim, group-b"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"test"),(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-b.test"),(0,r.kt)("td",{parentName:"tr",align:null},"nginx-kim.yaml")))),(0,r.kt)("p",null,"See the documentation on ",(0,r.kt)("a",{parentName:"p",href:"placement_rules"},"App Placement Rules"),"\xa0for more information."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"limit-usable-resources-on-a-queue-level"},"Limit usable resources on a queue level"),(0,r.kt)("p",null,"To avoid unfair resource usage, we can limit and reserve the amount of resources per queue."),(0,r.kt)("h3",{id:"explanation-of-configuration-2"},"Explanation of Configuration"),(0,r.kt)("p",null,"In the following example, we configure the configuration based on the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"queue"),(0,r.kt)("th",{parentName:"tr",align:null},"guaranteed"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"max"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"memory(G)"),(0,r.kt)("td",{parentName:"tr",align:null},"vcore"),(0,r.kt)("td",{parentName:"tr",align:null},"memory(G)"),(0,r.kt)("td",{parentName:"tr",align:null},"vcore")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root"),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"15.6"),(0,r.kt)("td",{parentName:"tr",align:null},"16")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root.system"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-a"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-b"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"4")))),(0,r.kt)("p",null,"Configuration for testing :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ConfigMap\nmetadata:\n  name: yunikorn-configs\n  namespace: yunikorn\napiVersion: v1\ndata:\n  admissionController.accessControl.externalGroups: "admin,^group-$"\n  queues.yaml: |\n    partitions: \n    - name: default\n      queues:\n        - name: root\n          queues:\n          - name: system\n            adminacl: " admin"\n            resources:\n              guaranteed:\n                {memory: 2G, vcore: 2}\n              max:\n                {memory: 6G, vcore: 6}\n          - name: tenants\n            resources:\n              guaranteed:\n                {memory: 2G, vcore: 2}\n              max:\n                {memory: 4G, vcore: 8}\n            queues:\n              - name: group-a\n                adminacl: " group-a"\n                resources:\n                  guaranteed:\n                    {memory: 1G, vcore: 1}\n                  max:\n                    {memory: 2G, vcore: 4}\n              - name: group-b\n                adminacl: " group-b"\n                resources:\n                  guaranteed:\n                    {memory: 1G, vcore: 1}\n                  max:\n                    {memory: 2G, vcore: 4}\n')),(0,r.kt)("h3",{id:"testing-2"},"Testing"),(0,r.kt)("p",null,"In the following example, we restrict ",(0,r.kt)("inlineCode",{parentName:"p"},"root.tenants.group-a")," to use a maximum of ",(0,r.kt)("inlineCode",{parentName:"p"},"{memory: 2G, vcore: 4}")," resources. "),(0,r.kt)("p",null,"When group-A is deployed in ",(0,r.kt)("inlineCode",{parentName:"p"},"root.tenants.group-a")," and the required resources exceed the limit, the remaining pods will be blocked. "),(0,r.kt)("p",null,"The results of deploying Pods in different queues are shown below. You can use the YAML file we provide for testing."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"user, group"),(0,r.kt)("th",{parentName:"tr",align:null},"Resource Limits for Destination Queues"),(0,r.kt)("th",{parentName:"tr",align:null},"request resources for each replicas"),(0,r.kt)("th",{parentName:"tr",align:null},"replica"),(0,r.kt)("th",{parentName:"tr",align:null},"result"),(0,r.kt)("th",{parentName:"tr",align:null},"YAML filename"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin, admin"),(0,r.kt)("td",{parentName:"tr",align:null},"{memory: 6G, vcore: 6}"),(0,r.kt)("td",{parentName:"tr",align:null},"{memory: 512M, vcore: 250m}"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"run all replica"),(0,r.kt)("td",{parentName:"tr",align:null},"nginx-admin.yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sue, group-A"),(0,r.kt)("td",{parentName:"tr",align:null},"{memory: 2G, vcore: 4}"),(0,r.kt)("td",{parentName:"tr",align:null},"{memory: 512M, vcore: 500m}"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"run 3 replica (4 replica will exceed the resource limit)"),(0,r.kt)("td",{parentName:"tr",align:null},"nginx-sue.yaml")))),(0,r.kt)("p",null,"See the documentation on ",(0,r.kt)("a",{parentName:"p",href:"queue_config#resources"},"Partition and Queue Configuration #Resources"),"\xa0for more information."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"preemption--priority-scheduling-with-fencing"},"Preemption & Priority scheduling with fencing"),(0,r.kt)("p",null,"YuniKorn supports priority scheduling, where priorities can be assigned to each task and also to each queue. "),(0,r.kt)("p",null,"This section demonstrates how to configure priority in a queue. If you want to configure the priority of each task, you can learn more about it from document Pod Priority and Preemption on Kubernete ."),(0,r.kt)("h3",{id:"explanation-of-configuration-3"},"Explanation of Configuration"),(0,r.kt)("p",null,"In the following example, we configure the configuration based on the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"queue"),(0,r.kt)("th",{parentName:"tr",align:null},"offset"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root.system"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root.system.high-priority"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root.system.normal-priority"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root.system.low-priority"),(0,r.kt)("td",{parentName:"tr",align:null},"-1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants"),(0,r.kt)("td",{parentName:"tr",align:null},"0 (fenced)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-a"),(0,r.kt)("td",{parentName:"tr",align:null},"20 (fenced)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-b"),(0,r.kt)("td",{parentName:"tr",align:null},"5 (fenced)")))),(0,r.kt)("p",null,"By default, all priorities are globally scoped, which means that all high-priority queues will be served first. However, we can also limit the priority to certain queues."),(0,r.kt)("p",null,"The following configuration sets up a fence to ensure that the priorities of the ",(0,r.kt)("inlineCode",{parentName:"p"},"root.tenants")," queues (and their sub-queues) are evaluated internally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ConfigMap\nmetadata:\n  name: yunikorn-configs\n  namespace: yunikorn\napiVersion: v1\ndata:\n  queues.yaml: |\n    partitions: \n    - name: default\n      queues:\n        - name: root\n          properties:\n              application.sort.policy: fifo       # default value: fifo\n              application.sort.priority: enabled  # default value: enable\n          queues:\n          - name: system\n            adminacl: " admin"\n            queues:\n              - name: high-priority\n                properties:\n                  priority.offset: "1000"\n              - name: normal-priority\n                properties:\n                  priority.offset: "0"\n              - name: low-priority\n                properties:\n                  priority.offset: "-1000"\n          - name: tenants\n            properties:\n              priority.policy: "fence"\n            queues:\n              - name: group-a\n                adminacl: " group-a"\n                properties:\n                  priority.offset: "20"\n              - name: group-b\n                adminacl: " group-b"\n                properties:\n                  priority.offset: "5"\n')),(0,r.kt)("h3",{id:"testing-3"},"Testing"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Case 1: priority")),(0,r.kt)("p",null,"In the first test, we deploy an equal number of Pods with identical resource requests to three queues with different priorities. Without any priorities, we would expect to see an equal number of Pods deployed to each queue. "),(0,r.kt)("p",null,"However, with priorities and limited resources, the high-priority queue can deploy all of its Pods, the medium-priority queue can deploy some Pods, and the low-priority queue won't be able to deploy any Pods until resources are released by the high-priority queue."),(0,r.kt)("p",null,"In the following tests, we run the environment with a node resource limit of ",(0,r.kt)("inlineCode",{parentName:"p"},"{memory:16GB, vcore:16}"),". Note that results will vary based on the environment, and you can modify the YAML file we provide to achieve similar results."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"queue"),(0,r.kt)("th",{parentName:"tr",align:null},"offset"),(0,r.kt)("th",{parentName:"tr",align:null},"# of deploy apps"),(0,r.kt)("th",{parentName:"tr",align:null},"# of apps accept by yunikorn"),(0,r.kt)("th",{parentName:"tr",align:null},"YAML filename"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root.system.low-priority"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"system.yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root.system.normal-priority"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"system.yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root.system.high-priority"),(0,r.kt)("td",{parentName:"tr",align:null},"-1000"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"system.yaml")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Case 2: priority-fenced")),(0,r.kt)("p",null,"In the second test, we deploy the same number of Pods with the same resource requests to three different priority queues. However, this time, two queues are configured with a fence. "),(0,r.kt)("p",null,"While scheduling the task. Even though ",(0,r.kt)("inlineCode",{parentName:"p"},"root.tenants.group-a")," has a higher priority than the other two queues, the scheduler will still execute root.system.normal first, which is in the global scope. Then, the scheduler will compare priorities within the local scope of ",(0,r.kt)("inlineCode",{parentName:"p"},"root.tenants"),"."),(0,r.kt)("p",null,"For the following tests, we run them in an environment with node resources of ",(0,r.kt)("inlineCode",{parentName:"p"},"{memory:16GB, vcore:16}"),". The results will vary in different environments, but you can obtain similar results by modifying the YAML file we provide."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"queue"),(0,r.kt)("th",{parentName:"tr",align:null},"offset"),(0,r.kt)("th",{parentName:"tr",align:null},"# of deploy apps"),(0,r.kt)("th",{parentName:"tr",align:null},"# of apps accept by yunikorn"),(0,r.kt)("th",{parentName:"tr",align:null},"YAML filename"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root.system.normal-priority"),(0,r.kt)("td",{parentName:"tr",align:null},"0 (global)"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"nginx-admin.yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-a"),(0,r.kt)("td",{parentName:"tr",align:null},"20 (fenced)"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"nginx-sue.yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root.tenants.group-b"),(0,r.kt)("td",{parentName:"tr",align:null},"5 (fenced)"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"nginx-kim.yaml")))),(0,r.kt)("p",null,"See the documentation on ",(0,r.kt)("a",{parentName:"p",href:"priorities"},"App & Queue Priorities"),"\xa0for more information."))}d.isMDXComponent=!0}}]);