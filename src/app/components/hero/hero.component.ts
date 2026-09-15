import { Component } from '@angular/core';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="hero">
      <div class="hero-bg">
        <div class="grid-pattern"></div>
        <div class="glow glow-1"></div>
        <div class="glow glow-2"></div>
      </div>
      
      <div class="container hero-content">
        <div class="hero-badge animate-in">
          <span class="status-dot"></span>
          Available for opportunities
        </div>
        
        <h1 class="animate-in" style="animation-delay: 0.1s">
          {{ data.personalInfo.name }}
        </h1>
        
        <p class="hero-title animate-in" style="animation-delay: 0.2s">
          {{ data.personalInfo.title }}
        </p>
        
        <p class="hero-subtitle animate-in" style="animation-delay: 0.3s">
          {{ data.personalInfo.subtitle }}
        </p>
        
        <p class="hero-location animate-in" style="animation-delay: 0.35s">
          📍 {{ data.personalInfo.location }}
        </p>
        
        <div class="hero-actions animate-in" style="animation-delay: 0.4s">
          <a href="#projects" class="btn btn-primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a [href]="data.personalInfo.github" target="_blank" rel="noopener" class="btn btn-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a [href]="data.personalInfo.linkedin" target="_blank" rel="noopener" class="btn btn-ghost">
            LinkedIn
          </a>
        </div>
        
        <div class="hero-stats animate-in" style="animation-delay: 0.5s">
          <div class="stat">
            <span class="stat-value">3+</span>
            <span class="stat-label">Years of experience</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-value">6+</span>
            <span class="stat-label">Professional projects</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-value">5</span>
            <span class="stat-label">Featured projects</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: calc(var(--header-height) + 2rem) 0 4rem;
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
      
      .grid-pattern {
        position: absolute;
        inset: 0;
        background-image: 
          linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
        background-size: 60px 60px;
        mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent);
      }
      
      .glow {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        
        &.glow-1 {
          width: 500px;
          height: 500px;
          background: rgba(99, 102, 241, 0.12);
          top: -10%;
          right: -5%;
        }
        
        &.glow-2 {
          width: 400px;
          height: 400px;
          background: rgba(34, 211, 238, 0.08);
          bottom: 10%;
          left: -10%;
        }
      }
    }

    .hero-content {
      position: relative;
      z-index: 1;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 1rem;
      background: rgba(52, 211, 153, 0.1);
      border: 1px solid rgba(52, 211, 153, 0.25);
      border-radius: 999px;
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--color-success);
      margin-bottom: 1.5rem;
      
      .status-dot {
        width: 8px;
        height: 8px;
        background: var(--color-success);
        border-radius: 50%;
        animation: pulse-dot 2s ease infinite;
      }
    }

    @keyframes pulse-dot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.85); }
    }

    h1 {
      margin-bottom: 0.75rem;
      background: linear-gradient(135deg, #fff 0%, #a0a0b0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-title {
      font-size: 1.35rem;
      font-weight: 600;
      color: var(--color-primary);
      margin-bottom: 0.5rem;
    }

    .hero-subtitle {
      font-size: 1.1rem;
      color: var(--color-text-secondary);
      margin-bottom: 0.5rem;
      max-width: 500px;
    }

    .hero-location {
      font-size: 0.95rem;
      color: var(--color-text-muted);
      margin-bottom: 2rem;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 3.5rem;
    }

    .hero-stats {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 1.5rem 2rem;
      background: var(--color-bg-card);
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-lg);
      width: fit-content;
      
      @media (max-width: 600px) {
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        align-items: flex-start;
      }
    }

    .stat {
      display: flex;
      flex-direction: column;
      
      .stat-value {
        font-size: 1.75rem;
        font-weight: 800;
        color: var(--color-text);
        letter-spacing: -0.02em;
      }
      
      .stat-label {
        font-size: 0.8rem;
        color: var(--color-text-muted);
      }
    }

    .stat-divider {
      width: 1px;
      height: 40px;
      background: var(--color-border);
      
      @media (max-width: 600px) {
        width: 100%;
        height: 1px;
      }
    }
  `]
})
export class HeroComponent {
  constructor(public data: PortfolioDataService) {}
}
