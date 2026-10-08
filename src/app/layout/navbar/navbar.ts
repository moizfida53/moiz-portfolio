import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { PortfolioService } from '../../core/services/portfolio.service';

interface NavLink { label: string; fragment: string; }

@Component({
  selector: 'pf-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly theme = inject(ThemeService);
  protected readonly profile = inject(PortfolioService).profile;

  protected readonly links: NavLink[] = [
    { label: 'About', fragment: 'about' },
    { label: 'Skills', fragment: 'skills' },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Projects', fragment: 'projects' },
    { label: 'Contact', fragment: 'contact' },
  ];

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
