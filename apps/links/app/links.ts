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
  href: string;
  className?: string;
};

export const links: SocialLink[] = [
  {
    icon: faImages,
    alt: "Images Portfolio",
    href: "#",
    className: "mt-1",
  },
  {
    icon: faLaptopCode,
    alt: "Coding Projects",
    href: "#",
    className: "mt-1",
  },
  {
    icon: faMusic,
    alt: "Music Portfolio",
    href: "#",
    className: "mt-1",
  },
  {
    icon: faGithub,
    alt: "GitHub",
    href: "#",
  },
  {
    icon: faLinkedin,
    alt: "LinkedIn",
    href: "#",
  },
];
