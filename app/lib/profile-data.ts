import { Skill, Experience, Project, SkillCategoryEnum } from "../types";
import { v4 as uuidv4 } from "uuid";

// Example SKILLS with Skill objects
export const SKILLS: readonly Skill[] = [
  // Frontend
  { id: uuidv4(), name: "React", category: SkillCategoryEnum.Frontend },
  { id: uuidv4(), name: "Next.js", category: SkillCategoryEnum.Frontend },
  { id: uuidv4(), name: "TypeScript", category: SkillCategoryEnum.Frontend },
  { id: uuidv4(), name: "TailwindCSS", category: SkillCategoryEnum.Frontend },
  { id: uuidv4(), name: "ShadCN", category: SkillCategoryEnum.Frontend },

  // Backend
  { id: uuidv4(), name: "Node.js", category: SkillCategoryEnum.Backend },
  { id: uuidv4(), name: "PHP", category: SkillCategoryEnum.Backend },
  { id: uuidv4(), name: "GraphQL", category: SkillCategoryEnum.Backend },
  { id: uuidv4(), name: "REST API", category: SkillCategoryEnum.Backend },
  { id: uuidv4(), name: "Ruby on Rails", category: SkillCategoryEnum.Backend },

  // Databases
  { id: uuidv4(), name: "Supabase", category: SkillCategoryEnum.Databases },
  { id: uuidv4(), name: "MySQL", category: SkillCategoryEnum.Databases },
  { id: uuidv4(), name: "PostgreSQL", category: SkillCategoryEnum.Databases },

  // Tools & CMS
  { id: uuidv4(), name: "Figma", category: SkillCategoryEnum.ToolsCMS },
  { id: uuidv4(), name: "Git", category: SkillCategoryEnum.ToolsCMS },
  { id: uuidv4(), name: "Sanity", category: SkillCategoryEnum.ToolsCMS },
  { id: uuidv4(), name: "Prismic", category: SkillCategoryEnum.ToolsCMS },
  { id: uuidv4(), name: "Netlify CMS", category: SkillCategoryEnum.ToolsCMS },
];



export const EXPERIENCE: readonly Experience[] = [
  {
    id: uuidv4(),
    role: "Front-End Developer",
    company: "Skillcloud",
    period: "Nov 2025 - Dec 2025",
    highlights: [
      { id: uuidv4(), text: "React Hook Form & Zod validation" },
      { id: uuidv4(), text: "TanStack Query" },
      { id: uuidv4(), text: "Clean architecture" },
    ],
  },
  {
    id: uuidv4(),
    role: "Full Stack Developer",
    company: "Cenix Web Development",
    period: "Jul 2025 - Oct 2025",
    highlights: [
      { id: uuidv4(), text: "Next.js & Supabase RLS" },
      { id: uuidv4(), text: "Bootstrap optimization" },
      { id: uuidv4(), text: "GitHub workflow" },
    ],
  },
  {
    id: uuidv4(),
    role: "Full Stack Developer",
    company: "AGDP IT Solutions",
    period: "Feb 2024 - Mar 2025",
    highlights: [
      { id: uuidv4(), text: "Car rental SaaS app" },
      { id: uuidv4(), text: "Stripe integration" },
      { id: uuidv4(), text: "Email notifications" },
    ],
  },
  {
    id: uuidv4(),
    role: "Front-end Developer",
    company: "Mosh",
    period: "Jan 2023 - Jun 2023",
    highlights: [
      { id: uuidv4(), text: "React with TypeScript" },
      { id: uuidv4(), text: "Prismic CMS" },
      { id: uuidv4(), text: "Figma design implementation" },
    ],
  },
];


export const PROJECTS: readonly Project[] = [
  {
    id: uuidv4(),
    name: "Car Rental SaaS",
    description: "Full-featured booking platform with payment processing and admin dashboard",
    tech: ["Next.js", "Stripe", "Supabase", "TailwindCSS"],
    highlight: true,
    url: "https://www.luxauto.io",
  },
  {
    id: uuidv4(),
    name: "Quiz Panel Module",
    description: "Interactive React component for managing and displaying quiz content",
    tech: ["React", "TypeScript", "Prismic", "TailwindCSS"],
    highlight: false,
    url: "",
  },
  {
    id: uuidv4(),
    name: "Delivery App Integration",
    description: "Authentication and order management system with real-time updates",
    tech: ["React", "Next.js", "Auth0", "Material UI"],
    highlight: false,
    url: "",
  },
];
