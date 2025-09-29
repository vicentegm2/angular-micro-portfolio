import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
   <section style="padding:3rem 1.25rem; text-align:center">
  <h1>Hola, soy Vicente 👋</h1>
  <p>Frontend learner — Angular & React. Subo mini-proyectos a GitHub.</p>
  <a routerLink="/projects" style="display:inline-block;margin-top:1rem;padding:.6rem 1rem;border:1px solid #111;border-radius:10px;text-decoration:none;color:inherit">
    Ver proyectos
  </a>
</section>
  `,
  styles: [`
    .hero { padding: 3rem 1.25rem; text-align: center; }
    .btn { display:inline-block; margin-top:1rem; padding:.6rem 1rem;
           border:1px solid #111; border-radius:10px; }
  `]
})
export class Home {}