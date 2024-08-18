import SideBar from "@/components/docs/SideBar";

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
      <div className=" pl-[25%]">{children}</div>
    </div>
  );
}
