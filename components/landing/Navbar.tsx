"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import Logo from "@/components/shared/Logo";
import ThemeToggle from "@/components/shared/ThemeToggle";

const links = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "How It Works",
    href: "#how-it-works",
  },
  {
    title: "Dashboard",
    href: "#dashboard",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-sm font-medium transition hover:text-indigo-600"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">

          <ThemeToggle />

          <Button>
            Get Started
          </Button>

        </div>

      </div>
    </header>
  );
}