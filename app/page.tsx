"use client"

import { useState } from "react";
import Link from "next/link"
import Image from "next/image";
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react"  
import logoPath from './assets/logo.svg';
import Avatar from './assets/avatar.svg'
import { NavLink, SocialLink, MobileNavLink } from "./components/navigation-links";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const currentYear = new Date().getFullYear();
  
  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "TailwindCSS", "ShadCN"],
    Backend: ["Node.js", "PHP", "GraphQL", "REST API", "Ruby on Rails"],
    Databases: ["Supabase", "MySQL", "PostgreSQL"],
    "Tools & CMS": ["Figma", "Git", "Sanity", "Prismic", "Netlify CMS"],
  }

  const experience = [
    {
      role: "Front-End Developer",
      company: "Skillcloud",
      period: "Nov 2025 - Dec 2025",
      highlights: ["React Hook Form & Zod validation", "TanStack Query", "Clean architecture"],
    },
    {
      role: "Full Stack Developer",
      company: "Cenix Web Development",
      period: "Jul 2025 - Oct 2025",
      highlights: ["Next.js & Supabase RLS", "Bootstrap optimization", "GitHub workflow"],
    },
    {
      role: "Full Stack Developer",
      company: "AGDP IT Solutions",
      period: "Feb 2024 - Mar 2025",
      highlights: ["Car rental SaaS app", "Stripe integration", "Email notifications"],
    },
    {
      role: "Front-end Developer",
      company: "Mosh",
      period: "Jan 2023 - Jun 2023",
      highlights: ["React with TypeScript", "Prismic CMS", "Figma design implementation"],
    },
  ]

  const projects = [
    {
      name: "Car Rental SaaS",
      description: "Full-featured booking platform with payment processing and admin dashboard",
      tech: ["Next.js", "Stripe", "Supabase", "TailwindCSS"],
      highlight: true,
      url: 'https://www.luxauto.io'
    },
    {
      name: "Quiz Panel Module",
      description: "Interactive React component for managing and displaying quiz content",
      tech: ["React", "TypeScript", "Prismic", "TailwindCSS"],
    },
    {
      name: "Delivery App Integration",
      description: "Authentication and order management system with real-time updates",
      tech: ["React", "Next.js", "Auth0", "Material UI"],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <HiveBackground /> */}
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-6 right-6 z-40 lg:hidden p-2 hover:bg-card rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation - Desktop */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-64 border-r border-border bg-card/50 backdrop-blur-sm p-8 flex-col">
        <div className="mb-12 flex flex-col space-x-1">
          <Link href='/'>
            <Image
              src={logoPath}
              alt="logo"
              loading="lazy"
              height={60}
              width={120}
            />
          </Link>
          <h1 className="text-2xl font-bold self-start mt-5">Benjie Broa</h1>
          <p className="text-sm text-muted-foreground self-start">Front-End Developer</p>
        </div>
        

        <div className="space-y-8 flex-1">
          <NavLink href="#about" label="About" />
          <NavLink href="#experience" label="Experience" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#contact" label="Contact" />
        </div>

        <div className="flex gap-4 text-muted-foreground">
          <SocialLink href="https://github.com" icon={<Github size={20} />} />
          <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
          <SocialLink href="mailto:bbroa1993@gmail.com" icon={<Mail size={20} />} />
        </div>
      </nav>

      {/* Navigation - Mobile */}
      {mobileMenuOpen && (
        <nav className="fixed inset-0 top-16 z-30 lg:hidden bg-card/95 backdrop-blur-sm border-b border-border p-6 flex flex-col">
          <div className="space-y-4 mb-8">
            <MobileNavLink href="#about" label="About" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="#experience" label="Experience" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="#projects" label="Projects" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="#skills" label="Skills" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="#contact" label="Contact" onClick={() => setMobileMenuOpen(false)} />
          </div>

          <div className="flex gap-4 text-muted-foreground pt-6 border-t border-border">
            <SocialLink href="https://github.com" icon={<Github size={20} />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
            <SocialLink href="mailto:bbroa1993@gmail.com" icon={<Mail size={20} />} />
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full max-w-5xl mx-auto">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                <Image
                  src={Avatar}
                  alt="Benjie Broa"
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              {/* <div className="mb-8 inline-block">
                <span className="text-accent text-sm font-mono">Welcome</span>
              </div> */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance">
                Building beautiful, accessible web experiences
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                I&apos;m a passionate front-end developer with 10+ years of experience crafting polished digital products. I
                specialize in React, Next.js, and modern web technologies, with a keen eye for performance and user
                experience.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                Currently based in Cebu, Philippines. Always exploring new technologies and best practices to elevate my
                craft.
              </p>
              <Link href="#contact" className="w-fit px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-sm sm:text-base">
                Let&apos;s talk →
              </Link>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-4 sm:px-6 lg:px-12 py-12 lg:py-20 border-t border-border">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-12">Experience</h3>
          <div className="space-y-8 lg:space-y-12 max-w-5xl mx-auto">
            {experience.map((exp, idx) => (
              <div key={idx} className="pb-8 border-b border-border/50 last:border-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold">{exp.role}</h4>
                    <p className="text-accent text-xs sm:text-sm">{exp.company}</p>
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-muted-foreground text-xs sm:text-sm flex items-start">
                      <span className="text-accent mr-2 sm:mr-3 mt-1 shrink-0">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-4 sm:px-6 lg:px-12 py-12 lg:py-20 border-t border-border">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-12">Featured Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {projects.map((project, idx) => (
              <Link href={project?.url || ''} key={idx}>
                <div
                  // key={idx}
                  className={`p-4 sm:p-6 rounded-lg border transition-all hover:border-accent/50 hover:bg-card/80 ${
                    project.highlight ? "border-accent/50 bg-card/50" : "border-border bg-card/30"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <h4 className="text-base sm:text-lg font-semibold flex-1">{project.name}</h4>
                    <ExternalLink size={18} className="text-muted-foreground shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-primary/10 text-accent rounded border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-4 sm:px-6 lg:px-12 py-12 lg:py-20 border-t border-border">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-12">Skills & Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-accent text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wide">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 bg-card border border-border rounded-full text-xs sm:text-sm text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-4 sm:px-6 lg:px-12 py-12 lg:py-20 border-t border-border mb-12 lg:mb-20">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 lg:mb-8">Let&apos;s Connect</h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 lg:mb-8">
              I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:bbroa1993@gmail.com"
                className="flex items-center gap-3 text-base sm:text-lg hover:text-accent transition-colors"
              >
                <Mail size={24} className="text-accent shrink-0" />
                <span className="break-all">bbroa1993@gmail.com</span>
              </a>
              <a
                href="tel:+639453500235"
                className="flex items-center gap-3 text-base sm:text-lg hover:text-accent transition-colors"
              >
                <span className="text-accent">📞</span>
                +63 945 350 0235
              </a>
            </div>
            <div className="flex gap-6 mt-8">
              <SocialLink href="https://github.com" label="GitHub" icon={<Github size={24} />} />
              <SocialLink href="https://linkedin.com" label="LinkedIn" icon={<Linkedin size={24} />} />
            </div>
          </div>
        </section>

        <footer className="px-4 sm:px-6 lg:px-12 border-t border-border py-4 text-center text-sm">© {currentYear}. Built with <Link href="https://nextjs.org/" className="hover:text-accent transition-colors">Next.js 16</Link>. <Link href="https://github.com/zelth/zelth-dev" className="hover:text-accent transition-colors">Source on GitHub ↗</Link></footer>
      </main>
    </div>
  );
}
