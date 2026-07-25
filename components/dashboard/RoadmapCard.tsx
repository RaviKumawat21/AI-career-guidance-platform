import {
  CheckCircle2,
  Circle,
  Clock3,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { roadmap } from "@/constants/dashboard";

export default function RoadmapCard() {
  return (
    <Card className="rounded-3xl shadow-lg">
      <CardHeader>
        <CardTitle>
          Learning Roadmap
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {roadmap.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              {item.status === "completed" && (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              )}

              {item.status === "current" && (
                <Clock3 className="h-5 w-5 text-yellow-500" />
              )}

              {item.status === "locked" && (
                <Circle className="h-5 w-5 text-gray-500" />
              )}

              <span>{item.title}</span>
            </div>

            <span className="text-sm text-muted-foreground capitalize">
              {item.status}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}