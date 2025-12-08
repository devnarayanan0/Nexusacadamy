"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AiDoubtAssistant } from "@/components/ai-doubt-assistant"
import { Users, Award, BookOpen, Lightbulb } from "lucide-react"

export default function Students() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Students</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">Excellence, leadership, and growth</p>
          </div>
        </section>

        {/* Student Achievements */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Student Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: "100% Pass Rate",
                  description: "Consistent excellence in board examinations",
                },
                {
                  icon: BookOpen,
                  title: "Scholarship Winners",
                  description: "Multiple national scholarship recipients",
                },
                {
                  icon: Users,
                  title: "Leadership Program",
                  description: "Student-led initiatives and committees",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation Hub",
                  description: "Student innovation and research projects",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Activities */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Student Activities & Clubs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Science Club", members: "45 students", focus: "Research and experiments" },
                { name: "Debate Society", members: "32 students", focus: "Public speaking and argumentation" },
                { name: "Sports Committee", members: "60+ students", focus: "Athletic excellence" },
                { name: "Arts & Culture", members: "50 students", focus: "Creative expression" },
                { name: "Tech Club", members: "38 students", focus: "Programming and innovation" },
                { name: "Social Service", members: "55 students", focus: "Community engagement" },
              ].map((club, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-primary mb-2">{club.name}</h3>
                  <p className="text-accent font-semibold mb-2">{club.members}</p>
                  <p className="text-muted-foreground text-sm">{club.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Council */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Student Leadership Council</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { role: "Student President", name: "Alex Kumar", grade: "Grade 12" },
                { role: "Vice President", name: "Priya Sharma", grade: "Grade 12" },
                { role: "Sports Captain", name: "Arjun Singh", grade: "Grade 11" },
                { role: "Academic Head", name: "Neha Patel", grade: "Grade 12" },
              ].map((leader, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-border"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-bold text-primary mb-1">{leader.name}</h3>
                  <p className="text-sm font-semibold text-accent mb-2">{leader.role}</p>
                  <p className="text-xs text-muted-foreground">{leader.grade}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AiDoubtAssistant />
    </>
  )
}
