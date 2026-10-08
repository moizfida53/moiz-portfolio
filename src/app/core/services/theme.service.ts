import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

/**
 * Signal-based colour mode. Bootstrap 5.3 reads [data-bs-theme] on <html>,
 * so flipping that one attribute re-themes Bootstrap and our own CSS tokens.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly storageKey = 'pf-theme';
  private readonly media = this.doc.defaultView?.matchMedia?.('(prefers-color-scheme: dark)');

  readonly theme = signal<Theme>(this.initialTheme());
  readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    effect(() => {
      const theme = this.theme();
      this.doc.documentElement.setAttribute('data-bs-theme', theme);
      try { localStorage.setItem(this.storageKey, theme); } catch { /* private mode */ }
    });

    // Follow the OS setting until the visitor picks a theme themselves.
    this.media?.addEventListener('change', (e) => {
      if (!this.hasStoredChoice()) this.theme.set(e.matches ? 'dark' : 'light');
    });
  }

  toggle(): void {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  private initialTheme(): Theme {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored === 'light' || stored === 'dark') return stored;
    } catch { /* ignore */ }
    return this.media?.matches ? 'dark' : 'light';
  }

  private hasStoredChoice(): boolean {
    try { return !!localStorage.getItem(this.storageKey); } catch { return false; }
  }
}
