export type ChatbotDomain = "AGRICULTURE" | "FOOTBALL" | "GENERAL";

export interface Message {
  id: string;
  content: string;
  author: "user" | "bot";
  timestamp: Date;
}

export interface DevisFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  domain: string;
  budget?: string;
  deadline?: string;
  message?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description?: string;
  image?: string;
  domain: string;
  technologies: string[];
  url?: string;
  date: string;
  featured: boolean;
}