import { Search, Plus, LayoutGrid, List, User, Star, Clock, FileText, Users } from "lucide-react";
import { cn } from "../lib/utils";

const coursesData = [
  {
    id: 1,
    title: "دورة التسويق الرقمي",
    category: "تسويق",
    gradient: "bg-gradient-to-br from-cyan-600 to-blue-900",
    description: "احترف التسويق عبر منصات التواصل الاجتماعي وإعلانات جوجل",
    instructor: "د. نورة السعيد",
    rating: 4.7,
    duration: "35 ساعة",
    lessons: 10,
    students: 189,
    price: 699,
  },
  {
    id: 2,
    title: "دورة البرمجة للمبتدئين",
    category: "برمجة",
    gradient: "bg-gradient-to-br from-violet-600 to-purple-900",
    description: "ابدأ رحلتك في عالم البرمجة مع Python وتعلم أساسيات التفكير المنطقي",
    instructor: "م. أحمد الخالد",
    rating: 4.9,
    duration: "60 ساعة",
    lessons: 18,
    students: 234,
    price: 799,
  },
  {
    id: 3,
    title: "دورة تصميم الجرافيك",
    category: "تصميم",
    gradient: "bg-gradient-to-br from-rose-600 to-rose-900",
    description: "تعلم أساسيات التصميم الجرافيكي باستخدام أدوات احترافية مثل فوتوشوب...",
    instructor: "أ. سارة الأحمد",
    rating: 4.8,
    duration: "40 ساعة",
    lessons: 12,
    students: 156,
    price: 599,
  }
];

export function Courses() {
  return (
    <div className="space-y-6">
      {/* Top Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative w-full sm:w-96">
          <input
            type="text"
            placeholder="البحث عن دورة..."
            className="w-full bg-bg-card border border-white/5 rounded-xl py-3 pr-11 pl-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-500/50 transition-colors"
          />
          <Search className="w-5 h-5 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2" />
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex bg-bg-card border border-white/5 rounded-xl p-1 shrink-0">
                <button className="p-2 bg-primary-500 rounded-lg text-white">
                    <LayoutGrid className="w-5 h-5" />
                </button>
                <button className="p-2 text-slate-400 hover:text-white transition-colors">
                    <List className="w-5 h-5" />
                </button>
            </div>
            <button className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-5 py-3 rounded-xl font-medium transition-colors w-full sm:w-auto justify-center">
              <Plus className="w-5 h-5" />
              <span>إنشاء دورة جديدة</span>
            </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.map((course) => (
          <div key={course.id} className="bg-bg-card border border-white/5 rounded-3xl overflow-hidden flex flex-col">
            
            {/* Card Header with Gradient */}
            <div className={cn("relative h-48 flex items-center justify-center p-6", course.gradient)}>
              <span className="absolute top-4 left-4 bg-black/20 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                {course.category}
              </span>
              <h3 className="text-2xl font-bold text-white text-center leading-relaxed mt-4">
                {course.title}
              </h3>
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col gap-6">
              <p className="text-slate-400 text-sm text-center leading-relaxed line-clamp-2 h-10">
                {course.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-slate-300">
                   <div className="flex items-center gap-2">
                     <User className="w-4 h-4 text-slate-400" />
                     <span>{course.instructor}</span>
                   </div>
                   <div className="flex items-center gap-1">
                     <span className="font-semibold text-white">{course.rating}</span>
                     <Star className="w-4 h-4 text-warning-500 fill-warning-500" />
                   </div>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-300">
                   <div className="flex items-center gap-2">
                     <Clock className="w-4 h-4 text-slate-400" />
                     <span>{course.duration}</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <FileText className="w-4 h-4 text-slate-400" />
                     <span>{course.lessons} درس</span>
                   </div>
                </div>
              </div>

              <hr className="border-white/5" />

              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                   <Users className="w-4 h-4" />
                   <span>{course.students} طالب</span>
                </div>
                <div className="flex items-center gap-1 text-primary-500 font-bold text-2xl">
                   {course.price} <span className="text-sm font-normal">ر.س</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
