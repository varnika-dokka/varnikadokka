import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { ListItem } from "@/components/portfolio-helpers";
import Nav from "@/components/Nav";
import PageFooter from "@/components/PageFooter";
import GradientBg from "@/components/GradientBg";
import cacheImg from "@assets/cache-screenshot.png";
import neuroLearnImg from "@assets/neurolearn-screenshot.png";
import researchImg from "@assets/research-dashboard-mockup_2025.jpg";
import learnMateImg from "@assets/learnmate-mockup_3.jpg";

export default function Projects() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, []);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-foreground selection:bg-primary/20">
      <GradientBg />
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-multiply opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      <Nav />

      <main className="flex-1 pt-28">
        <div className="px-6 md:px-12 lg:px-24 pb-16 max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4 pt-8">
              <span className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-wide uppercase text-sm">What I've Built</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">Projects</h1>
          </FadeIn>
        </div>

        {/* Cache */}
        <ProjectSection
          image={cacheImg}
          imageAlt="Cache app"
          imageFirst={false}
          bgClass="bg-white/60 backdrop-blur-sm border-y border-amber-200/60"
          badge={{ text: "Co-Founder & Product Manager", color: "bg-amber-100 text-amber-800" }}
          title="Cache"
          desc="An AI-powered web application that transforms screenshots into a searchable personal knowledge library using natural language search."
          bullets={[
            "Interviewed 25 UW students to validate idea",
            "Built and launched MVP in under 1 month with 150+ active beta users",
            "Implemented row-level security and defined event analytics for activation and retention",
            "Tech: Next.js, React, TypeScript, Tailwind CSS, Supabase",
          ]}
          link={{ href: "https://cache-screenshots.vercel.app", label: "View Live Site", color: "bg-amber-600 hover:bg-amber-700" }}
        />

        {/* NeuroLearn */}
        <ProjectSection
          image={neuroLearnImg}
          imageAlt="NeuroLearn platform"
          imageFirst={true}
          bgClass="bg-white/60 backdrop-blur-sm border-b border-violet-200/60"
          badge={{ text: "Product Lead", color: "bg-violet-100 text-violet-800" }}
          title="NeuroLearn"
          desc="A gamified web platform making neuroscience education accessible and engaging for students."
          bullets={[
            "Identified gap in accessible neuroscience education and defined the MVP",
            "Reduced feature scope by 40% to deliver within a 10-week timeline",
            "Led a 4-person cross-functional team across front-end, data integration, and GitHub workflows",
            "Resulted in a 30% increase in student engagement",
          ]}
          link={{ href: "https://neurolearn-draft2.web.app/", label: "View Live Site", color: "bg-violet-600 hover:bg-violet-700" }}
        />

        {/* Research Dashboard */}
        <ProjectSection
          image={researchImg}
          imageAlt="UW Housing & Climate Risk Dashboard"
          imageFirst={false}
          bgClass="bg-white/60 backdrop-blur-sm border-b border-purple-200/60"
          badge={{ text: "Research Assistant · UW Informatics", color: "bg-purple-100 text-purple-900" }}
          title="Housing & Climate Risk Dashboard"
          desc="A public-facing data dashboard analyzing housing affordability and climate risk across Washington State, designed for residents and policymakers."
          bullets={[
            "Defined product requirements and translated complex datasets into an accessible UI",
            "Visualized rent burden, climate risk indices, and housing deficits across all 39 WA counties",
            "Built for equity-focused audiences — residents, city planners, and state legislators",
            "Presented findings at the UW Research Symposium",
          ]}
        />

        {/* LearnMate */}
        <ProjectSection
          image={learnMateImg}
          imageAlt="LearnMate AI study assistant"
          imageFirst={true}
          bgClass="bg-white/60 backdrop-blur-sm border-b border-blue-200/60"
          badge={{ text: "Google Gemini Developer Hackathon · Nov 2025", color: "bg-blue-100 text-blue-800" }}
          title="LearnMate"
          desc="An AI-powered study assistant built with the Google Gemini API that helps students learn any subject through adaptive, conversational tutoring."
          bullets={[
            "Built during the Google Gemini Developer Hackathon (November 2025)",
            "Integrated Gemini API to generate personalized explanations, examples, and practice problems",
            "Designed subject-based chat interface with Math, History, Chemistry, and Literature modules",
            "Focused on making AI tutoring feel conversational and curriculum-aligned",
          ]}
        />
      </main>

      <PageFooter />
    </div>
  );
}

// ─── Shared layout component for each project ───────────────────────────────

interface ProjectSectionProps {
  image: string;
  imageAlt: string;
  imageFirst: boolean;
  bgClass: string;
  badge: { text: string; color: string };
  title: string;
  desc: string;
  bullets: string[];
  link?: { href: string; label: string; color: string };
}

function ProjectSection({ image, imageAlt, imageFirst, bgClass, badge, title, desc, bullets, link }: ProjectSectionProps) {
  return (
    <section className={`px-6 md:px-12 lg:px-24 py-20 ${bgClass}`}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Image col */}
        <div className={`lg:col-span-7 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
          <FadeIn delay={0.1}>
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-white/60">
              <img src={image} alt={imageAlt} className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" />
            </div>
          </FadeIn>
        </div>

        {/* Text col */}
        <div className={`lg:col-span-5 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
          <FadeIn delay={0.2}>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${badge.color} text-xs font-semibold mb-6 uppercase tracking-wider`}>
              {badge.text}
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">{title}</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{desc}</p>
            <ul className="space-y-4 mb-10 text-foreground/80">
              {bullets.map((b) => <ListItem key={b}>{b}</ListItem>)}
            </ul>
            {link && (
              <a href={link.href} target="_blank" rel="noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 ${link.color}`}>
                {link.label} <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
