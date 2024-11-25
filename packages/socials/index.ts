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
  className?: string;
  href?: string;
};

export const socials: SocialLink[] = [
  {
    icon: faImages,
    social: "photos",
    className: "mt-0.5",
    href: "https://gallery.casteleira.xyz",
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

export const enSocialTranslations: Record<Socials, string> = {
  linkedin: "LinkedIn",
  code: "Coding Projects",
  github: "GitHub",
  music: "Music Portfolio",
  photos: "Photography Portfolio",
};

export const ptSocialTranslations: Record<Socials, string> = {
  linkedin: "LinkedIn",
  code: "Projetos de Código",
  github: "GitHub",
  music: "Portfolio Musical",
  photos: "Portfolio Fotográfico",
};
