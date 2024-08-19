import { Home, Info, LayoutDashboard, Settings } from "lucide-react";

export const ExampleItemsNavigators = [
  {
    name: "Home",
    icon: <Home size={15} />,
    description: {
      title: "Welcome to Home",
      content:
        "This is the starting point of your journey. From here, you can access all the other features of our platform.",
    },
  },
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={15} />,
    description: {
      title: "Your Personal Dashboard",
      content:
        "Get a quick overview of your progress, track your goals, and stay on top of your tasks with our customizable dashboard.",
    },
  },
  {
    name: "Settings",
    icon: <Settings size={15} />,
    description: {
      title: "Customize Your Experience",
      content:
        "Personalize your account settings, manage your notifications, and adjust your preferences to fit your needs.",
    },
  },
  {
    name: "Help",
    icon: <Info size={15} />,
    description: {
      title: "Get Help and Support",
      content:
        "Need assistance? Our comprehensive help center has answers to common questions, tutorials, and contact information for our support team.",
    },
  },
];
