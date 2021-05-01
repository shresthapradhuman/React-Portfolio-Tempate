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
} from "react-icons/ai";
import {
  FaFacebook,
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