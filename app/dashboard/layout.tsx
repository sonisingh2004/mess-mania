import { AppSidebar } from "@/app/dashboard/AppSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <main className="flex-1 p-6">
          <SidebarTrigger />
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}