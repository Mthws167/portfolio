import { Component } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section about">
      <div class="container">
        <div class="section-header">
          <span class="section-label">About me</span>
          <h2>Who I am</h2>
        </div>
        
        <div class="about-grid">
          <div class="about-text">
            @for (paragraph of paragraphs; track $index) {
              <p>{{ paragraph }}</p>
            }
            
            <div class="languages">
              <h4>Languages</h4>
              <div class="lang-list">
                @for (lang of data.languages; track lang.name) {
                  <div class="lang-item">
                    <span class="lang-name">{{ lang.name }}</span>
                    <span class="lang-level">{{ lang.level }}</span>
                  </div>
                }
              </div>
            </div>
          </div>
          
          <div class="about-cards">
            <div class="focus-card">
              <div class="focus-icon">🎯</div>
              <h4>What I build</h4>
              <ul>
                <li>Backend systems and REST APIs</li>
                <li>Distributed systems and integrations</li>
                <li>IoT platforms</li>
                <li>Full stack applications</li>
                <li>Solutions with applied AI</li>
              </ul>
            </div>
            
            <div class="focus-card education">
              <div class="focus-icon">🎓</div>
              <h4>Education</h4>
              <p><strong>Bacharelado em Engenharia de Software</strong></p>
              <p class="muted">IFPR — Campus Paranavaí (2022–2023)</p>
              
              <h4 style="margin-top: 1.25rem">Certifications</h4>
              <ul class="certs">
                <li>Large-Scale Systems Architecture</li>
                <li>AI Fundamentals and the Cloud (AWS)</li>
                <li>Google AI Essentials & Prompt Engineering</li>
                <li>Java & AI Bootcamp (DIO)</li>
                <li>EF SET English Certificate (B2)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 3rem;
      align-items: start;
      
      @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .about-text {
      p {
        margin-bottom: 1.25rem;
        line-height: 1.75;
      }
    }

    .languages {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--color-border-subtle);
      
      h4 {
        margin-bottom: 0.75rem;
        color: var(--color-text);
      }
    }

    .lang-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .lang-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 0.9rem;
      background: var(--color-bg-card);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      
      .lang-name {
        font-weight: 600;
        font-size: 0.9rem;
      }
      
      .lang-level {
        font-size: 0.8rem;
        color: var(--color-text-muted);
      }
    }

    .about-cards {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .focus-card {
      background: var(--color-bg-card);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-lg);
      padding: 1.5rem;
      transition: all var(--transition);
      
      &:hover {
        border-color: var(--color-border);
        box-shadow: var(--shadow-md);
      }
      
      .focus-icon {
        font-size: 1.5rem;
        margin-bottom: 0.75rem;
      }
      
      h4 {
        margin-bottom: 0.75rem;
        color: var(--color-text);
      }
      
      ul {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        
        li {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          padding-left: 1rem;
          position: relative;
          
          &::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--color-primary);
            font-size: 0.8rem;
          }
        }
      }
      
      p {
        font-size: 0.9rem;
        margin-bottom: 0.25rem;
        
        &.muted {
          color: var(--color-text-muted);
          font-size: 0.85rem;
        }
      }
      
      .certs li {
        font-size: 0.85rem;
      }
    }
  `]
})
export class AboutComponent {
  paragraphs: string[] = [];

  constructor(public data: PortfolioDataService) {
    this.paragraphs = data.personalInfo.about.split('\n\n').filter(p => p.trim());
  }
}
