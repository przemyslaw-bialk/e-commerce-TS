"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@components/ui/sidebar";

const SidebarUser = () => {
  return (
    <Sidebar
      side="left"
      variant="sidebar"
      className="hidden md:flex absolute inset "
    >
      <SidebarHeader>test</SidebarHeader>

      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>

      <SidebarFooter>footer</SidebarFooter>
    </Sidebar>
  );
};

export default SidebarUser;
