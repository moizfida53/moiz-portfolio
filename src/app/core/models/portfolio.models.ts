// Typed shapes for everything the portfolio renders.
// All content lives in core/data/portfolio.data.ts — edit that file to update the site.

export type ProjectCategory = 'Angular' | '.NET API' | 'Dynamics 365' | 'Front-end';

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  linkedin: string;
  github: string;
  photo: string;
  /** Optional path to a public CV PDF (e.g. '/Moiz_Dudhbhai_CV.pdf'). Leave empty to hide the button. */
  cvUrl: string;
  openTo: string;
  about: string[];
}

export interface SkillGroup {
  title: string;
  icon: string; // bootstrap-icons name, without the "bi-" prefix
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  clients?: string[];
  points: string[];
}

export interface Project {
  slug: string;
  name: string;
  client: string;
  kind: string;
  summary: string;
  categories: ProjectCategory[];
  highlights: string[];
  stack: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}
