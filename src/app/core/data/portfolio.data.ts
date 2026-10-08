import {
  Certification,
  Education,
  Experience,
  Profile,
  Project,
  ProjectCategory,
  SkillGroup,
} from '../models/portfolio.models';

export const PROFILE: Profile = {
  name: 'Moiz Dudhbhai',
  title: 'Full Stack .NET Developer',
  tagline:
    'I build enterprise web applications end to end — Angular front ends, ASP.NET Core APIs and Microsoft Dynamics 365 back ends.',
  location: 'Kuwait',
  email: 'moizfida5352@gmail.com',
  phone: '+965 9712 0182',
  phoneHref: '+96597120182',
  linkedin: 'https://www.linkedin.com/in/moiz-dudhbhai-6b3a732a4',
  github: 'https://github.com/moizfida53',
  photo: 'img/moiz.jpg',
  cvUrl: '',
  openTo: 'Open to full-stack .NET / Angular roles · On-site or hybrid',
  about: [
    'I’m a Full Stack Developer at BlueLink IT Solutions in Kuwait, where I build portals and line-of-business apps for education, government and enterprise clients — including Kuwait University and CAIT.',
    'Most of my work sits on the Microsoft stack: C# and ASP.NET Core APIs, Angular front ends secured with Azure AD, and Microsoft Dataverse (Dynamics 365) as the data platform. I care about responsive, well-structured UIs — component libraries, SCSS architecture and Bootstrap — as much as clean, layered back ends.',
    'Alongside work I’m completing a Bachelor of Computer Applications at Amity University.',
  ],
};

export const SKILLS: SkillGroup[] = [
  {
    title: 'Front-end',
    icon: 'window-stack',
    items: ['Angular 20/21', 'TypeScript', 'Signals & RxJS', 'Angular Material', 'React', 'SCSS', 'Bootstrap 5', 'jQuery', 'Responsive & RTL UI'],
  },
  {
    title: 'Back-end',
    icon: 'hdd-stack',
    items: ['C#', 'ASP.NET Core (.NET 8/9)', 'ASP.NET MVC', 'REST Web APIs', 'Layered architecture', 'SignalR', 'MailKit / MimeKit', 'QuestPDF'],
  },
  {
    title: 'Microsoft platform',
    icon: 'microsoft',
    items: ['Dynamics 365', 'Dataverse', 'Power Apps', 'FetchXML', 'JavaScript web resources', 'SharePoint', 'Microsoft Graph', 'Exchange Online'],
  },
  {
    title: 'Security, data & delivery',
    icon: 'shield-lock',
    items: ['Azure AD / MSAL', 'OpenID Connect', 'JWT auth', 'MS SQL Server', 'Firebase Cloud Messaging', 'Docker', 'IIS', 'Git'],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Full Stack Developer',
    company: 'BlueLink IT Solutions',
    period: 'Jun 2025 – Present',
    type: 'Full-time · Kuwait',
    clients: ['Kuwait University', 'CAIT'],
    points: [
      'Build full-stack applications with Angular and ASP.NET Core on Microsoft Dataverse, secured with Azure AD.',
      'Delivered client portals including a customer portal, a cashless canteen platform and a bilingual meeting-management system.',
      'Develop budgeting, procurement, vendor and Enterprise Agreement portals for CAIT and Kuwait University.',
      'Extend Dynamics 365 / Power Apps with custom pages, model-driven apps, entities, forms and JavaScript web resources.',
      'Design responsive, reusable UI components with SCSS and Bootstrap, including right-to-left Arabic interfaces.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'One World United',
    period: 'Jan 2025 – Jun 2025',
    type: 'Internship',
    points: [
      'Developed web applications with the ASP.NET MVC framework.',
      'Optimised SQL queries to improve database performance.',
      'Integrated HTML, CSS, JavaScript and Bootstrap front ends.',
      'Worked with cross-functional teams to gather requirements and deliver solutions.',
    ],
  },
];

export const EDUCATION: Education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  school: 'Amity University',
  period: '2024 – 2027 (expected)',
};

export const CERTIFICATIONS: Certification[] = [
  { name: 'AI Fluency: Framework & Foundations', issuer: 'Anthropic', year: '2026' },
  { name: 'Business Analysis & Process Management', issuer: 'Coursera', year: '2026', url: 'https://coursera.org/verify/MD5M0EDYIH06' },
  { name: 'Introduction to Project Management with ClickUp', issuer: 'Coursera', year: '2026', url: 'https://coursera.org/verify/E2M6YTG6RHVK' },
  { name: 'Cybersecurity', issuer: 'ADB Institute', year: '2026' },
  { name: 'AI for Business Professionals', issuer: 'HP LIFE', year: '2026' },
  { name: 'Professional Networking for Career Growth', issuer: 'HP LIFE', year: '2026' },
];

export const PROJECT_FILTERS: Array<'All' | ProjectCategory> = ['All', 'Angular', '.NET API', 'Dynamics 365', 'Front-end'];

export const PROJECTS: Project[] = [
  {
    slug: 'kiddopay',
    name: 'KiddoPay',
    client: 'BlueLink IT Solutions',
    kind: 'Cashless school canteen platform',
    summary:
      'A cashier app and API that let students pay at the school canteen by NFC card — with every item checked against allergies, restrictions and spending limits.',
    categories: ['Angular', '.NET API', 'Dynamics 365'],
    architecture: ['Angular 20 cashier app', 'ASP.NET Core 8 API', 'Dataverse', 'Firebase · Microsoft Graph'],
    highlights: [
      'NFC student lookup and barcode scanning at checkout',
      'Allergy, restricted-category, balance and daily-limit checks on every item',
      'Two auth schemes: Azure AD for staff, email + OTP for parents',
    ],
    sections: [
      {
        title: 'Cashier experience',
        points: [
          'Angular 20 cashier app: identify a student by NFC card, scan products by barcode and check out.',
          'Every scanned item is validated against the student’s allergies, restricted categories, wallet balance and daily spend limit.',
          'Blocked items are returned with safe alternatives from the same category.',
          'Canteen pre-orders are supported alongside walk-up orders.',
        ],
      },
      {
        title: 'API & integrations',
        points: [
          'ASP.NET Core 8 Web API on Microsoft Dataverse with a service layer per domain (orders, products, students, parents).',
          'Wallet balance recorded before and after every order for an audit trail.',
          'Azure AD SSO for staff, plus a separate JWT scheme for the parents’ mobile app with email + password + OTP sign-up.',
          'OTP emails through Microsoft Graph and push notifications through Firebase Cloud Messaging.',
          'Packaged with Docker for cloud deployment.',
        ],
      },
    ],
    stack: ['ASP.NET Core 8', 'C#', 'Angular 20', 'Bootstrap 5', 'Dataverse', 'Azure AD / MSAL', 'Microsoft Graph', 'Firebase', 'Docker'],
  },
  {
    slug: 'meet365',
    name: 'Meet365',
    client: 'BlueLink IT Solutions',
    kind: 'Meeting management system',
    summary:
      'A bilingual Arabic/English app for planning meetings, collecting RSVPs and following up on minutes and action items — with real-time updates.',
    categories: ['Angular', '.NET API', 'Dynamics 365'],
    architecture: ['Angular 20 + Material', 'ASP.NET Core API', 'SignalR hub', 'Dataverse'],
    highlights: [
      'Step-by-step meeting creation with agenda, participants and rooms',
      'One-click Accept/Reject from email invitations',
      'Live status updates over SignalR; full Arabic/English switching',
    ],
    sections: [
      {
        title: 'Meeting lifecycle',
        points: [
          'Guided creation flow: meeting details, agenda items, participants and rooms, then the invitation message.',
          'HTML email invitations with Accept/Reject links that update attendance automatically.',
          'Minutes of meeting and action-item tracking, plus postpone and cancel flows.',
          'Dashboard with meeting counts and an all-meetings view.',
        ],
      },
      {
        title: 'Real-time & bilingual',
        points: [
          'SignalR hub with per-user and per-meeting groups pushes participant and meeting status changes instantly.',
          'Arabic/English switching with ngx-translate, including Arabic labels for Dynamics 365 option sets.',
          'Azure AD sign-in with MSAL; ASP.NET Core API on Dataverse.',
        ],
      },
    ],
    stack: ['Angular 20', 'Angular Material', 'Bootstrap 5.3', 'SignalR', 'ngx-translate', 'ASP.NET Core', 'C#', 'Dataverse', 'MailKit', 'Azure AD'],
  },
  {
    slug: 'emc-customer-portal',
    name: 'EMC Customer Portal',
    client: 'BlueLink IT Solutions',
    kind: 'Client self-service portal',
    summary:
      'A portal where BlueLink’s clients track support tickets, projects, contracts and product releases in one place.',
    categories: ['Angular', '.NET API', 'Dynamics 365'],
    architecture: ['Angular 21 SPA', 'ASP.NET Core Web API', 'FetchXML', 'Dataverse'],
    highlights: [
      'Tickets, projects, contracts, releases and knowledge base in one portal',
      'Signals-based stores with search, filters, sorting and paging',
      'Reusable component library with light/dark theming',
    ],
    sections: [
      {
        title: 'Modules',
        points: [
          'Support: create tickets, view an activity timeline, add entries and change status.',
          'Projects: phases, steps, a visual roadmap and portfolio export to CSV.',
          'Contracts: service agreements and licences, renewal requests and a PDF agreement summary (QuestPDF).',
          'Releases, a knowledge base, and a KPI dashboard with project health and an activity feed.',
        ],
      },
      {
        title: 'Front-end architecture',
        points: [
          'Angular 21 with signals, standalone components and lazy-loaded routes behind an auth guard.',
          'Azure AD sign-in with MSAL; HTTP interceptors attach tokens and handle 401/403/5xx responses.',
          'Global search and live notifications across every module, with read state remembered between visits.',
          'Component library (buttons, cards, inputs, modals, KPI tiles, status badges), responsive collapsible sidebar and Bootstrap 5.3 light/dark mode.',
        ],
      },
      {
        title: 'Back end',
        points: [
          'Layered ASP.NET Core API (thin controllers → services → DTOs) querying Dataverse with FetchXML.',
          'Documented team conventions so new modules follow the same structure.',
        ],
      },
    ],
    stack: ['Angular 21', 'TypeScript', 'SCSS', 'Bootstrap 5.3', 'ASP.NET Core', 'C#', 'Dataverse', 'FetchXML', 'Azure AD', 'QuestPDF'],
  },
  {
    slug: 'cait-budgeting',
    name: 'CAIT Budgeting & Procurement',
    client: 'Kuwait University · CAIT',
    kind: 'Budgeting, procurement & vendor portals',
    summary:
      'A suite of portals for CAIT’s budgeting, procurement and vendor processes — plus a full right-to-left Arabic UI redesign.',
    categories: ['.NET API', 'Dynamics 365', 'Front-end'],
    architecture: ['Razor views (RTL)', 'ASP.NET MVC', 'Service layer', 'Dataverse · SharePoint'],
    highlights: [
      'Role-based Finance, Procurement and Work Center areas',
      'Vendor portal with OTP, reCAPTCHA and SharePoint storage',
      '~40-page Arabic RTL redesign on a modular CSS system',
    ],
    sections: [
      {
        title: 'Internal Budgeting Portal',
        points: [
          'Separate Finance, Procurement and Work Center areas, with access controlled by user role.',
          'Project status workflows, financial allocations and supplementary procedures.',
          'Vendor and beneficiary management, generated Word printouts and Excel reports.',
          'Azure AD sign-in (OpenID Connect) on ASP.NET MVC and Dataverse.',
        ],
      },
      {
        title: 'Vendors Portal',
        points: [
          'Vendor registration and login with email OTP and Google reCAPTCHA.',
          'Password reset, budget-request browsing with filters, and announcements.',
          'Document storage in SharePoint.',
        ],
      },
      {
        title: 'UI redesign',
        points: [
          'About 40 right-to-left Arabic pages: needs, projects, operations, reports, attachments and messages.',
          'Modular CSS: shared design tokens plus sidebar, timeline, tabs and table modules.',
        ],
      },
    ],
    stack: ['ASP.NET MVC', 'C#', 'Dataverse', 'Azure AD', 'SharePoint', 'Unity DI', 'Razor', 'jQuery', 'RTL Arabic UI'],
  },
  {
    slug: 'cait-ea-portal',
    name: 'CAIT EA Portal',
    client: 'CAIT · Government of Kuwait',
    kind: 'Microsoft Enterprise Agreement services',
    summary:
      'An Arabic portal where government entities covered by Kuwait’s Microsoft Enterprise Agreement browse services, download forms and submit requests.',
    categories: ['.NET API', 'Dynamics 365', 'Front-end'],
    architecture: ['Razor views (RTL)', 'ASP.NET MVC', 'Microsoft Graph', 'Dataverse'],
    highlights: [
      'Service catalogue with objectives, requirements and request forms',
      'Drag-and-drop attachments with required-form validation',
      'Azure AD + Graph link each user to their government entity',
    ],
    sections: [
      {
        title: 'For government entities',
        points: [
          'Service catalogue showing each service’s objectives, requirements and downloadable request forms.',
          'New-request page with required and optional attachments, drag-and-drop upload (PDF, Word, Excel) and a template download for each.',
          'Requests only submit once every required form is uploaded.',
          'My Requests list and request details: number, submitter, date and attachments.',
        ],
      },
      {
        title: 'Under the hood',
        points: [
          'Azure AD sign-in (OpenID Connect); Microsoft Graph links each user to their government entity in Dynamics 365.',
          'Generic file service that reads and writes Dataverse file columns, including bulk upload.',
          'Encrypted configuration settings and a service/repository layer with Unity dependency injection.',
        ],
      },
    ],
    stack: ['ASP.NET MVC', 'C#', 'Dataverse', 'Azure AD', 'Microsoft Graph', 'Unity DI', 'Razor', 'jQuery', 'RTL Arabic UI'],
  },
  {
    slug: 'email-signature-service',
    name: 'Email Signature Service',
    client: '1me',
    kind: 'Mail-flow service',
    summary:
      'A .NET 9 service that sits in the Exchange Online mail flow and adds a personalised HTML signature to every outgoing email.',
    categories: ['.NET API'],
    architecture: ['Exchange Online', '.NET 9 service', '1me API', 'SMTP relay'],
    highlights: [
      'Parses and rewrites outgoing mail with MimeKit',
      'Loop protection — no email is stamped twice',
      'Fail-safe: malformed mail and unknown senders pass through',
    ],
    sections: [
      {
        title: 'How it works',
        points: [
          'Exchange Online routes outgoing mail to the service, which reads each message with MimeKit.',
          'Looks up the sender’s name, title, department, email and phone through a 1me API client.',
          'Generates an email-safe HTML signature and inserts it at the end of the message body.',
          'Relays the message back through Exchange Online over SMTP with MailKit.',
        ],
      },
      {
        title: 'Reliability',
        points: [
          'A custom header prevents loops, so no email is stamped twice.',
          'Malformed messages and unknown senders pass through unchanged — mail is never blocked.',
          'Keeps .eml copies for auditing and exposes a test endpoint for the outbound connector.',
          'Iterated through five versions and published to IIS.',
        ],
      },
    ],
    stack: ['.NET 9', 'C#', 'MailKit', 'MimeKit', 'Exchange Online', 'SMTP', 'IIS'],
  },
  {
    slug: 'eservice-definition-form',
    name: 'eService Definition Form',
    client: 'Digital Government',
    kind: 'Service-design tool',
    summary:
      'A bilingual tool that lets government departments document a service — steps, inputs, approvals and integrations — in enough detail to digitise it.',
    categories: ['Front-end'],
    architecture: ['Bilingual form', 'Step builder', 'ExcelJS export', 'PDF export'],
    highlights: [
      'Dynamic multi-step builder with tabbed steps',
      'Formatted Excel export with ExcelJS',
      'Full-page PDF export with html2canvas + jsPDF',
    ],
    sections: [
      {
        title: 'What departments capture',
        points: [
          'Service details in Arabic and English: request type, channels, department, fees and eligibility.',
          'Process builder: add, remove and reorder steps, each on its own tab.',
          'Each step records applicant fields and validation, approval tasks, conditions, and system integrations with JSON request/response formats.',
        ],
      },
      {
        title: 'Exports',
        points: [
          'Excel workbook (ExcelJS) with formatted Service Information and Service Steps sheets, frozen headers and sized columns.',
          'Full-page PDF (html2canvas + jsPDF) that expands every step and hides controls before capture, then restores the page.',
          'Modular CSS for tabs, tables and form controls, plus a React/TSX prototype of the same form.',
        ],
      },
    ],
    stack: ['JavaScript', 'Bootstrap 5.3', 'CSS', 'ExcelJS', 'jsPDF', 'html2canvas', 'React'],
  },
  {
    slug: '1me-business-edition',
    name: '1me Business Edition',
    client: '1me',
    kind: 'Card & email signature designer',
    summary:
      'The front end for the business edition of 1me, a digital business card platform — including a live email-signature template designer.',
    categories: ['Front-end'],
    architecture: ['Admin dashboard', 'Template designer', 'Live preview', 'Employee page'],
    highlights: [
      'Live colour customisation with synced pickers',
      'Email-safe templates for Outlook, Gmail and Apple Mail',
      'Copy-to-clipboard and email-to-self for employees',
    ],
    sections: [
      {
        title: 'Admin',
        points: [
          'Company dashboard with sections for contacts, card templates, employees, smart tokens and integrations.',
          'Template designer with three email-safe signature designs built on HTML tables.',
          'Gradient background, name, text, contact and icon colours — each picker synced to a hex field, with a live preview on every change.',
        ],
      },
      {
        title: 'Employees',
        points: [
          'Pick a card and a saved template, then copy the signature or email it to yourself (EmailJS).',
          'Install guides for Gmail, Apple Mail, Outlook web and Outlook desktop.',
          'Responsive layouts with custom SCSS components, refined over six versions.',
        ],
      },
    ],
    stack: ['HTML5', 'CSS3 / SCSS', 'Bootstrap 5', 'JavaScript', 'jQuery', 'Select2', 'EmailJS'],
  },
];
