import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section style="padding:2rem 1rem">
      <h2>Projects</h2>
      <p>Pronto aquí irán las tarjetas de proyectos desde <code>assets/projects.json</code>.</p>
    </section>
  `,
})
export class Projects {}
