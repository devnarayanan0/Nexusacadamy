"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AiDoubtAssistant } from "@/components/ai-doubt-assistant"
import { Award, Heart, Lightbulb, Users, Mail, Phone, MapPin } from "lucide-react"

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About & Contact</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Learn about us and get in touch
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
                  To inspire students to become thoughtful, innovative, and compassionate global citizens.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                <Heart className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create an inclusive environment that fosters academic excellence and character development.
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
                  desc: "Nexus Academy was established with a vision to revolutionize education in our region.",
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

        {/* Director's Message */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-l-4 border-primary rounded-xl p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed italic mb-6">
                "Education transforms lives. Here, we're not just teaching—we're nurturing future leaders and innovators. Our commitment goes beyond academics to develop the whole person. Join us in this mission."
              </p>
              <div>
                <p className="font-bold text-primary text-lg">Dr. James Wilson</p>
                <p className="text-accent">Principal, Nexus Academy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Get In Touch</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-8 bg-white rounded-xl border border-primary/20 shadow-md">
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
              <div className="text-center p-8 bg-white rounded-xl border border-accent/20 shadow-md">
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
              <div className="text-center p-8 bg-white rounded-xl border border-primary/20 shadow-md">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                <p className="text-muted-foreground">
                  General: info@nexusacademy.edu
                  <br />
                  Admissions: admissions@nexusacademy.edu
                  <br />
                  Support: support@nexusacademy.edu
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
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-xl border border-border shadow-md">
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
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is the admission process?",
                  a: "Submit application, take entrance exam, attend interview, and receive admission decision. Check our Admissions page for details.",
                },
                {
                  q: "When do admissions open?",
                  a: "Admissions open in January each year. Apply early to secure your spot.",
                },
                {
                  q: "What are the school timings?",
                  a: "Primary: 8:00 AM - 3:00 PM. Secondary: 8:30 AM - 4:00 PM. Timings vary by grade.",
                },
                {
                  q: "Do you offer scholarships?",
                  a: "Yes! Merit-based scholarships up to 100% are available. Contact admissions for details.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group border border-border rounded-lg p-4 hover:border-primary/30 transition-colors bg-white"
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
