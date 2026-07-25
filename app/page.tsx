// import Navbar from "@/components/landing/Navbar";
// import Hero from "@/components/landing/Hero";
// import TrustedTech from "@/components/landing/TrustedTech";
// import Features from "@/components/landing/Features";
// import HowItWorks from "@/components/landing/HowItWorks";
// import DashboardPreview from "@/components/landing/DashboardPreview";
// import Testimonials from "@/components/landing/Testimonials";
// import Faq from "@/components/landing/Faq";
// import CTA from "@/components/landing/CTA";
// import Footer from "@/components/landing/Footer";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <TrustedTech />
//       <Features />
//       <HowItWorks />
//       <DashboardPreview />
//       <Testimonials />
//       <Faq />
//       <CTA />
//       <Footer />
//     </>
//   );
// }

import AppShell from "@/components/layout/AppShell";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import StatCard from "@/components/dashboard/StatCard";

import { dashboardStats } from "@/constants/dashboard";

export default function DashboardPage() {
  return (
    <AppShell>
      <WelcomeBanner />

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.title}
            {...stat}
          />
        ))}
      </div>
    </AppShell>
  );
}

