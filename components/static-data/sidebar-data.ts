type SideBarItem = {
  name: string;
  href: string;
  isNew?: boolean;
  isUpdated?: boolean;
};

type SideBarGroup = {
  name: string;
  children: SideBarItem[];
};

export const SIDEBARITEMS: SideBarGroup[] = [
  {
    name: "Getting Started",
    children: [
      {
        name: "Introduction",
        href: "/docs",
      },
      {
        name: "Installation",
        href: "/docs/installation",
      },
    ],
  },
  {
    name: "Sections",
    children: [
      {
        name: "Hero",
        href: "/docs/sections/hero",
      },
      {
        name: "About",
        href: "/docs/sections/about",
      },
      {
        name: "Portfolio / Work",
        href: "/docs/sections/portfolio",
        isUpdated: true,
      },
      {
        name: "Skills",
        href: "/docs/sections/skills",
      },
      {
        name: "Experience",
        href: "/docs/sections/experience",
      },
      {
        name: "Testimonials",
        href: "/docs/sections/testimonials",
      },
      {
        name: "Contact",
        href: "/docs/sections/contact",
      },
    ],
  },
];
