import project1 from '../assets/images/projects/project-1.jpg';
import project2 from '../assets/images/projects/project-2.jpg';
import project7 from '../assets/images/projects/project-7.jpg';
import project4 from '../assets/images/projects/project-4.jpg';
import project5 from '../assets/images/projects/project-5.jpg';
import project6 from '../assets/images/projects/project-6.jpg';

const arrOfProjects = [
  {
    image: project7,
    title: 'Building',
    languages: ['Javascript', 'React-Redux', 'Node'],
    description:
      'Full-stack appication that allows users to create properties. When users are logged in they get redirected to a dashboard where they can visualize metadata about the properties. Users can sort and filter the properties by price or name.',
    linkLiveVersion: 'https://eloquent-smakager-c12ce0.netlify.app/',
    linkToSource: 'https://github.com/Leboroz/management-dashboard',
  },
  {
    image: project1,
    title: 'RentUrTech',
    languages: ['React-Redux', 'SASS', 'Ruby on Rails'],
    description:
      'This website emulates a business where users can reserve a specific piece of equipment for a set amount of days.If the user is an admin, additional options for creating or deleting equipment are available.',
    linkLiveVersion: 'https://renturtechrender.netlify.app/',
    linkToSource: 'https://github.com/Final-Capstone-Elite-Group/RentUrTechFrontend',
  },
  {
    image: project2,
    title: 'Budget app',
    languages: ['Ruby on rails', 'Bootstrap', '+1'],
    description:
      'This is a ruby on rails application that allows to create users and authenticates them using devise. When users are loged in the can create groups of transactions and see the total amout. Users can create transactions for one or many groups.',
    linkLiveVersion: 'https://rails-budget-app-fqfy.onrender.com',
    linkToSource: 'https://github.com/Leboroz/budget-app',
  },
  {
    image: project4,
    title: 'Space Travelers',
    languages: ['React-Redux', 'Bootstrap', '+1'],
    description:
      'A web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions using real live data from the SpaceX API.',
    linkLiveVersion: 'https://space-travelers-2.onrender.com/',
    linkToSource: 'https://github.com/Leboroz/space-travelers',
  },
  {
    image: project5,
    title: 'LATAM Annual Conference',
    languages: ['HTML/CSS', 'SASS', 'Javascript'],
    description: 'This is a simple landing page built using HTML/SCSS and JavaScript. This page provides basic navigation functionality and was made using an appropriate SCSS file structure.',
    linkLiveVersion: 'https://leboroz.github.io/latam-annual-conference/',
    linkToSource: 'https://github.com/Leboroz/latam-annual-conference',
  },
  {
    image: project6,
    title: 'Bookstore',
    languages: ['Ruby on rails', 'Bootstrap', '+1'],
    description:
      'This is a web App that displays a list of books and fetches an API. Built with React, Redux, Typescript, SASS.',
    linkLiveVersion: 'https://bookstore-leboroz.herokuapp.com/',
    linkToSource: 'https://github.com/Leboroz/bookstore',
  },
];

export default arrOfProjects;
