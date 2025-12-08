# Nexus Academy - School Website

A modern, full-featured school website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **AI-Powered Chatbot** - Groq API integration for intelligent student assistance
- **Admission Form** - Multi-step form with Supabase database integration
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern UI** - Shadcn UI components with smooth animations
- **9 Complete Pages** - Home, Admissions, About & Contact, Academics, Facilities, Students, Gallery, News, and more

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI, Shadcn UI
- **Database:** Supabase
- **AI:** Groq API (Llama 3.3)
- **Icons:** Lucide React
- **Forms:** React Hook Form

## 📋 Prerequisites

- Node.js 18+ 
- npm or pnpm
- Supabase account
- Groq API account

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
GROQ_API_KEY=your_groq_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

See `.env.example` for template.

### Getting API Keys:

**Groq API:**
1. Go to [console.groq.com](https://console.groq.com)
2. Create account / Sign in
3. Generate API key

**Supabase:**
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings → API
4. Copy Project URL and anon public key

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🗄️ Database Setup

1. Create a Supabase project
2. Run the SQL from `supabase-schema.sql` in Supabase SQL Editor
3. This creates the `admissions` table for form submissions

## 🎨 Customization

- **Colors:** Edit `app/globals.css` for theme colors
- **Content:** Update page files in `app/` directory
- **Components:** Modify reusable components in `components/`

## 📁 Project Structure

```
School-Web/
├── app/                    # Next.js pages
│   ├── about/             # About & Contact page
│   ├── academics/         # Academics page
│   ├── admissions/        # Admissions with form
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── facilities/        # Facilities page
│   ├── gallery/           # Photo gallery
│   ├── news/              # News & events
│   ├── students/          # Student life
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── ai-doubt-assistant.tsx
├── lib/                   # Utilities
│   └── supabase.ts        # Supabase client
└── public/                # Static assets

```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Environment Variables in Vercel:
- `GROQ_API_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 📝 License

All rights reserved © 2025 Nexus Academy

## 🤝 Contributing

This is a private school website project.

## 📧 Contact

- Email: contact@nexusacademy.edu
- Phone: +91 7200176502
- Address: Plot No 2A, Nexus Academy, Porur, Chennai-56

---

Built with ❤️ for Nexus Academy
