import React from "react";
import * as IoIcons from "react-icons/io5";
import { IoMdListBox } from "react-icons/io";
import { BsBrush } from "react-icons/bs";
import { SiMailDotRu } from "react-icons/si";
import {
  AiFillGithub,
  AiFillYoutube,
  AiOutlineCloudDownload,
  AiOutlineSetting,
  AiOutlineMobile,
} from "react-icons/ai";
import {
  FaFacebook,
  FaHtml5,
  FaBatteryHalf,
  FaBatteryFull,
} from "react-icons/fa";
/**Navigation Settings */
export const Navbar = [
  {
    title: "about",
    path: "/about",
    icon: <IoIcons.IoPerson />,
  },
  {
    title: "resume",
    path: "/resume",
    icon: <IoMdListBox />,
  },
  {
    title: "works",
    path: "/work",
    icon: <BsBrush />,
  },
  {
    title: "vlog",
    path: "/vlog",
    icon: <IoIcons.IoChatboxEllipses />,
  },
  {
    title: "contact",
    path: "/contact",
    icon: <SiMailDotRu />,
  },
];
/** Profile Settings */
export const Profile = [
  {
    image: "profile.jpg",
    name: "Shrestha Pradhuman",
    postion: ["Freelancer", "Frontend Developer", "Backend Developer", "Programmer"  ],
    social: [
      {
        icon: <AiFillGithub />,
        url: "https://github.com/",
      },
      {
        icon: <AiFillYoutube />,
        url: "https://www.youtube.com/",
      },
      {
        icon: <FaFacebook />,
        url: "https://www.facebook.com/",
      },
    ],
    download: [
      {
        title: "Get Resume",
        icon: <AiOutlineCloudDownload />,
        url: "#",
      },
    ],
  },
];
/**Information Settings */
const d = new Date()
const year = d.getFullYear();
export const Information = [
  {
    desc:
      "<strong>Hello! I'm Shrestha Pradhuman.</strong> Full Stack Web Developer From Tokyo, Japan. I am passionate about Web Designing. I have rich experience in Wordpress, also I'm good at Magento. I love to talk with you about our unique.",
    info: [
      {
        age: year - 1989,
        resident: "Nepal",
        freelancer: "Available",
        address: "Tokyo, Japan",
        email:'ShresthaPradhuman2020@gmail.com',
        contact: '+8107084252738'
      },
    ],
  },
];
/**Service Settings */
export const Service = [
  {
    title: "Web Development",
    description:
      "I can provide mobile responsive, cross-browser, and cross-platform web development services. Starting from basic website designs, including CMS and online store building to highly complex business website apps and design solutions. we provide you best web solutions.",
    icon: <FaHtml5 />,
  },
  {
    title: "Domain & Hosting",
    description:
      "I provide A1 domain and hosting service with features of security, bandwidth and storage scalability, migration assistance, and great technical support at a very reasonable cost and renewal fees. I offer you a secure and hassle-free foundation for your online presence.",
    icon: <AiOutlineSetting />,
  },
  {
    title: "Mobile Application",
    description:
      "In the current times, the world is controlled by fingertips. Mobile apps are the most competent tool to optimize, enhance, increase your business operations. So, I can provide cross-browser and cross-platform supported mobile applications for your business.",
    icon: <AiOutlineMobile />,
  },
];
/**Pricing Settings */
export const Pricing = [
  {
    icon: <FaBatteryHalf />,
    title: "Standard plan",
    price: "22",
    srvc: [
      {
        pages: "av, 10 pages",
        cms: "na, cms",
        form: "av, contact form",
        domain: "av, .np",
        hosting: "av, 500 MB",
        chat: "na, chat integration",
      },
    ],
  },
  {
    icon: <FaBatteryFull />,
    title: "Premium plan",
    price: "48",
    srvc: [
      {
        pages: "av, 10 pages",
        cms: "av, cms",
        form: "av, Multiple form",
        domain: "av, .com .net .org",
        hosting: "av, 1 GB",
        chat: "av, chat integration",
      },
    ],
  },
];
/** Education Settings */
export const Education = [
  {
    year: "2010-2013",
    institute: "Brightland College",
    country: "Nepal",
    description: "Bachelor's Degree in Business Studies With Major Finance",
  },
  {
    year: "2008-2010",
    institute: "Meisei Institute Of Cybernetics",
    country: "Japan",
    description:
      "Information Business Introduction, Office Software, Basic Programming, Linux, Web Design",
  },
  {
    year: "2020/09-2020/10",
    institute: "PHP SCHOOL",
    country: "Ikebukuro, Japan",
    description:
      "Building PHP MVC Framework, Object Programming, PHP Framework Laravel.",
  },
];
/**Experience Settings */
export const Experience = [
  {
    year: "2020-Present",
    position: "Web Programmer",
    company: "Veriteworks.Inc",
    description: "Building Magento Based E-commerce Website, Modules",
  },
  {
    year: "2020/9-2020/12",
    position: "Convience Store Manager",
    company: "Family Mart",
    description:
      "Managing and Handling the Convience Store. Staffing, Checking Stocks And Ordering Stock etc.",
  },
  {
    year: "2017-2020",
    position: "Regular Employee",
    company: "FunToFun.Inc",
    description:
      "Handling Phone Calls From Customer. Helping people to find the part time jobs etc.",
  },
];

export const Coding = [
  {
    title: "PHP",
    percentage: "70",
  },
  {
    title: "HTML/CSS/JS",
    percentage: "80",
  },
  {
    title: "React JS",
    percentage: "70",
  },
  {
    title: "Python",
    percentage: "60",
  },
];

export const Language = [
  {
    title: "Nepali",
    width: "90%",
  },
  {
    title: "English",
    width: "80%",
  },
  {
    title: "Hindi",
    width: "90%",
  },
  {
    title: "Japanese",
    width: "70%",
  },
];
