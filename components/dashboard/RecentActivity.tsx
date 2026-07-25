import {
  Bot,
  BriefcaseBusiness,
  Compass,
  GraduationCap,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { recentActivities } from "@/constants/dashboard";

export default function RecentActivity() {
  const icons = {
    career: Compass,
    learning: GraduationCap,
    internship: BriefcaseBusiness,
    ai: Bot,
  };

  return (
    <Card className="rounded-3xl shadow-lg">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {recentActivities.map((activity) => {
          const Icon = icons[activity.type as keyof typeof icons];

          return (
            <div
              key={activity.title}
              className="flex items-center gap-4"
            >
              <div className="rounded-full bg-primary/10 p-2">
                <Icon className="h-5 w-5 text-primary" />
              </div>

              <div className="flex-1">
                <p className="font-medium">
                  {activity.title}
                </p>

                <p className="text-sm text-muted-foreground">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}