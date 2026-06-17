import {
  LayoutDashboard,
  Users,
  BookOpen,
  CreditCard,
  FileText,
  Award,
  DollarSign,
  Settings,
  BookMarked
} from "lucide-react";
import { cn } from "../lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "لوحة التحكم", active: true },
  { icon: Users, label: "الطلاب" },
  { icon: BookOpen, label: "الدورات" },
  { icon: CreditCard, label: "الاشتراكات" },
  { icon: FileText, label: "الامتحانات" },
  { icon: Award, label: "الشهادات" },
  { icon: DollarSign, label: "الإيرادات" },
  { icon: Settings, label: "الإعدادات" },
];

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="w-64 flex-shrink-0 bg-bg-sidebar border-l border-white/5 flex flex-col h-full overflow-y-auto hidden md:flex">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-500 shrink-0">
          <BookMarked className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white leading-tight">إشرحــ طب</h1>
          <p className="text-xs text-slate-400">نظام إدارة التعليم</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item, index) => {
          const isActive = activeTab === item.label;
          return (
            <button
              key={index}
              onClick={() => setActiveTab(item.label)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors",
                isActive 
                  ? "bg-primary-500/10 text-primary-500 font-semibold" 
                  : "text-slate-400 hover:text-white hover:bg-bg-hover"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-primary-500" : "text-slate-400")} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
