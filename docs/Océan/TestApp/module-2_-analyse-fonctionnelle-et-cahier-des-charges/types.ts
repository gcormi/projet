
import React from 'react';

export interface ContentItem {
  type: 'paragraph' | 'list' | 'image';
  text?: string;
  items?: string[];
  src?: string;
  alt?: string;
}

export interface ExampleItem {
  title: string;
  description: string;
  items: string[];
  image?: string;
}

export interface FocusPoint {
  title: string;
  content: string;
}

export interface SectionData {
  id: string;
  title: string;
  icon?: React.ReactNode;
  content: ContentItem[];
  examples?: ExampleItem[];
  focusPoint?: FocusPoint;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
  correctAnswerId: string;
  feedback: string;
}
