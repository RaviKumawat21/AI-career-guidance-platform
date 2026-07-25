import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <div className="mb-6 flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
          <Sparkles className="h-4 w-4 text-indigo-600" />
          AI Powered Career Guidance Platform
        </div>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          Discover Your
          <span className="text-indigo-600"> Dream Career </span>
          With Artificial Intelligence
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Get personalized career recommendations, learning roadmaps,
          internship suggestions, and progress tracking — all powered by AI.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="lg"
          >
            Watch Demo
          </Button>

        </div>

      </div>
    </section>
  );
}