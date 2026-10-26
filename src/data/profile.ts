import type {
  Profile,
  HeroStat,
  NavItem,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  AchievementItem,
} from '../types/portfolio';

export const profile: Profile = {
  name: 'Amarwin Jasan',
  firstName: 'Amarwin',
  lastName: 'Jasan',
  title: 'Computer Science Engineering Student',
  tagline: 'Computer Science Student • Founder of WEBOCLYPSE • Media & Growth Head at Kromaxzon Technologies',
  roles: [
    'Computer Science Engineering Student',
    'Founder of WEBOCLYPSE',
    'Media & Growth Head at Kromaxzon Technologies',
  ],
  introduction:
    'I build practical software products, web applications, and AI-focused solutions with a focus on clean architecture and reliable execution.',
  aboutText:
    'Computer Science Engineering student at Dhaanish Chennai College of Engineering specializing in software development, AI applications, and product building. Experienced across web, mobile, and desktop environments, with a focus on delivering practical, well-engineered solutions.',
  email: 'amarwin2007@gmail.com',
  phone: '+91 99945 96987',
  phoneHref: 'tel:+919994596987',
  location: 'Kanyakumari, India',
  github: 'https://github.com/amarwin28',
  linkedin: 'https://www.linkedin.com/in/amarwin-jasan/',
  resumeUrl: '/resume.pdf',
  portraitUrl: '/images/profile/amarwin-portrait.png',
};

export const heroStats: HeroStat[] = [
  { value: '8', label: 'Projects Built', sublabel: 'Web, Mobile & AI' },
  { value: '8.8', label: 'CGPA', sublabel: 'Dhaanish Chennai College' },
  { value: '1', label: 'Internship', sublabel: 'Flutter Development' },
  { value: '5', label: 'Certifications', sublabel: 'Programming & Mobile' },
];

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', iconName: 'Home' },
  { id: 'companies', label: 'Companies', iconName: 'Building2' },
  { id: 'projects', label: 'Projects', iconName: 'FolderGit2' },
  { id: 'about', label: 'About', iconName: 'User' },
  { id: 'skills', label: 'Skills', iconName: 'Cpu' },
  { id: 'experience', label: 'Experience', iconName: 'Briefcase' },
  { id: 'education', label: 'Education', iconName: 'GraduationCap' },
  { id: 'achievements', label: 'Achievements', iconName: 'Award' },
  { id: 'contact', label: 'Contact', iconName: 'Mail' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Languages used for core algorithms and application development.',
    skills: [
      { name: 'Java' },
      { name: 'C' },
      { name: 'C++' },
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Dart' },
    ],
  },
  {
    title: 'Frontend & Mobile',
    description: 'Modern user interface frameworks for web and mobile platforms.',
    skills: [
      { name: 'React' },
      { name: 'Flutter' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Server runtime environments and API development.',
    skills: [
      { name: 'Express.js' },
      { name: 'REST APIs' },
    ],
  },
  {
    title: 'Tools & Workflow',
    description: 'Version control, development tooling, and cloud hosting.',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Vercel' },
      { name: 'codeVstudio (Member)' },
    ],
  },
  {
    title: 'Core Competencies',
    description: 'Foundational problem solving and collaborative engineering.',
    skills: [
      { name: 'Problem Solving' },
      { name: 'Software Development' },
      { name: 'Team Collaboration' },
      { name: 'Product Building' },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Founder',
    organization: 'WEBOCLYPSE',
    badge: 'Founder',
    description:
      'Founded and lead WEBOCLYPSE, an initiative helping students develop real-world technical skills in AI tools, programming, project building, and GitHub collaboration.',
    highlights: [
      'Mentoring students in hands-on development and AI tools.',
      'Guiding end-to-end project deployment and open-source workflows.',
    ],
    websiteUrl: 'https://www.weboclypse.site/',
  },
  {
    role: 'Media & Growth Head',
    organization: 'Kromaxzon Technologies',
    badge: 'Media & Growth Head',
    description:
      'Directing media strategy, digital communication, and growth outreach at Kromaxzon Technologies, an enterprise software and AI solutions company.',
    highlights: [
      'Leading growth initiatives and brand outreach.',
      'Aligning technical messaging with product expansion goals.',
    ],
    websiteUrl: 'https://kromaxzon.in/',
  },
  {
    role: 'Flutter App Development Intern',
    organization: 'IT Boundaries',
    badge: 'Internship',
    period: 'Completed',
    description:
      'Completed practical mobile application development using Flutter and the Dart ecosystem.',
    highlights: [
      'Built responsive mobile user interfaces and state management.',
      'Integrated device APIs and cross-platform components.',
    ],
  },
  {
    role: 'Member',
    organization: 'codeVstudio',
    badge: 'Member',
    description:
      'Contributing member collaborating on web applications, software design, and digital solutions.',
    highlights: [
      'Collaborated on modern web and frontend components.',
      'Participated in code reviews and architecture planning.',
    ],
    websiteUrl: 'https://codevstudio.in',
  },
];

export const education: EducationItem[] = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Dhaanish Chennai College of Engineering',
    period: '2025 – Present',
    score: 'CGPA 8.8',
    details: 'Currently in 2nd Year. Focus on software systems, data structures, algorithms, and AI solutions.',
  },
  {
    degree: 'Higher Secondary Education (12th)',
    institution: 'Maria Rafols Matriculation School',
    period: '2024 – 2025',
    score: '84%',
    location: 'Puthoor, Kanyakumari District',
    details: 'Mathematics, Physics, Chemistry, and Computer Science foundation.',
  },
  {
    degree: 'Secondary School Leaving Certificate (10th)',
    institution: 'Maria Rafols Matriculation School',
    period: '2022 – 2023',
    score: '76%',
    location: 'Puthoor, Kanyakumari District',
    details: 'Secondary school education.',
  },
];

export const certifications: CertificationItem[] = [
  {
    title: 'Mobile App Development using Flutter',
    issuer: 'IT Boundaries',
    description: 'Hands-on training and project implementation with Flutter and Dart for cross-platform applications.',
  },
  {
    title: 'Programming in Java, C++, C and Python',
    issuer: 'CSC Education',
    location: 'Thingal Nagar, Kanyakumari District',
    description: 'Comprehensive certification covering object-oriented programming, data structures, and algorithmic logic.',
  },
];

export const achievements: AchievementItem[] = [
  {
    title: 'Winner — Prompt Wars',
    organization: 'SRM Easwari College',
    description: 'Awarded 1st place in Prompt Wars competition at the inter-collegiate symposium.',
    type: 'award',
  },
  {
    title: 'School Visit & AI Awareness Session',
    organization: 'Community Outreach',
    description: 'Delivered an interactive AI awareness and technology orientation session for school students.',
    type: 'session',
  },
  {
    title: 'Game Development Session for 1st-Year Students',
    organization: 'Dhaanish Chennai College of Engineering',
    description: 'Conducted a programming and game development workshop mentoring first-year engineering students.',
    type: 'session',
  },
  {
    title: 'Hackathons & Symposiums Participation',
    organization: 'Inter-Collegiate & State Level',
    description: 'Participated in multiple technical symposiums, college hackathons, and state-level engineering events.',
    type: 'competition',
  },
];
