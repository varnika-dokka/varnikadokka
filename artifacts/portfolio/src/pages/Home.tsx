import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/20 bg-background text-foreground overflow-hidden">
      {/* Abstract background noise/texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-multiply" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-12 max-w-[1400px] mx-auto">
        <div className="max-w-4xl">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary font-medium tracking-wide uppercase text-sm">Portfolio</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-foreground mb-6">
              Varnika V. Dokka
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/80 leading-snug mb-10 max-w-3xl">
              Product Manager <span className="text-primary/50 mx-2">&middot;</span> AI Product Builder <span className="text-primary/50 mx-2">&middot;</span> Informatics & ECE @ UW
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
              Passionate about building technology that solves real user problems. Builds AI-powered products and collaborates on cross-functional software projects, with a focus on user research, product strategy, and product development.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center gap-6">
              <a href="mailto:varnnikadokka@outlook.com" className="group flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95">
                <Mail className="w-4 h-4" />
                <span>Get in touch</span>
              </a>
              <div className="flex items-center gap-4">
                <SocialLink href="https://linkedin.com/in/varnikadokka" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                <SocialLink href="https://github.com/varnika-dokka" icon={<Github className="w-5 h-5" />} label="GitHub" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Project */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-card max-w-[1400px] mx-auto rounded-t-[3rem]">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-12 border-b border-border pb-6">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Featured Work</h2>
            <span className="text-muted-foreground text-sm uppercase tracking-widest hidden md:inline-block">Selected Project</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 uppercase tracking-wider">
                Co-Founder & Product Manager
              </div>
              <h3 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Cache</h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                An AI-powered web application that helps users organize and search their screenshots using natural language search.
              </p>
              
              <ul className="space-y-4 mb-10 text-foreground/80">
                <ListItem>Interviewed 25 UW students to validate idea</ListItem>
                <ListItem>Built and launched MVP in &lt;1 month with 150+ active beta users</ListItem>
                <ListItem>Implemented row-level security & defined event analytics</ListItem>
                <ListItem>Tech: Next.js, React, TypeScript, Tailwind, Supabase</ListItem>
              </ul>

              <div className="flex flex-wrap gap-4">
                <a href="https://cache-screenshots.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5">
                  View Live Site <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <FadeIn delay={0.2} className="relative group rounded-2xl overflow-hidden shadow-2xl bg-muted aspect-[4/3] flex items-center justify-center border border-border/50">
               {/* Visual abstraction for Cache project */}
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10"></div>
               <div className="relative w-3/4 h-3/4 bg-card rounded-xl shadow-xl overflow-hidden flex flex-col border border-border">
                  <div className="h-10 border-b border-border bg-muted/50 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col gap-4">
                    <div className="h-10 w-full bg-muted rounded-md flex items-center px-4 border border-border">
                      <span className="text-muted-foreground/50 text-sm">Search screenshots like "receipt from last week"</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-muted rounded-md w-full h-full opacity-50"></div>
                      ))}
                    </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="px-6 md:px-12 lg:px-24 py-24 max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-16 border-b border-border pb-6">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Experience</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <StaggerContainer className="space-y-12">
            <StaggerItem>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-primary"></span> Product Leadership
              </h3>
              <div className="space-y-12">
                <ExperienceCard 
                  role="Co-Founder & PM"
                  company="Cache (AI-Powered Screenshot Organizer)"
                  date="May 2026 – Present"
                  description="Validated with 25 user interviews, led MVP definition, competitive analysis against major products, shipped in under a month with 150+ beta users, iterated based on feedback, defined analytics."
                />
                <ExperienceCard 
                  role="Product Lead"
                  company="NeuroLearn Web Platform"
                  date="Jan – Mar 2026"
                  description="Identified gap in neuroscience education, led 4-person cross-functional team, reduced feature scope 40% to ship within 10-week timeline, increased student engagement by 30%."
                />
                <ExperienceCard 
                  role="Research Assistant"
                  company="UW Informatics"
                  date="Sep 2025 – Mar 2026"
                  description="Defined product requirements for a public housing & climate risk dashboard, translated complex datasets into accessible UI, presented at UW Research Symposium."
                />
              </div>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="space-y-12">
            <StaggerItem>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-primary"></span> Professional
              </h3>
              <div className="space-y-12">
                <ExperienceCard 
                  role="Software Engineer Intern"
                  company="C2S Technologies"
                  date="Jun 2026 – Present"
                  description="Building an AI application using LLM workflows to transform product ideas into user stories, acceptance criteria, feature roadmaps, and Jira tasks. Developing AI workflows with OpenAI-compatible APIs."
                />
                <ExperienceCard 
                  role="Informatics Peer Advisor"
                  company="UW Information School"
                  date="Jun 2026 – Present"
                  description="Advises students on academic planning and career exploration, represents the school at admissions events."
                />
                <ExperienceCard 
                  role="Director of Corporate Relations"
                  company="Society of Women Engineers, UW"
                  date="Mar 2026 – Present"
                  description="Leads recruiter outreach and corporate engagement for a 5-member committee, coordinates with Microsoft, Boeing, Accenture, Texas Instruments."
                />
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Education & Leadership Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-card border-y border-border">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="flex items-baseline justify-between mb-16 border-b border-border pb-6">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">Background</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn delay={0.1}>
              <h3 className="font-serif text-3xl mb-8">Education</h3>
              <div className="group border border-border p-8 rounded-2xl bg-background hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">University of Washington, Seattle</h4>
                    <p className="text-primary font-medium mt-1">B.S. Informatics & B.S. Electrical & Computer Engineering</p>
                  </div>
                  <span className="text-sm font-medium bg-muted px-3 py-1 rounded-full whitespace-nowrap">Exp. June 2028</span>
                </div>
                <div className="space-y-3 mt-6 text-muted-foreground">
                  <p><strong className="text-foreground font-medium">GPA:</strong> 3.6 | Dean's List 2024–2026</p>
                  <p><strong className="text-foreground font-medium">UW Academy (Robinson Center):</strong> Early university admit after 10th grade.</p>
                  <p><strong className="text-foreground font-medium">Coursework:</strong> Product and Information Systems Management, Data Structures and Algorithms, Foundational Skills for Data Science, Client-Side Development, Programming for Signal Processing</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3 className="font-serif text-3xl mb-8">Leadership & Recognition</h3>
              <div className="space-y-6">
                <div className="border border-border p-6 rounded-2xl bg-background">
                  <h4 className="font-semibold text-lg mb-1">Co-Chair & Youth Representative</h4>
                  <p className="text-primary text-sm mb-3">Issaquah Youth Advisory Board + Equity Board (Sep 2019–Present)</p>
                  <p className="text-muted-foreground text-sm">Advises Mayor and City Council on youth and equity initiatives. Founded the NeuroArt Contest in support of Seattle Children's Guild. Presented on mental health, equity, and youth leadership at citywide conferences.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-border p-5 rounded-2xl bg-background">
                    <h5 className="font-semibold text-sm mb-2 text-foreground">Honors & Awards</h5>
                    <ul className="text-xs text-muted-foreground space-y-2">
                      <li>• Dean's List (2024–2026)</li>
                      <li>• DECA State Qualifier (Financial Ops Research & Pro Selling)</li>
                      <li>• Debate: 2nd Place Seattle U (Public Forum)</li>
                    </ul>
                  </div>
                  <div className="border border-border p-5 rounded-2xl bg-background">
                    <h5 className="font-semibold text-sm mb-2 text-foreground">Activities</h5>
                    <ul className="text-xs text-muted-foreground space-y-2">
                      <li>• Incoming INFO 200 TA</li>
                      <li>• UW Product Management Club</li>
                      <li>• Robinson Center Peer Mentor</li>
                      <li>• Campus Philharmonia Orchestra (Violin)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills & Other */}
      <section className="px-6 md:px-12 lg:px-24 py-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <FadeIn>
              <h2 className="font-serif text-4xl mb-8">Toolkit</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Python", "C++", "JavaScript", "HTML/CSS", "React"].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-muted rounded-lg text-sm font-medium border border-border/50">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Tools & Design</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "Jira", "Figma", "Miro", "Sketch", "Adobe XD", "VS Code"].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-muted rounded-lg text-sm font-medium border border-border/50">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">AI & LLMs</h4>
                  <div className="flex flex-wrap gap-2">
                    {["OpenAI API", "Claude API", "Google Gemini API", "AWS Bedrock", "Prompt Engineering", "LLM Evaluation"].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <h2 className="font-serif text-4xl mb-8">Beyond the Screen</h2>
              <div className="space-y-6">
                <OtherCard 
                  title="Study Abroad — Singapore"
                  subtitle="Essentials of AI, Robotics & Automation (Aug–Sep 2025)"
                  desc="Built live animal crossing detection system with Arduino, C++, and sensors; collaborated with NUS and Ngee Ann Polytechnic students."
                />
                <OtherCard 
                  title="Classical Indian Vocal Training"
                  subtitle="SAMPADA Carnatic Singing — Senior Certificate (May 2019–Aug 2025)"
                  desc="6+ years of classical Indian vocal training. Proctored SAMPADA exams at UW for 3 years."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 border border-border rounded-xl">
                    <h5 className="font-medium text-sm">Java & Statistics Tutor</h5>
                    <p className="text-xs text-muted-foreground mt-1">GoPeer (Aug 2024–Jun 2026)</p>
                  </div>
                  <div className="p-4 border border-border rounded-xl">
                    <h5 className="font-medium text-sm">Bharatanatyam Dance Teacher</h5>
                    <p className="text-xs text-muted-foreground mt-1">From Within Academy</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-foreground text-background py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 max-w-4xl text-background/90 leading-tight">
              Let's build something extraordinary.
            </h2>
          </FadeIn>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-24 border-t border-background/20 pt-12">
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
            <div className="mt-24 text-background/40 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
              <p>&copy; {new Date().getFullYear()} Varnika V. Dokka. All rights reserved.</p>
              <p>Based in Sammamish, WA</p>
            </div>
          </FadeIn>
        </div>
      </footer>
    </main>
  );
}

// Helper Components

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
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

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
      <span>{children}</span>
    </li>
  );
}

function ExperienceCard({ role, company, date, description }: { role: string; company: string; date: string; description: string }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-x-4 -inset-y-4 bg-muted/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
      <p className="text-sm font-medium text-muted-foreground mb-2">{date}</p>
      <h4 className="text-xl font-semibold text-foreground mb-1">{role}</h4>
      <p className="text-primary font-medium mb-4">{company}</p>
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}

function OtherCard({ title, subtitle, desc }: { title: string; subtitle: string; desc: string }) {
  return (
    <div className="p-6 border border-border rounded-2xl bg-card hover:shadow-lg transition-shadow">
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-primary text-sm font-medium mt-1 mb-3">{subtitle}</p>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
