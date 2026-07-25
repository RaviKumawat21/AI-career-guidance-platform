import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <Card className="rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <CardContent className="p-8">
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