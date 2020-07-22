(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var i=n(2),a=n(9),r=(n(0),n(215)),o={id:"sorting_policies",title:"Sorting Policies"},l={id:"user_guide/sorting_policies",isDocsHomePage:!1,title:"Sorting Policies",description:"\x3c!--",source:"@site/docs/user_guide/sorting_policies.md",permalink:"/docs/next/user_guide/sorting_policies",version:"next",sidebar:"docs",previous:{title:"App Placement Rules",permalink:"/docs/next/user_guide/placement_rules"},next:{title:"ACLs",permalink:"/docs/next/user_guide/acls"},latestVersionMainDocPermalink:"/docs"},s=[{value:"Application sorting",id:"application-sorting",children:[{value:"FifoSortPolicy",id:"fifosortpolicy",children:[]},{value:"FairSortPolicy",id:"fairsortpolicy",children:[]},{value:"StateAwarePolicy",id:"stateawarepolicy",children:[]}]},{value:"Node sorting",id:"node-sorting",children:[{value:"FairnessPolicy",id:"fairnesspolicy",children:[]},{value:"BinPackingPolicy",id:"binpackingpolicy",children:[]}]},{value:"Request sorting",id:"request-sorting",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The scheduler uses policies allow changing the scheduling behaviour without code changes.\nPolicies can be set for:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"#application-sorting"}),"Applications")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"#node-sorting"}),"Nodes")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"#request-sorting"}),"Requests"))),Object(r.b)("h2",{id:"application-sorting"},"Application sorting"),Object(r.b)("p",null,"The application sorting policy is set for each queue via the config.\nA sorting policy setting is only effective on a ",Object(r.b)("inlineCode",{parentName:"p"},"leaf")," queue.\nEach ",Object(r.b)("inlineCode",{parentName:"p"},"leaf")," queue can use a different policy."),Object(r.b)("p",null,"A sorting policy only specifies the order in which the applications are sorted within a queue.\nThat order is crucial in specifying which application is considered first when assigning resources.\nSorting policies do ",Object(r.b)("em",{parentName:"p"},"not")," affect the number of applications that are scheduled or active in the queue at the same time.\nAll applications that have pending resource requests can and will be scheduled in a queue unless specifically filtered out.\nEven when applications are sorted using a first in first out policy multiple applications will run in a queue in parallel. "),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"parent")," queue will always use the fair policy to sort the child queues."),Object(r.b)("p",null,"The following configuration entry sets the application sorting policy to ",Object(r.b)("inlineCode",{parentName:"p"},"fifo")," for the queue ",Object(r.b)("inlineCode",{parentName:"p"},"root.sandbox"),": "),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"partitions:\n  - name: default\n    queues:\n    - name: root\n      queues:\n      - name: sandbox\n        properties:\n          application.sort.policy: fifo\n")),Object(r.b)("p",null,"The only applications that are considered during scheduling must have outstanding requests.\nA filter is applied ",Object(r.b)("em",{parentName:"p"},"while")," sorting the applications to remove all that do not have outstanding requests."),Object(r.b)("h3",{id:"fifosortpolicy"},"FifoSortPolicy"),Object(r.b)("p",null,"Short description: first in first out, based on application create time",Object(r.b)("br",{parentName:"p"}),"\n","Config value: fifo (default)",Object(r.b)("br",{parentName:"p"}),"\n","Behaviour:",Object(r.b)("br",{parentName:"p"}),"\n","Before sorting the applications are filtered and must have pending resource requests."),Object(r.b)("p",null,"After filtering the applications left are sorted based on the application create time stamp only, no other filtering is applied.\nSince applications can only be added while the system is locked there can never be two applications with the exact same time stamp. "),Object(r.b)("p",null,"The result is that the oldest application that requests resources gets resources.\nYounger applications will be given resources when all the current requests of older applications have been fulfilled. "),Object(r.b)("h3",{id:"fairsortpolicy"},"FairSortPolicy"),Object(r.b)("p",null,"Short description: fair based on usage",Object(r.b)("br",{parentName:"p"}),"\n","Config value: fair",Object(r.b)("br",{parentName:"p"}),"\n","Behaviour:",Object(r.b)("br",{parentName:"p"}),"\n","Before sorting the applications are filtered and must have pending resource requests."),Object(r.b)("p",null,"After filtering the applications left are sorted based on the application usage.\nThe usage of the application is defined as all confirmed and unconfirmed allocations for the applications.\nAll resources defined on the application will be taken into account when calculating the usage."),Object(r.b)("p",null,"The result is that the resources available are spread equally over all applications that request resources."),Object(r.b)("h3",{id:"stateawarepolicy"},"StateAwarePolicy"),Object(r.b)("p",null,"Short description: limit of one (1) application in Starting or Accepted state",Object(r.b)("br",{parentName:"p"}),"\n","Config value: stateaware",Object(r.b)("br",{parentName:"p"}),"\n","Behaviour:",Object(r.b)("br",{parentName:"p"}),"\n","This sorting policy requires an understanding of the application states.\nApplications states are described in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/next/design/scheduler_object_states#application-state"}),"application states")," documentation."),Object(r.b)("p",null,"Before sorting applications the following filters are applied to all applications in the queue:\nThe first filter is based on the application state.\nThe following applications pass through the filter and generate the first intermediate list:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"all applications in the state ",Object(r.b)("em",{parentName:"li"},"running")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"one")," (1) application in the ",Object(r.b)("em",{parentName:"li"},"starting")," state"),Object(r.b)("li",{parentName:"ul"},"if there are ",Object(r.b)("em",{parentName:"li"},"no")," applications in the ",Object(r.b)("em",{parentName:"li"},"starting")," state ",Object(r.b)("em",{parentName:"li"},"one")," (1) application in the ",Object(r.b)("em",{parentName:"li"},"accepted")," state is added")),Object(r.b)("p",null,"The second filter takes the result of the first filter as an input.\nThe preliminary list is filtered again: all applications ",Object(r.b)("em",{parentName:"p"},"without")," a pending request are removed."),Object(r.b)("p",null,"After filtering based on status and pending requests the applications that remain are sorted.\nThe final list is thus filtered twice with the remaining applications sorted on create time."),Object(r.b)("p",null,"To recap the ",Object(r.b)("em",{parentName:"p"},"staring")," and ",Object(r.b)("em",{parentName:"p"},"accepted")," state interactions:\nThe application in the ",Object(r.b)("em",{parentName:"p"},"accepted")," state is only added if there is no application in the ",Object(r.b)("em",{parentName:"p"},"starting")," state.\nThe application in the ",Object(r.b)("em",{parentName:"p"},"starting")," state does not have to have pending requests.\nAny application in the ",Object(r.b)("em",{parentName:"p"},"starting")," state will prevent ",Object(r.b)("em",{parentName:"p"},"accepted")," applications from being added to the filtered list."),Object(r.b)("p",null,"For further details see the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/next/design/state_aware_scheduling#example-run"}),"Example run")," in the design document."),Object(r.b)("p",null,"The result is that already running applications that request resources will get resources first.\nA drip feed of one new applications is added to the list of running applications to be allocated after all running applications.  "),Object(r.b)("h2",{id:"node-sorting"},"Node sorting"),Object(r.b)("p",null,"The node sorting policy is set for a partition via the config.\nEach partition can use a different policy."),Object(r.b)("p",null,"The following configuration entry sets the node sorting policy to ",Object(r.b)("inlineCode",{parentName:"p"},"fair")," for the partition ",Object(r.b)("inlineCode",{parentName:"p"},"default"),": "),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"partitions:\n  - name: default\n    nodesortpolicy:\n        type: fair\n")),Object(r.b)("h3",{id:"fairnesspolicy"},"FairnessPolicy"),Object(r.b)("p",null,"Short description: available resource, descending order",Object(r.b)("br",{parentName:"p"}),"\n","Config value: fair (default)",Object(r.b)("br",{parentName:"p"}),"\n","Behaviour:",Object(r.b)("br",{parentName:"p"}),"\n","Sort the list of nodes by the amount of available resources so that the node with the ",Object(r.b)("em",{parentName:"p"},"highest")," amount of available resource is the first in the list.\nAll resources defined on a node will be taken into account when calculating the usage.\nResources of the same type are compared for the nodes. "),Object(r.b)("p",null,"This results in a node with the lowest utilisation to be considered first for assigning new allocation.\nResulting in a spread of allocations over all available nodes.\nLeading to an overall lower utilisation of the individual available nodes, unless the whole environment is highly utilised.\nKeeping the load on all nodes at a similar level does help\nIn an environment that auto scales by adding new nodes this could trigger unexpected auto scale requests.   "),Object(r.b)("h3",{id:"binpackingpolicy"},"BinPackingPolicy"),Object(r.b)("p",null,"Short description: available resource, ascending order",Object(r.b)("br",{parentName:"p"}),"\n","Config value: binpacking",Object(r.b)("br",{parentName:"p"}),"\n","Behaviour:",Object(r.b)("br",{parentName:"p"}),"\n","Sort the list of nodes by the amount of available resources so that the node with the ",Object(r.b)("em",{parentName:"p"},"lowest")," amount of available resource is the first in the list.\nAll resources defined on a node will be taken into account when calculating the usage.\nResources of the same type are compared for the nodes. "),Object(r.b)("p",null,"This results in a node with the highest utilisation to be considered first for assigning new allocation.\nResulting in a high(er) utilisation of a small(er) number of nodes, better suited for cloud deployments.   "),Object(r.b)("h2",{id:"request-sorting"},"Request sorting"),Object(r.b)("p",null,"There is currently one policy for sorting requests within an application.\nThis policy is not configurable.\nSorting requests is only possible based on the priority of the request.\nIf there are multiple requests within an application that have the same priority the order of the requests is undetermined.\nThis means that the order of requests with the same priority can, and most likely will, change between runs."))}p.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return n?a.a.createElement(h,l(l({ref:t},c),{},{components:n})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);