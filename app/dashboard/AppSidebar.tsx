
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Bell, CircleUserRound, Clock, CreditCard, Settings, ShoppingCart, User } from "lucide-react"

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
    title: "User Info",
    icon: User,
    url: "/dashboard/userInfo",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    url: "/dashboard/orders",
  },
  {
    title: "Payment History",
    icon: CreditCard,
    url: "/dashboard/payment",
  },
  {
    title: "Analytics",
    icon: Clock,
    url: "/dashboard/analytics",
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
          <SidebarGroupLabel className="sidebar-group-label font-dancing text-4xl font-bold text-[#FF6F30]">MessMania</SidebarGroupLabel>
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
                      <span className="text-md">{item.title}</span>
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
