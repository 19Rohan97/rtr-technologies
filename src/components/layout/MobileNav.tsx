"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, FolderOpen, Mail } from "lucide-react";

type Item = {
  href: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const items: Item[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/portfolio", label: "Work", icon: FolderOpen },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-900/80 backdrop-blur"
      role="navigation"
      aria-label="Primary"
    >
      <ul className="flex items-stretch justify-around">
        {items.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                className={`flex flex-col items-center justify-center gap-1 py-2.5 text-xs transition-colors ${
                  active
                    ? "text-yellow-600 dark:text-yellow-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <Icon
                  className={`w-5 h-5 ${
                    active ? "" : "opacity-90"
                  }`}
                  aria-hidden="true"
                />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Safe area shim for iOS */}
      <div className="h-[calc(env(safe-area-inset-bottom))]" />
    </nav>
  );
}

