import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import cacheImg from "@assets/cache-screenshot.png";
import neuroLearnImg from "@assets/neurolearn-screenshot.png";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/20 bg-background text-foreground overflow-hidden">
      {/* Abstract background texture */}
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
              Product Manager <span className="text-primary/50 mx-2">&middot;</span> AI Product Builder <span className="text-primary/50 mx-2">&middot;</span> Informatics &amp; Electrical and Computer Engineering @ UW
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

      {/* Featured Work */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-card max-w-[1400px] mx-auto rounded-t-[3rem]">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-16 border-b border-border pb-6">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Featured Work</h2>
            <span className="text-muted-foreground text-sm uppercase tracking-widest hidden md:inline-block">Selected Projects</span>
          </div>
        </FadeIn>

        {/* Cache */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 uppercase tracking-wider">
                Co-Founder &amp; Product Manager
              </div>
              <h3 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Cache</h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                An AI-powered web application that transforms screenshots into a searchable personal knowledge library using natural language search.
              </p>

              <ul className="space-y-4 mb-10 text-foreground/80">
                <ListItem>Interviewed 25 UW students to validate idea</ListItem>
                <ListItem>Built and launched MVP in under 1 month with 150+ active beta users</ListItem>
                <ListItem>Implemented row-level security and defined event analytics for activation and retention</ListItem>
                <ListItem>Tech: Next.js, React, TypeScript, Tailwind CSS, Supabase</ListItem>
              </ul>

              <div className="flex flex-wrap gap-4">
                <a href="https://cache-screenshots.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5">
                  View Live Site <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <FadeIn delay={0.2}>
              <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <img
                  src={cacheImg}
                  alt="Cache app - stop scrolling, start searching"
                  className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* NeuroLearn */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <img
                  src={neuroLearnImg}
                  alt="NeuroLearn - gamified neuroscience education platform"
                  className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 text-xs font-semibold mb-6 uppercase tracking-wider dark:text-violet-400">
                Product Lead
              </div>
              <h3 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">NeuroLearn</h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                A gamified web platform making neuroscience education accessible and engaging for students.
              </p>

              <ul className="space-y-4 mb-10 text-foreground/80">
                <ListItem>Identified gap in accessible neuroscience education and defined the MVP</ListItem>
                <ListItem>Reduced feature scope by 40% to deliver within a 10-week timeline</ListItem>
                <ListItem>Led a 4-person cross-functional team across front-end, data integration, and GitHub workflows</ListItem>
                <ListItem>Resulted in a 30% increase in student engagement</ListItem>
              </ul>

              <div className="flex flex-wrap gap-4">
                <a href="https://neurolearn-draft2.web.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 text-white font-medium transition-all hover:bg-violet-700 hover:shadow-lg hover:-translate-y-0.5">
                  View Live Site <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 md:px-12 lg:px-24 py-24 max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-16 border-b border-border pb-6">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Experience</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {/* LEFT: Professional roles */}
          <StaggerContainer className="space-y-12">
            <StaggerItem>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-primary"></span> Professional
              </h3>
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
              <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-primary"></span> Product &amp; Research
              </h3>
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
      </section>

      {/* Background: Education + Leadership */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-card border-y border-border">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="flex items-baseline justify-between mb-16 border-b border-border pb-6">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">Background</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <FadeIn delay={0.1}>
              <h3 className="font-serif text-3xl mb-8">Education</h3>
              <div className="group border border-border p-8 rounded-2xl bg-background hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                  <div>
                    <h4 className="text-xl font-semibold">University of Washington, Seattle</h4>
                    <div className="mt-3 space-y-1">
                      <p className="text-primary font-medium">B.S. Electrical and Computer Engineering</p>
                      <p className="text-primary font-medium">B.S. Informatics</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium bg-muted px-3 py-1 rounded-full whitespace-nowrap">Exp. June 2028</span>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong className="text-foreground font-medium">GPA:</strong> 3.6 | Dean's List 2024-2026</p>
                  <p><strong className="text-foreground font-medium">UW Academy (Robinson Center):</strong> Early university admit after 10th grade.</p>
                  <p><strong className="text-foreground font-medium">Coursework:</strong> Product and Information Systems Management, Data Structures and Algorithms, Foundational Skills for Data Science, Client-Side Development, Programming for Signal Processing</p>
                </div>
              </div>

              <div className="group border border-border p-8 rounded-2xl bg-background hover:border-primary/30 transition-colors mt-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <h4 className="text-xl font-semibold">Skyline High School</h4>
                    <p className="text-primary font-medium mt-2">9th - 10th Grade</p>
                  </div>
                  <span className="text-sm font-medium bg-muted px-3 py-1 rounded-full whitespace-nowrap">2022 - 2024</span>
                </div>
              </div>
            </FadeIn>

            {/* Leadership */}
            <FadeIn delay={0.2}>
              <h3 className="font-serif text-3xl mb-8">Leadership</h3>
              <div className="space-y-5">
                <div className="border border-border p-6 rounded-2xl bg-background hover:border-primary/20 transition-colors">
                  <h4 className="font-semibold text-base mb-1">Co-Chair</h4>
                  <p className="text-primary text-sm font-medium mb-3">Issaquah Youth Advisory Board - Sep 2019 to Jun 2026</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">Served six years on the board - five as Teen Advocacy Co-Chair, then Board Co-Chair. Planned city-wide events including Mental Health Conferences, debates with the Mayor, and the Issy Kids Triathlon, collaborating with city officials and community organizations to create leadership opportunities for youth.</p>
                </div>

                <div className="border border-border p-6 rounded-2xl bg-background hover:border-primary/20 transition-colors">
                  <h4 className="font-semibold text-base mb-1">Youth Member</h4>
                  <p className="text-primary text-sm font-medium mb-3">Issaquah Equity Board - Sep 2023 to Present</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">Appointed as one of two Regular Youth Members representing youth perspectives. Advise the Mayor, City Council, and City departments on equity, accessibility, and community engagement - reviewing policies and providing recommendations that support Issaquah's diverse communities.</p>
                </div>

                <div className="border border-border p-6 rounded-2xl bg-background hover:border-primary/20 transition-colors">
                  <h4 className="font-semibold text-base mb-1">Java &amp; Statistics Tutor</h4>
                  <p className="text-primary text-sm font-medium mb-3">GoPeer - Aug 2024 to Jun 2026</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">Tutored students in Java and statistics through individualized lessons, adapting to different learning styles and skill levels. Broke down technical concepts into approachable explanations to help students build confidence in programming and quantitative reasoning.</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Activities - bigger standalone block */}
          <FadeIn delay={0.3}>
            <div className="mt-16 border border-border rounded-2xl bg-background p-8">
              <h3 className="font-serif text-2xl mb-6">Activities</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Informatics Peer Advisor",
                  "UW Product Management Club",
                  "Robinson Center Peer Mentor",
                  "Campus Philharmonia Orchestra - Violin",
                  "Society of Women Engineers - Director of Corporate Relations",
                ].map((activity) => (
                  <span key={activity} className="px-4 py-2.5 bg-muted rounded-xl text-sm font-medium border border-border/60 text-foreground/80">
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why PM + Outside of Work */}
      <section className="px-6 md:px-12 lg:px-24 py-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn delay={0.1}>
            <div className="p-10 rounded-3xl bg-primary/5 border border-primary/15 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-6 bg-primary"></span>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">My Why</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">Why Product Management</h3>
              <div className="text-muted-foreground leading-relaxed space-y-4 text-base">
                <p>Before I had the title, I was already doing the work. Leading city advisory boards, running community events, advocating for equity - every role required translating messy, real-world problems into clear action across different people and perspectives. Product management just gave it a name.</p>
                <p>What draws me in is the moment ambiguity starts to resolve. Going from "there's a problem here" to 25 user interviews, a defined MVP, and 150 beta users - that arc is where I feel most alive. PM is where I get to combine what I care about most: understanding people, thinking in systems, and actually shipping something.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="p-10 rounded-3xl bg-muted/50 border border-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-6 bg-foreground/30"></span>
                <span className="text-foreground/50 font-semibold text-sm uppercase tracking-wider">Outside Work</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">A Little About Me</h3>
              <div className="text-muted-foreground leading-relaxed space-y-4 text-base">
                <p>I play violin in UW's Campus Philharmonia and spent six years studying Carnatic vocals. I've also taught Bharatanatyam - a South Indian classical dance form - which has taught me more about patience and precision than almost anything else I've done.</p>
                <p>I love traveling (studying abroad in Singapore was a highlight), staying active, and mentoring students coming up through programs like Robinson Center. Equity and inclusion aren't just things I put on a resume - they're part of why I ended up on an advisory board at 14 and why I still show up for those spaces today.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Skills & Off the Clock */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-card border-t border-border max-w-[1400px] mx-auto">
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
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Tools &amp; Design</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "Jira", "Figma", "Miro", "Sketch", "Adobe XD", "VS Code"].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-muted rounded-lg text-sm font-medium border border-border/50">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">AI &amp; LLMs</h4>
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
              <h2 className="font-serif text-4xl mb-8">Off the Clock</h2>
              <div className="space-y-6">
                <OtherCard
                  title="Study Abroad - Singapore"
                  subtitle="Essentials of AI, Robotics &amp; Automation (Aug - Sep 2025)"
                  desc="Selected for UW's Early Fall program in Singapore. Built a live animal-crossing detection system using Arduino, sensors, and C++ as part of a collaborative engineering project. Explored the city and worked alongside students from Ngee Ann Polytechnic and NUS."
                />
                <OtherCard
                  title="Classical Indian Vocal Training"
                  subtitle="SAMPADA Carnatic Singing - Senior Certificate (May 2019 - Aug 2025)"
                  desc="Completed six years of classical Indian vocal training and earned a Senior Certificate through written and practical exams. Proctored annual SAMPADA certification exams hosted at the University of Washington for three years."
                />
                <OtherCard
                  title="Bharatanatyam Dance Teacher"
                  subtitle="From Within Academy (Sep 2023 - Jan 2025)"
                  desc="After completing a four-hour Arangetram graduation performance, taught Bharatanatyam to students in Sammamish and virtually in India. Covered hand gestures, footwork, facial expressions, and choreography while adapting to students of different ages and skill levels."
                />
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
      <h4 className="text-xl font-semibold text-foreground mb-1" dangerouslySetInnerHTML={{ __html: role }} />
      <p className="text-primary font-medium mb-4" dangerouslySetInnerHTML={{ __html: company }} />
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{description}</p>
    </div>
  );
}

function OtherCard({ title, subtitle, desc }: { title: string; subtitle: string; desc: string }) {
  return (
    <div className="p-6 border border-border rounded-2xl bg-background hover:shadow-lg transition-shadow">
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-primary text-sm font-medium mt-1 mb-3" dangerouslySetInnerHTML={{ __html: subtitle }} />
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
