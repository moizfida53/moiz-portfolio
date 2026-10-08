import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'pf-experience',
  imports: [RevealDirective],
  template: `
    <section id="experience" class="pf-section pf-section--alt" aria-labelledby="exp-title">
      <div class="container">
        <div class="row g-4 g-lg-5">
          <div class="col-lg-4" pfReveal>
            <p class="pf-eyebrow">Experience</p>
            <h2 id="exp-title" class="pf-heading">Where I’ve worked</h2>
          </div>
          <div class="col-lg-8">
            <ol class="pf-timeline">
              @for (job of data.experience; track job.company) {
                <li class="pf-timeline__item" pfReveal>
                  <div class="pf-timeline__meta">
                    <span class="pf-timeline__period">{{ job.period }}</span>
                    <span class="pf-timeline__type">{{ job.type }}</span>
                  </div>
                  <h3 class="pf-timeline__role">{{ job.role }}</h3>
                  <p class="pf-timeline__company">{{ job.company }}</p>
                  <ul class="pf-timeline__points">
                    @for (point of job.points; track $index) {
                      <li>{{ point }}</li>
                    }
                  </ul>
                  @if (job.clients?.length) {
                    <p class="pf-timeline__clients">
                      <span>Clients</span>
                      @for (c of job.clients; track c) { <span class="pf-chip">{{ c }}</span> }
                    </p>
                  }
                </li>
              }
            </ol>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    @import 'styles/variables';
    @import 'styles/mixins';
    .pf-timeline { margin: 0; padding: 0; list-style: none; }
    .pf-timeline__item {
      position: relative; padding: 0 0 2.5rem 2rem;
      border-left: 2px solid var(--pf-line);
      &:last-child { padding-bottom: 0; }
      &::before {
        content: ''; position: absolute; left: -7px; top: .3rem;
        width: 12px; height: 12px; border-radius: 50%;
        background: var(--pf-surface); border: 2px solid var(--pf-accent);
      }
      &:first-child::before { background: var(--pf-accent); }
    }
    .pf-timeline__meta {
      display: flex; flex-wrap: wrap; gap: .25rem 1rem; margin-bottom: .4rem;
      font-family: $pf-font-mono; font-size: .78rem; color: var(--pf-muted);
    }
    .pf-timeline__period { color: var(--pf-accent); font-weight: 500; }
    .pf-timeline__role { font-size: 1.35rem; margin-bottom: .15rem; }
    .pf-timeline__company { color: var(--pf-ink); font-weight: 500; margin-bottom: 1rem; }
    .pf-timeline__points {
      padding-left: 1.1rem; margin-bottom: 1rem;
      li { color: var(--pf-muted); line-height: 1.65; margin-bottom: .4rem; }
      li::marker { color: var(--pf-accent); }
    }
    .pf-timeline__clients {
      display: flex; flex-wrap: wrap; align-items: center; gap: .5rem; margin: 0;
      > span:first-child { font-family: $pf-font-mono; font-size: .75rem; text-transform: uppercase; letter-spacing: .1em; margin-right: .25rem; }
    }
  `,
})
export class ExperienceSection {
  protected readonly data = inject(PortfolioService);
}
