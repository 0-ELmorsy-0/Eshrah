import { DollarSign, CreditCard, RefreshCcw, UserPlus } from "lucide-react";
import { StatCard } from "./StatCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const newStudentsData = [
  { name: "يونيو", value: 11 },
  { name: "مايو", value: 11 },
  { name: "أبريل", value: 7 },
  { name: "مارس", value: 14 },
  { name: "فبراير", value: 11 },
  { name: "يناير", value: 19 },
].reverse();

const monthlyRevenueData = [
  { name: "يونيو", value: 24700, label: "24.7K" },
  { name: "مايو", value: 16200, label: "16.2K" },
  { name: "أبريل", value: 16600, label: "16.6K" },
  { name: "مارس", value: 21300, label: "21.3K" },
  { name: "فبراير", value: 19500, label: "19.5K" },
  { name: "يناير", value: 22100, label: "22.1K" },
].reverse();

const revenueDetailsData = [
  {
    month: "يناير",
    year: "2024",
    subscriptions: "23,124",
    refunds: "-1,013",
    netRevenue: "22,111",
    newStudents: 19,
  },
  {
    month: "فبراير",
    year: "2024",
    subscriptions: "20,102",
    refunds: "-594",
    netRevenue: "19,508",
    newStudents: 11,
  },
  {
    month: "مارس",
    year: "2024",
    subscriptions: "22,008",
    refunds: "-716",
    netRevenue: "21,292",
    newStudents: 14,
  },
];

export function Revenue() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title=""
          value="120.4K"
          subtext="إجمالي الإيرادات"
          icon={DollarSign}
          colorClass="bg-success-500 shadow-success-500/20"
        />
        <StatCard
          title=""
          value="50"
          subtext="اشتراكات نشطة"
          icon={CreditCard}
          colorClass="bg-primary-500 shadow-primary-500/20"
        />
        <StatCard
          title=""
          value="3.2K"
          subtext="المبالغ المستردة"
          icon={RefreshCcw}
          colorClass="bg-red-500 shadow-red-500/20"
        />
        <StatCard
          title=""
          value="73"
          subtext="طلاب جدد"
          icon={UserPlus}
          colorClass="bg-info-500 shadow-info-500/20"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* New Students Chart */}
        <div className="bg-bg-card border border-white/5 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">الطلاب الجدد</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={newStudentsData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: "#94a3b8", fontSize: 12 }} 
                  dy={10} 
                />
                <Tooltip
                  cursor={{ fill: "rgba(255,255,255,0.05)" }}
                  contentStyle={{ backgroundColor: "#1e293b", borderColor: "rgba(255,255,255,0.1)", borderRadius: "8px" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Bar 
                  dataKey="value" 
                  radius={[4, 4, 0, 0]}
                  fillOpacity={1}
                >
                  {
                    newStudentsData.map((entry, index) => (
                      <cell key={`cell-${index}`} fill="url(#colorStudent)" />
                    ))
                  }
                </Bar>
                <defs>
                  <linearGradient id="colorStudent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Revenue Chart */}
        <div className="bg-bg-card border border-white/5 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">الإيرادات الشهرية</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyRevenueData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: "#94a3b8", fontSize: 12 }} 
                  dy={10} 
                />
                <Tooltip
                  cursor={{ fill: "rgba(255,255,255,0.05)" }}
                  contentStyle={{ backgroundColor: "#1e293b", borderColor: "rgba(255,255,255,0.1)", borderRadius: "8px" }}
                  formatter={(value: number) => [`${value} ر.س`, 'الإيرادات']}
                  itemStyle={{ color: "#fff" }}
                />
                <Bar 
                  dataKey="value" 
                  radius={[4, 4, 0, 0]}
                  fill="#10b981"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-bg-card border border-white/5 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-white/5 bg-white/[0.02]">
          <h3 className="text-xl font-bold text-white">تفاصيل الإيرادات الشهرية</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.01]">
                <th className="py-5 px-6 text-sm font-semibold text-slate-300">الشهر</th>
                <th className="py-5 px-6 text-sm font-semibold text-slate-300">السنة</th>
                <th className="py-5 px-6 text-sm font-semibold text-slate-300">الاشتراكات</th>
                <th className="py-5 px-6 text-sm font-semibold text-slate-300">المستردات</th>
                <th className="py-5 px-6 text-sm font-semibold text-slate-300">صافي الإيرادات</th>
                <th className="py-5 px-6 text-sm font-semibold text-slate-300">طلاب جدد</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {revenueDetailsData.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-white font-medium">{row.month}</td>
                  <td className="py-4 px-6 text-slate-400 font-mono">{row.year}</td>
                  <td className="py-4 px-6 text-success-500 font-medium">{row.subscriptions} ر.س</td>
                  <td className="py-4 px-6 text-red-400 font-medium">{row.refunds} ر.س</td>
                  <td className="py-4 px-6 text-primary-400 font-bold whitespace-nowrap">{row.netRevenue} ر.س</td>
                  <td className="py-4 px-6">
                    <span className="bg-info-500/20 text-info-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {row.newStudents}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
