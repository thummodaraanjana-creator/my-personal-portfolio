export type ProjectStatus = "Completed" | "In Progress";
export type ProjectArtworkType =
  | "microgreen"
  | "space-shooter"
  | "business-guidance"
  | "breakout";

export interface ProjectFeatureGroup {
  title: string;
  items: string[];
}

export interface ProjectMediaImage {
  src: string;
  alt: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  description: string;
  technologies: string[];
  artwork: ProjectArtworkType;
  overview: string;
  problem: string;
  objective: string;
  role?: string;
  contributions: string[];
  featureGroups: ProjectFeatureGroup[];
  technologyNote?: string;
  mediaHeading: string;
  mediaDescription: string;
  mediaItems: Array<string | ProjectMediaImage>;
  hasRepositoryPlaceholder?: boolean;
}

export const projects: PortfolioProject[] = [
  {
    slug: "microgreen",
    title: "Automated Microgreen System",
    category: "Hardware / IoT / Automation",
    status: "Completed",
    description:
      "A first-year university hardware project exploring how electronic components and automation can support the microgreen growing process.",
    technologies: ["Electronic components", "Hardware integration", "Automation"],
    artwork: "microgreen",
    overview:
      "As a first-year university hardware project, this work focused on developing an automated microgreen growing system that uses electronic components and automation to support the growing process.",
    problem:
      "Growing microgreens involves a number of repeated care tasks. This project explored how a hardware-based system could support parts of that process.",
    objective:
      "Design and develop an automated growing system while exploring practical applications of technology in agriculture.",
    contributions: [
      "Worked on designing and developing the automated growing system.",
      "Worked with electronic components and hardware integration.",
      "Contributed to automating the growing process.",
      "Explored practical applications of technology in agriculture.",
    ],
    featureGroups: [],
    technologyNote:
      "Specific component names and models were not included in the project information and are intentionally not listed.",
    mediaHeading: "Project images",
    mediaDescription:
      "Project photos can be added here. The frames below are placeholders, not photographs of the system.",
    mediaItems: ["Growing system", "Hardware setup", "Growing process"],
  },
  {
    slug: "space-shooter",
    title: "Space Shooter 2D",
    category: "Game Development",
    status: "Completed",
    description:
      "A completed 2D Space Shooter game developed using Unity and C#, featuring player movement, laser shooting, and interactive gameplay.",
    technologies: ["Unity", "C#", "Visual Studio"],
    artwork: "space-shooter",
    overview:
      "Space Shooter 2D is a completed game development project built using Unity and C#. Through this project, I explored core game development concepts and implemented interactive gameplay mechanics.",
    problem:
      "This is a personal learning project rather than a solution to a stated external problem. It gives me a place to practice interactive 2D game development.",
    objective:
      "Develop a fully playable 2D space shooter while learning Unity workflows, player controls, and game-object interactions.",
    contributions: [
      "Implemented player movement.",
      "Developed laser shooting mechanics.",
      "Worked on player boundaries and movement controls.",
      "Practised game object creation and interaction using Unity.",
    ],
    featureGroups: [
      {
        title: "Gameplay work so far",
        items: [
          "Player movement and movement controls",
          "Player boundary handling",
          "Laser shooting mechanics",
        ],
      },
    ],
    mediaHeading: "Gameplay screenshots",
    mediaDescription:
      "Screenshots from the completed Space Shooter 2D game, including its main menu and in-game action.",
    mediaItems: [
      {
        src: "/images/projects/space-shooter-1.png",
        alt: "Space Shooter 2D main menu with Play and Quit buttons over a starfield and spacecraft.",
      },
      {
        src: "/images/projects/space-shooter-2.png",
        alt: "Player spacecraft facing a large explosion during gameplay, with the score and shield indicator visible.",
      },
      {
        src: "/images/projects/space-shooter-3.png",
        alt: "Player spacecraft beneath a bright explosion in the starfield, with the score displayed.",
      },
      {
        src: "/images/projects/space-shooter-4.png",
        alt: "Game over screen with Restart and Main Menu buttons over an explosion-filled space battle.",
      },
      {
        src: "/images/projects/space-shooter-5.png",
        alt: "Player spacecraft launching with bright rocket exhaust against a starfield, with the score displayed.",
      },
    ],
    hasRepositoryPlaceholder: true,
  },
  {
    slug: "business-guidance",
    title: "Startup Business Planning and Guidance Platform",
    category: "Full-Stack Development / Software Engineering",
    status: "In Progress",
    description:
      "A university group project designed to help early-stage Sri Lankan entrepreneurs plan and organize their businesses.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    artwork: "business-guidance",
    overview:
      "This in-progress university group project is designed to help early-stage Sri Lankan entrepreneurs plan and organize their businesses. The platform covers multiple planning areas; my work is focused on the Organization and Infrastructure Planning Module.",
    problem:
      "Early-stage entrepreneurs need to organize the people, roles, skills, infrastructure, and equipment involved in starting a business.",
    objective:
      "As a group, we are designing a platform to support business planning and guidance for early-stage Sri Lankan entrepreneurs.",
    role:
      "My specific responsibility is the Organization and Infrastructure Planning Module. The platform is a group project, and the contributions below describe my area of work rather than the entire system.",
    contributions: [
      "Worked on organization planning.",
      "Designed team member and business role management concepts.",
      "Worked on identifying missing roles and skill gaps.",
      "Developed infrastructure and equipment planning concepts.",
      "Worked on equipment cost estimation and total cost calculations.",
      "Contributed to system design, diagrams, and UI implementation.",
    ],
    featureGroups: [
      {
        title: "Organization planning",
        items: [
          "Team member and business role management concepts",
          "Identifying missing roles and skill gaps",
        ],
      },
      {
        title: "Infrastructure and equipment planning",
        items: [
          "Infrastructure and equipment planning concepts",
          "Equipment cost estimation",
          "Total cost calculations",
        ],
      },
    ],
    mediaHeading: "Screenshots and diagrams",
    mediaDescription:
      "Screenshots and diagrams from the project can be added here. These frames are placeholders, not project captures.",
    mediaItems: [
      "Organization planning",
      "Infrastructure planning",
      "System diagrams",
    ],
    hasRepositoryPlaceholder: true,
  },
  {
    slug: "breakout",
    title: "Breakout",
    category: "Game Development",
    status: "In Progress",
    description:
      "A 2D arcade-style Breakout game currently under development using Unity and C#. Inspired by classic brick-breaking arcade games, the project focuses on implementing interactive gameplay mechanics.",
    technologies: ["Unity 2D", "C#", "Visual Studio"],
    artwork: "breakout",
    overview:
      "Breakout is a personal game development project inspired by classic Arkanoid and Breakout games. I am developing it using Unity and C#, exploring 2D physics, player controls, collision detection, and gameplay mechanics.",
    problem:
      "This is a personal learning project focused on understanding and practising 2D game development concepts using Unity.",
    objective:
      "Develop a playable 2D Breakout game while improving my knowledge of Unity game development, physics, collision detection, and gameplay programming.",
    contributions: [
      "Created and configured the Unity 2D project.",
      "Imported and organized game assets.",
      "Set up the game environment.",
      "Started implementing player controls and paddle movement.",
      "Working towards implementing ball movement and bouncing mechanics.",
      "Planning brick destruction and core gameplay interactions.",
    ],
    featureGroups: [
      {
        title: "Development Progress",
        items: [
          "Unity 2D project setup",
          "Game asset integration",
          "Player and paddle controller development",
          "Core gameplay mechanics under development",
        ],
      },
    ],
    mediaHeading: "Gameplay Screenshots",
    mediaDescription:
      "Gameplay screenshots and development progress will be added as the game continues to develop.",
    mediaItems: ["Game environment", "Player paddle", "Gameplay progress"],
  },
];
