import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../../core/services/portfolio.service';

@Component({
  selector: 'pf-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly data = inject(PortfolioService);
  protected readonly profile = this.data.profile;

  protected readonly layers = [
    { n: '01', label: 'UI', tech: 'Angular · React · SCSS' },
    { n: '02', label: 'API', tech: 'ASP.NET Core · C#' },
    { n: '03', label: 'Data', tech: 'Dataverse · SQL Server' },
  ];

  protected readonly facts = [
    { value: String(this.data.projects.length), label: 'featured projects' },
    { value: '3', label: 'client sectors: education, government, enterprise' },
    { value: 'AR · EN', label: 'bilingual & right-to-left UIs' },
  ];
}
