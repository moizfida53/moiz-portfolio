import { Component, computed, effect, inject, input } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'pf-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  private readonly data = inject(PortfolioService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  /** Bound from the :slug route parameter (withComponentInputBinding). */
  readonly slug = input.required<string>();

  protected readonly profile = this.data.profile;
  protected readonly project = computed(() => this.data.bySlug(this.slug()));
  protected readonly neighbours = computed(() => this.data.neighbours(this.slug()));

  constructor() {
    effect(() => {
      const p = this.project();
      this.title.setTitle(p ? `${p.name} · Moiz Dudhbhai` : 'Project not found · Moiz Dudhbhai');
      if (p) this.meta.updateTag({ name: 'description', content: p.summary });
    });
  }
}
