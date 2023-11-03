"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80053],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":"unreleased","badge":true,"noIndex":false,"className":"docs-version-current","isLast":false,"docsSidebars":{"docs":[{"type":"category","label":"Get Started","items":[{"type":"link","label":"Get Started","href":"/docs/next/","docId":"get_started/user_guide"},{"type":"link","label":"Features","href":"/docs/next/get_started/core_features","docId":"get_started/core_features"}],"collapsed":true,"collapsible":true},{"type":"category","label":"User Guide","items":[{"type":"link","label":"Deployment Modes","href":"/docs/next/user_guide/deployment_modes","docId":"user_guide/deployment_modes"},{"type":"link","label":"Service Configuration","href":"/docs/next/user_guide/service_config","docId":"user_guide/service_config"},{"type":"link","label":"Partition and Queue Configuration","href":"/docs/next/user_guide/queue_config","docId":"user_guide/queue_config"},{"type":"link","label":"App Placement Rules","href":"/docs/next/user_guide/placement_rules","docId":"user_guide/placement_rules"},{"type":"link","label":"User & Group Resolution","href":"/docs/next/user_guide/usergroup_resolution","docId":"user_guide/usergroup_resolution"},{"type":"link","label":"Sorting Policies","href":"/docs/next/user_guide/sorting_policies","docId":"user_guide/sorting_policies"},{"type":"link","label":"App & Queue Priorities","href":"/docs/next/user_guide/priorities","docId":"user_guide/priorities"},{"type":"link","label":"Preemption","href":"/docs/next/user_guide/preemption_cases","docId":"user_guide/preemption_cases"},{"type":"link","label":"ACLs","href":"/docs/next/user_guide/acls","docId":"user_guide/acls"},{"type":"link","label":"Resource Quota Management","href":"/docs/next/user_guide/resource_quota_management","docId":"user_guide/resource_quota_management"},{"type":"link","label":"Gang Scheduling","href":"/docs/next/user_guide/gang_scheduling","docId":"user_guide/gang_scheduling"},{"type":"link","label":"Labels and Annotations in YuniKorn","href":"/docs/next/user_guide/labels_and_annotations_in_yunikorn","docId":"user_guide/labels_and_annotations_in_yunikorn"},{"type":"link","label":"Prometheus and Grafana","href":"/docs/next/user_guide/prometheus","docId":"user_guide/prometheus"},{"type":"link","label":"Use Cases","href":"/docs/next/user_guide/use_cases","docId":"user_guide/use_cases"},{"type":"category","label":"Workloads","items":[{"type":"link","label":"Overview","href":"/docs/next/user_guide/workloads/workload_overview","docId":"user_guide/workloads/workload_overview"},{"type":"link","label":"Run NVIDIA GPU Jobs","href":"/docs/next/user_guide/workloads/run_nvidia","docId":"user_guide/workloads/run_nvidia"},{"type":"link","label":"Run Spark Jobs","href":"/docs/next/user_guide/workloads/run_spark","docId":"user_guide/workloads/run_spark"},{"type":"link","label":"Run Flink Jobs","href":"/docs/next/user_guide/workloads/run_flink","docId":"user_guide/workloads/run_flink"},{"type":"link","label":"Run TensorFlow Jobs","href":"/docs/next/user_guide/workloads/run_tf","docId":"user_guide/workloads/run_tf"},{"type":"link","label":"Run MPI Jobs","href":"/docs/next/user_guide/workloads/run_mpi","docId":"user_guide/workloads/run_mpi"}],"collapsed":true,"collapsible":true},{"type":"category","label":"REST APIs","items":[{"type":"link","label":"Cluster","href":"/docs/next/api/cluster","docId":"api/cluster"},{"type":"link","label":"Scheduler","href":"/docs/next/api/scheduler","docId":"api/scheduler"},{"type":"link","label":"System","href":"/docs/next/api/system","docId":"api/system"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Metrics for Prometheus","items":[{"type":"link","label":"Scheduler","href":"/docs/next/metrics/scheduler","docId":"metrics/scheduler"},{"type":"link","label":"Runtime","href":"/docs/next/metrics/runtime","docId":"metrics/runtime"},{"type":"link","label":"Queue","href":"/docs/next/metrics/queue","docId":"metrics/queue"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Troubleshooting","href":"/docs/next/user_guide/troubleshooting","docId":"user_guide/troubleshooting"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Developer Guide","items":[{"type":"link","label":"Dev Environment Setup","href":"/docs/next/developer_guide/env_setup","docId":"developer_guide/env_setup"},{"type":"link","label":"Build and Run","href":"/docs/next/developer_guide/build","docId":"developer_guide/build"},{"type":"link","label":"Go module updates","href":"/docs/next/developer_guide/dependencies","docId":"developer_guide/dependencies"},{"type":"link","label":"Deploy to Kubernetes","href":"/docs/next/developer_guide/deployment","docId":"developer_guide/deployment"},{"type":"link","label":"Development in CodeReady Containers","href":"/docs/next/developer_guide/openshift_development","docId":"developer_guide/openshift_development"},{"type":"link","label":"Translation","href":"/docs/next/developer_guide/translation","docId":"developer_guide/translation"},{"type":"category","label":"Designs","items":[{"type":"link","label":"Architecture","href":"/docs/next/design/architecture","docId":"design/architecture"},{"type":"link","label":"K8s Scheduler Plugin","href":"/docs/next/design/scheduler_plugin","docId":"design/scheduler_plugin"},{"type":"link","label":"Gang scheduling design","href":"/docs/next/design/gang_scheduling","docId":"design/gang_scheduling"},{"type":"link","label":"User/Group handling and lookup design","href":"/docs/next/design/user_group","docId":"design/user_group"},{"type":"link","label":"User Based Resource Usage Tracking","href":"/docs/next/design/user_based_resource_usage_tracking","docId":"design/user_based_resource_usage_tracking"},{"type":"link","label":"User Based Quota Enforcement","href":"/docs/next/design/user_group_resource_usage_enforcement","docId":"design/user_group_resource_usage_enforcement"},{"type":"link","label":"Simplifying Interface Messages","href":"/docs/next/design/interface_message_simplification","docId":"design/interface_message_simplification"},{"type":"link","label":"Scheduler cache removal design","href":"/docs/next/design/cache_removal","docId":"design/cache_removal"},{"type":"link","label":"Preemption","href":"/docs/next/design/preemption","docId":"design/preemption"},{"type":"link","label":"DaemonSet Scheduling using Simple Preemptor","href":"/docs/next/design/simple_preemptor","docId":"design/simple_preemptor"},{"type":"link","label":"Generic Resource Types in Namespace Quota","href":"/docs/next/design/generic_resource","docId":"design/generic_resource"},{"type":"link","label":"Pluggable App Management","href":"/docs/next/design/pluggable_app_management","docId":"design/pluggable_app_management"},{"type":"link","label":"Priority Scheduling","href":"/docs/next/design/priority_scheduling","docId":"design/priority_scheduling"},{"type":"link","label":"Resilience","href":"/docs/next/design/resilience","docId":"design/resilience"},{"type":"link","label":"Batch Workloads Ordering with StateAware Policy","href":"/docs/next/design/state_aware_scheduling","docId":"design/state_aware_scheduling"},{"type":"link","label":"Scheduler Object States","href":"/docs/next/design/scheduler_object_states","docId":"design/scheduler_object_states"},{"type":"link","label":"Configuration V2","href":"/docs/next/design/config_v2","docId":"design/config_v2"},{"type":"link","label":"Scheduler Configuration","href":"/docs/next/design/scheduler_configuration","docId":"design/scheduler_configuration"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Archived Designs","items":[{"type":"link","label":"Kubernetes Shim Design","href":"/docs/next/archived_design/k8shim","docId":"archived_design/k8shim"},{"type":"link","label":"Namespace Resource Quota","href":"/docs/next/archived_design/namespace_resource_quota","docId":"archived_design/namespace_resource_quota"},{"type":"link","label":"Support K8s Predicates","href":"/docs/next/archived_design/predicates","docId":"archived_design/predicates"},{"type":"link","label":"Scheduler Core Design","href":"/docs/next/archived_design/scheduler_core_design","docId":"archived_design/scheduler_core_design"},{"type":"link","label":"Cross Queue Preemption","href":"/docs/next/archived_design/cross_queue_preemption","docId":"archived_design/cross_queue_preemption"}],"collapsed":true,"collapsible":true}],"collapsed":true,"collapsible":true},{"type":"category","label":"Performance","items":[{"type":"link","label":"Evaluate YuniKorn Performance with Kubemark","href":"/docs/next/performance/evaluate_perf_function_with_kubemark","docId":"performance/evaluate_perf_function_with_kubemark"},{"type":"link","label":"Benchmarking Tutorial","href":"/docs/next/performance/performance_tutorial","docId":"performance/performance_tutorial"},{"type":"link","label":"Scheduler Metrics","href":"/docs/next/performance/metrics","docId":"performance/metrics"},{"type":"link","label":"Profiling","href":"/docs/next/performance/profiling","docId":"performance/profiling"}],"collapsed":true,"collapsible":true}]},"docs":{"api/cluster":{"id":"api/cluster","title":"Cluster","description":"\x3c!--","sidebar":"docs"},"api/scheduler":{"id":"api/scheduler","title":"Scheduler","description":"\x3c!--","sidebar":"docs"},"api/system":{"id":"api/system","title":"System","description":"\x3c!--","sidebar":"docs"},"archived_design/cross_queue_preemption":{"id":"archived_design/cross_queue_preemption","title":"Cross Queue Preemption","description":"\x3c!--","sidebar":"docs"},"archived_design/k8shim":{"id":"archived_design/k8shim","title":"Kubernetes Shim Design","description":"\x3c!--","sidebar":"docs"},"archived_design/namespace_resource_quota":{"id":"archived_design/namespace_resource_quota","title":"Namespace Resource Quota","description":"\x3c!--","sidebar":"docs"},"archived_design/predicates":{"id":"archived_design/predicates","title":"Support K8s Predicates","description":"\x3c!--","sidebar":"docs"},"archived_design/scheduler_core_design":{"id":"archived_design/scheduler_core_design","title":"Scheduler Core Design","description":"\x3c!--","sidebar":"docs"},"design/architecture":{"id":"design/architecture","title":"Architecture","description":"\x3c!--","sidebar":"docs"},"design/cache_removal":{"id":"design/cache_removal","title":"Scheduler cache removal design","description":"\x3c!--","sidebar":"docs"},"design/config_v2":{"id":"design/config_v2","title":"Configuration V2","description":"\x3c!--","sidebar":"docs"},"design/gang_scheduling":{"id":"design/gang_scheduling","title":"Gang scheduling design","description":"\x3c!--","sidebar":"docs"},"design/generic_resource":{"id":"design/generic_resource","title":"Generic Resource Types in Namespace Quota","description":"\x3c!--","sidebar":"docs"},"design/interface_message_simplification":{"id":"design/interface_message_simplification","title":"Simplifying Interface Messages","description":"\x3c!--","sidebar":"docs"},"design/pluggable_app_management":{"id":"design/pluggable_app_management","title":"Pluggable App Management","description":"\x3c!--","sidebar":"docs"},"design/preemption":{"id":"design/preemption","title":"Preemption","description":"\x3c!--","sidebar":"docs"},"design/priority_scheduling":{"id":"design/priority_scheduling","title":"Priority Scheduling","description":"\x3c!--","sidebar":"docs"},"design/resilience":{"id":"design/resilience","title":"Resilience","description":"\x3c!--","sidebar":"docs"},"design/scheduler_configuration":{"id":"design/scheduler_configuration","title":"Scheduler Configuration","description":"\x3c!--","sidebar":"docs"},"design/scheduler_object_states":{"id":"design/scheduler_object_states","title":"Scheduler Object States","description":"\x3c!--","sidebar":"docs"},"design/scheduler_plugin":{"id":"design/scheduler_plugin","title":"K8s Scheduler Plugin","description":"\x3c!--","sidebar":"docs"},"design/simple_preemptor":{"id":"design/simple_preemptor","title":"DaemonSet Scheduling using Simple Preemptor","description":"\x3c!--","sidebar":"docs"},"design/state_aware_scheduling":{"id":"design/state_aware_scheduling","title":"Batch Workloads Ordering with StateAware Policy","description":"\x3c!--","sidebar":"docs"},"design/user_based_resource_usage_tracking":{"id":"design/user_based_resource_usage_tracking","title":"User Based Resource Usage Tracking","description":"\x3c!--","sidebar":"docs"},"design/user_group":{"id":"design/user_group","title":"User/Group handling and lookup design","description":"\x3c!--","sidebar":"docs"},"design/user_group_resource_usage_enforcement":{"id":"design/user_group_resource_usage_enforcement","title":"User Based Quota Enforcement","description":"\x3c!--","sidebar":"docs"},"developer_guide/build":{"id":"developer_guide/build","title":"Build and Run","description":"\x3c!--","sidebar":"docs"},"developer_guide/dependencies":{"id":"developer_guide/dependencies","title":"Go module updates","description":"\x3c!--","sidebar":"docs"},"developer_guide/deployment":{"id":"developer_guide/deployment","title":"Deploy to Kubernetes","description":"\x3c!--","sidebar":"docs"},"developer_guide/env_setup":{"id":"developer_guide/env_setup","title":"Dev Environment Setup","description":"\x3c!--","sidebar":"docs"},"developer_guide/openshift_development":{"id":"developer_guide/openshift_development","title":"Development in CodeReady Containers","description":"\x3c!--","sidebar":"docs"},"developer_guide/translation":{"id":"developer_guide/translation","title":"Translation","description":"\x3c!--","sidebar":"docs"},"get_started/core_features":{"id":"get_started/core_features","title":"Features","description":"\x3c!--","sidebar":"docs"},"get_started/user_guide":{"id":"get_started/user_guide","title":"Get Started","description":"\x3c!--","sidebar":"docs"},"metrics/queue":{"id":"metrics/queue","title":"Queue","description":"\x3c!--","sidebar":"docs"},"metrics/runtime":{"id":"metrics/runtime","title":"Runtime","description":"\x3c!--","sidebar":"docs"},"metrics/scheduler":{"id":"metrics/scheduler","title":"Scheduler","description":"\x3c!--","sidebar":"docs"},"performance/evaluate_perf_function_with_kubemark":{"id":"performance/evaluate_perf_function_with_kubemark","title":"Evaluate YuniKorn Performance with Kubemark","description":"\x3c!--","sidebar":"docs"},"performance/metrics":{"id":"performance/metrics","title":"Scheduler Metrics","description":"\x3c!--","sidebar":"docs"},"performance/performance_tutorial":{"id":"performance/performance_tutorial","title":"Benchmarking Tutorial","description":"\x3c!--","sidebar":"docs"},"performance/profiling":{"id":"performance/profiling","title":"Profiling","description":"\x3c!--","sidebar":"docs"},"user_guide/acls":{"id":"user_guide/acls","title":"ACLs","description":"\x3c!--","sidebar":"docs"},"user_guide/deployment_modes":{"id":"user_guide/deployment_modes","title":"Deployment Modes","description":"\x3c!--","sidebar":"docs"},"user_guide/gang_scheduling":{"id":"user_guide/gang_scheduling","title":"Gang Scheduling","description":"\x3c!--","sidebar":"docs"},"user_guide/labels_and_annotations_in_yunikorn":{"id":"user_guide/labels_and_annotations_in_yunikorn","title":"Labels and Annotations in YuniKorn","description":"\x3c!--","sidebar":"docs"},"user_guide/placement_rules":{"id":"user_guide/placement_rules","title":"App Placement Rules","description":"\x3c!--","sidebar":"docs"},"user_guide/preemption_cases":{"id":"user_guide/preemption_cases","title":"Preemption","description":"\x3c!--","sidebar":"docs"},"user_guide/priorities":{"id":"user_guide/priorities","title":"App & Queue Priorities","description":"\x3c!--","sidebar":"docs"},"user_guide/prometheus":{"id":"user_guide/prometheus","title":"Prometheus and Grafana","description":"\x3c!--","sidebar":"docs"},"user_guide/queue_config":{"id":"user_guide/queue_config","title":"Partition and Queue Configuration","description":"\x3c!--","sidebar":"docs"},"user_guide/resource_quota_management":{"id":"user_guide/resource_quota_management","title":"Resource Quota Management","description":"\x3c!--","sidebar":"docs"},"user_guide/service_config":{"id":"user_guide/service_config","title":"Service Configuration","description":"\x3c!--","sidebar":"docs"},"user_guide/sorting_policies":{"id":"user_guide/sorting_policies","title":"Sorting Policies","description":"\x3c!--","sidebar":"docs"},"user_guide/troubleshooting":{"id":"user_guide/troubleshooting","title":"Troubleshooting","description":"\x3c!--","sidebar":"docs"},"user_guide/use_cases":{"id":"user_guide/use_cases","title":"Use Cases","description":"\x3c!--","sidebar":"docs"},"user_guide/usergroup_resolution":{"id":"user_guide/usergroup_resolution","title":"User & Group Resolution","description":"\x3c!--","sidebar":"docs"},"user_guide/workloads/run_flink":{"id":"user_guide/workloads/run_flink","title":"Run Flink Jobs","description":"How to run Flink jobs with YuniKorn","sidebar":"docs"},"user_guide/workloads/run_mpi":{"id":"user_guide/workloads/run_mpi","title":"Run MPI Jobs","description":"How to run MPI jobs with YuniKorn","sidebar":"docs"},"user_guide/workloads/run_nvidia":{"id":"user_guide/workloads/run_nvidia","title":"Run NVIDIA GPU Jobs","description":"How to run generic example of GPU scheduling with Yunikorn.","sidebar":"docs"},"user_guide/workloads/run_spark":{"id":"user_guide/workloads/run_spark","title":"Run Spark Jobs","description":"How to run Spark jobs with YuniKorn","sidebar":"docs"},"user_guide/workloads/run_tf":{"id":"user_guide/workloads/run_tf","title":"Run TensorFlow Jobs","description":"How to run TensorFlow jobs with YuniKorn","sidebar":"docs"},"user_guide/workloads/workload_overview":{"id":"user_guide/workloads/workload_overview","title":"Overview","description":"\x3c!--","sidebar":"docs"}}}')}}]);