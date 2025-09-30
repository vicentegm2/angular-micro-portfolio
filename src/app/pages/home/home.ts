import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="hero">
      <img src="../../assets/profile.jpg" alt="profile picture" class="profile-pic" />

      <h1>Hola, soy Vicente 👋</h1>
      <p>Frontend learner — Angular & React. Subo mini-proyectos a GitHub.</p>

      <a routerLink="/projects" class="btn">Ver proyectos</a>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: clamp(2rem, 5vw, 4rem) 1.25rem;
        text-align: center;
        display: grid;
        place-items: center;
        gap: 1rem;
      }
      .profile-pic {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid var(--border);
        display: block;
      }
      .btn {
        margin-top: 0.5rem;
      }
    `,
  ],
})
export class Home {}
