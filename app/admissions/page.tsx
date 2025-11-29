"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AiDoubtAssistant } from "@/components/ai-doubt-assistant"
import { Download, CheckCircle, Calendar, ChevronRight, ChevronLeft } from "lucide-react"

export default function Admissions() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    studentName: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",

    // Step 2: Contact & Parent Information
    email: "",
    phone: "",
    address: "",
    parentName: "",
    parentOccupation: "",
    parentPhone: "",

    // Step 3: Academic Information
    previousSchool: "",
    lastGrade: "",
    lastGradePercentage: "",
    applyingGrade: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const handlePrevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Application submitted:", formData)
    alert("Application submitted successfully! We will contact you soon.")
    setCurrentStep(1)
    setFormData({
      studentName: "",
      dateOfBirth: "",
      gender: "",
      bloodGroup: "",
      email: "",
      phone: "",
      address: "",
      parentName: "",
      parentOccupation: "",
      parentPhone: "",
      previousSchool: "",
      lastGrade: "",
      lastGradePercentage: "",
      applyingGrade: "",
    })
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Admissions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">Join our community of learners and future leaders</p>
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
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Apply Online</h2>

            {/* Form Progress */}
            <div className="mb-8 flex items-center justify-between">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      currentStep >= step ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`h-1 w-12 md:w-24 transition-all ${currentStep > step ? "bg-primary" : "bg-gray-200"}`}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl border border-border shadow-lg">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-xl font-bold text-primary mb-6">Step 1: Personal Information</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Student's Full Name"
                      required
                      value={formData.studentName}
                      onChange={(e) => handleInputChange("studentName", e.target.value)}
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <input
                      type="date"
                      placeholder="Date of Birth"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <select
                      required
                      value={formData.gender}
                      onChange={(e) => handleInputChange("gender", e.target.value)}
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Blood Group"
                      value={formData.bloodGroup}
                      onChange={(e) => handleInputChange("bloodGroup", e.target.value)}
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Contact & Parent Information */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-xl font-bold text-primary mb-6">Step 2: Contact & Parent Information</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <textarea
                    placeholder="Full Address"
                    rows={3}
                    required
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  ></textarea>

                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Parent/Guardian Name"
                      required
                      value={formData.parentName}
                      onChange={(e) => handleInputChange("parentName", e.target.value)}
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <input
                      type="text"
                      placeholder="Parent's Occupation"
                      value={formData.parentOccupation}
                      onChange={(e) => handleInputChange("parentOccupation", e.target.value)}
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <input
                    type="tel"
                    placeholder="Parent's Phone Number"
                    required
                    value={formData.parentPhone}
                    onChange={(e) => handleInputChange("parentPhone", e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              )}

              {/* Step 3: Academic Information */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-xl font-bold text-primary mb-6">Step 3: Academic Information</h3>

                  <input
                    type="text"
                    placeholder="Previous School Name"
                    required
                    value={formData.previousSchool}
                    onChange={(e) => handleInputChange("previousSchool", e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <select
                      required
                      value={formData.lastGrade}
                      onChange={(e) => handleInputChange("lastGrade", e.target.value)}
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">Select Last Grade Completed</option>
                      <option value="kg">Kindergarten</option>
                      <option value="1">Grade 1</option>
                      <option value="2">Grade 2</option>
                      <option value="3">Grade 3</option>
                      <option value="4">Grade 4</option>
                      <option value="5">Grade 5</option>
                      <option value="6">Grade 6</option>
                      <option value="7">Grade 7</option>
                      <option value="8">Grade 8</option>
                      <option value="9">Grade 9</option>
                      <option value="10">Grade 10</option>
                      <option value="11">Grade 11</option>
                    </select>
                    <input
                      type="number"
                      placeholder="Last Grade Percentage (%)"
                      min="0"
                      max="100"
                      step="0.01"
                      value={formData.lastGradePercentage}
                      onChange={(e) => handleInputChange("lastGradePercentage", e.target.value)}
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <select
                    required
                    value={formData.applyingGrade}
                    onChange={(e) => handleInputChange("applyingGrade", e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select Applying Grade</option>
                    <option value="kg">Kindergarten</option>
                    <option value="1-5">Primary (1-5)</option>
                    <option value="6-8">Middle School (6-8)</option>
                    <option value="9-10">High School (9-10)</option>
                    <option value="11-12">Senior (11-12)</option>
                  </select>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between gap-4 pt-6">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
                >
                  <ChevronLeft className="w-5 h-5" /> Previous
                </button>

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold ml-auto"
                  >
                    Next <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 bg-accent text-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold ml-auto"
                  >
                    Submit Application
                  </button>
                )}
              </div>
            </form>
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
                <span className="font-semibold">Note:</span> Scholarships up to 100% are available for deserving
                students based on merit and financial need. Payment plans can be arranged as per mutual consent.
              </p>
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Important Dates</h2>
            <div className="space-y-4">
              {[
                { date: "January 1, 2024", event: "Admission Portal Opens" },
                { date: "January 15, 2024", event: "Last Date for Application" },
                { date: "January 22, 2024", event: "Entrance Exam" },
                { date: "February 5, 2024", event: "Result Declaration" },
                { date: "February 15, 2024", event: "Personal Interviews" },
                { date: "March 1, 2024", event: "Admission Letters Issued" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg border-l-4 border-primary">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary">{item.event}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
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
