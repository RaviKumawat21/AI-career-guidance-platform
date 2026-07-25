import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { quickActions } from "@/constants/dashboard";

export default function QuickActions() {
  return (
    <Card className="rounded-3xl shadow-lg">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-4 sm:grid-cols-2">
        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-muted"
            >
              <Icon className="mb-3 h-6 w-6 text-primary" />

              <h3 className="font-semibold">
                {action.title}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {action.description}
              </p>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}