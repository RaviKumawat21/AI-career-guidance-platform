import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/shared/Logo";

interface AuthCardProps {
  title: string;
  children: ReactNode;
}

export default function AuthCard({ title, children }: AuthCardProps) {
  return (
    <Card className="w-full max-w-md rounded-3xl shadow-xl">
      <CardHeader className="space-y-6 text-center">
        <div className="flex justify-center">
          <Logo />
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
