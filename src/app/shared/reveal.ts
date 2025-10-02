import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private r: Renderer2) {}

  ngOnInit() {
    this.r.setStyle(this.el.nativeElement, 'opacity', '0');
    this.r.setStyle(this.el.nativeElement, 'transform', 'translateY(8px)');
    this.r.setStyle(this.el.nativeElement, 'transition', 'opacity .35s ease, transform .35s ease');

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.r.setStyle(this.el.nativeElement, 'opacity', '1');
          this.r.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
          this.observer?.unobserve(this.el.nativeElement);
        }
      });
    }, { threshold: 0.15 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}