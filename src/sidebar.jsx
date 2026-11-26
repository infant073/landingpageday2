// src/sidebar.jsx - Sidebar component
import {
  Home,
  BarChart3,
  Users,
  ShoppingCart,
  Settings,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// This is the Sidebar that shows on the left side of the page
function Sidebar() {
  // List of menu items - each has a name and an icon
  const menuItems = [
    { name: "Dashboard", icon: Home },
    { name: "Analytics", icon: BarChart3 },
    { name: "Customers", icon: Users },
    { name: "Products", icon: ShoppingCart },
    { name: "Settings", icon: Settings },
    { name: "Help", icon: HelpCircle },
  ];

  return (
    // Sidebar container - fixed width, full height, dark background
    <aside className="w-64 min-h-screen bg-sidebar border-r border-sidebar-border p-4 flex flex-col">
      {/* Logo / Brand name at the top */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-sidebar-foreground">
          🚀 MyApp
        </h2>
      </div>

      {/* Navigation menu */}
      <nav className="flex flex-col gap-1 flex-1">
        {menuItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground"
          >
            {/* Icon for the menu item */}
            <item.icon className="size-5" />
            {/* Name of the menu item */}
            {item.name}
          </Button>
        ))}
      </nav>

      {/* Bottom section of sidebar */}
      <div className="mt-auto pt-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-2">
          {/* User avatar (a simple circle with initials) */}
          <div className="size-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
            JD
          </div>
          <div>
            <p className="text-sm font-medium text-sidebar-foreground">John Doe</p>
            <p className="text-xs text-muted-foreground">john@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
