import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        console.log("Received admission data:", body)

        // Step 1: Insert Basic Student Details
        const { data: studentData, error: studentError } = await supabase
            .from("student_basic_details")
            .insert({
                full_name: body.fullName,
                date_of_birth: body.dateOfBirth,
                age: body.age,
                gender: body.gender,
                nationality: body.nationality,
                religion: body.religion,
                caste: body.caste,
                mother_tongue: body.motherTongue,
                aadhaar_number: body.aadhaarNumber,
                student_id: body.studentId,
                blood_group: body.bloodGroup,
            })
            .select()
            .single()

        if (studentError) {
            console.error("Student details error:", studentError)
            return NextResponse.json({ error: `Failed to save student details: ${studentError.message}` }, { status: 400 })
        }

        const studentId = studentData.id

        // Step 2: Insert Family Details
        const { error: familyError } = await supabase.from("family_details").insert({
            student_id: studentId,
            father_name: body.fatherName,
            mother_name: body.motherName,
            guardian_name: body.guardianName,
            father_occupation: body.fatherOccupation,
            mother_occupation: body.motherOccupation,
            annual_income: body.annualIncome,
            father_education: body.fatherEducation,
            mother_education: body.motherEducation,
            primary_contact: body.primaryContact,
            alternate_contact: body.alternateContact,
            email: body.email,
        })

        if (familyError) {
            console.error("Family details error:", familyError)
            return NextResponse.json({ error: `Failed to save family details: ${familyError.message}` }, { status: 400 })
        }

        // Step 3: Insert Address Details
        const { error: addressError } = await supabase.from("address_details").insert({
            student_id: studentId,
            permanent_address: body.permanentAddress,
            communication_address: body.communicationAddress,
            pin_code: body.pinCode,
            state: body.state,
            district: body.district,
        })

        if (addressError) {
            console.error("Address details error:", addressError)
            return NextResponse.json({ error: `Failed to save address details: ${addressError.message}` }, { status: 400 })
        }

        // Step 4: Insert Academic Information
        const { error: academicError } = await supabase.from("academic_information").insert({
            student_id: studentId,
            class_seeking_admission: body.classSeekingAdmission,
            previous_school_name: body.previousSchoolName,
            board: body.board,
            medium_of_instruction: body.mediumOfInstruction,
            transfer_certificate_number: body.transferCertificateNumber,
            last_exam_passed: body.lastExamPassed,
            last_exam_percentage: body.lastExamPercentage,
        })

        if (academicError) {
            console.error("Academic info error:", academicError)
            return NextResponse.json({ error: `Failed to save academic information: ${academicError.message}` }, { status: 400 })
        }

        // Step 5: Insert Medical Information
        const { error: medicalError } = await supabase.from("medical_information").insert({
            student_id: studentId,
            blood_group: body.medicalBloodGroup,
            allergies: body.allergies,
            chronic_illness: body.chronicIllness,
            physical_disabilities: body.physicalDisabilities,
            emergency_contact_person: body.emergencyContactPerson,
            emergency_contact_number: body.emergencyContactNumber,
        })

        if (medicalError) {
            console.error("Medical info error:", medicalError)
            return NextResponse.json({ error: `Failed to save medical information: ${medicalError.message}` }, { status: 400 })
        }

        // Step 6: Insert Declaration
        const { error: declarationError } = await supabase.from("declaration").insert({
            student_id: studentId,
            parent_signature: body.parentSignature,
            declaration_date: body.declarationDate,
            place: body.place,
            terms_accepted: body.termsAccepted,
        })

        if (declarationError) {
            console.error("Declaration error:", declarationError)
            return NextResponse.json({ error: `Failed to save declaration: ${declarationError.message}` }, { status: 400 })
        }

        console.log("All data saved successfully for student ID:", studentId)

        return NextResponse.json({
            success: true,
            message: "Admission application submitted successfully!",
            studentId: studentId,
        })
    } catch (error: any) {
        console.error("Unexpected error:", error)
        return NextResponse.json({ error: `Server error: ${error.message}` }, { status: 500 })
    }
}
