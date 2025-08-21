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
        correctAnswer: [2],
        explanation: 'Google App Engine (Standard Environment) is a fully managed platform-as-a-service (PaaS) that offers automatic scaling, high availability, and zero-server management, making it ideal for web applications with varying traffic. While GCE with MIGs and GKE can provide scaling, they require more operational overhead. Cloud Functions are suitable for event-driven, short-lived functions, not a full web application.',
        resourceLink: 'https://cloud.google.com/appengine/docs/the-appengine-environments'
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
        resourceLink: 'https://cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs'
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
        resourceLink: 'https://cloud.google.com/monitoring/docs/monitoring-overview'
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
        resourceLink: 'https://cloud.google.com/appengine/docs/flexible'
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
        resourceLink: 'https://cloud.google.com/about/locations'
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
        resourceLink: 'https://cloud.google.com/sql/docs/mysql/connect-proxy'
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
        resourceLink: 'https://cloud.google.com/run/docs/overview/what-is-cloud-run'
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
        resourceLink: 'https://cloud.google.com/storage/docs/access-control/best-practices-access-control'
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
        resourceLink: 'https://cloud.google.com/appengine/docs/standard/testing-and-deploying-your-app?tab=python#testing-on-app-engine'
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
        resourceLink: 'https://cloud.google.com/monitoring/alerts/docs/alerting-policies-overview'
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
        resourceLink: 'https://cloud.google.com/compute/docs/images/managing-custom-images'
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
        resourceLink: 'https://cloud.google.com/pubsub/docs/subscriber'
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
        resourceLink: 'https://cloud.google.com/logging/docs/export/aggregated-sinks'
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
        resourceLink: 'https://cloud.google.com/vpc/docs/vpc'
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
        resourceLink: 'https://cloud.google.com/appengine/docs/standard/getting-started/securing-custom-domains-with-ssl'
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
        resourceLink: 'https://cloud.google.com/compute/docs/disks#disk-types'
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
        resourceLink: 'https://cloud.google.com/dns/docs/zones#create-a-public-zone'
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
        resourceLink: 'https://cloud.google.com/storage/docs/access-control/iam-roles'
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
        resourceLink: 'https://cloud.google.com/logging/docs/log-explorer'
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
        resourceLink: 'https://cloud.google.com/compute/docs/oslogin'
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
    },
]
const test4Questions = [
        {
        "id": "t4q1",
        "questionText": "You significantly changed a complex Deployment Manager template and want to confirm that the dependencies of all defined resources are properly met before committing it to the project. You want the most rapid feedback on your changes. What should you do?",
        "options": [
            "Use granular logging statements within a Deployment Manager template authored in Python.",
            "Monitor activity of the Deployment Manager execution on the Stackdriver Logging page of the GCP Console.",
            "Execute the Deployment Manager template against a separate project with the same configuration, and monitor for failures.",
            "Execute the Deployment Manager template using the C-preview option in the same project, and observe the state of interdependent resources."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Execute the Deployment Manager template using the C-preview option in the same project, and observe the state of interdependent resources.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q2",
        "questionText": "Your company has a 3-tier solution running on Compute Engine. The configuration of the current infrastructure is shown below. Each tier has a service account that is associated with all instances within it. You need to enable communication on TCP port 8080 between tiers as follows: Instances in tier #1 must communicate with tier #2. Instances in tier #2 must communicate with tier #3. What should you do?",
        "options": [
            "1. Create an ingress firewall rule with the following settings: Targets: all instances. Source filter: IP ranges (with the range set to 10.0.2.0/24). Protocols: allow all. 2. Create an ingress firewall rule with the following settings: Targets: all instances. Source filter: IP ranges (with the range set to 10.0.1.0/24). Protocols: allow all.",
            "1. Create an ingress firewall rule with the following settings: Targets: all instances with tier #2 service account. Source filter: all instances with tier #1 service account. Protocols: allow TCP: 8080. 2. Create an ingress firewall rule with the following settings: Targets: all instances with tier #3 service account. Source filter: all instances with tier #2 service account. Protocols: allow TCP: 8080.",
            "1. Create an ingress firewall rule with the following settings: Targets: all instances with tier #2 service account. Source filter: all instances with tier #1 service account. Protocols: allow all. 2. Create an ingress firewall rule with the following settings: Targets: all instances with tier #3 service account. Source filter: all instances with tier #2 service account. Protocols: allow all.",
            "1. Create an egress firewall rule with the following settings: Targets: all instances. Source filter: IP ranges (with the range set to 10.0.2.0/24). Protocols: allow TCP: 8080. 2. Create an egress firewall rule with the following settings: Targets: all instances. Source filter: IP ranges (with the range set to 10.0.1.0/24). Protocols: allow TCP: 8080."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is '1. Create an ingress firewall rule with the following settings: Targets: all instances with tier #2 service account. Source filter: all instances with tier #1 service account. Protocols: allow TCP: 8080. 2. Create an ingress firewall rule with the following settings: Targets: all instances with tier #3 service account. Source filter: all instances with tier #2 service account. Protocols: allow TCP: 8080.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t4q3",
        "questionText": "You are analyzing Google Cloud Platform service costs from three separate projects. You want to use this information to create service cost estimates by service type, daily and monthly, for the next six months using standard query syntax. What should you do?",
        "options": [
            "Export your bill to a Cloud Storage bucket, and then import into Cloud Bigtable for analysis.",
            "Export your bill to a Cloud Storage bucket, and then import into Google Sheets for analysis.",
            "Export your transactions to a local file, and perform analysis with a desktop tool.",
            "Export your bill to a BigQuery dataset, and then write time window-based SQL queries for analysis."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Export your bill to a BigQuery dataset, and then write time window-based SQL queries for analysis.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q4",
        "questionText": "You want to send and consume Cloud Pub/Sub messages from your App Engine application. The Cloud Pub/Sub API is currently disabled. You will use a service account to authenticate your application to the API. You want to make sure your application can use Cloud Pub/Sub. What should you do?",
        "options": [
            "Enable the Cloud Pub/Sub API in the API Library on the GCP Console.",
            "Rely on the automatic enablement of the Cloud Pub/Sub API when the Service Account accesses it.",
            "Use Deployment Manager to deploy your application. Rely on the automatic enablement of all APIs used by the application being deployed.",
            "Grant the App Engine Default service account the role of Cloud Pub/Sub Admin. Have your application enable the API on the first connection to Cloud Pub/Sub."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Enable the Cloud Pub/Sub API in the API Library on the GCP Console.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/appengine/docs"
    },
    {
        "id": "t4q5",
        "questionText": "You have a website hosted on App Engine standard environment. You want 1% of your users to see a new test version of the website. You want to minimize complexity.",
        "options": [
            "Deploy the new version in the same application and use the \u2013-migrate option.",
            "Deploy the new version in the same application and use the \u2013-splits option to give a weight of 99 to the current version and a weight of 1 to the new version.",
            "Create a new App Engine application in the same project. Deploy the new version in that application. Use the App Engine library to proxy 1% of the requests to the new version.",
            "Create a new App Engine application in the same project. Deploy the new version in that application. Configure your network load balancer to send 1% of the traffic to that new application."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Deploy the new version in the same application and use the \u2013-splits option to give a weight of 99 to the current version and a weight of 1 to the new version.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/appengine/docs"
    },
    {
        "id": "t4q6",
        "questionText": "Your organization is a financial company that needs to store audit log files for 3 years. Your organization has hundreds of Google Cloud projects. You need to implement a cost-effective approach for log file retention.",
        "options": [
            "Create an export to the sink that saves logs from Cloud Audit to BigQuery.",
            "Create an export to the sink that saves logs from Cloud Audit to a Coldline Storage bucket.",
            "Write a custom script that uses logging API to copy the logs from Stackdriver logs to BigQuery.",
            "Export these logs to Cloud Pub/Sub and write a Cloud Dataflow pipeline to store logs to Cloud SQL."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Create an export to the sink that saves logs from Cloud Audit to a Coldline Storage bucket.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q7",
        "questionText": "You built an application on Google Cloud that uses Cloud Spanner. Your support team needs to monitor the environment but should not have access to table data. You need a streamlined solution to grant the correct permissions to your support team, and you want to follow Google-recommended practices. What should you do?",
        "options": [
            "Add the support team group to the roles/monitoring.viewer role.",
            "Add the support team group to the roles/spanner.databaseUser role.",
            "Add the support team group to the roles/spanner.databaseReader role.",
            "Add the support team group to the roles/stackdriver.accounts.viewer role."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Add the support team group to the roles/monitoring.viewer role.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q8",
        "questionText": "You want to run a single caching HTTP reverse proxy on GCP for a latency-sensitive website. This specific reverse proxy consumes almost no CPU. You want to have a 30-GB in-memory cache, and need an additional 2 GB of memory for the rest of the processes. You want to minimize cost. How should you run this reverse proxy?",
        "options": [
            "Create a Cloud Memorystore for Redis instance with 32-GB capacity.",
            "Run it on Compute Engine, and choose a custom instance type with 6 vCPUs and 32 GB of memory.",
            "Package it in a container image, and run it on Kubernetes Engine, using n1-standard-32 instances as nodes.",
            "Run it on Compute Engine, choose the instance type n1-standard-1, and add an SSD persistent disk of 32 GB."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Create a Cloud Memorystore for Redis instance with 32-GB capacity.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q9",
        "questionText": "You have a single binary application that you want to run on Google Cloud Platform. You decided to automatically scale the application based on underlying infrastructure CPU usage. Your organizational policies require you to use Virtual Machines directly. You need to ensure that the application scaling is operationally efficient and completed as quickly as possible. What should you do?",
        "options": [
            "Create a Google Kubernetes Engine cluster, and use horizontal pod autoscaling to scale the application.",
            "Create an instance template, and use the template in a Managed Instance Group with autoscaling configured.",
            "Create an instance template, and use the template in a Managed Instance Group that scales up and down based on the time of day.",
            "Use a set of third-party tools to build automation around scaling the application up and down, based on Stackdriver CPU usage monitoring."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Create an instance template, and use the template in a Managed Instance Group with autoscaling configured.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q10",
        "questionText": "You need to set up permissions for a set of Compute Engine instances to enable them to write data into a particular Cloud Storage bucket. You want to follow Google-recommended practices. What should you do?",
        "options": [
            "Create a service account with an access scope. Use the access scope 'https://www.googleapis.com/auth/devstorage.write_only'.",
            "Create a service account with an access scope. Use the access scope 'https://www.googleapis.com/auth/cloud-platform'.",
            "Create a service account and add it to the IAM role 'storage.objectCreator' for that bucket.",
            "Create a service account and add it to the IAM role 'storage.objectAdmin' for that bucket."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Create a service account and add it to the IAM role 'storage.objectCreator' for that bucket.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t4q11",
        "questionText": "You have an object in a Cloud Storage bucket that you want to share with an external company. The object contains sensitive data. You want access to the content to be removed after four hours. The external company does not have a Google account to which you can grant specific user-based access privileges. You want to use the most secure method that requires the fewest steps. What should you do?",
        "options": [
            "Create a signed URL with a four-hour expiration and share the URL with the company.",
            "Set object access to 'public' and use object lifecycle management to remove the object after four hours.",
            "Configure the storage bucket as a static website and furnish the object's URL to the company. Delete the object from the storage bucket after four hours.",
            "Create a new Cloud Storage bucket specifically for the external company to access. Copy the object to that bucket. Delete the bucket after four hours have passed."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Create a signed URL with a four-hour expiration and share the URL with the company.'. This is the recommended solution for Cloud Storage operations.",
        "resourceLink": "https://cloud.google.com/storage/docs"
    },
    {
        "id": "t4q12",
        "questionText": "You need to create an autoscaling Managed Instance Group for an HTTPS web application. You want to make sure that unhealthy VMs are recreated. What should you do?",
        "options": [
            "Create a health check on port 443 and use that when creating the Managed Instance Group.",
            "Select Multi-Zone instead of Single-Zone when creating the Managed Instance Group.",
            "In the Instance Template, add the label 'health-check'.",
            "In the Instance Template, add a startup script that sends a heartbeat to the metadata server."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Create a health check on port 443 and use that when creating the Managed Instance Group.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q13",
        "questionText": "You are deploying an application to a Compute Engine VM in a Managed Instance Group. The application must be running at all times, but only a single instance of the VM should run per GCP project. How should you configure the instance group?",
        "options": [
            "Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 1.",
            "Set autoscaling to Off, set the minimum number of instances to 1, and then set the maximum number of instances to 1.",
            "Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 2.",
            "Set autoscaling to Off, set the minimum number of instances to 1, and then set the maximum number of instances to 2."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 1.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q14",
        "questionText": "You have production and test workloads that you want to deploy on Compute Engine. Production VMs need to be in a different subnet than the test VMs. All the VMs must be able to reach each other over internal IP without creating additional routes. You need to set up VPC and the 2 subnets. Which configuration meets these requirements?",
        "options": [
            "Create a single custom VPC with 2 subnets. Create each subnet in a different region and with a different CIDR range.",
            "Create a single custom VPC with 2 subnets. Create each subnet in the same region and with the same CIDR range.",
            "Create 2 custom VPCs, each with a single subnet. Create each subnet is a different region and with a different CIDR range.",
            "Create 2 custom VPCs, each with a single subnet. Create each subnet in the same region and with the same CIDR range."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Create a single custom VPC with 2 subnets. Create each subnet in a different region and with a different CIDR range.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t4q15",
        "questionText": "You have an instance group that you want to load balance. You want the load balancer to terminate the client SSL session. The instance group is used to serve a public web application over HTTPS. You want to follow Google-recommended practices. What should you do?",
        "options": [
            "Configure an HTTP(S) load balancer.",
            "Configure an internal TCP load balancer.",
            "Configure an external SSL proxy load balancer.",
            "Configure an external TCP proxy load balancer."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Configure an HTTP(S) load balancer.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q16",
        "questionText": "You have a web application deployed as a Managed Instance Group. You have a new version of the application to gradually deploy. Your web application is currently receiving live web traffic. You want to ensure that the available capacity does not decrease during the deployment. What should you do?",
        "options": [
            "Perform a rolling-action start-update with maxSurge set to 0 and maxUnavailable set to 1.",
            "Perform a rolling-action start-update with maxSurge set to 1 and maxUnavailable set to 0.",
            "Create a new Managed Instance Group with an updated instance template. Add the group to the backend service for the load balancer. When all instances in the new Managed Instance Group are healthy, delete the old Managed Instance Group.",
            "Create a new instance template with the new application version. Update the existing Managed Instance Group with the new instance template. Delete the instances in the Managed Instance Group to allow the Managed Instance Group to recreate the instance using the new instance template."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Perform a rolling-action start-update with maxSurge set to 1 and maxUnavailable set to 0.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q17",
        "questionText": "You need to grant access for three users so that they can view and edit table data on a Cloud Spanner instance. What should you do?",
        "options": [
            "Run gcloud iam roles describe roles/spanner.databaseUser. Add the users to the role.",
            "Run gcloud iam roles describe roles/spanner.databaseUser. Add the users to a new group. Add the group to the role.",
            "Run gcloud iam roles describe roles/spanner.viewer \u2013project my-project. Add the users to the role.",
            "Run gcloud iam roles describe roles/spanner.viewer \u2013project my-project. Add the users to a new group. Add the group to the role."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Run gcloud iam roles describe roles/spanner.databaseUser. Add the users to a new group. Add the group to the role.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q18",
        "questionText": "You need to create a new billing account and then link it with an existing Google Cloud Platform project. What should you do?",
        "options": [
            "Verify that you are Project Billing Manager for the GCP project. Update the existing project to link it to the existing billing account.",
            "Verify that you are Project Billing Manager for the GCP project. Create a new billing account and link the new billing account to the existing project.",
            "Verify that you are Billing Administrator for the billing account. Create a new project and link the new project to the existing billing account.",
            "Verify that you are Billing Administrator for the billing account. Update the existing project to link it to the existing billing account."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Verify that you are Project Billing Manager for the GCP project. Create a new billing account and link the new billing account to the existing project.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q19",
        "questionText": "You have sensitive data stored in three Cloud Storage buckets and have enabled data access logging. You want to verify activities for a particular user for these buckets, using the fewest possible steps. You need to verify the addition of metadata labels and which files have been viewed from those buckets. What should you do?",
        "options": [
            "Using the GCP Console, filter the Activity log to view the information.",
            "Using the GCP Console, filter the Stackdriver log to view the information.",
            "View the bucket in the Storage section of the GCP Console.",
            "Create a trace in Stackdriver to view the information."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Using the GCP Console, filter the Activity log to view the information.'. This is the recommended solution for Cloud Storage operations.",
        "resourceLink": "https://cloud.google.com/storage/docs"
    },
    {
        "id": "t4q20",
        "questionText": "You need to run an important query in BigQuery but expect it to return a lot of records. You want to find out how much it will cost to run the query. You are using on-demand pricing. What should you do?",
        "options": [
            "Arrange to switch to Flat-Rate pricing for this query, then move back to on-demand.",
            "Use the command line to run a dry run query to estimate the number of bytes read. Then convert that bytes estimate to dollars using the Pricing Calculator.",
            "Use the command line to run a dry run query to estimate the number of bytes returned. Then convert that bytes estimate to dollars using the Pricing Calculator.",
            "Run a select count (*) to get an idea of how many records your query will look through. Then convert that number of rows to dollars using the Pricing Calculator."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Use the command line to run a dry run query to estimate the number of bytes read. Then convert that bytes estimate to dollars using the Pricing Calculator.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/bigquery/docs"
    },
    {
        "id": "t4q21",
        "questionText": "You need to monitor resources that are distributed over different projects in Google Cloud Platform. You want to consolidate reporting under the same Stackdriver Monitoring dashboard. What should you do?",
        "options": [
            "Use Shared VPC to connect all projects, and link Stackdriver to one of the projects.",
            "For each project, create a Stackdriver account. In each project, create a service account for that project and grant it the role of Stackdriver Account Editor in all other projects.",
            "Configure a single Stackdriver account, and link all projects to the same account.",
            "Configure a single Stackdriver account for one of the projects. In Stackdriver, create a Group and add the other project names as criteria for that Group."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Configure a single Stackdriver account, and link all projects to the same account.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q22",
        "questionText": "You need a dynamic way of provisioning VMs on Compute Engine. The exact specifications will be in a dedicated configuration file. You want to follow Google's recommended practices. Which method should you use?",
        "options": [
            "Deployment Manager.",
            "Cloud Composer.",
            "Managed Instance Group.",
            "Unmanaged Instance Group."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Deployment Manager.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t4q23",
        "questionText": "You created an instance of SQL Server 2017 on Compute Engine to test features in the new version. You want to connect to this instance using the fewest number of steps. What should you do?",
        "options": [
            "Install a RDP client on your desktop. Verify that a firewall rule for port 3389 exists.",
            "Install a RDP client in your desktop. Set a Windows username and password in the GCP Console. Use the credentials to log in to the instance.",
            "Set a Windows password in the GCP Console. Verify that a firewall rule for port 22 exists. Click the RDP button in the GCP Console and supply the credentials to log in.",
            "Set a Windows username and password in the GCP Console. Verify that a firewall rule for port 3389 exists. Click the RDP button in the GCP Console, and supply the credentials to log in."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Install a RDP client in your desktop. Set a Windows username and password in the GCP Console. Use the credentials to log in to the instance.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t4q24",
        "questionText": "You are the organization and billing administrator for your company. The engineering team has the Project Creator role on the organization. You do not want the engineering team to be able to link projects to the billing account. Only the finance team should be able to link a project to a billing account, but they should not be able to make any other changes to projects. What should you do?",
        "options": [
            "Assign the finance team only the Billing Account User role on the billing account.",
            "Assign the engineering team only the Billing Account User role on the billing account.",
            "Assign the finance team the Billing Account User role on the billing account and the Project Billing Manager role on the organization.",
            "Assign the engineering team the Billing Account User role on the billing account and the Project Billing Manager role on the organization."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Assign the finance team only the Billing Account User role on the billing account.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q25",
        "questionText": "You are creating a Google Kubernetes Engine (GKE) cluster with a cluster autoscaler feature enabled. You need to make sure that each node of the cluster will run a monitoring pod that sends container metrics to a third-party monitoring solution. What should you do?",
        "options": [
            "Deploy the monitoring pod in a StatefulSet object.",
            "Deploy the monitoring pod in a DaemonSet object.",
            "Reference the monitoring pod in a Deployment object.",
            "Reference the monitoring pod in a cluster initializer at the GKE cluster creation time."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Deploy the monitoring pod in a DaemonSet object.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/kubernetes-engine/docs"
    },
    {
        "id": "t4q26",
        "questionText": "You create a new Google Kubernetes Engine (GKE) cluster and want to make sure that it always runs a supported and stable version of Kubernetes. What should you do?",
        "options": [
            "Enable the Node Auto-Repair feature for your GKE cluster.",
            "Enable the Node Auto-Upgrades feature for your GKE cluster.",
            "Select the latest available cluster version for your GKE cluster.",
            "Select 'Container-Optimized OS (cos)' as a node image for your GKE cluster."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Enable the Node Auto-Upgrades feature for your GKE cluster.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/kubernetes-engine/docs"
    },
    {
        "id": "t4q27",
        "questionText": "Your company uses Cloud Storage to store application backup files for disaster recovery purposes. You want to follow Google's recommended practices. Which storage option should you use?",
        "options": [
            "Multi-Regional Storage.",
            "Regional Storage.",
            "Nearline Storage.",
            "Coldline Storage."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Coldline Storage.'. This is the recommended solution for Cloud Storage operations.",
        "resourceLink": "https://cloud.google.com/storage/docs"
    },
    {
        "id": "t4q28",
        "questionText": "You need to set up a policy so that videos stored in a specific Cloud Storage Regional bucket are moved to Coldline after 90 days, and then deleted after one year from their creation. How should you set up the policy?",
        "options": [
            "Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete actions. Set the SetStorageClass action to 90 days and the Delete action to 275 days (365-90).",
            "Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete actions. Set the SetStorageClass action to 90 days and the Delete action to 365 days.",
            "Use gsutil rewrite and set the Delete action to 275 days (365-90).",
            "Use gsutil rewrite and set the Delete action to 365 days."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete actions. Set the SetStorageClass action to 90 days and the Delete action to 365 days.'. This is the recommended solution for Cloud Storage operations.",
        "resourceLink": "https://cloud.google.com/storage/docs"
    },
    {
        "id": "t4q29",
        "questionText": "Your company has an existing GCP organization with hundreds of projects and a billing account. Your company recently acquired another company that also has hundreds of projects and its own billing account. You would like to consolidate all GCP costs of both GCP organizations onto a single invoice. You would like to consolidate all costs as of tomorrow. What should you do?",
        "options": [
            "Link the acquired company's projects to your company's billing account.",
            "Configure the acquired company's billing account and your company's billing account to export the billing data into the same BigQuery dataset.",
            "Migrate the acquired company's projects into your company's GCP organization. Link the migrated projects to your company's billing account.",
            "Create a new GCP organization and a new billing account. Migrate the acquired company's projects and your company's projects into the new GCP organization and link the projects to the new billing account."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Link the acquired company's projects to your company's billing account.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q30",
        "questionText": "You want to configure 10 Compute Engine instances for availability when maintenance occurs. Your requirements state that these instances should attempt to automatically restart if they crash. Also, the instances should be highly available including during system maintenance. What should you do?",
        "options": [
            "Create an instance template for the instances. Set the 'Automatic Restart' to on. Set the 'On-host maintenance' to Migrate VM instance. Add the instance template to an instance group.",
            "Create an instance template for the instances. Set 'Automatic Restart' to off. Set 'On-host maintenance' to Terminate VM instances. Add the instance template to an instance group.",
            "Create an instance group for the instances. Set the 'Autohealing' health check to healthy (HTTP).",
            "Create an instance group for the instance. Verify that the 'Advanced creation options' setting for 'do not retry machine creation' is set to off."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Create an instance template for the instances. Set the 'Automatic Restart' to on. Set the 'On-host maintenance' to Migrate VM instance. Add the instance template to an instance group.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t4q31",
        "questionText": "You have a development project with appropriate IAM roles defined. You are creating a production project and want to have the same IAM roles on the new project, using the fewest possible steps. What should you do?",
        "options": [
            "Use gcloud iam roles copy and specify the production project as the destination project.",
            "Use gcloud iam roles copy and specify your organization as the destination organization.",
            "In the Google Cloud Platform Console, use the 'create role from role' functionality.",
            "In the Google Cloud Platform Console, use the 'create role' functionality and select all applicable permissions."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Use gcloud iam roles copy and specify the production project as the destination project.'. This follows Google's recommended practices for identity and access management.",
        "resourceLink": "https://cloud.google.com/iam/docs"
    },
    {
        "id": "t4q32",
        "questionText": "You are using multiple configurations for gcloud. You want to review the configured Kubernetes Engine cluster of an inactive configuration using the fewest possible steps. What should you do?",
        "options": [
            "Use gcloud config configurations describe to review the output.",
            "Use gcloud config configurations activate and gcloud config list to review the output.",
            "Use kubectl config get-contexts to review the output.",
            "Use kubectl config use-context and kubectl config view to review the output."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Use kubectl config use-context and kubectl config view to review the output.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/kubernetes-engine/docs"
    },
    {
        "id": "t4q33",
        "questionText": "You need to configure IAM access audit logging in BigQuery for external auditors. You want to follow Google-recommended practices. What should you do?",
        "options": [
            "Add the auditors group to the 'logging.viewer' and 'bigQuery.dataViewer' predefined IAM roles.",
            "Add the auditors group to two new custom IAM roles.",
            "Add the auditor user accounts to the 'logging.viewer' and 'bigQuery.dataViewer' predefined IAM roles.",
            "Add the auditor user accounts to two new custom IAM roles."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Add the auditors group to the 'logging.viewer' and 'bigQuery.dataViewer' predefined IAM roles.'. This follows Google's recommended practices for identity and access management.",
        "resourceLink": "https://cloud.google.com/iam/docs"
    },
    {
        "id": "t4q34",
        "questionText": "You need to create a custom VPC with a single subnet. The subnet's range must be as large as possible. Which range should you use?",
        "options": [
            "0.0.0.0/0.",
            "10.0.0.0/8.",
            "172.16.0.0/12.",
            "192.168.0.0/16."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is '10.0.0.0/8.'. This is the appropriate networking solution for the given requirements.",
        "resourceLink": "https://cloud.google.com/vpc/docs"
    },
    {
        "id": "t4q35",
        "questionText": "You recently deployed a new version of an application to App Engine and then discovered a bug in the release. You need to immediately revert to the prior version of the application. What should you do?",
        "options": [
            "Run gcloud app restore.",
            "On the App Engine page of the GCP Console, select the application that needs to be reverted and click Revert.",
            "On the App Engine Versions page of the GCP Console, route 100% of the traffic to the previous version.",
            "Deploy the original version as a separate application. Then go to App Engine settings and split traffic between applications so that the original version serves 100% of the requests."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'On the App Engine Versions page of the GCP Console, route 100% of the traffic to the previous version.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/appengine/docs"
    },
    {
        "id": "t4q36",
        "questionText": "You want to configure Autohealing for network load balancing for a group of Compute Engine instances that run in multiple zones, using the fewest possible steps. You need to configure re-creation of VMs if they are unresponsive after 3 attempts of 10 seconds each. What should you do?",
        "options": [
            "Create an HTTP load balancer with a backend configuration that references an existing instance group. Set the health check to healthy (HTTP).",
            "Create an HTTP load balancer with a backend configuration that references an existing instance group. Define a balancing mode and set the maximum RPS to 10.",
            "Create a Managed Instance Group. Set the Autohealing health check to healthy (HTTP).",
            "Create a Managed Instance Group. Verify that the autoscaling setting is on."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Create a Managed Instance Group. Set the Autohealing health check to healthy (HTTP).'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t4q37",
        "questionText": "You have a Linux VM that must connect to Cloud SQL. You created a service account with the appropriate access rights. You want to make sure that the VM uses this service account instead of the default Compute Engine service account. What should you do?",
        "options": [
            "When creating the VM via the web console, specify the service account under the 'Identity and API Access' section.",
            "Download a JSON Private Key for the service account. On the Project Metadata, add that JSON as the value for the key compute-engine-service-account.",
            "Download a JSON Private Key for the service account. On the Custom Metadata of the VM, add that JSON as the value for the key compute-engine-service-account.",
            "Download a JSON Private Key for the service account. After creating the VM, ssh into the VM and save the JSON under ~/.gcloud/compute-engine-service-account.json."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'When creating the VM via the web console, specify the service account under the 'Identity and API Access' section.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t4q38",
        "questionText": "You have one project called proj-sa where you manage all your service accounts. You want to be able to use a service account from this project to take snapshots of VMs running in another project called proj-vm. What should you do?",
        "options": [
            "Download the private key from the service account, and add it to each VMs custom metadata.",
            "Download the private key from the service account, and add the private key to each VM's SSH keys.",
            "Grant the service account the IAM role of Compute Storage Admin in the project called proj-vm.",
            "When creating the VMs, set the service account's API scope for Compute Engine to read/write."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Grant the service account the IAM role of Compute Storage Admin in the project called proj-vm.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q39",
        "questionText": "You have one GCP account running in your default region and zone and another account running in a non-default region and zone. You want to start a new Compute Engine instance in these two Google Cloud Platform accounts using the command line interface. What should you do?",
        "options": [
            "Create two configurations using gcloud config configurations create [NAME]. Run gcloud config configurations activate [NAME] to switch between accounts when running the commands to start the Compute Engine instances.",
            "Create two configurations using gcloud config configurations create [NAME]. Run gcloud configurations list to start the Compute Engine instances.",
            "Activate two configurations using gcloud configurations activate [NAME]. Run gcloud config list to start the Compute Engine instances.",
            "Activate two configurations using gcloud configurations activate [NAME]. Run gcloud configurations list to start the Compute Engine instances."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Create two configurations using gcloud config configurations create [NAME]. Run gcloud config configurations activate [NAME] to switch between accounts when running the commands to start the Compute Engine instances.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q40",
        "questionText": "Every employee of your company has a Google account. Your operational team needs to manage a large number of instances on Compute Engine. Each member of this team needs only administrative access to the servers. Your security team wants to ensure that the deployment of credentials is operationally efficient and must be able to determine who accessed a given instance. What should you do?",
        "options": [
            "Generate a new SSH key pair. Give the private key to each member of your team. Configure the public key in the metadata of each instance.",
            "Ask each member of the team to generate a new SSH key pair and to send you their public key. Use a configuration management tool to deploy those keys on each instance.",
            "Ask each member of the team to generate a new SSH key pair and to add the public key to their Google account. Grant the 'compute.osAdminLogin' role to the Google group corresponding to this team.",
            "Generate a new SSH key pair. Give the private key to each member of your team. Configure the public key as a project-wide public SSH key in your Cloud Platform project and allow project-wide public SSH keys on each instance."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Ask each member of the team to generate a new SSH key pair and to add the public key to their Google account. Grant the 'compute.osAdminLogin' role to the Google group corresponding to this team.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t4q41",
        "questionText": "You need to deploy an application, which is packaged in a container image, in a new project. The application exposes an HTTP endpoint and receives very few requests per day. You want to minimize costs. What should you do?",
        "options": [
            "Deploy the container on Cloud Run.",
            "Deploy the container on Cloud Run on GK.",
            "Deploy the container on App Engine Flexible.",
            "Deploy the container on Google Kubernetes Engine, with cluster autoscaling and horizontal pod autoscaling enabled."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Deploy the container on Cloud Run.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q42",
        "questionText": "Your development team needs a new Jenkins server for their project. You need to deploy the server using the fewest steps possible. What should you do?",
        "options": [
            "Download and deploy the Jenkins Java WAR to App Engine Standard.",
            "Create a new Compute Engine instance and install Jenkins through the command line interface.",
            "Create a Kubernetes cluster on Compute Engine and create a deployment with the Jenkins Docker image.",
            "Use GCP Marketplace to launch the Jenkins solution."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Use GCP Marketplace to launch the Jenkins solution.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q43",
        "questionText": "You are building an application that stores relational data from users. Users across the globe will use this application. Your CTO is concerned about the scaling requirements because the size of the user base is unknown. You need to implement a database solution that can scale with your user growth with minimum configuration changes. Which storage solution should you use?",
        "options": [
            "Cloud SQL.",
            "Cloud Spanner.",
            "Cloud Firestore.",
            "Cloud Datastore."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Cloud Spanner.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q44",
        "questionText": "You are using Deployment Manager to create a Google Kubernetes Engine cluster. Using the same Deployment Manager deployment, you also want to create a DaemonSet in the kube-system namespace of the cluster. You want a solution that uses the fewest possible services.",
        "options": [
            "Add the cluster's API as a new Type Provider in Deployment Manager, and use the new type to create the DaemonSet.",
            "Use the Deployment Manager Runtime Configurator to create a new Config resource that contains the DaemonSet definition.",
            "With Deployment Manager, create a Compute Engine instance with a startup script that uses kubectl to create the DaemonSet.",
            "In the cluster's definition in Deployment Manager, add a metadata that has kube-system as key and the DaemonSet manifest as value."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Add the cluster's API as a new Type Provider in Deployment Manager, and use the new type to create the DaemonSet.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/kubernetes-engine/docs"
    },
    {
        "id": "t4q45",
        "questionText": "You have a Virtual Machine that is currently configured with 2 vCPUs and 4 GB of memory. It is running out of memory. You want to upgrade the Virtual Machine to have 8 GB of memory. What should you do?",
        "options": [
            "Rely on live migration to move the workload to a machine with more memory.",
            "Use gcloud to add metadata to the V. Set the key to required-memory-size and the value to 8 GB.",
            "Stop the VM, change the machine type to n1-standard-8, and start the VM.",
            "Stop the VM, increase the memory to 8 GB, and start the VM."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Stop the VM, increase the memory to 8 GB, and start the VM.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q46",
        "questionText": "You created a Google Cloud Platform project with an App Engine application inside the project. You initially configured the application to be served from the us-central region. Now you want the application to be served from the asia-northeast1 region. What should you do?",
        "options": [
            "Change the default region property setting in the existing GCP project to asia-northeast1.",
            "Change the region property setting in the existing App Engine application from us-central to asia-northeast1.",
            "Create a second App Engine application in the existing GCP project and specify asia-northeast1 as the region to serve your application.",
            "Create a new GCP project and create an App Engine application inside this new project. Specify asia-northeast1 as the region to serve your application."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Create a new GCP project and create an App Engine application inside this new project. Specify asia-northeast1 as the region to serve your application.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q47",
        "questionText": "Several employees at your company have been creating projects with Cloud Platform and paying for it with their personal credit cards, which the company reimburses. The company wants to centralize all these projects under a single, new billing account. What should you do?",
        "options": [
            "Contact [email protected] with your bank account details and request a corporate billing account for your company.",
            "Create a ticket with Google Support and wait for their call to share your credit card details over the phone.",
            "In the Google Platform Console, go to the Resource Manage and move all projects to the root Organization.",
            "In the Google Cloud Platform Console, create a new billing account and set up a payment method."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'In the Google Cloud Platform Console, create a new billing account and set up a payment method.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t4q48",
        "questionText": "You have a Dockerfile that you need to deploy on Kubernetes Engine. What should you do?",
        "options": [
            "Use kubectl app deploy `<dockerfilename>`.",
            "Use gcloud app deploy `<dockerfilename>`.",
            "Create a docker image from the Dockerfile and upload it to Container Registry. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file.",
            "Create a docker image from the Dockerfile and upload it to Cloud Storage. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Create a docker image from the Dockerfile and upload it to Container Registry. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/kubernetes-engine/docs"
    },
    {
        "id": "t4q49",
        "questionText": "You have a project for your App Engine application that serves a development environment. The required testing has succeeded and you want to create a new project to serve as your production environment. What should you do?",
        "options": [
            "Use gcloud to create the new project, and then deploy your application to the new project.",
            "Use gcloud to create the new project and to copy the deployed application to the new project.",
            "Create a Deployment Manager configuration file that copies the current App Engine deployment into a new project.",
            "Deploy your application again using gcloud and specify the project parameter with the new project name to create the new project."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Use gcloud to create the new project, and then deploy your application to the new project.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/appengine/docs"
    },
    {
        "id": "t4q50",
        "questionText": "You are building an application that will run in your data center. The application will use Google Cloud Platform (GCP) services like AutoML. You created a service account that has appropriate access to AutoML. You need to enable authentication to the APIs from your on-premises environment. What should you do?",
        "options": [
            "Use service account credentials in your on-premises application.",
            "Use gcloud to create a key file for the service account that has appropriate permissions.",
            "Set up direct interconnect between your data center and Google Cloud Platform to enable authentication for your on-premises applications.",
            "Go to the IAM & admin console, grant a user account permissions similar to the service account permissions, and use this user account for authentication from your data center."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Use gcloud to create a key file for the service account that has appropriate permissions.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    }
];

const test5Questions = [
    
    {
        "id": "t5q1",
        "questionText": "You host a static website on Cloud Storage. Recently, you began to include links to PDF files on this site. Currently, when users click on the links to these PDF files, their browsers prompt them to save the file onto their local system. Instead, you want the clicked PDF files to be displayed within the browser window directly, without prompting the user to save the file locally. What should you do?",
        "options": [
            "Enable Cloud CDN on the website frontend.",
            "Enable 'Share publicly' on the PDF file objects.",
            "Set Content-Type metadata to application/pdf on the PDF file objects.",
            "Add a label to the storage bucket with a key of Content-Type and value of application/pdf."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Set Content-Type metadata to application/pdf on the PDF file objects.'. This is the recommended solution for Cloud Storage operations.",
        "resourceLink": "https://cloud.google.com/storage/docs"
    },
    {
        "id": "t5q2",
        "questionText": "You have an application that looks for its licensing server on the IP 10.0.3.21. You need to deploy the licensing server on Compute Engine. You do not want to change the configuration of the application and want the application to be able to reach the licensing server. What should you do?",
        "options": [
            "Reserve the IP 10.0.3.21 as a static internal IP address using gcloud and assign it to the licensing server.",
            "Reserve the IP 10.0.3.21 as a static public IP address using gcloud and assign it to the licensing server.",
            "Use the IP 10.0.3.21 as a custom ephemeral IP address and assign it to the licensing server.",
            "Start the licensing server with an automatic ephemeral IP address, and then promote it to a static internal IP address."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Reserve the IP 10.0.3.21 as a static internal IP address using gcloud and assign it to the licensing server.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t5q3",
        "questionText": "You are deploying an application to App Engine. You want the number of instances to scale based on request rate. You need at least 3 unoccupied instances at all times. Which scaling type should you use?",
        "options": [
            "Manual Scaling with 3 instances.",
            "Basic Scaling with min_instances set to 3.",
            "Basic Scaling with max_instances set to 3.",
            "Automatic Scaling with min_idle_instances set to 3."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Automatic Scaling with min_idle_instances set to 3.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/appengine/docs"
    },
    {
        "id": "t5q4",
        "questionText": "You are the project owner of a GCP project and want to delegate control to colleagues to manage buckets and files in Cloud Storage. You want to follow Google-recommended practices. Which IAM roles should you grant your colleagues?",
        "options": [
            "Project Editor.",
            "Storage Admin.",
            "Storage Object Admin.",
            "Storage Object Creator."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Storage Admin.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q5",
        "questionText": "You need to update a deployment in Deployment Manager without any resource downtime in the deployment. Which command should you use?",
        "options": [
            "gcloud deployment-manager deployments create \u2013config <deployment-config-path>.",
            "gcloud deployment-manager deployments update \u2013config <deployment-config-path>.",
            "gcloud deployment-manager resources create \u2013config <deployment-config-path>.",
            "gcloud deployment-manager resources update \u2013config <deployment-config-path>."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'gcloud deployment-manager deployments update \u2013config <deployment-config-path>.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q6",
        "questionText": "You are running an application on multiple Virtual Machines within a Managed Instance Group and have autoscaling enabled. The autoscaling policy is configured so that additional instances are added to the group if the CPU utilization of instances goes above 80%. VMs are added until the instance group reaches its maximum limit of five VMs or until CPU utilization of instances lowers to 80%. The initial delay for HTTP health checks against the instances is set to 30 seconds. The Virtual Machine instances take around three minutes to become available for users. You observe that when the instance group autoscales, it adds more instances then necessary to support the levels of end-user traffic. You want to properly maintain instance group sizes when autoscaling. What should you do?",
        "options": [
            "Set the maximum number of instances to 1.",
            "Decrease the maximum number of instances to 3.",
            "Use a TCP health check instead of an HTTP health check.",
            "Increase the initial delay of the HTTP health check to 200 seconds."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Increase the initial delay of the HTTP health check to 200 seconds.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q7",
        "questionText": "You have 32 GB of data in a single file that you need to upload to a Nearline Storage bucket. The WAN connection you are using is rated at 1 Gbps, and you are the only one on the connection. You want to use as much of the rated 1 Gbps as possible to transfer the file rapidly. How should you upload the file?",
        "options": [
            "Use the GCP Console to transfer the file instead of gsutil.",
            "Enable parallel composite uploads using gsutil on the file transfer.",
            "Decrease the TCP window size on the machine initiating the transfer.",
            "Change the storage class of the bucket from Nearline to Multi-Regional."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Enable parallel composite uploads using gsutil on the file transfer.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q8",
        "questionText": "You deployed an App Engine application using gcloud app deploy, but it did not deploy to the intended project. You want to find out why this happened and where the application deployed. What should you do?",
        "options": [
            "Check the app.yaml file for your application and check project settings.",
            "Check the web-application.xml file for your application and check project settings.",
            "Go to Deployment Manager and review settings for deployment of applications.",
            "Go to Cloud Shell and run gcloud config list to review the Google Cloud configuration used for deployment."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Go to Cloud Shell and run gcloud config list to review the Google Cloud configuration used for deployment.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/appengine/docs"
    },
    {
        "id": "t5q9",
        "questionText": "You want to verify the IAM users and roles assigned within a GCP project named my-project. What should you do?",
        "options": [
            "Run gcloud iam roles list. Review the output section.",
            "Run gcloud iam service-accounts list. Review the output section.",
            "Navigate to the project and then to the IAM section in the GCP Console. Review the members and roles.",
            "Navigate to the project and then to the Roles section in the GCP Console. Review the roles and status."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Navigate to the project and then to the IAM section in the GCP Console. Review the members and roles.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q10",
        "questionText": "You need to select and configure compute resources for a set of batch processing jobs. These jobs take around 2 hours to complete and are run nightly. You want to minimize service costs. What should you do?",
        "options": [
            "Select Google Kubernetes Engine. Use a single-node cluster with a small instance type.",
            "Select Google Kubernetes Engine. Use a three-node cluster with micro instance types.",
            "Select Compute Engine. Use preemptible VM instances of the appropriate standard machine type.",
            "Select Compute Engine. Use VM instance types that support micro bursting."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Select Compute Engine. Use preemptible VM instances of the appropriate standard machine type.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q11",
        "questionText": "You want to select and configure a cost-effective solution for relational data on Google Cloud Platform. You are working with a small set of operational data in one geographic location. You need to support point-in-time recovery. What should you do?",
        "options": [
            "Select Cloud SQL (MySQL). Verify that the enable binary logging option is selected.",
            "Select Cloud SQL (MySQL). Select the create failover replicas option.",
            "Select Cloud Spanner. Set up your instance with 2 nodes.",
            "Select Cloud Spanner. Set up your instance as multi-regional."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Select Cloud SQL (MySQL). Verify that the enable binary logging option is selected.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q12",
        "questionText": "You are hosting an application on bare-metal servers in your own data center. The application needs access to Cloud Storage. However, security policies prevent the servers hosting the application from having public IP addresses or access to the internet. You want to follow Google-recommended practices to provide the application with access to Cloud Storage. What should you do?",
        "options": [
            "1. Use nslookup to get the IP address for storage.googleapis.com. 2. Negotiate with the security team to be able to give a public IP address to the servers. 3. Only allow egress traffic from those servers to the IP addresses for storage.googleapis.com.",
            "1. Using Cloud VPN, create a VPN tunnel to a Virtual Private Cloud (VPC) in Google Cloud. 2. In this VPC, create a Compute Engine instance and install the Squid proxy server on this instance. 3. Configure your servers to use that instance as a proxy to access Cloud Storage.",
            "1. Use Migrate for Compute Engine (formerly known as Velostrata) to migrate those servers to Compute Engine. 2. Create an internal load balancer (ILB) that uses storage.googleapis.com as backend. 3. Configure your new instances to use this ILB as proxy.",
            "1. Using Cloud VPN or Interconnect, create a tunnel to a VPC in Google Cloud. 2. Use Cloud Router to create a custom route advertisement for 199.36.153.4/30. Announce that network to your on-premises network through the VPN tunnel. 3. In your on-premises network, configure your DNS server to resolve *.googleapis.com as a CNAME to restricted.googleapis.com."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is '1. Using Cloud VPN or Interconnect, create a tunnel to a VPC in Google Cloud. 2. Use Cloud Router to create a custom route advertisement for 199.36.153.4/30. Announce that network to your on-premises network through the VPN tunnel. 3. In your on-premises network, configure your DNS server to resolve *.googleapis.com as a CNAME to restricted.googleapis.com.'. This is the recommended solution for Cloud Storage operations.",
        "resourceLink": "https://cloud.google.com/storage/docs"
    },
    {
        "id": "t5q13",
        "questionText": "Your company has a Google Cloud Platform project that uses BigQuery for data warehousing. Your data science team changes frequently and has few members. You need to allow members of this team to perform queries. You want to follow Google-recommended practices. What should you do?",
        "options": [
            "1. Create an IAM entry for each data scientist's user account. 2. Assign the BigQuery jobUser role to the group.",
            "1. Create an IAM entry for each data scientist's user account. 2. Assign the BigQuery dataViewer user role to the group.",
            "1. Create a dedicated Google group in Cloud Identity. 2. Add each data scientist's user account to the group. 3. Assign the BigQuery jobUser role to the group.",
            "1. Create a dedicated Google group in Cloud Identity. 2. Add each data scientist's user account to the group. 3. Assign the BigQuery dataViewer user role to the group."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is '1. Create a dedicated Google group in Cloud Identity. 2. Add each data scientist's user account to the group. 3. Assign the BigQuery jobUser role to the group.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q14",
        "questionText": "You are given a project with a single Virtual Private Cloud (VPC) and a single subnetwork in the us-central1 region. There is a Compute Engine instance hosting an application in this subnetwork. You need to deploy a new instance in the same project in the europe-west1 region. This new instance needs access to the application. You want to follow Google-recommended practices. What should you do?",
        "options": [
            "1. Create a subnetwork in the same VPC, in europe-west1. 2. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint.",
            "1. Create a VPC and a subnetwork in europe-west1. 2. Expose the application with an internal load balancer. 3. Create the new instance in the new subnetwork and use the load balancer's address as the endpoint.",
            "1. Create a subnetwork in the same VPC, in europe-west1. 2. Use Cloud VPN to connect the two subnetworks. 3. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint.",
            "1. Create a VPC and a subnetwork in europe-west1. 2. Peer the 2 VPCs. 3. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is '1. Create a subnetwork in the same VPC, in europe-west1. 2. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t5q15",
        "questionText": "You are building a pipeline to process time-series data. Which Google Cloud Platform services should you put in boxes 1,2,3, and 4?",
        "options": [
            "Cloud Pub/Sub, Cloud Dataflow, Cloud Datastore, BigQuery.",
            "Firebase Messages, Cloud Pub/Sub, Cloud Spanner, BigQuery.",
            "Cloud Pub/Sub, Cloud Storage, BigQuery, Cloud Bigtable.",
            "Cloud Pub/Sub, Cloud Dataflow, Cloud Bigtable, BigQuery."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Cloud Pub/Sub, Cloud Dataflow, Cloud Bigtable, BigQuery.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q16",
        "questionText": "For analysis purposes, you need to send all the logs from all of your Compute Engine instances to a BigQuery dataset called platform-logs. You have already installed the Cloud Logging agent on all the instances. You want to minimize cost. What should you do?",
        "options": [
            "1. Give the BigQuery Data Editor role on the platform-logs dataset to the service accounts used by your instances. 2. Update your instances' metadata to add the following value: logs-destination: bq://platform-logs.",
            "1. In Cloud Logging, create a logs export with a Cloud Pub/Sub topic called logs as a sink. 2. Create a Cloud Function that is triggered by messages in the logs topic. 3. Configure that Cloud Function to drop logs that are not from Compute Engine and to insert Compute Engine logs in the platform-logs dataset.",
            "1. In Cloud Logging, create a filter to view only Compute Engine logs. 2. Click Create Export. 3. Choose BigQuery as Sink Service, and the platform-logs dataset as Sink Destination.",
            "1. Create a Cloud Function that has the BigQuery User role on the platform-logs dataset. 2. Configure this Cloud Function to create a BigQuery Job that executes this query: INSERT INTO dataset.platform-logs (timestamp, log) SELECT timestamp, log FROM compute.logs WHERE timestamp > DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY) 3. Use Cloud Scheduler to trigger this Cloud Function once a day."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is '1. In Cloud Logging, create a filter to view only Compute Engine logs. 2. Click Create Export. 3. Choose BigQuery as Sink Service, and the platform-logs dataset as Sink Destination.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t5q17",
        "questionText": "You want to deploy an application on Cloud Run that processes messages from a Cloud Pub/Sub topic. You want to follow Google-recommended practices. What should you do?",
        "options": [
            "1. Create a Cloud Function that uses a Cloud Pub/Sub trigger on that topic. 2. Call your application on Cloud Run from the Cloud Function for every message.",
            "1. Grant the Pub/Sub Subscriber role to the service account used by Cloud Run. 2. Create a Cloud Pub/Sub subscription for that topic. 3. Make your application pull messages from that subscription.",
            "1. Create a service account. 2. Give the Cloud Run Invoker role to that service account for your Cloud Run application. 3. Create a Cloud Pub/Sub subscription that uses that service account and uses your Cloud Run application as the push endpoint.",
            "1. Deploy your application on Cloud Run on GKE with the connectivity set to Internal. 2. Create a Cloud Pub/Sub subscription for that topic. 3. In the same Google Kubernetes Engine cluster as your application, deploy a container that takes the messages and sends them to your application."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is '1. Create a service account. 2. Give the Cloud Run Invoker role to that service account for your Cloud Run application. 3. Create a Cloud Pub/Sub subscription that uses that service account and uses your Cloud Run application as the push endpoint.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q18",
        "questionText": "Your projects incurred more costs than you expected last month. Your research reveals that a development GKE container emitted a huge number of logs, which resulted in higher costs. You want to disable the logs quickly using the minimum number of steps. What should you do?",
        "options": [
            "1. Go to the Logs ingestion window in Stackdriver Logging, and disable the log source for the GKE container resource.",
            "1. Go to the Logs ingestion window in Stackdriver Logging, and disable the log source for the GKE Cluster Operations resource.",
            "1. Go to the GKE console, and delete existing clusters. 2. Recreate a new cluster. 3. Clear the option to enable legacy Stackdriver Logging.",
            "1. Go to the GKE console, and delete existing clusters. 2. Recreate a new cluster. 3. Clear the option to enable legacy Stackdriver Monitoring."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is '1. Go to the Logs ingestion window in Stackdriver Logging, and disable the log source for the GKE container resource.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/kubernetes-engine/docs"
    },
    {
        "id": "t5q19",
        "questionText": "You've deployed a microservice called myapp1 to a Google Kubernetes Engine cluster using the YAML file specified below. You need to refactor this configuration so that the database password is not stored in plain text. You want to follow Google-recommended practices. What should you do?",
        "options": [
            "Store the database password inside the Docker image of the container, not in the YAML file.",
            "Store the database password inside a Secret object. Modify the YAML file to populate the DB_PASSWORD environment variable from the Secret.",
            "Store the database password inside a ConfigMap object. Modify the YAML file to populate the DB_PASSWORD environment variable from the ConfigMap.",
            "Store the database password in a file inside a Kubernetes persistent volume, and use a persistent volume claim to mount the volume to the container."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Store the database password inside a Secret object. Modify the YAML file to populate the DB_PASSWORD environment variable from the Secret.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/kubernetes-engine/docs"
    },
    {
        "id": "t5q20",
        "questionText": "You have an application running in Google Kubernetes Engine (GKE) with cluster autoscaling enabled. The application exposes a TCP endpoint. There are several replicas of this application. You have a Compute Engine instance in the same region, but in another Virtual Private Cloud (VPC), called gce-network, that has no overlapping IP ranges with the first VPC. This instance needs to connect to the application on GKE. You want to minimize effort. What should you do?",
        "options": [
            "1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Set the service's externalTrafficPolicy to Cluster. 3. Configure the Compute Engine instance to use the address of the load balancer that has been created.",
            "1. In GKE, create a Service of type NodePort that uses the application's Pods as backend. 2. Create a Compute Engine instance called proxy with 2 network interfaces, one in each VPC. 3. Use iptables on this instance to forward traffic from gce-network to the GKE nodes. 4. Configure the Compute Engine instance to use the address of proxy in gce-network as endpoint.",
            "1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Add an annotation to this service: cloud.google.com/load-balancer-type: Internal 3. Peer the two VPCs together. 4. Configure the Compute Engine instance to use the address of the load balancer that has been created.",
            "1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Add a Cloud Armor Security Policy to the load balancer that whitelists the internal IPs of the MIG's instances. 3. Configure the Compute Engine instance to use the address of the load balancer that has been created."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is '1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Add an annotation to this service: cloud.google.com/load-balancer-type: Internal 3. Peer the two VPCs together. 4. Configure the Compute Engine instance to use the address of the load balancer that has been created.'. This approach is correct because: 1) Non-overlapping IP ranges actually make VPC peering straightforward and simple to configure; 2) Using an Internal LoadBalancer service maintains security by not exposing the service to the internet; 3) VPC peering is the standard, secure approach for cross-VPC communication in GCP; 4) This solution follows security best practices while still being relatively simple to implement; 5) The 'minimize effort' requirement doesn't justify security compromises - VPC peering is actually simpler than managing external load balancer security.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t5q21",
        "questionText": "You are using Container Registry to centrally store your company's container images in a separate project. In another project, you want to create a Google Kubernetes Engine (GKE) cluster. You want to ensure that Kubernetes can download images from Container Registry. What should you do?",
        "options": [
            "In the project where the images are stored, grant the Storage Object Viewer IAM role to the service account used by the Kubernetes nodes.",
            "When you create the GKE cluster, choose the Allow full access to all Cloud APIs option under 'Access scopes'.",
            "Create a service account, and give it access to Cloud Storage. Create a P12 key for this service account and use it as an imagePullSecrets in Kubernetes.",
            "Configure the ACLs on each image in Cloud Storage to give read-only access to the default Compute Engine service account."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'In the project where the images are stored, grant the Storage Object Viewer IAM role to the service account used by the Kubernetes nodes.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/kubernetes-engine/docs"
    },
    {
        "id": "t5q22",
        "questionText": "You deployed a new application inside your Google Kubernetes Engine cluster using the YAML file specified below. You check the status of the deployed pods and notice that one of them is still in PENDING status. You want to find out why the pod is stuck in pending status. What should you do?",
        "options": [
            "Review details of the myapp-service Service object and check for error messages.",
            "Review details of the myapp-deployment Deployment object and check for error messages.",
            "Review details of myapp-deployment-58ddbbb995-lp86m Pod and check for warning messages.",
            "View logs of the container in myapp-deployment-58ddbbb995-lp86m pod and check for warning messages."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Review details of myapp-deployment-58ddbbb995-lp86m Pod and check for warning messages.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/kubernetes-engine/docs"
    },
    {
        "id": "t5q23",
        "questionText": "You are setting up a Windows VM on Compute Engine and want to make sure you can log in to the VM via RDP. What should you do?",
        "options": [
            "After the VM has been created, use your Google Account credentials to log in into the VM.",
            "After the VM has been created, use gcloud compute reset-windows-password to retrieve the login credentials for the VM.",
            "When creating the VM, add metadata to the instance using 'windows-password' as the key and a password as the value.",
            "After the VM has been created, download the JSON Private Key for the default Compute Engine service account. Use the credentials in the JSON file to log in to the VM."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'After the VM has been created, use gcloud compute reset-windows-password to retrieve the login credentials for the VM.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t5q24",
        "questionText": "You want to configure an SSH connection to a single Compute Engine instance for users in the dev1 group. This instance is the only resource in this particular Google Cloud Platform project that the dev1 users should be able to connect to. What should you do?",
        "options": [
            "Set metadata to enable-oslogin=true for the instance. Grant the dev1 group the compute.osLogin role. Direct them to use the Cloud Shell to ssh to that instance.",
            "Set metadata to enable-oslogin=true for the instance. Set the service account to no service account for that instance. Direct them to use the Cloud Shell to ssh to that instance.",
            "Enable block project wide keys for the instance. Generate an SSH key for each user in the dev1 group. Distribute the keys to dev1 users and direct them to use their third-party tools to connect.",
            "Enable block project wide keys for the instance. Generate an SSH key and associate the key with that instance. Distribute the key to dev1 users and direct them to use their third-party tools to connect."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Set metadata to enable-oslogin=true for the instance. Grant the dev1 group the compute.osLogin role. Direct them to use the Cloud Shell to ssh to that instance.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q25",
        "questionText": "You need to produce a list of the enabled Google Cloud Platform APIs for a GCP project using the gcloud command line in the Cloud Shell. The project name is my-project. What should you do?",
        "options": [
            "Run gcloud projects list to get the project ID, and then run gcloud services list --project <project ID>.",
            "Run gcloud init to set the current project to my-project, and then run gcloud services list --available.",
            "Run gcloud info to view the account value, and then run gcloud services list --account <Account>.",
            "Run gcloud projects describe <project ID> to verify the project value, and then run gcloud services list --available."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Run gcloud projects list to get the project ID, and then run gcloud services list --project <project ID>.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q26",
        "questionText": "You are building a new version of an application hosted in an App Engine environment. You want to test the new version with 1% of users before you completely switch your application over to the new version. What should you do?",
        "options": [
            "Deploy a new version of your application in Google Kubernetes Engine instead of App Engine and then use GCP Console to split traffic.",
            "Deploy a new version of your application in a Compute Engine instance instead of App Engine and then use GCP Console to split traffic.",
            "Deploy a new version as a separate app in App Engine. Then configure App Engine using GCP Console to split traffic between the two apps.",
            "Deploy a new version of your application in App Engine. Then go to App Engine settings in GCP Console and split traffic between the current version and newly deployed versions accordingly."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Deploy a new version of your application in App Engine. Then go to App Engine settings in GCP Console and split traffic between the current version and newly deployed versions accordingly.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/appengine/docs"
    },
    {
        "id": "t5q27",
        "questionText": "You need to provide a cost estimate for a Kubernetes cluster using the GCP pricing calculator for Kubernetes. Your workload requires high IOPs, and you will also be using disk snapshots. You start by entering the number of nodes, average hours, and average days. What should you do next?",
        "options": [
            "Fill in local SSD. Fill in persistent disk storage and snapshot storage.",
            "Fill in local SSD. Add estimated cost for cluster management.",
            "Select Add GPUs. Fill in persistent disk storage and snapshot storage.",
            "Select Add GPUs. Add estimated cost for cluster management."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Fill in local SSD. Fill in persistent disk storage and snapshot storage.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q28",
        "questionText": "You are using Google Kubernetes Engine with autoscaling enabled to host a new application. You want to expose this new application to the public, using HTTPS on a public IP address. What should you do?",
        "options": [
            "Create a Kubernetes Service of type NodePort for your application, and a Kubernetes Ingress to expose this Service via a Cloud Load Balancer.",
            "Create a Kubernetes Service of type ClusterIP for your application. Configure the public DNS name of your application using the IP of this Service.",
            "Create a Kubernetes Service of type NodePort to expose the application on port 443 of each node of the Kubernetes cluster. Configure the public DNS name of your application with the IP of every node of the cluster to achieve load-balancing.",
            "Create a HAProxy pod in the cluster to load-balance the traffic to all the pods of the application. Forward the public traffic to HAProxy with an iptable rule. Configure the DNS name of your application using the public IP of the node HAProxy is running on."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Create a Kubernetes Service of type NodePort for your application, and a Kubernetes Ingress to expose this Service via a Cloud Load Balancer.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/kubernetes-engine/docs"
    },
    {
        "id": "t5q29",
        "questionText": "You need to enable traffic between multiple groups of Compute Engine instances that are currently running two different GCP projects. Each group of Compute Engine instances is running in its own VPC. What should you do?",
        "options": [
            "Verify that both projects are in a GCP Organization. Create a new VPC and add all instances.",
            "Verify that both projects are in a GCP Organization. Share the VPC from one project and request that the Compute Engine instances in the other project use this shared VPC.",
            "Verify that you are the Project Administrator of both projects. Create two new VPCs and add all instances.",
            "Verify that you are the Project Administrator of both projects. Create a new VPC and add all instances."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Verify that both projects are in a GCP Organization. Share the VPC from one project and request that the Compute Engine instances in the other project use this shared VPC.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q30",
        "questionText": "You want to add a new auditor to a Google Cloud Platform project. The auditor should be allowed to read, but not modify, all project items. How should you configure the auditor's permissions?",
        "options": [
            "Create a custom role with view-only project permissions. Add the user's account to the custom role.",
            "Create a custom role with view-only service permissions. Add the user's account to the custom role.",
            "Select the built-in IAM project Viewer role. Add the user's account to this role.",
            "Select the built-in IAM service Viewer role. Add the user's account to this role."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Select the built-in IAM project Viewer role. Add the user's account to this role.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q31",
        "questionText": "You are operating a Google Kubernetes Engine (GKE) cluster for your company where different teams can run non-production workloads. Your Machine Learning (ML) team needs access to Nvidia Tesla P100 GPUs to train their models. You want to minimize effort and cost. What should you do?",
        "options": [
            "Ask your ML team to add the accelerator: gpu annotation to their pod specification.",
            "Recreate all the nodes of the GKE cluster to enable GPUs on all of them.",
            "Create your own Kubernetes cluster on top of Compute Engine with nodes that have GPUs. Dedicate this cluster to your ML team.",
            "Add a new, GPU-enabled, node pool to the GKE cluster. Ask your ML team to add the cloud.google.com/gke -accelerator: nvidia-tesla-p100 nodeSelector to their pod specification."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Add a new, GPU-enabled, node pool to the GKE cluster. Ask your ML team to add the cloud.google.com/gke -accelerator: nvidia-tesla-p100 nodeSelector to their pod specification.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/kubernetes-engine/docs"
    },
    {
        "id": "t5q32",
        "questionText": "Your VMs are running in a subnet that has a subnet mask of 255.255.255.240. The current subnet has no more free IP addresses and you require an additional 10 IP addresses for new VMs. The existing and new VMs should all be able to reach each other without additional routes. What should you do?",
        "options": [
            "Use gcloud to expand the IP range of the current subnet.",
            "Delete the subnet, and recreate it using a wider range of IP addresses.",
            "Create a new project. Use Shared VPC to share the current network with the new project.",
            "Create a new subnet with the same starting IP but a wider range to overwrite the current subnet."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Use gcloud to expand the IP range of the current subnet.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q33",
        "questionText": "Your organization uses G Suite for communication and collaboration. All users in your organization have a G Suite account. You want to grant some G Suite users access to your Cloud Platform project. What should you do?",
        "options": [
            "Enable Cloud Identity in the GCP Console for your domain.",
            "Grant them the required IAM roles using their G Suite email address.",
            "Create a CSV sheet with all users' email addresses. Use the gcloud command line tool to convert them into Google Cloud Platform accounts.",
            "In the G Suite console, add the users to a special group called cloud-console-users@yourdomain.com. Rely on the default behavior of the Cloud Platform to grant users access if they are members of this group."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Grant them the required IAM roles using their G Suite email address.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q34",
        "questionText": "You have a Google Cloud Platform account with access to both production and development projects. You need to create an automated process to list all compute instances in development and production projects on a daily basis. What should you do?",
        "options": [
            "Create two configurations using gcloud config. Write a script that sets configurations as active, individually. For each configuration, use gcloud compute instances list to get a list of compute resources.",
            "Create two configurations using gsutil config. Write a script that sets configurations as active, individually. For each configuration, use gsutil compute instances list to get a list of compute resources.",
            "Go to Cloud Shell and export this information to Cloud Storage on a daily basis.",
            "Go to GCP Console and export this information to Cloud SQL on a daily basis."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Create two configurations using gcloud config. Write a script that sets configurations as active, individually. For each configuration, use gcloud compute instances list to get a list of compute resources.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q35",
        "questionText": "You have a large 5-TB AVRO file stored in a Cloud Storage bucket. Your analysts are proficient only in SQL and need access to the data stored in this file. You want to find a cost-effective way to complete their request as soon as possible. What should you do?",
        "options": [
            "Load data in Cloud Datastore and run a SQL query against it.",
            "Create a BigQuery table and load data in BigQuery. Run a SQL query on this table and drop this table after you complete your request.",
            "Create external tables in BigQuery that point to Cloud Storage buckets and run a SQL query on these external tables to complete your request.",
            "Create a Hadoop cluster and copy the AVRO file to NDFS by compressing it. Load the file in a hive table and provide access to your analysts so that they can run SQL queries."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Create external tables in BigQuery that point to Cloud Storage buckets and run a SQL query on these external tables to complete your request.'. This is the recommended solution for Cloud Storage operations.",
        "resourceLink": "https://cloud.google.com/storage/docs"
    },
    {
        "id": "t5q36",
        "questionText": "You need to verify that a Google Cloud Platform service account was created at a particular time. What should you do?",
        "options": [
            "Filter the Activity log to view the Configuration category. Filter the Resource type to Service Account.",
            "Filter the Activity log to view the Configuration category. Filter the Resource type to Google Project.",
            "Filter the Activity log to view the Data Access category. Filter the Resource type to Service Account.",
            "Filter the Activity log to view the Data Access category. Filter the Resource type to Google Project."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Filter the Activity log to view the Configuration category. Filter the Resource type to Service Account.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q37",
        "questionText": "You deployed an LDAP server on Compute Engine that is reachable via TLS through port 636 using UDP. You want to make sure it is reachable by clients over that port. What should you do?",
        "options": [
            "Add the network tag allow-udp-636 to the VM instance running the LDAP server.",
            "Create a route called allow-udp-636 and set the next hop to be the VM instance running the LDAP server.",
            "Add a network tag of your choice to the instance. Create a firewall rule to allow ingress on UDP port 636 for that network tag.",
            "Add a network tag of your choice to the instance running the LDAP server. Create a firewall rule to allow egress on UDP port 636 for that network tag."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Add a network tag of your choice to the instance. Create a firewall rule to allow ingress on UDP port 636 for that network tag.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t5q38",
        "questionText": "You need to set a budget alert for use of Compute Engine services on one of the three Google Cloud Platform projects that you manage. All three projects are linked to a single billing account. What should you do?",
        "options": [
            "Verify that you are the project billing administrator. Select the associated billing account and create a budget and alert for the appropriate project.",
            "Verify that you are the project billing administrator. Select the associated billing account and create a budget and a custom alert.",
            "Verify that you are the project administrator. Select the associated billing account and create a budget for the appropriate project.",
            "Verify that you are project administrator. Select the associated billing account and create a budget and a custom alert."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Verify that you are the project billing administrator. Select the associated billing account and create a budget and alert for the appropriate project.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q39",
        "questionText": "You are migrating a production-critical on-premises application that requires 96 vCPUs to perform its task. You want to make sure the application runs in a similar environment on GCP. What should you do?",
        "options": [
            "When creating the VM, use machine type n1-standard-96.",
            "When creating the VM, use Intel Skylake as the CPU platform.",
            "Create the VM using Compute Engine default settings. Use gcloud to modify the running instance to have 96 vCPUs.",
            "Start the VM using Compute Engine default settings, and adjust as you go based on Rightsizing Recommendations."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'When creating the VM, use machine type n1-standard-96.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q40",
        "questionText": "You want to configure a solution for archiving data in a Cloud Storage bucket. The solution must be cost-effective. Data with multiple versions should be archived after 30 days. Previous versions are accessed once a month for reporting. This archive data is also occasionally updated at month-end. What should you do?",
        "options": [
            "Add a bucket lifecycle rule that archives data with newer versions after 30 days to Coldline Storage.",
            "Add a bucket lifecycle rule that archives data with newer versions after 30 days to Nearline Storage.",
            "Add a bucket lifecycle rule that archives data from regional storage after 30 days to Coldline Storage.",
            "Add a bucket lifecycle rule that archives data from regional storage after 30 days to Nearline Storage."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Add a bucket lifecycle rule that archives data with newer versions after 30 days to Nearline Storage.'. This is the recommended solution for Cloud Storage operations.",
        "resourceLink": "https://cloud.google.com/storage/docs"
    },
    {
        "id": "t5q41",
        "questionText": "Your company's infrastructure is on-premises, but all machines are running at maximum capacity. You want to burst to Google Cloud. The workloads on Google Cloud must be able to directly communicate to the workloads on-premises using a private IP range. What should you do?",
        "options": [
            "In Google Cloud, configure the VPC as a host for Shared VP.",
            "In Google Cloud, configure the VPC for VPC Network Peering.",
            "Create bastion hosts both in your on-premises environment and on Google Cloud. Configure both as proxy servers using their public IP addresses.",
            "Set up Cloud VPN between the infrastructure on-premises and Google Cloud."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Set up Cloud VPN between the infrastructure on-premises and Google Cloud.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q42",
        "questionText": "You want to select and configure a solution for storing and archiving data on Google Cloud Platform. You need to support compliance objectives for data from one geographic location. This data is archived after 30 days and needs to be accessed annually. What should you do?",
        "options": [
            "Select Multi-Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Coldline Storage.",
            "Select Multi-Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Nearline Storage.",
            "Select Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Nearline Storage.",
            "Select Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Coldline Storage."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Select Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Coldline Storage.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q43",
        "questionText": "Your company uses BigQuery for data warehousing. Over time, many different business units in your company have created 1000+ datasets across hundreds of projects. Your CIO wants you to examine all datasets to find tables that contain an employee_ssn column. You want to minimize effort in performing this task. What should you do?",
        "options": [
            "Go to Data Catalog and search for employee_ssn in the search box.",
            "Write a shell script that uses the bq command line tool to loop through all the projects in your organization.",
            "Write a script that loops through all the projects in your organization and runs a query on INFORMATION_SCHEMA.COLUMNS view to find the employee_ssn column.",
            "Write a Cloud Dataflow job that loops through all the projects in your organization and runs a query on INFORMATION_SCHEMA.COLUMNS view to find employee_ssn column."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Go to Data Catalog and search for employee_ssn in the search box.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/bigquery/docs"
    },
    {
        "id": "t5q44",
        "questionText": "You create a Deployment with 2 replicas in a Google Kubernetes Engine cluster that has a single preemptible node pool. After a few minutes, you use kubectl to examine the status of your Pod and observe that one of them is still in Pending status. What is the most likely cause?",
        "options": [
            "The pending Pod's resource requests are too large to fit on a single node of the cluster.",
            "Too many Pods are already running in the cluster, and there are not enough resources left to schedule the pending Pod.",
            "The node pool is configured with a service account that does not have permission to pull the container image used by the pending Pod.",
            "The pending Pod was originally scheduled on a node that has been preempted between the creation of the Deployment and your verification of the Pods' status. It is currently being rescheduled on a new node."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'The pending Pod was originally scheduled on a node that has been preempted between the creation of the Deployment and your verification of the Pods' status. It is currently being rescheduled on a new node.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/kubernetes-engine/docs"
    },
    {
        "id": "t5q45",
        "questionText": "You want to find out when users were added to Cloud Spanner Identity Access Management (IAM) roles on your Google Cloud Platform (GCP) project. What should you do in the GCP Console?",
        "options": [
            "Open the Cloud Spanner console to review configurations.",
            "Open the IAM &amp; admin console to review IAM policies for Cloud Spanner roles.",
            "Go to the Stackdriver Monitoring console and review information for Cloud Spanner.",
            "Go to the Stackdriver Logging console, review admin activity logs, and filter them for Cloud Spanner IAM roles."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Go to the Stackdriver Logging console, review admin activity logs, and filter them for Cloud Spanner IAM roles.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q46",
        "questionText": "Your company implemented BigQuery as an enterprise data warehouse. Users from multiple business units run queries on this data warehouse. However, you notice that query costs for BigQuery are very high, and you need to control costs. Which two methods should you use? (Choose two.)",
        "options": [
            "Split the users from business units to multiple projects.",
            "Apply a user- or project-level custom query quota for BigQuery data warehouse.",
            "Create separate copies of your BigQuery data warehouse for each business unit.",
            "Split your BigQuery data warehouse into multiple data warehouses for each business unit.",
            "Change your BigQuery query model from on-demand to flat rate. Apply the appropriate number of slots to each Project."
        ],
        "correctAnswer": [
            1,
            4
        ],
        "explanation": "The correct answer is 'Apply a user- or project-level custom query quota for BigQuery data warehouse.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/bigquery/docs"
    },
    {
        "id": "t5q47",
        "questionText": "You are building a product on top of Google Kubernetes Engine (GKE). You have a single GKE cluster. For each of your customers, a Pod is running in that cluster, and your customers can run arbitrary code inside their Pod. You want to maximize the isolation between your customers' Pods. What should you do?",
        "options": [
            "Use Binary Authorization and whitelist only the container images used by your customers' Pods.",
            "Use the Container Analysis API to detect vulnerabilities in the containers used by your customers' Pods.",
            "Create a GKE node pool with a sandbox type configured to gvisor. Add the parameter runtimeClassName: gvisor to the specification of your customers' Pods.",
            "Use the cos_containerd image for your GKE nodes. Add a nodeSelector with the value cloud.google.com/gke-os-distribution: cos_containerd to the specification of your customers' Pods."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Create a GKE node pool with a sandbox type configured to gvisor. Add the parameter runtimeClassName: gvisor to the specification of your customers' Pods.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/kubernetes-engine/docs"
    },
    {
        "id": "t5q48",
        "questionText": "Your customer has implemented a solution that uses Cloud Spanner and notices some read latency-related performance issues on one table. This table is accessed only by their users using a primary key. The table schema is shown below. You want to resolve the issue. What should you do?",
        "options": [
            "Remove the profile_picture field from the table.",
            "Add a secondary index on the person_id column.",
            "Change the primary key to not have monotonically increasing values.",
            "Create a secondary index using the following Data Definition Language (DDL):"
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Change the primary key to not have monotonically increasing values.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q49",
        "questionText": "Your finance team wants to view the billing report for your projects. You want to make sure that the finance team does not get additional permissions to the project. What should you do?",
        "options": [
            "Add the group for the finance team to roles/billing user role.",
            "Add the group for the finance team to roles/billing admin role.",
            "Add the group for the finance team to roles/billing viewer role.",
            "Add the group for the finance team to roles/billing project/Manager role."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Add the group for the finance team to roles/billing viewer role.'. This follows Google's recommended practices for identity and access management.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t5q50",
        "questionText": "Your organization has strict requirements to control access to Google Cloud projects. You need to enable your Site Reliability Engineers (SREs) to approve requests from the Google Cloud support team when an SRE opens a support case. You want to follow Google-recommended practices. What should you do?",
        "options": [
            "Add your SREs to roles/iam.roleAdmin role.",
            "Add your SREs to roles/accessapproval.approver role.",
            "Add your SREs to a group and then add this group to roles/iam.roleAdmin.role.",
            "Add your SREs to a group and then add this group to roles/accessapproval.approver role."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Add your SREs to a group and then add this group to roles/accessapproval.approver role.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    }
];

const test6Questions = [
    {
        "id": "t6q1",
        "questionText": "You need to host an application on a Compute Engine instance in a project shared with other teams. You want to prevent the other teams from accidentally causing downtime on that application. Which feature should you use?",
        "options": [
            "Use a Shielded VM.",
            "Use a Preemptible VM.",
            "Use a sole-tenant node.",
            "Enable deletion protection on the instance."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Enable deletion protection on the instance.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t6q2",
        "questionText": "Your organization needs to grant users access to query datasets in BigQuery but prevent them from accidentally deleting the datasets. You want a solution that follows Google-recommended practices. What should you do?",
        "options": [
            "Add users to roles/bigquery user role only, instead of roles/bigquery dataOwner.",
            "Add users to roles/bigquery dataEditor role only, instead of roles/bigquery dataOwner.",
            "Create a custom role by removing delete permissions, and add users to that role only.",
            "Create a custom role by removing delete permissions. Add users to the group, and then add the group to the custom role."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Create a custom role by removing delete permissions. Add users to the group, and then add the group to the custom role.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/bigquery/docs"
    },
    {
        "id": "t6q3",
        "questionText": "You have a developer laptop with the Cloud SDK installed on Ubuntu. The Cloud SDK was installed from the Google Cloud Ubuntu package repository. You want to test your application locally on your laptop with Cloud Datastore. What should you do?",
        "options": [
            "Export Cloud Datastore data using gcloud datastore export.",
            "Create a Cloud Datastore index using gcloud datastore indexes create.",
            "Install the google-cloud-sdk-datastore-emulator component using the apt get install command.",
            "Install the cloud-datastore-emulator component using the gcloud components install command."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Install the google-cloud-sdk-datastore-emulator component using the apt get install command.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q4",
        "questionText": "Your company set up a complex organizational structure on Google Cloud. The structure includes hundreds of folders and projects. Only a few team members should be able to view the hierarchical structure. You need to assign minimum permissions to these team members, and you want to follow Google-recommended practices. What should you do?",
        "options": [
            "Add the users to roles/browser role.",
            "Add the users to roles/iam.roleViewer role.",
            "Add the users to a group, and add this group to roles/browser.",
            "Add the users to a group, and add this group to roles/iam.roleViewer role."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Add the users to a group, and add this group to roles/browser.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q5",
        "questionText": "Your company has a single sign-on (SSO) identity provider that supports Security Assertion Markup Language (SAML) integration with service providers. Your company has users in Cloud Identity. You would like users to authenticate using your company's SSO provider. What should you do?",
        "options": [
            "In Cloud Identity, set up SSO with Google as an identity provider to access custom SAML apps.",
            "In Cloud Identity, set up SSO with a third-party identity provider with Google as a service provider.",
            "Obtain OAuth 2.0 credentials, configure the user consent screen, and set up OAuth 2.0 for Mobile &amp; Desktop Apps.",
            "Obtain OAuth 2.0 credentials, configure the user consent screen, and set up OAuth 2.0 for Web Server Applications."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'In Cloud Identity, set up SSO with a third-party identity provider with Google as a service provider.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q6",
        "questionText": "Your organization has a dedicated person who creates and manages all service accounts for Google Cloud projects. You need to assign this person the minimum role for projects. What should you do?",
        "options": [
            "Add the user to roles/iam.roleAdmin role.",
            "Add the user to roles/iam.securityAdmin role.",
            "Add the user to roles/iam.serviceAccountUser role.",
            "Add the user to roles/iam.serviceAccountAdmin role."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Add the user to roles/iam.serviceAccountAdmin role.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q7",
        "questionText": "You are building an archival solution for your data warehouse and have selected Cloud Storage to archive your data. Your users need to be able to access this archived data once a quarter for some regulatory requirements. You want to select a cost-efficient option. Which storage option should you use?",
        "options": [
            "Cold Storage.",
            "Nearline Storage.",
            "Regional Storage.",
            "Multi-Regional Storage."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Nearline Storage.'. This is the recommended solution for Cloud Storage operations.",
        "resourceLink": "https://cloud.google.com/storage/docs"
    },
    {
        "id": "t6q8",
        "questionText": "A team of data scientists infrequently needs to use a Google Kubernetes Engine (GKE) cluster that you manage. They require GPUs for some long-running, nonrestartable jobs. You want to minimize cost. What should you do?",
        "options": [
            "Enable node auto-provisioning on the GKE cluster.",
            "Create a VerticalPodAutscaler for those workloads.",
            "Create a node pool with preemptible VMs and GPUs attached to those VMs.",
            "Create a node pool of instances with GPUs, and enable autoscaling on this node pool with a minimum size of 1."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Create a node pool of instances with GPUs, and enable autoscaling on this node pool with a minimum size of 1.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/kubernetes-engine/docs"
    },
    {
        "id": "t6q9",
        "questionText": "Your organization has user identities in Active Directory. Your organization wants to use Active Directory as their source of truth for identities. Your organization wants to have full control over the Google accounts used by employees for all Google services, including your Google Cloud Platform (GCP) organization. What should you do?",
        "options": [
            "Use Google Cloud Directory Sync (GCDS) to synchronize users into Cloud Identity.",
            "Use the cloud Identity APIs and write a script to synchronize users to Cloud Identity.",
            "Export users from Active Directory as a CSV and import them to Cloud Identity via the Admin Console.",
            "Ask each employee to create a Google account using self signup. Require that each employee use their company email address and password."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Use Google Cloud Directory Sync (GCDS) to synchronize users into Cloud Identity.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q10",
        "questionText": "You have successfully created a development environment in a project for an application. This application uses Compute Engine and Cloud SQL. Now you need to create a production environment for this application. The security team has forbidden the existence of network routes between these 2 environments and has asked you to follow Google-recommended practices. What should you do?",
        "options": [
            "Create a new project, enable the Compute Engine and Cloud SQL APIs in that project, and replicate the setup you have created in the development environment.",
            "Create a new production subnet in the existing VPC and a new production Cloud SQL instance in your existing project, and deploy your application using those resources.",
            "Create a new project, modify your existing VPC to be a Shared VPC, share that VPC with your new project, and replicate the setup you have in the development environment in that new project in the Shared VP.",
            "Ask the security team to grant you the Project Editor role in an existing production project used by another division of your company. Once they grant you that role, replicate the setup you have in the development environment in that project."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Create a new project, enable the Compute Engine and Cloud SQL APIs in that project, and replicate the setup you have created in the development environment.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t6q11",
        "questionText": "Your management has asked an external auditor to review all the resources in a specific project. The security team has enabled the Organization Policy called Domain Restricted Sharing on the organization node by specifying only your Cloud Identity domain. You want the auditor to only be able to view, but not modify, the resources in that project. What should you do?",
        "options": [
            "Ask the auditor for their Google account, and give them the Viewer role on the project.",
            "Ask the auditor for their Google account, and give them the Security Reviewer role on the project.",
            "Create a temporary account for the auditor in Cloud Identity, and give that account the Viewer role on the project.",
            "Create a temporary account for the auditor in Cloud Identity, and give that account the Security Reviewer role on the project."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Create a temporary account for the auditor in Cloud Identity, and give that account the Viewer role on the project.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q12",
        "questionText": "You have a workload running on Compute Engine that is critical to your business. You want to ensure that the data on the boot disk of this workload is backed up regularly. You need to be able to restore a backup as quickly as possible in case of disaster. You also want older backups to be cleaned automatically to save on cost. You want to follow Google-recommended practices. What should you do?",
        "options": [
            "Create a Cloud Function to create an instance template.",
            "Create a snapshot schedule for the disk using the desired interval.",
            "Create a cron job to create a new disk from the disk using gcloud.",
            "Create a Cloud Task to create an image and export it to Cloud Storage."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Create a snapshot schedule for the disk using the desired interval.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t6q13",
        "questionText": "You need to assign a Cloud Identity and Access Management (Cloud IAM) role to an external auditor. The auditor needs to have permissions to review your Google Cloud Platform (GCP) Audit Logs and also to review your Data Access logs. What should you do?",
        "options": [
            "Assign the auditor the IAM role roles/logging.privateLogViewer. Perform the export of logs to Cloud Storage.",
            "Assign the auditor the IAM role roles/logging.privateLogViewer. Direct the auditor to also review the logs for changes to Cloud IAM policy.",
            "Assign the auditor's IAM user to a custom role that has logging.privateLogEntries.list permission. Perform the export of logs to Cloud Storage.",
            "Assign the auditor's IAM user to a custom role that has logging.privateLogEntries.list permission. Direct the auditor to also review the logs for changes to Cloud IAM policy."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Assign the auditor the IAM role roles/logging.privateLogViewer. Direct the auditor to also review the logs for changes to Cloud IAM policy.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q14",
        "questionText": "You are managing several Google Cloud Platform (GCP) projects and need access to all logs for the past 60 days. You want to be able to explore and quickly analyze the log contents. You want to follow Google-recommended practices to obtain the combined logs for all projects. What should you do?",
        "options": [
            "Navigate to Stackdriver Logging and select resource.labels.project_id=\"*\".",
            "Create a Stackdriver Logging Export with a Sink destination to a BigQuery dataset. Configure the table expiration to 60 days.",
            "Create a Stackdriver Logging Export with a Sink destination to Cloud Storage. Create a lifecycle rule to delete objects after 60 days.",
            "Configure a Cloud Scheduler job to read from Stackdriver and store the logs in BigQuery. Configure the table expiration to 60 days."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Create a Stackdriver Logging Export with a Sink destination to a BigQuery dataset. Configure the table expiration to 60 days.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q15",
        "questionText": "You need to reduce GCP service costs for a division of your company using the fewest possible steps. You need to turn off all configured services in an existing GCP project. What should you do?",
        "options": [
            "1. Verify that you are assigned the Project Owners IAM role for this project. 2. Locate the project in the GCP console, click Shut down and then enter the project I.",
            "1. Verify that you are assigned the Project Owners IAM role for this project. 2. Switch to the project in the GCP console, locate the resources and delete them.",
            "1. Verify that you are assigned the Organizational Administrator IAM role for this project. 2. Locate the project in the GCP console, enter the project ID and then click Shut down.",
            "1. Verify that you are assigned the Organizational Administrators IAM role for this project. 2. Switch to the project in the GCP console, locate the resources and delete them."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is '1. Verify that you are assigned the Project Owners IAM role for this project. 2. Locate the project in the GCP console, click Shut down and then enter the project I.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q16",
        "questionText": "You are configuring service accounts for an application that spans multiple projects. Virtual Machines (VMs) running in the web-applications project need access to BigQuery datasets in crm-databases-proj. You want to follow Google-recommended practices to give access to the service account in the web-applications project. What should you do?",
        "options": [
            "Give project owner for web-applications appropriate roles to crm-databases-proj.",
            "Give project owner role to crm-databases-proj and the web-applications project.",
            "Give project owner role to crm-databases-proj and bigquery.dataViewer role to web-applications.",
            "Give bigquery.dataViewer role to crm-databases-proj and appropriate roles to web-applications."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Give bigquery.dataViewer role to crm-databases-proj and appropriate roles to web-applications.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/bigquery/docs"
    },
    {
        "id": "t6q17",
        "questionText": "An employee was terminated, but their access to Google Cloud Platform (GCP) was not removed until 2 weeks later. You need to find out this employee accessed any sensitive customer information after their termination. What should you do?",
        "options": [
            "View System Event Logs in Stackdriver. Search for the user's email as the principal.",
            "View System Event Logs in Stackdriver. Search for the service account associated with the user.",
            "View Data Access audit logs in Stackdriver. Search for the user's email as the principal.",
            "View the Admin Activity log in Stackdriver. Search for the service account associated with the user."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'View Data Access audit logs in Stackdriver. Search for the user's email as the principal.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q18",
        "questionText": "You need to create a custom IAM role for use with a GCP service. All permissions in the role must be suitable for production use. You also want to clearly share with your organization the status of the custom role. This will be the first version of the custom role. What should you do?",
        "options": [
            "Use permissions in your role that use the 'supported' support level for role permissions. Set the role stage to ALPHA while testing the role permissions.",
            "Use permissions in your role that use the 'supported' support level for role permissions. Set the role stage to BETA while testing the role permissions.",
            "Use permissions in your role that use the 'testing' support level for role permissions. Set the role stage to ALPHA while testing the role permissions.",
            "Use permissions in your role that use the 'testing' support level for role permissions. Set the role stage to BETA while testing the role permissions."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Use permissions in your role that use the 'supported' support level for role permissions. Set the role stage to ALPHA while testing the role permissions.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q19",
        "questionText": "Your company has a large quantity of unstructured data in different file formats. You want to perform ETL transformations on the data. You need to make the data accessible on Google Cloud so it can be processed by a Dataflow job. What should you do?",
        "options": [
            "Upload the data to BigQuery using the bq command line tool.",
            "Upload the data to Cloud Storage using the gsutil command line tool.",
            "Upload the data into Cloud SQL using the import function in the console.",
            "Upload the data into Cloud Spanner using the import function in the console."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Upload the data to Cloud Storage using the gsutil command line tool.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q20",
        "questionText": "You need to manage multiple Google Cloud projects in the fewest steps possible. You want to configure the Google Cloud SDK command line interface (CLI) so that you can easily manage multiple projects. What should you do?",
        "options": [
            "1. Create a configuration for each project you need to manage. 2. Activate the appropriate configuration when you work with each of your assigned Google Cloud projects.",
            "1. Create a configuration for each project you need to manage. 2. Use gcloud init to update the configuration values when you need to work with a non-default project.",
            "1. Use the default configuration for one project you need to manage. 2. Activate the appropriate configuration when you work with each of your assigned Google Cloud projects.",
            "1. Use the default configuration for one project you need to manage. 2. Use gcloud init to update the configuration values when you need to work with a non-default project."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is '1. Create a configuration for each project you need to manage. 2. Activate the appropriate configuration when you work with each of your assigned Google Cloud projects.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q21",
        "questionText": "Your Managed Instance Group raised an alert stating that new instance creation has failed to create new instances. You need to maintain the number of running instances specified by the template to be able to process expected application traffic. What should you do?",
        "options": [
            "Create an instance template that contains valid syntax which will be used by the instance group. Delete any persistent disks with the same name as instance names.",
            "Create an instance template that contains valid syntax that will be used by the instance group. Verify that the instance name and persistent disk name values are not the same in the template.",
            "Verify that the instance template being used by the instance group contains valid syntax. Delete any persistent disks with the same name as instance names. Set the disks.autoDelete property to true in the instance template.",
            "Delete the current instance template and replace it with a new instance template. Verify that the instance name and persistent disk name values are not the same in the template. Set the disks.autoDelete property to true in the instance template."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Create an instance template that contains valid syntax which will be used by the instance group. Delete any persistent disks with the same name as instance names.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q22",
        "questionText": "Your company is moving from an on-premises environment to Google Cloud. You have multiple development teams that use Cassandra environments as backend databases. They all need a development environment that is isolated from other Cassandra instances. You want to move to Google Cloud quickly and with minimal support effort. What should you do?",
        "options": [
            "1. Build an instruction guide to install Cassandra on Google Cloud. 2. Make the instruction guide accessible to your developers.",
            "1. Advise your developers to go to Cloud Marketplace. 2. Ask the developers to launch a Cassandra image for their development work.",
            "1. Build a Cassandra Compute Engine instance and take a snapshot of it. 2. Use the snapshot to create instances for your developers.",
            "1. Build a Cassandra Compute Engine instance and take a snapshot of it. 2. Upload the snapshot to Cloud Storage and make it accessible to your developers. 3. Build instructions to create a Compute Engine instance from the snapshot so that developers can do it themselves."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is '1. Advise your developers to go to Cloud Marketplace. 2. Ask the developers to launch a Cassandra image for their development work.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q23",
        "questionText": "You have a Compute Engine instance hosting a production application. You want to receive an email if the instance consumes more than 90% of its CPU resources for more than 15 minutes. You want to use Google services. What should you do?",
        "options": [
            "1. Create a consumer Gmail account. 2. Write a script that monitors the CPU usage. 3. When the CPU usage exceeds the threshold, have that script send an email using the Gmail account and smtp.gmail.com on port 25 as SMTP server.",
            "1. Create a Stackdriver Workspace, and associate your Google Cloud Platform (GCP) project with it. 2. Create an Alerting Policy in Stackdriver that uses the threshold as a trigger condition. 3. Configure your email address in the notification channel.",
            "1. Create a Stackdriver Workspace, and associate your GCP project with it. 2. Write a script that monitors the CPU usage and sends it as a custom metric to Stackdriver. 3. Create an uptime check for the instance in Stackdriver.",
            "1. In Stackdriver Logging, create a logs-based metric to extract the CPU usage by using this regular expression: CPU Usage: ([0-9] {1,3})% 2. In Stackdriver Monitoring, create an Alerting Policy based on this metric. 3. Configure your email address in the notification channel."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is '1. Create a Stackdriver Workspace, and associate your Google Cloud Platform (GCP) project with it. 2. Create an Alerting Policy in Stackdriver that uses the threshold as a trigger condition. 3. Configure your email address in the notification channel.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t6q24",
        "questionText": "You have an application that uses Cloud Spanner as a backend database. The application has a very predictable traffic pattern. You want to automatically scale up or down the number of Spanner nodes depending on traffic. What should you do?",
        "options": [
            "Create a cron job that runs on a scheduled basis to review Cloud Monitoring metrics, and then resize the Spanner instance accordingly.",
            "Create a Cloud Monitoring alerting policy to send an alert to oncall SRE emails when Cloud Spanner CPU exceeds the threshold. SREs would scale resources up or down accordingly.",
            "Create a Cloud Monitoring alerting policy to send an alert to Google Cloud Support email when Cloud Spanner CPU exceeds your threshold. Google support would scale resources up or down accordingly.",
            "Create a Cloud Monitoring alerting policy to send an alert to webhook when Cloud Spanner CPU is over or under your threshold. Create a Cloud Function that listens to HTTP and resizes Spanner resources accordingly."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Create a Cloud Monitoring alerting policy to send an alert to webhook when Cloud Spanner CPU is over or under your threshold. Create a Cloud Function that listens to HTTP and resizes Spanner resources accordingly.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q25",
        "questionText": "Your company publishes large files on an Apache web server that runs on a Compute Engine instance. The Apache web server is not the only application running in the project. You want to receive an email when the egress network costs for the server exceed 100 dollars for the current month as measured by Google Cloud. What should you do?",
        "options": [
            "Set up a budget alert on the project with an amount of 100 dollars, a threshold of 100%, and notification type of email.",
            "Set up a budget alert on the billing account with an amount of 100 dollars, a threshold of 100%, and notification type of email.",
            "Export the billing data to BigQuery. Create a Cloud Function that uses BigQuery to sum the egress network costs of the exported billing data for the Apache web server for the current month and sends an email if it is over 100 dollars. Schedule the Cloud Function using Cloud Scheduler to run hourly.",
            "Use the Cloud Logging Agent to export the Apache web server logs to Cloud Logging. Create a Cloud Function that uses BigQuery to parse the HTTP response log data in Cloud Logging for the current month and sends an email if the size of all HTTP responses, multiplied by current Google Cloud egress prices, totals over 100 dollars. Schedule the Cloud Function using Cloud Scheduler to run hourly."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Export the billing data to BigQuery. Create a Cloud Function that uses BigQuery to sum the egress network costs of the exported billing data for the Apache web server for the current month and sends an email if it is over 100 dollars. Schedule the Cloud Function using Cloud Scheduler to run hourly.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q26",
        "questionText": "You have designed a solution on Google Cloud that uses multiple Google Cloud products. Your company has asked you to estimate the costs of the solution. You need to provide estimates for the monthly total cost. What should you do?",
        "options": [
            "For each Google Cloud product in the solution, review the pricing details on the products pricing page. Use the pricing calculator to total the monthly costs for each Google Cloud product.",
            "For each Google Cloud product in the solution, review the pricing details on the products pricing page. Create a Google Sheet that summarizes the expected monthly costs for each product.",
            "Provision the solution on Google Cloud. Leave the solution provisioned for 1 week. Navigate to the Billing Report page in the Cloud Console. Multiply the 1 week cost to determine the monthly costs.",
            "Provision the solution on Google Cloud. Leave the solution provisioned for 1 week. Use Cloud Monitoring to determine the provisioned and used resource amounts. Multiply the 1 week cost to determine the monthly costs."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'For each Google Cloud product in the solution, review the pricing details on the products pricing page. Use the pricing calculator to total the monthly costs for each Google Cloud product.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q27",
        "questionText": "You have an application that receives SSL-encrypted TCP traffic on port 443. Clients for this application are located all over the world. You want to minimize latency for the clients. Which load balancing option should you use?",
        "options": [
            "HTTPS Load Balancer.",
            "Network Load Balancer.",
            "SSL Proxy Load Balancer.",
            "Internal TCP/UDP Load Balancer. Add a firewall rule allowing ingress traffic from 0.0.0.0/0 on the target instances."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'SSL Proxy Load Balancer.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q28",
        "questionText": "You have an application on a general-purpose Compute Engine instance that is experiencing excessive disk read throttling on its Zonal SSD Persistent Disk. The application primarily reads large files from disk. The disk size is currently 350 GB. You want to provide the maximum amount of throughput while minimizing costs. What should you do?",
        "options": [
            "Increase the size of the disk to 1 TB.",
            "Increase the allocated CPU to the instance.",
            "Migrate to use a Local SSD on the instance.",
            "Migrate to use a Regional SSD on the instance."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Migrate to use a Local SSD on the instance.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t6q29",
        "questionText": "Your Dataproc cluster runs in a single Virtual Private Cloud (VPC) network in a single subnet with range 172.16.20.128/25. There are no private IP addresses available in the VPC network. You want to add new VMs to communicate with your cluster using the minimum number of steps. What should you do?",
        "options": [
            "Modify the existing subnet range to 172.16.20.0/24.",
            "Create a new Secondary IP Range in the VPC and configure the VMs to use that range.",
            "Create a new VPC network for the VMs. Enable VPC Peering between the VMs' VPC network and the Dataproc cluster VPC network.",
            "Create a new VPC network for the VMs with a subnet of 172.32.0.0/16. Enable VPC network Peering between the Dataproc VPC network and the VMs VPC network. Configure a custom Route exchange."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Modify the existing subnet range to 172.16.20.0/24.'. This is the appropriate networking solution for the given requirements.",
        "resourceLink": "https://cloud.google.com/vpc/docs"
    },
    {
        "id": "t6q30",
        "questionText": "You manage an App Engine Service that aggregates and visualizes data from BigQuery. The application is deployed with the default App Engine Service account. The data that needs to be visualized resides in a different project managed by another team. You do not have access to this project, but you want your application to be able to read data from the BigQuery dataset. What should you do?",
        "options": [
            "Ask the other team to grant your default App Engine Service account the role of BigQuery Job User.",
            "Ask the other team to grant your default App Engine Service account the role of BigQuery Data Viewer.",
            "In Cloud IAM of your project, ensure that the default App Engine service account has the role of BigQuery Data Viewer.",
            "In Cloud IAM of your project, grant a newly created service account from the other team the role of BigQuery Job User in your project."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Ask the other team to grant your default App Engine Service account the role of BigQuery Data Viewer.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/appengine/docs"
    },
    {
        "id": "t6q31",
        "questionText": "You need to create a copy of a custom Compute Engine Virtual Machine (VM) to facilitate an expected increase in application traffic due to a business acquisition. What should you do?",
        "options": [
            "Create a Compute Engine snapshot of your base VM. Create your images from that snapshot.",
            "Create a Compute Engine snapshot of your base VM. Create your instances from that snapshot.",
            "Create a custom Compute Engine image from a snapshot. Create your images from that image.",
            "Create a custom Compute Engine image from a snapshot. Create your instances from that image."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Create a custom Compute Engine image from a snapshot. Create your instances from that image.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t6q32",
        "questionText": "You have deployed an application on a single Compute Engine instance. The application writes logs to disk. Users start reporting errors with the application. You want to diagnose the problem. What should you do?",
        "options": [
            "Navigate to Cloud Logging and view the application logs.",
            "Connect to the instance's serial console and read the application logs.",
            "Configure a Health Check on the instance and set a Low Healthy Threshold value.",
            "Install and configure the Cloud Logging Agent and view the logs from Cloud Logging."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Install and configure the Cloud Logging Agent and view the logs from Cloud Logging.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t6q33",
        "questionText": "An application generates daily reports in a Compute Engine Virtual Machine (VM). The VM is in the project corp-iot-insights. Your team operates only in the project corp-aggregate-reports and needs a copy of the daily exports in the bucket corp-aggregate-reports-storage. You want to configure access so that the daily reports from the VM are available in the bucket corp-aggregate-reports-storage and use as few steps as possible while following Google-recommended practices. What should you do?",
        "options": [
            "Move both projects under the same folder.",
            "Grant the VM Service Account the role Storage Object Creator on corp-aggregate-reports-storage.",
            "Create a Shared VPC network between both projects. Grant the VM Service Account the role Storage Object Creator on corp-iot-insights.",
            "Make corp-aggregate-reports-storage public and create a folder with a pseudo-randomized suffix name. Share the folder with the IoT team."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Grant the VM Service Account the role Storage Object Creator on corp-aggregate-reports-storage.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t6q34",
        "questionText": "You built an application on your development laptop that uses Google Cloud services. Your application uses Application Default Credentials for authentication and works fine on your development laptop. You want to migrate this application to a Compute Engine Virtual Machine (VM) and set up authentication using Google-recommended practices and minimal changes. What should you do?",
        "options": [
            "Assign appropriate access for Google services to the service account used by the Compute Engine VM.",
            "Create a service account with appropriate access for Google services, and configure the application to use this account.",
            "Store credentials for service accounts with appropriate access for Google services in a config file, and deploy this config file with your application.",
            "Store credentials for your user account with appropriate access for Google services in a config file, and deploy this config file with your application."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Assign appropriate access for Google services to the service account used by the Compute Engine VM.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q35",
        "questionText": "You need to create a Compute Engine instance in a new project that doesn't exist yet. What should you do?",
        "options": [
            "Using the Cloud SDK, create a new project, enable the Compute Engine API in that project, and then create the instance specifying your new project.",
            "Enable the Compute Engine API in the Cloud Console, use the Cloud SDK to create the instance, and then use the --project flag to specify a new project.",
            "Using the Cloud SDK, create the new instance, and use the --project flag to specify the new project. Answer yes when prompted by Cloud SDK to enable the Compute Engine API.",
            "Enable the Compute Engine API in the Cloud Console. Go to the Compute Engine section of the Console to create a new instance, and look for the Create In A New Project option in the creation form."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Using the Cloud SDK, create a new project, enable the Compute Engine API in that project, and then create the instance specifying your new project.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t6q36",
        "questionText": "Your company runs one batch process in an on-premises server that takes around 30 hours to complete. The task runs monthly, can be performed offline, and must be restarted if interrupted. You want to migrate this workload to the cloud while minimizing cost. What should you do?",
        "options": [
            "Migrate the workload to a Compute Engine Preemptible VM.",
            "Migrate the workload to a Google Kubernetes Engine cluster with Preemptible nodes.",
            "Migrate the workload to a Compute Engine VM. Start and stop the instance as needed.",
            "Create an Instance Template with Preemptible VMs On. Create a Managed Instance Group from the template and adjust Target CPU Utilization. Migrate the workload."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Migrate the workload to a Compute Engine VM. Start and stop the instance as needed.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q37",
        "questionText": "You are developing a new application and are looking for a Jenkins installation to build and deploy your source code. You want to automate the installation as quickly and easily as possible. What should you do?",
        "options": [
            "Deploy Jenkins through the Google Cloud Marketplace.",
            "Create a new Compute Engine instance. Run the Jenkins executable.",
            "Create a new Kubernetes Engine cluster. Create a deployment for the Jenkins image.",
            "Create an instance template with the Jenkins executable. Create a Managed Instance Group with this template."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Deploy Jenkins through the Google Cloud Marketplace.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q38",
        "questionText": "You have downloaded and installed the gcloud command line interface (CLI) and have authenticated with your Google Account. Most of your Compute Engine instances in your project run in the europe-west1-d zone. You want to avoid having to specify this zone with each CLI command when managing these instances. What should you do?",
        "options": [
            "Set the europe-west1-d zone as the default zone using the gcloud config subcommand.",
            "In the Settings page for Compute Engine under Default location, set the zone to europe-west1-d.",
            "In the CLI installation directory, create a file called default.conf containing zone=europe-west1-d.",
            "Create a Metadata entry on the Compute Engine page with key compute/zone and value europe-west1-d."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Set the europe-west1-d zone as the default zone using the gcloud config subcommand.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t6q39",
        "questionText": "The core business of your company is to rent out construction equipment at large scale. All the equipment that is being rented out has been equipped with multiple sensors that send event information every few seconds. These signals can vary from engine status, distance traveled, fuel level, and more. Customers are billed based on the consumption monitored by these sensors. You expect high throughput - up to thousands of events per hour per device - and need to retrieve consistent data based on the time of the event. Storing and retrieving individual signals should be atomic. What should you do?",
        "options": [
            "Create a file in Cloud Storage per device and append new data to that file.",
            "Create a file in Cloud Filestore per device and append new data to that file.",
            "Ingest the data into Datastore. Store data in an entity group based on the device.",
            "Ingest the data into Cloud Bigtable. Create a row key based on the event timestamp."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Ingest the data into Cloud Bigtable. Create a row key based on the event timestamp.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q40",
        "questionText": "You are asked to set up application performance monitoring on Google Cloud projects A, B, and C as a single pane of glass. You want to monitor CPU, memory, and disk. What should you do?",
        "options": [
            "Enable API and then share charts from project A, B, and C.",
            "Enable API and then give the metrics.reader role to projects A, B, and C.",
            "Enable API and then use default dashboards to view all projects in sequence.",
            "Enable API, create a workspace under project A, and then add projects B and C."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Enable API, create a workspace under project A, and then add projects B and C.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q41",
        "questionText": "You created several resources in multiple Google Cloud projects. All projects are linked to different billing accounts. To better estimate future charges, you want to have a single visual representation of all costs incurred. You want to include new cost data as soon as possible. What should you do?",
        "options": [
            "Configure Billing Data Export to BigQuery and visualize the data in Data Studio.",
            "Visit the Cost Table page to get a CSV export and visualize it using Data Studio.",
            "Fill all resources in the Pricing Calculator to get an estimate of the monthly cost.",
            "Use the Reports view in the Cloud Billing Console to view the desired cost information."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Configure Billing Data Export to BigQuery and visualize the data in Data Studio.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q42",
        "questionText": "Your company has workloads running on Compute Engine and on-premises. The Google Cloud Virtual Private Cloud (VPC) is connected to your WAN over a Virtual Private Network (VPN). You need to deploy a new Compute Engine instance and ensure that no public Internet traffic can be routed to it. What should you do?",
        "options": [
            "Create the instance without a public IP address.",
            "Create the instance with Private Google Access enabled.",
            "Create a deny-all egress firewall rule on the VPC network.",
            "Create a route on the VPC to route all traffic to the instance over the VPN tunnel."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Create the instance without a public IP address.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q43",
        "questionText": "Your team maintains the infrastructure for your organization. The current infrastructure requires changes. You need to share your proposed changes with the rest of the team. You want to follow Google's recommended best practices. What should you do?",
        "options": [
            "Use Deployment Manager templates to describe the proposed changes and store them in a Cloud Storage bucket.",
            "Use Deployment Manager templates to describe the proposed changes and store them in Cloud Source Repositories.",
            "Apply the changes in a development environment, run gcloud compute instances list, and then save the output in a shared Storage bucket.",
            "Apply the changes in a development environment, run gcloud compute instances list, and then save the output in Cloud Source Repositories."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Use Deployment Manager templates to describe the proposed changes and store them in Cloud Source Repositories.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q44",
        "questionText": "You have a Compute Engine instance hosting an application used between 9 AM and 6 PM on weekdays. You want to back up this instance daily for disaster recovery purposes. You want to keep the backups for 30 days. You want the Google-recommended solution with the least management overhead and the least number of services. What should you do?",
        "options": [
            "1. Update your instances' metadata to add the following value: snapshot-schedule: 0 1 * * * 2. Update your instances' metadata to add the following value: snapshot-retention: 30.",
            "1. In the Cloud Console, go to the Compute Engine Disks page and select your instance's disk. 2. In the Snapshot Schedule section, select Create Schedule and configure the following parameters: Schedule frequency: Daily. Start time: 1:00 AM - 2:00 AM. Autodelete snapshots after: 30 days.",
            "1. Create a Cloud Function that creates a snapshot of your instance's disk. 2. Create a Cloud Function that deletes snapshots that are older than 30 days. 3. Use Cloud Scheduler to trigger both Cloud Functions daily at 1:00 AM.",
            "1. Create a bash script in the instance that copies the content of the disk to Cloud Storage. 2. Create a bash script in the instance that deletes data older than 30 days in the backup Cloud Storage bucket. 3. Configure the instance's crontab to execute these scripts daily at 1:00 AM."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is '1. In the Cloud Console, go to the Compute Engine Disks page and select your instance's disk. 2. In the Snapshot Schedule section, select Create Schedule and configure the following parameters: Schedule frequency: Daily. Start time: 1:00 AM - 2:00 AM. Autodelete snapshots after: 30 days.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t6q45",
        "questionText": "Your existing application running in Google Kubernetes Engine (GKE) consists of multiple pods running on four GKE n1-standard-2 nodes. You need to deploy additional pods requiring n2-highmem-16 nodes without any downtime. What should you do?",
        "options": [
            "Use gcloud container clusters upgrade. Deploy the new services.",
            "Create a new Node Pool and specify machine type n2-highmem-16. Deploy the new pods.",
            "Create a new cluster with n2-highmem-16 nodes. Redeploy the pods and delete the old cluster.",
            "Create a new cluster with both n1-standard-2 and n2-highmem-16 nodes. Redeploy the pods and delete the old cluster."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Create a new Node Pool and specify machine type n2-highmem-16. Deploy the new pods.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/kubernetes-engine/docs"
    },
    {
        "id": "t6q46",
        "questionText": "You have an application that uses Cloud Spanner as a database backend to keep current state information about users. Cloud Bigtable logs all events triggered by users. You export Cloud Spanner data to Cloud Storage during daily backups. One of your analysts asks you to join data from Cloud Spanner and Cloud Bigtable for specific users. You want to complete this ad hoc request as efficiently as possible. What should you do?",
        "options": [
            "Create a dataflow job that copies data from Cloud Bigtable and Cloud Storage for specific users.",
            "Create a dataflow job that copies data from Cloud Bigtable and Cloud Spanner for specific users.",
            "Create a Cloud Dataproc cluster that runs a Spark job to extract data from Cloud Bigtable and Cloud Storage for specific users.",
            "Create two separate BigQuery external tables on Cloud Storage and Cloud Bigtable. Use the BigQuery console to join these tables through user fields, and apply appropriate filters."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Create two separate BigQuery external tables on Cloud Storage and Cloud Bigtable. Use the BigQuery console to join these tables through user fields, and apply appropriate filters.'. This is the recommended solution for Cloud Storage operations.",
        "resourceLink": "https://cloud.google.com/storage/docs"
    },
    {
        "id": "t6q47",
        "questionText": "You are hosting an application from Compute Engine Virtual Machines (VMs) in us-central1-a. You want to adjust your design to support the failure of a single Compute Engine zone, eliminate downtime, and minimize cost. What should you do?",
        "options": [
            "Create Compute Engine resources in us-central1-b. Balance the load across both us-central1-a and us-central1-b.",
            "Create a Managed Instance Group and specify us-central1-a as the zone. Configure the Health Check with a short Health Interval.",
            "Create an HTTP(S) Load Balancer. Create one or more global forwarding rules to direct traffic to your VMs.",
            "Perform regular backups of your application. Create a Cloud Monitoring Alert and be notified if your application becomes unavailable. Restore from backups when notified."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Create Compute Engine resources in us-central1-b. Balance the load across both us-central1-a and us-central1-b.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t6q48",
        "questionText": "A colleague handed over a Google Cloud Platform project for you to maintain. As part of a security checkup, you want to review who has been granted the Project Owner role. What should you do?",
        "options": [
            "In the console, validate which SSH keys have been stored as project-wide keys.",
            "Navigate to Identity-Aware Proxy and check the permissions for these resources.",
            "Enable Audit Logs on the IAM &amp; admin page for all resources, and validate the results.",
            "Use the command gcloud projects get-iam-policy to view the current role assignments."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Use the command gcloud projects get-iam-policy to view the current role assignments.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t6q49",
        "questionText": "You are running multiple VPC-native Google Kubernetes Engine clusters in the same subnet. The IPs available for the nodes are exhausted, and you want to ensure that the clusters can grow in nodes when needed. What should you do?",
        "options": [
            "Create a new subnet in the same region as the subnet being used.",
            "Add an alias IP range to the subnet used by the GKE clusters.",
            "Create a new VPC, and set up VPC peering with the existing VP.",
            "Expand the CIDR range of the relevant subnet for the cluster."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Expand the CIDR range of the relevant subnet for the cluster.'. This is the appropriate networking solution for the given requirements.",
        "resourceLink": "https://cloud.google.com/vpc/docs"
    },
    {
        "id": "t6q50",
        "questionText": "You have a batch workload that runs every night and uses a large number of Virtual Machines (VMs). It is fault-tolerant and can tolerate some of the VMs being terminated. The current cost of VMs is too high. What should you do?",
        "options": [
            "Run a test using simulated maintenance events. If the test is successful, use preemptible N1 Standard VMs when running future jobs.",
            "Run a test using simulated maintenance events. If the test is successful, use N1 Standard VMs when running future jobs.",
            "Run a test using a Managed Instance Group. If the test is successful, use N1 Standard VMs in the Managed Instance Group when running future jobs.",
            "Run a test using N1 standard VMs instead of N2. If the test is successful, use N1 Standard VMs when running future jobs."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Run a test using simulated maintenance events. If the test is successful, use preemptible N1 Standard VMs when running future jobs.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    }
];

const test7Questions = [
    {
        "id": "t7q1",
        "questionText": "You are working with a user to set up an application in a new VPC behind a firewall. The user is concerned about data egress. You want to configure the fewest open egress ports. What should you do?",
        "options": [
            "Set up a low-priority (65534) rule that blocks all egress and a high-priority rule (1000) that allows only the appropriate ports.",
            "Set up a high-priority (1000) rule that pairs both ingress and egress ports.",
            "Set up a high-priority (1000) rule that blocks all egress and a low-priority (65534) rule that allows only the appropriate ports.",
            "Set up a high-priority (1000) rule to allow the appropriate ports."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Set up a low-priority (65534) rule that blocks all egress and a high-priority rule (1000) that allows only the appropriate ports.'. This is the appropriate networking solution for the given requirements.",
        "resourceLink": "https://cloud.google.com/vpc/docs"
    },
    {
        "id": "t7q2",
        "questionText": "Your company runs its Linux workloads on Compute Engine instances. Your company will be working with a new operations partner that does not use Google Accounts. You need to grant access to the instances to your operations partner so they can maintain the installed tooling. What should you do?",
        "options": [
            "Enable Cloud IAP for the Compute Engine instances, and add the operations partner as a Cloud IAP Tunnel User.",
            "Tag all the instances with the same network tag. Create a firewall rule in the VPC to grant TCP access on port 22 for traffic from the operations partner to instances with the network tag.",
            "Set up Cloud VPN between your Google Cloud VPC and the internal network of the operations partner.",
            "Ask the operations partner to generate SSH key pairs, and add the public keys to the VM instances."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Enable Cloud IAP for the Compute Engine instances, and add the operations partner as a Cloud IAP Tunnel User.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t7q3",
        "questionText": "You have created a code snippet that should be triggered whenever a new file is uploaded to a Cloud Storage bucket. You want to deploy this code snippet. What should you do?",
        "options": [
            "Use App Engine and configure Cloud Scheduler to trigger the application using Pub/Sub.",
            "Use Cloud Functions and configure the bucket as a trigger resource.",
            "Use Google Kubernetes Engine and configure a CronJob to trigger the application using Pub/Sub.",
            "Use Dataflow as a batch job, and configure the bucket as a data source."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Use Cloud Functions and configure the bucket as a trigger resource.'. This is the recommended solution for Cloud Storage operations.",
        "resourceLink": "https://cloud.google.com/storage/docs"
    },
    {
        "id": "t7q4",
        "questionText": "You have been asked to set up Object Lifecycle Management for objects stored in storage buckets. The objects are written once and accessed frequently for 30 days. After 30 days, the objects are not read again unless there is a special need. The objects should be kept for three years, and you need to minimize cost. What should you do?",
        "options": [
            "Set up a policy that uses Nearline storage for 30 days and then moves to Archive storage for three years.",
            "Set up a policy that uses Standard storage for 30 days and then moves to Archive storage for three years.",
            "Set up a policy that uses Nearline storage for 30 days, then moves the Coldline for one year, and then moves to Archive storage for two years.",
            "Set up a policy that uses Standard storage for 30 days, then moves to Coldline for one year, and then moves to Archive storage for two years."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Set up a policy that uses Standard storage for 30 days and then moves to Archive storage for three years.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q5",
        "questionText": "You are storing sensitive information in a Cloud Storage bucket. For legal reasons, you need to be able to record all requests that read any of the stored data. You want to make sure you comply with these requirements. What should you do?",
        "options": [
            "Enable the Identity Aware Proxy API on the project.",
            "Scan the bucket using the Data Loss Prevention API.",
            "Allow only a single Service Account access to read the data.",
            "Enable Data Access audit logs for the Cloud Storage API."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Enable Data Access audit logs for the Cloud Storage API.'. This is the recommended solution for Cloud Storage operations.",
        "resourceLink": "https://cloud.google.com/storage/docs"
    },
    {
        "id": "t7q6",
        "questionText": "You are the team lead of a group of 10 developers. You provided each developer with an individual Google Cloud Project that they can use as their personal sandbox to experiment with different Google Cloud solutions. You want to be notified if any of the developers are spending above $500 per month on their sandbox environment. What should you do?",
        "options": [
            "Create a single budget for all projects and configure budget alerts on this budget.",
            "Create a separate billing account per sandbox project and enable BigQuery billing exports. Create a Data Studio dashboard to plot the spending per billing account.",
            "Create a budget per project and configure budget alerts on all of these budgets.",
            "Create a single billing account for all sandbox projects and enable BigQuery billing exports. Create a Data Studio dashboard to plot the spending per project."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Create a budget per project and configure budget alerts on all of these budgets.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q7",
        "questionText": "You are deploying a production application on Compute Engine. You want to prevent anyone from accidentally destroying the instance by clicking the wrong button. What should you do?",
        "options": [
            "Disable the flag Delete boot disk when instance is deleted.",
            "Enable delete protection on the instance.",
            "Disable Automatic restart on the instance.",
            "Enable Preemptibility on the instance."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Enable delete protection on the instance.'. This option provides the best approach for managing Compute Engine resources.",
        "resourceLink": "https://cloud.google.com/compute/docs"
    },
    {
        "id": "t7q8",
        "questionText": "Your company uses a large number of Google Cloud services centralized in a single project. All teams have specific projects for testing and development. The DevOps team needs access to all of the production services in order to perform their job. You want to prevent Google Cloud product changes from broadening their permissions in the future. You want to follow Google-recommended practices. What should you do?",
        "options": [
            "Grant all members of the DevOps team the role of Project Editor on the organization level.",
            "Grant all members of the DevOps team the role of Project Editor on the production project.",
            "Create a custom role that combines the required permissions. Grant the DevOps team the custom role on the production project.",
            "Create a custom role that combines the required permissions. Grant the DevOps team the custom role on the organization level."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Create a custom role that combines the required permissions. Grant the DevOps team the custom role on the production project.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q9",
        "questionText": "You are building an application that processes data files uploaded from thousands of suppliers. Your primary goals for the application are data security and the expiration of aged data. You need to design the application to: Restrict access so that suppliers can access only their own data. Give suppliers write access to data only for 30 minutes. Delete data that is over 45 days old. You have a very short development cycle, and you need to make sure that the application requires minimal maintenance. Which two strategies should you use? (Choose two.)",
        "options": [
            "Build a lifecycle policy to delete Cloud Storage objects after 45 days.",
            "Use signed URLs to allow suppliers limited time access to store their objects.",
            "Set up an SFTP server for your application, and create a separate user for each supplier.",
            "Build a Cloud function that triggers a timer of 45 days to delete objects that have expired.",
            "Develop a script that loops through all Cloud Storage buckets and deletes any buckets that are older than 45 days."
        ],
        "correctAnswer": [
            0,
            1
        ],
        "explanation": "The correct answer is 'Build a lifecycle policy to delete Cloud Storage objects after 45 days.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q10",
        "questionText": "Your company wants to standardize the creation and management of multiple Google Cloud resources using Infrastructure as Code. You want to minimize the amount of repetitive code needed to manage the environment. What should you do?",
        "options": [
            "Develop templates for the environment using Cloud Deployment Manager.",
            "Use curl in a terminal to send a REST request to the relevant Google API for each individual resource.",
            "Use the Cloud Console interface to provision and manage all related resources.",
            "Create a bash script that contains all requirement steps as gcloud commands."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Develop templates for the environment using Cloud Deployment Manager.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q11",
        "questionText": "You are performing a monthly security check of your Google Cloud environment and want to know who has access to view data stored in your Google Cloud Project. What should you?",
        "options": [
            "Enable Audit Logs for all APIs that are related to data storage.",
            "Review the IAM permissions for any role that allows for data access.",
            "Review the Identity-Aware Proxy settings for each resource.",
            "Create a Data Loss Prevention job."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Review the IAM permissions for any role that allows for data access.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q12",
        "questionText": "Your company has embraced a hybrid cloud strategy where some of the applications are deployed on Google Cloud. A Virtual Private Network (VPN) tunnel connects your Virtual Private Cloud (VPC) in Google Cloud with your company's on-premises network. Multiple applications in Google Cloud need to connect to an on-premises database server, and you want to avoid having to change the IP configuration in all of your applications when the IP of the database changes. What should you do?",
        "options": [
            "Configure Cloud NAT for all subnets of your VPC to be used when egressing from the VM instances.",
            "Create a private zone on Cloud DNS, and configure the applications with the DNS name.",
            "Configure the IP of the database as custom metadata for each instance, and query the metadata server.",
            "Query the Compute Engine internal DNS from the applications to retrieve the IP of the database."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Create a private zone on Cloud DNS, and configure the applications with the DNS name.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q13",
        "questionText": "You have developed a containerized web application that will serve internal colleagues during business hours. You want to ensure that no costs are incurred outside of the hours the application is used. You have just created a new Google Cloud project and want to deploy the application. What should you do?",
        "options": [
            "Deploy the container on Cloud Run for Anthos, and set the minimum number of instances to zero.",
            "Deploy the container on Cloud Run (fully managed), and set the minimum number of instances to zero.",
            "Deploy the container on App Engine flexible environment with autoscaling, and set the value min_instances to zero in the app.yaml.",
            "Deploy the container on App Engine flexible environment with manual scaling, and set the value instances to zero in the app.yaml."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Deploy the container on Cloud Run (fully managed), and set the minimum number of instances to zero.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q14",
        "questionText": "You have experimented with Google Cloud using your own credit card and expensed the costs to your company. Your company wants to streamline the billing process and charge the costs of your projects to their monthly invoice. What should you do?",
        "options": [
            "Grant the financial team the IAM role of Billing Account User on the billing account linked to your credit card.",
            "Set up BigQuery billing export and grant your financial department IAM access to query the data.",
            "Create a ticket with Google Billing Support to ask them to send the invoice to your company.",
            "Change the billing account of your projects to the billing account of your company."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Change the billing account of your projects to the billing account of your company.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q15",
        "questionText": "You are running a data warehouse on BigQuery. A partner company is offering a recommendation engine based on the data in your data warehouse. The partner company is also running their application on Google Cloud. They manage the resources in their own project, but they need access to the BigQuery dataset in your project. You want to provide the partner company with access to the dataset. What should you do?",
        "options": [
            "Create a Service Account in your own project, and grant this Service Account access to BigQuery in your project.",
            "Create a Service Account in your own project, and ask the partner to grant this Service Account access to BigQuery in their project.",
            "Ask the partner to create a Service Account in their project, and have them give the Service Account access to BigQuery in their project.",
            "Ask the partner to create a Service Account in their project, and grant their Service Account access to the BigQuery dataset in your project."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Ask the partner to create a Service Account in their project, and grant their Service Account access to the BigQuery dataset in your project.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q16",
        "questionText": "Your web application has been running successfully on Cloud Run for Anthos. You want to evaluate an updated version of the application with a specific percentage of your production users (canary deployment). What should you do?",
        "options": [
            "Create a new service with the new version of the application. Split traffic between this version and the version that is currently running.",
            "Create a new revision with the new version of the application. Split traffic between this version and the version that is currently running.",
            "Create a new service with the new version of the application. Add HTTP Load Balancer in front of both services.",
            "Create a new revision with the new version of the application. Add HTTP Load Balancer in front of both revisions."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Create a new revision with the new version of the application. Split traffic between this version and the version that is currently running.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q17",
        "questionText": "Your company developed a mobile game that is deployed on Google Cloud. Gamers are connecting to the game with their personal phones over the Internet. The game sends UDP packets to update the servers about the gamers' actions while they are playing in multiplayer mode. Your game backend can scale over multiple Virtual Machines (VMs), and you want to expose the VMs over a single IP address. What should you do?",
        "options": [
            "Configure an SSL Proxy load balancer in front of the application servers.",
            "Configure an Internal UDP load balancer in front of the application servers.",
            "Configure an External HTTP(s) load balancer in front of the application servers.",
            "Configure an External Network load balancer in front of the application servers."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Configure an External Network load balancer in front of the application servers.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q18",
        "questionText": "You are working for a hospital that stores its medical images in an on-premises data room. The hospital wants to use Cloud Storage for archival storage of these images. The hospital wants an automated process to upload any new medical images to Cloud Storage. You need to design and implement a solution. What should you do?",
        "options": [
            "Create a Pub/Sub topic, and enable a Cloud Storage trigger for the Pub/Sub topic. Create an application that sends all medical images to the Pub/Sub topic.",
            "Deploy a Dataflow job from the batch template, Datastore to Cloud Storage. Schedule the batch job on the desired interval.",
            "Create a script that uses the gsutil command line interface to synchronize the on-premises storage with Cloud Storage. Schedule the script as a cron job.",
            "In the Cloud Console, go to Cloud Storage. Upload the relevant images to the appropriate bucket."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Create a script that uses the gsutil command line interface to synchronize the on-premises storage with Cloud Storage. Schedule the script as a cron job.'. This is the recommended solution for Cloud Storage operations.",
        "resourceLink": "https://cloud.google.com/storage/docs"
    },
    {
        "id": "t7q19",
        "questionText": "Your auditor wants to view your organization's use of data in Google Cloud. The auditor is most interested in auditing who accessed data in Cloud Storage buckets. You need to help the auditor access the data they need. What should you do?",
        "options": [
            "Turn on Data Access Logs for the buckets they want to audit, and then build a query in the log viewer that filters on Cloud Storage.",
            "Assign the appropriate permissions, and then create a Data Studio report on Admin Activity Audit Logs.",
            "Assign the appropriate permissions, and the use Cloud Monitoring to review metrics.",
            "Use the export logs API to provide the Admin Activity Audit Logs in the format they want."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Turn on Data Access Logs for the buckets they want to audit, and then build a query in the log viewer that filters on Cloud Storage.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q20",
        "questionText": "You received a JSON file that contained a private key of a Service Account in order to get access to several resources in a Google Cloud project. You downloaded and installed the Cloud SDK and want to use this private key for authentication and authorization when performing gcloud commands. What should you do?",
        "options": [
            "Use the command gcloud auth login and point it to the private key.",
            "Use the command gcloud auth activate-service-account and point it to the private key.",
            "Place the private key file in the installation directory of the Cloud SDK and rename it to credentials.json.",
            "Place the private key file in your home directory and rename it to GOOGLE_APPLICATION_CREDENTIALS."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Use the command gcloud auth activate-service-account and point it to the private key.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q21",
        "questionText": "You are working with a Cloud SQL MySQL database at your company. You need to retain a month-end copy of the database for three years for audit purposes. What should you do?",
        "options": [
            "Set up an export job for the first of the month. Write the export file to an Archive class Cloud Storage bucket.",
            "Save the automatic first-of-the-month backup for three years. Store the backup file in an Archive class Cloud Storage bucket.",
            "Set up an on-demand backup for the first of the month. Write the backup to an Archive class Cloud Storage bucket.",
            "Convert the automatic first-of-the-month backup to an export file. Write the export file to a Coldline class Cloud Storage bucket."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'Set up an export job for the first of the month. Write the export file to an Archive class Cloud Storage bucket.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q22",
        "questionText": "You are monitoring an application and receive user feedback that a specific error is spiking. You notice that the error is caused by a Service Account having insufficient permissions. You are able to solve the problem but want to be notified if the problem recurs. What should you do?",
        "options": [
            "In the Log Viewer, filter the logs on severity \u02dcError' and the name of the Service Account.",
            "Create a sink to BigQuery to export all the logs. Create a Data Studio dashboard on the exported logs.",
            "Create a custom log-based metric for the specific error to be used in an Alerting Policy.",
            "Grant Project Owner access to the Service Account."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Create a custom log-based metric for the specific error to be used in an Alerting Policy.'. This follows Google's recommended practices for identity and access management.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q23",
        "questionText": "You are developing a financial trading application that will be used globally. Data is stored and queried using a relational structure, and clients from all over the world should get the exact identical state of the data. The application will be deployed in multiple regions to provide the lowest latency to end users. You need to select a storage option for the application data while minimizing latency. What should you do?",
        "options": [
            "Use Cloud Bigtable for data storage.",
            "Use Cloud SQL for data storage.",
            "Use Cloud Spanner for data storage.",
            "Use Firestore for data storage."
        ],
        "correctAnswer": [
            2
        ],
        "explanation": "The correct answer is 'Use Cloud Spanner for data storage.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q24",
        "questionText": "You are about to deploy a new Enterprise Resource Planning (ERP) system on Google Cloud. The application holds the full database in-memory for fast data access, and you need to configure the most appropriate resources on Google Cloud for this application. What should you do?",
        "options": [
            "Provision preemptible Compute Engine instances.",
            "Provision Compute Engine instances with GPUs attached.",
            "Provision Compute Engine instances with local SSDs attached.",
            "Provision Compute Engine instances with M1 machine type."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Provision Compute Engine instances with M1 machine type.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q25",
        "questionText": "You have developed an application that consists of multiple microservices, with each microservice packaged in its own Docker container image. You want to deploy the entire application on Google Kubernetes Engine so that each microservice can be scaled individually. What should you do?",
        "options": [
            "Create and deploy a Custom Resource Definition per microservice.",
            "Create and deploy a Docker Compose File.",
            "Create and deploy a Job per microservice.",
            "Create and deploy a Deployment per microservice."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Create and deploy a Deployment per microservice.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/kubernetes-engine/docs"
    },
    {
        "id": "t7q26",
        "questionText": "You will have several applications running on different Compute Engine instances in the same project. You want to specify at a more granular level the service account each instance uses when calling Google Cloud APIs. What should you do?",
        "options": [
            "When creating the instances, specify a Service Account for each instance.",
            "When creating the instances, assign the name of each Service Account as instance metadata.",
            "After starting the instances, use gcloud compute instances update to specify a Service Account for each instance.",
            "After starting the instances, use gcloud compute instances update to assign the name of the relevant Service Account as instance metadata."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is 'When creating the instances, specify a Service Account for each instance.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    },
    {
        "id": "t7q27",
        "questionText": "You are creating an application that will run on Google Kubernetes Engine. You have identified MongoDB as the most suitable database system for your application and want to deploy a managed MongoDB environment that provides a support SLA. What should you do?",
        "options": [
            "Create a Cloud Bigtable cluster, and use the HBase API.",
            "Deploy MongoDB Atlas from the Google Cloud Marketplace.",
            "Download a MongoDB installation package, and run it on Compute Engine instances.",
            "Download a MongoDB installation package, and run it on a Managed Instance Group."
        ],
        "correctAnswer": [
            1
        ],
        "explanation": "The correct answer is 'Deploy MongoDB Atlas from the Google Cloud Marketplace.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/kubernetes-engine/docs"
    },
    {
        "id": "t7q28",
        "questionText": "You are managing a project for the Business Intelligence (BI) department in your company. A data pipeline ingests data into BigQuery via streaming. You want the users in the BI department to be able to run the custom SQL queries against the latest data in BigQuery. What should you do?",
        "options": [
            "Create a Data Studio dashboard that uses the related BigQuery tables as a source and give the BI team view access to the Data Studio dashboard.",
            "Create a Service Account for the BI team and distribute a new private key to each member of the BI team.",
            "Use Cloud Scheduler to schedule a batch Dataflow job to copy the data from BigQuery to the BI team's internal data warehouse.",
            "Assign the IAM role of BigQuery User to a Google Group that contains the members of the BI team."
        ],
        "correctAnswer": [
            3
        ],
        "explanation": "The correct answer is 'Assign the IAM role of BigQuery User to a Google Group that contains the members of the BI team.'. This option best addresses the requirements described in the question.",
        "resourceLink": "https://cloud.google.com/bigquery/docs"
    },
    {
        "id": "t7q29",
        "questionText": "Your company is moving its entire workload to Compute Engine. Some servers should be accessible through the Internet, and other servers should only be accessible over the internal network. All servers need to be able to talk to each other over specific ports and protocols. The current on-premises network relies on a demilitarized zone (DMZ) for the public servers and a Local Area Network (LAN) for the private servers. You need to design the networking infrastructure on Google Cloud to match these requirements. What should you do?",
        "options": [
            "1. Create a single VPC with a subnet for the DMZ and a subnet for the LAN. 2. Set up firewall rules to open up relevant traffic between the DMZ and the LAN subnets, and another firewall rule to allow public ingress traffic for the DMZ.",
            "1. Create a single VPC with a subnet for the DMZ and a subnet for the LAN. 2. Set up firewall rules to open up relevant traffic between the DMZ and the LAN subnets, and another firewall rule to allow public egress traffic for the DMZ.",
            "1. Create a VPC with a subnet for the DMZ and another VPC with a subnet for the LAN. 2. Set up firewall rules to open up relevant traffic between the DMZ and the LAN subnets, and another firewall rule to allow public ingress traffic for the DMZ.",
            "1. Create a VPC with a subnet for the DMZ and another VPC with a subnet for the LAN. 2. Set up firewall rules to open up relevant traffic between the DMZ and the LAN subnets, and another firewall rule to allow public egress traffic for the DMZ."
        ],
        "correctAnswer": [
            0
        ],
        "explanation": "The correct answer is '1. Create a single VPC with a subnet for the DMZ and a subnet for the LAN. 2. Set up firewall rules to open up relevant traffic between the DMZ and the LAN subnets, and another firewall rule to allow public ingress traffic for the DMZ.'. This is the most appropriate solution for the given Google Cloud Platform scenario.",
        "resourceLink": "https://cloud.google.com/docs"
    }
];

const getRandomQuestions = (count = 10) => {
    const allQuestions = [
        ...test1Questions,
        ...test2Questions,
        ...test3Questions,
        ...test4Questions,
        ...test5Questions,
        ...test6Questions,
        ...test7Questions,
    ];
const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const getAllQuestions = () => {
    return [
        ...test1Questions,
        ...test2Questions,
        ...test3Questions,
        ...test4Questions,
        ...test5Questions,
        ...test6Questions,
        ...test7Questions,
    ];
};

export const questionsData = {
    test1: test1Questions,
    test2: test2Questions,
    test3: test3Questions,
    test4: test4Questions,
    test5: test5Questions,
    test6: test6Questions,
    test7: test7Questions,
    random: getRandomQuestions,
    review: getAllQuestions
};