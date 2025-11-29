"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/admissions", label: "Admissions" },
    { href: "/about", label: "About Us" },
  ]

  const academicsDropdown = [
    { href: "/academics", label: "Academics" },
    { href: "/facilities", label: "Facilities" },
    { href: "/students", label: "Students" },
  ]

  const mediaDropdown = [
    { href: "/gallery", label: "Gallery" },
    { href: "/news", label: "News & Events" },
  ]

  const contactLink = { href: "/contact", label: "Contact Us" }

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-primary-foreground font-bold text-lg">EA</span>
            </div>
            <span className="font-bold text-primary hidden md:inline text-lg">Elite Academy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1 items-center">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown("academics")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-colors flex items-center gap-1">
                Academics <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {academicsDropdown.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-sm text-foreground hover:bg-accent/10 hover:text-primary first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown("media")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-colors flex items-center gap-1">
                Media <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {mediaDropdown.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-sm text-foreground hover:bg-accent/10 hover:text-primary first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href={contactLink.href}
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-colors"
            >
              {contactLink.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slideInDown">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => setOpenDropdown(openDropdown === "academics" ? null : "academics")}
              className="w-full text-left px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-colors flex items-center justify-between"
            >
              Academics{" "}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${openDropdown === "academics" ? "rotate-180" : ""}`}
              />
            </button>
            {openDropdown === "academics" && (
              <div className="pl-6 space-y-1">
                {academicsDropdown.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <button
              onClick={() => setOpenDropdown(openDropdown === "media" ? null : "media")}
              className="w-full text-left px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-colors flex items-center justify-between"
            >
              Media{" "}
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "media" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "media" && (
              <div className="pl-6 space-y-1">
                {mediaDropdown.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href={contactLink.href}
              className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {contactLink.label}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
