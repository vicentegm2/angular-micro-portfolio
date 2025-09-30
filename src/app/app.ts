import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('angular-micro-portfolio');
  theme = signal<Theme>('light');

  ngOnInit() {
    const saved = localStorage.getItem('theme') as Theme;
    this.theme.set(saved === 'dark' ? 'dark' : 'light');
    this.applyTheme();
  }

  toggleTheme() {
    const newTheme: Theme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(newTheme);

    localStorage.setItem('theme', newTheme);

    this.applyTheme();
  }

  private applyTheme() {
    const root = document.documentElement;

    if (this.theme() === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  }
}
