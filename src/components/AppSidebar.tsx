
import { Home, Shirt, HeartHandshake, Calendar, BookUser, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items
const sidebarItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "My Wardrobe",
    url: "/wardrobe",
    icon: Shirt,
  },
  {
    title: "Outfit Creator",
    url: "/outfits",
    icon: HeartHandshake,
  },
  {
    title: "Seasonal Styles",
    url: "/seasonal",
    icon: Calendar,
  },
  {
    title: "Style Profile",
    url: "/profile",
    icon: BookUser,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex items-center px-4 py-4">
          <div className="flex items-center space-x-2">
            <Shirt className="w-8 h-8 text-fashion-mid-purple" />
            <h2 className="text-xl font-semibold">StyleAI</h2>
          </div>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-3 text-sm"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
