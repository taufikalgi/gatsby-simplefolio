import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Taufik Algi Fahri', // e.g: 'Name | Developer'
  lang: 'en, id', // e.g: en, es, fr, jp
  description: 'Personal web of Taufik Algi Fahri', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Taufik Algi Fahri',
  subtitle: 'a Computer Science Sophomore at Universitas Indonesia. Want to know more about me?',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'taf.jpg',
  paragraphOne:
    "My name is Algi, I'm an aspiring web developer. Interested in back-end development. I have a big interest in web developing and also a longlife learner.",
  paragraphTwo:
    'I was born and raised in Indonesia, October 01, 1999. Now I live in Depok, West Java, Indonesia.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1c8MVYcpK8NHzadgVxO52QHnTBXTSccfm/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'matcha-drink.png',
    title: "Match'A Drink",
    info:
      'MatchA-Drink is a web application that me and my friend developed using Python Django and was a required project for my web development course.',
    info2: '',
    url: 'https://matcha-drink-2.herokuapp.com/',
    repo: 'https://gitlab.com/lulus-pepew-aamiin/matcha-drink-2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'personal-portfolio.png',
    title: 'Personal Portfolio',
    info: 'A personal portfolio built using React.',
    info2:
      'It supposed to be my personal portfolio and side weekend project. It will be updated in time',
    url: '',
    repo: 'https://gitlab.com/taufikalgi/portfolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's Talk",
  email: 'taufik.algi99@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/taufikaf_',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://instagram.com/taufikalgi_',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/taufikalgi',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/taufikalgi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
