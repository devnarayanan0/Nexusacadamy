"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AiDoubtAssistant } from "@/components/ai-doubt-assistant"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We'd love to hear from you. Get in touch with us anytime!
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Address</h3>
                <p className="text-muted-foreground">
                  123 Education Street
                  <br />
                  Knowledge City, KC 12345
                  <br />
                  India
                </p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
                <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  Main: +1 (555) 123-4567
                  <br />
                  Admin: +1 (555) 123-4568
                  <br />
                  Admission: +1 (555) 123-4569
                </p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                <p className="text-muted-foreground">
                  General: info@eliteacademy.edu
                  <br />
                  Admissions: admissions@eliteacademy.edu
                  <br />
                  Support: support@eliteacademy.edu
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="mb-12 rounded-xl overflow-hidden shadow-lg h-96 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354075093074!2d144.9537353!3d-37.8162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzcuODE2MiDCsCAzNyc1OC41ODYiIFMgMTQ0wrA1NycyIgRQ!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl border border-border shadow-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us more..."
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-bold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is the admission process?",
                  a: "The admission process involves application submission, entrance examination, merit evaluation, personal interview, and final selection. Visit our Admissions page for details.",
                },
                {
                  q: "When do admissions open?",
                  a: "Admissions typically open in January for the upcoming academic year. We recommend submitting applications early to secure your child's seat.",
                },
                {
                  q: "What are the school timings?",
                  a: "School hours are 8:00 AM to 3:00 PM for primary and 8:30 AM to 4:00 PM for secondary. Exact timings vary by grade.",
                },
                {
                  q: "Do you offer scholarships?",
                  a: "Yes! We offer merit-based scholarships up to 100% for deserving students. Contact our admissions office for more information.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
                >
                  <summary className="flex cursor-pointer items-center justify-between font-semibold text-foreground hover:text-primary transition-colors">
                    {faq.q}
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground">{faq.a}</p>
                </details>
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
