// src/navigationbar.jsx - Top Navigation Bar component
import { Search, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

// This is the top navigation bar
function NavigationBar() {
  return (
    // Nav bar container - stretches full width, has bottom border
    <header className="h-16 border-b border-border bg-background flex items-center justify-between px-6">
      {/* Left side - Page title */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-5" />
        </Button>
        <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
      </div>

      {/* Right side - Search bar + icons */}
      <div className="flex items-center gap-3">
        {/* Search input */}
        <div className="hidden sm:flex items-center gap-2 bg-muted rounded-lg px-3 py-1.5">
          <Search className="size-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm outline-none w-40 placeholder:text-muted-foreground"
          />
        </div>

        {/* Notification bell icon */}
        <Button variant="ghost" size="icon">
          <Bell className="size-5" />
        </Button>

        {/* User avatar */}
        <div className="size-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium cursor-pointer">
          JD
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
