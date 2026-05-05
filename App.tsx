import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { LandingPage } from './components/LandingPage';
import { COURSE_CHAPTERS as ROBOTICS_CHAPTERS, CHAPTER_QUIZZES as ROBOTICS_QUIZZES } from './constants';
import { MAO_ZHONG_TE_CHAPTERS } from './constants_maozhongte';
import { MAO_ZHONG_TE_QUIZ } from './constants_maozhongte_quiz';
import { XI_CHAPTERS } from './constants_xi';
import { INTERNET_DEV_BASE_CHAPTERS } from './InternetDevBase';
import { OS_CHAPTERS } from './constants_os';

type View = 'home' | 'robotics' | 'maozhongte' | 'xi' | 'internetdev' | 'os' | 'prospectnet';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  if (currentView === 'home') {
    return <LandingPage onEnterCourse={(courseId) => setCurrentView(courseId)} />;
  }

  if (currentView === 'robotics') {
    return (
      <Dashboard 
        title="Robotics Pro" 
        chapters={ROBOTICS_CHAPTERS} 
        quizChapters={ROBOTICS_QUIZZES}
        onBack={() => setCurrentView('home')} 
      />
    );
  }

  if (currentView === 'maozhongte') {
    return (
      <Dashboard 
        title="毛中特概论" 
        chapters={MAO_ZHONG_TE_CHAPTERS}
        quizChapters={MAO_ZHONG_TE_QUIZ}
        onBack={() => setCurrentView('home')}
        themeColor="text-red-500" 
      />
    );
  }

  if (currentView === 'xi') {
    return (
      <Dashboard 
        title="习近平新时代思想" 
        chapters={XI_CHAPTERS}
        onBack={() => setCurrentView('home')}
        themeColor="text-blue-500"
      />
    );
  }

  if (currentView === 'internetdev') {
    return (
      <Dashboard 
        title="互联网开发技术基础" 
        chapters={INTERNET_DEV_BASE_CHAPTERS}
        onBack={() => setCurrentView('home')}
        themeColor="text-green-500"
      />
    );
  }

  if (currentView === 'os') {
    return (
      <Dashboard 
        title="操作系统复习" 
        chapters={OS_CHAPTERS}
        onBack={() => setCurrentView('home')}
        themeColor="text-purple-500"
      />
    );
  }

  if (currentView === 'prospectnet') {
    return (
      <div className="fixed inset-0 z-50 bg-black">
        <button 
          onClick={() => setCurrentView('home')}
          className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back
        </button>
        <iframe 
          src="/prospectnet-ijcnn.html" 
          className="w-full h-full border-0"
          title="ProSpectNet IJCNN 2026"
        />
      </div>
    );
  }

  return null;
}

export default App;