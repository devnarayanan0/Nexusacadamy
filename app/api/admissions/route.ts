import { supabase } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const formData = await req.json()
        console.log("📝 Received form data:", formData)

        // Validate required fields
        const requiredFields = [
            'studentName', 'dateOfBirth', 'gender', 'email', 'phone',
            'address', 'parentName', 'parentPhone', 'previousSchool',
            'lastGrade', 'applyingGrade'
        ]

        for (const field of requiredFields) {
            if (!formData[field]) {
                console.log(`❌ Missing field: ${field}`)
                return NextResponse.json(
                    { error: `Missing required field: ${field}` },
                    { status: 400 }
                )
            }
        }

        console.log("✅ All required fields present")

        // Insert into Supabase
        const insertData = {
            student_name: formData.studentName,
            date_of_birth: formData.dateOfBirth,
            gender: formData.gender,
            blood_group: formData.bloodGroup || null,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            parent_name: formData.parentName,
            parent_occupation: formData.parentOccupation || null,
            parent_phone: formData.parentPhone,
            previous_school: formData.previousSchool,
            last_grade: formData.lastGrade,
            last_grade_percentage: formData.lastGradePercentage || null,
            applying_grade: formData.applyingGrade,
        }

        console.log("📤 Inserting into Supabase:", insertData)

        const { data, error } = await supabase
            .from('admissions')
            .insert([insertData])
            .select()

        if (error) {
            console.error('❌ Supabase error:', error)
            return NextResponse.json(
                { error: `Database error: ${error.message}` },
                { status: 500 }
            )
        }

        console.log("✅ Successfully inserted:", data)

        return NextResponse.json({
            success: true,
            message: 'Application submitted successfully!',
            data: data[0],
        })
    } catch (error) {
        console.error('❌ API error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
