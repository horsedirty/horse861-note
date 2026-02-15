
import React, { useState } from 'react';
import { QuizChapter, Question } from '../types';
import { CheckCircle2, XCircle, HelpCircle, Eye, EyeOff, RotateCcw } from 'lucide-react';
import { TextWithMath } from './MathRenderer';

interface QuizViewProps {
  chapters: QuizChapter[];
}

export const QuizView: React.FC<QuizViewProps> = ({ chapters }) => {
  const [activeChapterId, setActiveChapterId] = useState(chapters[0]?.id);

  const activeChapter = chapters.find(c => c.id === activeChapterId);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Chapter Selection (Mobile: Top, Desktop: Sticky Side) */}
      <div className="md:w-64 flex-shrink-0">
        <div className="sticky top-24 space-y-2">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4 px-2">章节选择</h3>
          <div className="flex flex-col gap-1 max-h-[calc(100vh-200px)] overflow-y-auto no-scrollbar">
            {chapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => setActiveChapterId(ch.id)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeChapterId === ch.id
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                    : 'bg-white dark:bg-[#1C1C1E] text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10'
                }`}
              >
                {ch.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Questions Area */}
      <div className="flex-1 min-w-0">
        {activeChapter ? (
          <div className="space-y-8 pb-20">
            <div className="bg-white dark:bg-[#1C1C1E] rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{activeChapter.title}</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">共 {activeChapter.parts.reduce((acc, p) => acc + p.questions.length, 0)} 道题</p>
            </div>

            {activeChapter.parts.map((part, pIdx) => (
              <div key={pIdx} className="space-y-6">
                <h3 className="text-lg font-bold text-red-500 dark:text-red-400 px-2">{part.title}</h3>
                {part.questions.map((q) => (
                  <QuestionCard key={q.id} question={q} />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">请选择章节开始练习</div>
        )}
      </div>
    </div>
  );
};

const QuestionCard: React.FC<{ question: Question }> = ({ question }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSingleSelect = (option: string) => {
    // If already correct, don't allow changing to avoid cheat/spam
    if (isCorrect) return;
    
    const optionLetter = option.charAt(0);
    setSelected([optionLetter]);
    
    // Auto check
    if (question.correctAnswer) {
      const correct = optionLetter === question.correctAnswer;
      setIsCorrect(correct);
      if (!correct) setShowAnalysis(true);
    }
  };

  const handleMultiSelect = (option: string) => {
    if (isCorrect) return;

    const optionLetter = option.charAt(0);
    const newSelected = selected.includes(optionLetter)
      ? selected.filter(s => s !== optionLetter)
      : [...selected, optionLetter].sort();
    
    setSelected(newSelected);
    setIsCorrect(null); // Reset check state when modifying selection
  };

  const checkMultiAnswer = () => {
    const selectedStr = selected.join('');
    const correctStr = (question.correctAnswer as string).split('').sort().join('');
    const correct = selectedStr === correctStr;
    setIsCorrect(correct);
    setShowAnalysis(true);
  };

  const reset = () => {
    setSelected([]);
    setShowAnalysis(false);
    setIsCorrect(null);
  };

  return (
    <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-white/5 transition-all">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h4 className="text-gray-900 dark:text-white font-medium text-lg leading-relaxed">
          <TextWithMath text={question.text} />
        </h4>
        {isCorrect === true && <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />}
        {isCorrect === false && <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />}
      </div>

      {/* Options */}
      <div className="space-y-2 mb-4">
        {question.type === 'single' && question.options?.map((opt) => {
          const letter = opt.charAt(0);
          const isSelected = selected.includes(letter);
          const isKey = question.correctAnswer === letter;
          
          let itemClass = "w-full text-left px-4 py-3 rounded-xl text-sm transition-all border ";
          if (showAnalysis && isKey) {
            itemClass += "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-800 dark:text-green-200";
          } else if (isSelected && isCorrect === false) {
            itemClass += "bg-red-50 dark:bg-red-900/20 border-red-200 text-red-800 dark:text-red-200";
          } else if (isSelected) {
            itemClass += "bg-blue-50 dark:bg-blue-900/20 border-blue-200 text-blue-800 dark:text-blue-200";
          } else {
            itemClass += "border-transparent bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300";
          }

          return (
            <button
              key={opt}
              onClick={() => handleSingleSelect(opt)}
              className={itemClass}
            >
              <TextWithMath text={opt} />
            </button>
          );
        })}

        {question.type === 'multi' && (
          <>
            {question.options?.map((opt) => {
              const letter = opt.charAt(0);
              const isSelected = selected.includes(letter);
              const isKey = (question.correctAnswer as string).includes(letter);
              
              let itemClass = "w-full text-left px-4 py-3 rounded-xl text-sm transition-all border flex items-center gap-3 ";
              if (showAnalysis && isKey) {
                 itemClass += "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200";
              } else if (isSelected) {
                 itemClass += "bg-blue-50 dark:bg-blue-900/20 border-blue-200 text-blue-800 dark:text-blue-200";
              } else {
                 itemClass += "border-transparent bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300";
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleMultiSelect(opt)}
                  className={itemClass}
                >
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isSelected ? 'bg-blue-500 border-blue-500 text-white' : 'border-gray-400'}`}>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <TextWithMath text={opt} />
                </button>
              );
            })}
            <div className="pt-2 flex gap-3">
              <button 
                onClick={checkMultiAnswer}
                disabled={selected.length === 0 || isCorrect === true}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg text-sm font-medium transition-colors"
              >
                提交答案
              </button>
              {showAnalysis && (
                 <button onClick={reset} className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"><RotateCcw size={18} /></button>
              )}
            </div>
          </>
        )}

        {question.type === 'judgment' && (
          <div className="space-y-3 pt-2">
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setSelected(['正确']);
                  const correct = question.correctAnswer === '正确';
                  setIsCorrect(correct);
                  setShowAnalysis(true);
                }}
                className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                  selected.includes('正确') 
                    ? isCorrect === true 
                      ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-800 dark:text-green-200'
                      : isCorrect === false
                      ? 'bg-red-50 dark:bg-red-900/20 border-red-200 text-red-800 dark:text-red-200'
                      : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 text-blue-800 dark:text-blue-200'
                    : 'border-transparent bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300'
                }`}
              >
                正确
              </button>
              <button
                onClick={() => {
                  setSelected(['错误']);
                  const correct = question.correctAnswer === '错误';
                  setIsCorrect(correct);
                  setShowAnalysis(true);
                }}
                className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                  selected.includes('错误')
                    ? isCorrect === true
                      ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-800 dark:text-green-200'
                      : isCorrect === false
                      ? 'bg-red-50 dark:bg-red-900/20 border-red-200 text-red-800 dark:text-red-200'
                      : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 text-blue-800 dark:text-blue-200'
                    : 'border-transparent bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300'
                }`}
              >
                错误
              </button>
            </div>
            {selected.length > 0 && (
              <button
                onClick={() => setShowAnalysis(!showAnalysis)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors"
              >
                {showAnalysis ? <EyeOff size={16} /> : <Eye size={16} />}
                {showAnalysis ? '隐藏解析' : '查看解析'}
              </button>
            )}
          </div>
        )}

        {question.type === 'short' && (
          <div className="pt-2">
            <button
              onClick={() => setShowAnalysis(!showAnalysis)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors"
            >
              {showAnalysis ? <EyeOff size={16} /> : <Eye size={16} />}
              {showAnalysis ? '隐藏答案与解析' : '查看答案与解析'}
            </button>
          </div>
        )}
      </div>

      {/* Analysis */}
      {showAnalysis && (
        <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 rounded-xl animate-in fade-in slide-in-from-top-2">
          <div className="flex gap-2 text-yellow-800 dark:text-yellow-500 font-bold text-sm mb-1">
            <HelpCircle size={16} className="mt-0.5" />
            <span>解析</span>
          </div>
          <div className="text-sm text-yellow-900/80 dark:text-yellow-200/80 leading-relaxed">
            {question.correctAnswer && (
              <div className="mb-2 font-semibold">
                参考答案：<TextWithMath text={Array.isArray(question.correctAnswer) ? question.correctAnswer.join('') : question.correctAnswer} />
              </div>
            )}
            <TextWithMath text={question.analysis} />
          </div>
        </div>
      )}
    </div>
  );
};
