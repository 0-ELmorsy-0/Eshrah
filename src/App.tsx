import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { Students } from "./components/Students";
import { Courses } from "./components/Courses";
import { Subscriptions } from "./components/Subscriptions";
import { Exams } from "./components/Exams";
import { Certificates } from "./components/Certificates";
import { Revenue } from "./components/Revenue";
import { Settings } from "./components/Settings";

export default function App() {
  const [activeTab, setActiveTab] = useState("لوحة التحكم");

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 pb-24">
          <Header activeTab={activeTab} />
          
          {activeTab === "لوحة التحكم" && <Dashboard />}
          {activeTab === "الطلاب" && <Students />}
          {activeTab === "الدورات" && <Courses />}
          {activeTab === "الاشتراكات" && <Subscriptions />}
          {activeTab === "الامتحانات" && <Exams />}
          {activeTab === "الشهادات" && <Certificates />}
          {activeTab === "الإيرادات" && <Revenue />}
          {activeTab === "الإعدادات" && <Settings />}
        </div>
      </main>
    </div>
  );
}
