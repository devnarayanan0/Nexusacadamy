"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

interface Message {
  id: string
  type: "bot" | "user"
  text: string
  timestamp: Date
}

const suggestedQuestions = ["Admissions", "Fee Structure", "Events", "Contact Info", "Facilities"]

const botResponses: Record<string, string> = {
  admissions:
    "Our admission process involves: 1) Application submission, 2) Entrance exam, 3) Merit evaluation, 4) Interview, 5) Final selection. You can download the application form from our Admissions page.",
  fee: "Our fee structure varies by grade. Elementary: $5,000/year, Middle School: $7,000/year, High School: $9,000/year. Scholarships are available for deserving students.",
  events:
    "Upcoming events include: Foundation Day Celebration (Mar 15), Annual Sports Day (Apr 20), Science Exhibition (May 10). Check our News & Events page for more details.",
  contact:
    "You can reach us at: Phone: +1 (555) 123-4567, Email: info@eliteacademy.edu, Address: 123 Education Street, Knowledge City, KC 12345",
  facilities:
    "We have state-of-the-art facilities including smart classrooms, science labs, computer labs, library, sports complex, and transport services. Visit our Facilities page for more information.",
  default:
    "Hello! I'm your AI Doubt Assistant. I can help you with information about admissions, fees, events, facilities, and contact details. How can I help you today?",
}

export function AiDoubtAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Hello! 👋 I'm the Elite Academy AI Assistant. Ask me about admissions, fees, events, facilities, or contact information!",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: text,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Get bot response
    setTimeout(() => {
      let responseText = botResponses["default"]
      const lowerText = text.toLowerCase()

      if (lowerText.includes("admission")) responseText = botResponses["admissions"]
      else if (lowerText.includes("fee")) responseText = botResponses["fee"]
      else if (lowerText.includes("event")) responseText = botResponses["events"]
      else if (lowerText.includes("contact")) responseText = botResponses["contact"]
      else if (lowerText.includes("facilit")) responseText = botResponses["facilities"]

      const botMessage: Message = {
        id: Date.now().toString(),
        type: "bot",
        text: responseText,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 600)
  }

  const handleSuggestedQuestion = (question: string) => {
    handleSendMessage(question)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center justify-center group ${
          isOpen ? "scale-0" : "scale-100 animate-pulse-scale"
        }`}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-screen md:h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col animate-fadeInUp overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold">EA</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Elite Academy Assistant</h3>
                <p className="text-xs opacity-80">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-primary-foreground/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg text-sm ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-white border border-border text-foreground rounded-bl-none"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="px-4 py-3 border-t border-border bg-white space-y-2">
              <p className="text-xs text-muted-foreground font-semibold">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-xs bg-accent/10 text-accent-foreground hover:bg-accent/20 px-3 py-1 rounded-full transition-colors border border-accent/20"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-border p-4 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background text-sm"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
