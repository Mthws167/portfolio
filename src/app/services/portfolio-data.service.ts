import { Injectable } from '@angular/core';
import { Project, Experience, SkillCategory, TimelineEvent } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  readonly personalInfo = {
    name: 'Matheus Henrique de Oliveira',
    title: 'Software Engineer',
    subtitle: 'Backend • Full Stack • Distributed Systems • IoT • AI',
    location: 'Brazil | Remote',
    email: 'contact via LinkedIn',
    linkedin: 'https://www.linkedin.com/in/mthws167/',
    github: 'https://github.com/Mthws167',
    about: `Software Engineer with more than 3 years of experience in full stack development, working at NextAge Sistemas on AgTech projects (IoT platforms for agriculture) and Digital Health (medical teleconsultation and healthcare provider systems). I work with Java/Spring Boot and Node.js backends, React/Angular/Vue frontends, Flutter mobile applications, and Docker/AWS infrastructure. I hold a degree in Software Engineering from IFPR and recent certifications in large-scale systems architecture and cloud AI fundamentals (AWS).

  I currently focus my studies on applied artificial intelligence, distributed systems, and modern backend engineering.`
  };

  readonly projects: Project[] = [
    {
      id: 'isobar',
      title: 'isobar — Bands API',
      description: 'Spring Boot REST API that wraps an external bands/albums service, adding a caching layer and clean search endpoints.',
      problem: 'Directly consuming an external bands API would couple the application to a third-party data structure and create repeated network costs.',
      solution: 'Intermediate Spring Boot API that standardizes endpoints, applies caching (Caffeine), and provides name search, pagination, and detail views.',
      technologies: ['Java 21', 'Spring Boot 3.3', 'WebClient', 'Caffeine', 'JUnit 5', 'MockMvc', 'Maven'],
      highlights: [
        'Caching layer to optimize calls to external services',
        'Layered architecture (controller → service → client)',
        'Centralized error handling with @RestControllerAdvice',
        'Java records for immutable modeling',
        'Integration tests with MockMvc'
      ],
      githubUrl: 'https://github.com/Mthws167/isobar',
      status: 'Portfolio Project',
      category: 'backend'
    },
    {
      id: 'library',
      title: 'Library Management System',
      description: 'Full stack library management system with a Spring Boot REST API and Angular 17 frontend.',
      problem: 'Libraries need a simple way to manage book and user records and the loan lifecycle.',
      solution: 'Spring Boot backend with MySQL plus an Angular frontend with complete CRUD for users, books, and loans.',
      technologies: ['Spring Boot', 'MySQL', 'Angular 17', 'TypeScript', 'REST API'],
      highlights: [
        'Complete REST API for library management',
        'Modern Angular 17 frontend',
        'Domain modeling (users, books, loans)',
        'Clear separation between backend and frontend'
      ],
      githubUrl: 'https://github.com/Mthws167/library-management-api',
      status: 'Portfolio Project',
      category: 'fullstack'
    },
    {
      id: 'produtos',
      title: 'Product Management',
      description: 'Full stack CRUD with architectural decision documentation and root cause analysis of an incident (technical test).',
      problem: 'Need for a product management system with best practices and technical documentation.',
      solution: 'Full stack application with FastAPI backend and React/TypeScript frontend, including incident analysis.',
      technologies: ['FastAPI', 'SQLAlchemy', 'React', 'TypeScript', 'SQLite'],
      highlights: [
        'Architectural decision documentation',
        'Incident root cause analysis',
        'Complete and well-structured CRUD',
        'Modern Python + React stack'
      ],
      githubUrl: 'https://github.com/Mthws167/Gerenciamento-de-Produtos-Teste-Tecnico',
      status: 'Technical Test',
      category: 'fullstack'
    },
    {
      id: 'loja',
      title: 'Online Store',
      description: 'Full stack e-commerce system developed iteratively, covering the shopping lifecycle.',
      problem: 'Create a functional e-commerce solution with a robust backend and interactive frontend.',
      solution: 'Full stack application with Java/Maven backend and JavaScript frontend, developed iteratively.',
      technologies: ['Java', 'Maven', 'JavaScript', 'HTML/CSS'],
      highlights: [
        'Iterative and incremental development',
        'Complete e-commerce flow',
        'Structured Java backend with Maven'
      ],
      githubUrl: 'https://github.com/Mthws167/Loja-Virtual',
      status: 'Portfolio Project',
      category: 'fullstack'
    },
    {
      id: 'tourmotos',
      title: 'TourMotos',
      description: 'Full stack tourism and motorcycle rental system with UML modeling and a well-defined architecture.',
      problem: 'Platform for managing motorcycle rentals and tourist itineraries.',
      solution: 'Complete system with Spring Boot backend and Angular frontend, including UML modeling.',
      technologies: ['Angular', 'Spring Boot', 'UML'],
      highlights: [
        'Complete UML modeling',
        'Angular + Spring full stack architecture',
        'Tourism and rental domain'
      ],
      githubUrl: 'https://github.com/Mthws167/TourMotos',
      status: 'Portfolio Project',
      category: 'fullstack'
    }
  ];

  readonly experience: Experience = {
    id: 'nextage',
    company: 'NextAge Sistemas',
    role: 'Software Engineer / Full Stack Developer',
    period: 'September 2022 – May 2026',
    location: 'Remote',
    projects: [
      {
        name: 'AgTech IoT Platform (Smart Farms)',
        domain: 'Agriculture / IoT',
        description: 'System for automating and managing agricultural operations using IoT and real-time data.',
        technologies: ['Flutter', 'Dart', 'Node.js', 'TypeScript', 'Vue.js', 'Python', 'Docker', 'PostgreSQL', 'ClearBlade'],
        contributions: [
          'API development',
          'Mobile application (Flutter)',
          'Dashboard web',
          'Pipeline de IoT',
          'Database migration',
          'Migration of the IoT pipeline from Google IoT Core to ClearBlade with zero downtime'
        ]
      },
      {
        name: 'ERP Agrícola',
        domain: 'Agriculture / Business management',
        description: 'ERP system focused on managing agricultural operations.',
        technologies: ['Java', 'Spring Boot', 'Node.js', 'TypeScript', 'React/Vue', 'PostgreSQL'],
        contributions: ['Full stack development for agricultural management systems']
      },
      {
        name: 'Medical Teleconsultation Platform',
        domain: 'Digital Health',
        description: 'Medical teleconsultation platform for remote care.',
        technologies: ['Java', 'Spring Boot', 'Node.js', 'React/Vue'],
        contributions: ['Feature development for digital health']
      },
      {
        name: 'Healthcare Provider System',
        domain: 'Digital Health / Insurance',
        description: 'System for healthcare providers and plan management.',
        technologies: ['Java', 'Spring Boot', 'Node.js'],
        contributions: ['Module development for healthcare providers']
      },
      {
        name: 'Restaurant / Food Service Management',
        domain: 'Food Service',
        description: 'Management system for restaurant and food service operations.',
        technologies: ['Java', 'Spring Boot', 'Node.js', 'React/Vue'],
        contributions: ['Full stack development for food service']
      },
      {
        name: 'Fleet Tracking and Management',
        domain: 'Logistics / Fleets',
        description: 'Vehicle fleet tracking and management system.',
        technologies: ['Java', 'Spring Boot', 'Node.js'],
        contributions: ['Development of tracking solutions']
      }
    ]
  };

  readonly skills: SkillCategory[] = [
    {
      name: 'Backend',
      icon: '⚙️',
      skills: ['Java', 'Spring Boot', 'Node.js', 'TypeScript', 'FastAPI', 'Python']
    },
    {
      name: 'Frontend',
      icon: '🖥️',
      skills: ['Angular', 'React', 'Vue.js', 'TypeScript', 'HTML/CSS', 'SCSS']
    },
    {
      name: 'Mobile',
      icon: '📱',
      skills: ['Flutter', 'Dart']
    },
    {
      name: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS', 'Docker', 'CI/CD', 'Kubernetes']
    },
    {
      name: 'Data',
      icon: '🗄️',
      skills: ['PostgreSQL', 'MySQL', 'SQLite', 'SQL']
    },
    {
      name: 'Architecture',
      icon: '🏗️',
      skills: ['Microservices', 'REST APIs', 'IoT/MQTT', 'Distributed Systems']
    },
    {
      name: 'Quality',
      icon: '✅',
      skills: ['JUnit 5', 'MockMvc', 'Jest', 'TDD', 'Clean Code', 'SOLID']
    },
    {
      name: 'AI & Learning',
      icon: '🤖',
      skills: ['AI Fundamentals (AWS)', 'Prompt Engineering', 'Large-Scale Systems']
    }
  ];

  readonly timeline: TimelineEvent[] = [
    {
      year: '2021–2022',
      title: 'Getting Started on GitHub',
      description: 'First repositories and personal/academic projects.'
    },
    {
      year: '2022',
      title: 'Bachelor of Software Engineering — IFPR',
      description: 'Started the Bachelor of Software Engineering program at IFPR (Paranavaí Campus).'
    },
    {
      year: 'Set 2022',
      title: 'NextAge Sistemas',
      description: 'Started as a Software Engineer / Full Stack Developer. Projects in AgTech, Digital Health, Food Service, and Fleets.'
    },
    {
      year: '2023',
      title: 'Graduation Completed',
      description: 'Completed the Bachelor of Software Engineering — IFPR.'
    },
    {
      year: '2025',
      title: 'Architecture and AI Certifications',
      description: 'Software Architecture and Large-Scale Systems Design (Udemy), AI Fundamentals and the Cloud (AWS), Google AI Essentials & Prompt Engineering.'
    },
    {
      year: '2025–2026',
      title: 'Additional Certifications',
      description: 'Java & AI Bootcamp (DIO), TONNIE — Java and AI in Europe, EF SET English Certificate (B2).'
    },
    {
      year: '2026',
      title: 'Current Focus',
      description: 'Studies in applied AI, distributed systems, and modern backend engineering.'
    }
  ];

  readonly languages = [
    { name: 'Portuguese', level: 'Native' },
    { name: 'English', level: 'B2' },
    { name: 'Spanish', level: 'Basic' }
  ];
}
