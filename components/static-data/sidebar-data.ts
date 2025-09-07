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
    name: "Core Components",
    children: [
      {
        name: "PostCard",
        href: "/docs/postcard",
      },
    ],
  },
];
