import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://lauraferrandof.github.io/",
  author: "Laura Ferrando",
  desc: "My journey to frontend development and beyond",
  title: "The Hitchhiker's Guide to the Web",
  ogImage: "main-og-image.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

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
