import {
  Award,
  Briefcase,
  Cloud,
  Code2,
  Database,
  FileText,
  GitBranch,
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

export const personal: PersonalInfo & { heroBio: string } = {
  name: 'Gundrathi Lokesh',
  role: 'Software Engineer | Java Full Stack | Distributed Systems',
  location: 'Bengaluru, India',
  email: 'lokeshgundrathi@gmail.com',
  phone: '+91 9347716674',
  linkedin: 'https://www.linkedin.com/in/lokesh-gundrathi-9bab70237/',
  github: 'https://github.com/LokeshGundrathi',
  heroBio:
    'I build production-grade software across the stack — Java backends, Kafka pipelines, React interfaces, cloud automation, databases, and CI/CD delivery that teams can ship and operate with confidence.',
};

export const contactContent = {
  availabilityBadge: 'Available for Software Engineer, Full Stack, and Backend roles',
  body:
    'I work across Java/Spring Boot services, distributed systems, React frontends, AWS cloud automation, SQL and NoSQL databases, monitoring, and CI/CD pipelines. If your team needs an engineer who can own features end-to-end — from APIs and event pipelines to deployment and observability — I would be glad to connect.',
};

export const experienceRole = 'Software Engineer — Java Full Stack & Distributed Systems';

export const navItems = ['Highlights', 'Experience', 'Projects', 'GitHub', 'Tech Stack', 'Resume', 'Contact'];

export const metrics = [
  { label: 'Production systems owned', value: '4' },
  { label: 'Kafka throughput', value: '60-70/min' },
  { label: 'ETL microservices', value: '6' },
  { label: 'Years in production', value: '1.5+' },
];

export const primaryTech = ['Java', 'Spring Boot', 'Kafka', 'React', 'AWS', 'PostgreSQL'];

export type EngineeringHighlight = {
  value: string;
  label: string;
  detail: string;
  icon: LucideIcon;
};

export const engineeringHighlights: EngineeringHighlight[] = [
  {
    value: '60-70/min',
    label: 'Kafka event throughput',
    detail: 'Provider Data Extract pipeline with retry logic, Gzip payloads, and WebClient integration',
    icon: Workflow,
  },
  {
    value: '6',
    label: 'ETL microservices orchestrated',
    detail: 'Daily bulk exports to AWS S3 via Kafka topic choreography across independent services',
    icon: Database,
  },
  {
    value: '4',
    label: 'Production systems owned',
    detail: 'End-to-end ownership from API design and deployment through monitoring and on-call readiness',
    icon: Server,
  },
  {
    value: 'Zero',
    label: 'Silent pipeline failures',
    detail: 'AWS SES alerting on persistent Kafka consumer failures — every retry exhaustion is surfaced',
    icon: ShieldCheck,
  },
  {
    value: 'Multi-tenant',
    label: 'SaaS platform delivered',
    detail: 'JWT auth, runtime DB switching across PostgreSQL, Snowflake, and ClickHouse',
    icon: Cloud,
  },
  {
    value: 'CI/CD',
    label: 'Automated delivery pipelines',
    detail: 'GitHub Actions and Jenkins with Maven and Gradle builds across production services',
    icon: Monitor,
  },
];

export type ProductionOwnershipItem = {
  title: string;
  icon: LucideIcon;
  points: string[];
};

export const productionOwnershipItems: ProductionOwnershipItem[] = [
  {
    title: 'Design to deployment',
    icon: Workflow,
    points: [
      'Owned 4 production microservices from API design through Kubernetes rollout',
      'Applied Strategy and Factory patterns for maintainable, extensible service boundaries',
    ],
  },
  {
    title: 'Kafka pipeline reliability',
    icon: Network,
    points: [
      'Built consumers with retry logic, event replay, and Gzip payload compression',
      'Automated AWS SES failure alerts so persistent errors never go unnoticed',
    ],
  },
  {
    title: 'ETL and data movement',
    icon: Database,
    points: [
      'Orchestrated 6 microservices for daily bulk exports to AWS S3',
      'Separated extraction, transformation, packaging, and upload across Kafka topics',
    ],
  },
  {
    title: 'Cloud automation & multi-tenancy',
    icon: Cloud,
    points: [
      'Engineered multi-tenant auth with Spring Security, JWT, and DNS-based tenant routing',
      'Automated AWS Workspace provisioning via SQS to Lambda pipeline',
    ],
  },
  {
    title: 'Operations & observability',
    icon: Monitor,
    points: [
      'Monitored Kubernetes pods, Docker Swarm, and Lambda via Grafana and Kibana',
      'Managed CI/CD via GitHub Actions and Jenkins for repeatable production releases',
    ],
  },
  {
    title: 'Team leadership',
    icon: Briefcase,
    points: [
      'Led code reviews, sprint planning, and on-time client delivery as team lead',
      'Drove production readiness reviews before every major release',
    ],
  },
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  priority: string;
  skills?: string[];
  primary?: string[];
  familiar?: string[];
  muted?: boolean;
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
    priority: 'Full Stack',
    skills: ['HTML', 'CSS', 'React JS', 'JavaScript', 'TypeScript'],
  },
];

export type Project = {
  title: string;
  description: string;
  businessImpact: string;
  architecture: string[];
  scale: string;
  reliability: string;
  highlight: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: 'Provider Data Extract Pipeline',
    description:
      'Event-driven Kafka pipeline processing provider events with fault-tolerant retry, payload compression, and automated failure alerting.',
    businessImpact: 'Reduced silent data-loss risk by surfacing persistent failures through automated AWS SES alerts.',
    architecture: ['Kafka Consumer', 'Aggregation Layer', 'WebClient API', 'Gzip Payload', 'AWS SES Alert'],
    scale: '60-70 Kafka events/minute across production tenants',
    reliability: 'Retry logic with AWS SES escalation — zero silent failures on persistent errors',
    highlight: '60-70 events/min | Zero silent failures',
    stack: ['Spring Boot', 'Apache Kafka', 'PostgreSQL', 'WebClient', 'AWS SES', 'Kubernetes', 'Grafana'],
  },
  {
    title: 'Provider Data Export (ETL)',
    description:
      'Scheduled ETL pipeline orchestrating 6 microservices via Kafka for daily bulk data exports to AWS S3.',
    businessImpact: 'Automated daily bulk exports and improved operational reliability through Kafka event replay.',
    architecture: ['Scheduler', 'Kafka Topics', '6 Microservices', 'File Packaging', 'AWS S3'],
    scale: '6 independent microservices coordinated daily for multi-GB bulk exports',
    reliability: 'Kafka replay on failure with idempotent packaging and upload stages',
    highlight: '6 microservices | Daily bulk exports',
    stack: ['Spring Boot', 'Apache Kafka', 'AWS S3', 'ETL', 'Kubernetes', 'Grafana'],
  },
  {
    title: 'Foresight AI - Multi-Tenant SaaS',
    description:
      'Secure multi-tenant analytics platform with JWT auth, dynamic DB switching, and automated AWS Workspace provisioning via SQS + Lambda.',
    businessImpact: 'Enabled tenant isolation and reduced manual cloud setup with automated provisioning workflows.',
    architecture: ['Tenant Request', 'JWT + Cookies', 'Runtime DB Switch', 'SQS Queue', 'Lambda Provisioning'],
    scale: 'Multi-tenant SaaS with per-tenant DNS routing and dynamic data source selection',
    reliability: 'Tenant-isolated auth sessions with automated workspace provisioning fallback via SQS',
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
    scale: 'Production REST APIs with scheduled batch jobs and Kubernetes-managed workloads',
    reliability: 'Kibana log monitoring and Kubernetes pod lifecycle management for operational visibility',
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

export type FeaturedRepo = {
  name: string;
  description: string;
  url: string;
  language: string;
  stack: string[];
  highlight: string;
};

export const featuredRepos: FeaturedRepo[] = [
  {
    name: 'portfolio-backend',
    description:
      'Spring Boot CMS API with JWT authentication, Flyway migrations, role-based admin endpoints, and public content APIs.',
    url: 'https://github.com/LokeshGundrathi/portfolio-backend',
    language: 'Java',
    stack: ['Spring Boot', 'PostgreSQL', 'Flyway', 'JWT', 'Spring Security'],
    highlight: 'Java backend architecture showcase',
  },
  {
    name: 'portfolio',
    description:
      'Recruiter-focused portfolio built with React and TypeScript, deployed via GitHub Actions — full-stack delivery from UI to production.',
    url: 'https://github.com/LokeshGundrathi/portfolio',
    language: 'TypeScript',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'GitHub Actions'],
    highlight: 'Full-stack UI + CI/CD deployment',
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
  'Delivered React + TypeScript interfaces and REST integrations across production platforms',
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
  highlights: {
    label: 'Engineering Highlights',
    title: 'Measurable production impact',
    subtitle: 'Quantified outcomes across backend, cloud, data pipelines, and delivery — the first thing a hiring manager should scan.',
    icon: Workflow,
  },
  productionOwnership: {
    label: 'Production Ownership',
    title: 'What I own beyond writing code',
    subtitle: 'End-to-end responsibility across services, pipelines, cloud infrastructure, monitoring, and team delivery.',
    icon: ShieldCheck,
  },
  experience: {
    label: 'Experience',
    title: 'Production ownership from design to deployment',
    subtitle: 'Full-stack delivery with backend depth — APIs, event pipelines, databases, cloud automation, and team leadership.',
    icon: Briefcase,
  },
  projects: {
    label: 'Projects',
    title: 'Detailed production case studies',
    subtitle: 'Each case study shows architecture, scale, reliability, and business impact across backend, cloud, and data systems.',
    icon: Code2,
  },
  architecture: {
    label: 'Architecture',
    title: 'System diagrams across the stack',
    subtitle: 'Compact diagrams that explain production work across backend services, event pipelines, cloud, and monitoring.',
    icon: Workflow,
  },
  github: {
    label: 'Featured Repositories',
    title: 'Open-source work across backend and frontend',
    subtitle: 'Public repositories spanning Java APIs, React delivery, and automated CI/CD pipelines.',
    icon: GitBranch,
  },
  techStack: {
    label: 'Tech Stack',
    title: 'Skills across backend, cloud, data, and delivery',
    subtitle: 'Production experience spanning Java services, distributed systems, databases, AWS, Kubernetes, React, and CI/CD tooling.',
    icon: Layers,
  },
  resume: {
    label: 'Resume',
    title: 'Resume preview and quick download',
    subtitle: 'Recruiters can inspect the resume without leaving the page, then download it in one click.',
    icon: FileText,
  },
  certifications: {
    label: 'Certifications',
    title: 'Compact credential grid',
    subtitle: 'Training credentials across Java, full stack development, and platform skills.',
    icon: Award,
  },
  contact: {
    label: 'Contact',
    title: 'Let us talk about building software that ships to production',
    subtitle:
      'Open to Software Engineer, Java Full Stack, and Backend Engineer roles — backend services, distributed systems, cloud, data, and delivery.',
    icon: Mail,
  },
} as const;
