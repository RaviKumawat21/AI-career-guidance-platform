import { Button } from "@/components/ui/button";

export default function WelcomeBanner() {
  return (
    <section className="rounded-3xl border bg-card p-8 shadow-lg">
      <h1 className="text-3xl font-bold">
        👋 Good Evening, Ravi
      </h1>

      <p className="mt-2 text-muted-foreground">
        Continue your AI career journey today.
      </p>

      <div className="mt-6 flex gap-4">
        <Button>
          Continue Learning
        </Button>

        <Button variant="outline">
          View Roadmap
        </Button>
      </div>
    </section>
  );
}