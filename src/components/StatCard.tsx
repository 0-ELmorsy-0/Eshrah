import { cn } from "../lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtext: string;
  icon: LucideIcon;
  colorClass: string;
}

export function StatCard({ title, value, subtext, icon: Icon, colorClass }: StatCardProps) {
  return (
    <div className="bg-bg-card rounded-2xl p-6 border border-white/5 shadow-sm flex items-center justify-between">
      <div>
        {title && <p className="text-slate-400 text-sm mb-2">{title}</p>}
        <h3 className="text-3xl font-bold text-white mb-1">{value}</h3>
        {subtext && <p className="text-xs text-slate-500 mt-1">{subtext}</p>}
      </div>
      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg", colorClass)}>
        <Icon className="w-7 h-7 text-white" />
      </div>
    </div>
  );
}
