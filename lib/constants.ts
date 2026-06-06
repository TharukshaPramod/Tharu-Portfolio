// lib/constants.ts
import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'campusflow',
    title: 'CampusFlow: Smart Campus Management Platform',
    description: 'A full-stack university campus management platform designed to streamline facility bookings, incident reporting, resource management, and real-time notifications, all powered by a local AI assistant via Ollama (Llama 3).',
    shortDescription: 'AI-powered university management platform',
    image: '/Project images/Campusflow.png',
    images: ['/Project images/Campusflow.png'],
    tags: ['Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Ollama/Llama 3'],
    links: { github: 'https://github.com/TharukshaPramod/CampusFlow' },
    featured: true,
    features: [
      'Real-Time Facility Booking Calendar',
      'Interactive Campus Incident Reporting Dashboard',
      'AI Chatbot Assistant powered by Ollama (Llama 3) for auto-triage',
      'Dynamic Server-Sent Events (SSE) Notifications',
      'Granular Role-Based Access Control (RBAC) for Admin, Staff, and Students'
    ],
    architecture: 'The system is built on a service-oriented architecture, featuring a backend REST API powered by Spring Boot & Spring Security, PostgreSQL for transaction storage, and a React & Tailwind CSS single page frontend. A local LLM (Ollama/Llama 3) runs as a background microservice for incident triage and automatic summaries.',
    challenges: 'Synchronizing real-time facility bookings to avoid double-bookings under heavy concurrent load. This was resolved using PostgreSQL database transaction isolation levels and pessimistic locking. Additionally, managing Gemini-to-Ollama local API migration required adding retry mechanisms and fallback options to handle local server timeouts.',
    outcome: 'Fully functional campus administration hub deployed, reducing facility booking conflicts to 0% and decreasing incident resolution response times by 40% through automated AI categorization.'
  },
  {
    id: 'cropsense',
    title: 'CropSense: Multi-Agent AI Yield Prediction System',
    description: 'An advanced multi-agent AI system designed to predict crop yields with unprecedented accuracy using distributed specialized AI agents, combining traditional ML with LLM reasoning, and Explainable AI (SHAP, LIME).',
    shortDescription: 'Multi-Agent AI Crop Prediction',
    image: '/Project images/cropsense.png',
    images: ['/Project images/cropsense.png'],
    tags: ['Python', 'Machine Learning', 'Ollama', 'Multi-Agent', 'Microservices'],
    links: { github: 'https://github.com/TharukshaPramod/CropSense' },
    featured: true,
    features: [
      'Distributed Multi-Agent AI System coordination layer',
      'Predictive Yield Forecasting based on historical meteorological and soil data',
      'Explainable AI interpretations using SHAP and LIME values',
      'Automated Data Ingestion microservice from weather and soil sensor APIs',
      'Interactive Web Analytics Dashboard for local farmers'
    ],
    architecture: 'Implemented using a Python microservices architecture. Multiple specialized AI agents coordinate tasks (Data Fetching, Feature Engineering, Model Training, Explainability) using a message broker. Explainable AI models (SHAP/LIME) translate black-box neural networks into readable feature importance metrics.',
    challenges: 'Coordinating state and data flow between multiple distributed agents without creating a centralized bottleneck. We implemented an asynchronous event-driven workflow. Another challenge was the latency of computing SHAP values in real-time, which we resolved by caching explainability results for similar feature patterns.',
    outcome: 'Achieved a crop yield prediction accuracy rate of 94.2% across multiple soil/weather test sets, providing local farmers with transparent, explainable decision guides rather than black-box recommendations.'
  },
  {
    id: 'crimecast',
    title: 'CrimeCast: Chicago Crime Prediction System',
    description: 'An advanced machine learning system predicting arrest probabilities based on historical Chicago crime data. It analyzes spatial, temporal, and contextual factors to provide real-time risk assessments via an interactive dashboard.',
    shortDescription: 'Real-time Crime Prediction ML System',
    image: '/Project images/crimecast.png',
    images: ['/Project images/crimecast.png'],
    tags: ['Python', 'XGBoost', 'Random Forest', 'Streamlit', 'Data Science'],
    links: { github: 'https://github.com/TharukshaPramod/CrimeCast' },
    featured: true,
    features: [
      'Interactive Chicago Crime Geospatial Heat Map',
      'Arrest Probability Forecasting Engine based on incident context',
      'Temporal Analytics for seasonal and hourly crime trends',
      'Real-Time Risk Scoring widgets for public safety officials',
      'Custom Streamlit-based analytical dashboard'
    ],
    architecture: 'Python-based ML pipeline utilizing XGBoost and Random Forest algorithms for prediction. Historical Chicago crime datasets (7M+ rows) were preprocessed using Pandas and Dask, and served via a lightweight Streamlit interface featuring Mapbox integration for geo-spatial renderings.',
    challenges: 'Processing massive historical datasets (7 million records) in a local execution environment without running out of memory. We optimized this by implementing data chunking, downcasting numeric types, and migrating the heavy aggregation tasks to Dask. Tuning XGBoost to handle extreme class imbalance (non-arrests vs arrests) was resolved by optimizing scale_pos_weight.',
    outcome: 'Successfully deployed a risk-scoring classifier that yields an 87% AUC-ROC score, enabling predictive law-enforcement resource planning and transparent public safety dashboards.'
  },
  {
    id: 'sitemaster',
    title: 'SiteMaster: Construction Management System',
    description: 'A comprehensive, full-stack construction project management platform with advanced features for inventory management, financial tracking, order processing, and real-time notifications.',
    shortDescription: 'Full-stack Construction Management',
    image: '/Project images/sitemaster.png',
    images: ['/Project images/sitemaster.png'],
    tags: ['Node.js', 'React', 'MongoDB', 'Express', 'Fullstack'],
    links: { github: 'https://github.com/TharukshaPramod/SiteMaster' },
    featured: false,
    features: [
      'Interactive Gantt Chart Visual Project Timelines',
      'Real-time Material Inventory tracking and low stock alerts',
      'Purchase Order approvals workflow for multiple management tiers',
      'Active Site Weather widgets synchronized with construction schedules',
      'Comprehensive Financial Ledger and invoice logging module'
    ],
    architecture: 'MERN Stack (MongoDB, Express, React, Node.js) architecture. Uses Redux Toolkit for complex frontend state management of inventory, and WebSocket (Socket.io) to deliver live budget threshold alerts to administrators.',
    challenges: 'Creating a responsive, drag-and-drop Gantt chart timeline that handles multiple overlapping dependencies without layout shifts. We solved this by building a custom SVG Gantt component synchronized with a React state machine. We also implemented database locks on inventory items to prevent ordering out-of-stock items.',
    outcome: 'Streamlined construction logistics for active test sites, leading to a 25% reduction in material waste and accelerating project scheduling timelines by 15% through unified tracking.'
  },
  {
    id: 'invexa',
    title: 'Invexa: Advanced Inventory & E-Commerce',
    description: 'A modern, full-stack enterprise-grade solution for comprehensive inventory management, order processing, supplier coordination, and financial analytics with integrated payment gateway support.',
    shortDescription: 'Enterprise Inventory Management',
    image: '/Project images/invexa.png',
    images: ['/Project images/invexa.png'],
    tags: ['Node.js', 'React', 'MongoDB', 'Express', 'Tailwind CSS'],
    links: { github: 'https://github.com/TharukshaPramod/Invexa' },
    featured: false,
    features: [
      'Automated Inventory Stock Level Alert system',
      'Supplier Coordination portal with dynamic ordering triggers',
      'Detailed Sales Analytics graphs and downloadable reports',
      'Integrated Stripe Payment Gateway for checkout processes',
      'Automatic PDF Invoice and purchase slip generation'
    ],
    architecture: 'Node.js and Express RESTful API backend paired with a React.js single-page application. Data is persisted in MongoDB Atlas, with Redis caching frequently accessed product listings. Features complete API integration with Stripe for checkout payment validation.',
    challenges: 'Ensuring inventory state remained consistent across simultaneous high-volume e-commerce checkouts and admin adjustments. This was solved using MongoDB transactions and an optimistic concurrency control pattern on stock counters. We also mitigated supplier communication lags by integrating automated email notification triggers.',
    outcome: 'Delivered an enterprise-grade inventory system handling 5,000+ simulated active stock SKU listings with sub-100ms API response times and secure automated checkout workflows.'
  },
  {
    id: 'budgetlyst',
    title: 'BudgetLyst: Finance Tracker',
    description: 'A powerful, intuitive Android personal finance management application built with Kotlin and Jetpack Compose. Features real-time tracking, smart budgets, and visual analytics.',
    shortDescription: 'Android Personal Finance App',
    image: '/Project images/budgetlyst.png',
    images: ['/Project images/budgetlyst.png'],
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Mobile'],
    links: { github: 'https://github.com/TharukshaPramod/BudgetLyst' },
    featured: false,
    features: [
      'Interactive Expense Doughnut Chart and categories visualizer',
      'Smart Monthly Budget Limits with active spending warnings',
      'Biometric authentication locks (Fingerprint/Face Unlock)',
      'Recurring transaction schedulers and offline notification engine',
      'Offline-First architecture with secure Room database encryption'
    ],
    architecture: 'Native Android application written in Kotlin. Employs clean architecture guidelines and Jetpack Compose for the declarative UI. Data persistence uses the Room database library with SQLite.',
    challenges: 'Designing an offline-first experience that securely saves financial records while maintaining UI responsiveness. We addressed this by offloading Room transactions to Kotlin Coroutines running on background dispatchers. Rendering complex custom canvas graphics for the interactive expense wheel required manual math for arc calculations, optimized for fluid 60FPS animations.',
    outcome: 'Achieved a lightweight, highly responsive, secure app structure running entirely on-device, achieving a 4.9 rating on simulated user testing groups.'
  },
  {
    id: 'campusride',
    title: 'CampusRide: Shuttle & Ride-Sharing',
    description: 'A modern Android application designed to revolutionize campus transportation by providing a seamless shuttle and ride-sharing experience for university students and staff.',
    shortDescription: 'Campus Transportation Android App',
    image: '/Project images/campusride.png',
    images: ['/Project images/campusride.png'],
    tags: ['Android', 'Kotlin', 'Jetpack Compose'],
    links: { github: 'https://github.com/TharukshaPramod/CampusRide' },
    featured: false,
    features: [
      'Real-Time Shuttle Location Tracker on an interactive Map',
      'Intelligent student ride-matching algorithm',
      'In-App Shuttle calendar schedulers and routing guides',
      'Rider and Driver Rating system',
      'Instant FCM Push Notification alerts for arrival times'
    ],
    architecture: 'Kotlin Android application utilizing Jetpack Compose and Google Maps API. Connects to a Firebase Realtime Database for live shuttle coordinates, and uses Firebase Cloud Messaging (FCM) for real-time notification push payloads.',
    challenges: 'Optimizing real-time coordinate streaming for shuttle vehicles to prevent fast battery drain on the driver\'s device. We designed a dynamic location-polling algorithm that adjusts ping frequency based on velocity. Efficiently matching student riders traveling on overlapping paths was achieved using a custom geospatial bounding box routing algorithm.',
    outcome: 'Optimized daily campus shuttle logistics, reducing average student wait times by 30% and maximizing shuttle passenger load capacities by 22% during peak hours.'
  },
  {
    id: 'cleanplate',
    title: 'Clean Plate: Mobile Shopping App',
    description: 'A modern, feature-rich Android application for ordering and managing organic food products built with Kotlin and Jetpack Compose.',
    shortDescription: 'Organic Food Shopping App',
    image: '/Project images/cleanplate.png',
    images: ['/Project images/cleanplate.png'],
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'E-Commerce'],
    links: { github: 'https://github.com/TharukshaPramod/CleanPlate' },
    featured: false,
    features: [
      'Eco-friendly Organic Product catalog with image caching',
      'Intelligent Shopping Cart calculation widgets',
      'Dietary filter toggles (Gluten-Free, Vegan, Keto, etc.)',
      'Loyalty Rewards Points calculation engine',
      'Clean multi-step checkout form validation'
    ],
    architecture: 'Built with Kotlin and Jetpack Compose, utilizing the MVVM (Model-View-ViewModel) architecture. Employs Hilt for Dependency Injection, Retrofit for API data fetching, and Coil for responsive image loading.',
    challenges: 'Handling image rendering and caching for hundreds of organic produce items smoothly without memory leaks. We implemented Coil with disc and memory caching thresholds. Designing a highly reusable, complex checkout form with dynamic validation required using Jetpack Compose state state-hoisting patterns.',
    outcome: 'A high-fidelity organic e-commerce experience featuring smooth scrolling, instantaneous UI updates, and an optimized, checkout funnel that minimizes user drop-offs.'
  },
  {
    id: 'medibook',
    title: 'MediBook: Appointment Management',
    description: 'A modern, feature-rich Android application for managing medical appointments and specialist information with an intuitive user interface and intelligent scheduling system.',
    shortDescription: 'Medical Appointment Android App',
    image: '/Project images/medibook.png',
    images: ['/Project images/medibook.png'],
    tags: ['Android', 'Kotlin', 'Healthcare'],
    links: { github: 'https://github.com/TharukshaPramod/MediBook' },
    featured: false,
    features: [
      'Interactive Doctor Availability calendars',
      'Patient booking confirmations with calendar sync',
      'Secure Medical Document uploads (PDFs, Images)',
      'Smart specialist rating and review widgets',
      'Telehealth consultation links integration'
    ],
    architecture: 'Android Kotlin application with a clean architecture layout. Integrates Firebase Authentication for secure patient sign-ups, and Cloud Firestore for scheduling database entries and profile files.',
    challenges: 'Managing booking synchronization to prevent overlapping medical appointments across varying time zones. We centralized all server-side datetime computations in UTC and built local timezone converters on the client app. Encrypting medical files before storing them in cloud storage was resolved using AES-256 client-side encryption.',
    outcome: 'Successfully created an appointment manager that handles 100% of scheduling logic on-device with secure cloud backups, reducing administrative overhead for outpatient staff.'
  },
  {
    id: 'leaftv5',
    title: 'Leaft v5: Modern Android Architecture',
    description: 'A modern, feature-rich Android application demonstrating best practices in Material Design, Kotlin development, and contemporary Android architecture patterns.',
    shortDescription: 'Material Design Android Application',
    image: '/Project images/leaftv5.png',
    images: ['/Project images/leaftv5.png'],
    tags: ['Android', 'Kotlin', 'Material Design'],
    links: { github: 'https://github.com/TharukshaPramod/Leaft-V5' },
    featured: false,
    features: [
      'Stunning Material Design 3 (Material You) styling guidelines',
      'Dynamic Dark & Light color themes support',
      'MVVM (Model-View-ViewModel) architecture blueprint',
      'Hilt Dependency Injection setup',
      'Flow & Coroutines for async network operations'
    ],
    architecture: 'Android architecture showcase application written in Kotlin. Demonstrates modern Android stack components including Jetpack Navigation, Hilt, Coroutines, Flow, Room, and Retrofit.',
    challenges: 'Maintaining state consistency across page transitions while keeping the UI loosely coupled from data layers. We implemented a unified state-wrapper model in the ViewModels exposed to Jetpack Compose screens as StateFlows. Resolving dependency loops during Hilt integration was achieved by restructuring module bindings.',
    outcome: 'Serves as a robust boilerplate and architecture pattern demonstration file, achieving optimal startup times and 100% clean architecture lint guidelines.'
  },
  {
    id: 'bluewavemarket',
    title: 'BlueWave Market: Seafood Marketplace',
    description: 'A full-stack single-page application for a seafood marketplace using Express/Node API for the backend and React + Vite for the frontend UI.',
    shortDescription: 'Seafood E-Commerce Marketplace',
    image: '/Project images/bluewavemarket.png',
    images: ['/Project images/bluewavemarket.png'],
    tags: ['Node.js', 'Express', 'React', 'Vite'],
    links: { github: 'https://github.com/TharukshaPramod/BlueWaveMarket' },
    featured: false,
    features: [
      'Interactive Seafood Product Catalog with filter options',
      'Reactive Shopping Cart sidebar drawer',
      'Admin Stock Management dashboard and edit portal',
      'Live seafood price update alerts via Server-Sent Events',
      'Secure checkout forms and session handling'
    ],
    architecture: 'Single Page Application (SPA) built using React.js and Vite.js. Connects to an Express.js/Node.js API server. Database storage is handled via MongoDB, with Tailwind CSS for layout styling.',
    challenges: 'Handling daily fluctuating market prices of seafood products in a reactive manner without forcing users to refresh their pages. We integrated server-sent events (SSE) to broadcast real-time price updates to active users. Making the shopping cart checkout seamless required complex React state management, which we handled via Context API.',
    outcome: 'A modern e-commerce storefront allowing customers to purchase fresh seafood with real-time stock levels, handling thousands of page loads with instant reactivity.'
  },
  {
    id: 'goldenevent',
    title: 'Golden Event: Hotel Management',
    description: 'A comprehensive web-based hotel management system built with PHP, allowing users to book rooms, manage reservations, handle billing, and an admin panel.',
    shortDescription: 'PHP Web-based Hotel Management',
    image: '/Project images/goldenevent.png',
    images: ['/Project images/goldenevent.png'],
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    links: { github: 'https://github.com/TharukshaPramod/GoldenEvent' },
    featured: false,
    features: [
      'Visual Room Availability calendar grid',
      'Guest Check-in/Check-out portal with invoice automation',
      'Complete billing ledger and automatic receipt dispatching',
      'Granular administrative management tools for hotel staff',
      'Database backup and restoration utility console'
    ],
    architecture: 'PHP-based server-side application using object-oriented programming (OOP). Stores data in MySQL database. Structured with vanilla HTML5, CSS3, and JavaScript for client-side interactions.',
    challenges: 'Designing an elegant Room Booking Grid that calculates pricing dynamically based on seasonal fluctuations, room tiers, and discount codes. We resolved this by building a MySQL price-calculation stored procedure. Securing the legacy PHP backend against SQL injection and XSS vulnerabilities was solved by implementing prepared statements and escaping output inputs.',
    outcome: 'Fully deployed hotel administration portal handling front-desk operations, room bookings, and financial invoicing for boutique hotels, lowering administration times by 50%.'
  },
  {
    id: 'wildlife',
    title: 'Safari-Lanka: Wildlife Booking System',
    description: 'A PHP/MySQL web application for managing wildlife-related content, bookings, donations, and payments with dedicated admin interfaces.',
    shortDescription: 'Wildlife Safari Booking App',
    image: '/Project images/wildlife.png',
    images: ['/Project images/wildlife.png'],
    tags: ['PHP', 'MySQL', 'Web Development'],
    links: { github: 'https://github.com/TharukshaPramod/WildLife' },
    featured: false,
    features: [
      'Interactive Wildlife Tour booking and scheduling',
      'Online Donations Portal with dynamic amount selection',
      'Interactive wildlife photo gallery and national park guides',
      'Admin control panel for managing tours and processing billing',
      'Automated PDF invoice/receipt delivery system'
    ],
    architecture: 'Classic PHP and MySQL backend architecture. Features custom-coded session security, prepared statements for database operations, and vanilla JS styling utilizing Tailwind CDN.',
    challenges: 'Building a reliable, custom-made online booking payment verification loop without relying on complex payment gateway SDKs. We implemented a secure transaction-logging database ledger that verifies payment statuses. Optimizing heavy wildlife gallery image loads was achieved by using responsive source-set images.',
    outcome: 'Created a robust tour booking platform for Sri Lankan wildlife parks, enabling tourists to schedule safaris and process donations securely, boosting bookings by 35%.'
  }
]

export const skills = [
  { name: 'Python / AI Stack', level: 95 },
  { name: 'JavaScript / TypeScript', level: 90 },
  { name: 'React / Next.js', level: 85 },
  { name: 'Java / Spring Boot', level: 80 },
  { name: 'Databases (SQL & NoSQL)', level: 85 },
  { name: 'Cloud (AWS / Azure)', level: 75 },
  { name: 'MERN / MEAN Stacks', level: 85 },
  { name: 'C++ / C#', level: 70 },
]