import AppShell from "@/components/layout/AppShell";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import StatCard from "@/components/dashboard/StatCard";

import { dashboardStats } from "@/constants/dashboard";
import LearningProgress from "@/components/dashboard/LearningProgress";
import RoadmapCard from "@/components/dashboard/RoadmapCard";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";

import AIAssistant from "@/components/dashboard/AIAssistant";

import ProgressChart from "@/components/dashboard/ProgressChart";
export default function DashboardPage() {
  return (
  <AppShell>

    <WelcomeBanner />

    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat) => (
        <StatCard
          key={stat.title}
          {...stat}
        />
      ))}
    </div>

    <div className="mt-8 grid gap-6 lg:grid-cols-2">
  {/* <LearningProgress /> */}
  <ProgressChart />
  <RoadmapCard />
</div>

<div className="mt-8">
  <QuickActions />
</div>

<div className="mt-8 grid gap-6 lg:grid-cols-2">
  <RecentActivity />

 <AIAssistant />
</div>

  </AppShell>
);
}