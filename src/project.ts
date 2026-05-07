export type ProjectType = 'fresnel' | 'ocr' | 'colors' | 'gesture' | 'occupancy' | 'depth' | 'benchmark' | 'telemetry';

export type ProjectConfig = {
  slug: string;
  title: string;
  tagline: string;
  type: ProjectType;
  deploy: boolean;
  topics: string[];
  description: string;
  accent: string;
  secondary: string;
};

export const project: ProjectConfig = {
  "slug": "fresnel-vision-planner",
  "title": "Fresnel Vision Planner",
  "tagline": "Visual line-of-sight and Fresnel-zone risk planner for low-cost wireless and optical links.",
  "type": "fresnel",
  "deploy": true,
  "topics": [
    "telecommunications",
    "fresnel-zone",
    "link-planning",
    "computer-vision",
    "react",
    "vite",
    "typescript"
  ],
  "description": "Visual line-of-sight and Fresnel-zone risk planner for low-cost wireless and optical links.",
  "accent": "#2f6f73",
  "secondary": "#7a5c2e"
};
