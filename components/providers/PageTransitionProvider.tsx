import { AnimatePresence, motion } from "framer-motion";
import { Loader } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useLayoutEffect } from "react";

const PageTransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const path = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useLayoutEffect(() => {
    setIsContentLoaded(false);
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setIsContentLoaded(true);
      }, 0);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [path]);

  return (
    <div>
      {isLoading ? (
        <motion.div key="loading">
          <div>
            <LoadingPage path={path} />
          </div>
        </motion.div>
      ) : isContentLoaded ? (
        <motion.div
          key={path}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          <div>{children}</div>
        </motion.div>
      ) : null}
    </div>
  );
};

const LoadingPage = ({ path }: { path: string }) => {
  const lastIndex = path.lastIndexOf("/");
  const lastPathPart = lastIndex !== -1 ? path.substr(lastIndex + 1) : path;

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className=" w-full h-[50vh] flex items-center justify-center gap-2  opacity-75"
    >
      <div className="font-semibold">{lastPathPart}</div>
      <div>
        <Loader className=" animate-spin" size={25} />
      </div>
    </motion.div>
  );
};

export default PageTransitionProvider;
