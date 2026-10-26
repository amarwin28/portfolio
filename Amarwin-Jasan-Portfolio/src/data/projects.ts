/**
 * Project data — the single source of truth for every project link.
 * No URLs are hard-coded in components.
 *
 *  WEBSITE projects  -> one "Visit Website" button  (websiteUrl)
 *  APP projects      -> "View" (detail overlay) + "Download" (GitHub only)
 *
 * Cover images live in /public/projects/<id>/cover.png. App screenshots go in
 * /public/projects/aj-controller/screenshots/ and /public/projects/jarvis/{windows,android}/ and are listed
 * in `screenshots` below. Features are intentionally empty until real ones are
 * supplied: add strings to `features` and the section appears automatically.
 */

export type ProjectKind = 'personal' | 'team';
/** website = Visit Website only; app = View + Download; other = preserved original card behaviour. */
export type ProjectType = 'website' | 'app' | 'other';

export interface Screenshot {
  src: string;
  /** Accessible description of what the screenshot shows. */
  alt: string;
  /** Short visible label shown under the thumbnail and in the lightbox. */
  caption: string;
}

export interface ScreenshotGroup {
  id: string;
  label: string;
  /** Frame shape used by the gallery so the original aspect ratio is preserved. */
  orientation: 'landscape' | 'portrait';
  /** CSS aspect-ratio of the source images, e.g. "16 / 10". */
  aspect: string;
  images: Screenshot[];
}

export interface DownloadOption {
  id: string;
  label: string;
  githubUrl: string;
}

export interface HowToGroup {
  /** Sub-heading such as "For Windows". Omit for a single flow. */
  label?: string;
  /** Each step is a title line plus detail lines. `backticks` render as code. */
  steps: Array<{ title: string; lines: string[] }>;
}

export interface Project {
  id: string;
  title: string;
  kind: ProjectKind;
  type: ProjectType;
  tagline: string;
  description: string;
  technologies: string[];
  /** Real cover image. Drop the file at this path; nothing else needs to change. */
  coverImage: string;
  /** Shown only until the real cover image exists at coverImage. */
  placeholderImage: string;
  /** Only set when a real deployed URL exists. */
  websiteUrl?: string;
  /** Button label for websiteUrl (defaults to "Visit Website"). */
  websiteLabel?: string;
  /** App projects only. One option -> opens directly; several -> selector. */
  downloads?: DownloadOption[];
  /** App projects only — shown inside the View experience. */
  features?: string[];
  screenshots?: ScreenshotGroup[];
  howTo?: { title: string; groups: HowToGroup[] };
}

export const projects: Project[] = [
  {
    id: 'jas-traders',
    title: 'JAS Traders Website',
    kind: 'personal',
    type: 'website',
    tagline: 'Website for a paper-bag manufacturer',
    description: 'A professional website for JAS Traders, a paper-bag production company.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    coverImage: '/projects/jas-traders/cover.png',
    placeholderImage: '/projects/jas-traders/placeholder.svg',
    websiteUrl: 'https://jas-traders-23.vercel.app/',
  },
  {
    id: 'aj-controller',
    title: 'AJ Controller',
    kind: 'personal',
    type: 'app',
    tagline: 'Bluetooth PC controller',
    description:
      'A Flutter-based Bluetooth PC controller that turns your phone into a remote for your computer.',
    technologies: ['Flutter', 'Dart', 'Bluetooth', 'HTML', 'CSS', 'JavaScript', 'React', 'Express.js'],
    coverImage: '/projects/aj-controller/cover.png',
    placeholderImage: '/projects/aj-controller/placeholder.svg',
    features: [],
    screenshots: [
      {
        id: 'app',
        label: 'Application screenshots',
        orientation: 'landscape',
        aspect: '20 / 9',
        images: [
          {
            src: '/projects/aj-controller/screenshots/01-splash.jpg',
            caption: 'Splash screen',
            alt: 'AJ Controller splash screen showing the AJ app logo',
          },
          {
            src: '/projects/aj-controller/screenshots/02-pc-controller-gamepad.jpg',
            caption: 'PC Controller — Gamepad mode',
            alt: 'AJ Controller main screen with Gamepad and Racing mode tabs, Gamepad selected, and a Bluetooth button',
          },
          {
            src: '/projects/aj-controller/screenshots/03-pc-controller-racing.jpg',
            caption: 'PC Controller — Racing mode',
            alt: 'AJ Controller main screen with the Racing tab selected and a preview of the racing simulator layout',
          },
          {
            src: '/projects/aj-controller/screenshots/04-gamepad-layout.jpg',
            caption: 'Gamepad layout',
            alt: 'Full-screen gamepad layout with D-pad, shoulder and trigger buttons, two thumbsticks, A B X Y buttons, Create, Touchpad and Options',
          },
          {
            src: '/projects/aj-controller/screenshots/05-racing-simulator.jpg',
            caption: 'Racing simulator',
            alt: 'Full-screen racing simulator with a steering wheel, gear selector, brake and throttle controls',
          },
          {
            src: '/projects/aj-controller/screenshots/06-bluetooth-disabled.jpg',
            caption: 'Bluetooth — PC connection',
            alt: 'Bluetooth screen showing that Bluetooth is disabled and no devices were found',
          },
          {
            src: '/projects/aj-controller/screenshots/07-bluetooth-devices.jpg',
            caption: 'Bluetooth — device list',
            alt: 'Bluetooth screen with Bluetooth enabled and a device list with a Connect button',
          },
        ],
      },
    ],
    downloads: [{ id: 'github', label: 'GitHub', githubUrl: 'https://github.com/amarwin28/AJ-CONTOLLER' }],
    howTo: {
      title: 'How to download & install',
      groups: [
        {
          steps: [
            { title: 'Step 1', lines: ['Click the green `<> Code` button on GitHub.', 'Then click `Download ZIP`.'] },
            { title: 'Step 2', lines: ['Extract the downloaded ZIP folder.', 'You will find the APK inside.'] },
            {
              title: 'Step 3',
              lines: ['Transfer/open the APK on your Android phone and install it.', 'Then launch the app and enjoy.'],
            },
          ],
        },
      ],
    },
  },
  {
    id: 'jarvis',
    title: 'JARVIS',
    kind: 'personal',
    type: 'app',
    tagline: 'Mobile-first AI assistant',
    description:
      'A mobile-first AI assistant with tasks, alarms and assistant functionality, built to keep your day organised.',
    technologies: ['Flutter', 'Dart', 'SharedPreferences', 'Local Notifications', 'Timezone scheduling'],
    coverImage: '/projects/jarvis/cover.png',
    placeholderImage: '/projects/jarvis/placeholder.svg',
    features: [],
    screenshots: [
      {
        id: 'windows',
        label: 'JARVIS for Windows',
        orientation: 'landscape',
        aspect: '16 / 10',
        images: [
          {
            src: '/projects/jarvis/windows/01-assistant.png',
            caption: 'Assistant',
            alt: 'JARVIS for Windows assistant home with a greeting, quick actions for opening YouTube, creating a task, setting an alarm and system controls, and a prompt bar',
          },
          {
            src: '/projects/jarvis/windows/02-tasks.png',
            caption: 'Tasks',
            alt: 'JARVIS for Windows Tasks screen with pending and completed task lists and a New Task button',
          },
          {
            src: '/projects/jarvis/windows/03-alarms.png',
            caption: 'Alarms',
            alt: 'JARVIS for Windows Alarms screen with an alarm list, an on/off toggle and a New Alarm button',
          },
          {
            src: '/projects/jarvis/windows/04-memory.png',
            caption: 'Memory',
            alt: 'JARVIS for Windows Memory screen with Remember something and What do you remember actions',
          },
          {
            src: '/projects/jarvis/windows/05-settings.png',
            caption: 'Settings',
            alt: 'JARVIS for Windows Settings screen with system controls, the activation hotkey, profile and background options',
          },
          {
            src: '/projects/jarvis/windows/06-arc-reactor-listening.png',
            caption: 'Arc Reactor — Listening',
            alt: 'JARVIS Arc Reactor voice panel in the Listening state',
          },
          {
            src: '/projects/jarvis/windows/07-arc-reactor-processing.png',
            caption: 'Arc Reactor — Processing',
            alt: 'JARVIS Arc Reactor voice panel in the Processing state',
          },
        ],
      },
      {
        id: 'android',
        label: 'JARVIS for Android',
        orientation: 'portrait',
        aspect: '9 / 20',
        images: [
          {
            src: '/projects/jarvis/android/01-splash.jpg',
            caption: 'Splash screen',
            alt: 'JARVIS for Android splash screen with the JARVIS logo',
          },
          {
            src: '/projects/jarvis/android/02-home.jpg',
            caption: 'Home',
            alt: 'JARVIS for Android home screen with a greeting, a Talk to JARVIS button and a Today overview of active tasks and alarms',
          },
          {
            src: '/projects/jarvis/android/03-tasks.jpg',
            caption: 'Tasks',
            alt: 'JARVIS for Android Tasks screen with active and completed task lists',
          },
          {
            src: '/projects/jarvis/android/04-alarms.jpg',
            caption: 'Alarms',
            alt: 'JARVIS for Android Alarms screen with an alarm toggle and an add-alarm button',
          },
          {
            src: '/projects/jarvis/android/05-assistant.jpg',
            caption: 'Assistant',
            alt: 'JARVIS for Android Assistant screen with a Start voice mode button',
          },
          {
            src: '/projects/jarvis/android/06-voice-listening.jpg',
            caption: 'Voice mode — Listening',
            alt: 'JARVIS for Android voice mode in the Listening state',
          },
          {
            src: '/projects/jarvis/android/07-voice-thinking.jpg',
            caption: 'Voice mode — Thinking',
            alt: 'JARVIS for Android voice mode in the Thinking state',
          },
          {
            src: '/projects/jarvis/android/08-settings-account-voice.jpg',
            caption: 'Settings — Account & Voice',
            alt: 'JARVIS for Android Settings with optional account sign-in, Volume Up activation, Shake to activate, shake sensitivity and microphone permission',
          },
          {
            src: '/projects/jarvis/android/09-settings-contacts-notifications.jpg',
            caption: 'Settings — Contacts & Notifications',
            alt: 'JARVIS for Android Settings scrolled to the contact number fields and notification permission',
          },
          {
            src: '/projects/jarvis/android/10-settings-sync-about.jpg',
            caption: 'Settings — Sync & About',
            alt: 'JARVIS for Android Settings scrolled to cloud sync status, the app version and a first-time setup option',
          },
        ],
      },
    ],
    downloads: [
      { id: 'windows', label: 'Windows', githubUrl: 'https://github.com/amarwin28/JARVIS-WINDOWS' },
      { id: 'android', label: 'Android', githubUrl: 'https://github.com/amarwin28/JARVIS-ANDROID' },
    ],
    howTo: {
      title: 'How to download & use',
      groups: [
        {
          label: 'For Windows',
          steps: [
            { title: 'Step 1', lines: ['Click the green `<> Code` button.', 'Click `Download ZIP`.'] },
            { title: 'Step 2', lines: ['Extract the ZIP folder.', 'You will find the `Release` folder.'] },
            { title: 'Step 3', lines: ['Open the `Release` folder.', 'Click `JARVIS Setup`.'] },
            { title: 'Step 4', lines: ['Select `For Me`.', 'Then click `Apply` / `OK`.'] },
            { title: 'Step 5', lines: ['Run JARVIS and enjoy.'] },
          ],
        },
        {
          label: 'For Android',
          steps: [
            { title: 'Step 1', lines: ['Click the green `<> Code` button.', 'Click `Download ZIP`.'] },
            { title: 'Step 2', lines: ['Extract the downloaded ZIP folder.', 'You will find the APK inside.'] },
            { title: 'Step 3', lines: ['Install the APK on your Android device.', 'Launch JARVIS and enjoy.'] },
          ],
        },
      ],
    },
  },
  {
    id: 'loanlens-ai',
    title: 'LoanLens AI',
    kind: 'personal',
    type: 'website',
    tagline: 'Loan assessment & decision support',
    description:
      'An AI-powered loan assessment and decision-support application with an immersive 3D interface.',
    technologies: ['React', 'TypeScript', 'Vite', 'Three.js', 'React Three Fiber'],
    coverImage: '/projects/loanlens-ai/cover.png',
    placeholderImage: '/projects/loanlens-ai/placeholder.svg',
    websiteUrl: 'https://loanlens-ai-beta.vercel.app/',
  },
  {
    id: 'skillgap-ai',
    title: 'SkillGap AI',
    kind: 'personal',
    type: 'other',
    tagline: 'Offline resume skill-gap analyzer',
    description: 'An offline Java desktop application that analyzes a resume and highlights skill gaps.',
    technologies: ['Java', 'JDK 21', 'AWT'],
    coverImage: '/projects/skillgap-ai/cover.png',
    placeholderImage: '/projects/skillgap-ai/placeholder.svg',
  },
  {
    id: 'feedguard-ai',
    title: 'FeedGuard AI',
    kind: 'team',
    type: 'website',
    tagline: 'Feed quality screening & advice',
    description: 'An AI-powered food and feed quality screening and advisory system.',
    technologies: ['React', 'Vite', 'FastAPI', 'PostgreSQL', 'Machine Learning'],
    coverImage: '/projects/feedguard-ai/cover.png',
    placeholderImage: '/projects/feedguard-ai/placeholder.svg',
    websiteUrl: 'https://feedguard.vercel.app/',
  },
  {
    id: 'dc-outpass',
    title: 'DC Outpass',
    kind: 'team',
    type: 'other',
    tagline: 'Digital outpass for campus',
    description: 'A digital outpass project built for Dhaanish Chennai College.',
    technologies: [],
    coverImage: '/projects/dc-outpass/cover.png',
    placeholderImage: '/projects/dc-outpass/placeholder.svg',
  },
  {
    id: 'codevstudio',
    title: 'CodeVstudio',
    kind: 'team',
    type: 'other',
    tagline: 'Digital development initiative',
    description: 'A digital development initiative building websites, apps and AI products, of which Amarwin Jasan is a member.',
    technologies: [],
    coverImage: '/projects/codevstudio/cover.png',
    placeholderImage: '/projects/codevstudio/placeholder.svg',
  },
  {
    id: 'nanospark',
    title: 'NanoSpark Web Designing',
    kind: 'team',
    type: 'other',
    tagline: 'Collaborative web studio',
    description: 'A collaborative web-development and startup project.',
    technologies: [],
    coverImage: '/projects/nanospark/cover.png',
    placeholderImage: '/projects/nanospark/placeholder.svg',
  },
];
