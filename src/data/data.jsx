import { IoLogoJavascript, IoLogoCss3} from "react-icons/io";
import { BsFillPeopleFill } from 'react-icons/bs'
import { FaReact, FaHtml5, FaNodeJs, FaAws} from "react-icons/fa";
import { SiTailwindcss,SiMongodb ,SiMysql, SiCloudflarepages, SiGithub, SiPostgresql} from "react-icons/si";
import { Project1, Project2, Project3, Project4,  Project5, Project6, Project7, Project8, Project9 } from "../assets";


export const Myskills = [
  {
    icons: <IoLogoJavascript className="text-yellow-500  animate-bounce1 card-gra 
     card-sh rounded-full my-5 px-4 py-4 md:px- md:py-5 w-20 h-20 lg:px-4 lg:py-4 hover:-top-5 
     transition hover:transition relative text-[40px] md:text-[50px]" />,
  },
  {
    icons: <IoLogoCss3 className="text-blue-500 animate-bounce2  card-gra 
    card-sh rounded-full my-2 px-4 py-4 md:px- md:py-5 w-20 h-20 lg:px-4 lg:py-4 hover:-top-5 
    transition hover:transition relative text-[40px] md:text-[50px]"/>,
  },
  {
    icons: <FaReact className="text-green-300 animate-bounce1 card-gra 
    card-sh rounded-full my-2 px-4 py-4 md:px- md:py-5 w-20 h-20 lg:px-4 lg:py-4 hover:-top-5 
    transition hover:transition relative text-[40px] md:text-[50px]"/>,
  },
  {
    icons: <FaHtml5 className="text-orange-300 animate-bounce2 card-gra 
    card-sh rounded-full my-2 px-4 py-4 md:px- md:py-5 w-20 h-20 lg:px-4 lg:py-4 hover:-top-5 
    transition hover:transition relative text-[40px] md:text-[50px]"/>,
  },
  {
    icons: <FaNodeJs className="text-green-400 animate-bounce1 card-gra 
    card-sh rounded-full my-2 px-4 py-4 md:px- md:py-5 w-20 h-20 lg:px-4 lg:py-4 hover:-top-5 
    transition hover:transition relative text-[40px] md:text-[50px]"/>,
  },
  {
    icons: <SiTailwindcss className="text-blue-500 animate-bounce2 card-gra 
    card-sh rounded-full my-2 px-4 py-4 md:px- md:py-5 w-20 h-20 lg:px-4 lg:py-4 hover:-top-5 
    transition hover:transition relative text-[40px] md:text-[50px]"/>,
  },
  {
    icons: <SiMongodb className="text-green-400 animate-bounce1 card-gra 
    card-sh rounded-full my-2 px-4 py-4 md:px- md:py-5 w-20 h-20 lg:px-4 lg:py-4 hover:-top-5 
    transition hover:transition relative text-[40px] md:text-[50px]"/>,
  },
  {
    icons: <SiMysql className="text-blue-400 animate-bounce2 card-gra 
    card-sh rounded-full my-2 px-4 py-4 md:px- md:py-5 w-20 h-20 lg:px-4 lg:py-4 hover:-top-5 
    transition hover:transition relative text-[40px] md:text-[50px]"/>,
  },
  {
    icons: <FaAws className="text-white animate-bounce1 card-gra 
    card-sh rounded-full my-2 px-4 py-4 md:px- md:py-5 w-20 h-20 lg:px-4 lg:py-4 hover:-top-5 
    transition hover:transition relative text-[40px] md:text-[50px]"/>,
  },
  {
    icons: <SiPostgresql className="text-blue-400 animate-bounce2 card-gra 
    card-sh rounded-full my-2 px-4 py-4 md:px- md:py-5 w-20 h-20 lg:px-4 lg:py-4 hover:-top-5 
    transition hover:transition relative text-[40px] md:text-[50px]"/>,
  },
];


export const Work = [
  {
    img: Project1,
    title: 'Web Course online',
    desc: 'react, css tailwind, html, css',
    pages: <SiCloudflarepages/>,
    linkpages: 'https://project1.mrfajar.my.id',
    github: <SiGithub/>,
    linkgithub: 'https://github.com/cyhaber/project1',
  }, {
    img: Project2,
    title: 'Web Store online',
    desc: 'react, css tailwind, html, css',
    pages:<SiCloudflarepages/>,
    linkpages: 'https://project2.mrfajar.my.id',
    github: <SiGithub/>,
    linkgithub: 'https://github.com/cyhaber/project2',
  },
  {
    img: Project3,
    title: 'Company Profile',
    desc: 'react, css tailwind, html, css',
    pages:<SiCloudflarepages/>,
    linkpages: 'https://patenonline.com',
    github: <SiGithub/>,
    linkgithub: 'https://github.com/masfajaranugrah/paten',
  },
  {
    img: Project4,
    title: 'Conpany profile',
    desc: 'react, css tailwind, html, css',
    pages:<SiCloudflarepages/>,
    linkpages: 'https://lompatkelas.com',
    github: <SiGithub/>,
    linkgithub: 'https://github.com/masfajaranugrah/lompatkelas',
  },
  {
    img: Project5,
    title: 'Web Demo Themes',
    desc: 'react, css tailwind, html, css',
    pages:<SiCloudflarepages/>,
    linkpages: 'https://demo.lompatkelas.com',
    github: <SiGithub/>,
    linkgithub: 'https://github.com/masfajaranugrah/demoutama',
  },
  {
    img: Project6,
    title: 'Web Gudang',
    desc: 'laravel, bootstrap',
    pages:<SiCloudflarepages/>,
    linkpages: 'https://storagehouse.my.id',
    github: <SiGithub/>,
    linkgithub: 'https://github.com/masfajaranugrah/iventory',
  },
  {
    img: Project7,
    title: 'Web Antrian',
    desc: 'React, css tailwind, express.js, node.js, mongodb',
    pages:<SiCloudflarepages/>,
    linkpages: '/',
    github: <SiGithub/>,
    linkgithub: 'https://github.com/masfajaranugrah/antrian',
  },
  {
    img: Project8,
    title: 'Web Company Profile',
    desc: 'React, css tailwind',
    pages:<SiCloudflarepages/>,
    linkpages: 'https://demo1-lompatkelas.vercel.app/',
    github: <SiGithub/>,
    linkgithub: 'https://github.com/masfajaranugrah/demo2',
  },


  {
    img: Project9,
    title: 'Web Trolly UMS',
    desc: 'React, css tailwind',
    pages:<SiCloudflarepages/>,
    linkpages: 'http://my.lib.ums.ac.id/',
    github: <SiGithub/>,
    linkgithub: 'https://github.com/masfajaranugrah/trolly',
  },
]
export const Testimoni1 = [
  {
    id:1,
    msg: 'I have ordered many times from this web service, never been disappointed, especially the support which is very fast and friendly',
    customer:<BsFillPeopleFill/>
  },
  
]
export const Testimoni2 = [
  {
    id:1,
    msg: 'The results are not disappointing, your team is professional and Keep up the good work!',
    customer:<BsFillPeopleFill/>
  },
  
]
export const Testimoni3 = [
  {
    id:1,
    msg: "The product is very good, really worth the price. The only drawback is that the delivery is a bit long. But it doesn't matter, because it's not the fault of the manufacturer",
    customer:<BsFillPeopleFill/>
  },
  
]
export const Testimoni4 = [
  {
    id:1,
    msg: "Even though I asked a lot of questions, CS was patient with my questions",
    customer:<BsFillPeopleFill/>
  },
  
]
