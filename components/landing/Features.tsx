import { features } from "@/constants/features";
import FeatureCard from "@/components/shared/FeatureCard";

export default function Features() {
  return (
    <section
      id="features"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="mb-3 font-semibold text-indigo-600">
            FEATURES
          </p>

          <h2 className="text-4xl font-bold">
            Everything You Need To Build Your Career
          </h2>

          <p className="mt-5 text-muted-foreground">
            Our AI platform helps students discover careers,
            learn new skills, and land internships.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
}