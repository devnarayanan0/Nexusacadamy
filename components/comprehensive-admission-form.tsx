"use client"

import React from "react"
import { useState } from "react"

export function ComprehensiveAdmissionForm() {
    const [currentStep, setCurrentStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [sameAsPermanent, setSameAsPermanent] = useState(false)

    // Form data state
    const [formData, setFormData] = useState({
        // A. Basic Student Details
        fullName: "",
        dateOfBirth: "",
        age: 0,
        gender: "",
        nationality: "Indian",
        religion: "",
        caste: "",
        motherTongue: "",
        aadhaarNumber: "",
        studentId: "",
        bloodGroup: "",

        // B. Family Details
        fatherName: "",
        motherName: "",
        guardianName: "",
        fatherOccupation: "",
        motherOccupation: "",
        annualIncome: "",
        fatherEducation: "",
        motherEducation: "",
        primaryContact: "",
        alternateContact: "",
        email: "",

        // C. Address Details
        permanentAddress: "",
        communicationAddress: "",
        pinCode: "",
        state: "",
        district: "",

        // D. Academic Information
        classSeekingAdmission: "",
        previousSchoolName: "",
        board: "",
        mediumOfInstruction: "",
        transferCertificateNumber: "",
        lastExamPassed: "",
        lastExamPercentage: "",

        // E. Medical Information
        medicalBloodGroup: "",
        allergies: "",
        chronicIllness: "",
        physicalDisabilities: "",
        emergencyContactPerson: "",
        emergencyContactNumber: "",

        // F. Declaration
        parentSignature: "",
        declarationDate: new Date().toISOString().split("T")[0],
        place: "",
        termsAccepted: false,
    })

    const handleInputChange = (field: string, value: string | number | boolean) => {
        setFormData((prev) => {
            const updated = { ...prev, [field]: value }

            // Auto-calculate age from date of birth
            if (field === "dateOfBirth" && value) {
                const dob = new Date(value as string)
                const today = new Date()
                let age = today.getFullYear() - dob.getFullYear()
                const monthDiff = today.getMonth() - dob.getMonth()
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
                    age--
                }
                updated.age = age
            }

            // Auto-fill blood group in medical section
            if (field === "bloodGroup") {
                updated.medicalBloodGroup = value as string
            }

            return updated
        })
    }

    const handleSameAsPermanent = (checked: boolean) => {
        setSameAsPermanent(checked)
        if (checked) {
            setFormData((prev) => ({
                ...prev,
                communicationAddress: prev.permanentAddress,
            }))
        }
    }

    const handleNextStep = () => {
        if (currentStep < 6) setCurrentStep(currentStep + 1)
    }

    const handlePrevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch("/api/admissions-new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                alert(`Error: ${data.error}`)
                throw new Error(data.error)
            }

            alert("✅ Admission application submitted successfully! We will contact you soon.")
            setCurrentStep(1)
            setFormData({
                fullName: "",
                dateOfBirth: "",
                age: 0,
                gender: "",
                nationality: "Indian",
                religion: "",
                caste: "",
                motherTongue: "",
                aadhaarNumber: "",
                studentId: "",
                bloodGroup: "",
                fatherName: "",
                motherName: "",
                guardianName: "",
                fatherOccupation: "",
                motherOccupation: "",
                annualIncome: "",
                fatherEducation: "",
                motherEducation: "",
                primaryContact: "",
                alternateContact: "",
                email: "",
                permanentAddress: "",
                communicationAddress: "",
                pinCode: "",
                state: "",
                district: "",
                classSeekingAdmission: "",
                previousSchoolName: "",
                board: "",
                mediumOfInstruction: "",
                transferCertificateNumber: "",
                lastExamPassed: "",
                lastExamPercentage: "",
                medicalBloodGroup: "",
                allergies: "",
                chronicIllness: "",
                physicalDisabilities: "",
                emergencyContactPerson: "",
                emergencyContactNumber: "",
                parentSignature: "",
                declarationDate: new Date().toISOString().split("T")[0],
                place: "",
                termsAccepted: false,
            })
        } catch (error) {
            console.error("Submission error:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Student Contact Form</h2>

            {/* Progress Indicator */}
            <div className="mb-12">
                <div className="flex items-center justify-between">
                    {[1, 2, 3, 4, 5, 6].map((step, index) => (
                        <React.Fragment key={step}>
                            <div className="flex flex-col items-center">
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all ${currentStep >= step ? "bg-primary text-primary-foreground shadow-lg" : "bg-gray-200 text-gray-600"
                                        }`}
                                >
                                    {step}
                                </div>
                            </div>
                            {index < 5 && (
                                <div className="flex-1 h-1 mx-2 relative">
                                    <div className="absolute inset-0 bg-gray-200 rounded"></div>
                                    <div
                                        className={`absolute inset-0 bg-primary rounded transition-all duration-500 ${currentStep > step ? "w-full" : "w-0"
                                            }`}
                                    ></div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 md:p-12 rounded-xl border border-border shadow-lg">
                {/* STEP 1: Basic Student Details */}
                {currentStep === 1 && (
                    <div className="space-y-6 animate-fadeIn">
                        <h3 className="text-2xl font-bold text-primary mb-8">Basic Student Details</h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Full Name (as per Birth Certificate) *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.fullName}
                                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Date of Birth *</label>
                                <input
                                    type="date"
                                    required
                                    value={formData.dateOfBirth}
                                    onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Age (Auto-calculated)</label>
                                <input
                                    type="number"
                                    value={formData.age}
                                    readOnly
                                    className="w-full px-4 py-3 border border-border rounded-lg bg-gray-50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Gender *</label>
                                <select
                                    required
                                    value={formData.gender}
                                    onChange={(e) => handleInputChange("gender", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Blood Group</label>
                                <select
                                    value={formData.bloodGroup}
                                    onChange={(e) => handleInputChange("bloodGroup", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                >
                                    <option value="">Select</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Nationality *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.nationality}
                                    onChange={(e) => handleInputChange("nationality", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Mother Tongue</label>
                                <input
                                    type="text"
                                    value={formData.motherTongue}
                                    onChange={(e) => handleInputChange("motherTongue", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Religion</label>
                                <input
                                    type="text"
                                    value={formData.religion}
                                    onChange={(e) => handleInputChange("religion", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Caste (if applicable)</label>
                                <input
                                    type="text"
                                    value={formData.caste}
                                    onChange={(e) => handleInputChange("caste", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Aadhaar Number</label>
                                <input
                                    type="text"
                                    value={formData.aadhaarNumber}
                                    onChange={(e) => handleInputChange("aadhaarNumber", e.target.value)}
                                    placeholder="XXXX-XXXX-XXXX"
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Student ID (if any)</label>
                                <input
                                    type="text"
                                    value={formData.studentId}
                                    onChange={(e) => handleInputChange("studentId", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 2: Family Details */}
                {currentStep === 2 && (
                    <div className="space-y-6 animate-fadeIn">
                        <h3 className="text-2xl font-bold text-primary mb-8">Family Details</h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Father's Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.fatherName}
                                    onChange={(e) => handleInputChange("fatherName", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Mother's Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.motherName}
                                    onChange={(e) => handleInputChange("motherName", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Guardian's Name (if applicable)</label>
                            <input
                                type="text"
                                value={formData.guardianName}
                                onChange={(e) => handleInputChange("guardianName", e.target.value)}
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Father's Occupation</label>
                                <input
                                    type="text"
                                    value={formData.fatherOccupation}
                                    onChange={(e) => handleInputChange("fatherOccupation", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Mother's Occupation</label>
                                <input
                                    type="text"
                                    value={formData.motherOccupation}
                                    onChange={(e) => handleInputChange("motherOccupation", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Father's Education</label>
                                <input
                                    type="text"
                                    value={formData.fatherEducation}
                                    onChange={(e) => handleInputChange("fatherEducation", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Mother's Education</label>
                                <input
                                    type="text"
                                    value={formData.motherEducation}
                                    onChange={(e) => handleInputChange("motherEducation", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Annual Income</label>
                            <input
                                type="text"
                                value={formData.annualIncome}
                                onChange={(e) => handleInputChange("annualIncome", e.target.value)}
                                placeholder="e.g., 5,00,000"
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Primary Contact Number *</label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.primaryContact}
                                    onChange={(e) => handleInputChange("primaryContact", e.target.value)}
                                    placeholder="+91 XXXXX XXXXX"
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Alternate Contact Number</label>
                                <input
                                    type="tel"
                                    value={formData.alternateContact}
                                    onChange={(e) => handleInputChange("alternateContact", e.target.value)}
                                    placeholder="+91 XXXXX XXXXX"
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Email ID *</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                placeholder="example@email.com"
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>
                    </div>
                )}

                {/* STEP 3: Address Details */}
                {currentStep === 3 && (
                    <div className="space-y-6 animate-fadeIn">
                        <h3 className="text-2xl font-bold text-primary mb-8">Address Details</h3>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Permanent Address *</label>
                            <textarea
                                required
                                rows={3}
                                value={formData.permanentAddress}
                                onChange={(e) => handleInputChange("permanentAddress", e.target.value)}
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            ></textarea>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                            <input
                                type="checkbox"
                                id="sameAddress"
                                checked={sameAsPermanent}
                                onChange={(e) => handleSameAsPermanent(e.target.checked)}
                                className="w-4 h-4"
                            />
                            <label htmlFor="sameAddress" className="text-sm font-semibold">
                                Communication Address same as Permanent Address
                            </label>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Communication Address *</label>
                            <textarea
                                required
                                rows={3}
                                value={formData.communicationAddress}
                                onChange={(e) => handleInputChange("communicationAddress", e.target.value)}
                                disabled={sameAsPermanent}
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:bg-gray-100"
                            ></textarea>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">PIN Code *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.pinCode}
                                    onChange={(e) => handleInputChange("pinCode", e.target.value)}
                                    placeholder="XXXXXX"
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">State *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.state}
                                    onChange={(e) => handleInputChange("state", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">District *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.district}
                                    onChange={(e) => handleInputChange("district", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 4: Academic Information */}
                {currentStep === 4 && (
                    <div className="space-y-6 animate-fadeIn">
                        <h3 className="text-2xl font-bold text-primary mb-8">Academic Information</h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Class Seeking Admission To *</label>
                                <select
                                    required
                                    value={formData.classSeekingAdmission}
                                    onChange={(e) => handleInputChange("classSeekingAdmission", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                >
                                    <option value="">Select Class</option>
                                    <option value="Kindergarten">Kindergarten</option>
                                    <option value="Class 1">Class 1</option>
                                    <option value="Class 2">Class 2</option>
                                    <option value="Class 3">Class 3</option>
                                    <option value="Class 4">Class 4</option>
                                    <option value="Class 5">Class 5</option>
                                    <option value="Class 6">Class 6</option>
                                    <option value="Class 7">Class 7</option>
                                    <option value="Class 8">Class 8</option>
                                    <option value="Class 9">Class 9</option>
                                    <option value="Class 10">Class 10</option>
                                    <option value="Class 11">Class 11</option>
                                    <option value="Class 12">Class 12</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Board *</label>
                                <select
                                    required
                                    value={formData.board}
                                    onChange={(e) => handleInputChange("board", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                >
                                    <option value="">Select Board</option>
                                    <option value="CBSE">CBSE</option>
                                    <option value="ICSE">ICSE</option>
                                    <option value="State Board">State Board</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Previous School Name *</label>
                            <input
                                type="text"
                                required
                                value={formData.previousSchoolName}
                                onChange={(e) => handleInputChange("previousSchoolName", e.target.value)}
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Medium of Instruction *</label>
                                <select
                                    required
                                    value={formData.mediumOfInstruction}
                                    onChange={(e) => handleInputChange("mediumOfInstruction", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                >
                                    <option value="">Select Medium</option>
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="Tamil">Tamil</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Transfer Certificate Number</label>
                                <input
                                    type="text"
                                    value={formData.transferCertificateNumber}
                                    onChange={(e) => handleInputChange("transferCertificateNumber", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Last Exam Passed</label>
                                <input
                                    type="text"
                                    value={formData.lastExamPassed}
                                    onChange={(e) => handleInputChange("lastExamPassed", e.target.value)}
                                    placeholder="e.g., Class 10"
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Percentage / GPA</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={formData.lastExamPercentage}
                                    onChange={(e) => handleInputChange("lastExamPercentage", e.target.value)}
                                    placeholder="e.g., 85.5"
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 5: Medical Information */}
                {currentStep === 5 && (
                    <div className="space-y-6 animate-fadeIn">
                        <h3 className="text-2xl font-bold text-primary mb-8">Medical Information</h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Blood Group</label>
                                <input
                                    type="text"
                                    value={formData.medicalBloodGroup}
                                    readOnly
                                    className="w-full px-4 py-3 border border-border rounded-lg bg-gray-50"
                                    placeholder="Auto-filled from Step 1"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Emergency Contact Person *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.emergencyContactPerson}
                                    onChange={(e) => handleInputChange("emergencyContactPerson", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Emergency Contact Number *</label>
                            <input
                                type="tel"
                                required
                                value={formData.emergencyContactNumber}
                                onChange={(e) => handleInputChange("emergencyContactNumber", e.target.value)}
                                placeholder="+91 XXXXX XXXXX"
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Any Allergies</label>
                            <textarea
                                rows={2}
                                value={formData.allergies}
                                onChange={(e) => handleInputChange("allergies", e.target.value)}
                                placeholder="List any known allergies"
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Chronic Illness (if any)</label>
                            <textarea
                                rows={2}
                                value={formData.chronicIllness}
                                onChange={(e) => handleInputChange("chronicIllness", e.target.value)}
                                placeholder="e.g., Asthma, Diabetes, etc."
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Physical Disabilities (if any)</label>
                            <textarea
                                rows={2}
                                value={formData.physicalDisabilities}
                                onChange={(e) => handleInputChange("physicalDisabilities", e.target.value)}
                                placeholder="Please specify if any"
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            ></textarea>
                        </div>
                    </div>
                )}

                {/* STEP 6: Declaration */}
                {currentStep === 6 && (
                    <div className="space-y-6 animate-fadeIn">
                        <h3 className="text-2xl font-bold text-primary mb-8">Declaration</h3>

                        <div className="bg-gray-50 p-6 rounded-lg border border-border">
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                I hereby declare that the information provided above is true and correct to the best of my knowledge. I
                                understand that any false information may lead to cancellation of admission.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Place *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.place}
                                    onChange={(e) => handleInputChange("place", e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Date</label>
                                <input
                                    type="date"
                                    value={formData.declarationDate}
                                    readOnly
                                    className="w-full px-4 py-3 border border-border rounded-lg bg-gray-50"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Parent's Name (as signature) *</label>
                            <input
                                type="text"
                                required
                                value={formData.parentSignature}
                                onChange={(e) => handleInputChange("parentSignature", e.target.value)}
                                placeholder="Type your full name"
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <input
                                type="checkbox"
                                id="terms"
                                required
                                checked={formData.termsAccepted}
                                onChange={(e) => handleInputChange("termsAccepted", e.target.checked)}
                                className="w-5 h-5 mt-1"
                            />
                            <label htmlFor="terms" className="text-sm font-semibold text-blue-900">
                                I accept the terms and conditions and declare that all information provided is accurate. *
                            </label>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between gap-4 pt-8 border-t">
                    <button
                        type="button"
                        onClick={handlePrevStep}
                        disabled={currentStep === 1}
                        className="flex items-center gap-2 px-8 py-4 text-lg border-2 border-primary text-primary rounded-lg hover:bg-primary/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
                    >
                        ← Previous
                    </button>

                    {currentStep < 6 ? (
                        <button
                            type="button"
                            onClick={handleNextStep}
                            className="flex items-center gap-2 px-8 py-4 text-lg bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold ml-auto"
                        >
                            Next →
                        </button>
                    ) : (
                        <button
                            type="submit"
                            disabled={isSubmitting || !formData.termsAccepted}
                            className="px-10 py-4 text-lg bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold ml-auto disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Submitting...
                                </>
                            ) : (
                                "Submit Application"
                            )}
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}
