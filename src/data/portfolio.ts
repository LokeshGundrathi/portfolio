import {
  Award,
  Briefcase,
  Cloud,
  Code2,
  Database,
  FileText,
  Layers,
  Mail,
  Monitor,
  Network,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type PersonalInfo = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
};

export const personal: PersonalInfo = {
  name: 'Gundrathi Lokesh',
  role: 'Software Engineer | Java Full Stack | Distributed Systems',
  location: 'Bengaluru, India',
  email: 'lokeshgundrathi@gmail.com',
  phone: '+91 9347716674',
  linkedin: 'https://www.linkedin.com/in/lokesh-gundrathi-9bab70237/',
  github: 'https://github.com/LokeshGundrathi',
};

export const navItems = ['Experience', 'Projects', 'Resume', 'Tech Stack', 'Certifications', 'Contact'];

export const metrics = [
  { label: 'Production systems', value: '4' },
  { label: 'Kafka throughput', value: '60-70/min' },
  { label: 'ETL services', value: '6' },
  { label: 'Current role', value: 'Oct 2024+' },
];

export const primaryTech = ['Java', 'Spring Boot', 'Apache Kafka', 'AWS', 'PostgreSQL', 'MongoDB'];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  priority: string;
  skills?: string[];
  primary?: string[];
  familiar?: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Core',
    icon: Server,
    priority: 'Primary',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'WebClient', 'Spring Scheduler'],
  },
  {
    title: 'Distributed Systems',
    icon: Network,
    priority: 'Primary',
    skills: ['Apache Kafka', 'ETL Pipelines', 'Retry Logic', 'Event Replay', 'Microservices', 'Gzip Payloads'],
  },
  {
    title: 'Databases',
    icon: Database,
    priority: 'Primary + Familiar',
    primary: ['PostgreSQL', 'Oracle SQL', 'MongoDB'],
    familiar: ['Snowflake', 'ClickHouse'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    priority: 'Production',
    skills: ['AWS SES', 'AWS S3', 'AWS SQS', 'AWS Lambda', 'Kubernetes', 'Docker Swarm'],
  },
  {
    title: 'Monitoring & Delivery',
    icon: Monitor,
    priority: 'Operations',
    skills: ['Grafana', 'Kibana', 'GitHub Actions', 'Jenkins', 'Maven', 'Gradle'],
  },
  {
    title: 'Frontend',
    icon: Layers,
    priority: 'Basic',
    skills: ['HTML', 'CSS', 'React JS (basic)', 'JavaScript (basic)'],
  },
];

export type Project = {
  title: string;
  description: string;
  businessImpact: string;
  architecture: string[];
  highlight: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: 'Provider Data Extract Pipeline',
    description:
      'Event-driven Kafka pipeline processing 60-70 events/minute with fault-tolerant retry and AWS SES failure alerting.',
    businessImpact: 'Reduced silent data-loss risk by surfacing persistent failures through automated alerts.',
    architecture: ['Kafka Consumer', 'Aggregation Layer', 'WebClient API', 'Gzip Payload', 'AWS SES Alert'],
    highlight: '60-70 events/min | Zero silent failures',
    stack: ['Spring Boot', 'Apache Kafka', 'PostgreSQL', 'WebClient', 'AWS SES', 'Kubernetes', 'Grafana'],
  },
  {
    title: 'Provider Data Export (ETL)',
    description:
      'Scheduled ETL pipeline orchestrating 6 microservices via Kafka for daily bulk data exports to AWS S3.',
    businessImpact: 'Automated daily bulk exports and improved operational reliability through Kafka replay.',
    architecture: ['Scheduler', 'Kafka Topics', '6 Microservices', 'File Packaging', 'AWS S3'],
    highlight: '6 microservices | Daily bulk exports',
    stack: ['Spring Boot', 'Apache Kafka', 'AWS S3', 'ETL', 'Kubernetes', 'Grafana'],
  },
  {
    title: 'Foresight AI - Multi-Tenant SaaS',
    description:
      'Secure multi-tenant analytics platform with JWT auth, dynamic DB switching, and automated AWS Workspace provisioning via SQS + Lambda.',
    businessImpact: 'Enabled tenant isolation and reduced manual cloud setup with automated provisioning workflows.',
    architecture: ['Tenant Request', 'JWT + Cookies', 'Runtime DB Switch', 'SQS Queue', 'Lambda Provisioning'],
    highlight: 'Multi-tenant | AWS automation | Dynamic DB',
    stack: [
      'Spring Boot',
      'Spring Security',
      'JWT',
      'AWS SES/SQS/Lambda',
      'PostgreSQL',
      'Snowflake',
      'ClickHouse',
      'Docker Swarm',
      'GitHub Actions',
    ],
  },
  {
    title: 'DYP (Discover Your Provider)',
    description:
      'Scalable REST APIs with Spring Schedulers, log monitoring via Kibana, and Kubernetes pod lifecycle management.',
    businessImpact: 'Improved platform operations through scheduled automation, searchable logs, and pod lifecycle visibility.',
    architecture: ['REST APIs', 'Spring Schedulers', 'Kibana Logs', 'Kubernetes Pods'],
    highlight: 'Schedulers | Log monitoring | Pod lifecycle',
    stack: ['Spring Boot', 'Spring Scheduler', 'Kibana', 'Kubernetes'],
  },
];

export type ArchitectureSection = {
  title: string;
  icon: LucideIcon;
  nodes: string[];
  detail: string;
};

export const architectureSections: ArchitectureSection[] = [
  {
    title: 'Kafka Data Extract Pipeline',
    icon: Workflow,
    nodes: ['Provider Event', 'Kafka Topic', 'Spring Consumer', 'DB Aggregation', 'External API'],
    detail: 'Designed for retryable event processing, payload compression, and failure escalation through AWS SES.',
  },
  {
    title: 'Daily ETL Export Workflow',
    icon: Database,
    nodes: ['Spring Scheduler', 'Kafka Orchestration', '6 Services', 'Package Files', 'AWS S3'],
    detail: 'Separates extraction, transformation, packaging, and upload responsibilities across microservices.',
  },
  {
    title: 'Multi-Tenant SaaS Platform',
    icon: ShieldCheck,
    nodes: ['Tenant DNS', 'JWT Auth', 'Cookie Session', 'Runtime DB', 'SQS + Lambda'],
    detail: 'Supports tenant-aware routing, secure access, dynamic data source selection, and workspace automation.',
  },
  {
    title: 'Monitoring Architecture',
    icon: Monitor,
    nodes: ['Kubernetes', 'Docker Swarm', 'Lambda', 'Grafana', 'Kibana'],
    detail: 'Operational visibility across pods, logs, jobs, Lambda executions, and service health dashboards.',
  },
];

export const experienceBullets = [
  'Led delivery of 4 production microservice systems from design to deployment',
  'Designed ETL pipeline orchestrating 6 microservices via Apache Kafka, exporting daily to AWS S3',
  'Built Kafka consumer processing 60-70 events/min with retry logic and AWS SES failure alerts',
  'Implemented async non-blocking APIs with WebClient; Gzip compression on outbound payloads',
  'Engineered multi-tenant auth: Spring Security, JWT, cookie management, DNS routing (A/CNAME)',
  'Built dynamic dashboard engine with runtime DB switching: PostgreSQL, Snowflake, ClickHouse',
  'Automated AWS Workspace provisioning via SQS to Lambda pipeline',
  'Monitored Lambda, Kubernetes pods, Docker Swarm via Grafana and Kibana',
  'Applied Strategy and Factory design patterns for maintainable, extensible codebases',
  'Managed CI/CD via GitHub Actions and Jenkins; builds with Maven and Gradle',
  'Team Lead: code reviews, sprint planning, on-time client delivery',
];

export const certifications = [
  { title: 'Full Stack Java Developer', issuer: 'JSpiders', period: 'Feb 2024 - Oct 2024' },
  { title: 'Core Java', issuer: 'Internshala', period: '2024' },
  { title: 'Java Programming', issuer: 'Great Learning', period: '2024' },
  { title: 'Salesforce Developer - Trailhead', issuer: 'Learner / Developer Track', period: 'Jul 2023 - Aug 2024' },
];

export const sectionMeta = {
  experience: { label: 'Experience', title: 'Production ownership from design to deployment', icon: Briefcase },
  projects: { label: 'Projects', title: 'Detailed production case studies', icon: Code2 },
  architecture: { label: 'Architecture', title: 'System diagrams for backend credibility', icon: Workflow },
  techStack: { label: 'Tech Stack', title: 'Backend-first stack with supporting frontend basics', icon: Layers },
  resume: { label: 'Resume', title: 'Resume preview and quick download', icon: FileText },
  certifications: { label: 'Certifications', title: 'Compact credential grid', icon: Award },
  contact: { label: 'Contact', title: 'Let us talk about backend systems that need ownership', icon: Mail },
} as const;
