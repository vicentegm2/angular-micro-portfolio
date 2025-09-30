import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section style="padding:3rem 1.25rem; text-align:center">
      <img src="../../assets/profile-2.jpg" alt="profile picture" class="profile-pic" />

      <h1>Hola, soy Vicente 👋</h1>
      <p>Frontend learner — Angular & React. Subo mini-proyectos a GitHub.</p>

      <a routerLink="/projects" class="btn">Ver proyectos</a>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 3rem 1.25rem;
        text-align: center;
      }
      .btn {
        display: inline-block;
        margin-top: 1rem;
        padding: 0.6rem 1rem;
        border: 1px solid #111;
        border-radius: 10px;
      }
      .profile-pic {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid var(--border);
        display: block;
        margin: 0 auto 1rem auto;
      }
    `,
  ],
})
export class Home {}
