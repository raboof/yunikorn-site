"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5713],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7530:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],p={id:"run_mpi",title:"Run MPI Jobs",description:"How to run MPI jobs with YuniKorn",keywords:["mpi"]},u=void 0,s={unversionedId:"user_guide/workloads/run_mpi",id:"user_guide/workloads/run_mpi",title:"Run MPI Jobs",description:"How to run MPI jobs with YuniKorn",source:"@site/docs/user_guide/workloads/run_mpi.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_mpi",permalink:"/docs/next/user_guide/workloads/run_mpi",draft:!1,tags:[],version:"current",frontMatter:{id:"run_mpi",title:"Run MPI Jobs",description:"How to run MPI jobs with YuniKorn",keywords:["mpi"]},sidebar:"docs",previous:{title:"Run TensorFlow Jobs",permalink:"/docs/next/user_guide/workloads/run_tf"},next:{title:"Cluster",permalink:"/docs/next/api/cluster"}},l={},c=[{value:"Installing the MPI Operator",id:"installing-the-mpi-operator",level:2},{value:"Run a MPI Job",id:"run-a-mpi-job",level:2}],m={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide walks through how to setup the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/mpi-operator"},"MPI Operator")," and to how to run a MPIJob with the YuniKorn scheduler."),(0,i.kt)("h2",{id:"installing-the-mpi-operator"},"Installing the MPI Operator"),(0,i.kt)("p",null,"You can use the following command to install the mpi operator. If you have problems with installation,\nplease refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/mpi-operator"},"this doc")," for details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl create -f https://raw.githubusercontent.com/kubeflow/mpi-operator/master/deploy/v2beta1/mpi-operator.yaml\n")),(0,i.kt)("h2",{id:"run-a-mpi-job"},"Run a MPI Job"),(0,i.kt)("p",null,"This example shows to run a pure MPI application."),(0,i.kt)("p",null,"The program prints some basic information about the workers.\nThen, it calculates an approximate value for pi."),(0,i.kt)("p",null,"Here is a Pi YAML example ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/examples/mpioperator/Pi/pi.yaml"},"example"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kubeflow.org/v2beta1\nkind: MPIJob\nmetadata:\n  name: pi\nspec:\n  slotsPerWorker: 1\n  runPolicy:\n    cleanPodPolicy: Running\n    ttlSecondsAfterFinished: 60\n  sshAuthMountPath: /home/mpiuser/.ssh\n  mpiReplicaSpecs:\n    Launcher:\n      replicas: 1\n      template:\n        labels:\n          applicationId: "mpi_job_pi"\n          queue: root.mpi\n        spec:\n          schedulerName: yunikorn\n          containers:\n          - image: mpioperator/mpi-pi\n            name: mpi-launcher\n            securityContext:\n              runAsUser: 1000\n            command:\n            - mpirun\n            args:\n            - -n\n            - "2"\n            - /home/mpiuser/pi\n            resources:\n              limits:\n                cpu: 1\n                memory: 1Gi\n    Worker:\n      replicas: 2\n      template:\n        labels:\n          applicationId: "mpi_job_pi"\n          queue: root.mpi\n        spec:\n          schedulerName: yunikorn\n          containers:\n          - image: mpioperator/mpi-pi\n            name: mpi-worker\n            securityContext:\n              runAsUser: 1000\n            command:\n            - /usr/sbin/sshd\n            args:\n            - -De\n            - -f\n            - /home/mpiuser/.sshd_config\n            resources:\n              limits:\n                cpu: 1\n                memory: 1Gi\n')),(0,i.kt)("p",null,"Create the MPIJob."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl create -f deployments/examples/mpioperator/Pi/pi.yaml\n")),(0,i.kt)("p",null,"We added Yunikorn labels to the Pi example to demonstrate using the yunikorn scheduler."))}d.isMDXComponent=!0}}]);