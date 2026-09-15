import { Component } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="section contact">
      <div class="container">
        <div class="contact-card">
          <div class="section-header">
            <span class="section-label">Contact</span>
            <h2>Let's talk?</h2>
            <p>I am open to remote work opportunities, interesting projects, and collaborations. Get in touch!</p>
          </div>
          
          <div class="contact-links">
            <a [href]="data.personalInfo.linkedin" target="_blank" rel="noopener" class="contact-link">
              <div class="link-icon linkedin">in</div>
              <div class="link-info">
                <strong>LinkedIn</strong>
                <span>linkedin.com/in/mthws167</span>
              </div>
              <span class="arrow">→</span>
            </a>
            
            <a [href]="data.personalInfo.github" target="_blank" rel="noopener" class="contact-link">
              <div class="link-icon github">GH</div>
              <div class="link-info">
                <strong>GitHub</strong>
                <span>github.com/Mthws167</span>
              </div>
              <span class="arrow">→</span>
            </a>
          </div>
          
          <p class="availability">
            <span class="status-dot"></span>
            Available for remote opportunities · Brazil
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-card {
      background: var(--color-bg-card);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-xl);
      padding: 3rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      
      @media (max-width: 600px) {
        padding: 2rem 1.5rem;
      }
      
      .section-header {
        margin-bottom: 2.5rem;
        
        p {
          margin: 0 auto;
        }
      }
    }

    .contact-links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 480px;
      margin: 0 auto 2rem;
    }

    .contact-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.15rem 1.5rem;
      background: var(--color-bg-elevated);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      transition: all var(--transition);
      text-align: left;
      
      &:hover {
        border-color: var(--color-primary);
        background: var(--color-bg-hover);
        transform: translateX(4px);
        
        .arrow {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .link-icon {
        width: 48px;
        height: 48px;
        border-radius: var(--radius-md);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-weight: 700;
        font-size: 0.9rem;
        
        &.linkedin {
          background: rgba(10, 102, 194, 0.15);
          color: #0a66c2;
        }
        
        &.github {
          background: rgba(255, 255, 255, 0.08);
          color: var(--color-text);
        }
      }
      
      .link-info {
        flex: 1;
        
        strong {
          display: block;
          font-size: 0.95rem;
          margin-bottom: 0.15rem;
        }
        
        span {
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }
      }
      
      .arrow {
        opacity: 0;
        transform: translateX(-8px);
        transition: all var(--transition);
        color: var(--color-primary);
        font-size: 1.25rem;
      }
    }

    .availability {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      color: var(--color-text-secondary);
      
      .status-dot {
        width: 8px;
        height: 8px;
        background: var(--color-success);
        border-radius: 50%;
        animation: pulse-dot 2s ease infinite;
      }
    }

    @keyframes pulse-dot {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
  `]
})
export class ContactComponent {
  constructor(public data: PortfolioDataService) {}
}
