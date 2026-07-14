import { Link, useLocation } from "wouter";
import { Mail } from "lucide-react";

const links = [
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Background", href: "/background" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 lg:px-24 py-5">
      <Link href="/">
        <span className="font-serif text-lg tracking-tight text-foreground/80 hover:text-primary transition-colors cursor-pointer select-none">
          VD
        </span>
      </Link>
      <div className="flex items-center gap-1 bg-background/80 backdrop-blur-md border border-border/60 rounded-full px-2 py-1.5 shadow-sm">
        {links.map(({ label, href }) => {
          const active = location === href;
          return (
            <Link key={href} href={href}>
              <span
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  active
                    ? "bg-foreground text-background shadow-sm"
                    : "text-foreground/60 hover:text-foreground hover:bg-muted"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
        <a
          href="mailto:varnnikadokka@outlook.com"
          className="ml-1 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
        >
          <Mail className="w-3.5 h-3.5" />
          Contact
        </a>
      </div>
    </nav>
  );
}
