"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AiDoubtAssistant } from "@/components/ai-doubt-assistant"
import { Download, CheckCircle, Calendar } from "lucide-react"

export default function Admissions() {

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Admissions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">Join our community of learners</p>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Step-by-Step Admission Process</h2>
            <div className="grid md:grid-cols-5 gap-4 md:gap-2">
              {[
                { step: 1, title: "Application", desc: "Submit your application form" },
                { step: 2, title: "Assessment", desc: "Take entrance examination" },
                { step: 3, title: "Evaluation", desc: "Merit-based evaluation" },
                { step: 4, title: "Interview", desc: "Personal interview" },
                { step: 5, title: "Selection", desc: "Final admission letter" },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  {i < 4 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Fee Structure</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="px-4 py-3 text-left font-bold text-primary border border-border">Grade</th>
                    <th className="px-4 py-3 text-left font-bold text-primary border border-border">Annual Tuition</th>
                    <th className="px-4 py-3 text-left font-bold text-primary border border-border">Registration</th>
                    <th className="px-4 py-3 text-left font-bold text-primary border border-border">Sports Activity</th>
                    <th className="px-4 py-3 text-left font-bold text-primary border border-border">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { grade: "Kindergarten", tuition: "$4,000", reg: "$500", sports: "$200", total: "$4,700" },
                    { grade: "Primary (1-5)", tuition: "$5,000", reg: "$600", sports: "$300", total: "$5,900" },
                    { grade: "Middle School (6-8)", tuition: "$7,000", reg: "$700", sports: "$400", total: "$8,100" },
                    { grade: "High School (9-10)", tuition: "$9,000", reg: "$800", sports: "$500", total: "$10,300" },
                    { grade: "Senior (11-12)", tuition: "$10,000", reg: "$900", sports: "$600", total: "$11,500" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-semibold text-primary border border-border">{row.grade}</td>
                      <td className="px-4 py-3 text-muted-foreground border border-border">{row.tuition}</td>
                      <td className="px-4 py-3 text-muted-foreground border border-border">{row.reg}</td>
                      <td className="px-4 py-3 text-muted-foreground border border-border">{row.sports}</td>
                      <td className="px-4 py-3 font-bold text-primary border border-border">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-6 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-muted-foreground">
                <span className="font-semibold">Note:</span> Scholarships up to 100% available based on merit and need. Payment plans can be arranged.
              </p>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Eligibility Criteria</h2>
            <div className="space-y-4">
              {[
                "Minimum age requirement: 3-4 years for Kindergarten",
                "Previous academic records: Must be passed from previous school",
                "Assessment: Qualifying entrance examination score",
                "Interview: Parents and students attend a mandatory interview",
                "Health: Medical fitness certificate required",
                "Character: Reference letter from previous school",
                "Vaccination: Up-to-date immunization records required",
                "Documents: Birth certificate, address proof, and identification",
              ].map((criteria, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-border hover:border-primary/30 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{criteria}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Downloadable Forms */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Downloadable Documents</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Application Form", file: "application-form.pdf" },
                { name: "Eligibility Criteria", file: "eligibility.pdf" },
                { name: "Fee Structure", file: "fees.pdf" },
                { name: "Parent Handbook", file: "handbook.pdf" },
              ].map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-6 bg-white rounded-lg border border-border hover:shadow-md transition-shadow"
                >
                  <span className="font-semibold text-foreground">{doc.name}</span>
                  <button className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
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
