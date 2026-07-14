import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { ListItem } from "@/components/portfolio-helpers";
import Nav from "@/components/Nav";
import PageFooter from "@/components/PageFooter";
import cacheImg from "@assets/cache-screenshot.png";
import neuroLearnImg from "@assets/neurolearn-screenshot.png";

export default function Work() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20">
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-multiply opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      <Nav />

      <main className="flex-1 pt-28">
        {/* Page header */}
        <div className="relative px-6 md:px-12 lg:px-24 pb-16 max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-wide uppercase text-sm">Selected Projects</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">Featured Work</h1>
          </FadeIn>
        </div>

        {/* Cache */}
        <section className="px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-background border-y border-amber-100">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-6 uppercase tracking-wider">
                  Co-Founder &amp; Product Manager
                </div>
                <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Cache</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  An AI-powered web application that transforms screenshots into a searchable personal knowledge library using natural language search.
                </p>
                <ul className="space-y-4 mb-10 text-foreground/80">
                  <ListItem>Interviewed 25 UW students to validate idea</ListItem>
                  <ListItem>Built and launched MVP in under 1 month with 150+ active beta users</ListItem>
                  <ListItem>Implemented row-level security and defined event analytics for activation and retention</ListItem>
                  <ListItem>Tech: Next.js, React, TypeScript, Tailwind CSS, Supabase</ListItem>
                </ul>
                <a href="https://cache-screenshots.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600 text-white font-medium transition-all hover:bg-amber-700 hover:shadow-lg hover:-translate-y-0.5">
                  View Live Site <ArrowUpRight className="w-4 h-4" />
                </a>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <FadeIn delay={0.2}>
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-amber-200/60 ring-1 ring-amber-100">
                  <img src={cacheImg} alt="Cache app" className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* NeuroLearn */}
        <section className="px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-br from-violet-50/80 via-purple-50/40 to-background border-b border-violet-100">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeIn delay={0.1}>
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-violet-200/60 ring-1 ring-violet-100">
                  <img src={neuroLearnImg} alt="NeuroLearn" className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" />
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-5">
              <FadeIn delay={0.2}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-xs font-semibold mb-6 uppercase tracking-wider">
                  Product Lead
                </div>
                <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">NeuroLearn</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  A gamified web platform making neuroscience education accessible and engaging for students.
                </p>
                <ul className="space-y-4 mb-10 text-foreground/80">
                  <ListItem>Identified gap in accessible neuroscience education and defined the MVP</ListItem>
                  <ListItem>Reduced feature scope by 40% to deliver within a 10-week timeline</ListItem>
                  <ListItem>Led a 4-person cross-functional team across front-end, data integration, and GitHub workflows</ListItem>
                  <ListItem>Resulted in a 30% increase in student engagement</ListItem>
                </ul>
                <a href="https://neurolearn-draft2.web.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 text-white font-medium transition-all hover:bg-violet-700 hover:shadow-lg hover:-translate-y-0.5">
                  View Live Site <ArrowUpRight className="w-4 h-4" />
                </a>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
}
