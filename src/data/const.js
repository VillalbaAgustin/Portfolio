import {
  AWSLambda,
  Bootstrap,
  Firebase,
  Git,
  MongoDB,
  MySQL,
  Nextjs,
  Nodejs,
  React,
  Redux,
  Responsive,
  Serverless,
  SwaggerUI,
  Typescript,
  WebSocket,
} from "../assets/skills/index";

import {
  AirbnbClone,
  CalendarAppLogin,
  GifApp,
  JournalApp,
  MovieApp,
  TicTacToe,
  HojaVerdeApp
} from "../assets/projects/index";

const topNav = [
  { id: "1", label: "Profile", href: "/Portfolio/#" },
  { id: "2", label: "Skills", href: "/Portfolio/#Skills" },
  { id: "3", label: "Projects", href: "/Portfolio/#Projects" },
  { id: "4", label: "Contact", href: "/Portfolio/#Contact" },
];

export const getTopNav = () => {
  return topNav;
};

export const skills = [
  {
    name: "React",
    image: React,
    alt: "react",
    link: "https://beta.es.reactjs.org/",
  },
  {
    name: "Redux",
    image: Redux,
    alt: "Redux",
    link: "https://redux.js.org/",
  },
  {
    name: "TypeScript",
    image: Typescript,
    alt: "Typescript",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Bootstrap",
    image: Bootstrap,
    alt: "Bootstrap",
    link: "https://getbootstrap.com/",
  },
  {
    name: "Next.js",
    image: Nextjs,
    alt: "Nextjs",
    link: "https://nextjs.org/",
  },
  {
    name: "Node.js",
    image: Nodejs,
    alt: "Nodejs",
    link: "https://nodejs.org/en",
  },
  {
    name: "MongoDB",
    image: MongoDB,
    alt: "MongoDB",
    link: "https://www.mongodb.com/",
  },
  {
    name: "MySQL",
    image: MySQL,
    alt: "MySQL",
    link: "https://www.mysql.com/",
  },
  {
    name: "Firebase",
    image: Firebase,
    alt: "Firebase",
    link: "https://firebase.google.com/",
  },
  {
    name: "UX/UI",
    image: Responsive,
    alt: "Responsive",
    link: "",
  },
  {
    name: "AWS Lambda",
    image: AWSLambda,
    alt: "AWS Lambda",
    link: "https://aws.amazon.com/lambda/",
  },
  {
    name: "Serverless",
    image: Serverless,
    alt: "Serverless",
    link: "https://www.serverless.com/",
  },
  {
    name: "Socket.IO",
    image: WebSocket,
    alt: "Web Socket",
    link: "https://socket.io/",
  },
  {
    name: "Git",
    image: Git,
    alt: "Git",
    link: "https://git-scm.com/",
  },
  {
    name: "Swagger UI",
    image: SwaggerUI,
    alt: "Swagger UI",
    link: "https://swagger.io/tools/swagger-ui/",
  },
];

export const slides = [
  {
    url: JournalApp,
    title: "JournalApp",
    description: "Journal",
    href: "https://journal-app-neon-eight.vercel.app/auth/login",
    hrefGit: "https://github.com/VillalbaAgustin/JournalApp.git",
  },
  {
    url: MovieApp,
    title: "MovieApp",
    description: "Movie",
    href: "https://villalbaagustin.github.io/movie-react/",
    hrefGit: "https://github.com/VillalbaAgustin/movie-react.git",
  },
  {
    url: CalendarAppLogin,
    title: "CalendarApp",
    description: "Calendar",
    href: "https://calendar-backend-production-6d29.up.railway.app",
    hrefGit: "https://github.com/VillalbaAgustin/Calendar.git",
  },
  {
    url: TicTacToe,
    title: "Tic-Tac-Toe",
    description: "Tic-Tac-Toe",
    href: "https://villalbaagustin.github.io/Tic-Tac-Toe/",
    hrefGit: "https://github.com/VillalbaAgustin/Tic-Tac-Toe",
  },
  {
    url: GifApp,
    title: "GifApp",
    description: "Gif",
    href: "https://villalbaagustin.github.io/react-gifexpertapp/",
    hrefGit: "https://github.com/VillalbaAgustin/react-gifexpertapp.git",
  },
  {
    url: AirbnbClone,
    title: "AirbnbClone",
    description: "airbnbclone",
    href: "https://kittyacatemyorg.files.wordpress.com/2018/05/500.jpg",
    hrefGit: "https://github.com/VillalbaAgustin/airbnb-clone",
  },
  {
    url: HojaVerdeApp,
    title: "Hoja Verde",
    description: "Vicero llamado Hoja Verde",
    href: "https://hojaverdecodoacodo.netlify.app",
    hrefGit: "https://github.com/VillalbaAgustin/HojaVerde",
  },
];
