import '../styles/styles.scss';
import arrOfProjects from './projects';
import resume from '../assets/images/Leonardo-Albornoz.pdf';
import { navbar, modal } from './components'
import { intro, work, about, footer, contact, introMobileImage } from './sections'

const main = document.createElement('main');
main.append(intro, work, about, contact);
// Append Sections
document
  .querySelector('body')
  .append(navbar, main, footer, modal);

const hamburgerMenu = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const closeMenu = document.querySelector('#closeMenu');
const closeNavLink = document.querySelectorAll('li.nav-link a');
const openAndClose = function() {
  menu.classList.toggle('visible-menu');
};
hamburgerMenu.addEventListener('click', openAndClose);
closeMenu.addEventListener('click', openAndClose);
closeNavLink.forEach((element) => {
  element.addEventListener('click', openAndClose);
});
let index = 0;
// ----------------------------------------------Array of projects

const projects = arrOfProjects.map((element, index) => {
  const card = document.createElement('article');
  card.className = `project-card project-card-${index + 1}`;
  const img = new Image();
  img.src = element.image;
  card.append(img);
  card.innerHTML += `
      <div class="card-body">
      <h2 class="card-header">${element.title}</h2>
      <ul class="languages">
        <li class="lang">${element.languages[0]}</li>
        <li class="lang">${element.languages[1]}</li>
        <li class="lang">${element.languages[2]}</li>
      </ul>
      <button data-card-id="${index}" class="project-link" type="button">See this project<i class="fas fa-arrow-right"></i></button>
    </div>`;
  return card;
});
const projectsSection = document.getElementById('Portfolio');
for (let i = 0; i < projects.length; i += 1) {
  projectsSection.appendChild(projects[i]);
  if (i === 1) {
    const div = document.createElement('div');
    div.className = 'project-decoration project-decoration-1';
    projectsSection.appendChild(div);
  }
  if (i === 4) {
    for (let j = 0; j < 3; j += 1) {
      const div = document.createElement('div');
      div.className = `project-decoration project-decoration-${j + 2}`;
      projectsSection.appendChild(div);
    }
  }
}

const modaBody = document.querySelector('#modal_body');

const closeModal = () => {
  document.querySelector('#modal').classList.remove('open-modal');
};
const closeModalButton = document.querySelector('#close_modal');
closeModalButton.addEventListener('click', closeModal);

const fillModal = (project, modal) => {
  modal.querySelector('#title').innerText = project.title;
  const image = modal.querySelector('#image');
  image.src = project.image
  image.alt = project.title
  modal.querySelector('#languages').innerHTML = `
        <li class="modal-language">${project.languages[0]}</li>
        <li class="modal-language">${project.languages[1]}</li>
        <li class="modal-language">${project.languages[2]}</li>
`
  modal.querySelector('#description').innerText = project.description;
  modal.querySelector('#seeLive').setAttribute("href", project.linkLiveVersion);
  modal.querySelector('#seeSource').setAttribute("href", project.linkToSource);
}

const move = (index) => {
  fillModal(arrOfProjects[index], modal)
}

modal.querySelector('#next_project').addEventListener('click', () => {
  if (index < arrOfProjects.length - 1)
    move(++index)
})

modal.querySelector('#previous_project').addEventListener('click', () => {
  if (index > 0)
    move(--index)
})


const openModal = (e) => {
  index = parseInt(e.target.dataset.cardId);
  const project = arrOfProjects[index];
  const modal = document.getElementById('modal');
  fillModal(project, modal);
  modal.classList.add('open-modal');
};

const aboutHeader = document.querySelector('#aboutHeader');
const resumeLink = document.createElement('a');
resumeLink.className = 'btn';
resumeLink.href = resume;
resumeLink.setAttribute('download', 'leonardo-albornoz-resume');
resumeLink.innerHTML = `<span>Get my CV<i class="fas fa-download"></i></span>`
aboutHeader.appendChild(resumeLink);

const projectButtons = document.querySelectorAll('.project-link');
projectButtons.forEach((button) => {
  button.addEventListener('click', openModal);
});

const form = document.getElementById('form');
const email = document.getElementById('email');

const closeError = ({ target }) => {
  document.querySelector('body').removeChild(target.parentNode);
};
const showError = (message) => {
  const error = document.createElement('div');
  error.className = 'error';
  error.innerHTML = `<span id="close_error" class="close-error">x</span>
      <p class="par">${message}</p>
      <button id="ok_error" class="btn">Ok</button>
      `;
  document.querySelector('body').appendChild(error);
  document.querySelector('#close_error').addEventListener('click', closeError);
  document.querySelector('#ok_error').addEventListener('click', closeError);
};
form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    showError('The email should be lower-case!');
    e.preventDefault();
  }
});

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      // everything except Firefox
      && (e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && storage
      && storage.length !== 0
    );
  }
}

const formFields = Array.of(...document.getElementsByClassName('form-field'));
let fields = { name: String, email: String, message: String };

if (storageAvailable('localStorage')) {
  if (sessionStorage.getItem('fields')) {
    fields = JSON.parse(sessionStorage.getItem('fields'));
    formFields.forEach((field) => {
      if (fields[field.id]) {
        field.value = fields[field.id];
      }
    });
  }
} else {
  console.log('Local Storage not available');
}

const updateHandler = ({ target }) => {
  fields[target.id] = target.value;
  localStorage.setItem('fields', JSON.stringify(fields));
};

formFields.forEach((field) => {
  field.addEventListener('change', updateHandler);
  field.addEventListener('keypress', updateHandler);
});

const projectCards = Array.of(...document.querySelectorAll('.project-card'));
projectCards.forEach((projectCard) => {
  projectCard.addEventListener('mouseenter', (e) => {
    if (window.innerWidth > 991) e.target.children[1].classList.add('slide-up');
  });
  projectCard.addEventListener('mouseleave', (e) => {
    if (window.innerWidth > 991) e.target.children[1].classList.remove('slide-up');
  });
});
