"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AiDoubtAssistant } from "@/components/ai-doubt-assistant"
import { Calendar, Award, Users } from "lucide-react"

export default function News() {
  const news = [
    {
      id: 1,
      type: "achievement",
      icon: Award,
      title: "National Science Olympiad Winners",
      date: "March 10, 2024",
      desc: "Our students secured top 3 positions in the National Science Olympiad competition!",
    },
    {
      id: 2,
      type: "event",
      icon: Users,
      title: "Annual Sports Day",
      date: "March 15, 2024",
      desc: "Celebrating excellence in sports with inter-house competitions and medal ceremonies.",
    },
    {
      id: 3,
      type: "achievement",
      icon: Award,
      title: "CBSE Board Results",
      date: "March 20, 2024",
      desc: "95% students scored above 90%. Congratulations to all toppers!",
    },
    {
      id: 4,
      type: "event",
      icon: Users,
      title: "Parent-Teacher Conference",
      date: "April 05, 2024",
      desc: "Important meeting to discuss student progress and academic performance.",
    },
  ]

  const achievements = [
    { category: "Academics", count: 50, desc: "Students in Merit List" },
    { category: "Sports", count: 25, desc: "Gold Medals at State Level" },
    { category: "Competitions", count: 40, desc: "National Competition Winners" },
    { category: "Awards", count: 100, desc: "Total Awards This Year" },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">News & Events</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">Latest updates from our vibrant school community</p>
          </div>
        </section>

        {/* News Timeline */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Latest News</h2>
            <div className="space-y-6">
              {news.map((item) => (
                <div key={item.id} className="flex gap-6 pb-6 border-b border-border last:border-0">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                      <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full whitespace-nowrap ml-4">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </p>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Highlights */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Achievements This Year</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((achievement, i) => (
                <div
                  key={i}
                  className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="text-5xl font-bold text-primary mb-2">{achievement.count}+</p>
                  <p className="font-bold text-foreground mb-1">{achievement.category}</p>
                  <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notices */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Important Notices</h2>
            <div className="space-y-4">
              {[
                { date: "April 1", title: "Summer Vacation Begins", priority: "high" },
                { date: "April 5", title: "Parent-Teacher Conference", priority: "high" },
                { date: "April 10", title: "Summer Assignment Distribution", priority: "medium" },
                { date: "July 15", title: "New Academic Year Registration", priority: "high" },
              ].map((notice, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-lg border-l-4 flex items-start justify-between ${
                    notice.priority === "high" ? "bg-red-50 border-red-500" : "bg-yellow-50 border-yellow-500"
                  }`}
                >
                  <div>
                    <p className={`font-semibold ${notice.priority === "high" ? "text-red-700" : "text-yellow-700"}`}>
                      {notice.title}
                    </p>
                    <p className="text-sm text-muted-foreground">{notice.date}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      notice.priority === "high" ? "bg-red-200 text-red-700" : "bg-yellow-200 text-yellow-700"
                    }`}
                  >
                    {notice.priority.charAt(0).toUpperCase() + notice.priority.slice(1)}
                  </span>
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
