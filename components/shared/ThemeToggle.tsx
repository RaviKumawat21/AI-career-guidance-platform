import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";

export default function ThemeToggle() {
  return (
    <Button
      variant="ghost"
      size="icon"
    >
      <Moon className="h-5 w-5" />
    </Button>
  );
}