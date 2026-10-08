import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService, ProjectFilter } from '../../../core/services/portfolio.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'pf-projects',
  imports: [RouterLink, RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsSection {
  protected readonly data = inject(PortfolioService);
  protected readonly maxChips = 5;

  select(filter: ProjectFilter): void {
    this.data.activeFilter.set(filter);
  }
}
