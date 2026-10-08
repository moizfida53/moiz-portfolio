import { Component } from '@angular/core';
import { Hero } from './sections/hero';
import { About } from './sections/about';
import { Skills } from './sections/skills';
import { ExperienceSection } from './sections/experience';
import { ProjectsSection } from './sections/projects';
import { Certifications } from './sections/certifications';
import { Contact } from './sections/contact';

@Component({
  selector: 'pf-home',
  imports: [Hero, About, Skills, ExperienceSection, ProjectsSection, Certifications, Contact],
  template: `
    <pf-hero />
    <pf-about />
    <pf-skills />
    <pf-experience />
    <pf-projects />
    <pf-certifications />
    <pf-contact />
  `,
})
export class Home {}
