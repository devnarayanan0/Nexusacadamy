"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AiDoubtAssistant } from "@/components/ai-doubt-assistant"
import { Award, Heart, Lightbulb, Users } from "lucide-react"

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Elite Academy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover our journey, vision, and commitment to educational excellence
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a beacon of educational excellence, inspiring students to become thoughtful, innovative, and
                  compassionate global citizens who contribute positively to society.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                <Heart className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide a nurturing, inclusive learning environment that fosters academic excellence, character
                  development, and lifelong learning for every student.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Award, title: "Excellence", desc: "Pursuing the highest standards in all we do" },
                { icon: Users, title: "Integrity", desc: "Building trust through honesty and transparency" },
                { icon: Lightbulb, title: "Innovation", desc: "Embracing creativity and forward thinking" },
                { icon: Heart, title: "Compassion", desc: "Caring deeply for our community" },
              ].map((value, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
                  <value.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="font-bold text-lg text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* School History */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Our Journey</h2>
            <div className="space-y-8">
              {[
                {
                  year: "1995",
                  title: "Founded",
                  desc: "Elite Academy was established with a vision to revolutionize education in our region.",
                },
                {
                  year: "2003",
                  title: "Expansion",
                  desc: "Extended facilities with new classrooms, sports complex, and science laboratories.",
                },
                {
                  year: "2010",
                  title: "Digital Integration",
                  desc: "Launched smart classrooms and digital learning initiatives.",
                },
                {
                  year: "2018",
                  title: "International Recognition",
                  desc: "Received ISO certification and international academic accreditation.",
                },
                {
                  year: "2024",
                  title: "Future Ready",
                  desc: "Continued innovation with AI-assisted learning and modern infrastructure.",
                },
              ].map((milestone, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-32 text-right">
                    <p className="text-3xl font-bold text-primary">{milestone.year}</p>
                  </div>
                  <div className="flex-grow pb-8 border-l-2 border-primary/30 pl-8">
                    <h3 className="text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Our Leadership</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. James Wilson",
                  role: "Principal",
                  desc: "Educational leader with 28+ years of experience",
                },
                {
                  name: "Mrs. Emily Roberts",
                  role: "Vice Principal",
                  desc: "Academic coordinator and curriculum developer",
                },
                { name: "Mr. Rajesh Kumar", role: "Administrator", desc: "Operations and infrastructure management" },
              ].map((member, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={`/professional-portrait.png?height=250&width=300&query=professional%20portrait%20${i}`}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-primary">{member.name}</h3>
                    <p className="text-accent font-semibold text-sm mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-l-4 border-primary rounded-xl p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed italic mb-6">
                "Education is the most powerful tool we have to transform lives and communities. At Elite Academy, we
                are not just imparting knowledge; we are nurturing future leaders, innovators, and responsible citizens.
                Our commitment extends beyond the classroom—we believe in developing the whole person: intellectually,
                emotionally, socially, and physically. We invite you to join us in this noble mission."
              </p>
              <div>
                <p className="font-bold text-primary text-lg">Dr. James Wilson</p>
                <p className="text-accent">Principal, Elite Academy</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AiDoubtAssistant />
    </>
  )
}
