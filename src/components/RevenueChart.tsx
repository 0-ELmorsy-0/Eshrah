import { BarChart, Bar, XAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "يونيو", value: 24.7 },
  { name: "مايو", value: 16.2 },
  { name: "أبريل", value: 16.6 },
  { name: "مارس", value: 21.3 },
  { name: "فبراير", value: 19.5 },
  { name: "يناير", value: 22.1 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-bg-card p-3 rounded-xl border border-white/10 shadow-xl" dir="rtl">
        <p className="text-white font-medium mb-1">{label}</p>
        <p className="text-primary-500 font-semibold">{payload[0].value}K</p>
      </div>
    );
  }
  return null;
};

export function RevenueChart() {
  return (
    <div className="bg-bg-card rounded-3xl p-6 border border-white/5 h-full min-h-[400px] flex flex-col">
      <h3 className="text-xl font-bold text-white mb-6">الإيرادات الشهرية</h3>
      <div className="flex-1 w-full h-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2A2645" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 13, fontFamily: "Cairo" }}
              dy={10}
            />
            <Tooltip cursor={{fill: '#2A2645', opacity: 0.4}} content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              fill="#8b5cf6" 
              radius={[6, 6, 6, 6]}
              barSize={40}
              label={{ position: "top", fill: "#cbd5e1", fontSize: 12, formatter: (val: number) => `${val}K`, dy: -10, fontFamily: "Cairo" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
