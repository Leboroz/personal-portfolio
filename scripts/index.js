window.onload = function () {
  const hamburgerMenu = document.querySelector('#hamburger');
  const menu = document.querySelector('#menu');
  const closeMenu = document.querySelector('#closeMenu');
  const closeNavLink = document.querySelectorAll('li.nav-link a');
  const openAndClose = function () {
    menu.classList.toggle('visible-menu');
  };
  hamburgerMenu.addEventListener('click', openAndClose);
  closeMenu.addEventListener('click', openAndClose);
  closeNavLink.forEach((element) => {
    element.addEventListener('click', openAndClose);
  });
  //----------------------------------------------Array of projects
  let arrOfProjects = [
    { image: "../assets/images/projects/project-1.svg",
      title: "Project name goes here",
      languages: ["HTML/CSS", "Ruby on Rails", "Javascript"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      linkLiveVersion: "#",
      linkToSource: "#"
    },
    { image: "../assets/images/projects/project-2.svg",
      title: "Project name goes...",
      languages: ["HTML/CSS", "Ruby on Rails", "+1"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      linkLiveVersion: "#",
      linkToSource: "#"
    },
    { image: "../assets/images/projects/project-3.svg",
      title: "Project name goes...",
      languages: ["HTML/CSS", "Ruby on Rails", "+1"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      linkLiveVersion: "#",
      linkToSource: "#"
    },
    { image: "../assets/images/projects/project-4.svg",
      title: "Project name goes...",
      languages: ["HTML/CSS", "Ruby on Rails", "+1"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      linkLiveVersion: "#",
      linkToSource: "#"
    },
    { image: "../assets/images/projects/project-5.svg",
      title: "Project name goes here",
      languages: ["HTML/CSS", "Ruby on Rails", "Javascript"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      linkLiveVersion: "#",
      linkToSource: "#"
    },
    { image: "../assets/images/projects/project-6.svg",
      title: "Project name goes...",
      languages: ["HTML/CSS", "Ruby on Rails", "+1"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      linkLiveVersion: "#",
      linkToSource: "#"
    }
  ];
  let projects = arrOfProjects.map((element, index) => {
    const card = document.createElement('article');
    card.className = "project-card project-card-" + index+1;
    card.innerHTML = 
    `<img src="${element.image}" alt="project-${index+1}">
    <div class="card-body">
      <h2 class="card-header">${element.title}</h2>
      <ul class="languages">
        <li class="lang">${element.languages[0]}</li>
        <li class="lang">${element.languages[1]}</li>
        <li class="lang">${element.languages[2]}</li>
      </ul>
      <a href="#" class="project-link">See this project<i class="fas fa-arrow-right"></i></a>
    </div>`;
    return card;
  });
  const projectsSection = document.getElementById('Portfolio');
  for(let i = 0; i<projects.length; i+=1){
    projectsSection.appendChild(projects[i]);
    if(i==1){
      const div = document.createElement('div');
      div.className = 'project-decoration-1';
      projectsSection.appendChild(div);
    }
    if(i==4){
      for(let j = 0; j<3; j+=1){
        const div = document.createElement('div');
        div.className = `project-decoration-${j+2}`;
        projectsSection.appendChild(div);
      }
    }
  }
};

/*
<article class="project-card project-card-1">
        <img src="../assets/images/projects/project-1.svg" alt="project-1">
        <div class="card-body">
          <h2 class="card-header">Project name goes here</h2>
          <ul class="languages">
            <li class="lang">HTML/CSS</li>
            <li class="lang">Ruby on Rails</li>
            <li class="lang">Javascript</li>
          </ul>
          <a href="#" class="project-link">See this project<i class="fas fa-arrow-right"></i></a>
        </div>
      </article>
      <article class="project-card project-card-2">
        <img src="../assets/images/projects/project-2.svg" alt="project-2">
        <div class="card-body">
          <h2 class="card-header">Project name goes...</h2>
          <ul class="languages">
            <li class="lang">HTML/CSS</li>
            <li class="lang">Ruby on Rails</li>
            <li class="lang">+1</li>
          </ul>
          <a href="#" class="project-link">See this project<i class="fas fa-arrow-right"></i></a>
        </div>
      </article>
      <div class="project-decoration-1"></div>
      <article class="project-card project-card-3">
        <img src="../assets/images/projects/project-3.svg" alt="project-3">
        <div class="card-body">
          <h2 class="card-header">Project name goes...</h2>
          <ul class="languages">
            <li class="lang">HTML/CSS</li>
            <li class="lang">Ruby on Rails</li>
            <li class="lang">+1</li>
          </ul>
          <a href="#" class="project-link">See this project<i class="fas fa-arrow-right"></i></a>
        </div>
      </article>
      <article class="project-card project-card-4">
        <img src="../assets/images/projects/project-4.svg" alt="project-4">
        <div class="card-body">
          <h2 class="card-header">Project name goes...</h2>
          <ul class="languages">
            <li class="lang">HTML/CSS</li>
            <li class="lang">Ruby on Rails</li>
            <li class="lang">+1</li>
          </ul>
          <a href="#" class="project-link">See this project<i class="fas fa-arrow-right"></i></a>
        </div>
      </article>
      <article class="project-card project-card-5">
        <img src="../assets/images/projects/project-5.svg" alt="project-5">
        <div class="card-body">
          <h2 class="card-header">Project name goes here</h2>
          <ul class="languages">
            <li class="lang">HTML/CSS</li>
            <li class="lang">Ruby on Rails</li>
            <li class="lang">Javascript</li>
          </ul>
          <a href="#" class="project-link">See this project<i class="fas fa-arrow-right"></i></a>
        </div>
      </article>
      <div class="project-decoration-2"></div>
      <div class="project-decoration-3"></div>
      <div class="project-decoration-4"></div>
      <article class="project-card project-card-6">
        <img src="../assets/images/projects/project-6.svg" alt="project-6">
        <div class="card-body">
          <h2 class="card-header">Project name goes...</h2>
          <ul class="languages">
            <li class="lang">HTML/CSS</li>
            <li class="lang">Ruby on Rails</li>
            <li class="lang">+1</li>
          </ul>
          <a href="#" class="project-link">See this project<i class="fas fa-arrow-right"></i></a>
        </div>
      </article>
*/