const test1Questions = [
    {
        id: 't1q1',
        questionText: 'A startup wants to host their new web application on Google Cloud. They anticipate varying traffic but want to ensure high availability and automatic scaling without managing underlying servers. Which Google Cloud compute service is best suited for this requirement?',
        options: [
            'Google Compute Engine (GCE) with Managed Instance Groups',
            'Google Kubernetes Engine (GKE)',
            'Google App Engine (Standard Environment)',
            'Cloud Functions'
        ],
        correctAnswer: [2], // Index of the correct option (0-based)
        explanation: 'Google App Engine (Standard Environment) is a fully managed platform-as-a-service (PaaS) that offers automatic scaling, high availability, and zero-server management, making it ideal for web applications with varying traffic. While GCE with MIGs and GKE can provide scaling, they require more operational overhead. Cloud Functions are suitable for event-driven, short-lived functions, not a full web application.',
        resourceLink: 'https://cloud.google.com/appengine/docs/standard/'
    },
    {
        id: 't1q2',
        questionText: 'You need to store large amounts of unstructured data, such as images and videos, that will be accessed infrequently (less than once a month) but requires high durability. Which Cloud Storage class would be most cost-effective?',
        options: [
            'Standard Storage',
            'Nearline Storage',
            'Coldline Storage',
            'Archive Storage'
        ],
        correctAnswer: [2],
        explanation: 'Coldline Storage is designed for data accessed less than once a month and offers lower storage costs compared to Nearline or Standard Storage, making it cost-effective for infrequently accessed archival data while still providing reasonable access times. Archive Storage is for data accessed less than once a year and has higher retrieval costs/times.',
        resourceLink: 'https://cloud.google.com/storage/docs/storage-classes'
    },
    {
        id: 't1q3',
        questionText: 'Your company has multiple projects in Google Cloud, and you need to manage access to resources across these projects centrally. Which IAM concept should you use to grant permissions efficiently?',
        options: [
            'Service Accounts',
            'Custom Roles',
            'Organization Policy',
            'Google Groups'
        ],
        correctAnswer: [3],
        explanation: 'Google Groups allow you to manage a collection of users and then assign IAM roles to the group at various levels (organization, folder, project). This simplifies permission management across multiple projects and users, as you only need to add or remove users from the group rather than managing individual IAM bindings.',
        resourceLink: 'https://cloud.google.com/iam/docs/overview#google_groups'
    },
    {
        id: 't1q4',
        questionText: 'You are troubleshooting a performance issue with a Compute Engine instance. You want to view logs related to system events and application errors. Which Google Cloud service should you use?',
        options: [
            'Cloud Monitoring',
            'Cloud Trace',
            'Cloud Audit Logs',
            'Cloud Logging'
        ],
        correctAnswer: [3],
        explanation: 'Cloud Logging is the centralized logging service for Google Cloud. It collects logs from various Google Cloud services, including Compute Engine, and allows you to view, filter, and analyze system events, application errors, and other log data.',
        resourceLink: 'https://cloud.google.com/logging/docs/overview'
    },
    {
        id: 't1q5',
        questionText: 'You need to connect your on-premises network to your Google Cloud Virtual Private Cloud (VPC) securely and with high bandwidth. Which networking solution should you consider?',
        options: [
            'Cloud VPN',
            'VPC Peering',
            'Shared VPC',
            'Cloud Interconnect (Dedicated)'
        ],
        correctAnswer: [3],
        explanation: 'Cloud Interconnect (Dedicated) provides a direct physical connection between your on-premises data center and Google Cloud, offering high bandwidth, lower latency, and higher security compared to Cloud VPN. While Cloud VPN provides secure connectivity, it\'s typically over the public internet and has lower bandwidth limits. VPC Peering connects two VPCs within Google Cloud, and Shared VPC allows multiple projects to use a common VPC network.',
        resourceLink: 'https://cloud.google.com/network-connectivity/docs/interconnect/concepts/overview'
    },
    {
        id: 't1q6',
        questionText: 'Your team needs to run batch processing jobs that are fault-tolerant and automatically restart on failure. Which Compute Engine feature or service is most appropriate?',
        options: [
            'Preemptible VMs',
            'Managed Instance Groups (MIGs) with autohealing',
            'Sole-tenant Nodes',
            'Custom Machine Types'
        ],
        correctAnswer: [1],
        explanation: 'Managed Instance Groups (MIGs) with autohealing are designed to maintain high availability and reliability for applications. If an instance in a MIG becomes unresponsive or stops, the MIG automatically recreates it, making it suitable for fault-tolerant batch processing.',
        resourceLink: 'https://cloud.google.com/compute/docs/instance-groups/autohealing'
    },
    {
        id: 't1q7',
        questionText: 'You are setting up a new Google Cloud project for development. You want to ensure that only specific users can deploy resources. What is the most granular way to achieve this using IAM?',
        options: [
            'Grant them the Project Editor role.',
            'Grant them the Project Owner role.',
            'Create a custom role with `resourcemanager.projects.setIamPolicy` permission.',
            'Grant them roles specific to the services they need to deploy (e.g., `compute.instanceAdmin`).'
        ],
        correctAnswer: [3],
        explanation: 'To follow the principle of least privilege, you should grant users only the necessary permissions. Instead of broad roles like Editor or Owner, assign specific IAM roles for the services they need to deploy (e.g., `compute.instanceAdmin`, `storage.admin`).',
        resourceLink: 'https://cloud.google.com/iam/docs/understanding-roles'
    },
    {
        id: 't1q8',
        questionText: 'Your application stores sensitive user data in Cloud Storage. You need to encrypt the data using your own encryption keys (Customer-Supplied Encryption Keys - CSEK). How can you configure this?',
        options: [
            'Enable default encryption on the bucket.',
            'Use Cloud KMS to manage the encryption keys and link to the bucket.',
            'Provide the encryption key in the header of each API request when accessing objects.',
            'Configure object lifecycle management to encrypt old objects.'
        ],
        correctAnswer: [2],
        explanation: 'When using Customer-Supplied Encryption Keys (CSEK) with Cloud Storage, you must provide the encryption key in the header of each API request (e.g., when uploading or downloading objects). Google Cloud then uses this key to encrypt/decrypt the data. Cloud KMS is for Customer-Managed Encryption Keys (CMEK), and default encryption uses Google-managed keys.',
        resourceLink: 'https://cloud.google.com/storage/docs/encryption/customer-supplied-keys'
    },
    {
        id: 't1q9',
        questionText: 'You want to monitor the performance of your Compute Engine instances, including CPU utilization, network traffic, and disk I/O. Which Google Cloud service provides these metrics and allows for custom dashboards?',
        options: [
            'Cloud Logging',
            'Cloud Trace',
            'Cloud Monitoring',
            'Cloud Audit Logs'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Monitoring (formerly Stackdriver Monitoring) provides comprehensive monitoring for Google Cloud resources. It collects metrics, events, and metadata, allowing you to create custom dashboards, set up alerts, and gain insights into the performance and health of your services, including Compute Engine instances.',
        resourceLink: 'https://cloud.google.com/monitoring/docs/overview'
    },
    {
        id: 't1q10',
        questionText: 'You are deploying an application to App Engine and want to split traffic between two versions (e.g., 90% to version A, 10% to version B). How can you achieve this?',
        options: [
            'Configure a load balancer in front of the App Engine application.',
            'Use the App Engine traffic splitting feature in the Cloud Console or `gcloud` CLI.',
            'Manually deploy 90% of instances to version A and 10% to version B.',
            'It is not possible to split traffic in App Engine.'
        ],
        correctAnswer: [1],
        explanation: 'App Engine has a built-in traffic splitting feature that allows you to direct a percentage of incoming requests to different versions of your application. This is commonly used for A/B testing or rolling out new versions gradually.',
        resourceLink: 'https://cloud.google.com/appengine/docs/standard/splitting-traffic'
    },
    {
        id: 't1q11',
        questionText: 'You need to allow external users to access a web application running on a Compute Engine instance, but you want to control inbound traffic based on IP ranges and protocols. What Google Cloud networking component should you configure?',
        options: [
            'VPC Peering',
            'Firewall Rules',
            'Cloud VPN',
            'Shared VPC'
        ],
        correctAnswer: [1],
        explanation: 'Firewall Rules in a Virtual Private Cloud (VPC) network control incoming and outgoing traffic to your instances. You can define rules based on IP ranges, protocols, ports, and target tags, allowing you to secure your applications by restricting access to specific sources.',
        resourceLink: 'https://cloud.google.com/vpc/docs/firewalls'
    },
    {
        id: 't1q12',
        questionText: 'Your company requires all deployed Compute Engine instances to automatically apply specific security hardening scripts upon startup. What is the most effective way to ensure this across new instances?',
        options: [
            'Manually run the scripts after instance creation.',
            'Include the scripts in the instance metadata as startup scripts.',
            'Use an organizational policy to enforce script execution.',
            'Embed the scripts directly into the application code.'
        ],
        correctAnswer: [1],
        explanation: 'Compute Engine instances can execute startup scripts defined in their metadata. These scripts run automatically when the instance starts or restarts, making it an effective way to apply consistent configurations, including security hardening, across multiple instances.',
        resourceLink: 'https://cloud.google.com/compute/docs/startupscript'
    },
    {
        id: 't1q13',
        questionText: 'You are designing a solution for real-time analytics. Data needs to be streamed, processed, and then made available for querying almost immediately. Which combination of services would be most appropriate?',
        options: [
            'Cloud Storage and BigQuery',
            'Pub/Sub and Cloud Dataflow',
            'Cloud SQL and Looker Studio',
            'Compute Engine and Apache Hadoop'
        ],
        correctAnswer: [1],
        explanation: 'Pub/Sub is excellent for ingesting real-time streams of data. Cloud Dataflow is a fully managed service for executing stream and batch processing pipelines. Together, they form a powerful combination for real-time analytics, allowing data to be processed and then potentially loaded into BigQuery or another real-time data store for querying.',
        resourceLink: 'https://cloud.google.com/dataflow/docs/concepts/overview'
    },
    {
        id: 't1q14',
        questionText: 'Your audit team requires a record of all administrative activities performed on your Google Cloud project, including who did what and when. Which logging service should you consult?',
        options: [
            'Cloud Logging (Data Access logs)',
            'Cloud Monitoring (System Events)',
            'Cloud Audit Logs (Admin Activity logs)',
            'Cloud Trace'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Audit Logs provides a chronological record of all administrative activities (Admin Activity logs) and data access (Data Access logs) in your Google Cloud projects. Admin Activity logs record operations that modify the configuration or metadata of resources, which is what an audit team would be interested in for administrative actions.',
        resourceLink: 'https://cloud.google.com/logging/docs/audit'
    },
    {
        id: 't1q15',
        questionText: 'You want to allow a specific Google Cloud user to view all resources within a project but prevent them from making any changes. Which predefined IAM role is most suitable?',
        options: [
            'Viewer (roles/viewer)',
            'Editor (roles/editor)',
            'Browser (roles/browser)',
            'Compute Instance Admin (roles/compute.instanceAdmin)'
        ],
        correctAnswer: [0],
        explanation: 'The "Viewer" role (roles/viewer) grants read-only access to all resources within a project. It allows viewing everything but prevents any modifications, making it ideal for users who need to monitor or review the project state without administrative privileges.',
        resourceLink: 'https://cloud.google.com/iam/docs/understanding-roles#viewer_role'
    },
    {
        id: 't1q16',
        questionText: 'Your application needs to store user session data that requires low-latency access and is highly available across multiple zones. Which database service is a good fit for this use case?',
        options: [
            'Cloud SQL',
            'Cloud Spanner',
            'Memorystore for Redis',
            'Cloud Storage'
        ],
        correctAnswer: [2],
        explanation: 'Memorystore for Redis is a fully managed in-memory data store service. It provides extremely low-latency access and high throughput, making it well-suited for caching, real-time analytics, and storing user session data where speed is critical and high availability is needed.',
        resourceLink: 'https://cloud.google.com/memorystore/docs/redis/overview'
    },
    {
        id: 't1q17',
        questionText: 'You have a large video file in Cloud Storage that needs to be transcoded into various formats. Which service is best suited for orchestrating and executing this long-running, asynchronous task?',
        options: [
            'Cloud Functions',
            'Cloud Run',
            'Cloud Tasks',
            'Cloud Dataflow'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Tasks is a fully managed service for managing asynchronous task execution. It allows you to enqueue tasks and reliably dispatch them to a worker service (like a Cloud Function, Cloud Run service, or App Engine service) for processing, ensuring that tasks are executed even if the initial service becomes unavailable. While Cloud Functions/Run could do the transcoding, Cloud Tasks helps with the orchestration and reliability of the task itself.',
        resourceLink: 'https://cloud.google.com/tasks/docs/overview'
    },
    {
        id: 't1q18',
        questionText: 'Your team wants to deploy a web application that will automatically scale up and down, but they prefer to use Docker containers and have more control over the underlying runtime environment than App Engine Standard provides. Which compute service offers a good balance?',
        options: [
            'Compute Engine',
            'App Engine Flexible Environment',
            'Cloud Run',
            'Cloud Functions'
        ],
        correctAnswer: [1],
        explanation: 'App Engine Flexible Environment allows you to deploy applications in Docker containers, giving you more control over the runtime than App Engine Standard. It still provides automatic scaling and instance management, offering a good balance between flexibility and managed services.',
        resourceLink: 'https://cloud.google.com/appengine/docs/flexible/'
    },
    {
        id: 't1q19',
        questionText: 'You need to transfer a large amount of data (several terabytes) from your on-premises data center to a Cloud Storage bucket. You have a limited internet connection. What is the most efficient way to perform this transfer?',
        options: [
            'Use `gsutil cp` over your internet connection.',
            'Use the Storage Transfer Service (online transfer).',
            'Use a Transfer Appliance.',
            'Upload directly via Cloud Console.'
        ],
        correctAnswer: [2],
        explanation: 'For large-scale data transfers (typically petabytes) with limited internet connectivity, Transfer Appliance is a physical appliance that you receive, load with data, and then ship back to Google. Google then uploads the data to Cloud Storage, bypassing your internet connection limitations. For several terabytes, online transfer services might still be slow.',
        resourceLink: 'https://cloud.google.com/transfer-appliance'
    },
    {
        id: 't1q20',
        questionText: 'You are setting up a budget for your Google Cloud project and want to receive alerts when the actual spend exceeds a certain percentage of the budget. Where would you configure these alerts?',
        options: [
            'Cloud Monitoring',
            'IAM Policies',
            'Cloud Billing budgets and alerts',
            'Cloud Logging'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Billing allows you to set up budgets for your projects and billing accounts. Within a budget, you can configure alert thresholds (e.g., 50%, 90%, 100% of the budget) to send notifications to specified email addresses or Pub/Sub topics when your spend exceeds these thresholds.',
        resourceLink: 'https://cloud.google.com/billing/docs/how-to/budgets'
    },
    {
        id: 't1q21',
        questionText: 'Your application needs to serve static assets (HTML, CSS, JavaScript, images) with high performance and global availability. Which Google Cloud service is designed for this?',
        options: [
            'Compute Engine',
            'Cloud Storage (as a static website host)',
            'App Engine',
            'Cloud SQL'
        ],
        correctAnswer: [1],
        explanation: 'Cloud Storage buckets can be configured to host static websites. This provides a cost-effective and highly available solution for serving static content globally, often in conjunction with Cloud CDN for even better performance.',
        resourceLink: 'https://cloud.google.com/storage/docs/hosting-static-website'
    },
    {
        id: 't1q22',
        questionText: 'You are managing a Compute Engine instance and need to assign it a fixed internal IP address that persists across restarts. How can you achieve this?',
        options: [
            'Assign an ephemeral internal IP address.',
            'Promote an ephemeral internal IP address to a static internal IP address.',
            'Assign a static external IP address.',
            'Internal IP addresses are always fixed.'
        ],
        correctAnswer: [1],
        explanation: 'By default, Compute Engine instances receive ephemeral internal IP addresses that can change if the instance is stopped and restarted. To ensure a fixed internal IP address, you must promote an ephemeral internal IP address to a static internal IP address.',
        resourceLink: 'https://cloud.google.com/compute/docs/ip-addresses/reserve-static-internal-ip-address'
    },
    {
        id: 't1q23',
        questionText: 'Your organization has strict compliance requirements that dictate data must reside in a specific geographic region. Which Google Cloud concept helps enforce this for resource deployment?',
        options: [
            'Zones',
            'Regions',
            'Projects',
            'Organizations'
        ],
        correctAnswer: [1],
        explanation: 'Google Cloud is organized into regions and zones. A region is a specific geographical location where you can host your resources. By selecting a specific region, you ensure that your data and resources reside within that geographic boundary, which is crucial for compliance.',
        resourceLink: 'https://cloud.google.com/docs/geographies/regions-zones'
    },
    {
        id: 't1q24',
        questionText: 'You need to automate the creation of new Compute Engine instances based on an instance template. Which Google Cloud service is designed for managing groups of identical instances?',
        options: [
            'Cloud Functions',
            'Google Kubernetes Engine (GKE)',
            'Managed Instance Groups (MIGs)',
            'Deployment Manager'
        ],
        correctAnswer: [2],
        explanation: 'Managed Instance Groups (MIGs) allow you to run groups of identical virtual machine instances. MIGs can be configured to use instance templates to define the VM configuration, and they provide features like autohealing, autoscaling, and rolling updates for the entire group.',
        resourceLink: 'https://cloud.google.com/compute/docs/instance-groups'
    },
    {
        id: 't1q25',
        questionText: 'Your database administrator needs to connect securely to a Cloud SQL instance from their local machine using a command-line client. Which Google Cloud tool provides a secure and easy way to establish this connection?',
        options: [
            'Cloud VPN',
            'Cloud Router',
            'Cloud SQL Proxy',
            'VPC Peering'
        ],
        correctAnswer: [2],
        explanation: 'The Cloud SQL Proxy is a tool that allows you to connect to your Cloud SQL instances securely without having to whitelist IP addresses or configure SSL. It uses a secure tunnel for communication, simplifying secure access from external environments.',
        resourceLink: 'https://cloud.google.com/sql/docs/mysql/connect-external-applications#proxy'
    },
    {
        id: 't1q26',
        questionText: 'You are deploying a containerized microservice that needs to be accessible via HTTP(S) and automatically scales based on incoming requests, including scaling to zero when idle. Which Google Cloud service is the best fit?',
        options: [
            'Compute Engine',
            'Google Kubernetes Engine (GKE)',
            'Cloud Run',
            'App Engine Flexible Environment'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Run is a fully managed, serverless platform for stateless containers. It automatically scales based on traffic, including scaling down to zero instances when there are no requests, which can lead to significant cost savings for intermittent workloads.',
        resourceLink: 'https://cloud.google.com/run/docs/overview'
    },
    {
        id: 't1q27',
        questionText: 'Your security team wants to ensure that all service accounts used by applications have only the absolute minimum permissions required. What is this security principle called?',
        options: [
            'Separation of duties',
            'Defense in depth',
            'Principle of least privilege',
            'Security by obscurity'
        ],
        correctAnswer: [2],
        explanation: 'The Principle of Least Privilege (PoLP) is a security best practice that dictates users, programs, or processes should only be granted the minimum permissions necessary to perform their intended function. This reduces the attack surface and potential damage from compromised credentials.',
        resourceLink: 'https://cloud.google.com/security/docs/least-privilege'
    },
    {
        id: 't1q28',
        questionText: 'You are receiving reports of intermittent errors from your application and need to trace requests across multiple services to identify the bottleneck. Which Google Cloud service is designed for distributed tracing?',
        options: [
            'Cloud Logging',
            'Cloud Monitoring',
            'Cloud Trace',
            'Cloud Debugger'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Trace is a distributed tracing system for Google Cloud. It collects latency data from your applications and displays it in a Gantt chart, allowing you to visualize the flow of requests across different services and identify performance bottlenecks.',
        resourceLink: 'https://cloud.google.com/trace/docs/overview'
    },
    {
        id: 't1q29',
        questionText: 'You need to create a Virtual Private Cloud (VPC) network that allows communication between instances in different subnets within the same project without using external IP addresses. What is enabled by default in a VPC network for this purpose?',
        options: [
            'VPC Peering',
            'Internal IP connectivity',
            'Cloud VPN',
            'Shared VPC'
        ],
        correctAnswer: [1],
        explanation: 'Within a single Google Cloud VPC network, instances in different subnets can communicate with each other using their internal IP addresses by default, without requiring any additional configuration like VPC Peering or VPNs. VPC Peering is for connecting *different* VPC networks.',
        resourceLink: 'https://cloud.google.com/vpc/docs/overview'
    },
    {
        id: 't1q30',
        questionText: 'Your data scientists need to run large-scale Apache Spark and Hadoop jobs on Google Cloud. Which fully managed service is best suited for this?',
        options: [
            'Compute Engine',
            'Dataproc',
            'BigQuery',
            'Cloud Dataflow'
        ],
        correctAnswer: [1],
        explanation: 'Dataproc is a fully managed service for running Apache Spark, Hadoop, Presto, and other open-source data tools. It simplifies the deployment and management of big data clusters, allowing data scientists to focus on their analysis rather than infrastructure.',
        resourceLink: 'https://cloud.google.com/dataproc/docs/concepts/overview'
    },
    {
        id: 't1q31',
        questionText: 'You need to securely expose an internal web application running on Compute Engine instances to the internet. You also require SSL termination and global load balancing. Which networking component should you use?',
        options: [
            'Network Load Balancer',
            'Internal Load Balancer',
            'HTTP(S) Load Balancer',
            'SSL Proxy Load Balancer'
        ],
        correctAnswer: [2],
        explanation: 'The HTTP(S) Load Balancer is a global, external load balancer that supports HTTP and HTTPS traffic. It provides features like SSL termination, global distribution, and content-based routing, making it ideal for exposing web applications to the internet with high availability and performance.',
        resourceLink: 'https://cloud.google.com/load-balancing/docs/https'
    },
    {
        id: 't1q32',
        questionText: 'Your company requires a highly available and durable storage solution for shared file systems that can be mounted by multiple Compute Engine instances. Which service should you choose?',
        options: [
            'Cloud Storage buckets',
            'Persistent Disk (zonal)',
            'Filestore',
            'Cloud Bigtable'
        ],
        correctAnswer: [2],
        explanation: 'Filestore is a fully managed network-attached storage (NAS) service for Compute Engine and Google Kubernetes Engine instances. It provides high-performance file storage that can be mounted by multiple VMs simultaneously, making it suitable for shared file system needs.',
        resourceLink: 'https://cloud.google.com/filestore/docs/overview'
    },
    {
        id: 't1q33',
        questionText: 'You need to deploy a new application to App Engine. Before deploying, you want to test it in an isolated environment. What is the recommended way to do this in App Engine?',
        options: [
            'Deploy to a new project.',
            'Deploy to a new version and migrate traffic later.',
            'Deploy to a different region.',
            'Deploy to a new service.'
        ],
        correctAnswer: [1],
        explanation: 'In App Engine, you can deploy new versions of your application without immediately sending traffic to them. This allows you to test the new version in isolation before gradually migrating traffic from the previous version, ensuring a smooth rollout.',
        resourceLink: 'https://cloud.google.com/appengine/docs/deploying-applications'
    },
    {
        id: 't1q34',
        questionText: 'You are developing an application that uses a NoSQL document database. You need a highly scalable, fully managed database that supports real-time data synchronization. Which Google Cloud service is the best fit?',
        options: [
            'Cloud SQL',
            'Cloud Spanner',
            'Firestore',
            'Cloud Bigtable'
        ],
        correctAnswer: [2],
        explanation: 'Firestore is a flexible, scalable NoSQL document database for mobile, web, and server development. It offers real-time data synchronization, offline support, and seamless integration with client-side SDKs, making it ideal for applications requiring real-time updates.',
        resourceLink: 'https://cloud.google.com/firestore/docs/overview'
    },
    {
        id: 't1q35',
        questionText: 'You want to set up an alert in Cloud Monitoring that triggers when the CPU utilization of a Compute Engine instance exceeds 80% for more than 5 minutes. What is the correct way to configure this?',
        options: [
            'Create a logging sink for CPU utilization.',
            'Configure an uptime check for the instance.',
            'Create an alerting policy with a metric threshold condition on CPU utilization.',
            'Use Cloud Audit Logs to track CPU changes.'
        ],
        correctAnswer: [2],
        explanation: 'In Cloud Monitoring, you create alerting policies to define conditions under which an alert should be triggered. For this scenario, you would set a metric threshold condition on the `compute.googleapis.com/instance/cpu/utilization` metric, specifying the threshold (80%) and the duration (5 minutes).',
        resourceLink: 'https://cloud.google.com/monitoring/alerts/concepts-alerting-policies'
    },
    {
        id: 't1q36',
        questionText: 'Your development team needs to quickly provision virtual machines from pre-configured images. What is the most efficient way to manage and use these images across projects?',
        options: [
            'Store images in Cloud Storage and copy them manually.',
            'Create custom images in Compute Engine and share them.',
            'Use publicly available images only.',
            'Create a new image for each project.'
        ],
        correctAnswer: [1],
        explanation: 'Compute Engine allows you to create custom images from existing instances or disks. These custom images can then be shared with other projects, providing a standardized and efficient way to provision VMs with specific software and configurations.',
        resourceLink: 'https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images'
    },
    {
        id: 't1q37',
        questionText: 'You are designing a secure network in Google Cloud. You need to ensure that no internet traffic can reach your Compute Engine instances by default. What is the best practice to achieve this?',
        options: [
            'Remove all external IP addresses from instances.',
            'Configure all firewall rules to deny all inbound traffic.',
            'Do not assign external IP addresses and deny ingress from 0.0.0.0/0 on all ports.',
            'Use a Network Load Balancer.'
        ],
        correctAnswer: [2],
        explanation: 'To truly isolate instances from the internet, you should ensure that no external IP addresses are assigned to them. Additionally, it\'s a best practice to explicitly deny all inbound traffic from `0.0.0.0/0` (all internet IP addresses) on all ports in your firewall rules to prevent any unintended access.',
        resourceLink: 'https://cloud.google.com/vpc/docs/using-firewalls'
    },
    {
        id: 't1q38',
        questionText: 'You need to store sensitive configuration data for your application, such as API keys and database credentials, in a secure and managed way. Which Google Cloud service is designed for this?',
        options: [
            'Cloud Storage',
            'Secret Manager',
            'Cloud Firestore',
            'Compute Engine Metadata'
        ],
        correctAnswer: [1],
        explanation: 'Secret Manager is a fully managed service that allows you to store, manage, and access secrets such as API keys, passwords, and certificates. It provides versioning, access control, and auditing capabilities for sensitive data, ensuring strong security practices.',
        resourceLink: 'https://cloud.google.com/secret-manager/docs/overview'
    },
    {
        id: 't1q39',
        questionText: 'You are working with a data processing pipeline where messages need to be guaranteed to be delivered at least once, even if a consumer fails. Which messaging paradigm is essential for this guarantee?',
        options: [
            'Publish/Subscribe',
            'Request/Response',
            'At-most-once delivery',
            'At-least-once delivery'
        ],
        correctAnswer: [3],
        explanation: 'At-least-once delivery guarantees that a message will be delivered to a consumer at least one time. While it might result in duplicate processing (which needs to be handled by the consumer, e.g., through idempotency), it ensures no messages are lost, which is critical for many data processing pipelines.',
        resourceLink: 'https://cloud.google.com/pubsub/docs/message-delivery'
    },
    {
        id: 't1q40',
        questionText: 'You need to analyze logs from multiple projects in a single location. How can you achieve this using Cloud Logging?',
        options: [
            'Export logs from each project to separate BigQuery datasets.',
            'Create an aggregated sink at the organization or folder level.',
            'Use Cloud Monitoring to create dashboards across projects.',
            'Manually combine logs from each project in Cloud Storage.'
        ],
        correctAnswer: [1],
        explanation: 'Cloud Logging allows you to create aggregated sinks at the organization or folder level. This enables you to route logs from multiple projects under that organization or folder to a single destination (e.g., BigQuery dataset, Cloud Storage bucket, or Pub/Sub topic) for centralized analysis.',
        resourceLink: 'https://cloud.google.com/logging/docs/export/configure_export_sinks#aggregated_exports'
    },
    {
        id: 't1q41',
        questionText: 'Your company requires strong network isolation between different environments (e.g., development, staging, production) within the same Google Cloud organization. What networking solution is best suited for this?',
        options: [
            'VPC Peering',
            'Shared VPC',
            'Separate VPC networks for each environment',
            'Cloud VPN'
        ],
        correctAnswer: [2],
        explanation: 'Creating separate VPC networks for each environment (development, staging, production) provides the strongest network isolation. This ensures that resources in one environment cannot directly communicate with resources in another, enhancing security and preventing accidental cross-environment access.',
        resourceLink: 'https://cloud.google.com/vpc/docs/vpc-networks'
    },
    {
        id: 't1q42',
        questionText: 'You are deploying a new application to App Engine and want to enable SSL/TLS for custom domains. What is the prerequisite for configuring SSL certificates in App Engine?',
        options: [
            'You must use Google-managed SSL certificates.',
            'You must provide your own SSL certificate and private key.',
            'You need to configure an external load balancer.',
            'You must have a static IP address for the App Engine service.'
        ],
        correctAnswer: [1],
        explanation: 'For custom domains in App Engine, you can either use Google-managed SSL certificates (which are automated) or provide your own SSL certificate and corresponding private key. The question implies providing your own, which is a common scenario.',
        resourceLink: 'https://cloud.google.com/appengine/docs/standard/setting-up-custom-domains#ssl_certificates'
    },
    {
        id: 't1q43',
        questionText: 'You need to create a Kubernetes cluster on Google Cloud that minimizes operational overhead and simplifies cluster management, allowing you to focus primarily on deploying your applications. Which GKE mode should you choose?',
        options: [
            'Standard mode',
            'Autopilot mode',
            'Bare Metal mode',
            'Custom mode'
        ],
        correctAnswer: [1],
        explanation: 'GKE Autopilot is a mode of operation in Google Kubernetes Engine that significantly reduces operational overhead by fully managing the cluster infrastructure, including node provisioning, scaling, and upgrades. This allows users to focus on deploying and managing their containerized applications without worrying about the underlying cluster management.',
        resourceLink: 'https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview'
    },
    {
        id: 't1q44',
        questionText: 'Your company needs to run a web server that requires high-performance block storage for its database. Which type of Compute Engine Persistent Disk is most suitable for this high-IOPS workload?',
        options: [
            'Standard Persistent Disk',
            'Balanced Persistent Disk',
            'SSD Persistent Disk',
            'Local SSD'
        ],
        correctAnswer: [2],
        explanation: 'SSD Persistent Disk is designed for high-performance workloads that require high IOPS (Input/Output Operations Per Second) and throughput, such as databases and high-performance computing applications. Local SSDs offer even higher performance but are ephemeral and directly attached to the VM, not suitable for persistent database storage.',
        resourceLink: 'https://cloud.google.com/compute/docs/disks#disk_types'
    },
    {
        id: 't1q45',
        questionText: 'You want to use Cloud DNS to manage your domain\'s DNS records. What is the first step you need to perform in Cloud DNS?',
        options: [
            'Create a DNS record set.',
            'Create a managed public zone.',
            'Configure DNSSEC for your domain.',
            'Point your domain registrar to Google Cloud.'
        ],
        correctAnswer: [1],
        explanation: 'The first step to manage your domain\'s DNS records with Cloud DNS is to create a "managed public zone." This zone represents your domain within Cloud DNS and allows you to add and manage record sets for it.',
        resourceLink: 'https://cloud.google.com/dns/docs/zones/create-public-zones'
    },
    {
        id: 't1q46',
        questionText: 'You need to assign a Google Group the ability to only view the contents of a specific Cloud Storage bucket, but not delete or upload anything. Which predefined role is appropriate?',
        options: [
            'Storage Object Creator',
            'Storage Object Viewer',
            'Storage Admin',
            'Storage Legacy Bucket Reader'
        ],
        correctAnswer: [1],
        explanation: 'The `Storage Object Viewer` role (roles/storage.objectViewer) grants read-only access to objects within Cloud Storage buckets. This allows users to view and download objects but prevents them from creating, updating, or deleting them, adhering to the principle of least privilege.',
        resourceLink: 'https://cloud.google.com/storage/docs/access-control/iam-roles#storage-object-viewer'
    },
    {
        id: 't1q47',
        questionText: 'Your application needs to respond to events, such as a new file being uploaded to a Cloud Storage bucket, by triggering a small piece of code. Which serverless compute service is ideal for this event-driven architecture?',
        options: [
            'Compute Engine',
            'App Engine',
            'Cloud Functions',
            'Cloud Run'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Functions are lightweight, event-driven compute services. They are designed to execute small, single-purpose functions in response to events from various Google Cloud services (like Cloud Storage, Pub/Sub, Firestore), making them perfect for event-driven architectures.',
        resourceLink: 'https://cloud.google.com/functions/docs/concepts/overview'
    },
    {
        id: 't1q48',
        questionText: 'You are asked to set up a new project in Google Cloud and want to ensure that it has access to a centralized network managed by another project in the same organization. Which networking feature allows this?',
        options: [
            'VPC Peering',
            'Cloud VPN',
            'Shared VPC',
            'Dedicated Interconnect'
        ],
        correctAnswer: [2],
        explanation: 'Shared VPC (formerly XPN) allows you to connect multiple projects to a common Virtual Private Cloud (VPC) network. This enables centralized network management and connectivity for resources across different service projects within an organization, simplifying network administration and security.',
        resourceLink: 'https://cloud.google.com/vpc/docs/shared-vpc'
    },
    {
        id: 't1q49',
        questionText: 'You need to deploy a highly available PostgreSQL database on Google Cloud. You want a fully managed service that handles patching, backups, and replication. Which service should you use?',
        options: [
            'Compute Engine with PostgreSQL installed',
            'Cloud SQL for PostgreSQL',
            'Cloud Spanner',
            'Cloud Bigtable'
        ],
        correctAnswer: [1],
        explanation: 'Cloud SQL is a fully managed relational database service that supports PostgreSQL, MySQL, and SQL Server. It automates tasks like patching, backups, replication, and high availability, significantly reducing the operational burden of managing databases.',
        resourceLink: 'https://cloud.google.com/sql/docs/postgres/features'
    },
    {
        id: 't1q50',
        questionText: 'You need to view real-time streaming logs from your application. What is the most straightforward way to do this using Cloud Logging?',
        options: [
            'Export logs to BigQuery and query them.',
            'Use the Log Explorer in the Cloud Console.',
            'Set up a Pub/Sub topic to receive logs.',
            'Download logs to Cloud Storage and view them locally.'
        ],
        correctAnswer: [1],
        explanation: 'The Log Explorer in the Cloud Console provides a real-time interface to view, filter, and analyze logs as they are ingested into Cloud Logging. It\'s the most straightforward way to get a live view of your application logs.',
        resourceLink: 'https://cloud.google.com/logging/docs/view/overview'
    }
];

const test2Questions = [
    {
        id: 't2q1',
        questionText: 'You are migrating a relational database to Google Cloud. The database requires strong consistency, high availability, and horizontal scalability across regions. Which Google Cloud database service is the best fit?',
        options: [
            'Cloud SQL',
            'Cloud Spanner',
            'Firestore',
            'Cloud Bigtable'
        ],
        correctAnswer: [1],
        explanation: 'Cloud Spanner is a globally distributed, strongly consistent, and horizontally scalable relational database service that combines the benefits of relational databases (ACID transactions) with the scalability of NoSQL databases. Cloud SQL is regional, Firestore is NoSQL (document database), and Cloud Bigtable is a wide-column NoSQL database suitable for analytics, not typically for relational data requiring strong consistency across regions.',
        resourceLink: 'https://cloud.google.com/spanner/docs/overview'
    },
    {
        id: 't2q2',
        questionText: 'Your application needs to process a continuous stream of events in real-time. Which Google Cloud messaging service is designed for ingesting and delivering high volumes of events?',
        options: [
            'Cloud Tasks',
            'Cloud Pub/Sub',
            'Cloud Functions',
            'Cloud Endpoints'
        ],
        correctAnswer: [1],
        explanation: 'Cloud Pub/Sub is a fully managed, real-time messaging service that allows you to send and receive messages between independent applications. It is highly scalable and designed for ingesting and delivering high volumes of events, making it suitable for real-time data processing and stream analytics.',
        resourceLink: 'https://cloud.google.com/pubsub/docs/overview'
    },
    {
        id: 't2q3',
        questionText: 'You have a legacy application running on-premises that needs to access a Cloud Storage bucket. To ensure secure and private connectivity without routing traffic over the public internet, which Google Cloud networking feature should you use?',
        options: [
            'Cloud VPN',
            'Direct Peering',
            'Private Google Access',
            'Cloud CDN'
        ],
        correctAnswer: [2],
        explanation: 'Private Google Access allows instances in a VPC network to reach Google APIs and services (like Cloud Storage) using internal IP addresses, without requiring external IP addresses or routing traffic over the public internet. Cloud VPN provides secure connectivity over the internet. Direct Peering is for connecting directly to Google\'s network at a peer location, and Cloud CDN is for content delivery.',
        resourceLink: 'https://cloud.google.com/vpc/docs/private-google-access'
    },
    {
        id: 't2q4',
        questionText: 'You need to create a custom IAM role that grants permissions only to launch Compute Engine instances and manage their disks, but nothing else. How should you approach this?',
        options: [
            'Use the "Compute Instance Admin (v1)" predefined role.',
            'Create a custom role with specific permissions like `compute.instances.create` and `compute.disks.create`.',
            'Assign the "Editor" role and then deny specific permissions.',
            'Assign the "Owner" role and rely on organizational policies.'
        ],
        correctAnswer: [1],
        explanation: 'To grant granular permissions, you should create a custom IAM role. This allows you to define a role with only the precise permissions required (e.g., `compute.instances.create`, `compute.disks.create`, `compute.disks.use`) without granting unnecessary broad access. Predefined roles are often too permissive for specific needs. Denying permissions or relying on owner roles is not the principle of least privilege.',
        resourceLink: 'https://cloud.google.com/iam/docs/creating-custom-roles'
    },
    {
        id: 't2q5',
        questionText: 'Your development team needs to deploy containerized applications rapidly using a fully managed service that handles the underlying infrastructure. Which Google Cloud service is the most appropriate for this scenario?',
        options: [
            'Google Compute Engine (GCE)',
            'Google Kubernetes Engine (GKE) Autopilot',
            'Cloud Run',
            'Cloud Functions'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Run is a fully managed serverless platform for containerized applications. It automatically scales up and down based on traffic, even to zero, and abstracts away all infrastructure management, making it ideal for rapid deployment of stateless containers. GKE Autopilot manages the cluster infrastructure but still requires Kubernetes knowledge. GCE requires manual server management. Cloud Functions are for event-driven functions, not general containerized applications.',
        resourceLink: 'https://cloud.google.com/run/docs/overview'
    },
    {
        id: 't2q6',
        questionText: 'You are setting up a Continuous Integration/Continuous Deployment (CI/CD) pipeline for your application on Google Cloud. Which service is designed for building and testing your code?',
        options: [
            'Cloud Source Repositories',
            'Cloud Build',
            'Cloud Deploy',
            'Artifact Registry'
        ],
        correctAnswer: [1],
        explanation: 'Cloud Build is a fully managed CI/CD platform that executes your builds on Google Cloud. It allows you to define build steps, fetch source code, run tests, and produce deployable artifacts, integrating well with other Google Cloud services.',
        resourceLink: 'https://cloud.google.com/cloud-build/docs/overview'
    },
    {
        id: 't2q7',
        questionText: 'Your application needs a global, low-latency key-value store for user preferences. Which database service is best suited for this?',
        options: [
            'Cloud SQL',
            'Firestore',
            'Cloud Memorystore',
            'Cloud Bigtable'
        ],
        correctAnswer: [1],
        explanation: 'Firestore is a flexible, scalable NoSQL document database that supports real-time data synchronization and is suitable for storing user profiles, preferences, and other application data that requires low-latency access and global availability. While Cloud Memorystore can be used for caching, Firestore is a persistent database.',
        resourceLink: 'https://cloud.google.com/firestore/docs/solutions/use-cases/key-value-store'
    },
    {
        id: 't2q8',
        questionText: 'You need to allow a third-party service to securely access specific resources in your Google Cloud project without sharing user credentials. What should you use?',
        options: [
            'Service Accounts',
            'Google Groups',
            'Custom Roles',
            'Shared VPC'
        ],
        correctAnswer: [0],
        explanation: 'Service accounts are special Google accounts that can be used by applications or services to access Google Cloud resources. You can grant specific IAM roles to a service account, allowing third-party services to authenticate and access resources on behalf of your project without using individual user credentials.',
        resourceLink: 'https://cloud.google.com/iam/docs/service-accounts'
    },
    {
        id: 't2q9',
        questionText: 'You have an existing Virtual Private Cloud (VPC) network and want to divide its IP address space into smaller, manageable segments for different departments. What networking component should you create?',
        options: [
            'VPC Peering',
            'Subnets',
            'Firewall Rules',
            'VPN Gateway'
        ],
        correctAnswer: [1],
        explanation: 'Subnets (subnetworks) are logical divisions within a VPC network. They allow you to segment your network\'s IP address space and organize resources, providing isolated environments for different departments or application tiers within the same VPC.',
        resourceLink: 'https://cloud.google.com/vpc/docs/subnets'
    },
    {
        id: 't2q10',
        questionText: 'Your application needs to process large files stored in Cloud Storage. You want to trigger a data processing job automatically whenever a new file is uploaded. Which service can you use to achieve this event-driven workflow?',
        options: [
            'Cloud Pub/Sub',
            'Cloud Tasks',
            'Cloud Functions (triggered by Cloud Storage events)',
            'Cloud Scheduler'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Functions can be triggered by events from various Google Cloud services, including Cloud Storage. You can configure a Cloud Function to execute automatically when a new file is uploaded to a specific bucket, making it ideal for event-driven data processing workflows.',
        resourceLink: 'https://cloud.google.com/functions/docs/calling/storage'
    },
    {
        id: 't2q11',
        questionText: 'You are running a web application on Compute Engine behind an HTTP(S) Load Balancer. You want to terminate SSL/TLS at the load balancer and forward unencrypted HTTP traffic to your backend instances. What is this configuration called?',
        options: [
            'End-to-end SSL',
            'SSL passthrough',
            'SSL bridging',
            'SSL offloading'
        ],
        correctAnswer: [3],
        explanation: 'SSL offloading (also known as SSL termination) occurs when the load balancer decrypts incoming HTTPS traffic and then forwards unencrypted HTTP traffic to the backend instances. This offloads the computational burden of encryption/decryption from your backend servers.',
        resourceLink: 'https://cloud.google.com/load-balancing/docs/ssl-policies'
    },
    {
        id: 't2q12',
        questionText: 'Your compliance team requires that all data stored in Cloud Storage buckets be encrypted at rest using a customer-managed encryption key (CMEK). Which Google Cloud service integrates with Cloud Storage for this purpose?',
        options: [
            'Cloud IAM',
            'Cloud KMS (Key Management Service)',
            'Secret Manager',
            'Cloud Audit Logs'
        ],
        correctAnswer: [1],
        explanation: 'Cloud KMS (Key Management Service) is a cloud-hosted key management service that allows you to manage cryptographic keys for your cloud services. You can use CMEK with Cloud Storage by integrating your Cloud KMS keys with your buckets, ensuring that data is encrypted at rest with keys you manage.',
        resourceLink: 'https://cloud.google.com/storage/docs/encryption/customer-managed-keys'
    },
    {
        id: 't2q13',
        questionText: 'You need to view a graphical representation of the dependencies and relationships between your Google Cloud resources (e.g., VMs, networks, storage buckets). Which tool in Cloud Console provides this visualization?',
        options: [
            'Cloud Logging Log Explorer',
            'Cloud Monitoring Dashboards',
            'Resource Graph',
            'IAM Policy Troubleshooter'
        ],
        correctAnswer: [2],
        explanation: 'Google Cloud\'s Resource Graph provides a visual representation of your cloud resources and their relationships. This helps in understanding the topology of your deployments, identifying dependencies, and troubleshooting connectivity or configuration issues.',
        resourceLink: 'https://cloud.google.com/resource-manager/docs/resource-graph-overview'
    },
    {
        id: 't2q14',
        questionText: 'Your application needs to execute small, infrequent tasks on a schedule (e.g., a daily cleanup script). Which Google Cloud service is designed for scheduling cron jobs?',
        options: [
            'Cloud Tasks',
            'Cloud Functions',
            'Cloud Run',
            'Cloud Scheduler'
        ],
        correctAnswer: [3],
        explanation: 'Cloud Scheduler is a fully managed cron job service that allows you to schedule tasks at defined intervals. It can invoke HTTP(S) endpoints, publish messages to Pub/Sub, or trigger App Engine tasks, making it ideal for automating recurring operational tasks.',
        resourceLink: 'https://cloud.google.com/scheduler/docs/overview'
    },
    {
        id: 't2q15',
        questionText: 'You are migrating an existing SQL Server database to Google Cloud. Which fully managed database service is the best option?',
        options: [
            'Cloud SQL for MySQL',
            'Cloud SQL for PostgreSQL',
            'Cloud SQL for SQL Server',
            'Cloud Spanner'
        ],
        correctAnswer: [2],
        explanation: 'Cloud SQL supports various relational database engines, including SQL Server. Cloud SQL for SQL Server provides a fully managed service that handles the operational aspects of running SQL Server, simplifying migration and management.',
        resourceLink: 'https://cloud.google.com/sql/docs/sqlserver/features'
    },
    {
        id: 't2q16',
        questionText: 'You need to grant a user permission to deploy new applications to App Engine but restrict them from managing other compute resources. Which predefined role is most appropriate?',
        options: [
            'App Engine Deployer',
            'App Engine Admin',
            'Project Editor',
            'Compute Instance Admin'
        ],
        correctAnswer: [0],
        explanation: 'The `App Engine Deployer` role (roles/appengine.deployer) grants permissions to deploy new versions and manage traffic splitting for App Engine applications. This is more restrictive than `App Engine Admin` and aligns with the principle of least privilege if only deployment access is needed.',
        resourceLink: 'https://cloud.google.com/iam/docs/understanding-roles#app-engine-roles'
    },
    {
        id: 't2q17',
        questionText: 'Your application uses a large dataset in BigQuery, and you want to analyze query performance and identify slow queries. Which feature in BigQuery should you use?',
        options: [
            'BigQuery Data Transfer Service',
            'BigQuery Query History',
            'BigQuery Scheduled Queries',
            'BigQuery Cost Explorer'
        ],
        correctAnswer: [1],
        explanation: 'BigQuery Query History allows you to view details of all queries run in your project, including execution time, bytes processed, and slot usage. This information is crucial for analyzing query performance and optimizing costly or slow queries.',
        resourceLink: 'https://cloud.google.com/bigquery/docs/query-history'
    },
    {
        id: 't2q18',
        questionText: 'You need to ensure that your Compute Engine instances are always running the latest security patches and operating system updates automatically. What is a recommended approach for managing this?',
        options: [
            'Manually SSH into instances and run updates.',
            'Use a Managed Instance Group with auto-update policies.',
            'Rebuild instances from new custom images periodically.',
            'Configure a cron job within each instance to run updates.'
        ],
        correctAnswer: [1],
        explanation: 'Managed Instance Groups (MIGs) can be configured with auto-update policies that allow you to roll out new instance templates (which can include updated OS images) in a controlled and automated manner, ensuring your instances are always up-to-date with minimal downtime.',
        resourceLink: 'https://cloud.google.com/compute/docs/instance-groups/rolling-out-updates'
    },
    {
        id: 't2q19',
        questionText: 'Your team is building a serverless API using Cloud Functions. You need to enable Cross-Origin Resource Sharing (CORS) to allow web browsers from different domains to make requests to your API. Where do you configure CORS for Cloud Functions?',
        options: [
            'In the `package.json` file.',
            'Within the Cloud Function code itself (e.g., setting HTTP headers).',
            'In the `app.yaml` configuration file.',
            'CORS is automatically handled by Cloud Functions.'
        ],
        correctAnswer: [1],
        explanation: 'For HTTP Cloud Functions, CORS is typically handled by setting appropriate HTTP headers within the Cloud Function code (e.g., `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`) to control which origins, methods, and headers are permitted for cross-origin requests.',
        resourceLink: 'https://cloud.google.com/functions/docs/samples/functions-http-cors'
    },
    {
        id: 't2q20',
        questionText: 'You need to create a global network that automatically scales traffic to your web application running across multiple regions. Which load balancing option is most suitable?',
        options: [
            'Internal Load Balancer',
            'Network Load Balancer',
            'HTTP(S) Load Balancer',
            'SSL Proxy Load Balancer'
        ],
        correctAnswer: [2],
        explanation: 'The HTTP(S) Load Balancer is a global load balancer that distributes HTTP and HTTPS traffic to backend services across multiple regions. It provides global single Anycast IP, SSL termination, and content-based routing, making it ideal for globally accessible web applications.',
        resourceLink: 'https://cloud.google.com/load-balancing/docs/https'
    },
    {
        id: 't2q21',
        questionText: 'Your company requires that certain types of data are automatically deleted from Cloud Storage after 30 days. Which Cloud Storage feature can you use to enforce this policy?',
        options: [
            'Object Versioning',
            'Public Access Prevention',
            'Object Lifecycle Management',
            'Storage Transfer Service'
        ],
        correctAnswer: [2],
        explanation: 'Object Lifecycle Management (OLM) policies allow you to define actions (like deleting objects, changing storage classes) that are automatically performed on objects in a Cloud Storage bucket when certain conditions are met, such as age or creation date.',
        resourceLink: 'https://cloud.google.com/storage/docs/lifecycle'
    },
    {
        id: 't2q22',
        questionText: 'You are experiencing high latency for your application and suspect network issues. You want to diagnose network connectivity problems between two Compute Engine instances. Which tool can assist you?',
        options: [
            'Cloud Logging',
            'Cloud Trace',
            'Network Intelligence Center (Connectivity Tests)',
            'Cloud Monitoring'
        ],
        correctAnswer: [2],
        explanation: 'Network Intelligence Center\'s Connectivity Tests (formerly Network Topology) allow you to diagnose network connectivity issues between various network endpoints in your Google Cloud environment, including Compute Engine instances, by simulating traffic flow and providing insights into network paths and configurations.',
        resourceLink: 'https://cloud.google.com/network-intelligence-center/docs/connectivity-tests/overview'
    },
    {
        id: 't2q23',
        questionText: 'You need to deploy a private Docker image to Cloud Run. Where should you store your Docker images in Google Cloud for this purpose?',
        options: [
            'Cloud Storage',
            'Cloud Source Repositories',
            'Artifact Registry',
            'Container Registry (legacy)'
        ],
        correctAnswer: [2],
        explanation: 'Artifact Registry is the recommended service for storing, managing, and securing your build artifacts, including Docker images, on Google Cloud. It provides a single place for all your packages and containers and is the successor to Container Registry.',
        resourceLink: 'https://cloud.google.com/artifact-registry/docs/docker/store-docker-images'
    },
    {
        id: 't2q24',
        questionText: 'Your developers need to interact with Google Cloud services using command-line tools. Which tool provides a unified command-line interface for managing Google Cloud resources?',
        options: [
            'kubectl',
            'bq',
            'gcloud CLI',
            'gsutil'
        ],
        correctAnswer: [2],
        explanation: 'The `gcloud` command-line interface (CLI) is the primary tool for managing Google Cloud resources and services from the command line. It provides a consistent interface across various services.',
        resourceLink: 'https://cloud.google.com/sdk/docs/cheatsheet'
    },
    {
        id: 't2q25',
        questionText: 'You need to ensure that a Compute Engine instance automatically restarts if it becomes unresponsive due to a software crash. Which feature of Managed Instance Groups (MIGs) provides this capability?',
        options: [
            'Autoscaling',
            'Load Balancing',
            'Autohealing',
            'Rolling updates'
        ],
        correctAnswer: [2],
        explanation: 'Autohealing in Managed Instance Groups (MIGs) monitors the health of instances using health checks. If an instance fails the health checks (e.g., due to an unresponsive application), the MIG automatically attempts to repair or replace that instance to maintain the desired service level.',
        resourceLink: 'https://cloud.google.com/compute/docs/instance-groups/autohealing'
    },
    {
        id: 't2q26',
        questionText: 'Your company needs to create custom IAM roles for specific job functions to adhere to the principle of least privilege. What is the process for creating a custom role?',
        options: [
            'Modify an existing predefined role.',
            'Use the Cloud Console to define permissions from scratch or by cloning.',
            'Request Google Cloud Support to create a custom role.',
            'Custom roles are not supported in Google Cloud.'
        ],
        correctAnswer: [1],
        explanation: 'You can create custom IAM roles in the Google Cloud Console or using `gcloud` CLI. You can define a custom role by selecting specific permissions from scratch or by cloning an existing predefined role and then adding/removing permissions as needed.',
        resourceLink: 'https://cloud.google.com/iam/docs/creating-custom-roles'
    },
    {
        id: 't2q27',
        questionText: 'You have a large amount of time-series data from IoT devices and need a highly scalable, high-throughput NoSQL database for analytics. Which Google Cloud service is designed for this workload?',
        options: [
            'Cloud SQL',
            'Cloud Spanner',
            'Firestore',
            'Cloud Bigtable'
        ],
        correctAnswer: [3],
        explanation: 'Cloud Bigtable is a petabyte-scale, fully managed NoSQL wide-column database service ideal for large analytical and operational workloads, including IoT data, time-series data, and financial data, where high throughput and low latency are critical for millions of reads/writes per second.',
        resourceLink: 'https://cloud.google.com/bigtable/docs/overview'
    },
    {
        id: 't2q28',
        questionText: 'You need to set up a secure connection between your on-premises data center and Google Cloud using a dedicated, high-bandwidth connection, and you require direct access to Google APIs and services privately. Which solution combines these requirements?',
        options: [
            'Cloud VPN with Private Google Access',
            'Cloud Interconnect (Dedicated) with Private Google Access',
            'Shared VPC with VPC Peering',
            'Direct Peering with Cloud CDN'
        ],
        correctAnswer: [1],
        explanation: 'Cloud Interconnect (Dedicated) provides a direct, high-bandwidth physical connection between your on-premises network and Google Cloud. When combined with Private Google Access, instances on your on-premises network can privately access Google APIs and services without traffic traversing the public internet.',
        resourceLink: 'https://cloud.google.com/network-connectivity/docs/interconnect/concepts/overview#private-google-access'
    },
    {
        id: 't2q29',
        questionText: 'You have deployed a new service in Google Kubernetes Engine (GKE) and want to expose it to external users with a stable IP address. How can you achieve this?',
        options: [
            'Create a LoadBalancer service type in Kubernetes.',
            'Assign a static external IP to a GKE node.',
            'Use an Ingress resource with a static IP.',
            'Expose the service directly from a Pod.'
        ],
        correctAnswer: [2],
        explanation: 'While creating a `LoadBalancer` service type will provision an external IP, to ensure it\'s a *stable* (static) external IP, you should configure an Ingress resource with a pre-allocated static IP address. This provides more control and persistence for external access to your GKE services.',
        resourceLink: 'https://cloud.google.com/kubernetes-engine/docs/how-to/expose-apps#expose_a_deployment_with_a_loadbalancer_service_and_a_static_ip_address'
    },
    {
        id: 't2q30',
        questionText: 'Your company needs to analyze audit logs to identify potential security breaches or unauthorized actions. Which category of Cloud Audit Logs should you focus on?',
        options: [
            'Data Access logs',
            'System Event logs',
            'Admin Activity logs',
            'Access Transparency logs'
        ],
        correctAnswer: [2],
        explanation: 'Admin Activity logs record API calls or other actions that modify the configuration or metadata of resources. These logs are crucial for security audits as they show who performed what administrative action and when, helping to identify unauthorized changes or potential breaches.',
        resourceLink: 'https://cloud.google.com/logging/docs/audit#admin_activity_audit_logs'
    },
    {
        id: 't2q31',
        questionText: 'You need to deploy a complex application infrastructure consisting of multiple VMs, networks, and storage resources using declarative configuration files. Which Google Cloud service is ideal for this "Infrastructure as Code" approach?',
        options: [
            'Cloud Shell',
            'Cloud Deployment Manager',
            'Compute Engine Instance Templates',
            'Cloud Build'
        ],
        correctAnswer: [1],
        explanation: 'Cloud Deployment Manager allows you to create and manage Google Cloud resources using declarative configuration files (YAML or Python templates). It enables you to define your entire infrastructure as code, ensuring consistency, repeatability, and version control for your deployments.',
        resourceLink: 'https://cloud.google.com/deployment-manager/docs/overview'
    },
    {
        id: 't2q32',
        questionText: 'You need to limit the amount of egress traffic from your Compute Engine instances to the internet to reduce costs. What is the most effective way to achieve this?',
        options: [
            'Configure firewall rules to block egress traffic.',
            'Use an Internal Load Balancer.',
            'Route all traffic through a NAT Gateway (Cloud NAT).',
            'Reduce the number of instances.'
        ],
        correctAnswer: [2],
        explanation: 'Routing all egress traffic through a NAT Gateway (Cloud NAT) allows multiple instances to share a single set of external IP addresses for outbound traffic. This can help reduce egress costs by consolidating traffic and allowing private instances to access the internet without individual external IPs.',
        resourceLink: 'https://cloud.google.com/nat/docs/overview'
    },
    {
        id: 't2q33',
        questionText: 'Your team wants to deploy a new web application using containers on a serverless platform that automatically handles scaling and infrastructure management. Which Google Cloud service best fits this description?',
        options: [
            'Compute Engine',
            'Google Kubernetes Engine (GKE)',
            'Cloud Run',
            'App Engine Standard'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Run is a fully managed serverless platform for containerized applications. It abstracts away all infrastructure management, automatically scales from zero to peak traffic, and simplifies deployment of stateless containers, making it an excellent choice for new web applications.',
        resourceLink: 'https://cloud.google.com/run/docs/overview'
    },
    {
        id: 't2q34',
        questionText: 'You need to grant a temporary, time-bound permission to a user to access a specific Cloud Storage bucket for a data transfer. Which IAM feature should you use?',
        options: [
            'Conditional IAM bindings',
            'Custom roles',
            'Service accounts',
            'Organization policies'
        ],
        correctAnswer: [0],
        explanation: 'Conditional IAM bindings allow you to grant permissions based on conditions, including time-based conditions. You can specify a duration for the binding, making it ideal for granting temporary access to resources like Cloud Storage buckets.',
        resourceLink: 'https://cloud.google.com/iam/docs/conditions-overview'
    },
    {
        id: 't2q35',
        questionText: 'You are setting up a budget for your Google Cloud project. You want to receive an email notification when your projected spend for the month is expected to exceed the budget. Where do you configure this?',
        options: [
            'Cloud Monitoring alerts',
            'Cloud Logging exports',
            'Cloud Billing budget alerts (Forecasted spend)',
            'Compute Engine dashboards'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Billing budgets allow you to set up alerts based on both actual and forecasted spend. By configuring an alert for "Forecasted spend," you can receive notifications when your project is projected to exceed its budget, allowing you to take proactive measures.',
        resourceLink: 'https://cloud.google.com/billing/docs/how-to/budgets#create_a_budget'
    },
    {
        id: 't2q36',
        questionText: 'Your company needs to migrate a large relational database (terabytes of data) from on-premises to Cloud SQL with minimal downtime. Which service assists with database migration?',
        options: [
            'Storage Transfer Service',
            'Database Migration Service (DMS)',
            'BigQuery Data Transfer Service',
            'gsutil'
        ],
        correctAnswer: [1],
        explanation: 'Database Migration Service (DMS) is a serverless, highly available service that helps you migrate relational databases to Cloud SQL. It supports various source databases and provides features for both one-time migrations and continuous data replication with minimal downtime.',
        resourceLink: 'https://cloud.google.com/database-migration/docs/overview'
    },
    {
        id: 't2q37',
        questionText: 'You are troubleshooting a performance issue with an application deployed on App Engine. You want to inspect the values of variables in your running code without deploying new versions. Which service provides this capability?',
        options: [
            'Cloud Trace',
            'Cloud Logging',
            'Cloud Debugger',
            'Cloud Monitoring'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Debugger allows you to inspect the state of your application in real time without stopping or slowing it down. You can set breakpoints and view the values of local variables and the call stack, which is invaluable for troubleshooting production issues without redeploying.',
        resourceLink: 'https://cloud.google.com/debugger/docs/overview'
    },
    {
        id: 't2q38',
        questionText: 'Your application needs to store highly available, strongly consistent, and globally distributed key-value data with very low latency. Which Google Cloud database service is designed for this specific workload?',
        options: [
            'Cloud SQL',
            'Firestore',
            'Cloud Spanner',
            'Cloud Memorystore'
        ],
        correctAnswer: [1],
        explanation: 'Firestore is a globally distributed, strongly consistent, and highly available NoSQL document database. It is optimized for real-time applications and provides very low-latency access to data, making it suitable for key-value stores where global distribution and consistency are critical.',
        resourceLink: 'https://cloud.google.com/firestore/docs/overview'
    },
    {
        id: 't2q39',
        questionText: 'You need to create a Virtual Private Cloud (VPC) network that spans multiple regions and allows communication between subnets in different regions without using external IP addresses. What is the correct way to set this up?',
        options: [
            'Create separate VPC networks in each region and connect them with VPN.',
            'Create a single VPC network and provision subnets in multiple regions.',
            'Use VPC Peering between regional VPCs.',
            'Deploy a global load balancer.'
        ],
        correctAnswer: [1],
        explanation: 'A single Google Cloud VPC network can span multiple regions. You can create subnets in different regions within the same VPC network, and instances in these regional subnets can communicate privately using internal IP addresses without additional networking configurations like VPNs or VPC Peering between them.',
        resourceLink: 'https://cloud.google.com/vpc/docs/overview#global_resources'
    },
    {
        id: 't2q40',
        questionText: 'Your security team requires that all Compute Engine instances be provisioned with specific security agent software installed. What is the most automated way to achieve this for new instances?',
        options: [
            'Manually install the agent after instance creation.',
            'Use a custom image that includes the agent software.',
            'Write a startup script to download and install the agent.',
            'Configure an organizational policy to enforce agent installation.'
        ],
        correctAnswer: [1],
        explanation: 'Creating a custom image that has the required security agent software pre-installed is the most automated and consistent way to ensure all new instances are provisioned with the agent. This avoids manual steps or relying on startup scripts that could fail.',
        resourceLink: 'https://cloud.google.com/compute/docs/images/create-custom-images'
    },
    {
        id: 't2q41',
        questionText: 'You need to assign a Google Group permission to view and manage specific firewall rules in a project. Which predefined IAM role would be most appropriate?',
        options: [
            'Network Viewer',
            'Network Admin',
            'Project Viewer',
            'Compute Network User'
        ],
        correctAnswer: [1],
        explanation: 'The `Network Admin` role (roles/compute.networkAdmin) grants comprehensive permissions to manage network resources, including creating, modifying, and deleting firewall rules, VPC networks, routes, and more. This role is suitable for users responsible for network configuration and management.',
        resourceLink: 'https://cloud.google.com/iam/docs/understanding-roles#network_admin_role'
    },
    {
        id: 't2q42',
        questionText: 'Your application processes data from Cloud Storage and writes results back to Cloud Storage. You want to schedule this data processing pipeline to run nightly. Which service should you use for scheduling?',
        options: [
            'Cloud Tasks',
            'Cloud Functions',
            'Cloud Dataflow',
            'Cloud Scheduler'
        ],
        correctAnswer: [3],
        explanation: 'Cloud Scheduler is designed for scheduling recurring jobs. You can configure it to trigger a Cloud Dataflow job (via Pub/Sub or an HTTP endpoint that starts the job) or a Cloud Function that initiates the data processing pipeline at specific intervals (e.g., nightly).',
        resourceLink: 'https://cloud.google.com/scheduler/docs/overview'
    },
    {
        id: 't2q43',
        questionText: 'You are deploying a global web application using Compute Engine instances. You need to distribute user traffic based on the closest healthy backend and ensure high availability. Which load balancing option is most suitable?',
        options: [
            'Internal Load Balancer',
            'Network Load Balancer',
            'HTTP(S) Load Balancer',
            'SSL Proxy Load Balancer'
        ],
        correctAnswer: [2],
        explanation: 'The HTTP(S) Load Balancer is a global load balancer that supports HTTP/HTTPS traffic. It distributes requests to the closest healthy backend instance group, provides global Anycast IP, and ensures high availability for web applications deployed across multiple regions.',
        resourceLink: 'https://cloud.google.com/load-balancing/docs/https'
    },
    {
        id: 't2q44',
        questionText: 'Your team needs to access a Compute Engine instance via SSH, but you do not want to manage individual SSH keys. What is the recommended way to manage SSH access for multiple users?',
        options: [
            'Store SSH keys in instance metadata.',
            'Use OS Login.',
            'Use password-based SSH authentication.',
            'Create a VPN to the instance.'
        ],
        correctAnswer: [1],
        explanation: 'OS Login allows you to manage SSH access to Compute Engine instances using IAM roles. It simplifies user management by linking SSH keys to Google identities, enabling centralized control over who can access instances without manually distributing or managing SSH keys on each VM.',
        resourceLink: 'https://cloud.google.com/compute/docs/os-login/overview'
    },
    {
        id: 't2q45',
        questionText: 'You are troubleshooting a performance issue with a service in Google Kubernetes Engine (GKE). You want to examine the logs from individual containers within a Pod. Which tool should you use?',
        options: [
            'kubectl logs',
            'Cloud Monitoring',
            'Cloud Trace',
            'Cloud Debugger'
        ],
        correctAnswer: [0],
        explanation: 'The `kubectl logs` command is used to fetch and view logs from containers running within Pods in a Kubernetes cluster. It is the primary tool for real-time log inspection in GKE.',
        resourceLink: 'https://kubernetes.io/docs/reference/kubectl/cheatsheet/#viewing-finding-resources'
    },
    {
        id: 't2q46',
        questionText: 'Your company requires a highly available and scalable data warehouse solution for petabytes of data that supports standard SQL. Which Google Cloud service is the best fit?',
        options: [
            'Cloud SQL',
            'Cloud Spanner',
            'BigQuery',
            'Cloud Bigtable'
        ],
        correctAnswer: [2],
        explanation: 'BigQuery is a fully managed, serverless enterprise data warehouse that is purpose-built for analyzing petabytes of data using standard SQL. It provides high scalability and performance without requiring infrastructure management.',
        resourceLink: 'https://cloud.google.com/bigquery/docs/introduction'
    },
    {
        id: 't2q47',
        questionText: 'You need to enable a Compute Engine instance to make API calls to other Google Cloud services (e.g., Cloud Storage, BigQuery) without storing credentials directly on the instance. How should you configure this?',
        options: [
            'Embed API keys in environment variables.',
            'Use a service account attached to the instance with appropriate permissions.',
            'Grant the Project Editor role to the instance.',
            'Manually generate access tokens and refresh them.'
        ],
        correctAnswer: [1],
        explanation: 'The recommended way for Compute Engine instances to authenticate to Google Cloud APIs is by attaching a service account to the instance. You then grant the necessary IAM roles to this service account, and the instance automatically obtains temporary credentials to make authorized API calls.',
        resourceLink: 'https://cloud.google.com/compute/docs/access/service-accounts'
    },
    {
        id: 't2q48',
        questionText: 'Your organization has multiple projects and needs to enforce a consistent set of security policies across all of them (e.g., disallowing external IP addresses on VMs). Which Google Cloud concept is designed for this?',
        options: [
            'IAM Roles',
            'Service Accounts',
            'Organizational Policies (Resource Manager)',
            'Firewall Rules'
        ],
        correctAnswer: [2],
        explanation: 'Organizational Policies, part of Cloud Resource Manager, allow you to programmatically control resources across your Google Cloud organization. You can define constraints (e.g., `constraints/compute.vmExternalIpAccess`) to enforce consistent configurations and security best practices across all projects under the organization.',
        resourceLink: 'https://cloud.google.com/resource-manager/docs/organization-policy/overview'
    },
    {
        id: 't2q49',
        questionText: 'You need to set up a Virtual Private Cloud (VPC) network that connects to your on-premises network over a secure, encrypted tunnel through the public internet. Which Google Cloud networking solution is suitable?',
        options: [
            'Cloud Interconnect (Dedicated)',
            'Cloud Interconnect (Partner)',
            'Cloud VPN',
            'VPC Peering'
        ],
        correctAnswer: [2],
        explanation: 'Cloud VPN creates a secure IPsec VPN tunnel between your on-premises network and your Google Cloud VPC network over the public internet. It provides encrypted communication and is a common solution for hybrid cloud connectivity.',
        resourceLink: 'https://cloud.google.com/network-connectivity/docs/vpn/concepts/overview'
    },
    {
        id: 't2q50',
        questionText: 'Your team is building a new application and needs a highly available message queue service that can decouple microservices. Which Google Cloud service provides this functionality?',
        options: [
            'Cloud Functions',
            'Cloud Tasks',
            'Cloud Pub/Sub',
            'Cloud Run'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Pub/Sub is a fully managed, real-time messaging service that provides asynchronous messaging between independent applications. It is highly scalable and designed to decouple publishers and subscribers, making it ideal for microservices communication and event-driven architectures.',
        resourceLink: 'https://cloud.google.com/pubsub/docs/overview'
    }
];

const test3Questions = [
    {
        id: 't3q1',
        questionText: 'You are designing a data warehouse solution on Google Cloud to analyze petabytes of data. The solution needs to support standard SQL queries and integrate with various BI tools. Which Google Cloud service is purpose-built for this?',
        options: [
            'Cloud SQL',
            'Cloud Bigtable',
            'BigQuery',
            'Firestore'
        ],
        correctAnswer: [2],
        explanation: 'BigQuery is a fully managed, serverless, and highly scalable enterprise data warehouse that supports standard SQL queries and integrates seamlessly with popular BI tools. It is designed for analyzing massive datasets (petabytes) quickly and cost-effectively. Cloud SQL is for transactional relational databases, Cloud Bigtable is a NoSQL wide-column database, and Firestore is a NoSQL document database.',
        resourceLink: 'https://cloud.google.com/bigquery/docs/introduction'
    },
    {
        id: 't3q2',
        questionText: 'Your application generates a lot of logs that need to be exported to a Cloud Storage bucket for long-term archiving and compliance. Which feature of Cloud Logging should you use?',
        options: [
            'Log Explorer',
            'Logs Router with a Sink',
            'Log-based Metrics',
            'Cloud Monitoring Dashboards'
        ],
        correctAnswer: [1],
        explanation: 'The Logs Router in Cloud Logging allows you to create "sinks" that define destinations for your logs, such as Cloud Storage, BigQuery, or Pub/Sub. By creating a sink to a Cloud Storage bucket, you can automatically export logs for archiving and compliance purposes.',
        resourceLink: 'https://cloud.google.com/logging/docs/export/configure_export_sinks'
    },
    {
        id: 't3q3',
        questionText: 'You need to provision and manage your Google Cloud infrastructure using declarative configuration files (Infrastructure as Code). Which Google Cloud service or tool is designed for this?',
        options: [
            'Cloud Shell',
            'Cloud Console',
            'Cloud Deployment Manager',
            'gcloud CLI'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Deployment Manager is an Infrastructure as Code (IaC) service that allows you to specify all the resources needed for your application in a declarative format (YAML or Python templates). It then deploys and manages these resources as a single unit, ensuring consistency and repeatability. Cloud Shell and gcloud CLI are interactive tools, and Cloud Console is a graphical UI.',
        resourceLink: 'https://cloud.google.com/deployment-manager/docs/overview'
    },
    {
        id: 't3q4',
        questionText: 'A project manager needs to view the costs associated with different Google Cloud projects. Which IAM role should you grant them to allow viewing billing information without making any changes?',
        options: [
            'Billing Account User',
            'Project Owner',
            'Billing Account Viewer',
            'Project Editor'
        ],
        correctAnswer: [2],
        explanation: 'The "Billing Account Viewer" role (roles/billing.viewer) grants permissions to view all billing account information, including costs, budgets, and payment methods, without the ability to modify any billing settings. This adheres to the principle of least privilege.',
        resourceLink: 'https://cloud.google.com/iam/docs/understanding-roles#billing_roles'
    },
    {
        id: 't3q5',
        questionText: 'You are deploying a global web application that needs to serve content to users with low latency. Which Google Cloud networking product is best for caching content closer to your users?',
        options: [
            'Cloud Load Balancing',
            'Cloud VPN',
            'Cloud CDN (Content Delivery Network)',
            'VPC Service Controls'
        ],
        correctAnswer: [2],
        explanation: 'Cloud CDN (Content Delivery Network) works with Cloud Load Balancing to cache content at Google\'s global edge locations, reducing latency for users worldwide by serving content from a location geographically closer to them. Cloud Load Balancing distributes traffic, Cloud VPN provides secure connectivity, and VPC Service Controls help create security perimeters.',
        resourceLink: 'https://cloud.google.com/cdn/docs/overview'
    },
    {
        id: 't3q6',
        questionText: 'You need to assign a Google Group the ability to only view the contents of a specific Cloud Storage bucket, but not delete or upload anything. Which predefined role is appropriate?',
        options: [
            'Storage Object Creator',
            'Storage Object Viewer',
            'Storage Admin',
            'Storage Legacy Bucket Reader'
        ],
        correctAnswer: [1],
        explanation: 'The `Storage Object Viewer` role (roles/storage.objectViewer) grants read-only access to objects within Cloud Storage buckets. This allows users to view and download objects but prevents them from creating, updating, or deleting them, adhering to the principle of least privilege.',
        resourceLink: 'https://cloud.google.com/storage/docs/access-control/iam-roles#storage-object-viewer'
    },
    {
        id: 't3q7',
        questionText: 'Your company needs to implement a hybrid cloud solution, connecting your on-premises data center to Google Cloud with dedicated, high-bandwidth connections. Which solution provides this dedicated connectivity?',
        options: [
            'Cloud VPN',
            'VPC Peering',
            'Cloud Interconnect (Dedicated)',
            'Shared VPC'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Interconnect (Dedicated) provides a direct physical connection from your on-premises data center to Google\'s network, offering high bandwidth, low latency, and private connectivity, making it suitable for hybrid cloud solutions requiring dedicated links.',
        resourceLink: 'https://cloud.google.com/network-connectivity/docs/interconnect/concepts/overview'
    },
    {
        id: 't3q8',
        questionText: 'You are deploying a new application to App Engine and want to minimize startup time for new instances and reduce cold starts. Which App Engine environment should you prioritize?',
        options: [
            'Flexible Environment',
            'Standard Environment',
            'Managed VMs',
            'Custom Runtimes'
        ],
        correctAnswer: [1],
        explanation: 'The App Engine Standard Environment is designed for rapid scaling, minimal cold starts, and cost optimization, particularly for common language runtimes (Python, Node.js, Java, PHP, Go, Ruby). It provides highly optimized and managed infrastructure for quick startup and shutdown of instances.',
        resourceLink: 'https://cloud.google.com/appengine/docs/standard/'
    },
    {
        id: 't3q9',
        questionText: 'You need to store sensitive application configuration data, such as database passwords and API keys, in a secure, centralized service. Which Google Cloud service is designed for this purpose?',
        options: [
            'Cloud Storage',
            'Secret Manager',
            'Cloud Memorystore',
            'Compute Engine Metadata'
        ],
        correctAnswer: [1],
        explanation: 'Secret Manager is a dedicated service for securely storing and managing secrets. It provides features like versioning, access control (IAM), and auditing for sensitive data, ensuring that credentials and API keys are protected and managed centrally.',
        resourceLink: 'https://cloud.google.com/secret-manager/docs/overview'
    },
    {
        id: 't3q10',
        questionText: 'Your audit team requires a clear record of all changes made to IAM policies in your Google Cloud project. Which Cloud Audit Log type should you review?',
        options: [
            'Data Access logs',
            'System Event logs',
            'Admin Activity logs',
            'Access Transparency logs'
        ],
        correctAnswer: [2],
        explanation: 'Admin Activity logs record all API calls or other actions that modify the configuration or metadata of resources. Changes to IAM policies are administrative actions and are therefore captured in Admin Activity logs, making them essential for auditing security configurations.',
        resourceLink: 'https://cloud.google.com/logging/docs/audit#admin_activity_audit_logs'
    },
    {
        id: 't3q11',
        questionText: 'You are deploying a microservices-based application on Google Kubernetes Engine (GKE). You need a way to connect services running in different GKE clusters within the same VPC network. What is the most common way to achieve this?',
        options: [
            'Cloud VPN',
            'VPC Peering between cluster networks',
            'Shared VPC',
            'External IP addresses for services'
        ],
        correctAnswer: [1],
        explanation: 'VPC Peering allows two VPC networks to communicate with each other using internal IP addresses. If your GKE clusters are in different VPC networks (or different projects using separate VPCs), VPC Peering is a common way to enable private communication between them.',
        resourceLink: 'https://cloud.google.com/vpc/docs/vpc-peering'
    },
    {
        id: 't3q12',
        questionText: 'Your application generates a high volume of logs that need to be analyzed by a security information and event management (SIEM) system. You want to stream these logs in real-time. Which Cloud Logging feature supports this?',
        options: [
            'Log Explorer',
            'Logs Router with a Pub/Sub sink',
            'Log-based Metrics',
            'Cloud Monitoring'
        ],
        correctAnswer: [1],
        explanation: 'The Logs Router allows you to create sinks to export logs to various destinations. By configuring a sink to a Pub/Sub topic, logs can be streamed in real-time, enabling external systems like SIEMs to subscribe to the topic and process the logs as they arrive.',
        resourceLink: 'https://cloud.google.com/logging/docs/export/configure_export_sinks#pubsub'
    },
    {
        id: 't3q13',
        questionText: 'You need to enable automatic scaling for a group of Compute Engine instances based on CPU utilization. Which Compute Engine feature is used for this?',
        options: [
            'Instance templates',
            'Managed Instance Groups (MIGs) with autoscaling',
            'Custom machine types',
            'Preemptible VMs'
        ],
        correctAnswer: [1],
        explanation: 'Managed Instance Groups (MIGs) support autoscaling, which allows you to automatically add or remove instances from the group based on defined metrics, such as CPU utilization, HTTP load balancing serving capacity, or Pub/Sub queue size. This ensures your application can handle varying loads efficiently.',
        resourceLink: 'https://cloud.google.com/compute/docs/autoscaler'
    },
    {
        id: 't3q14',
        questionText: 'Your company requires a highly available and globally consistent transactional database that can scale horizontally to support millions of transactions per second. Which Google Cloud database service is the best fit?',
        options: [
            'Cloud SQL',
            'Cloud Spanner',
            'Firestore',
            'Cloud Bigtable'
        ],
        correctAnswer: [1],
        explanation: 'Cloud Spanner is Google Cloud\'s globally distributed, strongly consistent, and horizontally scalable relational database service. It combines the advantages of relational databases (ACID transactions) with the scalability of NoSQL databases, making it ideal for high-transaction workloads with global requirements.',
        resourceLink: 'https://cloud.google.com/spanner/docs/overview'
    },
    {
        id: 't3q15',
        questionText: 'You need to run a small, event-driven function that processes messages from a Pub/Sub topic. You want a fully managed, serverless compute service that automatically scales to zero. Which service should you choose?',
        options: [
            'Compute Engine',
            'App Engine',
            'Cloud Functions',
            'Cloud Run'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Functions are ideal for small, event-driven functions that execute in response to events from various Google Cloud services, including Pub/Sub. They are fully managed, serverless, and can scale to zero instances when not in use, making them very cost-effective for intermittent workloads.',
        resourceLink: 'https://cloud.google.com/functions/docs/concepts/overview'
    },
    {
        id: 't3q16',
        questionText: 'Your development team needs a private Docker registry to store and manage their container images within Google Cloud. Which service is recommended?',
        options: [
            'Cloud Storage',
            'Cloud Source Repositories',
            'Artifact Registry',
            'Container Registry (legacy)'
        ],
        correctAnswer: [2],
        explanation: 'Artifact Registry is the recommended service for storing, managing, and securing your build artifacts, including Docker images, on Google Cloud. It provides a single, universal package manager for various artifact types and is the successor to Container Registry.',
        resourceLink: 'https://cloud.google.com/artifact-registry/docs/docker/store-docker-images'
    },
    {
        id: 't3q17',
        questionText: 'You need to provide SSH access to a Compute Engine instance for multiple users. You want to centralize user management and leverage existing Google identities. Which feature simplifies this process?',
        options: [
            'Instance metadata SSH keys',
            'OS Login',
            'Cloud IAM custom roles',
            'SSH client software'
        ],
        correctAnswer: [1],
        explanation: 'OS Login integrates Compute Engine instances with IAM, allowing you to manage SSH access for users based on their Google identities and IAM roles. This centralizes SSH key management and simplifies user access control for VMs.',
        resourceLink: 'https://cloud.google.com/compute/docs/os-login/overview'
    },
    {
        id: 't3q18',
        questionText: 'Your company needs to implement a disaster recovery strategy for its data stored in Cloud Storage. You want to ensure data availability even if a region becomes unavailable. What type of Cloud Storage bucket should you use?',
        options: [
            'Regional bucket',
            'Multi-Regional bucket',
            'Dual-Region bucket',
            'Standard bucket'
        ],
        correctAnswer: [1],
        explanation: 'A Multi-Regional bucket stores data redundantly across multiple regions, providing high availability and disaster recovery in case of a regional outage. This ensures your data remains accessible even if one entire region becomes unavailable.',
        resourceLink: 'https://cloud.google.com/storage/docs/locations#multiregional'
    },
    {
        id: 't3q19',
        questionText: 'You are setting up a Continuous Delivery pipeline and need a service that automates the deployment of your application to various target environments (e.g., GKE, Cloud Run). Which Google Cloud service is designed for this?',
        options: [
            'Cloud Build',
            'Cloud Deploy',
            'Cloud Source Repositories',
            'Artifact Registry'
        ],
        correctAnswer: [1],
        explanation: 'Cloud Deploy is a fully managed continuous delivery service that automates the deployment of applications to various Google Cloud runtimes like GKE, Cloud Run, and App Engine. It manages deployment pipelines, approvals, and rollouts across different environments.',
        resourceLink: 'https://cloud.google.com/deploy/docs/overview'
    },
    {
        id: 't3q20',
        questionText: 'You need to ensure that your Compute Engine instances are protected from external threats and only allow necessary inbound connections. Which networking component should you configure?',
        options: [
            'VPC Peering',
            'Firewall rules',
            'Cloud VPN',
            'Shared VPC'
        ],
        correctAnswer: [1],
        explanation: 'Firewall rules in a VPC network control which traffic is allowed or denied to and from your instances. By configuring ingress firewall rules, you can restrict inbound connections to only those necessary for your application, enhancing security.',
        resourceLink: 'https://cloud.google.com/vpc/docs/firewalls'
    },
    {
        id: 't3q21',
        questionText: 'Your data engineers need to run Apache Spark jobs on Google Cloud. They prefer to use a fully managed service to avoid managing the underlying infrastructure. Which service is best suited for this?',
        options: [
            'Compute Engine',
            'Dataproc',
            'BigQuery',
            'Cloud Dataflow'
        ],
        correctAnswer: [1],
        explanation: 'Dataproc is a fully managed, highly scalable service for running Apache Spark, Hadoop, and other open-source data processing frameworks. It simplifies the deployment and management of clusters, allowing data engineers to focus on data processing tasks.',
        resourceLink: 'https://cloud.google.com/dataproc/docs/concepts/overview'
    },
    {
        id: 't3q22',
        questionText: 'You want to create a custom dashboard in Cloud Monitoring to visualize specific metrics from your application and underlying Google Cloud resources. Which tool or service allows you to do this?',
        options: [
            'Log Explorer',
            'Cloud Monitoring Dashboards',
            'Cloud Trace',
            'Cloud Audit Logs'
        ],
        correctAnswer: [1],
        explanation: 'Cloud Monitoring Dashboards allow you to create custom visualizations of your metrics, logs, and uptime checks. You can combine various charts and graphs to get a comprehensive view of your application\'s performance and health.',
        resourceLink: 'https://cloud.google.com/monitoring/dashboards'
    },
    {
        id: 't3q23',
        questionText: 'Your company needs to implement a secure connection between two separate VPC networks within the same Google Cloud project. Which networking feature allows private communication between them?',
        options: [
            'Shared VPC',
            'Cloud VPN',
            'VPC Peering',
            'External IP addresses'
        ],
        correctAnswer: [2],
        explanation: 'VPC Peering connects two VPC networks so that resources in each network can communicate using internal IP addresses. This is a common way to enable private connectivity between separate VPC networks within the same organization or even across different organizations.',
        resourceLink: 'https://cloud.google.com/vpc/docs/vpc-peering'
    },
    {
        id: 't3q24',
        questionText: 'You are deploying a legacy application that requires a specific operating system version and kernel configuration. You want to run it on a virtual machine in Google Cloud. Which compute service offers the most control over the OS?',
        options: [
            'App Engine Standard',
            'Cloud Functions',
            'Compute Engine',
            'Cloud Run'
        ],
        correctAnswer: [2],
        explanation: 'Compute Engine provides the most control over the operating system and underlying infrastructure. You can select specific OS images, customize machine types, and install any software or configure the kernel as needed, making it suitable for legacy applications with strict requirements.',
        resourceLink: 'https://cloud.google.com/compute/docs/overview'
    },
    {
        id: 't3q25',
        questionText: 'You need to transfer a large amount of data from Amazon S3 to Cloud Storage. Which Google Cloud service is designed for online data transfers between cloud providers?',
        options: [
            'gsutil',
            'Transfer Appliance',
            'Storage Transfer Service',
            'Cloud Dataflow'
        ],
        correctAnswer: [2],
        explanation: 'Storage Transfer Service is a fully managed service for online data transfers. It can transfer data between various sources, including Amazon S3, other cloud providers, and on-premises locations, to Cloud Storage buckets efficiently and securely.',
        resourceLink: 'https://cloud.google.com/storage-transfer/docs/overview'
    },
    {
        id: 't3q26',
        questionText: 'Your security team requires that all API calls made to Google Cloud services are logged and include details about who made the call, when, and from where. Which type of Cloud Audit Log provides this information?',
        options: [
            'Data Access logs',
            'System Event logs',
            'Admin Activity logs',
            'Access Transparency logs'
        ],
        correctAnswer: [2],
        explanation: 'Admin Activity logs record administrative events, such as API calls that modify resources. These logs contain information about the caller, timestamp, and IP address, which are crucial for security auditing and compliance.',
        resourceLink: 'https://cloud.google.com/logging/docs/audit#admin_activity_audit_logs'
    },
    {
        id: 't3q27',
        questionText: 'You want to deploy an application that processes messages from a Cloud Pub/Sub topic and stores the results in BigQuery. Which service is best suited for building and running this streaming data pipeline?',
        options: [
            'Cloud Functions',
            'Cloud Dataflow',
            'Cloud Run',
            'Compute Engine'
        ],
        correctAnswer: [1],
        explanation: 'Cloud Dataflow is a fully managed service for executing Apache Beam pipelines, which are ideal for both batch and streaming data processing. It can process real-time data from Pub/Sub and efficiently load it into BigQuery, making it perfect for streaming ETL pipelines.',
        resourceLink: 'https://cloud.google.com/dataflow/docs/concepts/overview'
    },
    {
        id: 't3q28',
        questionText: 'Your company needs to ensure that all new projects created within the organization have specific default IAM roles assigned to certain users. Which feature can enforce this across the organization?',
        options: [
            'Project templates',
            'Organization Policies',
            'Custom IAM roles',
            'Cloud Deployment Manager'
        ],
        correctAnswer: [1],
        explanation: 'Organization Policies allow you to define constraints and enforce specific configurations across all projects within an organization. While there isn\'t a direct "default IAM roles" organizational policy, you can achieve similar outcomes by enforcing compliance with specific resource configurations or by using tools that automate project creation with predefined IAM bindings.',
        resourceLink: 'https://cloud.google.com/resource-manager/docs/organization-policy/overview'
    },
    {
        id: 't3q29',
        questionText: 'You are deploying a web application with multiple backend services. You need a load balancer that distributes traffic based on URL paths. Which Google Cloud load balancer supports content-based routing?',
        options: [
            'Internal Load Balancer',
            'Network Load Balancer',
            'HTTP(S) Load Balancer',
            'SSL Proxy Load Balancer'
        ],
        correctAnswer: [2],
        explanation: 'The HTTP(S) Load Balancer supports advanced traffic management features, including content-based routing (URL map). This allows you to route requests to different backend services based on the URL path, hostname, or other HTTP request attributes.',
        resourceLink: 'https://cloud.google.com/load-balancing/docs/url-map-concepts'
    },
    {
        id: 't3q30',
        questionText: 'Your application needs a managed object storage solution for archiving infrequently accessed data that requires the lowest possible storage cost. Which Cloud Storage class should you use?',
        options: [
            'Standard Storage',
            'Nearline Storage',
            'Coldline Storage',
            'Archive Storage'
        ],
        correctAnswer: [3],
        explanation: 'Archive Storage offers the lowest storage price per GB for data that is rarely accessed, typically less than once a year. While retrieval costs are higher, it is the most cost-effective solution for long-term archival data.',
        resourceLink: 'https://cloud.google.com/storage/docs/storage-classes'
    },
    {
        id: 't3q31',
        questionText: 'You need to view real-time performance metrics (e.g., CPU utilization, network throughput) for your Compute Engine instances and set up alerts. Which Google Cloud service provides this capability?',
        options: [
            'Cloud Logging',
            'Cloud Monitoring',
            'Cloud Trace',
            'Cloud Audit Logs'
        ],
        correctAnswer: [1],
        explanation: 'Cloud Monitoring is the primary service for collecting, visualizing, and alerting on performance metrics from your Google Cloud resources. It provides dashboards, charts, and alerting policies for various metrics, including those from Compute Engine.',
        resourceLink: 'https://cloud.google.com/monitoring/docs/metrics-gcp'
    },
    {
        id: 't3q32',
        questionText: 'Your application requires a highly available and scalable in-memory data store for caching and real-time data. Which Google Cloud service is designed for this?',
        options: [
            'Cloud SQL',
            'Firestore',
            'Cloud Memorystore for Redis',
            'Cloud Bigtable'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Memorystore for Redis is a fully managed Redis service that provides a highly available, in-memory data store with extremely low latency. It is ideal for caching frequently accessed data, managing session state, and implementing real-time analytics.',
        resourceLink: 'https://cloud.google.com/memorystore/docs/redis/overview'
    },
    {
        id: 't3q33',
        questionText: 'You are troubleshooting a performance issue with a deployed application and need to identify which parts of the code are causing latency. Which Google Cloud service can help pinpoint performance bottlenecks in your code?',
        options: [
            'Cloud Logging',
            'Cloud Monitoring',
            'Cloud Trace',
            'Cloud Debugger'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Trace provides distributed tracing for your applications, allowing you to visualize the end-to-end latency of requests and identify bottlenecks across different services or code paths. It helps pinpoint where time is spent within your application.',
        resourceLink: 'https://cloud.google.com/trace/docs/overview'
    },
    {
        id: 't3q34',
        questionText: 'You need to create a service account that can only publish messages to a specific Pub/Sub topic. Which predefined IAM role is most appropriate?',
        options: [
            'Pub/Sub Editor',
            'Pub/Sub Publisher',
            'Pub/Sub Subscriber',
            'Project Editor'
        ],
        correctAnswer: [1],
        explanation: 'The `Pub/Sub Publisher` role (roles/pubsub.publisher) grants permissions to publish messages to a Pub/Sub topic. This role adheres to the principle of least privilege, providing only the necessary permissions for publishing without allowing subscription or administrative actions.',
        resourceLink: 'https://cloud.google.com/iam/docs/understanding-roles#pubsub_roles'
    },
    {
        id: 't3q35',
        questionText: 'Your company needs to run a machine learning training job on Compute Engine instances that can tolerate interruptions and are cost-sensitive. Which type of VM is best suited for this?',
        options: [
            'Standard VMs',
            'Preemptible VMs',
            'Sole-tenant Nodes',
            'Custom Machine Types'
        ],
        correctAnswer: [1],
        explanation: 'Preemptible VMs are highly affordable, short-lived Compute Engine instances that can be terminated by Google Cloud if resources are needed elsewhere. They are ideal for fault-tolerant workloads like batch processing and machine learning training, where the job can be restarted from a checkpoint if interrupted.',
        resourceLink: 'https://cloud.google.com/compute/docs/instances/preemptible'
    },
    {
        id: 't3q36',
        questionText: 'You need to configure your Compute Engine instances to automatically receive necessary security and bug fix updates for the underlying operating system. Which feature can help automate this?',
        options: [
            'Manual OS updates',
            'Using a custom image and manually updating it',
            'Enabling OS-level auto-updates within the VM',
            'Using Managed Instance Groups with auto-update policies and updated instance templates'
        ],
        correctAnswer: [3],
        explanation: 'Managed Instance Groups (MIGs) can be configured with auto-update policies. By creating a new instance template with an updated OS image (which includes security patches and bug fixes) and applying a rolling update, you can automate the process of keeping your instances up-to-date and secure.',
        resourceLink: 'https://cloud.google.com/compute/docs/instance-groups/rolling-out-updates'
    },
    {
        id: 't3q37',
        questionText: 'Your team is developing a serverless application that needs to interact with various Google Cloud services using HTTP(S) endpoints. Which service is designed for building and managing APIs for these applications?',
        options: [
            'Cloud Functions',
            'Cloud Run',
            'Cloud Endpoints',
            'App Engine'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Endpoints is a distributed API management system that helps you create, deploy, secure, and monitor APIs built on Google Cloud. It provides features like authentication, authorization, quota management, and monitoring for your API endpoints.',
        resourceLink: 'https://cloud.google.com/endpoints/docs/overview'
    },
    {
        id: 't3q38',
        questionText: 'You need to deploy a private container image to Cloud Run. Which Google Cloud service should you use to securely store and manage your container images?',
        options: [
            'Cloud Storage',
            'Cloud Source Repositories',
            'Artifact Registry',
            'Container Registry (legacy)'
        ],
        correctAnswer: [2],
        explanation: 'Artifact Registry is the recommended service for storing, managing, and securing all your build artifacts, including private Docker container images. It provides universal support for various package formats and integrates seamlessly with Cloud Build and Cloud Run.',
        resourceLink: 'https://cloud.google.com/artifact-registry/docs/docker/store-docker-images'
    },
    {
        id: 't3q39',
        questionText: 'Your organization uses a shared VPC network. You need to create a new Compute Engine instance in a service project and connect it to a specific subnet in the host project\'s shared VPC network. How do you specify the network for the new instance?',
        options: [
            'The instance automatically connects to the default network.',
            'Specify the network and subnetwork details during instance creation.',
            'Create a new VPC network in the service project.',
            'Connect the instance to the host project via VPC Peering.'
        ],
        correctAnswer: [1],
        explanation: 'When creating a Compute Engine instance in a service project participating in Shared VPC, you must explicitly specify the host project\'s shared VPC network and the desired subnet within that network during instance creation. This directs the instance to connect to the centralized network.',
        resourceLink: 'https://cloud.google.com/vpc/docs/shared-vpc#provisioning_instances'
    },
    {
        id: 't3q40',
        questionText: 'You are setting up a Continuous Integration (CI) pipeline on Google Cloud. Your build process involves running tests and creating a Docker image. Which service orchestrates these build steps?',
        options: [
            'Cloud Source Repositories',
            'Cloud Build',
            'Cloud Deploy',
            'Artifact Registry'
        ],
        correctAnswer: [1],
        explanation: 'Cloud Build is a fully managed CI/CD platform that executes your build steps defined in a `cloudbuild.yaml` file. It can fetch source code, run tests, build Docker images, and push them to Artifact Registry, automating your CI process.',
        resourceLink: 'https://cloud.google.com/cloud-build/docs/overview'
    },
    {
        id: 't3q41',
        questionText: 'You need to assign a Google Group the ability to only view the billing account details, without being able to modify payment methods or budgets. Which IAM role is most appropriate?',
        options: [
            'Billing Account User',
            'Billing Account Creator',
            'Billing Account Viewer',
            'Project Billing Manager'
        ],
        correctAnswer: [2],
        explanation: 'The `Billing Account Viewer` role (roles/billing.viewer) grants read-only access to all billing account information. This allows users to see costs, budgets, and payment methods without the ability to make any changes, adhering to the principle of least privilege.',
        resourceLink: 'https://cloud.google.com/iam/docs/understanding-roles#billing_roles'
    },
    {
        id: 't3q42',
        questionText: 'Your application needs to store large files (e.g., backups, archives) that are accessed very infrequently. You want the most cost-effective storage option. Which Cloud Storage class should you choose?',
        options: [
            'Standard Storage',
            'Nearline Storage',
            'Coldline Storage',
            'Archive Storage'
        ],
        correctAnswer: [3],
        explanation: 'Archive Storage offers the lowest storage price per GB for data that is rarely accessed, typically less than once a year. While retrieval costs and latency are higher than other classes, it is the most economical choice for long-term archival data.',
        resourceLink: 'https://cloud.google.com/storage/docs/storage-classes'
    },
    {
        id: 't3q43',
        questionText: 'You are designing a secure environment. You need to ensure that specific Compute Engine instances can only communicate with other instances within the same subnet. What is the most effective way to enforce this network segmentation?',
        options: [
            'VPC Peering',
            'Firewall rules using network tags',
            'Separate VPC networks for each subnet',
            'Cloud VPN'
        ],
        correctAnswer: [1],
        explanation: 'Firewall rules can be configured with network tags. By applying specific tags to instances and then creating firewall rules that only allow traffic between instances with matching tags (and within the desired subnets), you can enforce granular network segmentation and control communication flows.',
        resourceLink: 'https://cloud.google.com/vpc/docs/using-firewalls#tags'
    },
    {
        id: 't3q44',
        questionText: 'Your company needs to implement a data ingestion pipeline for streaming data from IoT devices. The data needs to be processed in real-time and stored for immediate analytics. Which combination of services is best suited?',
        options: [
            'Cloud Storage and BigQuery',
            'Pub/Sub and Cloud Dataflow',
            'Cloud SQL and Looker Studio',
            'Compute Engine and Apache Kafka'
        ],
        correctAnswer: [1],
        explanation: 'Pub/Sub is excellent for ingesting high volumes of real-time streaming data from IoT devices. Cloud Dataflow can then be used to process this streaming data in real-time and load it into a suitable data store like BigQuery for immediate analytics.',
        resourceLink: 'https://cloud.google.com/dataflow/docs/concepts/overview'
    },
    {
        id: 't3q45',
        questionText: 'You need to monitor the uptime and health of your web application from various geographic locations around the world. Which Cloud Monitoring feature is designed for this?',
        options: [
            'Log-based Metrics',
            'Alerting Policies',
            'Uptime Checks',
            'Metric Explorer'
        ],
        correctAnswer: [2],
        explanation: 'Uptime Checks in Cloud Monitoring periodically test the availability and responsiveness of your web applications, websites, and APIs from multiple global locations. They allow you to configure alerts if your application becomes unavailable or unresponsive.',
        resourceLink: 'https://cloud.google.com/monitoring/uptime-checks'
    },
    {
        id: 't3q46',
        questionText: 'Your application needs to connect to an external service that has a public IP address, but your Compute Engine instances only have internal IP addresses. How can you enable your instances to reach this external service privately?',
        options: [
            'Assign external IP addresses to instances.',
            'Use Cloud NAT (Network Address Translation).',
            'Use VPC Peering.',
            'Create a Cloud VPN tunnel.'
        ],
        correctAnswer: [1],
        explanation: 'Cloud NAT allows instances without external IP addresses to connect to the internet (including external services) through a NAT gateway. This provides secure outbound connectivity while keeping instances private and reducing the need for individual external IPs.',
        resourceLink: 'https://cloud.google.com/nat/docs/overview'
    },
    {
        id: 't3q47',
        questionText: 'You are troubleshooting an issue with an application deployed on a Compute Engine instance. You want to execute commands on the instance without using SSH. Which tool provides web-based access to the instance\'s shell?',
        options: [
            'gcloud CLI',
            'Cloud Console SSH-in-browser',
            'Cloud Shell',
            'Deployment Manager'
        ],
        correctAnswer: [1],
        explanation: 'The Cloud Console provides a built-in "SSH in browser" feature that allows you to establish an SSH connection to your Compute Engine instances directly from your web browser, without needing to install or configure SSH clients locally.',
        resourceLink: 'https://cloud.google.com/compute/docs/instances/connecting-to-instance#ssh-in-browser'
    },
    {
        id: 't3q48',
        questionText: 'Your team needs to manage Kubernetes resources (Pods, Deployments, Services) using a command-line tool. Which tool is specifically designed for interacting with Kubernetes clusters?',
        options: [
            'gcloud CLI',
            'gsutil',
            'kubectl',
            'bq'
        ],
        correctAnswer: [2],
        explanation: '`kubectl` is the command-line tool for running commands against Kubernetes clusters. It allows you to deploy applications, inspect and manage cluster resources, and view logs, making it essential for GKE administration.',
        resourceLink: 'https://kubernetes.io/docs/reference/kubectl/overview/'
    },
    {
        id: 't3q49',
        questionText: 'You are setting up a budget for your Google Cloud project and want to receive an email notification when 50% of the budget has been consumed. Where do you configure this alert?',
        options: [
            'Cloud Logging',
            'Cloud Monitoring',
            'Cloud Billing budget alerts',
            'IAM'
        ],
        correctAnswer: [2],
        explanation: 'Cloud Billing allows you to create budgets and set up alert thresholds (e.g., 50%, 90%, 100% of budget) to notify specified recipients via email or Pub/Sub when your actual or forecasted spend reaches those thresholds.',
        resourceLink: 'https://cloud.google.com/billing/docs/how-to/budgets#create_a_budget'
    },
    {
        id: 't3q50',
        questionText: 'Your company needs to integrate an on-premises application with a Google Cloud Pub/Sub topic to send messages. The on-premises application cannot directly access the public internet. Which Google Cloud networking solution can facilitate this private connectivity?',
        options: [
            'Cloud VPN over public internet',
            'Cloud Interconnect with Private Google Access',
            'Shared VPC',
            'VPC Peering'
        ],
        correctAnswer: [1],
        explanation: 'Cloud Interconnect provides dedicated, private connectivity from your on-premises network to Google Cloud. When combined with Private Google Access, your on-premises resources can privately access Google APIs and services (like Pub/Sub) without traversing the public internet, ensuring secure and direct communication.',
        resourceLink: 'https://cloud.google.com/network-connectivity/docs/interconnect/concepts/overview#private-google-access'
    }
];

const getRandomQuestions = (count = 10) => {
    const allQuestions = [
        ...test1Questions,
        ...test2Questions,
        ...test3Questions
    ];
const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const getAllQuestions = () => {
    return [
        ...test1Questions,
        ...test2Questions,
        ...test3Questions
    ];
};

export const questionsData = {
    test1: test1Questions,
    test2: test2Questions,
    test3: test3Questions,
    random: getRandomQuestions,
    review: getAllQuestions
}; 