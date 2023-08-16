import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://lauraferrandof.github.io/",
  author: "Laura Ferrando",
  desc: "My journey to frontend development and beyond",
  title: "The Hitchhiker's Guide to the Web",
  ogImage: "/og-image.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/lauraferrandof",
    linkTitle: "Follow me on Github!",
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lauraferrandof/",
    linkTitle: "Let's connect on LinkedIn!",
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:lauraferrandof@gmail.com",
    linkTitle: "Drop me a few lines!",
    active: true,
  },
];
