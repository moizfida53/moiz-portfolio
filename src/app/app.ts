import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    <a class="skip-link" href="#main">Skip to content</a>
    <pf-navbar />
    <main id="main" tabindex="-1">
      <router-outlet />
    </main>
    <pf-footer />
  `,
})
export class App {
  // Instantiated at startup so the saved colour mode applies before first paint.
  private readonly theme = inject(ThemeService);
}
