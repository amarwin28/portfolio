import type { CompanyItem } from '../types/portfolio';

export const companies: CompanyItem[] = [
  {
    id: 'weboclypse',
    name: 'WEBOCLYPSE',
    type: 'founder',
    badge: 'Founder',
    role: 'Founder',
    websiteUrl: 'https://www.weboclypse.site/',
    displayUrl: 'weboclypse.site',
    tagline: 'Learn. Build. Demonstrate. Lead. Grow.',
    description:
      'WEBOCLYPSE bridges the gap between academic education and practical technology skills. An initiative focused on hands-on software development, AI tools, project engineering, and technical leadership.',
    logo: '/images/companies/weboclypse-logo.png',
    highlights: [
      'Hands-on technical mentorship in AI, modern web development, and coding',
      'Real-world project development and GitHub portfolio creation',
      'Bridging academic curricula with practical engineering capabilities',
      'Fostering student initiative, technical problem-solving, and leadership',
    ],
    technologies: [
      'AI Tools',
      'Web Development',
      'Project Building',
      'GitHub Workflows',
      'Student Mentorship',
    ],
  },
  {
    id: 'kromaxzon',
    name: 'Kromaxzon Technologies',
    type: 'organization',
    badge: 'Media & Growth Head',
    role: 'Media & Growth Head',
    websiteUrl: 'https://kromaxzon.in/',
    displayUrl: 'kromaxzon.in',
    tagline: 'Build • Innovate • Scale',
    description:
      'Kromaxzon Technologies delivers scalable enterprise software, intelligent digital solutions, AI platforms, and cloud systems that empower businesses to innovate and operate reliably.',
    logo: '/images/companies/kromaxzon-logo.png',
    highlights: [
      'Enterprise software engineering and custom digital solutions',
      'Scalable cloud infrastructure and AI platform integrations',
      'Digital transformation for modern organizations',
      'Media outreach, digital brand management, and product growth',
    ],
    technologies: [
      'Enterprise Software',
      'AI Platforms',
      'Cloud Architecture',
      'Digital Systems',
      'Media & Growth',
    ],
  },
  {
    id: 'codevstudio',
    name: 'codeVstudio',
    type: 'organization',
    badge: 'Member',
    role: 'Member',
    websiteUrl: 'https://codevstudio.in/',
    displayUrl: 'codevstudio.in',
    tagline: 'Digital Product Development & Engineering Studio',
    description:
      'codeVstudio is a digital development startup crafting high-impact web applications, scalable digital products, and custom software solutions that drive growth.',
    logo: '/images/companies/codevstudio-logo.png',
    highlights: [
      'Modern web application and digital product development',
      'Collaborative engineering, component architecture, and UI delivery',
      'Performance-focused web interfaces and production deployments',
      'Active contributing member on software delivery and frontend design',
    ],
    technologies: [
      'Web Development',
      'UI Engineering',
      'Digital Products',
      'Collaborative Coding',
      'Software Architecture',
    ],
  },
];
