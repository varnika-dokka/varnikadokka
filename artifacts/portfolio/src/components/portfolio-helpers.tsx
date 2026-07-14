import { Linkedin, Github } from "lucide-react";

export function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all hover:bg-primary/5"
    >
      {icon}
    </a>
  );
}

export function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
      <span>{children}</span>
    </li>
  );
}

export function ExperienceCard({ role, company, date, description }: { role: string; company: string; date: string; description: string }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-x-4 -inset-y-4 bg-muted/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
      <p className="text-sm font-medium text-muted-foreground mb-2">{date}</p>
      <h4 className="text-xl font-semibold text-foreground mb-1" dangerouslySetInnerHTML={{ __html: role }} />
      <p className="text-primary font-medium mb-4" dangerouslySetInnerHTML={{ __html: company }} />
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{description}</p>
    </div>
  );
}

export function OtherCard({ title, subtitle, desc }: { title: string; subtitle: string; desc: string }) {
  return (
    <div className="p-6 border border-border rounded-2xl bg-card hover:shadow-lg transition-shadow">
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-primary text-sm font-medium mt-1 mb-3" dangerouslySetInnerHTML={{ __html: subtitle }} />
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
