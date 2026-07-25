import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  trend: string;
}

export default function StatCard({
  title,
  value,
  description,
  trend,
}: StatCardProps) {
  return (
    <Card className="rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm text-muted-foreground">{title}</h3>

          <Badge variant="secondary">
            <ArrowUpRight className="mr-1 h-3 w-3" />
            {trend}
          </Badge>
        </div>

        <h2 className="mt-4 text-4xl font-bold">{value}</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
