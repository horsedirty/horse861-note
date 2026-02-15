import React from 'react';
import { Chapter, Difficulty } from '../types';
import { TextWithMath } from './MathRenderer';
import { BookOpen, Star, AlertCircle } from 'lucide-react';

interface ChapterCardProps {
  chapter: Chapter;
}

const DifficultyBadge = ({ level }: { level: Difficulty }) => {
  const styles = {
    [Difficulty.Easy]: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
    [Difficulty.Medium]: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
    [Difficulty.Hard]: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400",
    [Difficulty.Critical]: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400 font-bold",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs tracking-wide ${styles[level]}`}>
      {level}
    </span>
  );
};

export const ChapterCard: React.FC<ChapterCardProps> = ({ chapter }) => {
  return (
    <div id={chapter.id} className="group relative bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-xl rounded-[2rem] shadow-apple hover:shadow-apple-hover transition-all duration-300 border border-white/20 dark:border-white/5 scroll-mt-28">
      <div className="p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#0071e3] text-white text-xl font-bold shadow-lg shadow-blue-500/20">
              {chapter.number}
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {chapter.title}
              </h2>
            </div>
          </div>
          <DifficultyBadge level={chapter.difficulty} />
        </div>

        {/* Summary Hero */}
        <div className="mb-8 p-6 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/5">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
            {chapter.summary}
          </p>
        </div>

        {/* Key Points Grid */}
        <div className="grid gap-6 md:grid-cols-1">
          {chapter.keyPoints.map((point, idx) => (
            <div 
              key={idx} 
              className={`
                relative overflow-hidden rounded-3xl p-6 transition-all duration-300
                ${point.important 
                  ? 'bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-500/20' 
                  : 'bg-white dark:bg-[#2C2C2E] border border-gray-100 dark:border-white/5'}
              `}
            >
              {point.important && (
                <div className="absolute top-0 right-0 p-4">
                  <Star className="w-5 h-5 text-blue-500 fill-blue-500 opacity-80" />
                </div>
              )}
              
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                {point.title}
              </h3>

              {point.image && (
                <div className="mb-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10">
                  <img 
                    src={point.image} 
                    alt={point.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              <div className="space-y-6">
                {point.sections.map((section, sIdx) => (
                  <div key={sIdx}>
                    {section.subtitle && (
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                        {section.subtitle}
                      </h4>
                    )}
                    <div className="text-gray-700 dark:text-gray-200">
                      <TextWithMath text={section.text} />
                    </div>
                    {section.list && (
                      <ul className="mt-3 space-y-2">
                        {section.list.map((item, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 shrink-0 opacity-60" />
                            <div className="flex-1"><TextWithMath text={item} /></div>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.table && (
                      <div className="mt-4 overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                          <thead>
                            <tr className="bg-gray-100 dark:bg-gray-700">
                              {section.table.headers.map((header, hIdx) => (
                                <th key={hIdx} className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600">
                                  <TextWithMath text={header} />
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white dark:bg-[#2C2C2E]' : 'bg-gray-50 dark:bg-[#1C1C1E]'}>
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                                    <TextWithMath text={cell} />
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Exam Tips */}
        {chapter.examTips && chapter.examTips.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#FF3B30]" />
              Exam Focus
            </h4>
            <div className="flex flex-wrap gap-3">
              {chapter.examTips.map((tip, idx) => (
                <span 
                  key={idx} 
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200"
                >
                  {tip}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};