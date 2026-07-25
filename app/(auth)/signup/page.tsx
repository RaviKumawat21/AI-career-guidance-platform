import AuthCard from "@/components/auth/AuthCard";
import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 p-6">
      <AuthCard title="Create Account">
        <SignupForm />
      </AuthCard>
    </main>
  );
}