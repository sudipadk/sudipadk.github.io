// projects.js

// projects.js

export const projects = [
    // HTML/CSS Projects
    {
      title: "Spotify Clone",
      desc: "A responsive Spotify music player clone with sleek UI using HTML and CSS.",
      thumbnail: "./thumbnails/spotify.png",
      skills: ["HTML", "CSS"],
      tools: ["HTML", "CSS", "JavaScript"],
      demo: "",
      source: "https://github.com/sudipadk/html-projects/tree/main/Spotify%20Clone"
    },
    {
      title: "FoodMandu Clone",
      desc: "Food delivery app clone built with HTML and CSS, featuring modern design.",
      thumbnail: "./thumbnails/Foodmandu_Search_Page.png",
      skills: ["HTML", "CSS"],
      tools: ["HTML", "CSS", "JavaScript"],
      demo: "",
      source: ""
    },
    {
      title: "Calculator Design",
      desc: "A functional calculator design built purely with HTML and CSS.",
      thumbnail: "./thumbnails/calculator.png",
      skills: ["HTML", "CSS"],
      tools: ["HTML", "CSS", "JavaScript"],
      demo: "",
      source: "https://github.com/sudipadk/html-projects/tree/main/Calculator%20Design"
    },
  
    // PHP Projects
    {
      title: "Inventory Management",
      desc: "Basic inventory system with CRUD operations using PHP and MySQL.",
      thumbnail: "./thumbnails/srd_crud.png",
      skills: ["PHP"],
      tools: ["HTML", "CSS", "PHP", "MySQL"],
      demo: "",
      source: ""
    },
    {
      title: "Attendance System",
      desc: "Attendance tracking system for classrooms built with PHP.",
      thumbnail: "./thumbnails/attendance.png",
      skills: ["PHP"],
      tools: ["HTML", "CSS", "PHP", "MySQL"],
      demo: "",
      source: ""
    },
    {
      title: "Login/Signup Page",
      desc: "Secure login and signup page using PHP and sessions.",
      thumbnail: "./thumbnails/loginSignup.png",
      skills: ["PHP"],
      tools: ["HTML", "CSS", "PHP", "MySQL"],
      demo: "",
      source: ""
    },
    {
      title: "To-Do App",
      desc: "Simple To-Do list CRUD app created with PHP and MySQL.",
      thumbnail: "./thumbnails/todo-php.png",
      skills: ["PHP"],
      tools: ["HTML", "CSS", "PHP", "MySQL"],
      demo: "",
      source: ""
    },
    {
      title: "Simple CRUD App",
      desc: "Basic Create, Read, Update, Delete app built in PHP.",
      thumbnail: "./thumbnails/php-crud.png",
      skills: ["PHP"],
      tools: ["HTML", "CSS", "PHP", "MySQL"],
      demo: "",
      source: ""
    },
  
    // Java Projects
    {
      title: "Student Management System",
      desc: "Desktop application for managing student records using Java.",
      thumbnail: "./thumbnails/student_mgmt_sys.png",
      skills: ["Java"],
      tools: ["CSS", "Java"],
      demo: "",
      source: ""
    },
    {
      title: "Simple CRUD App",
      desc: "Basic CRUD operations implemented in Java.",
      thumbnail: "./thumbnails/java-crud.png",
      skills: ["Java"],
      tools: ["CSS", "Java"],
      demo: "",
      source: ""
    },
    {
      title: "Currency Converter",
      desc: "Currency converter application developed in Java.",
      thumbnail: "./thumbnails/currency_Converter.jpg",
      skills: ["Java"],
      tools: ["CSS", "Java"],
      demo: "",
      source: ""
    },
  
    // JavaScript Projects
    {
      title: "MS Paint Sample",
      desc: "Basic paint app implemented using JavaScript canvas.",
      thumbnail: "./thumbnails/ms-paint.png",
      skills: ["JavaScript"],
      tools: ["JavaScript"],
      demo: "",
      source: ""
    },
    {
      title: "Analog and Digital Clock",
      desc: "Real-time clocks built using JavaScript.",
      thumbnail: "./thumbnails/imageclock.png",
      skills: ["JavaScript"],
      tools: ["JavaScript"],
      demo: "",
      source: ""
    },
    {
      title: "Video Player",
      desc: "Custom video player controls with JavaScript.",
      thumbnail: "./thumbnails/video-player.png",
      skills: ["JavaScript"],
      tools: ["JavaScript"],
      demo: "",
      source: ""
    },
    {
      title: "Image Carousel",
      desc: "Automatic and manual image slider/carousel built with JS.",
      thumbnail: "./thumbnails/image-carousel.png",
      skills: ["JavaScript"],
      tools: ["JavaScript"],
      demo: "",
      source: ""
    },
    {
      title: "Basic Core JS CRUD",
      desc: "Simple CRUD application using vanilla JavaScript.",
      thumbnail: "./thumbnails/js-crud.png",
      skills: ["JavaScript"],
      tools: ["JavaScript"],
      demo: "",
      source: ""
    },
  
    // MERN Projects
    {
      title: "Event Booking and Management System",
      desc: "Full-stack MERN app for event booking and management.",
      thumbnail: "./thumbnails/event-booking.png",
      skills: ["React", "Node.js", "MongoDB"],
      tools: ["React", "MongoDB", "Node.js", "Express.js"],
      demo: "",
      source: ""
    },
  
    // React only Projects
    {
      title: "Quiz App",
      desc: "Interactive quiz application built with React.js.",
      thumbnail: "./thumbnails/React_Quiz_App.png",
      skills: ["React"],
      tools: ["React"],
      demo: "",
      source: ""
    },
    {
      title: "Todo App",
      desc: "Simple todo app using React hooks and components.",
      thumbnail: "./thumbnails/todo-react.png",
      skills: ["React"],
      tools: ["React"],
      demo: "",
      source: ""
    },
    {
      title: "Social Media Dashboard",
      desc: "Dashboard UI for social media metrics using React.",
      thumbnail: "./thumbnails/emp_dashboard.webp",
      skills: ["React"],
      tools: ["React"],
      demo: "",
      source: ""
    },
    {
      title: "Stop Watch",
      desc: "Stopwatch app developed with React.js.",
      thumbnail: "./thumbnails/stopwatch.png",
      skills: ["React"],
      tools: ["React"],
      demo: "",
      source: ""
    },
  
    // C Projects
    {
      title: "Library Management System",
      desc: "Console-based library management system coded in C.",
      thumbnail: "./thumbnails/library-management.png",
      skills: ["C"],
      tools: ["C"],
      demo: "",
      source: ""
    }
  ];
  
  
  export function renderProjectsSection(filteredSkill = null) {
    const section = document.getElementById("projects");
    section.innerHTML = `
      <div class="projects-container">
        <h2 class="section-title">Projects</h2>
        <div id="projects-grid" class="projects-grid"></div>
      </div>
    `;
  
    const projectsGrid = section.querySelector("#projects-grid");
  
    let displayedProjects = [];
  
    if (filteredSkill) {
      // Show all projects for selected skill
      displayedProjects = projects.filter(project => project.skills.includes(filteredSkill));
    } else {
      // Show only one project per skill as preview
      const seenSkills = new Set();
  
      for (const project of projects) {
        const uniqueSkill = project.skills.find(skill => !seenSkills.has(skill));
        if (uniqueSkill) {
          seenSkills.add(uniqueSkill);
          displayedProjects.push(project);
        }
        if (seenSkills.size >= getAllSkillsCount()) break;
      }
    }
  
    if (displayedProjects.length === 0) {
      projectsGrid.innerHTML = `<p>No projects found${filteredSkill ? ` for "${filteredSkill}"` : ''}</p>`;
      return;
    }
  
    displayedProjects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
  
      // Create tools HTML
      const toolsHTML = project.tools
        .map(tool => `<span class="project-tool">${tool}</span>`)
        .join(' ');
  
      card.innerHTML = `
        <img src="${project.thumbnail}" alt="${project.title} thumbnail" class="project-thumbnail" />
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        
        <div class="project-tools">${toolsHTML}</div>
  
        <div class="project-buttons">
          ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn btn-demo">Demo</a>` : ''}
          ${project.source ? `<a href="${project.source}" target="_blank" class="btn btn-source">Source</a>` : ''}
        </div>
      `;
  
      projectsGrid.appendChild(card);
    });
  }
  
  // Helper: total unique skills count in all projects
  function getAllSkillsCount() {
    const allSkills = new Set();
    projects.forEach(p => p.skills.forEach(s => allSkills.add(s)));
    return allSkills.size;
  }  