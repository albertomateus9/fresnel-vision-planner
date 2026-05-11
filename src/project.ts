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
  "title": "Planejador Visual de Enlaces e Zona de Fresnel",
  "description": "Ferramenta local para planejar enlaces radio/opticos, estimar linha de visada e avaliar risco de obstrucao.",
  "topics": [
    "telecommunications",
    "fresnel-zone",
    "link-planning",
    "computer-vision",
    "react",
    "vite",
    "typescript",
    "telecomunicacoes",
    "visao-computacional",
    "planejamento-de-enlaces",
    "github-pages",
    "portugues-brasil",
    "educacao-tecnologica"
  ],
  "deploy": true,
  "tagline": "Planejamento visual de linha de visada, zona de Fresnel e risco de obstrucao para enlaces de baixo custo.",
  "type": "fresnel",
  "accent": "#2f6f73",
  "secondary": "#7a5c2e"
};
