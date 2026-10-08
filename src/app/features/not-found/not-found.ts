import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pf-not-found',
  imports: [RouterLink],
  template: `
    <section class="pf-section">
      <div class="container text-center">
        <p class="pf-eyebrow justify-content-center">404</p>
        <h1 class="pf-heading">This page doesn’t exist.</h1>
        <p class="mx-auto" style="max-width: 32rem">The link may be out of date. Head back to the home page to see my work.</p>
        <a class="btn btn-pf mt-3" routerLink="/">Back to home</a>
      </div>
    </section>
  `,
})
export class NotFound {}
