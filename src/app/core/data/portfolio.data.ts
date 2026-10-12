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
    highlights: [
      'NFC student lookup and barcode scanning at checkout',
      'Allergy, restricted-category, balance and daily-limit checks on every item',
      'Two auth schemes: Azure AD for staff, email + OTP for parents',
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
    highlights: [
      'Step-by-step meeting creation with agenda, participants and rooms',
      'One-click Accept/Reject from email invitations',
      'Live status updates over SignalR; full Arabic/English switching',
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
    highlights: [
      'Tickets, projects, contracts, releases and knowledge base in one portal',
      'Signals-based stores with search, filters, sorting and paging',
      'Reusable component library with light/dark theming',
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
    highlights: [
      'Role-based Finance, Procurement and Work Center areas',
      'Vendor portal with OTP, reCAPTCHA and SharePoint storage',
      '~40-page Arabic RTL redesign on a modular CSS system',
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
    highlights: [
      'Service catalogue with objectives, requirements and request forms',
      'Drag-and-drop attachments with required-form validation',
      'Azure AD + Graph link each user to their government entity',
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
    highlights: [
      'Parses and rewrites outgoing mail with MimeKit',
      'Loop protection — no email is stamped twice',
      'Fail-safe: malformed mail and unknown senders pass through',
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
    highlights: [
      'Dynamic multi-step builder with tabbed steps',
      'Formatted Excel export with ExcelJS',
      'Full-page PDF export with html2canvas + jsPDF',
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
    highlights: [
      'Live colour customisation with synced pickers',
      'Email-safe templates for Outlook, Gmail and Apple Mail',
      'Copy-to-clipboard and email-to-self for employees',
    ],
    stack: ['HTML5', 'CSS3 / SCSS', 'Bootstrap 5', 'JavaScript', 'jQuery', 'Select2', 'EmailJS'],
  },
];
