import { FadeIn } from "@/components/animations";
import Nav from "@/components/Nav";
import PageFooter from "@/components/PageFooter";

export default function Background() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20">
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-multiply opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      <Nav />

      <main className="flex-1 pt-28 pb-24 max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-24">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">Education &amp; Leadership</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-16">Background</h1>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl mb-8 flex items-center gap-3">
              <span className="w-2 h-8 rounded-full bg-emerald-500 inline-block" />
              Education
            </h2>
            <div className="space-y-5">
              <div className="border border-border p-8 rounded-2xl bg-card hover:border-emerald-300 hover:shadow-md transition-all group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold">University of Washington, Seattle</h3>
                    <div className="mt-3 space-y-1">
                      <p className="text-primary font-medium">B.S. Electrical and Computer Engineering</p>
                      <p className="text-primary font-medium">B.S. Informatics</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full whitespace-nowrap">Exp. June 2028</span>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong className="text-foreground font-medium">GPA:</strong> 3.6 | Dean's List 2024-2026</p>
                  <p><strong className="text-foreground font-medium">UW Academy (Robinson Center):</strong> Early university admit after 10th grade.</p>
                  <p><strong className="text-foreground font-medium">Coursework:</strong> Product and Information Systems Management, Data Structures and Algorithms, Foundational Skills for Data Science, Client-Side Development, Programming for Signal Processing</p>
                </div>
              </div>

              <div className="border border-border p-8 rounded-2xl bg-card hover:border-emerald-300 hover:shadow-md transition-all group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Skyline High School</h3>
                    <p className="text-primary font-medium mt-2">9th - 10th Grade</p>
                  </div>
                  <span className="text-sm font-medium bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full whitespace-nowrap">2022 - 2024</span>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground font-medium">GPA:</strong> 3.95 | National Honor Society</p>
                  <p><strong className="text-foreground font-medium">Activities:</strong> DECA, JSA, NHS, Robotics, Chamber Orchestra</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Leadership */}
          <FadeIn delay={0.2}>
            <h2 className="font-serif text-3xl mb-8 flex items-center gap-3">
              <span className="w-2 h-8 rounded-full bg-primary inline-block" />
              Leadership
            </h2>
            <div className="space-y-5">
              {[
                {
                  role: "Co-Chair",
                  org: "Issaquah Youth Advisory Board",
                  date: "Sep 2019 - Jun 2026",
                  desc: "Served six years on the board - five as Teen Advocacy Co-Chair, then Board Co-Chair. Planned city-wide events including Mental Health Conferences, debates with the Mayor, and the Issy Kids Triathlon, collaborating with city officials and community organizations to create leadership opportunities for youth.",
                  color: "border-l-primary bg-primary/5",
                },
                {
                  role: "Youth Member",
                  org: "Issaquah Equity Board",
                  date: "Sep 2023 - Present",
                  desc: "Appointed as one of two Regular Youth Members representing youth perspectives. Advise the Mayor, City Council, and City departments on equity, accessibility, and community engagement - reviewing policies and providing recommendations that support Issaquah's diverse communities.",
                  color: "border-l-amber-500 bg-amber-50/60",
                },
                {
                  role: "Java & Statistics Tutor",
                  org: "GoPeer",
                  date: "Aug 2024 - Jun 2026",
                  desc: "Tutored students in Java and statistics through individualized lessons, adapting to different learning styles and skill levels. Broke down technical concepts into approachable explanations to help students build confidence in programming and quantitative reasoning.",
                  color: "border-l-violet-500 bg-violet-50/60",
                },
              ].map(({ role, org, date, desc, color }) => (
                <div key={role} className={`border-l-4 p-6 rounded-r-2xl rounded-bl-2xl ${color} hover:shadow-md transition-all`}>
                  <h4 className="font-semibold text-base mb-1">{role}</h4>
                  <p className="text-primary text-sm font-medium mb-1">{org}</p>
                  <p className="text-muted-foreground text-xs mb-3">{date}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Activities */}
        <FadeIn delay={0.3}>
          <div className="mt-16 border border-border rounded-2xl bg-gradient-to-br from-card to-muted/30 p-8">
            <h2 className="font-serif text-2xl mb-6 flex items-center gap-3">
              <span className="w-2 h-6 rounded-full bg-violet-500 inline-block" />
              Activities
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Informatics Peer Advisor",
                "UW Product Management Club",
                "Robinson Center Peer Mentor",
                "Campus Philharmonia Orchestra - Violin",
                "Society of Women Engineers - Director of Corporate Relations",
              ].map((activity) => (
                <span key={activity} className="px-4 py-2.5 bg-background rounded-xl text-sm font-medium border border-border/60 text-foreground/80 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                  {activity}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </main>

      <PageFooter />
    </div>
  );
}
