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

type Socials = "linkedin" | "code" | "github" | "music" | "photos";

export type SocialLink = {
  icon: IconDefinition;
  social: Socials;
  href?: string;
  className?: string;
};

export const links: SocialLink[] = [
  {
    icon: faImages,
    social: "photos",
    className: "mt-0.5",
  },
  {
    icon: faLaptopCode,
    social: "code",
    className: "mt-0.5",
  },
  {
    icon: faMusic,
    social: "music",
  },
  {
    icon: faGithub,
    social: "github",
    href: "https://github.com/nunocasteleira",
  },
  {
    icon: faLinkedin,
    social: "linkedin",
    href: "https://www.linkedin.com/in/nunocasteleira/",
  },
];
