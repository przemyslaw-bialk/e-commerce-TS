"use client";

import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@components/ui/sidebar";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const SidebarUser = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sidebar
      side="left"
      variant="sidebar"
      className="hidden md:flex absolute inset-0"
    >
      <SidebarHeader>Manage account</SidebarHeader>

      <SidebarMenu>
        <SidebarContent>
          <SidebarGroup>
            {/* Dropdown Menu */}
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between  bg-green-500/10"
              >
                Account
                <ChevronDown
                  className={`ml-2 transition-transform duration-200 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
              </SidebarMenuButton>

              {/* Dropdown Items */}
              {open && (
                <div className="ml-3 mt-1 flex flex-col gap-1">
                  <SidebarMenuItem>
                    <Link href="/account/profile">profile</Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link href="/account/profile">billing info</Link>
                  </SidebarMenuItem>
                </div>
              )}
            </SidebarMenuItem>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarMenuItem>Complain Center</SidebarMenuItem>
          </SidebarGroup>
        </SidebarContent>
      </SidebarMenu>
    </Sidebar>
  );
};

export default SidebarUser;
