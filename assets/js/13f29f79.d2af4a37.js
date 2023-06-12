"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72799],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),s=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(c.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),h=n,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||l;return t?r.createElement(m,i(i({ref:a},u),{},{components:t})):r.createElement(m,i({ref:a},u))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=h;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},28625:function(e,a,t){t.r(a),t.d(a,{contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=t(87462),n=t(63366),l=(t(67294),t(3905)),i=["components"],o={id:"download",title:"Apache YuniKorn"},c=void 0,s={type:"mdx",permalink:"/community/download",source:"@site/src/pages/community/download.md",title:"Apache YuniKorn",description:"\x3c!--",frontMatter:{id:"download",title:"Apache YuniKorn"}},u=[{value:"Verifying the signature",id:"verifying-the-signature",level:2},{value:"Verifying the checksum",id:"verifying-the-checksum",level:2},{value:"Verifying the release",id:"verifying-the-release",level:2},{value:"Older releases",id:"older-releases",level:2},{value:"License",id:"license",level:2}],p={toc:u},d="wrapper";function h(e){var a=e.components,t=(0,n.Z)(e,i);return(0,l.kt)(d,(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"apache-yunikorn"},"Apache YuniKorn"),(0,l.kt)("p",null,"Apache YuniKorn is released as source code tarballs.\nThe downloads for the latest release are distributed via mirror sites.\nOlder releases can be downloaded from the Apache archive site.\nAll release artifacts should be checked for tampering using GPG or SHA-512."),(0,l.kt)("p",null,"We publish prebuilt docker images for everyone's convenience."),(0,l.kt)("p",null,"The latest release of Apache YuniKorn is v1.3.0."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Release date"),(0,l.kt)("th",{parentName:"tr",align:null},"Source download"),(0,l.kt)("th",{parentName:"tr",align:null},"Docker images"),(0,l.kt)("th",{parentName:"tr",align:null},"Release notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v1.3.0"),(0,l.kt)("td",{parentName:"tr",align:null},"2023-06-12"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://downloads.apache.org/yunikorn/1.3.0/apache-yunikorn-1.3.0-src.tar.gz"},"Download"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://downloads.apache.org/yunikorn/1.3.0/apache-yunikorn-1.3.0-src.tar.gz.sha512"},"Checksum")," & ",(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/yunikorn/1.3.0/apache-yunikorn-1.3.0-src.tar.gz.asc"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/scheduler-1.3.0/images/sha256-cbf05725ca0fa89bda70547c6c00ac955d3aa2456a278b195973c4d7eddd516f?context=explore"},"scheduler"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/admission-1.3.0/images/sha256-6f3d18867eb39e6c60279c3ee7f2ef65ba243a1451deb0cca9ccac941a785b2f?context=explore"},"admission-controller")," ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/web-1.3.0/images/sha256-2d585beca081080671a56664492951b17e9f9463e7d30fd759ce65a4052c32e9?context=explore"},"web")," ",(0,l.kt)("br",null)," ",(0,l.kt)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/scheduler-plugin-1.3.0/images/sha256-67795e0071df286e3a8b089ed3613f516accddd319d97eeb4029412e7dce04db?context=explore"},"scheduler plugin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/release-announce/1.3.0"},"Announcement"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v1.2.0"),(0,l.kt)("td",{parentName:"tr",align:null},"2023-02-02"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/yunikorn/1.2.0/apache-yunikorn-1.2.0-src.tar.gz"},"Download")," ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/yunikorn/1.2.0/apache-yunikorn-1.2.0-src.tar.gz.sha512"},"Checksum")," & ",(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/yunikorn/1.2.0/apache-yunikorn-1.2.0-src.tar.gz.asc"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/scheduler-1.2.0/images/sha256-c3b1a7b2cfec3f3560415519278cc4d94748f0f60ee80dfaf23fcc22dbb8b8e5"},"scheduler")," ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/admission-1.2.0/images/sha256-7f18fcd080640974ae586d30eda009daf0ad93fa22ada66b0a337ac3fb46b7ac"},"admission-controller")," ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/web-1.2.0/images/sha256-706a2895461623f20d4102f0132d66dade9c15edf5cad40065506a4d70c32576"},"web")," ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/scheduler-plugin-1.2.0/images/sha256-d946495946b89d03f7a8f786702d4b350a93f74d52e50bebb6b2bbdcb8e911a4?context=explore"},"scheduler plugin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/release-announce/1.2.0"},"Announcement"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v1.1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-09-08"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/yunikorn/1.1.0/apache-yunikorn-1.1.0-src.tar.gz"},"Download")," ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/yunikorn/1.1.0/apache-yunikorn-1.1.0-src.tar.gz.sha512"},"Checksum")," & ",(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/yunikorn/1.1.0/apache-yunikorn-1.1.0-src.tar.gz.asc"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/scheduler-1.1.0/images/sha256-5a45cede355b4c1d0016ba81b317e12a7608ac5de4779892f8c7fa53adf5d739"},"scheduler")," ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/admission-1.1.0/images/sha256-4389c126f252671e55bdac16e1bcfe7f83ef4ea7c3e83d333c81508920da825c"},"admission-controller")," ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/web-1.1.0/images/sha256-3f3075161283d8a78f4849f8163104d7db3e7bd3a467163729fb401421ac670f"},"web")," ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://hub.docker.com/layers/apache/yunikorn/scheduler-plugin-1.1.0/images/sha256-b182ec4d08c590cd179b811fe68dffa2d58dccc9b8568f108ad35af0ed62a4c1?context=explore"},"scheduler plugin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/release-announce/1.1.0"},"Announcement"))))),(0,l.kt)("h2",{id:"verifying-the-signature"},"Verifying the signature"),(0,l.kt)("p",null,"To verify the Apache YuniKorn release using GPG:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download the release apache-yunikorn-X.Y.Z-src.tar.gz from a mirror site."),(0,l.kt)("li",{parentName:"ul"},"Download the signature file apache-yunikorn-X.Y.Z-src.tar.gz.asc from Apache."),(0,l.kt)("li",{parentName:"ul"},"Download the Apache YuniKorn ",(0,l.kt)("a",{parentName:"li",href:"https://downloads.apache.org/yunikorn/KEYS"},"KEYS")," file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gpg --import KEYS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gpg --verify apache-yunikorn-X.Y.Z-src.tar.gz.asc"))),(0,l.kt)("p",null,"Note: On MacOS-X the GNU gpg utility does not read from a file when importing.\nThe import command should be ",(0,l.kt)("inlineCode",{parentName:"p"},"gpg --import < KEYS"),"   "),(0,l.kt)("h2",{id:"verifying-the-checksum"},"Verifying the checksum"),(0,l.kt)("p",null,"To verify the integrity of Apache YuniKorn release using the SHA-512 checksum:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download the release apache-yunikorn-X.Y.Z-src.tar.gz from a mirror site."),(0,l.kt)("li",{parentName:"ul"},"Download the checksum apache-yunikorn-X.Y.Z-src.tar.gz.sha512 from Apache."),(0,l.kt)("li",{parentName:"ul"},"Verify the checksum",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"on MacOS-X: ",(0,l.kt)("inlineCode",{parentName:"li"},"shasum -c apache-yunikorn-X.Y.Z-src.tar.gz.sha512")),(0,l.kt)("li",{parentName:"ul"},"on Linux: ",(0,l.kt)("inlineCode",{parentName:"li"},"sha512sum -c apache-yunikorn-X.Y.Z-src.tar.gz.sha512"))))),(0,l.kt)("h2",{id:"verifying-the-release"},"Verifying the release"),(0,l.kt)("p",null,"The release is a source code release and must be built before it can be used.\nUnpack the archive and follow the instructions in the ",(0,l.kt)("inlineCode",{parentName:"p"},"README.md")," file to build the images.\nA script and configuration to create a small cluster, using the locally built images, is provided in the release archive."),(0,l.kt)("p",null,"Run the script for more instructions and to list the tools required for validating the release:  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./validate_cluster.sh\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"kind")," cluster created is a small, but fully functional, Kubernetes cluster with Apache YuniKorn deployed. "),(0,l.kt)("h2",{id:"older-releases"},"Older releases"),(0,l.kt)("p",null,"Release announcement for all releases are available on the website ",(0,l.kt)("a",{parentName:"p",href:"/release-announce/"},"release announcements"),"."),(0,l.kt)("p",null,"You can find all previous releases in the ",(0,l.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/yunikorn/"},"archive repository"),".\nIf you are looking for older releases made during incubation check the ",(0,l.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/yunikorn/"},"incubator archive repository"),"."),(0,l.kt)("p",null,"The archives include all releases made not mentioned in the table above."),(0,l.kt)("h2",{id:"license"},"License"),(0,l.kt)("p",null,"The software is licensed under ",(0,l.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache License 2.0")))}h.isMDXComponent=!0}}]);