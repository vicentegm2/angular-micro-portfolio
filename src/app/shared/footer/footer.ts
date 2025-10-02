import { Component } from '@angular/core';

/**
 * Componente Footer que muestra información de contacto y redes sociales.
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 @vicentegm2. Todos los derechos reservados.</p>
        <nav class="social-links">
          <a href="https://twitter.com/vicenteGM28" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://linkedin.com/in/vicentegabrielgomezmedina" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://instagram.com/vicentegm02" target="_blank" rel="noreferrer">Instagram</a>
        </nav>
      </div>
    </footer>
  `,
  
})
export class Footer {}