import NavigatioBar from "@/components/pages/docs-layout/NavigatioBar";
import SideBar, { SideBarMobile } from "@/components/pages/docs-layout/SideBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TableOfContents } from "@/components/ui/table-of-content";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigatioBar />
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="mx-auto flex w-full max-w-7xl">
          {/* Left sidebar (desktop only) */}
          <div className="hidden lg:block w-[220px] shrink-0 pt-8 lg:pt-10">
            <SideBar />
          </div>

          {/* Mobile sidebar dropdown */}
          <div className="block w-full lg:hidden pt-4">
            <SideBarMobile />
          </div>

          {/* Main content */}
          <main
            className="flex-1 min-w-0 w-full pb-16 pt-6 lg:pt-12 prose prose-zinc dark:prose-invert 
            prose-h1:scroll-m-20 prose-h1:text-2xl prose-h1:font-semibold
            prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-xl prose-h2:font-medium
            prose-h3:scroll-m-20 prose-h3:text-base prose-h3:font-medium
            prose-h4:scroll-m-20 prose-h5:scroll-m-20 prose-h6:scroll-m-20
            prose-strong:font-medium prose-table:block prose-table:overflow-y-auto 
            lg:max-w-3xl mx-auto"
          >
            {children}
          </main>

          {/* Right sidebar (TOC, desktop only) */}
          <aside className="sticky top-20 hidden xl:block h-[calc(100dvh-4rem)] w-[220px] shrink-0 pt-8 lg:pt-10">
            <ScrollArea className="h-full w-full">
              <TableOfContents />
            </ScrollArea>
          </aside>
        </div>
      </div>
    </>
  );
}
