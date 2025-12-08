"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AiDoubtAssistant } from "@/components/ai-doubt-assistant"
import Link from "next/link"
import { ArrowRight, Calendar, Users, Zap, Trophy, BookOpen, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative h-96 md:h-screen bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="5" cy="5" r="1" fill="white" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#dots)" />
            </svg>
          </div>

          <div className="relative z-10 text-center text-primary-foreground px-4 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">Welcome to Nexus Academy</h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Shaping tomorrow's leaders through excellence and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 group"
              >
                Start Admission
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/academics"
                className="px-8 py-3 bg-white/20 text-primary-foreground rounded-lg hover:bg-white/30 font-semibold transition-all border border-primary-foreground/30"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: Users, label: "Students", value: "3,500+" },
                { icon: BookOpen, label: "Programs", value: "50+" },
                { icon: Trophy, label: "Awards", value: "150+" },
                { icon: Zap, label: "Years", value: "28+" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-shadow group"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Announcements */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Latest Announcements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  date: "Mar 15",
                  title: "Foundation Day Celebration",
                  desc: "Join us for our annual celebration and awards ceremony",
                },
                {
                  date: "Apr 05",
                  title: "Parent-Teacher Meeting",
                  desc: "Important meeting for parents and teachers to discuss student progress",
                },
                {
                  date: "Apr 20",
                  title: "Annual Sports Day",
                  desc: "Exciting sports events and competitions across all grades",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                    <Calendar className="w-5 h-5 text-primary/30 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Director's Message */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-l-4 border-primary rounded-xl p-8 md:p-12">
              <p className="text-accent font-semibold uppercase tracking-wide mb-2">Message from Director</p>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">Dr. James Wilson</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                "Education here goes beyond textbooks. We focus on building character, encouraging critical thinking, and inspiring students to make a real difference. Our dedicated teachers and modern facilities create the right environment for every student to discover their potential."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to developing well-rounded individuals ready to face tomorrow's challenges with confidence and creativity.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
              What Parents & Students Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah's Parent",
                  role: "Parent",
                  text: "The quality of education and care at Elite Academy is exceptional. Our daughter has grown tremendously!",
                },
                {
                  name: "Raj Kumar",
                  role: "Student",
                  text: "The teachers are amazing and the facilities are world-class. I love coming to school every day!",
                },
                {
                  name: "Mrs. Patel",
                  role: "Parent",
                  text: "Best decision ever. The holistic development approach has made our son confident and responsible.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-primary"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-accent">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{item.text}"</p>
                  <div>
                    <p className="font-semibold text-primary">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Upcoming Events</h2>
            <div className="space-y-4">
              {[
                {
                  date: "March 15",
                  time: "9:00 AM",
                  title: "Foundation Day Celebration",
                  desc: "Awards and cultural performances",
                },
                {
                  date: "April 05",
                  time: "2:00 PM",
                  title: "Parent-Teacher Meeting",
                  desc: "Academic progress discussion",
                },
                { date: "April 20", time: "8:00 AM", title: "Annual Sports Day", desc: "Inter-house competitions" },
                { date: "May 10", time: "10:00 AM", title: "Science Exhibition", desc: "Student projects showcase" },
              ].map((event, i) => (
                <div
                  key={i}
                  className="flex items-start gap-6 p-6 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border border-primary/10 hover:border-primary/30 transition-colors group"
                >
                  <div className="flex-shrink-0 w-24 h-24 bg-primary text-primary-foreground rounded-lg flex flex-col items-center justify-center group-hover:scale-110 transition-transform">
                    <p className="font-bold text-lg">{event.date.split(" ")[0]}</p>
                    <p className="text-xs opacity-80">{event.date.split(" ")[1]}</p>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg text-primary">{event.title}</h3>
                      <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">{event.time}</span>
                    </div>
                    <p className="text-muted-foreground">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
            <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Join Nexus Academy?</h2>
            <p className="text-lg opacity-90 mb-8">
              Join us for the new academic year. Admissions are now open.
            </p>
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 font-bold transition-all hover:scale-105 text-lg"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <AiDoubtAssistant />
    </>
  )
}
