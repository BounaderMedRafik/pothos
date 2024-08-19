"use client";
import SideBar from "@/components/docs/SideBar";
import SideNav from "@/components/docs/SideNav";
import PageTransitionProvider from "@/components/providers/PageTransitionProvider";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative wrapper p-0">
      <div className="w-full hidden md:block">
        <SideBar />
      </div>
      <div className="block md:hidden">
        <SideNav />
      </div>
      <div className=" md:pl-[25%]  ">
        <PageTransitionProvider>
          <div>{children}</div>
        </PageTransitionProvider>
      </div>
    </div>
  );
}
