// Array of objects representing the project cards
const projects = [
    {
        image: "/img/html_css.png",
        name: 'HTML & CSS'
    },
    {
        image: "/img/js.png",
        name: 'JavaScript'
    }, {
        image: "/img/java.png",
        name: 'Java'
    }, {
        image: "/img/PHP.png",
        name: 'PHP'
    }, {
        image: "/img/bootstrap.png",
        name: 'BootStrap'
    }, {
        image: "/img/C.png",
        name: 'C'
    },
];

// Generating the project cards
let container = document.getElementById('projects');
let inHTML = '';
projects.map((project) => {
    inHTML += `<div class="myprojects">
            <img src="${project.image}" alt="HEY">
            <br>
            <p>${project.name}</p>
            </div>`;
});
container.innerHTML = inHTML;

let inHTML2 = '';
const topProjects = document.getElementById('top-projects');
console.log(topProjects);

// const filteredProjects = projects.filter((project) => project.name.toLowerCase().trim() === 'html & css');

// filteredProjects.map((project) => {
//     inHTML2 += `<div class="myprojects2">
//     <img src="${project.image}" alt="HEY">
//     <br>
//     <p>${project.name}</p>
//     </div>`;
// });

// topProjects.innerHTML = inHTML2;
