import {
  faGithub,
  faLinkedin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import {
  faImages,
  faLaptopCode,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

export type SocialLink = {
  icon: IconDefinition;
  alt: string;
  href?: string;
  className?: string;
};

export const links: SocialLink[] = [
  {
    icon: faImages,
    alt: "Images Portfolio",
    className: "mt-0.5",
  },
  {
    icon: faLaptopCode,
    alt: "Coding Projects",
    className: "mt-0.5",
  },
  {
    icon: faMusic,
    alt: "Music Portfolio",
  },
  {
    icon: faGithub,
    alt: "GitHub",
    href: "https://github.com/nunocasteleira",
  },
  {
    icon: faLinkedin,
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/nunocasteleira/",
  },
];
