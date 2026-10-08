import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'pf-footer',
  template: `
    <footer class="pf-footer">
      <div class="container pf-footer__inner">
        <p class="mb-0">© {{ year }} {{ profile.name }}</p>
        <p class="mb-0 pf-footer__built">
          <i class="bi bi-code-slash" aria-hidden="true"></i>
          Built with Angular 21, SCSS &amp; Bootstrap 5.3
        </p>
        <div class="pf-footer__social">
          <a [href]="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="bi bi-linkedin" aria-hidden="true"></i></a>
          <a [href]="profile.github" target="_blank" rel="noopener" aria-label="GitHub"><i class="bi bi-github" aria-hidden="true"></i></a>
          <a [href]="'mailto:' + profile.email" aria-label="Email"><i class="bi bi-envelope" aria-hidden="true"></i></a>
        </div>
      </div>
    </footer>
  `,
  styles: `
    @import 'styles/variables';
    @import 'styles/mixins';
    .pf-footer { border-top: 1px solid var(--pf-line); padding-block: 2rem; }
    .pf-footer__inner {
      display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;
      p { font-size: .9rem; }
    }
    .pf-footer__built { font-family: $pf-font-mono; font-size: .8rem !important; }
    .pf-footer__social {
      display: flex; gap: .25rem;
      a { display: grid; place-items: center; width: 2.75rem; height: 2.75rem; border-radius: .5rem; color: var(--pf-muted); font-size: 1.15rem; }
      a:hover { color: var(--pf-ink); background: var(--pf-accent-soft); }
    }
  `,
})
export class Footer {
  protected readonly profile = inject(PortfolioService).profile;
  protected readonly year = new Date().getFullYear();
}
