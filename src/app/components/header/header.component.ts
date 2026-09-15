import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header" [class.scrolled]="scrolled()" [class.menu-open]="menuOpen()">
      <div class="container header-inner">
        <a href="#home" class="logo" (click)="closeMenu()">
          <span class="logo-mark">MO</span>
          <span class="logo-text">Matheus Oliveira</span>
        </a>

        <nav class="nav" [class.open]="menuOpen()">
          <a href="#about" (click)="closeMenu()">About</a>
          <a href="#experience" (click)="closeMenu()">Experience</a>
          <a href="#projects" (click)="closeMenu()">Projects</a>
          <a href="#skills" (click)="closeMenu()">Skills</a>
          <a href="#contact" class="nav-cta" (click)="closeMenu()">Contact</a>
        </nav>

        <button class="menu-toggle" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen()" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: var(--header-height);
      z-index: 1000;
      transition: all var(--transition);
      background: transparent;
      
      &.scrolled {
        background: rgba(10, 10, 15, 0.85);
        backdrop-filter: blur(16px);
        border-bottom: 1px solid var(--color-border-subtle);
        box-shadow: var(--shadow-sm);
      }
    }

    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-weight: 700;
      font-size: 1.05rem;
      
      .logo-mark {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
        border-radius: var(--radius-sm);
        font-size: 0.8rem;
        font-weight: 800;
        color: white;
        letter-spacing: -0.02em;
      }
      
      .logo-text {
        @media (max-width: 480px) {
          display: none;
        }
      }
    }

    .nav {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      
      a {
        padding: 0.5rem 0.9rem;
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--color-text-secondary);
        border-radius: var(--radius-sm);
        transition: all var(--transition);
        
        &:hover {
          color: var(--color-text);
          background: var(--color-bg-hover);
        }
        
        &.nav-cta {
          margin-left: 0.5rem;
          background: var(--color-primary-muted);
          color: var(--color-primary);
          border: 1px solid rgba(99, 102, 241, 0.3);
          
          &:hover {
            background: var(--color-primary);
            color: white;
            border-color: var(--color-primary);
          }
        }
      }
      
      @media (max-width: 768px) {
        position: fixed;
        top: var(--header-height);
        left: 0;
        right: 0;
        flex-direction: column;
        background: rgba(10, 10, 15, 0.98);
        backdrop-filter: blur(20px);
        padding: 1.5rem;
        gap: 0.5rem;
        border-bottom: 1px solid var(--color-border);
        transform: translateY(-120%);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        
        &.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }
        
        a {
          width: 100%;
          text-align: center;
          padding: 0.85rem;
          font-size: 1rem;
          
          &.nav-cta {
            margin-left: 0;
            margin-top: 0.5rem;
          }
        }
      }
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      padding: 0.5rem;
      
      span {
        display: block;
        width: 22px;
        height: 2px;
        background: var(--color-text);
        border-radius: 1px;
        transition: all 0.3s ease;
      }
      
      @media (max-width: 768px) {
        display: flex;
      }
    }

    .header.menu-open .menu-toggle span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    .header.menu-open .menu-toggle span:nth-child(2) {
      opacity: 0;
    }
    .header.menu-open .menu-toggle span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  `]
})
export class HeaderComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
