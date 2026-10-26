export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  roles: string[];
  introduction: string;
  aboutText: string;
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  portraitUrl: string;
}

export interface HeroStat {
  value: string;
  label: string;
  sublabel?: string;
}

export interface NavItem {
  id: string;
  label: string;
  iconName: string;
}

export type ProjectCategory = 'all' | 'ai-ml' | 'web' | 'mobile' | 'systems';

export interface ProjectLink {
  label: string;
  url: string;
  type: 'live' | 'github' | 'github-android' | 'github-windows' | 'internal';
}

export interface Project {
  id: string;
  title: string;
  badge: string;
  category: ProjectCategory[];
  summary: string;
  description: string;
  technologies: string[];
  coverImage: string;
  links: ProjectLink[];
  role?: string;
  status?: string;
  keyFeatures?: string[];
  screenshots?: { src: string; caption: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; icon?: string }[];
}

export interface CompanyItem {
  id: string;
  name: string;
  type: 'founder' | 'organization';
  badge: string;
  role: string;
  websiteUrl: string;
  displayUrl: string;
  tagline: string;
  description: string;
  logo: string;
  highlights: string[];
  technologies?: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  badge?: string;
  period?: string;
  description: string;
  highlights?: string[];
  websiteUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  location?: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  location?: string;
  description?: string;
}

export interface AchievementItem {
  title: string;
  organization?: string;
  description: string;
  type: 'award' | 'activity' | 'session' | 'competition';
}
