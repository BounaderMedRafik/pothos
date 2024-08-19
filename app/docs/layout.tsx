"use client";
import SideBar from "@/components/docs/SideBar";
import PageTransitionProvider from "@/components/providers/PageTransitionProvider";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative wrapper p-0">
      <div className="w-full">
        <SideBar />
      </div>
      <div className=" pl-[25%] ">
        <PageTransitionProvider>
          <div>{children}</div>
        </PageTransitionProvider>
      </div>
    </div>
  );
}
