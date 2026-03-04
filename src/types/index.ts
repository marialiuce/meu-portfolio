import type { ReactNode } from "react";

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string | string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  linkGithub?: string;
  linkLive?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Hobby {
  id: number;
  icon: ReactNode;
  label: string;
  position: string;
  delay: number;
}