import project1 from '../assets/images/projects/project-1.png';
import project2 from '../assets/images/projects/project-2.png';
import project3 from '../assets/images/projects/project-3.png';
import project4 from '../assets/images/projects/project-4.png';
import project5 from '../assets/images/projects/project-5.png';
import project6 from '../assets/images/projects/project-6.png';

const arrOfProjects = [
  {
    image: project1,
    title: 'Ballhead',
    languages: ['React-Redux', 'SASS', 'Javascript'],
    description:
      'this is a design for a mobile app that fetches from an pollution API and displays the data. Built with React-Redux and SASS.',
    linkLiveVersion: 'https://leboroz-ballhead.netlify.app/',
    linkToSource: 'https://github.com/Leboroz/ballhead-app',
  },
  {
    image: project2,
    title: 'Bookstore',
    languages: ['React', 'Bootstrap', '+1'],
    description:
      'This is a web App that displays a list of books and fetches an API. Built with React, Redux, Typescript, SASS.',
    linkLiveVersion: 'https://bookstore-leboroz.herokuapp.com/',
    linkToSource: 'https://github.com/Leboroz/bookstore',
  },
  {
    image: project3,
    title: 'Space Travelers',
    languages: ['React-Redux', 'Bootstrap', '+1'],
    description:
      'A web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions using real live data from the SpaceX API.',
    linkLiveVersion: 'https://space-travelers.herokuapp.com/',
    linkToSource: 'https://github.com/Leboroz/space-travelers',
  },
  {
    image: project4,
    title: 'To do',
    languages: ['Javascript', 'HTML', 'SASS'],
    description: 'This is a JavaScript application of a to do list.',
    linkLiveVersion: 'https://leboroz.github.io/to-do-list/',
    linkToSource: 'https://github.com/Leboroz/to-do-list/',
  },
  {
    image: project5,
    title: 'LATAM Annual Conference',
    languages: ['HTML/CSS', 'SASS', 'Javascript'],
    description: 'This is a website about a conference in Latin America.',
    linkLiveVersion: 'https://leboroz.github.io/capstone-project-1/',
    linkToSource: 'https://github.com/Leboroz/capstone-project-1',
  },
  {
    image: project6,
    title: 'Awesome Books',
    languages: ['HTML/CSS', 'Javascript', 'SASS'],
    description: 'This is a javascript book list application',
    linkLiveVersion: 'https://github.com/Leboroz/awesome-books',
    linkToSource: 'https://github.com/Leboroz/awesome-books',
  },
];

export default arrOfProjects;
