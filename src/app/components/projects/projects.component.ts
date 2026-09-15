import { Component, signal } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="section projects">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Portfolio</span>
          <h2>Featured Projects</h2>
          <p>Personal and technical projects demonstrating skills in backend, full stack, and architecture.</p>
        </div>
        
        <div class="filter-bar">
          <button 
            class="filter-btn" 
            [class.active]="filter() === 'all'"
            (click)="setFilter('all')">
            All
          </button>
          <button 
            class="filter-btn" 
            [class.active]="filter() === 'backend'"
            (click)="setFilter('backend')">
            Backend
          </button>
          <button 
            class="filter-btn" 
            [class.active]="filter() === 'fullstack'"
            (click)="setFilter('fullstack')">
            Full Stack
          </button>
        </div>
        
        <div class="projects-grid">
          @for (project of filteredProjects(); track project.id) {
            <article class="project-card">
              <div class="project-card-header">
                <span class="category-badge" [attr.data-category]="project.category">
                  {{ project.category === 'backend' ? 'Backend' : 'Full Stack' }}
                </span>
                <span class="status">{{ project.status }}</span>
              </div>
              
              <h3>{{ project.title }}</h3>
              <p class="description">{{ project.description }}</p>
              
              <div class="highlights">
                @for (h of project.highlights.slice(0, 3); track h) {
                  <div class="highlight-item">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12 2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {{ h }}
                  </div>
                }
              </div>
              
              <div class="tech-stack">
                @for (tech of project.technologies.slice(0, 5); track tech) {
                  <span class="badge">{{ tech }}</span>
                }
                @if (project.technologies.length > 5) {
                  <span class="badge more">+{{ project.technologies.length - 5 }}</span>
                }
              </div>
              
              <div class="project-actions">
                <a [href]="project.githubUrl" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Code
                </a>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .filter-bar {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 0.5rem 1.15rem;
      font-size: 0.875rem;
      font-weight: 500;
      border-radius: 999px;
      color: var(--color-text-secondary);
      border: 1px solid var(--color-border);
      transition: all var(--transition);
      
      &:hover {
        color: var(--color-text);
        border-color: var(--color-text-muted);
      }
      
      &.active {
        background: var(--color-primary);
        color: white;
        border-color: var(--color-primary);
      }
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
    }

    .project-card {
      background: var(--color-bg-card);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-lg);
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      transition: all var(--transition);
      
      &:hover {
        border-color: rgba(99, 102, 241, 0.35);
        box-shadow: var(--shadow-glow);
        transform: translateY(-4px);
      }
      
      h3 {
        font-size: 1.15rem;
        margin-bottom: 0.6rem;
        color: var(--color-text);
      }
      
      .description {
        font-size: 0.9rem;
        margin-bottom: 1.25rem;
        flex-grow: 0;
        line-height: 1.6;
      }
    }

    .project-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .category-badge {
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 0.25rem 0.65rem;
      border-radius: 999px;
      
      &[data-category="backend"] {
        background: rgba(34, 211, 238, 0.12);
        color: var(--color-accent);
        border: 1px solid rgba(34, 211, 238, 0.25);
      }
      
      &[data-category="fullstack"] {
        background: var(--color-primary-muted);
        color: var(--color-primary);
        border: 1px solid rgba(99, 102, 241, 0.25);
      }
    }

    .status {
      font-size: 0.75rem;
      color: var(--color-text-muted);
    }

    .highlights {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      margin-bottom: 1.25rem;
      flex-grow: 1;
      
      .highlight-item {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        font-size: 0.85rem;
        color: var(--color-text-secondary);
        
        svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--color-success);
        }
      }
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem;
      margin-bottom: 1.25rem;
      
      .badge.more {
        background: var(--color-bg-hover);
        color: var(--color-text-muted);
        border-color: var(--color-border);
      }
    }

    .project-actions {
      margin-top: auto;
      
      .btn-sm {
        padding: 0.55rem 1.1rem;
        font-size: 0.85rem;
      }
    }
  `]
})
export class ProjectsComponent {
  filter = signal<'all' | 'backend' | 'fullstack'>('all');
  projects: Project[];

  constructor(public data: PortfolioDataService) {
    this.projects = data.projects;
  }

  setFilter(f: 'all' | 'backend' | 'fullstack') {
    this.filter.set(f);
  }

  filteredProjects() {
    const f = this.filter();
    if (f === 'all') return this.projects;
    return this.projects.filter(p => p.category === f);
  }
}
