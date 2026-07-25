import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

import { learningProgress } from "@/constants/dashboard";

export default function LearningProgress() {
  return (
    <Card className="rounded-3xl shadow-lg">
      <CardHeader>
        <CardTitle>
          Learning Progress
        </CardTitle>
      </CardHeader>

      <CardContent>

        <div className="mb-4">
          <div className="flex justify-between">
            <span className="font-medium">
              Overall Progress
            </span>

            <span className="font-bold">
              {learningProgress.progress}%
            </span>
          </div>

          <Progress
            value={learningProgress.progress}
            className="mt-3"
          />
        </div>

        <div className="mt-6 space-y-2">

          <p className="text-sm text-muted-foreground">
            Current Course
          </p>

          <h3 className="font-semibold">
            {learningProgress.currentCourse}
          </h3>

          <p className="text-sm text-muted-foreground">
            {learningProgress.completedModules} / {learningProgress.totalModules} Modules Completed
          </p>

        </div>

        <Button className="mt-6 w-full">
          Continue Learning
        </Button>

      </CardContent>
    </Card>
  );
}