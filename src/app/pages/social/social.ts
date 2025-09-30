import { Component, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

interface SocialItem {
  id: string;
  platform: 'x' | 'instagram' | 'linkedin';
  author: string;
  handle: string;
  text: string;
  url: string;
  image?: string;
  date?: string;
}

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [DatePipe],
  template: `
    <section class="container" style="padding:2rem 0">
      <h2>Social</h2>

      <div style="display:flex; gap:.5rem; margin:.75rem 0; flex-wrap:wrap">
        <button (click)="setFilter('all')" [disabled]="filter()==='all'">All</button>
        <button (click)="setFilter('x')" [disabled]="filter()==='x'">Twitter/X</button>
        <button (click)="setFilter('instagram')" [disabled]="filter()==='instagram'">Instagram</button>
        <button (click)="setFilter('linkedin')" [disabled]="filter()==='linkedin'">LinkedIn</button>
      </div>

      @if (itemsFiltered().length) {
        <div class="grid">
          @for (p of itemsFiltered(); track p.id) {
            <article class="card">
              @if (p.image) {
                <img [src]="p.image" [alt]="p.platform + ' post'" loading="lazy">
              }
              <div style="display:flex; align-items:center; gap:.5rem; margin-bottom:.25rem">
                <span [innerHTML]="icon(p.platform)"></span>
                <strong>{{ p.author }}</strong>
                <span class="tag">{{ p.handle }}</span>
                @if (p.date) {
                  <span class="tag">{{ p.date | date:'medium' }}</span>
                }
              </div>
              <p style="margin:.25rem 0 0">{{ p.text }}</p>
              <div style="margin-top:.5rem">
                <a [href]="p.url" target="_blank" rel="noreferrer">Ver publicación</a>
              </div>
            </article>
          }
        </div>
      } @else {
        <p style="opacity:.8">No hay publicaciones para este filtro.</p>
      }
    </section>
  `
})
export class Social {
  private http = inject(HttpClient);
  readonly items = signal<SocialItem[]>([]);
  readonly filter = signal<'all' | 'x' | 'instagram' | 'linkedin'>('all');

  constructor() {
    this.http.get<SocialItem[]>('assets/social.json').subscribe({
      next: list => {
        console.log('Datos cargados:', list); // Para debug
        this.items.set(this.sortByDate(list));
      },
      error: (error) => {
        console.error('Error cargando datos:', error); // Mejor manejo de errores
        this.items.set([]);
      }
    });
  }

  setFilter(f: 'all' | 'x' | 'instagram' | 'linkedin') { this.filter.set(f); }

  readonly itemsFiltered = computed(() => {
    const f = this.filter();
    const list = this.items();
    return f === 'all' ? list : list.filter(i => i.platform === f);
  });

  // Mejora en el método de ordenación
  private sortByDate(list: SocialItem[]) {
    return [...list].sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });
  }

  icon(p: SocialItem['platform']) {
    const common = `width:18px;height:18px;vertical-align:middle;opacity:.8`;
    switch (p) {
      case 'x': return `<svg style="${common}" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.7 8.8L24 22h-7.4l-5.8-7.4L3.3 22H0l8.2-9.3L0 2h7.5l5.2 6.8L18.9 2z"/></svg>`;
      case 'instagram': return `<svg style="${common}" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z"/></svg>`;
      case 'linkedin': return `<svg style="${common}" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v15H0V8zm7.5 0h4.8v2h.07c.67-1.25 2.3-2.57 4.73-2.57 5.06 0 6 3.33 6 7.66V23H18v-6.8c0-1.62-.03-3.71-2.26-3.71-2.26 0-2.6 1.77-2.6 3.6V23H7.5V8z"/></svg>`;
    }
  }
}