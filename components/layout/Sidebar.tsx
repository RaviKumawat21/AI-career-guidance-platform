// components/layout/Sidebar.tsx

import { sidebarItems } from "@/constants/dashboard";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="hidden w-72 border-r bg-card lg:flex lg:flex-col">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold">
          CareerAI
        </h1>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.href}
            {...item}
          />
        ))}
      </nav>
    </aside>
  );
}