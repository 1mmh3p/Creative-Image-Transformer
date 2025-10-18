import React from 'react';

export type ToolId = 
  | 'beforeAfter'
  | 'featureAnalysis'
  | 'cartoonizer'
  | 'worldTraveler'
  | 'personalityQuiz'
  | 'mirrorEffect'
  | 'futureSelf'
  | 'greetingCard'
  | 'childhoodMemories'
  | 'animeMyFace'
  | 'futureSelfQuiz'
  | 'animalTwin'
  | 'moodCard'
  | 'fameMeter'
  | 'brainMeter';

export interface ImageFile {
  base64: string;
  mimeType: string;
}

export interface Tool {
  id: ToolId;
  nameKey: string;
  descriptionKey: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  component: React.FC<{ tool: Tool; onBack: () => void }>;
  category: 'image' | 'quiz';
}