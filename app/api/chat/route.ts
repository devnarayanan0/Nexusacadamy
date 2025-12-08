import Groq from "groq-sdk"
import { NextResponse } from "next/server"

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
})

export async function POST(req: Request) {
    try {
        const { message } = await req.json()

        if (!message) {
            return NextResponse.json({ error: "Message is required" }, { status: 400 })
        }

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `You are a helpful assistant for Nexus Academy, a school. You help answer questions about:
- Admissions process and requirements
- Fee structure (Elementary: $5,000/year, Middle: $7,000/year, High School: $9,000/year)
- Upcoming events (Foundation Day - Mar 15, Sports Day - Apr 20, Science Exhibition - May 10)
- Contact info (Phone: +1 (555) 123-4567, Email: info@nexusacademy.edu, Address: 123 Education Street, Knowledge City, KC 12345)
- Facilities (Smart classrooms, science & computer labs, library, sports complex, transportation)

Keep responses concise, friendly, and helpful. If asked about something outside these topics, politely redirect to school-related questions.`,
                },
                {
                    role: "user",
                    content: message,
                },
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
            max_tokens: 500,
        })

        const response = completion.choices[0]?.message?.content || "Sorry, I couldn't generate a response."

        return NextResponse.json({ response })
    } catch (error) {
        console.error("Groq API Error:", error)
        return NextResponse.json({ error: "Failed to get response from AI" }, { status: 500 })
    }
}
