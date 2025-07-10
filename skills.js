// skills.js

export const skills = [
    { name: "HTML", image: "./images/html_css.webp" },
    { name: "JavaScript", image: "./images/js.png" },
    { name: "React", image: "./images/react.webp" },
    { name: "Node.js", image: "./images/nodejs.png" },
    { name: "MongoDB", image: "./images/mongodb.png" },
    { name: "PHP", image: "./images/php.png" },
    { name: "Java", image: "./images/java.png" },
    { name: "Git", image: "./images/git.png" },
    { name: "Figma", image: "./images/figma.png" },
  ];
  
// Import the projects render function
import { renderProjectsSection } from './projects.js';

// Function to render the skills section and attach event listeners
export function renderSkillsSection() {
  const section = document.getElementById("skills");

  // Insert the container and grid for skill cards
  section.innerHTML = `
    <div class="skills-container">
      <h2 class="section-title">Skills & Technologies</h2>
      <div id="skills-grid" class="skills-grid"></div>
    </div>
  `;

  const skillsGrid = section.querySelector("#skills-grid");

  skills.forEach(skill => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.dataset.skill = skill.name;

    card.innerHTML = `
      <img src="${skill.image}" alt="${skill.name}" />
      <p>${skill.name}</p>
    `;

    // Add click event to filter projects by skill
    card.addEventListener("click", () => {
      // Remove 'selected' class from all skill cards
      document.querySelectorAll(".skill-card").forEach(c => c.classList.remove("selected"));

      // Add 'selected' class to the clicked card
      card.classList.add("selected");

      // Render projects filtered by clicked skill
      renderProjectsSection(skill.name);

      // Scroll to the projects section smoothly
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    });

    skillsGrid.appendChild(card);
  });

  // Initially render all projects with no filter
  renderProjectsSection();
}
  