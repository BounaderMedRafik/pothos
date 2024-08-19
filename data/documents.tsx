// type = starter | component
// new = true | false

import BottomNavigator from "@/components/Previews/bottom-navigator";
import CodeBlock from "@/components/ui/CodeBlock";
import { ExampleItemsNavigators } from "./exampleData";
import Code from "@/components/ui/Code";

// boiler plate
// {
//   name: "Introduction",
//   link: "/docs/introduction",
//   id: "introduction",
//   type: "starter",
//   description: (
//     <>

//     </>
//   )
// }

export const docs = [
  {
    name: "Introduction",
    description: (
      <>
        <h2>POTHOS/UI: Introduction</h2>
        <h3>POTHOS/UI: Built by the community, for the community.</h3>
        <p>
          POTHOS/UI is more than just a component library; it&apos;s a vibrant
          community united by a shared passion for crafting exceptional user
          experiences. As an open-source project, we believe in the power of
          collaboration to create something truly extraordinary.
        </p>
        <p className=" opacity-100">
          We invite <span className=" italic">developers</span> from all walks
          of life to join us in shaping the future of POTHOS/UI. Whether
          you&apos;re a seasoned React expert or just starting your development
          journey, your contributions are essential. By working together, we can
          build a component library that is not only robust and versatile but
          also reflects the diverse needs of the developer community.
        </p>
        <p>
          Together, let&apos;s create a platform where innovation thrives,
          knowledge is shared freely, and developers can build upon each
          other&apos;s work to create remarkable applications. Join us in
          building a stronger, more inclusive development ecosystem.
        </p>
        <h2 id="how-to-contribute">Contributions</h2>
        <p>
          <strong>How to Contribute to POTHOS/UI</strong>
        </p>
        <p>
          We encourage everyone to contribute to POTHOS/UI. Whether you&#39;re a
          seasoned developer or just starting out, there are ways to get
          involved. Help us build exceptional user interfaces by creating or
          improving components, fixing bugs, or optimizing performance. If
          you&#39;re more interested in the behind-the-scenes work, contribute
          to our documentation by writing clear guides and tutorials. Design and
          user experience are crucial, so feel free to suggest new components or
          improve existing ones. Lastly, help us foster a strong community by
          answering questions and spreading the word about POTHOS/UI.{" "}
        </p>
        <p className="opacity-100">
          To get started, fork our repository on GitHub, create a new branch for
          your changes, test thoroughly, and open a pull request when ready.
          Let’s work together to create an amazing component library!{" "}
          <span>
            <a href="/">[Github Repo ♡]</a>
          </span>
        </p>
      </>
    ),
    link: "/docs/introduction",
    id: "introduction",
    type: "starter",
    new: false,
  },
  {
    name: "Bottom Navigator",
    link: "/docs/bottom-navigator",
    id: "bottom-navigator",
    type: "component",
    new: true,
    description: (
      <>
        <h2>Bottom Navigator</h2>
        <p>
          A good bottom navigator is designed to provide easy access to the main
          sections of an application. It typically consists of a bar at the
          bottom of the screen with icons and labels representing each section.
          The icons should be intuitive and easily recognizable, while the
          labels should be concise and clear. The bottom navigator should also
          provide visual feedback, such as highlighting the current section, to
          help users understand their location within the app. Additionally, it
          should be responsive and accessible, ensuring smooth transitions and
          usability for all users.
        </p>
        <p>
          For this project, I will be utilizing Framer Motion for animations and
          TailwindCSS for styling. The bottom navigator will be implemented and
          made available for React applications.
        </p>
        <h3>Navigate On Click</h3>
        <div>
          <CodeBlock
            code={`
import BottomNavigator from "@/.../.../bottom-navigator.tsx";

export default function Home() {
  return (
   <main>
      <BottomNavigator type={"click"} items={ExampleItemsNavigators} />
   </main>
  );
}
              `}
          >
            <BottomNavigator type={"click"} items={ExampleItemsNavigators} />
          </CodeBlock>
        </div>
        <div className="h-1 w-full bg-foreground/20 py-10" />
        <h3>Navigate On Hover</h3>
        <div>
          <CodeBlock
            code={`
import BottomNavigator from "@/.../.../bottom-navigator.tsx";

export default function Home() {
  return (
   <main>
      <BottomNavigator type={"hover"} items={ExampleItemsNavigators} />
   </main>
  );
}
              `}
          >
            <BottomNavigator type={"hover"} items={ExampleItemsNavigators} />
          </CodeBlock>
        </div>

        <h3>Code</h3>

        <div>
          <Code
            code={`
"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useState } from "react";

interface BottomNavigatorProps {
  items: {
    name: string;
    icon: React.ReactNode;
    description: {
      title: string;
      content: string | React.ReactNode;
    };
  }[];
  type?: "click" | "hover";
}

const BottomNavigator: React.FC<BottomNavigatorProps> = ({ items, type }) => {
  const [tab, setTab] = useState("");
  const currentTab = items.filter((item) => item.name == tab);
  return (
    <div>
      {type == "click" ? (
        <div>
          <div className="relative">
            {currentTab.map((item, i) => (
              <AnimatePresence>
                <motion.div
                  key={tab}
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: -50,
                    opacity: 0,
                  }}
                  className="px-5 py-2 absolute  left-0 -top-32    bg-foreground mb-3 rounded-2xl   w-[450px] "
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                  >
                    <div
                      onClick={() => {
                        setTab("none");
                      }}
                      className="absolute z-20 rounded-md cursor-pointer right-4 top-4 hover:bg-background hover:text-foreground text-background p-1"
                    >
                      <X size={15} />
                    </div>
                    <motion.h4
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 5,
                      }}
                      transition={{
                        delay: 0.2,
                      }}
                      className="text-background"
                    >
                      {item.description.title}
                    </motion.h4>
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 5,
                      }}
                      transition={{
                        delay: 0.3,
                      }}
                      className="text-background/75 text-xs"
                    >
                      {item.description.content}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {items.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  setTab(item.name);
                }}
                className={cn(
                  "p-4 bg-foreground/50 hover:bg-foreground/75 cursor-pointer text-background rounded-2xl",
                  { "bg-foreground": item.name == tab }
                )}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="relative">
            {currentTab.map((item, i) => (
              <AnimatePresence>
                <motion.div
                  onHoverEnd={() => {
                    setTab("none");
                  }}
                  key={tab}
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: -50,
                    opacity: 0,
                  }}
                  className="px-5 py-2 absolute  left-0 -top-32    bg-foreground mb-3 rounded-2xl   w-[450px] "
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                  >
                    <div
                      onClick={() => {
                        setTab("none");
                      }}
                      className="absolute z-20 rounded-md cursor-pointer right-4 top-4 hover:bg-background hover:text-foreground text-background p-1"
                    >
                      <X size={15} />
                    </div>
                    <motion.h4
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 5,
                      }}
                      transition={{
                        delay: 0.2,
                      }}
                      className="text-background"
                    >
                      {item.description.title}
                    </motion.h4>
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 5,
                      }}
                      transition={{
                        delay: 0.3,
                      }}
                      className="text-background/75 text-xs"
                    >
                      {item.description.content}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {items.map((item, i) => (
              <motion.div
                onHoverStart={() => {
                  setTab(item.name);
                }}
                key={i}
                className={cn(
                  "p-4 bg-foreground/50 hover:bg-foreground/75 cursor-pointer text-background rounded-2xl",
                  { "bg-foreground": item.name == tab }
                )}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default BottomNavigator;

          `}
          />
        </div>
        <h3>Component API</h3>

        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>items</td>
              <td>{`{ name: string; icon: React.ReactNode; description: { title: string; content: string | React.ReactNode; }; }[]`}</td>
              <td>
                Array of navigation items, each containing a name, icon, and
                description with a title and content.
              </td>
            </tr>
            <tr>
              <td>type</td>
              <td>`"click" | "hover"`</td>
              <td>
                Optional. Defines the interaction type for the navigation items.
                Defaults to `"click"`.
              </td>
            </tr>
          </tbody>
        </table>

        <h3 id="items-property">Items Property</h3>
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td>string</td>
              <td>Name of the navigation item.</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>React.ReactNode</td>
              <td>Icon representing the navigation item.</td>
            </tr>
            <tr>
              <td>description</td>
              <td>{`{ title: string; content: string | React.ReactNode; }`}</td>
              <td>
                Description object containing the title and content for the
                navigation item.
              </td>
            </tr>
          </tbody>
        </table>

        <h3 id="description-property">Description Property</h3>
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>title</td>
              <td>string</td>
              <td>Title of the description.</td>
            </tr>
            <tr>
              <td>content</td>
              <td>string | React.ReactNode</td>
              <td>
                Content of the description, which can be either a string or a
                React node.
              </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
];
