"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AiDoubtAssistant } from "@/components/ai-doubt-assistant"
import { BookOpen, Users, Lightbulb, Award } from "lucide-react"

export default function Academics() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Academics</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Excellence through innovative teaching and learning
            </p>
          </div>
        </section>

        {/* Curriculum Overview */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Curriculum Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We blend traditional academics with modern teaching methods. Focus is on understanding concepts, not memorizing them. Critical thinking and problem-solving are at the core.
                </p>
              </div>
              <div className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl">
                <Award className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Standards</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We follow international standards while maintaining Indian values. Our curriculum stays current with global best practices and emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Subjects by Grade */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Subjects Offered by Grade</h2>
            <div className="space-y-6">
              {[
                {
                  grade: "Kindergarten",
                  subjects: "Language, Mathematics, Science, Art, Music, Physical Education, General Knowledge",
                },
                {
                  grade: "Primary (1-5)",
                  subjects: "English, Hindi, Mathematics, Science, Social Studies, Art, Music, Computer, Sports",
                },
                {
                  grade: "Middle School (6-8)",
                  subjects:
                    "English, Hindi, Mathematics, Science, Social Studies, Computer Science, Geography, History, Art, Music, Physical Education",
                },
                {
                  grade: "High School (9-10)",
                  subjects:
                    "English, Hindi, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Sports, Optional Subjects",
                },
                {
                  grade: "Senior (11-12)",
                  subjects:
                    "Subject streams: Science (Physics, Chemistry, Mathematics/Biology), Commerce (Accounts, Economics, Business Studies), Humanities (History, Geography, Political Science)",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-xl border border-border hover:border-primary/30 transition-colors"
                >
                  <h3 className="font-bold text-lg text-primary mb-3">{item.grade}</h3>
                  <p className="text-muted-foreground">{item.subjects}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Methodology */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Teaching Methodology</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BookOpen, title: "Student-Centric", desc: "Focus on individual learning styles and pace" },
                { icon: Lightbulb, title: "Interactive Learning", desc: "Hands-on activities and group discussions" },
                { icon: Award, title: "Assessment", desc: "Continuous evaluation and constructive feedback" },
                { icon: Users, title: "Collaboration", desc: "Project-based learning and teamwork emphasis" },
              ].map((method, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <method.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="font-bold text-lg text-primary mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Our Faculty</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Ms. Sarah Chen", subject: "Mathematics", exp: "12 years" },
                { name: "Mr. Arjun Sharma", subject: "Physics", exp: "10 years" },
                { name: "Mrs. Priya Patel", subject: "English", exp: "15 years" },
                { name: "Dr. Michael Brown", subject: "Chemistry", exp: "18 years" },
                { name: "Miss Anjali Verma", subject: "Biology", exp: "8 years" },
                { name: "Mr. Rohan Singh", subject: "Computer Science", exp: "7 years" },
                { name: "Mrs. Diana Lewis", subject: "History", exp: "14 years" },
                { name: "Prof. James Wilson", subject: "Geography", exp: "20 years" },
              ].map((faculty, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={`/diverse-teacher-classroom.png?height=200&width=200&query=teacher%20${i}`}
                    alt={faculty.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-primary">{faculty.name}</h3>
                    <p className="text-sm text-accent font-semibold">{faculty.subject}</p>
                    <p className="text-xs text-muted-foreground">{faculty.exp} experience</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Calendar */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Academic Calendar</h2>
            <div className="space-y-4">
              {[
                { term: "Term I", start: "April 1, 2024", end: "June 30, 2024", exams: "June 15-25" },
                { term: "Summer Break", start: "July 1, 2024", end: "July 31, 2024", exams: "N/A" },
                { term: "Term II", start: "August 1, 2024", end: "October 31, 2024", exams: "October 20-30" },
                { term: "Diwali Break", start: "November 1, 2024", end: "November 10, 2024", exams: "N/A" },
                { term: "Term III", start: "November 15, 2024", end: "February 28, 2025", exams: "February 10-20" },
              ].map((calendar, i) => (
                <div
                  key={i}
                  className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Term</p>
                      <p className="font-bold text-primary">{calendar.term}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Start Date</p>
                      <p className="font-semibold text-foreground">{calendar.start}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">End Date</p>
                      <p className="font-semibold text-foreground">{calendar.end}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Exams</p>
                      <p className="font-semibold text-accent">{calendar.exams}</p>
                    </div>
                  </div>
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
