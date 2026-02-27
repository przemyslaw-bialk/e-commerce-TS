import SidebarUser from "@components/account/SidebarUser";
import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@components/ui/sidebar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider className="relative flex">
      <SidebarUser />
      <SidebarTrigger className="block md:hidden" />
      <main className="bg-green-300 w-full">
        <div> {children}</div>
      </main>
    </SidebarProvider>
  );
};

export default Layout;
