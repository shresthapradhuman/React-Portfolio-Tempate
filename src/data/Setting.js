import React from "react";
import * as IoIcons from "react-icons/io5";
import { IoMdListBox } from "react-icons/io";
import { BsBrush } from "react-icons/bs";
import { SiMailDotRu } from "react-icons/si";
import {
  AiFillGithub,
  AiOutlineCloudDownload,
  AiOutlineMobile,
} from "react-icons/ai";
import { FaHtml5, FaBloggerB } from "react-icons/fa";
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
    title: "blog",
    path: "/blog",
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
    name: "Jhon Doe",
    postion: ["Freelancer", "Front-end Developer", "Back-end Developer"],
    social: [
      {
        icon: <AiFillGithub />,
        url: "https://github.com",
      },
      {
        icon: <FaBloggerB />,
        url: "https://blogspot.com/",
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
const d = new Date();
const year = d.getFullYear();
export const Information = [
  {
    desc: "<strong>Hello! I'm Jhon Doe.</strong> Web Developer From NewYork. I am passionate about Web Designing. I have rich experience in web development, also I'm good at WordPress. I love to talk with you about our unique.",
    info: [
      {
        age: year - 2002,
        resident: "Mexico",
        freelancer: "Available",
        address: "NewYork",
        email: "mail@example.com",
        contact: "+1 4349959494",
      },
    ],
  },
];
/**Service Settings */
export const Service = [
  {
    title: "Web Application",
    description:
      "I can provide mobile responsive, cross-browser, and cross-platform web development services. Starting from basic website designs, including CMS and online store building to highly complex business website apps and design solutions. I can provide you best web solutions.",
    icon: <FaHtml5 />,
  },
  {
    title: "Mobile Application",
    description:
      "In the current times, the world is controlled by fingertips. Mobile apps are the most competent tool to optimize, enhance, increase your business operations. So, I can provide cross-browser and cross-platform supported mobile applications for your business.",
    icon: <AiOutlineMobile />,
  },
];
/** Education Settings */
export const Education = [
  {
    year: "2010-2013",
    institute: "Harvard University",
    country: "USA",
    description: "Bachelor's Degree in Business Studies With Major Finance",
  },
  {
    year: "2008-2010",
    institute: "Brixton College",
    country: "USA",
    description:
      "Business Introduction, Office Software, Basic Programming, Linux OS Basic Operation, Web Development",
  },
  {
    year: "2020/09-2020/10",
    institute: "Standford",
    country: "USa",
    description:
      "PHP Basic, MVC Model, Object Oriented Programming, PHP Framework Laravel.",
  },
];
/**Experience Settings */
export const Experience = [
  {
    year: "2020-Present",
    position: "Web Programmer",
    company: "Facebook",
    description:
      "Developing themes and modules for Magento platform based e-commerce websites",
  },
  {
    year: "2020/9-2020/12",
    position: "Convience Store Assistant",
    company: "Walmart",
    description:
      "Stock Order Placement, Banking Transaction, Staff Shift Management, Customer Dealing, and Other Daily Jobs",
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
    title: "HTML/CSS/JS",
    percentage: "90",
  },
  {
    title: "PHP/NodeJS/Python",
    percentage: "70",
  },
  {
    title: "MySQl/MongoDB",
    percentage: "65",
  },
  {
    title: "BootStrap/React",
    percentage: "75",
  },
];

export const Language = [
  {
    title: "Spanish",
    width: "75%",
  },
  {
    title: "Hindi",
    width: "75%",
  },
  {
    title: "English",
    width: "90%",
  },
  {
    title: "Japanese",
    width: "60%",
  },
];

