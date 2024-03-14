"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70860],{15680:(e,n,l)=>{l.d(n,{xA:()=>c,yg:()=>y});var t=l(96540);function r(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function a(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function o(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?a(Object(l),!0).forEach((function(n){r(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function u(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=t.createContext({}),i=function(e){var n=t.useContext(s),l=n;return e&&(l="function"==typeof e?e(n):o(o({},n),e)),l},c=function(e){var n=i(e.components);return t.createElement(s.Provider,{value:n},e.children)},_="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var l=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),_=i(l),p=r,y=_["".concat(s,".").concat(p)]||_[p]||d[p]||a;return l?t.createElement(y,o(o({ref:n},c),{},{components:l})):t.createElement(y,o({ref:n},c))}));function y(e,n){var l=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=p;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[_]="string"==typeof e?e:r,o[1]=u;for(var i=2;i<a;i++)o[i]=l[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,l)}p.displayName="MDXCreateElement"},19365:(e,n,l)=>{l.d(n,{A:()=>o});var t=l(96540),r=l(20053);const a={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:l,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:l},n)}},11470:(e,n,l)=>{l.d(n,{A:()=>N});var t=l(58168),r=l(96540),a=l(20053),o=l(23104),u=l(56347),s=l(57485),i=l(31682),c=l(89466);function _(e){return function(e){var n,l;return null!=(n=null==(l=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:l.filter(Boolean))?n:[]}(e).map((e=>{let{props:{value:n,label:l,attributes:t,default:r}}=e;return{value:n,label:l,attributes:t,default:r}}))}function d(e){const{values:n,children:l}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:_(l);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,l])}function p(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function y(e){let{queryString:n=!1,groupId:l}=e;const t=(0,u.W6)(),a=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=l?l:null}({queryString:n,groupId:l});return[(0,s.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function g(e){const{defaultValue:n,queryString:l=!1,groupId:t}=e,a=d(e),[o,u]=(0,r.useState)((()=>function(e){var n;let{defaultValue:l,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!p({value:l,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+l+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return l}const r=null!=(n=t.find((e=>e.default)))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[s,i]=y({queryString:l,groupId:t}),[_,g]=function(e){let{groupId:n}=e;const l=function(e){return e?"docusaurus.tab."+e:null}(n),[t,a]=(0,c.Dv)(l);return[t,(0,r.useCallback)((e=>{l&&a.set(e)}),[l,a])]}({groupId:t}),m=(()=>{const e=null!=s?s:_;return p({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{m&&u(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);u(e),i(e),g(e)}),[i,g,a]),tabValues:a}}var m=l(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:n,block:l,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:_}=(0,o.a_)(),d=e=>{const n=e.currentTarget,l=c.indexOf(n),t=i[l].value;t!==u&&(_(n),s(t))},p=e=>{var n;let l=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var t;const n=c.indexOf(e.currentTarget)+1;l=null!=(t=c[n])?t:c[0];break}case"ArrowLeft":{var r;const n=c.indexOf(e.currentTarget)-1;l=null!=(r=c[n])?r:c[c.length-1];break}}null==(n=l)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":l},n)},i.map((e=>{let{value:n,label:l,attributes:o}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>c.push(e),onKeyDown:p,onClick:d},o,{className:(0,a.A)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":u===n})}),null!=l?l:n)})))}function b(e){let{lazy:n,children:l,selectedValue:t}=e;const a=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function v(e){const n=g(e);return r.createElement("div",{className:(0,a.A)("tabs-container",h.tabList)},r.createElement(k,(0,t.A)({},e,n)),r.createElement(b,(0,t.A)({},e,n)))}function N(e){const n=(0,m.A)();return r.createElement(v,(0,t.A)({key:String(n)},e))}},40098:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>u,metadata:()=>i,toc:()=>_});var t=l(58168),r=(l(96540),l(15680)),a=l(11470),o=l(19365);const u={id:"scheduler",title:"Scheduler"},s=void 0,i={unversionedId:"metrics/scheduler",id:"version-1.4.0/metrics/scheduler",title:"Scheduler",description:"\x3c!--",source:"@site/versioned_docs/version-1.4.0/metrics/scheduler.mdx",sourceDirName:"metrics",slug:"/metrics/scheduler",permalink:"/docs/1.4.0/metrics/scheduler",draft:!1,tags:[],version:"1.4.0",frontMatter:{id:"scheduler",title:"Scheduler"},sidebar:"docs",previous:{title:"System",permalink:"/docs/1.4.0/api/system"},next:{title:"Runtime",permalink:"/docs/1.4.0/metrics/runtime"}},c={},_=[{value:"Container",id:"container",level:2},{value:"Total allocation attempt",id:"total-allocation-attempt",level:3},{value:"Application",id:"application",level:2},{value:"Total",id:"total",level:3},{value:"Total Submission",id:"total-submission",level:3},{value:"Latency",id:"latency",level:2},{value:"Scheduling latency",id:"scheduling-latency",level:3},{value:"Node sorting",id:"node-sorting",level:3},{value:"Trynode",id:"trynode",level:3},{value:"Trypreemption",id:"trypreemption",level:3},{value:"Node",id:"node",level:2},{value:"Node",id:"node-1",level:3},{value:"Total node usage",id:"total-node-usage",level:3}],d={toc:_},p="wrapper";function y(e){let{components:n,...l}=e;return(0,r.yg)(p,(0,t.A)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"container"},"Container"),(0,r.yg)("h3",{id:"total-allocation-attempt"},"Total allocation attempt"),(0,r.yg)("p",null,"Total number of attempts to allocate containers.\nState of the attempt includes ",(0,r.yg)("inlineCode",{parentName:"p"},"allocated"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"rejected"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"error"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"released"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Metric Type"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"counter")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Namespace"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Subsystem"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"scheduler")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'yunikorn_scheduler_container_allocation_attempt_total{state="allocated"} 0\nyunikorn_scheduler_container_allocation_attempt_total{state="error"} 0\nyunikorn_scheduler_container_allocation_attempt_total{state="released"} 0\n')),(0,r.yg)("h2",{id:"application"},"Application"),(0,r.yg)("h3",{id:"total"},"Total"),(0,r.yg)("p",null,"Total number of applications.\nState of the application includes ",(0,r.yg)("inlineCode",{parentName:"p"},"running"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"failed")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"completed"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Metric Type"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"gauge")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Namespace"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Subsystem"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"scheduler")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'yunikorn_scheduler_application_total{state="running"} 0\n')),(0,r.yg)("h3",{id:"total-submission"},"Total Submission"),(0,r.yg)("p",null,"Total number of application submissions.\nState of the attempt includes ",(0,r.yg)("inlineCode",{parentName:"p"},"accepted")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"rejected"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Metric Type"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"counter")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Namespace"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Subsystem"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"scheduler")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'yunikorn_scheduler_application_submission_total{result="accepted"} 6\n')),(0,r.yg)("h2",{id:"latency"},"Latency"),(0,r.yg)("h3",{id:"scheduling-latency"},"Scheduling latency"),(0,r.yg)("p",null,"Latency of the main scheduling routine, in milliseconds.\nThis metric includes latencies, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"Node sorting"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Trynode")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Trypreemption"),". "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Metric Type"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"histogram")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Interval"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"millisecond")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Namespace"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Subsystem"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"scheduler")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'yunikorn_scheduler_scheduling_latency_milliseconds_bucket{le="0.0001"} 0\nyunikorn_scheduler_scheduling_latency_milliseconds_bucket{le="0.001"} 0\nyunikorn_scheduler_scheduling_latency_milliseconds_bucket{le="0.01"} 0\nyunikorn_scheduler_scheduling_latency_milliseconds_bucket{le="0.1"} 0\nyunikorn_scheduler_scheduling_latency_milliseconds_bucket{le="1"} 0\nyunikorn_scheduler_scheduling_latency_milliseconds_bucket{le="10"} 0\nyunikorn_scheduler_scheduling_latency_milliseconds_bucket{le="+Inf"} 0\nyunikorn_scheduler_scheduling_latency_milliseconds_sum 0\nyunikorn_scheduler_scheduling_latency_milliseconds_count 0\n')),(0,r.yg)("h3",{id:"node-sorting"},"Node sorting"),(0,r.yg)("p",null,"Latencies including ",(0,r.yg)("inlineCode",{parentName:"p"},"node sorting"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"application sorting")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"queue sorting"),", in milliseconds."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Metric Type"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"histogram")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Interval"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"millisecond")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Namespace"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Subsystem"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"scheduler")),(0,r.yg)(a.A,{defaultValue:"node_sorting",values:[{label:"Node sorting",value:"node_sorting"},{label:"App sorting",value:"app_sorting"},{label:"Queue sorting",value:"queue_sorting"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"app_sorting",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'yunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="app",le="0.0001"} 5\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="app",le="0.001"} 6\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="app",le="0.01"} 6\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="app",le="0.1"} 6\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="app",le="1"} 6\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="app",le="10"} 6\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="app",le="+Inf"} 6\nyunikorn_scheduler_node_sorting_latency_milliseconds_sum{level="app"} 0.00026345400000000004\nyunikorn_scheduler_node_sorting_latency_milliseconds_count{level="app"} 6\n'))),(0,r.yg)(o.A,{value:"node_sorting",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'yunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="node",le="0.0001"} 3\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="node",le="0.001"} 3\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="node",le="0.01"} 3\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="node",le="0.1"} 3\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="node",le="1"} 3\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="node",le="10"} 3\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="node",le="+Inf"} 3\nyunikorn_scheduler_node_sorting_latency_milliseconds_sum{level="node"} 2.5013999999999998e-05\nyunikorn_scheduler_node_sorting_latency_milliseconds_count{level="node"} 3\n'))),(0,r.yg)(o.A,{value:"queue_sorting",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'yunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="queue",le="0.0001"} 9\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="queue",le="0.001"} 9\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="queue",le="0.01"} 9\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="queue",le="0.1"} 9\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="queue",le="1"} 9\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="queue",le="10"} 9\nyunikorn_scheduler_node_sorting_latency_milliseconds_bucket{level="queue",le="+Inf"} 9\nyunikorn_scheduler_node_sorting_latency_milliseconds_sum{level="queue"} 4.0093e-05\nyunikorn_scheduler_node_sorting_latency_milliseconds_count{level="queue"} 9\n')))),(0,r.yg)("h3",{id:"trynode"},"Trynode"),(0,r.yg)("p",null,"Latency of node condition checks for container allocations, such as placement constraints, in milliseconds."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Metric Type"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"histogram")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Interval"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"millisecond")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Namespace"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Subsystem"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"scheduler")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'yunikorn_scheduler_trynode_latency_milliseconds_bucket{le="0.0001"} 0\nyunikorn_scheduler_trynode_latency_milliseconds_bucket{le="0.001"} 0\nyunikorn_scheduler_trynode_latency_milliseconds_bucket{le="0.01"} 0\nyunikorn_scheduler_trynode_latency_milliseconds_bucket{le="0.1"} 0\nyunikorn_scheduler_trynode_latency_milliseconds_bucket{le="1"} 0\nyunikorn_scheduler_trynode_latency_milliseconds_bucket{le="10"} 0\nyunikorn_scheduler_trynode_latency_milliseconds_bucket{le="+Inf"} 0\nyunikorn_scheduler_trynode_latency_milliseconds_sum 0\nyunikorn_scheduler_trynode_latency_milliseconds_count 0\n')),(0,r.yg)("h3",{id:"trypreemption"},"Trypreemption"),(0,r.yg)("p",null,"Latency of preemption condition checks for container allocations, in milliseconds"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Metric Type"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"histogram")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Interval"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"millisecond")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Namespace"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Subsystem"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"scheduler")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'yunikorn_scheduler_trypreemption_latency_milliseconds_bucket{le="0.0001"} 0\nyunikorn_scheduler_trypreemption_latency_milliseconds_bucket{le="0.001"} 0\nyunikorn_scheduler_trypreemption_latency_milliseconds_bucket{le="0.01"} 0\nyunikorn_scheduler_trypreemption_latency_milliseconds_bucket{le="0.1"} 0\nyunikorn_scheduler_trypreemption_latency_milliseconds_bucket{le="1"} 0\nyunikorn_scheduler_trypreemption_latency_milliseconds_bucket{le="10"} 0\nyunikorn_scheduler_trypreemption_latency_milliseconds_bucket{le="+Inf"} 0\nyunikorn_scheduler_trypreemption_latency_milliseconds_sum 0\nyunikorn_scheduler_trypreemption_latency_milliseconds_count 0\n')),(0,r.yg)("h2",{id:"node"},"Node"),(0,r.yg)("h3",{id:"node-1"},"Node"),(0,r.yg)("p",null,"Total number of nodes.\nState of the node includes ",(0,r.yg)("inlineCode",{parentName:"p"},"active")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"failed"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Metric Type"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"gauge")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Namespace"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Subsystem"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"scheduler")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'yunikorn_scheduler_node{state="active"} 1\nyunikorn_scheduler_node{state="failed"} 0\n')),(0,r.yg)("h3",{id:"total-node-usage"},"Total node usage"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn_scheduler_<resource type>_node_usage_total"),"\nTotal resource usage of node, by resource name."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Metric Type"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"gauge")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Namespace"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Subsystem"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"scheduler")),(0,r.yg)(a.A,{defaultValue:"ephemeral_storage",values:[{label:"Ephemeral_storage",value:"ephemeral_storage"},{label:"Memory",value:"memory"},{label:"Pods",value:"pods"},{label:"vcore",value:"vcore"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"ephemeral_storage",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'yunikorn_scheduler_ephemeral_storage_node_usage_total\nyunikorn_scheduler_ephemeral_storage_node_usage_total{range="(10%, 20%]"} 0\nyunikorn_scheduler_ephemeral_storage_node_usage_total{range="(20%,30%]"} 0\nyunikorn_scheduler_ephemeral_storage_node_usage_total{range="(30%,40%]"} 0\nyunikorn_scheduler_ephemeral_storage_node_usage_total{range="(40%,50%]"} 0\nyunikorn_scheduler_ephemeral_storage_node_usage_total{range="(50%,60%]"} 0\nyunikorn_scheduler_ephemeral_storage_node_usage_total{range="(60%,70%]"} 0\nyunikorn_scheduler_ephemeral_storage_node_usage_total{range="(70%,80%]"} 0\nyunikorn_scheduler_ephemeral_storage_node_usage_total{range="(80%,90%]"} 0\nyunikorn_scheduler_ephemeral_storage_node_usage_total{range="(90%,100%]"} 0\nyunikorn_scheduler_ephemeral_storage_node_usage_total{range="[0,10%]"} 1\n'))),(0,r.yg)(o.A,{value:"memory",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'yunikorn_scheduler_memory_node_usage_total\nyunikorn_scheduler_memory_node_usage_total{range="(10%, 20%]"} 0\nyunikorn_scheduler_memory_node_usage_total{range="(20%,30%]"} 0\nyunikorn_scheduler_memory_node_usage_total{range="(30%,40%]"} 0\nyunikorn_scheduler_memory_node_usage_total{range="(40%,50%]"} 0\nyunikorn_scheduler_memory_node_usage_total{range="(50%,60%]"} 0\nyunikorn_scheduler_memory_node_usage_total{range="(60%,70%]"} 0\nyunikorn_scheduler_memory_node_usage_total{range="(70%,80%]"} 0\nyunikorn_scheduler_memory_node_usage_total{range="(80%,90%]"} 0\nyunikorn_scheduler_memory_node_usage_total{range="(90%,100%]"} 0\nyunikorn_scheduler_memory_node_usage_total{range="[0,10%]"} 1\n'))),(0,r.yg)(o.A,{value:"pods",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'yunikorn_scheduler_pods_node_usage_total\nyunikorn_scheduler_pods_node_usage_total{range="(10%, 20%]"} 0\nyunikorn_scheduler_pods_node_usage_total{range="(20%,30%]"} 0\nyunikorn_scheduler_pods_node_usage_total{range="(30%,40%]"} 0\nyunikorn_scheduler_pods_node_usage_total{range="(40%,50%]"} 0\nyunikorn_scheduler_pods_node_usage_total{range="(50%,60%]"} 0\nyunikorn_scheduler_pods_node_usage_total{range="(60%,70%]"} 0\nyunikorn_scheduler_pods_node_usage_total{range="(70%,80%]"} 0\nyunikorn_scheduler_pods_node_usage_total{range="(80%,90%]"} 0\nyunikorn_scheduler_pods_node_usage_total{range="(90%,100%]"} 0\nyunikorn_scheduler_pods_node_usage_total{range="[0,10%]"} 1\n'))),(0,r.yg)(o.A,{value:"vcore",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'yunikorn_scheduler_vcore_node_usage_total\nyunikorn_scheduler_vcore_node_usage_total{range="(10%, 20%]"} 0\nyunikorn_scheduler_vcore_node_usage_total{range="(20%,30%]"} 0\nyunikorn_scheduler_vcore_node_usage_total{range="(30%,40%]"} 0\nyunikorn_scheduler_vcore_node_usage_total{range="(40%,50%]"} 0\nyunikorn_scheduler_vcore_node_usage_total{range="(50%,60%]"} 0\nyunikorn_scheduler_vcore_node_usage_total{range="(60%,70%]"} 0\nyunikorn_scheduler_vcore_node_usage_total{range="(70%,80%]"} 0\nyunikorn_scheduler_vcore_node_usage_total{range="(80%,90%]"} 0\nyunikorn_scheduler_vcore_node_usage_total{range="(90%,100%]"} 0\nyunikorn_scheduler_vcore_node_usage_total{range="[0,10%]"} 1\n')))),"```")}y.isMDXComponent=!0}}]);