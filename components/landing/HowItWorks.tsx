import { howItWorks } from "@/constants/how-it-works";
import StepCard from "@/components/shared/StepCard";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-slate-50 py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 font-semibold text-indigo-600">
            HOW IT WORKS
          </p>

          <h2 className="text-4xl font-bold">
            Your AI Career Journey in 4 Steps
          </h2>

          <p className="mt-5 text-muted-foreground">
            From profile creation to internships, our AI guides you at every stage.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item) => (
            <StepCard key={item.step} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}