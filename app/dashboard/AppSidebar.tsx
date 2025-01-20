
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Bell, CalendarDays, CircleUserRound, Home, Mail, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

const mainNavItems = [
  {
    title: "Home",
    icon: Home,
    url: "/dashboard",
  },
  {
    title: "Messages",
    icon: Mail,
    url: "/dashboard/messages",
  },
  {
    title: "Calendar",
    icon: CalendarDays,
    url: "/dashboard/calendar",
  },
  {
    title: "Notifications",
    icon: Bell,
    url: "/dashboard/notifications",
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="sidebar">
      <SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel className="sidebar-group-label">MessMania</SidebarGroupLabel>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="sidebar-menu-button" asChild>
                    <a href={item.url}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="sidebar-menu-button" asChild>
                  <a href="/dashboard/profile">
                    <CircleUserRound className="h-5 w-5" />
                    <span>Profile</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="sidebar-menu-button" asChild>
                  <a href="/dashboard/settings">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <ThemeToggle />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}
