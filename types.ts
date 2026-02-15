
export enum Difficulty {
  Easy = "基础",
  Medium = "进阶",
  Hard = "困难",
  Critical = "核心考点"
}

export interface ContentSection {
  subtitle?: string; // Optional sub-heading within a card
  text: string; // Can contain LaTeX wrapped in $$...$$ or $...$
  list?: string[]; // Bullet points
  table?: {
    headers: string[];
    rows: string[][];
  }; // Table data
}

export interface KeyPoint {
  title: string;
  sections: ContentSection[];
  tags?: string[];
  important?: boolean; // Highlights the card visually
  image?: string; // Image path
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  difficulty: Difficulty;
  summary: string;
  keyPoints: KeyPoint[];
  examTips?: string[];
}

export interface ExamDistribution {
  name: string;
  value: number;
  color: string;
}

// --- Quiz Types ---

export type QuestionType = 'single' | 'multi' | 'judgment' | 'short';

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options?: string[]; // For single/multi
  correctAnswer?: string | string[]; // "A", "ABC", or text for display
  analysis: string;
}

export interface QuizPart {
  title: string; // e.g. "一、单选题"
  questions: Question[];
}

export interface QuizChapter {
  id: string;
  title: string;
  parts: QuizPart[];
}
