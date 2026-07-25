import { LayoutDashboard, Compass, BookOpen, Briefcase, Settings, BriefcaseBusiness, Bot } from "lucide-react";

export const dashboardStats = [
  {
    title: "Career Match",
    value: "95%",
    description: "AI Engineer",
    trend: "+5%",
  },
  {
    title: "Learning Progress",
    value: "82%",
    description: "12 Modules Completed",
    trend: "+12%",
  },
  {
    title: "Internships",
    value: "08",
    description: "Recommended",
    trend: "+2",
  },
  {
    title: "Skills",
    value: "24",
    description: "Verified",
    trend: "+3",
  },
];
export const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Career Paths",
    href: "/career-paths",
    icon: Compass,
  },
  {
    title: "Learning",
    href: "/learning",
    icon: BookOpen,
  },
  {
    title: "Internships",
    href: "/internships",
    icon: Briefcase,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
export const learningProgress = {
  progress: 82,
  currentCourse: "Machine Learning Fundamentals",
  completedModules: 12,
  totalModules: 15,
};
export const roadmap = [
  {
    title: "Python Fundamentals",
    status: "completed",
  },
  {
    title: "SQL Basics",
    status: "completed",
  },
  {
    title: "Machine Learning",
    status: "current",
  },
  {
    title: "Deep Learning",
    status: "locked",
  },
  {
    title: "MLOps",
    status: "locked",
  },
];


export const quickActions = [
  {
    title: "Continue Learning",
    description: "Resume your current course",
    href: "/roadmap",
    icon: BookOpen,
  },
  {
    title: "Career Paths",
    description: "Explore AI recommendations",
    href: "/career",
    icon: Compass,
  },
  {
    title: "Internships",
    description: "Browse opportunities",
    href: "/internships",
    icon: BriefcaseBusiness,
  },
  {
    title: "Ask AI",
    description: "Get instant guidance",
    href: "/assistant",
    icon: Bot,
  },
];
export const recentActivities = [
  {
    title: "Career recommendation updated",
    time: "2 hours ago",
    type: "career",
  },
  {
    title: "Completed SQL Basics",
    time: "Yesterday",
    type: "learning",
  },
  {
    title: "New internship matched",
    time: "2 days ago",
    type: "internship",
  },
  {
    title: "Asked AI about ML roadmap",
    time: "3 days ago",
    type: "ai",
  },
];
export const aiSuggestions = [
  "How do I become an AI Engineer?",
  "What should I learn next?",
  "Recommend internships for me",
  "Review my roadmap",
];
export const progressChartData = [
  { week: "Week 1", progress: 20 },
  { week: "Week 2", progress: 35 },
  { week: "Week 3", progress: 50 },
  { week: "Week 4", progress: 68 },
  { week: "Week 5", progress: 82 },
];