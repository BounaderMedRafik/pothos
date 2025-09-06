import GitHub from "@/public/icons/github";
import { Github, Linkedin } from "lucide-react";

export interface NavItemProp {
  href: string;
  title: string;
  isNew?: boolean;
}

export interface SocialItemProp {
  href: string;
  icon: React.ReactNode;
}

export const NavItems: NavItemProp[] = [
  {
    href: "/docs",
    title: "Components",
    isNew: false,
  },

  {
    href: "/templates",
    title: "Templates",
    isNew: false,
  },
  {
    href: "/advanced",
    title: "Advanced",
    isNew: true,
  },
];

export const SocialItems: SocialItemProp[] = [
  {
    href: "https://github.com/BounaderMedRafik/pothos",
    icon: <Github size={13} />,
  },
  {
    href: "https://www.linkedin.com/in/bounadermedrafik/",
    icon: <Linkedin size={13} />,
  },
];
