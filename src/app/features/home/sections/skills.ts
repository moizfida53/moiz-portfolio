import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'pf-skills',
  imports: [RevealDirective],
  template: `
    <section id="skills" class="pf-section" aria-labelledby="skills-title">
      <div class="container">
        <div pfReveal>
          <p class="pf-eyebrow">Skills</p>
          <h2 id="skills-title" class="pf-heading">What I work with</h2>
          <p class="pf-lead mb-5">Every item here is something I’ve shipped in client work, not just studied.</p>
        </div>
        <div class="row g-4">
          @for (group of data.skills; track group.title) {
            <div class="col-md-6" pfReveal>
              <article class="pf-skill">
                <header class="pf-skill__head">
                  <span class="pf-skill__icon"><i class="bi" [class]="'bi-' + group.icon" aria-hidden="true"></i></span>
                  <h3 class="pf-skill__title">{{ group.title }}</h3>
                </header>
                <ul class="pf-skill__list">
                  @for (item of group.items; track item) {
                    <li class="pf-chip">{{ item }}</li>
                  }
                </ul>
              </article>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    @import 'styles/variables';
    @import 'styles/mixins';
    .pf-skill {
      height: 100%; padding: 1.5rem;
      @include card-surface;
      transition: border-color .2s ease, transform .2s ease;
      &:hover { border-color: var(--pf-accent); transform: translateY(-2px); }
    }
    .pf-skill__head { display: flex; align-items: center; gap: .85rem; margin-bottom: 1.25rem; }
    .pf-skill__icon {
      display: grid; place-items: center; width: 2.5rem; height: 2.5rem; border-radius: .5rem;
      background: var(--pf-accent-soft); color: var(--pf-accent); font-size: 1.15rem;
    }
    .pf-skill__title { font-size: 1.15rem; margin: 0; }
    .pf-skill__list { display: flex; flex-wrap: wrap; gap: .5rem; margin: 0; padding: 0; list-style: none; }
  `,
})
export class Skills {
  protected readonly data = inject(PortfolioService);
}
