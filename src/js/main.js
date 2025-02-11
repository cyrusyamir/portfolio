import '../css/style.css'
import { projects } from './projects.js'
import { switchTab, toggleDropdown, setupCloseDropdown } from './navigation.js'
/*
// Make functions available globally
window.switchTab = switchTab;
window.toggleDropdown = toggleDropdown;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
  setupCloseDropdown();
});

// Load projects into the projects container
function loadProjects() {
  const projectsContainer = document.getElementById('projectsContainer');

  projects.forEach(project => {
    const projectElement = createProjectCard(project);
    projectsContainer.appendChild(projectElement);
  });
}

// Create a project card element
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';

  card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" class="project-link github-link" target="_blank">
                    <i class="fab fa-github"></i> GitHub
                </a>
                <a href="${project.live}" class="project-link demo-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            </div>
        </div>
    `;

  return card;
}


// Tab switching functionality
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and content
      tabButtons.forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });

      // Add active class to clicked button and corresponding content
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
});

// Optional: Add smooth scroll to top when switching tabs
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
} */

//via deepseek

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  // Activate initial tab
  document.querySelector('.tab-btn.active').click();

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      const target = tab.dataset.tab;
      document.getElementById(target).classList.add('active');
    });
  });
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add card hover effects
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});