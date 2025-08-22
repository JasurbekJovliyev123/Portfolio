
import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';

export const links = [
  {
    name: 'Home',
    icon: <FaHome className='nav-icon' />,
    path: '/',
  },

  {
    name: 'About',
    icon: <FaUser className='nav-icon' />,
    path: '#about',
  },

  {
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav-icon' />,
    path: '#projects',
  },

  {
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav-icon' />,
    path: '#contact',
  },
];

export const personalInfo = [
  {
    title: 'First Name : ',
    description: 'Jasurbek',
  },

  {
    title: 'Last Name : ',
    description: 'Jovliyev',
  },

  {
    title: 'Age : ',
    description: '21 Years',
  },

  {
    title: 'Nationality : ',
    description: 'Uzbek',
  },

  {
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    title: 'Address : ',
    description: 'Karshi',
  },

  {
    title: 'Phone : ',
    description: '+998943343504',
  },

 


  {
    title: 'Langages : ',
    description: 'Uzbek',
  },
  {
    title: 'Email : ',
    description: 'jasurbekjovliyev725@gmail.com',
  },
];

import skillsImg1 from './assets/html-logo.svg';
import skillsImg2 from './assets/css-logo.svg';
import skillsImg3 from './assets/javascript-logo.svg';
import skillsImg4 from './assets/react-logo.svg';
import skillsImg5 from './assets/tailwind-css-logo.svg';
import skilltypescript from './assets/typescript.png'
import skillsImg6 from './assets/firebase.png';
import skillsImg7 from './assets/sketch-logo.svg';
import nextjs from './assets/nextjs.jpeg'
import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';
export const skill = [
  {
    id: 1,
    img: skillsImg1,
    title: 'HTML',
    // level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 2,
    img: skillsImg2,
    title: 'CSS',
    // level: 'Advanced',
    category: 'developer',
  },
  {
    id: 3,
    img: skillsImg5,
    title: 'Tailwind',
    // level: 'Intermediate',
    category: 'developer',
  },
  {
    id: 4,
    img: skillsImg6,
    title: 'Firebase',
    // level: 'Advanced',
    category: 'designer',
  },
  {
    id: 5,
    img: skillsImg3,
    title: 'JavaScript',
    // level: 'Intermediate',
    category: 'developer',
  },
  
  {
    id: 6,
    img: skilltypescript,
    title: 'Typescript',
    // level: 'Basic',
    category: 'developer',
  },
  {
    id: 7,
    img: skillsImg4,
    title: 'React',
    // level: 'Basic',
    category: 'developer',
  },

   {
    id: 8,
    img: nextjs,
    title: 'NextJS',
    // level: 'Basic',
    category: 'developer',
  },
];

export const resume = [

  {
    id: 4,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2020-2022',
    title: '<span>Technical Studies</span> — QMII Academic Lyceum',
    desc: 'Specialized in Mathematics and Physics. Focused on analytical thinking, problem-solving, and engineering fundamentals.',
  },

  {
    id: 5,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2022',
    title: "<span> Bachelor's Degree </span> Qarshi State University",
    desc: "Admitted in 2022 on a government scholarship. Currently pursuing a Bachelor's degree in Applied Mathematics.",
  },

  {
    id: 6,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2024',
    title: ' <span>Frontend Development Course</span>  Sammi.ac Praktikum',
    desc: "Since 2023, I have been studying frontend development, focusing on modern web technologies.In 2024, I joined the Sammi.ac Praktikum program, where I gained hands-on experience in JavaScript, TypeScript, React.js, and Next.js.",
  },
];

import projectImg1 from './assets/image1.png';
import projectImg2 from './assets/image2.png';
import projectImg3 from './assets/image3.png';
import projectImg4 from './assets/image4.png';
import projectImg5 from './assets/image5.png';

export const portfolio = [
  {
    id: 1,
    img: projectImg1,
    title: 'Logistics – Transport and Logistics Services',
    description:
      'NOMEX Logistics offers fast, safe, and reliable freight transportation with efficient solutions for your business.',
    skills: [skillsImg4, skillsImg5],
    link: 'https://kz-logistika-git-main-jasurbeks-projects-33e05eeb.vercel.app/',
  },

  {
    id: 2,
    img: projectImg2,
    title: 'Piknic Uzbekistan – Best Outdoor & Camping Gear',
    description:
      'NOMEX Logistics offers fast, safe, and reliable freight transportation with efficient solutions for your business.',
    skills: [skillsImg6, skillsImg7],
    link: 'https://www.piknicuz.com/',
  },

  {
    id: 3,
    img: projectImg3,
    title: 'WeatherApp – Live Weather Updates Anywhere',
    description:
      'Check real-time temperature, wind, humidity, and forecasts for your city with WeatherApp.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: 'https://weather-app-tau-blond-29.vercel.app/',
  },

  {
    id: 4,
    img: projectImg4,
    title: 'Kredo – Innovative P2P Financial Service',
    description:
      'Kredo is a revolutionary platform offering secure P2P payments and profitable conditions for traders.',
    skills: [skillsImg4, skillsImg5],
    link: 'https://www.kredo.pw/',
  },

  {
    id: 5,
    img: projectImg5,
    title: 'Online Dessert Shop – Fresh & Sweet Treats',
    description:
      'Discover delicious desserts online – from waffles to macarons and tiramisu. Simple ordering with quick delivery.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: 'https://gorgeous-kangaroo-a6b7e0.netlify.app/',
  },
];


import Theme1 from './assets/red.png';
import Theme2 from './assets/blueviolet.png';
import Theme3 from './assets/blue.png';
import Theme4 from './assets/magenta.png';
import Theme5 from './assets/yellowgreen.png';
import Theme6 from './assets/orange.png';
import Theme7 from './assets/yellow.png';

export const themes = [
  {
    img: Theme1,
    hue: '4',
  },

  {
    img: Theme2,
    hue: '271',
  },

  {
    img: Theme3,
    hue: '225',
  },

  {
    img: Theme4,
    hue: '339',
  },

  {
    img: Theme5,
    hue: '80',
  },

  {
    img: Theme6,
    hue: '19',
  },

  {
    img: Theme7,
    hue: '42',
  },
];
