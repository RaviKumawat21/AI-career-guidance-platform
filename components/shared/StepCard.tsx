import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function StepCard({
  step,
  title,
  description,
  icon: Icon,
}: StepCardProps) {
  return (
    <Card className="relative rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <CardContent className="p-8">
        <div className="absolute right-6 top-6 text-5xl font-extrabold text-slate-100">
          {step}
        </div>

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100">
          <Icon className="h-7 w-7 text-indigo-600" />
        </div>

        <h3 className="mb-3 text-xl font-semibold">
          {title}
        </h3>

        <p className="text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}