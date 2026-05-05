import React from 'react';
import { Bot, ArrowRight, BookOpen, Flag, Network } from 'lucide-react';

interface LandingPageProps {
  onEnterCourse: (courseId: 'robotics' | 'maozhongte' | 'xi' | 'internetdev' | 'os' | 'prospectnet') => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnterCourse }) => {
  return (
    <div className="min-h-screen relative overflow-hidden font-serif selection:bg-orange-500 selection:text-white">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/DSC_0820.jpg')",
          // Fallback gradient simulating a sunset if image fails to load
          backgroundColor: '#2b1c18' 
        }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24 flex flex-col min-h-screen">
        
        {/* Header Section */}
        <header className="mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>Welcome back</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl tracking-tight mb-4 font-serif">
            Horse861的学习笔记
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide max-w-2xl">
            哈吉米南北路多。
          </p>
        </header>

        {/* Main Navigation Grid */}
        <main className="flex-1 w-full animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Robotics Course Card */}
            <button 
              onClick={() => onEnterCourse('robotics')}
              className="group text-left relative overflow-hidden rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8 transition-all duration-500 hover:bg-white/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg group-hover:shadow-orange-500/40 transition-all duration-300">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/20 border border-white/10 text-xs font-medium text-white/90">
                    Robotics
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-orange-100 transition-colors">
                  机器人学
                </h2>
                
                <p className="text-white/70 mb-8 line-clamp-3 leading-relaxed">
                  包含ISO定义、坐标变换、DH参数建模、动力学拉格朗日方程及SLAM核心算法的详细复习笔记。
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-white group-hover:text-orange-200 transition-colors">
                  <span className="font-medium tracking-wide">Enter Course</span>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </button>

            {/* Mao Zhong Te Course Card */}
            <button 
              onClick={() => onEnterCourse('maozhongte')}
              className="group text-left relative overflow-hidden rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8 transition-all duration-500 hover:bg-white/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-yellow-400 flex items-center justify-center shadow-lg group-hover:shadow-red-500/40 transition-all duration-300">
                    <Flag className="w-8 h-8 text-white" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/20 border border-white/10 text-xs font-medium text-white/90">
                    Politics
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors">
                  毛中特概论
                </h2>
                
                <p className="text-white/70 mb-8 line-clamp-3 leading-relaxed">
                  极简复习时间轴、社会主要矛盾演变、毛泽东思想活的灵魂及中特理论体系大题话术库。
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-white group-hover:text-red-200 transition-colors">
                  <span className="font-medium tracking-wide">Enter Course</span>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </button>

            {/* Xi Jinping Thought Course Card */}
            <button 
              onClick={() => onEnterCourse('xi')}
              className="group text-left relative overflow-hidden rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8 transition-all duration-500 hover:bg-white/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/40 transition-all duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/20 border border-white/10 text-xs font-medium text-white/90">
                    Ideology
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                  习近平新时代思想
                </h2>
                
                <p className="text-white/70 mb-8 line-clamp-3 leading-relaxed">
                  习近平新时代中国特色社会主义思想概论，包含导论、核理论体系、发展战略及实践应用的复习全书。
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-white group-hover:text-blue-200 transition-colors">
                  <span className="font-medium tracking-wide">Enter Course</span>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </button>

            {/* Internet Development Course Card */}
            <button 
              onClick={() => onEnterCourse('internetdev')}
              className="group text-left relative overflow-hidden rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8 transition-all duration-500 hover:bg-white/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600 to-teal-500 flex items-center justify-center shadow-lg group-hover:shadow-green-500/40 transition-all duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/20 border border-white/10 text-xs font-medium text-white/90">
                    Web Dev
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-green-100 transition-colors">
                  互联网开发技术基础
                </h2>
                
                <p className="text-white/70 mb-8 line-clamp-3 leading-relaxed">
                  HTML5基础、CSS样式、JavaScript编程、AJAX与JSON、jQuery框架及SpringBoot后端开发技术。
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-white group-hover:text-green-200 transition-colors">
                  <span className="font-medium tracking-wide">Enter Course</span>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </button>

            {/* Operating System Course Card */}
            <button 
              onClick={() => onEnterCourse('os')}
              className="group text-left relative overflow-hidden rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8 transition-all duration-500 hover:bg-white/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/40 transition-all duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/20 border border-white/10 text-xs font-medium text-white/90">
                    OS
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-purple-100 transition-colors">
                  操作系统复习
                </h2>
                
                <p className="text-white/70 mb-8 line-clamp-3 leading-relaxed">
                  包含进程管理、内存管理、文件系统、设备管理等核心考点，涵盖PV操作、银行家算法、页面置换等经典算法。
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-white group-hover:text-purple-200 transition-colors">
                  <span className="font-medium tracking-wide">Enter Course</span>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </button>

            {/* ProSpectNet IJCNN 2026 Card */}
            <button 
              onClick={() => onEnterCourse('prospectnet')}
              className="group text-left relative overflow-hidden rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 p-8 transition-all duration-500 hover:bg-white/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/40 transition-all duration-300">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/20 border border-white/10 text-xs font-medium text-white/90">
                    IJCNN 2026
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                  ProSpectNet
                </h2>
                
                <p className="text-white/70 mb-8 line-clamp-3 leading-relaxed">
                  IJCNN 2026 SS32 录用论文：面向高效交通预测的原型引导谱-时间框架，14×推理加速与88%内存节省。
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-white group-hover:text-cyan-200 transition-colors">
                  <span className="font-medium tracking-wide">View Paper</span>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </button>

            {/* Placeholder Card */}
            <div className="rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center text-white/30 transition-colors hover:bg-white/10 hover:border-white/10 group cursor-default">
              <BookOpen className="w-12 h-12 mb-4 opacity-50 group-hover:opacity-80 transition-opacity" />
              <h3 className="text-xl font-bold mb-2">更多笔记</h3>
              <p className="text-sm">Coming Soon...</p>
            </div>

          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-white/10 mt-12 flex justify-between items-center text-white/40 text-sm">
          <p>© 2026 Horse861</p>
          <p className="font-mono text-xs">v2.1.0</p>
        </footer>
      </div>
      
      {/* Global styles for this page specifically */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};