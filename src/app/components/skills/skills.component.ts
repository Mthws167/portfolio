import { Component } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="section skills">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Skills</span>
          <h2>Technology Stack</h2>
          <p>Technologies proven through professional experience and public projects.</p>
        </div>
        
        <div class="skills-grid">
          @for (category of data.skills; track category.name) {
            <div class="skill-card">
              <div class="skill-header">
                <span class="skill-icon">{{ category.icon }}</span>
                <h3>{{ category.name }}</h3>
              </div>
              <div class="skill-tags">
                @for (skill of category.skills; track skill) {
                  <span class="skill-tag">{{ skill }}</span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.25rem;
    }

    .skill-card {
      background: var(--color-bg-card);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-lg);
      padding: 1.5rem;
      transition: all var(--transition);
      
      &:hover {
        border-color: var(--color-border);
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
      }
    }

    .skill-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
      
      .skill-icon {
        font-size: 1.35rem;
      }
      
      h3 {
        font-size: 1.05rem;
        color: var(--color-text);
      }
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .skill-tag {
      padding: 0.3rem 0.7rem;
      font-size: 0.8rem;
      font-weight: 500;
      background: var(--color-bg-elevated);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-sm);
      color: var(--color-text-secondary);
      transition: all var(--transition);
      
      &:hover {
        border-color: var(--color-primary);
        color: var(--color-primary);
        background: var(--color-primary-muted);
      }
    }
  `]
})
export class SkillsComponent {
  constructor(public data: PortfolioDataService) {}
}
