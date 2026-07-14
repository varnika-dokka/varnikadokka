import { useEffect } from "react";
import { FadeIn } from "@/components/animations";
import { OtherCard } from "@/components/portfolio-helpers";
import Nav from "@/components/Nav";
import PageFooter from "@/components/PageFooter";
import GradientBg from "@/components/GradientBg";

export default function About() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, []);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-foreground selection:bg-primary/20">
      <GradientBg />
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-multiply opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      <Nav />

      <main className="relative z-10 flex-1 pt-28 pb-24 max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-24">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4 pt-8">
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">Get to Know Me</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-16">About</h1>
        </FadeIn>

        {/* Why PM + Personal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <FadeIn delay={0.1}>
            <div className="p-10 rounded-3xl bg-white/60 backdrop-blur-sm border border-violet-200/70 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-6 bg-violet-500" />
                <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">My Why</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">Why Product Management</h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 text-base">
                <p>Before I had the title, I was already doing the work. Leading city advisory boards, running community events, advocating for equity - every role required translating messy, real-world problems into clear action across different people and perspectives. Product management just gave it a name.</p>
                <p>What draws me in is the moment ambiguity starts to resolve. Going from "there's a problem here" to 25 user interviews, a defined MVP, and 150 beta users - that arc is where I feel most alive. PM is where I get to combine what I care about most: understanding people, thinking in systems, and actually shipping something.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="p-10 rounded-3xl bg-white/60 backdrop-blur-sm border border-amber-200/70 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-6 bg-amber-500" />
                <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">Outside Work</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">A Little About Me</h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 text-base">
                <p>I play violin in UW's Campus Philharmonia and spent six years studying Carnatic vocals. I've also taught Bharatanatyam - a South Indian classical dance form - which has taught me more about patience and precision than almost anything else I've done.</p>
                <p>I love traveling (studying abroad in Singapore was a highlight), staying active, and mentoring students coming up through programs like Robinson Center. Equity and inclusion aren't just things I put on a resume - they're part of why I ended up on an advisory board at 14 and why I still show up for those spaces today.</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Toolkit */}
        <FadeIn delay={0.3}>
          <div className="mb-20">
            <h2 className="font-serif text-3xl mb-8 flex items-center gap-3">
              <span className="w-2 h-8 rounded-full bg-primary inline-block" />
              Toolkit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-border bg-white/70 backdrop-blur-sm">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Python", "C++", "JavaScript", "HTML/CSS", "React"].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-muted rounded-lg text-sm font-medium border border-border/50">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-white/70 backdrop-blur-sm">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Tools &amp; Design</h4>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "Jira", "Figma", "Miro", "Sketch", "Adobe XD", "VS Code"].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-muted rounded-lg text-sm font-medium border border-border/50">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-2xl border border-amber-200/60 bg-amber-50/60 backdrop-blur-sm">
                <h4 className="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-4">AI &amp; LLMs</h4>
                <div className="flex flex-wrap gap-2">
                  {["OpenAI API", "Claude API", "Google Gemini API", "AWS Bedrock", "Prompt Engineering", "LLM Evaluation"].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Off the Clock */}
        <FadeIn delay={0.4}>
          <h2 className="font-serif text-3xl mb-8 flex items-center gap-3">
            <span className="w-2 h-8 rounded-full bg-violet-400 inline-block" />
            Off the Clock
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </main>

      <PageFooter />
    </div>
  );
}
