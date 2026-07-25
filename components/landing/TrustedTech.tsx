import { techStack } from "@/constants/tech-stack";

export default function TrustedTech() {
  return (
    <section className="border-y bg-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Built with Modern Technologies
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="rounded-xl border bg-background px-6 py-3 shadow-sm transition hover:shadow-md"
            >
              <span className="font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}