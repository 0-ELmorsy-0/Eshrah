import { ShieldCheck, Sparkles, Award } from "lucide-react";
import { StatCard } from "./StatCard";
import { cn } from "../lib/utils";

const certificatesData = [
  {
    id: 1,
    student: "أحمد محمد علي",
    course: "دورة البرمجة للمبتدئين",
    date: "2026/4/3",
    grade: "ممتاز",
    gradeColor: "text-success-500 bg-success-500/10",
    active: true,
  },
  {
    id: 2,
    student: "فاطمة حسن إبراهيم",
    course: "دورة التصوير الفوتوغرافي",
    date: "2026/6/11",
    grade: "جيد جداً",
    gradeColor: "text-warning-500 bg-warning-500/10",
    active: false,
  },
  {
    id: 3,
    student: "محمد عبدالله السيد",
    course: "دورة إدارة المشاريع",
    date: "2026/4/2",
    grade: "جيد",
    gradeColor: "text-info-500 bg-info-500/10",
    active: false,
  }
];

export function Certificates() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title=""
          value="10"
          subtext="شهادات صادرة"
          icon={Award}
          colorClass="bg-primary-500 shadow-primary-500/20"
        />
        <StatCard
          title=""
          value="3"
          subtext="تقدير ممتاز"
          icon={Sparkles}
          colorClass="bg-warning-500 shadow-warning-500/20"
        />
        <StatCard
          title=""
          value="100%"
          subtext="معدل التحقق"
          icon={ShieldCheck}
          colorClass="bg-success-500 shadow-success-500/20"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Right side: List */}
        <div className="lg:col-span-7 bg-bg-card border border-white/5 rounded-3xl p-6 flex flex-col min-h-[500px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">الشهادات الصادرة</h3>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors text-sm">
              إصدار شهادة جديدة
            </button>
          </div>
          
          <div className="space-y-4 overflow-y-auto flex-1">
             {certificatesData.map((cert) => (
               <div 
                 key={cert.id} 
                 className={cn(
                   "flex flex-row items-center justify-between p-5 transition-colors rounded-2xl border cursor-pointer",
                   cert.active 
                     ? "bg-white/[0.04] border-white/10 border-r-[4px] border-r-primary-500" 
                     : "bg-white/[0.02] hover:bg-white/[0.04] border-white/5"
                 )}
               >
                 <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-xl bg-warning-500 flex items-center justify-center shrink-0 shadow-lg shadow-warning-500/20">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{cert.student}</h4>
                      <p className="text-slate-400 text-sm mt-1">{cert.course}</p>
                      <p className="text-slate-500 text-xs mt-1 font-mono">{cert.date}</p>
                    </div>
                 </div>
                 
                 <div>
                   <span className={cn("px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap", cert.gradeColor)}>
                     {cert.grade}
                   </span>
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* Left side: Preview */}
        <div className="lg:col-span-5 bg-bg-card border border-white/5 rounded-3xl p-6 flex flex-col min-h-[500px]">
           <h3 className="text-xl font-bold text-white mb-6">معاينة الشهادة</h3>
           <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-3xl bg-white/[0.01]">
              <div className="w-24 h-24 rounded-full bg-slate-800/50 flex items-center justify-center mb-6">
                 <ShieldCheck className="w-12 h-12 text-slate-500" />
              </div>
              <p className="text-slate-500 text-lg font-medium">اختر شهادة لمعاينتها</p>
           </div>
        </div>
      </div>
    </div>
  );
}
