import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'pf-certifications',
  imports: [RevealDirective],
  template: `
    <section id="certifications" class="pf-section pf-section--alt" aria-labelledby="cert-title">
      <div class="container">
        <div pfReveal>
          <p class="pf-eyebrow">Learning</p>
          <h2 id="cert-title" class="pf-heading mb-5">Certifications</h2>
        </div>
        <ul class="pf-certs">
          @for (cert of data.certifications; track cert.name) {
            <li class="pf-cert" pfReveal>
              <i class="bi bi-patch-check" aria-hidden="true"></i>
              <div class="pf-cert__body">
                <p class="pf-cert__name">{{ cert.name }}</p>
                <p class="pf-cert__meta">{{ cert.issuer }} · {{ cert.year }}</p>
              </div>
              @if (cert.url) {
                <a class="pf-cert__verify" [href]="cert.url" target="_blank" rel="noopener"
                   [attr.aria-label]="'Verify ' + cert.name">Verify <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i></a>
              }
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    @import 'styles/variables';
    @import 'styles/mixins';
    .pf-certs {
      display: grid; gap: 1rem; margin: 0; padding: 0; list-style: none;
      grid-template-columns: 1fr;
      @include up(md) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      @include up(xl) { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    }
    .pf-cert {
      display: flex; align-items: flex-start; gap: .9rem; padding: 1.25rem;
      @include card-surface; background: var(--pf-ground);
      > i { font-size: 1.35rem; color: var(--pf-accent); line-height: 1.2; }
      p { margin: 0; }
    }
    .pf-cert__body { flex: 1; }
    .pf-cert__name { color: var(--pf-ink); font-weight: 600; line-height: 1.35; margin-bottom: .2rem !important; }
    .pf-cert__meta { font-size: .88rem; }
    .pf-cert__verify { font-size: .85rem; font-weight: 500; white-space: nowrap; padding-block: .1rem; }
  `,
})
export class Certifications {
  protected readonly data = inject(PortfolioService);
}
