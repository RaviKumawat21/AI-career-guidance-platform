// components/layout/SidebarItem.tsx

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  href: string;
  icon: LucideIcon;
}

export default function SidebarItem({
  title,
  href,
  icon: Icon,
}: Props) {
  return (
    <Link
      href={href}
      className="
      flex
      items-center
      gap-3
      rounded-xl
      px-4
      py-3
      text-sm
      font-medium
      transition-all
      hover:bg-muted
      "
    >
      <Icon className="h-5 w-5" />

      {title}
    </Link>
  );
}