
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
    title: 'Ism: ',
    description: 'Jasurbek',
  },

  {
    title: 'Familiya: ',
    description: 'Jovliyev',
  },

  {
    title: 'Yosh: ',
    description: '21 Years',
  },

  {
    title: 'Millat : ',
    description: 'Uzbek',
  },

  {
     title: "Frilans faoliyati:",
      description: "Mavjud",
  },

  {
    title: 'Manzil: ',
    description: 'Qarshi',
  },

  {
    title: 'Telefon : ',
    description: '+998943343504',
  },

 


  {
    title: 'tillar : ',
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
import word from './assets/word.svg'
import excel from './assets/excel.png'
import point from './assets/point.jfif'
import reduxPhoto from './assets/redux.svg'
import nextjs from './assets/nextjs.jpeg'
import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';
export const skill = [
  {
    id: 1,
    img: skillsImg1,
    title: 'HTML',
    category: 'developer',
  },

  {
    id: 2,
    img: skillsImg2,
    title: 'CSS',
    category: 'developer',
  },
  {
    id: 3,
    img: skillsImg5,
    title: 'Tailwind',
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
  {
    id: 9,
    img: word,
    title: 'Word',
    category: 'developer',
  },
  {
    id: 10,
    img: excel,
    title: 'Excel',
    category: 'developer',
  },
  {
    id: 9,
    img: point,
    title: 'Power Point',
    category: 'developer',
  },
];

export const resume = [

  {
    id: 4,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2020-2022',
    title: '<span>Texnik ta’lim</span> — QMII Akademik litseyi',
    desc: 'Matematika va fizika bo‘yicha ixtisoslashgan. Analitik fikrlash, muammolarni hal qilish va muhandislik asoslariga e’tibor qaratgan.',
  },

  {
    id: 5,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2022',
    title: "<span>Bakalavriat</span> Qarshi Davlat Universiteti",
    desc: "2022-yilda davlat granti asosida qabul qilingan. Hozirda Amaliy matematika yo‘nalishi bo‘yicha bakalavriat bosqichida tahsil olmoqda.",
  },

  {
    id: 6,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2024',
    title: '<span>Frontend dasturlash kursi</span> — Sammi.ac Praktikum',
    desc: "2023-yildan beri frontend dasturlashni o‘rganib kelmoqda. 2024-yilda Sammi.ac Praktikum dasturiga qo‘shilib, JavaScript, TypeScript, React.js va Next.js bo‘yicha amaliy tajriba orttirganman.",
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
    title: 'Logistika – Transport va logistika xizmatlari',
    description:
      'NOMEX Logistics sizning biznesingiz uchun tezkor, xavfsiz va ishonchli yuk tashish xizmatlarini taklif etadi.',
    skills: [skillsImg4, skillsImg5],
    link: 'https://kz-logistika-git-main-jasurbeks-projects-33e05eeb.vercel.app/',
  },

  {
    id: 2,
    img: projectImg2,
    title: 'Piknic Uzbekistan – Eng yaxshi tashqi va camping jihozlari',
    description:
      'Piknic Uzbekistan ochiq havoda dam olish va camping uchun sifatli va ishonchli mahsulotlarni taqdim etadi.',
    skills: [skillsImg4, skillsImg5, reduxPhoto],
    link: 'https://www.piknicuz.com/',
  },

  {
    id: 3,
    img: projectImg3,
    title: 'Ob-havo ilovasi – Jonli ob-havo yangiliklari',
    description:
      'Shahringizdagi real vaqt harorati, shamol tezligi, namlik va prognozlarni WeatherApp orqali kuzating.',
    skills: [skillsImg4, skillsImg5],
    link: 'https://weather-app-tau-blond-29.vercel.app/',
  },

  {
    id: 4,
    img: projectImg4,
    title: 'Kredo – Innovatsion P2P moliyaviy xizmat',
    description:
      'Kredo xavfsiz P2P to‘lovlari va treyderlar uchun foydali shart-sharoitlarni taqdim etuvchi zamonaviy platforma.',
    skills: [skillsImg4, skillsImg5],
    link: 'https://www.kredo.pw/',
  },

  {
    id: 5,
    img: projectImg5,
    title: 'Onlayn desert do‘koni – Yangi va shirin taomlar',
    description:
      'Mazali desertlarni kashf eting- qulay buyurtma va tezkor yetkazib berish.',
    skills: [skillsImg4, skillsImg5],
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
