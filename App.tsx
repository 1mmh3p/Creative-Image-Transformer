import React, { useState, useEffect } from 'react';
import type { Tool } from './types';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ToolSelector from './components/ToolSelector';
import { LocalizationProvider, useLocalization } from './context/LocalizationContext';

// Tool Imports
import BeforeAfterTool from './tools/BeforeAfterTool';
import FeatureAnalysisTool from './tools/FeatureAnalysisTool';
import CartoonizerTool from './tools/CartoonizerTool';
import WorldTravelerTool from './tools/WorldTravelerTool';
import PersonalityQuizTool from './tools/PersonalityQuizTool';
import MirrorEffectTool from './tools/MirrorEffectTool';
import FutureSelfTool from './tools/FutureSelfTool';
import GreetingCardTool from './tools/GreetingCardTool';
import ChildhoodMemoriesTool from './tools/ChildhoodMemoriesTool';
import AnimeMyFaceTool from './tools/AnimeMyFaceTool';
import FutureSelfQuizTool from './tools/FutureSelfQuizTool';
import AnimalTwinTool from './tools/AnimalTwinTool';
import MoodCardTool from './tools/MoodCardTool';
import FameMeterTool from './tools/FameMeterTool';
import BrainMeterTool from './tools/BrainMeterTool';


const toolComponentMap: { [key: string]: React.FC<{ tool: Tool; onBack: () => void }> } = {
  beforeAfter: BeforeAfterTool,
  featureAnalysis: FeatureAnalysisTool,
  cartoonizer: CartoonizerTool,
  worldTraveler: WorldTravelerTool,
  personalityQuiz: PersonalityQuizTool,
  mirrorEffect: MirrorEffectTool,
  futureSelf: FutureSelfTool,
  greetingCard: GreetingCardTool,
  childhoodMemories: ChildhoodMemoriesTool,
  animeMyFace: AnimeMyFaceTool,
  futureSelfQuiz: FutureSelfQuizTool,
  animalTwin: AnimalTwinTool,
  moodCard: MoodCardTool,
  fameMeter: FameMeterTool,
  brainMeter: BrainMeterTool,
};


const AppContent: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const { language } = useLocalization();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const handleSelectTool = (tool: Tool) => {
    setSelectedTool(tool);
  };

  const handleBack = () => {
    setSelectedTool(null);
  };

  const SelectedToolComponent = selectedTool ? toolComponentMap[selectedTool.id] : null;

  return (
    <div className={`bg-dark-charcoal min-h-screen text-text-primary font-sans ${language === 'ar' ? 'rtl' : ''}`}>
      <Header />
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        {SelectedToolComponent ? (
          <SelectedToolComponent tool={selectedTool!} onBack={handleBack} />
        ) : (
          <ToolSelector onSelectTool={handleSelectTool} />
        )}
      </main>
      <Footer />
    </div>
  );
}


function App() {
  return (
    <LocalizationProvider>
      <AppContent />
    </LocalizationProvider>
  )
}

export default App;