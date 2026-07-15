import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/animations";

export default function PageFooter() {
  return (
    <footer className="bg-foreground text-background py-20 px-6 md:px-12 lg:px-24 mt-auto">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 max-w-3xl text-background/90 leading-tight">
I'm always open to new opportunities — let's talk.
          </h2>
        </FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-16 border-t border-background/20 pt-12">
          <FadeIn delay={0.1}>
            <div className="space-y-2">
              <p className="text-background/60 uppercase tracking-widest text-xs font-semibold mb-4">Connect</p>
              <a href="mailto:varnnikadokka@outlook.com" className="block text-xl md:text-2xl hover:text-primary transition-colors">
                varnnikadokka@outlook.com
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-6">
              <a href="https://linkedin.com/in/varnikadokka" target="_blank" rel="noreferrer" className="text-background/70 hover:text-background transition-colors flex items-center gap-2">
                LinkedIn <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="https://github.com/varnika-dokka" target="_blank" rel="noreferrer" className="text-background/70 hover:text-background transition-colors flex items-center gap-2">
                GitHub <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.3}>
          <div className="mt-16 text-background/40 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Varnika V. Dokka. All rights reserved.</p>
            <p>Based in Sammamish, WA</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
