import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RevealDirective } from '../../shared/reveal';

/**
 * Representa un proyecto del portfolio.
 */
interface Project {
  id?: number;
  title: string;
  description: string;
  repo?: string;
  demo?: string;
  tags: string[];
  image?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="container" style="padding:2rem 0">
      <h2>Projects</h2>

      @if (loading_sig()) {
        <p style="opacity:.8">Cargando proyectos…</p>
      } @else {
        @if (projects_sig().length > 0) {
          <div class="grid">
            @for (p of projects_sig(); track track_by_id($index, p)) {
              <article class="card" appReveal>
                @if (p.image) {
                  <img [src]="p.image" [alt]="p.title" loading="lazy" />
                }
                <h3>{{ p.title }}</h3>
                <p>{{ p.description }}</p>
                <div style="margin:.5rem 0">
                  @for (t of p.tags; track $index) {
                    <span class="tag">#{{ t }}</span>
                  }
                </div>
                <div>
                  @if (p.repo) {
                    <a [href]="p.repo" target="_blank" rel="noreferrer">Repo</a>
                  }
                  @if (p.repo && p.demo) {
                    <span> • </span>
                  }
                  @if (p.demo) {
                    <a [href]="p.demo" target="_blank" rel="noreferrer">Demo</a>
                  }
                </div>
              </article>
            }
          </div>
        } @else {
          <p style="opacity:.8">Aún no hay proyectos para mostrar.</p>
        }
      }
    </section>
  `,
})
export class Projects {
  private readonly http = inject(HttpClient);

  /** Lista reactiva de proyectos. */
  readonly projects_sig = signal<Project[]>([]);

  /** Estado de carga para la vista. */
  readonly loading_sig = signal<boolean>(true);

  constructor() {
    this.load_projects();
  }

  /**
   * Carga los proyectos desde `assets/projects.json` y actualiza las signals.
   */
  load_projects(): void {
    this.http.get<Project[]>('assets/projects.json').subscribe({
      next: (list) => {
        this.projects_sig.set(list ?? []);
        this.loading_sig.set(false);
      },
      error: () => {
        this.projects_sig.set([]);
        this.loading_sig.set(false);
      },
    });
  }

  /**
   * trackBy para *ngFor: usa `id` si existe, si no, el título.
   */
  track_by_id = (_: number, p: Project) => p.id ?? p.title;
}
