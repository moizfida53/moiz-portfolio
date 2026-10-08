import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'pf-about',
  imports: [RevealDirective],
  template: `
    <section id="about" class="pf-section pf-section--alt" aria-labelledby="about-title">
      <div class="container">
        <div class="row g-4 g-lg-5">
          <div class="col-lg-4" pfReveal>
            <p class="pf-eyebrow">About</p>
            <h2 id="about-title" class="pf-heading">Full-stack, on the Microsoft stack.</h2>
          </div>
          <div class="col-lg-8" pfReveal>
            @for (para of data.profile.about; track $index) {
              <p class="pf-lead">{{ para }}</p>
            }
            <div class="pf-edu">
              <i class="bi bi-mortarboard" aria-hidden="true"></i>
              <div>
                <p class="pf-edu__degree">{{ data.education.degree }}</p>
                <p class="pf-edu__meta">{{ data.education.school }} · {{ data.education.period }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    @import 'styles/variables';
    @import 'styles/mixins';
    .pf-edu {
      display: flex; gap: 1rem; align-items: flex-start;
      margin-top: 2rem; padding: 1.25rem 1.5rem;
      @include card-surface; background: var(--pf-ground);
      i { font-size: 1.5rem; color: var(--pf-accent); line-height: 1; }
      p { margin: 0; }
    }
    .pf-edu__degree { color: var(--pf-ink); font-weight: 600; }
    .pf-edu__meta { font-size: .92rem; }
  `,
})
export class About {
  protected readonly data = inject(PortfolioService);
}
