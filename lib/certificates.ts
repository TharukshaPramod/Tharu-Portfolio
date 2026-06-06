// lib/certificates.ts

export interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  credentialId: string
  skills: string[]
  link: string
  image: string
  category: 'AWS' | 'Azure' | 'AI/ML' | 'Dev & DB'
}

export const certificates: Certificate[] = [
  // ==================== AWS SimuLearn (14 Certificates) ====================
  {
    id: 1,
    title: 'AWS SimuLearn Cloud Practitioner (Final)',
    issuer: 'AWS SimuLearn',
    date: '2024',
    credentialId: 'AWS-SL-CP-01',
    skills: ['AWS Services', 'Cloud Practitioner', 'Cloud Infrastructure'],
    link: '',
    image: '/MY certificates/AWS SimuLearn/AWS SimuLearn Cloud Practitioner(final).jpg',
    category: 'AWS'
  },
  {
    id: 2,
    title: 'Auto-Healing and Scaling Applications',
    issuer: 'AWS SimuLearn',
    date: '2024',
    credentialId: 'AWS-SL-AH-02',
    skills: ['Auto-Scaling', 'Elastic Load Balancing', 'High Availability'],
    link: '',
    image: '/MY certificates/AWS SimuLearn/Auto-Healing and Scaling Applications.jpg',
    category: 'AWS'
  },
  {
    id: 3,
    title: 'Cloud Computing Essentials',
    issuer: 'AWS SimuLearn',
    date: '2024',
    credentialId: 'AWS-SL-CE-03',
    skills: ['Cloud Basics', 'Infrastructure', 'Global Reach'],
    link: '',
    image: '/MY certificates/AWS SimuLearn/Cloud computing essentials.jpg',
    category: 'AWS'
  },
  {
    id: 4,
    title: 'Cloud Economics',
    issuer: 'AWS SimuLearn',
    date: '2024',
    credentialId: 'AWS-SL-EC-04',
    skills: ['TCO Analysis', 'Cost Management', 'Pricing Models'],
    link: '',
    image: '/MY certificates/AWS SimuLearn/Cloud Economics.jpg',
    category: 'AWS'
  },
  {
    id: 5,
    title: 'Cloud First Steps',
    issuer: 'AWS SimuLearn',
    date: '2024',
    credentialId: 'AWS-SL-FS-05',
    skills: ['Cloud Deployment', 'IAM Basics', 'AWS Console'],
    link: '',
    image: '/MY certificates/AWS SimuLearn/cloud First steps.jpg',
    category: 'AWS'
  },
  {
    id: 6,
    title: 'Computing Solutions',
    issuer: 'AWS SimuLearn',
    date: '2024',
    credentialId: 'AWS-SL-CS-06',
    skills: ['AWS EC2', 'AWS Lambda', 'Serverless'],
    link: '',
    image: '/MY certificates/AWS SimuLearn/computing solutions.jpg',
    category: 'AWS'
  },
  {
    id: 7,
    title: 'Connecting VPCs',
    issuer: 'AWS SimuLearn',
    date: '2024',
    credentialId: 'AWS-SL-VPC-07',
    skills: ['VPC Peering', 'Route Tables', 'Network Security'],
    link: '',
    image: '/MY certificates/AWS SimuLearn/Connecting VPCs.jpg',
    category: 'AWS'
  },
  {
    id: 8,
    title: 'Core Security Concepts',
    issuer: 'AWS SimuLearn',
    date: '2024',
    credentialId: 'AWS-SL-SEC-08',
    skills: ['AWS IAM', 'Security Groups', 'Encryption'],
    link: '',
    image: '/MY certificates/AWS SimuLearn/Core Security Concepts.jpg',
    category: 'AWS'
  },
  {
    id: 9,
    title: 'Databases in Practice',
    issuer: 'AWS SimuLearn',
    date: '2024',
    credentialId: 'AWS-SL-DB-09',
    skills: ['Amazon RDS', 'Database Scaling', 'SQL on AWS'],
    link: '',
    image: '/MY certificates/AWS SimuLearn/Databases in Practice.jpg',
    category: 'AWS'
  },
  {
    id: 10,
    title: 'File Systems in the Cloud',
    issuer: 'AWS SimuLearn',
    date: '2024',
    credentialId: 'AWS-SL-FS-10',
    skills: ['Amazon EFS', 'Shared Storage', 'NFS Mounts'],
    link: '',
    image: '/MY certificates/AWS SimuLearn/File Systems in the Cloud.jpg',
    category: 'AWS'
  },
  {
    id: 11,
    title: 'First NoSQL Database',
    issuer: 'AWS SimuLearn',
    date: '2024',
    credentialId: 'AWS-SL-NOSQL-11',
    skills: ['Amazon DynamoDB', 'NoSQL Design', 'Partition Keys'],
    link: '',
    image: '/MY certificates/AWS SimuLearn/First NoSQL Database.jpg',
    category: 'AWS'
  },
  {
    id: 12,
    title: 'Highly Available Web Applications',
    issuer: 'AWS SimuLearn',
    date: '2024',
    credentialId: 'AWS-SL-HA-12',
    skills: ['Fault Tolerance', 'Load Balancers', 'Multi-AZ Deployments'],
    link: '',
    image: '/MY certificates/AWS SimuLearn/Highly Available Web Applications.jpg',
    category: 'AWS'
  },
  {
    id: 13,
    title: 'Introduction to Amazon Simple Storage Service (S3)',
    issuer: 'AWS SimuLearn',
    date: '2024',
    credentialId: 'AWS-SL-S3-13',
    skills: ['Amazon S3', 'Object Storage', 'Bucket Policies'],
    link: '',
    image: '/MY certificates/AWS SimuLearn/Introduction to Amazon Simple Storage Service (S3).jpg',
    category: 'AWS'
  },
  {
    id: 14,
    title: 'Networking Concepts',
    issuer: 'AWS SimuLearn',
    date: '2024',
    credentialId: 'AWS-SL-NET-14',
    skills: ['Subnets', 'Gateways', 'CIDR Blocks', 'DNS'],
    link: '',
    image: '/MY certificates/AWS SimuLearn/Networking Concepts.jpg',
    category: 'AWS'
  },

  // ==================== Azure (8 Certificates) ====================
  {
    id: 15,
    title: 'Introduction to Azure Virtual Machines',
    issuer: 'Microsoft Azure',
    date: '2024',
    credentialId: 'AZ-VM-01',
    skills: ['Azure Compute', 'IaaS', 'Virtual Machines'],
    link: '',
    image: '/MY certificates/Azure/Introduction to Azure virtual machines.jpg',
    category: 'Azure'
  },
  {
    id: 16,
    title: 'Configure Azure Blob Storage',
    issuer: 'Microsoft Azure',
    date: '2024',
    credentialId: 'AZ-BLOB-02',
    skills: ['Blob Storage', 'Access Tiers', 'Lifecycle Management'],
    link: '',
    image: '/MY certificates/Azure/configure Azure Blob storage.jpg',
    category: 'Azure'
  },
  {
    id: 17,
    title: 'Configure Virtual Machine Availability',
    issuer: 'Microsoft Azure',
    date: '2024',
    credentialId: 'AZ-VMA-03',
    skills: ['Availability Sets', 'Availability Zones', 'Fault Domains'],
    link: '',
    image: '/MY certificates/Azure/Configure virtual machine availability.jpg',
    category: 'Azure'
  },
  {
    id: 18,
    title: 'Configure Virtual Networks',
    issuer: 'Microsoft Azure',
    date: '2024',
    credentialId: 'AZ-VNET-04',
    skills: ['Azure VNet', 'Subnet Routing', 'NSG Configuration'],
    link: '',
    image: '/MY certificates/Azure/Configure virtual networks.jpg',
    category: 'Azure'
  },
  {
    id: 19,
    title: 'Describe Azure Identity, Access, and Security',
    issuer: 'Microsoft Azure',
    date: '2024',
    credentialId: 'AZ-SEC-05',
    skills: ['Azure Active Directory', 'RBAC', 'Zero Trust'],
    link: '',
    image: '/MY certificates/Azure/Describe Azure identity, access, and security.jpg',
    category: 'Azure'
  },
  {
    id: 20,
    title: 'Explore Relational Database Services in Azure',
    issuer: 'Microsoft Azure',
    date: '2024',
    credentialId: 'AZ-RDS-06',
    skills: ['Azure SQL Database', 'PaaS Database', 'SQL Server'],
    link: '',
    image: '/MY certificates/Azure/Explore relational database services in Azure.jpg',
    category: 'Azure'
  },
  {
    id: 21,
    title: 'Improve Application Scalability and Resiliency with Azure Load Balancer',
    issuer: 'Microsoft Azure',
    date: '2024',
    credentialId: 'AZ-LB-07',
    skills: ['Azure Load Balancer', 'High Availability', 'Traffic Distribution'],
    link: '',
    image: '/MY certificates/Azure/Improve application scalability and resiliency by using Azure Load Balancer.jpg',
    category: 'Azure'
  },
  {
    id: 22,
    title: 'Add and Size Disks in Azure Virtual Machines',
    issuer: 'Microsoft Azure',
    date: '2024',
    credentialId: 'AZ-DISK-08',
    skills: ['Managed Disks', 'Disk Resizing', 'Storage Performance'],
    link: '',
    image: '/MY certificates/Azure/Add and size disks in Azure virtual  machines.jpg',
    category: 'Azure'
  },

  // ==================== SimpliLearn AI/ML & Data Science (6 Certificates) ====================
  {
    id: 23,
    title: 'Machine Learning Using Python',
    issuer: 'Simplilearn',
    date: '2023',
    credentialId: 'SL-MLP-01',
    skills: ['Supervised Learning', 'Python Scikit-Learn', 'Regression & Classification'],
    link: '',
    image: '/MY certificates/SimpliLearn/Machine Learning Using Python.jpg',
    category: 'AI/ML'
  },
  {
    id: 24,
    title: 'Generative AI for Beginners',
    issuer: 'Simplilearn',
    date: '2024',
    credentialId: 'SL-GENAI-02',
    skills: ['Generative AI', 'Large Language Models', 'Prompt Design'],
    link: '',
    image: '/MY certificates/SimpliLearn/Generative AI for Beginners.jpg',
    category: 'AI/ML'
  },
  {
    id: 25,
    title: 'AI & ML Projects',
    issuer: 'Simplilearn',
    date: '2024',
    credentialId: 'SL-AIP-03',
    skills: ['AI Deployment', 'Project Pipelines', 'Model Validation'],
    link: '',
    image: '/MY certificates/SimpliLearn/AI ML Projects.jpg',
    category: 'AI/ML'
  },
  {
    id: 26,
    title: 'Introduction to Applied Data Science with Python',
    issuer: 'Simplilearn',
    date: '2023',
    credentialId: 'SL-ADS-04',
    skills: ['Data Science', 'Python', 'Pandas & NumPy'],
    link: '',
    image: '/MY certificates/SimpliLearn/introduction to applied data science with python.jpg',
    category: 'AI/ML'
  },
  {
    id: 27,
    title: 'Introduction to Data Analysis',
    issuer: 'Simplilearn',
    date: '2023',
    credentialId: 'SL-DA-05',
    skills: ['Data Profiling', 'Data Visualization', 'Statistics'],
    link: '',
    image: '/MY certificates/SimpliLearn/introduction to Data analysis.jpg',
    category: 'AI/ML'
  },
  {
    id: 28,
    title: 'Introduction to Machine Learning with R',
    issuer: 'Simplilearn',
    date: '2023',
    credentialId: 'SL-MLR-06',
    skills: ['R Programming', 'Machine Learning', 'Statistical Modeling'],
    link: '',
    image: '/MY certificates/SimpliLearn/Introduction to Machine Learning with R.jpg',
    category: 'AI/ML'
  },

  // ==================== Software Development & Databases (4 Certificates) ====================
  {
    id: 29,
    title: 'Getting Started with Full Stack Java Development',
    issuer: 'Simplilearn',
    date: '2023',
    credentialId: 'SL-JAVA-01',
    skills: ['Java', 'Backend Dev', 'Spring Boot Basics'],
    link: '',
    image: '/MY certificates/SimpliLearn/Getting Started with Full Stack Java Development.jpg',
    category: 'Dev & DB'
  },
  {
    id: 30,
    title: 'Introduction to Cyber Security',
    issuer: 'Simplilearn',
    date: '2023',
    credentialId: 'SL-CYB-02',
    skills: ['Cyber Security', 'Network Protection', 'Security Principles'],
    link: '',
    image: '/MY certificates/SimpliLearn/Introduction to Cyber Security.jpg',
    category: 'Dev & DB'
  },
  {
    id: 31,
    title: 'Getting Started with MongoDB Atlas',
    issuer: 'MongoDB / GitHub',
    date: '2024',
    credentialId: 'MG-ATLAS-03',
    skills: ['MongoDB Atlas', 'Cloud Database', 'NoSQL Storage'],
    link: '',
    image: '/MY certificates/github student developer/Getting Started with MongoDB Atlas.jpg',
    category: 'Dev & DB'
  },
  {
    id: 32,
    title: 'From Relational Model/SQL to MongoDB Document Model',
    issuer: 'MongoDB / GitHub',
    date: '2024',
    credentialId: 'MG-SQL2MG-04',
    skills: ['Document Model', 'Schema Migration', 'MongoDB', 'SQL'],
    link: '',
    image: '/MY certificates/github student developer/from-relational-model-sql-to-mongodb-s-document-mod.jpg',
    category: 'Dev & DB'
  }
]