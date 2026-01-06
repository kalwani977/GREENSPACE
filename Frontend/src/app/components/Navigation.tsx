import { Button } from "./ui/button";
import { Leaf, LayoutDashboard, Sprout, BookOpen, User, Bell } from "lucide-react";
import { Badge } from "./ui/badge";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isLoggedIn: boolean;
  notificationCount?: number;
}

export function Navigation({
  currentPage,
  onNavigate,
  isLoggedIn,
  notificationCount = 0,
}: NavigationProps) {
  if (!isLoggedIn) return null;

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "my-plants", label: "My Plants", icon: Sprout },
    { id: "learn", label: "Learn", icon: BookOpen },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate("dashboard")}
            className="flex items-center gap-2 text-emerald-700"
          >
            <Leaf className="w-6 h-6" />
            <span className="font-semibold text-lg">Greenspace</span>
          </button>

          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  className={
                    isActive
                      ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                      : "text-slate-600 hover:text-slate-900"
                  }
                  onClick={() => onNavigate(item.id)}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              );
            })}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => onNavigate("notifications")}
            >
              <Bell className="w-5 h-5" />
              {notificationCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-rose-500 text-white text-xs">
                  {notificationCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
