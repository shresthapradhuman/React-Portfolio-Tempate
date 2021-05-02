import React from "react";
import * as IoIcons from "react-icons/io5";
import { IoMdListBox } from "react-icons/io";
import { BsBrush } from "react-icons/bs";
import { SiMailDotRu } from "react-icons/si";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineCloudDownload,
  AiOutlineSetting,
  AiOutlineMobile,
} from "react-icons/ai";
import {
  FaFacebook,
  FaHtml5
} from "react-icons/fa";
import { DiStackoverflow } from "react-icons/di";

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

export const Profile = [
  {
    image: "profile.jpg",
    name: "Shrestha Pradhuman",
    postion: ["Freelancer", "Frontend Developer", "Backend Developer", "Programmer"  ],
    social: [
      {
        icon: <DiStackoverflow />,
        url: "https://stackoverflow.com/",
      },
      {
        icon: <AiFillGithub />,
        url: "https://github.com/",
      },
      {
        icon: <AiFillYoutube />,
        url: "https://www.youtube.com/",
      },
      {
        icon: <AiFillTwitterCircle />,
        url: "https://www.twitter.com/",
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

export const Information = [
  {
    desc:
      "<strong>Hello! I'm Shrestha Pradhuman.</strong> Full Stack Web Developer From Tokyo, Japan. I am passionate about Web Designing. I have rich experience in Wordpress, also I'm good at Magento. I love to talk with you about our unique.",
    info: [
      {
        age: "31",
        resident: "Nepal",
        freelancer: "Available",
        address: "Tokyo, Japan",
      },
    ],
  },
];
export const Info = [
  {
    desc:
      "<strong>Hello! I'm Shrestha Pradhuman.</strong> Full Stack Web Developer From Tokyo, Japan. I am passionate about Web Designing. I have rich experience in Wordpress, also I'm good at Magento. I love to talk with you about our unique.",
    info: [
      {
        age: "31",
        resident: "Nepal",
        freelancer: "Available",
        address: "Tokyo, Japan",
      },
    ],
  },
];
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