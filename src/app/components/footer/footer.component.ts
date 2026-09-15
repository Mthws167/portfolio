import { Component } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <span class="logo-mark">MH</span>
            <div>
              <strong>{{ data.personalInfo.name }}</strong>
              <p>{{ data.personalInfo.title }}</p>
            </div>
          </div>
          
          <div class="footer-links">
            <a [href]="data.personalInfo.github" target="_blank" rel="noopener">GitHub</a>
            <a [href]="data.personalInfo.linkedin" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>© {{ currentYear }} Matheus Henrique de Oliveira. All rights reserved.</p>
          <p class="built-with">Built with Angular · TypeScript · SCSS</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      border-top: 1px solid var(--color-border-subtle);
      padding: 2.5rem 0 1.5rem;
      background: var(--color-bg-elevated);
    }

    .footer-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      gap: 1.5rem;
    }

    .footer-brand {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      
      .logo-mark {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
        border-radius: var(--radius-sm);
        font-size: 0.85rem;
        font-weight: 800;
        color: white;
      }
      
      strong {
        display: block;
        font-size: 0.95rem;
      }
      
      p {
        font-size: 0.8rem;
        color: var(--color-text-muted);
        margin: 0;
      }
    }

    .footer-links {
      display: flex;
      gap: 1.5rem;
      
      a {
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--color-text-secondary);
        
        &:hover {
          color: var(--color-primary);
        }
      }
    }

    .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1.5rem;
      border-top: 1px solid var(--color-border-subtle);
      flex-wrap: wrap;
      gap: 0.5rem;
      
      p {
        font-size: 0.8rem;
        color: var(--color-text-muted);
        margin: 0;
      }
      
      .built-with {
        font-family: var(--font-mono);
        font-size: 0.75rem;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  constructor(public data: PortfolioDataService) {}
}
