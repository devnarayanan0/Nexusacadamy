"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AiDoubtAssistant } from "@/components/ai-doubt-assistant"
import { Laptop, Beaker, Users, Trophy, BookOpen, Bus } from "lucide-react"

export default function Facilities() {
  const facilities = [
    {
      icon: Laptop,
      title: "Smart Classrooms",
      desc: "Interactive whiteboards, projectors, and digital learning tools",
      image: "/modern-classroom-with-smart-board.jpg",
    },
    {
      icon: Beaker,
      title: "Science & Computer Labs",
      desc: "Modern labs with latest equipment and computers",
      image: "/science-laboratory-with-equipment.jpg",
    },
    {
      icon: BookOpen,
      title: "Library",
      desc: "Thousands of books, digital resources, and quiet reading spaces",
      image: "/school-library-with-books.jpg",
    },
    {
      icon: Trophy,
      title: "Sports Complex",
      desc: "Swimming pool, basketball court, cricket field, and gym",
      image: "/sports-complex-and-facilities.jpg",
    },
    {
      icon: Bus,
      title: "Transportation",
      desc: "Safe transport covering all major city areas",
      image: "/school-bus-yellow.jpg",
    },
    {
      icon: Users,
      title: "Cafeteria",
      desc: "Nutritious meals prepared fresh daily",
      image: "/school-cafeteria-dining-area.jpg",
    },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Facilities</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              World-class infrastructure for holistic development
            </p>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-6">
              {facilities.map((facility, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group border border-border"
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                    <facility.icon className="absolute bottom-4 right-4 w-10 h-10 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{facility.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{facility.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Additional Amenities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Medical Room & First Aid",
                "Art & Music Studios",
                "Auditorium with Seating 500+",
                "Conference Rooms",
                "Security & CCTV Coverage",
                "Green Campus & Gardens",
                "Playground for Multiple Sports",
                "24/7 Drinking Water System",
                "Well-Maintained Washrooms",
              ].map((amenity, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-lg border border-border flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="font-semibold text-foreground">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Stats */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">By The Numbers</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { number: "50+", label: "Classrooms" },
                { number: "15", label: "Labs & Studios" },
                { number: "5000+", label: "Books in Library" },
                { number: "20+", label: "Sports Activities" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-muted-foreground font-semibold">{stat.label}</p>
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
