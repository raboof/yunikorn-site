"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7315],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,u(u({ref:t},c),{},{components:n})):r.createElement(h,u({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,u=new Array(i);u[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:a,u[1]=o;for(var s=2;s<i;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29040:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return I},default:function(){return x},frontMatter:function(){return O},metadata:function(){return Y},toc:function(){return D}});var r=n(87462),a=n(63366),i=n(67294),u=n(3905),o=n(86010),l=n(12466),s=n(16550),c=n(91980),m=n(67392),p=n(50012);function d(e){return function(e){return i.Children.map(e,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function h(e){var t=e.values,n=e.children;return(0,i.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,m.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,a=(0,s.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,c._X)(u),(0,i.useCallback)((function(e){if(u){var t=new URLSearchParams(a.location.search);t.set(u,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[u,a])]}function v(e){var t,n,r,a,u=e.defaultValue,o=e.queryString,l=void 0!==o&&o,s=e.groupId,c=h(e),m=(0,i.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:c})})),d=m[0],v=m[1],k=b({queryString:l,groupId:s}),y=k[0],g=k[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,p.Nk)(t),r=n[0],a=n[1],[r,(0,i.useCallback)((function(e){t&&a.set(e)}),[t,a])]),w=N[0],j=N[1],T=function(){var e=null!=y?y:w;return f({value:e,tabValues:c})?e:null}();return(0,i.useLayoutEffect)((function(){T&&v(T)}),[T]),{selectedValue:d,selectValue:(0,i.useCallback)((function(e){if(!f({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);v(e),g(e),j(e)}),[g,j,c]),tabValues:c}}var k=n(72389),y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,n=e.block,a=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],m=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==a&&(m(t),u(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var i,u=c.indexOf(e.currentTarget)-1;n=null!=(i=c[u])?i:c[c.length-1]}null==(t=n)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,u=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:p},u,{className:(0,o.Z)("tabs__item",y.tabItem,null==u?void 0:u.className,{"tabs__item--active":a===t})}),null!=n?n:t)})))}function N(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var a=n.find((function(e){return e.props.value===r}));return a?(0,i.cloneElement)(a,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=v(e);return i.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},i.createElement(g,(0,r.Z)({},e,t)),i.createElement(N,(0,r.Z)({},e,t)))}function j(e){var t=(0,k.Z)();return i.createElement(w,(0,r.Z)({key:String(t)},e))}var T={tabItem:"tabItem_Ymn6"};function C(e){var t=e.children,n=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",className:(0,o.Z)(T.tabItem,r),hidden:n},t)}var E=["components"],O={id:"get_involved",title:"Get Involved"},I=void 0,Y={type:"mdx",permalink:"/community/get_involved",source:"@site/src/pages/community/get_involved.md",title:"Get Involved",description:"\x3c!--",frontMatter:{id:"get_involved",title:"Get Involved"}},D=[{value:"How to join YuniKorn Community",id:"how-to-join-yunikorn-community",level:2},{value:"Contribute through github",id:"contribute-through-github",level:3},{value:"Communication Channels",id:"communication-channels",level:3},{value:"Community Meetings",id:"community-meetings",level:3},{value:"Target Audiences:",id:"target-audiences",level:4},{value:"Schedule",id:"schedule",level:4},{value:"Resources",id:"resources",level:4},{value:"How to share feedback to YuniKorn Community",id:"how-to-share-feedback-to-yunikorn-community",level:2},{value:"Other feedback mechanisms",id:"other-feedback-mechanisms",level:3}],M={toc:D},S="wrapper";function x(e){var t=e.components,n=(0,a.Z)(e,E);return(0,u.kt)(S,(0,r.Z)({},M,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"get-involved"},"Get Involved"),(0,u.kt)("p",null,'The Apache YuniKorn community is quite diverse, we have engineers from Alibaba, Apple,\nCloudera, Linkedin, Microsoft, Nvidia, Tencent, Uber, etc. (sorted by alphabetical order). The community deeply believes in the\nimportance of this diversity and the value of "The Apache Way".  We welcome any form of contributions, code, documentation or suggestions!\n\ud83d\ude03 Don\'t wait, join us now!'),(0,u.kt)("h2",{id:"how-to-join-yunikorn-community"},"How to join YuniKorn Community"),(0,u.kt)("p",null,"Please join us through one of the following channels:"),(0,u.kt)("h3",{id:"contribute-through-github"},"Contribute through github"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Basic steps of contributing to project is explained here - ",(0,u.kt)("a",{parentName:"li",href:"/community/how_to_contribute"},"How to contribute"))),(0,u.kt)("h3",{id:"communication-channels"},"Communication Channels"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"Mailing lists:"),(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},"for people wanting to contribute to or discuss the project development: ",(0,u.kt)("a",{parentName:"li",href:"mailto:dev@yunikorn.apache.org"},"dev@yunikorn.apache.org"),(0,u.kt)("br",{parentName:"li"}),"subscribe to: dev@ ",(0,u.kt)("a",{parentName:"li",href:"mailto:dev-subscribe@yunikorn.apache.org?subject=%22subscribe%20to%20YuniKorn%20dev%20list%22"},"subscribe")," (",(0,u.kt)("a",{parentName:"li",href:"mailto:dev-unsubscribe@yunikorn.apache.org?subject=%22unsubscribe%20from%20YuniKorn%20dev%20list%22"},"unsubscribe")," ",(0,u.kt)("a",{parentName:"li",href:"https://lists.apache.org/list.html?dev@yunikorn.apache.org"},"archives"),")"),(0,u.kt)("li",{parentName:"ul"},"for JIRA issue updates subscribe to: issues@ ",(0,u.kt)("a",{parentName:"li",href:"mailto:issues-subscribe@yunikorn.apache.org?subject=%22subscribe%20to%20YuniKorn%20issues%20list%22"},"subscribe")," (",(0,u.kt)("a",{parentName:"li",href:"mailto:issues-unsubscribe@yunikorn.apache.org?subject=%22unsubscribe%20from%20YuniKorn%20issues%20list%22"},"unsubscribe")," ",(0,u.kt)("a",{parentName:"li",href:"https://lists.apache.org/list.html?issues@yunikorn.apache.org"},"archives"),")"),(0,u.kt)("li",{parentName:"ul"},"for GitHub pull requests messages subscribe to: reviews@ ",(0,u.kt)("a",{parentName:"li",href:"mailto:reviews-subscribe@yunikorn.apache.org?subject=%22subscribe%20to%20YuniKorn%20reviews%20list%22"},"subscribe")," (",(0,u.kt)("a",{parentName:"li",href:"mailto:reviews-unsubscribe@yunikorn.apache.org?subject=%22unsubscribe%20from%20YuniKorn%20reviews%20list%22"},"unsubscribe")," ",(0,u.kt)("a",{parentName:"li",href:"https://lists.apache.org/list.html?reviews@yunikorn.apache.org"},"archives"),")"))),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"We use ",(0,u.kt)("a",{parentName:"p",href:"https://slack.com/"},"Slack")," as our collaboration system, you can join us by accessing ",(0,u.kt)("a",{parentName:"p",href:"https://join.slack.com/t/yunikornworkspace/shared_invite/enQtNzAzMjY0OTI4MjYzLTBmMDdkYTAwNDMwNTE3NWVjZWE1OTczMWE4NDI2Yzg3MmEyZjUyYTZlMDE5M2U4ZjZhNmYyNGFmYjY4ZGYyMGE"},"this link"),".\nCurrently, we have following channels in the workspace: ",(0,u.kt)("inlineCode",{parentName:"p"},"#yunikorn-dev")," and ",(0,u.kt)("inlineCode",{parentName:"p"},"#yunikorn-user"),".")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"We have periodically community sync ups in multiple timezones and languages, please find ",(0,u.kt)("a",{parentName:"p",href:"#community-meetings"},"Community Syncup")," to attend online sync ups."))),(0,u.kt)("h3",{id:"community-meetings"},"Community Meetings"),(0,u.kt)("h4",{id:"target-audiences"},"Target Audiences:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Developers who are interested to contribute to YuniKorn project."),(0,u.kt)("li",{parentName:"ul"},"Users who are using or interested to learn about the project.")),(0,u.kt)("h4",{id:"schedule"},"Schedule"),(0,u.kt)(j,{defaultValue:"scheduleEN",values:[{label:"America/EU/India",value:"scheduleEN"},{label:"\u4e2d\u6587/Mandarin",value:"scheduleCN"}],mdxType:"Tabs"},(0,u.kt)(C,{value:"scheduleEN",mdxType:"TabItem"}," \ud83d\udcc6 Bi-weekly 4:30 PM US Pacific Time on Wednesdays. ",(0,u.kt)("a",{href:"https://cloudera.zoom.us/j/99833510390"},"Click here to join the Zoom meeting.")," "),(0,u.kt)(C,{value:"scheduleCN",mdxType:"TabItem"}," \ud83d\udcc6 Weekly 1:00 PM China Standard Time (GMT+8) on Wednesday.  ",(0,u.kt)("a",{href:"https://cloudera.zoom.us/j/92085019558"},"Click here to join the Zoom meeting.")," ")),(0,u.kt)("h4",{id:"resources"},"Resources"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"Meeting Notes: ",(0,u.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/165gzC7uhcKc5XDWiMYSRKBiPQBy2tDtXADUPuhGlUa0/edit#heading=h.461goivmz24v"},"Google Doc"))),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"Calendar: ",(0,u.kt)("a",{parentName:"p",href:"https://calendar.google.com/calendar/u/0?cid=YXBhY2hlLnl1bmlrb3JuQGdtYWlsLmNvbQ"},"Google Calendar")," \ud83d\udc48"))),(0,u.kt)("h2",{id:"how-to-share-feedback-to-yunikorn-community"},"How to share feedback to YuniKorn Community"),(0,u.kt)("p",null,"We welcome you to try our latest releases and share your experiences."),(0,u.kt)("p",null,"Any point, if you are facing any issues:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Raise an issue or a feedback in the JIRA as per our ",(0,u.kt)("a",{parentName:"li",href:"/community/reporting_issues"},"guide"),"."),(0,u.kt)("li",{parentName:"ul"},"Clarify / Seek help in the YuniKorn slack ",(0,u.kt)("inlineCode",{parentName:"li"},"#yunikorn-user")," channel")),(0,u.kt)("h3",{id:"other-feedback-mechanisms"},"Other feedback mechanisms"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"If you think, we can add more inputs to this document or additional documentation links for developers including setup etc, please raise issue under YuniKorn Documentation. Refer our ",(0,u.kt)("a",{parentName:"li",href:"reporting_issues"},"guide"),"."),(0,u.kt)("li",{parentName:"ul"},"Any other support please request at YuniKorn slack ",(0,u.kt)("inlineCode",{parentName:"li"},"#general")," channel")))}x.isMDXComponent=!0}}]);