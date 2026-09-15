import { Component, signal } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { ExperienceProject } from '../../models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="section experience">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Career</span>
          <h2>Professional Experience</h2>
          <p>Work across AgTech, Digital Health, Food Service, and Logistics projects.</p>
        </div>
        
        <div class="exp-card">
          <div class="exp-header">
            <div class="exp-company">
              <div class="company-logo">NA</div>
              <div>
                <h3>{{ exp.role }}</h3>
                <p class="company-name">{{ exp.company }}</p>
              </div>
            </div>
            <div class="exp-meta">
              <span class="period">{{ exp.period }}</span>
              <span class="location">📍 {{ exp.location }}</span>
            </div>
          </div>
          
          <div class="projects-grid">
            @for (project of exp.projects; track project.name) {
              <div class="project-item" [class.expanded]="expanded() === project.name" (click)="toggle(project.name)">
                <div class="project-item-header">
                  <div>
                    <h4>{{ project.name }}</h4>
                    <span class="domain">{{ project.domain }}</span>
                  </div>
                  <span class="expand-icon">{{ expanded() === project.name ? '−' : '+' }}</span>
                </div>
                
                @if (expanded() === project.name) {
                  <div class="project-item-body">
                    <p>{{ project.description }}</p>
                    
                    @if (project.contributions.length) {
                      <div class="contributions">
                        <strong>Contributions:</strong>
                        <ul>
                          @for (c of project.contributions; track c) {
                            <li>{{ c }}</li>
                          }
                        </ul>
                      </div>
                    }
                    
                    <div class="tech-tags">
                      @for (tech of project.technologies; track tech) {
                        <span class="badge">{{ tech }}</span>
                      }
                    </div>
                  </div>
                }
              </div>
            }
          </div>
        </div>
        
        <!-- Timeline -->
        <div class="timeline-section">
          <h3 class="timeline-title">Career Timeline</h3>
          <div class="timeline">
            @for (event of data.timeline; track event.year; let last = $last) {
              <div class="timeline-item">
                <div class="timeline-marker">
                  <div class="dot"></div>
                  @if (!last) {
                    <div class="line"></div>
                  }
                </div>
                <div class="timeline-content">
                  <span class="year">{{ event.year }}</span>
                  <h4>{{ event.title }}</h4>
                  <p>{{ event.description }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .exp-card {
      background: var(--color-bg-card);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-xl);
      padding: 2rem;
      margin-bottom: 3.5rem;
    }

    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--color-border-subtle);
      flex-wrap: wrap;
      gap: 1rem;
    }

    .exp-company {
      display: flex;
      align-items: center;
      gap: 1rem;
      
      .company-logo {
        width: 52px;
        height: 52px;
        background: linear-gradient(135deg, var(--color-primary), #4f46e5);
        border-radius: var(--radius-md);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 1rem;
        color: white;
      }
      
      h3 {
        font-size: 1.15rem;
        margin-bottom: 0.15rem;
      }
      
      .company-name {
        color: var(--color-primary);
        font-weight: 500;
        font-size: 0.95rem;
        margin: 0;
      }
    }

    .exp-meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.25rem;
      
      .period {
        font-weight: 600;
        font-size: 0.9rem;
        color: var(--color-text);
      }
      
      .location {
        font-size: 0.85rem;
        color: var(--color-text-muted);
      }
      
      @media (max-width: 600px) {
        align-items: flex-start;
      }
    }

    .projects-grid {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .project-item {
      background: var(--color-bg-elevated);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      padding: 1.15rem 1.25rem;
      cursor: pointer;
      transition: all var(--transition);
      
      &:hover {
        border-color: var(--color-border);
      }
      
      &.expanded {
        border-color: rgba(99, 102, 241, 0.4);
        background: var(--color-bg-hover);
      }
    }

    .project-item-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      h4 {
        font-size: 1rem;
        margin-bottom: 0.2rem;
      }
      
      .domain {
        font-size: 0.8rem;
        color: var(--color-text-muted);
      }
      
      .expand-icon {
        font-size: 1.25rem;
        color: var(--color-primary);
        font-weight: 300;
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-primary-muted);
        border-radius: 50%;
        flex-shrink: 0;
      }
    }

    .project-item-body {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid var(--color-border-subtle);
      animation: fadeIn 0.3s ease;
      
      p {
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }
      
      .contributions {
        margin-bottom: 1rem;
        
        strong {
          font-size: 0.85rem;
          color: var(--color-text);
        }
        
        ul {
          margin-top: 0.4rem;
          
          li {
            font-size: 0.85rem;
            color: var(--color-text-secondary);
            padding-left: 1rem;
            position: relative;
            margin-bottom: 0.25rem;
            
            &::before {
              content: '•';
              position: absolute;
              left: 0;
              color: var(--color-primary);
            }
          }
        }
      }
      
      .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
      }
    }

    .timeline-section {
      .timeline-title {
        margin-bottom: 2rem;
        font-size: 1.35rem;
      }
    }

    .timeline {
      position: relative;
    }

    .timeline-item {
      display: flex;
      gap: 1.25rem;
      min-height: 90px;
    }

    .timeline-marker {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
      
      .dot {
        width: 14px;
        height: 14px;
        background: var(--color-primary);
        border-radius: 50%;
        border: 3px solid var(--color-primary-muted);
        flex-shrink: 0;
        z-index: 1;
      }
      
      .line {
        width: 2px;
        flex: 1;
        background: var(--color-border);
        margin: 4px 0;
      }
    }

    .timeline-content {
      padding-bottom: 1.75rem;
      
      .year {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--color-primary);
        font-family: var(--font-mono);
      }
      
      h4 {
        margin: 0.25rem 0 0.35rem;
        font-size: 1rem;
      }
      
      p {
        font-size: 0.9rem;
        margin: 0;
      }
    }
  `]
})
export class ExperienceComponent {
  exp;
  expanded = signal<string | null>(null);

  constructor(public data: PortfolioDataService) {
    this.exp = data.experience;
  }

  toggle(name: string) {
    this.expanded.update(current => current === name ? null : name);
  }
}
