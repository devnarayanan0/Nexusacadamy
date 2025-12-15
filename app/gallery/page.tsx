"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AiDoubtAssistant } from "@/components/ai-doubt-assistant"
import { X } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    { id: 1, title: "School Building", category: "Architecture", image: "/modern-school-exterior.png" },
    { id: 2, title: "Classroom Setup", category: "Academics", image: "/modern-classroom-interior.jpg" },
    { id: 3, title: "Sports Day", category: "Events", image: "/school-sports-day-competition.jpg" },
    { id: 4, title: "Science Fair", category: "Events", image: "/science-fair-exhibition.jpg" },
    { id: 5, title: "Library", category: "Facilities", image: "/school-library-interior.jpg" },
    { id: 6, title: "Playground", category: "Facilities", image: "/school-playground-sports.jpg" },
    { id: 7, title: "Annual Function", category: "Events", image: "/school-function-stage-performance.jpg" },
    { id: 8, title: "Computer Lab", category: "Facilities", image: "/computer-lab-classroom.jpg" },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">Moments from our vibrant school community</p>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Photo Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {images.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedImage(photo.image)}
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                >
                  <img
                    src={photo.image || "/placeholder.svg"}
                    alt={photo.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                    <p className="font-bold">{photo.title}</p>
                    <p className="text-sm opacity-80">{photo.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="relative max-w-2xl w-full">
              <img src={selectedImage || "/placeholder.svg"} alt="Gallery" className="w-full rounded-lg" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}


      </main>
      <Footer />
      <AiDoubtAssistant />
    </>
  )
}
