import { Injectable, computed, signal } from '@angular/core';
import {
  CERTIFICATIONS, EDUCATION, EXPERIENCE, PROFILE, PROJECTS, PROJECT_FILTERS, SKILLS,
} from '../data/portfolio.data';
import { Project, ProjectCategory } from '../models/portfolio.models';

export type ProjectFilter = 'All' | ProjectCategory;

/** Single source of portfolio content plus the project filter state. */
@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly profile = PROFILE;
  readonly skills = SKILLS;
  readonly experience = EXPERIENCE;
  readonly education = EDUCATION;
  readonly certifications = CERTIFICATIONS;
  readonly projects = PROJECTS;
  readonly filters = PROJECT_FILTERS;

  readonly activeFilter = signal<ProjectFilter>('All');

  readonly visibleProjects = computed<Project[]>(() => {
    const f = this.activeFilter();
    return f === 'All' ? this.projects : this.projects.filter((p) => p.categories.includes(f));
  });

  countFor(filter: ProjectFilter): number {
    return filter === 'All' ? this.projects.length : this.projects.filter((p) => p.categories.includes(filter)).length;
  }
}
