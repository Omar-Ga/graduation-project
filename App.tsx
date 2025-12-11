import React, { useState } from 'react';
import DiscoveryChat from './components/DiscoveryChat';
import TechnicalAssessment from './components/TechnicalAssessment';
import CareerDashboard from './components/CareerDashboard';

enum Screen {
  DISCOVERY = 'discovery',
  ASSESSMENT = 'assessment',
  DASHBOARD = 'dashboard',
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.DISCOVERY);

  return (
    <div className="flex flex-col h-screen overflow-hidden font-sans text-gray-900 bg-gray-50">
      {/* Navigation Switcher (Demo Only) */}
      <div className="flex-none bg-black text-white px-6 py-2 flex items-center justify-between z-50 shadow-md">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-wider text-sm">PROTOTYPE VIEWER</span>
        </div>
        <div className="flex gap-1 bg-white/10 p-1 rounded-lg">
          <NavButton 
            active={currentScreen === Screen.DISCOVERY} 
            onClick={() => setCurrentScreen(Screen.DISCOVERY)}
            icon="chat"
            label="1. Recruiter Chat"
          />
          <NavButton 
            active={currentScreen === Screen.ASSESSMENT} 
            onClick={() => setCurrentScreen(Screen.ASSESSMENT)}
            icon="terminal"
            label="2. Tech Assessment"
          />
          <NavButton 
            active={currentScreen === Screen.DASHBOARD} 
            onClick={() => setCurrentScreen(Screen.DASHBOARD)}
            icon="analytics"
            label="3. Dashboard"
          />
        </div>
      </div>

      {/* Screen Container */}
      <div className="flex-1 relative overflow-hidden">
        {currentScreen === Screen.DISCOVERY && <DiscoveryChat />}
        {currentScreen === Screen.ASSESSMENT && <TechnicalAssessment />}
        {currentScreen === Screen.DASHBOARD && <CareerDashboard />}
      </div>
    </div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: string; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-medium transition-all
        ${active ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-white hover:bg-white/5'}
      `}
    >
      <span className="material-symbols-outlined text-[16px]">{icon}</span>
      {label}
    </button>
  );
}