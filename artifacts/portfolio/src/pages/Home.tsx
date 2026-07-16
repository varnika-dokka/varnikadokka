import { useEffect } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { FadeIn } from "@/components/animations";
import { SocialLink } from "@/components/portfolio-helpers";
import Nav from "@/components/Nav";
import PageFooter from "@/components/PageFooter";
import GradientBg from "@/components/GradientBg";
import headshot from "@assets/varnika-photo2.jpg";

export default function Home() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, []);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-foreground overflow-hidden selection:bg-primary/20">
      <GradientBg />
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-multiply opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      <Nav />

      <main className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 max-w-6xl">
          <div className="max-w-2xl flex-1">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-primary" />
                <span className="text-primary font-medium tracking-wide uppercase text-sm">Portfolio</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-foreground mb-6">
                Varnika V. Dokka
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/80 leading-snug mb-10 max-w-3xl">
                <div><span className="text-primary">Aspiring</span> Product Manager &nbsp;&middot;&nbsp; AI Product Builder</div>
                <div className="mt-2">Informatics &amp; Electrical and Computer Engineering @ UW</div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
                Passionate about building technology that solves real user problems. Builds AI-powered products and collaborates on cross-functional software projects, with a focus on user research, product strategy, and product development.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-4">
                <a href="mailto:varnnikadokka@outlook.com" className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95">
                  <Mail className="w-4 h-4" />
                  Get in touch
                </a>
                <Link href="/projects">
                  <span className="flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-all cursor-pointer bg-white/60 backdrop-blur-sm">
                    View my projects →
                  </span>
                </Link>
                <div className="flex items-center gap-3">
                  <SocialLink href="https://linkedin.com/in/varnikadokka" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                  <SocialLink href="https://github.com/varnika-dokka" icon={<Github className="w-5 h-5" />} label="GitHub" />
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="hidden md:block shrink-0 mt-8 lg:mt-0">
              <div className="relative w-88 h-88 xl:w-96 xl:h-96" style={{ width: '22rem', height: '22rem' }}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-amber-300/20 to-violet-300/30 scale-105 blur-md" />
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-2 border-white/60">
                  <img src={headshot} alt="Varnika V. Dokka" className="w-full h-full object-cover object-center" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>

      {/* Guiding Values */}
      <section className="relative z-10 px-6 md:px-12 lg:px-24 pb-24 max-w-[1400px] mx-auto w-full">
        <FadeIn delay={0.5}>
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">Guiding Values</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-amber-200/70">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center mb-5">
                <span className="text-xl">🧭</span>
              </div>
              <h3 className="font-serif text-2xl mb-3 text-foreground">Start with People</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">The best solutions come from actually listening. Before I think about what to build, I want to understand who I'm building for — what they're struggling with, what they've already tried, and what would genuinely make their lives easier.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-violet-200/70">
              <div className="w-10 h-10 rounded-2xl bg-violet-100 flex items-center justify-center mb-5">
                <span className="text-xl">✦</span>
              </div>
              <h3 className="font-serif text-2xl mb-3 text-foreground">Clarity Over Complexity</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">Hard problems deserve simple answers. I'm drawn to the work of taking something messy and making it feel obvious — whether that's a dashboard showing housing data or a product that cuts scope by 40% to actually ship on time.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-200/70">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 flex items-center justify-center mb-5">
                <span className="text-xl">🌱</span>
              </div>
              <h3 className="font-serif text-2xl mb-3 text-foreground">Build What Matters</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">Shipping for the sake of it doesn't interest me. I care about whether what I'm building actually solves something — and I'll advocate for the features users asked for, push back on the ones they didn't, and keep asking "why does this matter?" until there's a real answer.</p>
            </div>
          </div>
        </FadeIn>
      </section>

      <PageFooter />
    </div>
  );
}
