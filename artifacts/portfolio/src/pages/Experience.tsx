import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { ExperienceCard } from "@/components/portfolio-helpers";
import Nav from "@/components/Nav";
import PageFooter from "@/components/PageFooter";

export default function Experience() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20">
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-multiply opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      <Nav />

      <main className="flex-1 pt-28 px-6 md:px-12 lg:px-24 pb-24 max-w-[1400px] mx-auto w-full">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">Where I've Been</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-16">Experience</h1>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {/* LEFT: Professional */}
          <StaggerContainer className="space-y-12">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                Professional
              </div>
              <div className="space-y-12">
                <ExperienceCard
                  role="Software Engineer Intern"
                  company="C2S Technologies"
                  date="Jun 2026 - Present"
                  description="Building an AI application using LLM workflows to transform product ideas into user stories, acceptance criteria, feature roadmaps, and Jira tasks. Developing AI workflows with OpenAI-compatible APIs. Biweekly product demos to industry professionals."
                />
                <ExperienceCard
                  role="Informatics Peer Advisor"
                  company="UW Information School"
                  date="Jun 2026 - Present"
                  description="Advises prospective and current Informatics students on academic planning, campus resources, and career exploration through one-on-one advising. Represents the Information School at admissions events, orientations, and student panels."
                />
                <ExperienceCard
                  role="Director of Corporate Relations"
                  company="Society of Women Engineers, UW"
                  date="Mar 2026 - Present"
                  description="Leads recruiter outreach and corporate engagement as Co-Director of a 5-member Corporate Events committee, organizing networking events, workshops, and recruiting opportunities. Coordinates with Microsoft, Boeing, Accenture, and Texas Instruments."
                />
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* RIGHT: Product & Research */}
          <StaggerContainer className="space-y-12">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-800 text-xs font-semibold uppercase tracking-wider mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 inline-block" />
                Product &amp; Research
              </div>
              <div className="space-y-12">
                <ExperienceCard
                  role="Co-Founder &amp; Product Manager"
                  company="Cache (AI-Powered Screenshot Organizer)"
                  date="May 2026 - Present"
                  description="Validated with 25 user interviews, led MVP definition and competitive analysis against Google Photos, Apple Photos, MyMind, and Notion. Shipped in under one month with 150+ beta users, iterated based on feedback, and defined event analytics for activation and retention."
                />
                <ExperienceCard
                  role="Research Assistant"
                  company="UW Informatics"
                  date="Sep 2025 - Mar 2026"
                  description="Defined product requirements for a public dashboard analyzing housing and climate risk data across Washington, translating complex datasets into an accessible UI for residents and policymakers. Presented findings at the UW Research Symposium."
                />
                <ExperienceCard
                  role="Product Lead"
                  company="NeuroLearn"
                  date="Sep 2024 - Dec 2024"
                  description="Led product vision and execution for a gamified neuroscience education platform. Scoped the MVP, cut scope by 40% to hit a 10-week deadline, and coordinated a 4-person cross-functional team across front-end, data integration, and GitHub workflows."
                />
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}
