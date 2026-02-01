"use client"

import { useState } from "react";
import Link from "next/link"
import Image from "next/image";
import { Mail, ExternalLink, Menu, X, ArrowRight, Phone, Github, Linkedin } from "lucide-react"  
import logoPath from './assets/logo.svg';
import Avatar from './assets/avatar.svg'
import { NavLink, SocialLink, MobileNavLink } from "./components/navigation-links";
import { motion } from "framer-motion";
import { useBreakpoint } from "./hooks/isMobile";
import { textVariants, experienceContainerVariants, experienceItemVariants, projectsContainerVariants, projectCardVariants, skillsContainerVariants, skillCategoryVariants, skillPillVariants, contactContainerVariants, contactItemVariants, avatarVariantsDesktop, avatarVariantsMobile } from "./lib/animation-variants";
import { SKILLS, EXPERIENCE, PROJECTS, } from "./lib/profile-data";
import { type Project, type Skill, type Experience, SkillCategoryEnum } from "./types";

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useBreakpoint();
  const currentYear = new Date().getFullYear();

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MobileMenuButton 
        isOpen={mobileMenuOpen}
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
      <DesktopNavigation />
      <MobileNavigation 
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
      />
      <main className="lg:ml-64">
        <HeroSection isMobile={isMobile}/>
        <ExperienceSection />
        <ProjectSection />
        <SkillsSection />
        <ContactSection />
        <Footer year={currentYear} />
      </main>
    </div>
  );
}

export default Portfolio;

const MobileMenuButton = ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 right-6 z-40 lg:hidden p-2 hover:bg-card rounded-lg transition-colors"
      aria-label="Toggle menu"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  )
};

const DesktopNavigation = () => {
  return (
    <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-64 border-r border-border bg-card/50 backdrop-blur-sm p-8 flex-col">
      <Header />
      <NavigationLinks />
      <SocialLinks />
    </nav>
  )
}

const MobileNavigation = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <nav className="fixed inset-0 top-16 z-30 lg:hidden bg-card/95 backdrop-blur-sm border-b border-border p-6 flex flex-col">
      <div className="space-y-4 mb-8">
        <MobileNavLink href="#about" label="About" onClick={onClose} />
        <MobileNavLink href="#experience" label="Experience" onClick={onClose} />
        <MobileNavLink href="#projects" label="Projects" onClick={onClose} />
        <MobileNavLink href="#skills" label="Skills" onClick={onClose} />
        <MobileNavLink href="#contact" label="Contact" onClick={onClose} />
      </div>

      <div className="flex gap-4 text-muted-foreground pt-6 border-t border-border">
        <SocialLink href="https://github.com/zelth" icon={<Github size={20} />} />
        <SocialLink href="https://www.linkedin.com/in/benjie-broa/" icon={<Linkedin size={20} />} />
        <SocialLink href="mailto:bbroa1993@gmail.com" icon={<Mail size={20} />} />
      </div>
    </nav>
  )
}

const Header = () => {
  return (
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
  )
}

const NavigationLinks = () => {
  return (
    <div className="space-y-8 flex-1">
      <NavLink href="#about" label="About" />
      <NavLink href="#experience" label="Experience" />
      <NavLink href="#projects" label="Projects" />
      <NavLink href="#skills" label="Skills" />
      <NavLink href="#contact" label="Contact" />
    </div>
  )
}

function SocialLinks() {
  return (
    <div className="flex gap-4 text-muted-foreground">
      <SocialLink href="https://github.com" icon={<Github size={20} />} />
      <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
      <SocialLink href="mailto:bbroa1993@gmail.com" icon={<Mail size={20} />} />
    </div>
  );
}

const HeroSection = ({ isMobile }: { isMobile: boolean }) => {
  const avatarVariants = isMobile ? avatarVariantsMobile : avatarVariantsDesktop;

  return (
    <section id="about" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full max-w-5xl mx-auto">
        <div
          className="flex justify-center lg:justify-start"
        >
          <motion.div
            className="flex justify-center lg:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={avatarVariants}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <Image
                src={Avatar}
                alt="Benjie Broa"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{
            staggerChildren: 0.12,
            delayChildren: 0.15,
          }}
        >
          <motion.h2
            variants={textVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance"
          >
            Building beautiful, accessible web experiences
          </motion.h2>
          <motion.p variants={textVariants} className="text-base sm:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
            I&apos;m a passionate front-end developer with 10+ years of experience crafting polished digital products. I
            specialize in React, Next.js, and modern web technologies, with a keen eye for performance and user
            experience.
          </motion.p>
          <motion.p variants={textVariants} className="text-base sm:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
            Currently based in Cebu, Philippines. Always exploring new technologies and best practices to elevate my
            craft.
          </motion.p>
          <motion.div variants={textVariants}>
            <Link 
              href="#contact"
              className="w-fit px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              Let&apos;s talk →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-4 sm:px-6 lg:px-12 py-12 lg:py-20 border-t border-border">
      <h3 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-12">Experience</h3>
      <motion.div
        className="space-y-8 lg:space-y-12 max-w-5xl mx-auto"
        variants={experienceContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {EXPERIENCE.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp}/>
        ))}
      </motion.div>
    </section>
  )
}

const ExperienceItem = ({ experience }: { experience: Experience }) => {
  return (
    <motion.div variants={experienceItemVariants} className="pb-8 border-b border-border/50 last:border-0">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
        <div className="flex-1">
          <h4 className="text-lg sm:text-xl font-semibold">{experience.role}</h4>
          <p className="text-accent text-xs sm:text-sm">{experience.company}</p>
        </div>
        <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">{experience.period}</span>
      </div>
      <ul className="space-y-2">
        {experience.highlights.map((highlight) => (
          <li key={highlight.id} className="text-muted-foreground text-xs sm:text-sm flex items-start">
            <span className="text-accent mr-2 sm:mr-3 mt-1 shrink-0"><ArrowRight size={15} /></span>
            <span>{highlight.text}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

const ProjectSection = () => {
  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-12 py-12 lg:py-20 border-t border-border">
      <h3 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-12">Featured Projects</h3>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto"
        variants={projectsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  )
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link href={project?.url || '#'} key={project.id}>
      <motion.div
        variants={projectCardVariants}
        whileHover={{
          y: -6,
          scale: 1.015,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className={`group p-4 sm:p-6 rounded-lg border bg-card/30 ${
          project.highlight
            ? "border-accent/50 bg-card/50"
            : "border-border"
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
      </motion.div>
    </Link>
  )
}

const SkillsSection = () => {
  const categories = Object.values(SkillCategoryEnum); // [Frontend, Backend, Databases, ToolsCMS]

  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-12 py-12 lg:py-20 border-t border-border">
      <h3 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-12">Skills & Tools</h3>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto"
        variants={skillsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
      >
        {categories.map((category) => {
          const skillsInCategory = SKILLS.filter(skill => skill.category === category);

          return (
            <SkillCategory
              key={category}
              category={category}
              skills={skillsInCategory}
            />
          );
        })}
      </motion.div>
    </section>
  );
};

const SkillCategory = ({
  category,
  skills,
}: {
  category: SkillCategoryEnum;
  skills: Skill[];
}) => {
  return (
    <motion.div variants={skillCategoryVariants}>
      <h4 className="text-accent text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wide">
        {category}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.span
            key={skill.id}
            variants={skillPillVariants}
            whileHover={{ y: -3, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            className="px-2 sm:px-3 py-1 bg-card border border-border rounded-full text-xs sm:text-sm text-muted-foreground cursor-default transition-colors duration-200 hover:text-accent hover:border-accent/50 hover:bg-card/80"
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-12 py-12 lg:py-20 border-t border-border mb-12 lg:mb-20">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={contactContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h3
          variants={contactItemVariants}
          className="text-2xl sm:text-3xl font-bold mb-6 lg:mb-8"
        >
          Let&apos;s Connect
        </motion.h3>
        <motion.p
          variants={contactItemVariants}
          className="text-base sm:text-lg text-muted-foreground mb-6 lg:mb-8"
        >
          I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
        </motion.p>
        <ContactLinks />
        <ContactSocials />
      </motion.div>
    </section>
  )
}

const ContactLinks = () => {
  return (
    <div className="space-y-4">
      <motion.a
        variants={contactItemVariants}
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        href="mailto:bbroa1993@gmail.com"
        className="flex items-center gap-3 text-base sm:text-lg text-muted-foreground
                  hover:text-accent transition-colors"
      >
        <Mail size={24} className="text-accent shrink-0" />
        <span className="break-all">bbroa1993@gmail.com</span>
      </motion.a>
      <motion.a
        variants={contactItemVariants}
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        href="tel:+639453500235"
        className="flex items-center gap-3 text-base sm:text-lg text-muted-foreground hover:text-accent transition-colors"
      >
        <Phone size={24} className="text-accent shrink-0" />
        +63 945 350 0235
      </motion.a>
    </div>
  )
}

const ContactSocials = () => {
  return (
    <motion.div
          variants={contactItemVariants}
          className="flex gap-6 mt-8"
        >
      <motion.div
        whileHover={{ y: -3, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 16 }}
      >
        <SocialLink 
          href="https://github.com/zelth" 
          label="GitHub" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="30"><rect width="256" height="256" fill="none"/><path d="M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M104,208H72a32,32,0,0,1-32-32A32,32,0,0,0,8,144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
          }
        />
      </motion.div>
      <motion.div
        whileHover={{ y: -3, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 16 }}
      >
        <SocialLink 
          href="https://www.linkedin.com/in/benjie-broa/"
          label="LinkedIn" 
          icon={<svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>} 
        />
      </motion.div>
    </motion.div>
  )
}

const Footer = ({ year }: { year: number }) => {
  return (
    <footer className="px-4 sm:px-6 lg:px-12 border-t border-border py-4 text-center text-sm">© {year}. Built with <Link href="https://nextjs.org/" className="hover:text-accent transition-colors">Next.js 16</Link>. <Link href="https://github.com/zelth/zelth-dev" className="hover:text-accent transition-colors">Source on GitHub ↗</Link></footer>
  )
}