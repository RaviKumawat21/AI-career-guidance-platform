// components/layout/Topbar.tsx

import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur">
      <div className="relative w-80">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

        <input
          placeholder="Search..."
          className="w-full rounded-xl border py-2 pl-10 pr-4 outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-xl border p-2">
          <Bell className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
            R
          </div>

          <div>
            <p className="text-sm font-semibold">
              Ravi Kumawat
            </p>

            <p className="text-xs text-muted-foreground">
              Student
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}