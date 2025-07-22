
import React from 'react';
import { ChatBubbleBottomCenterTextIcon, SparklesIcon } from './icons/Icons';

interface ConclusionProps {
  summary: string;
  opening: string;
  reflectionQuestion: string;
}

export const Conclusion: React.FC<ConclusionProps> = ({ summary, opening, reflectionQuestion }) => {
  return (
    <section aria-labelledby="conclusion-title" className="bg-white p-6 rounded-xl shadow-lg border border-purple-200">
      <h2 id="conclusion-title" className="text-2xl font-bold text-purple-700 mb-4">Pour conclure ce module...</h2>
      
      <div className="space-y-4 text-slate-700">
        <p>{summary}</p>
        <p className="text-purple-600 font-medium">{opening}</p>
      </div>

      <div className="mt-6 bg-purple-50 p-4 rounded-lg shadow-sm border border-purple-100">
        <h3 className="text-xl font-semibold text-purple-700 mb-3 flex items-center">
          <ChatBubbleBottomCenterTextIcon className="w-6 h-6 mr-2 text-purple-600" />
          À toi de réfléchir !
        </h3>
        <p className="italic text-slate-700">{reflectionQuestion}</p>
      </div>
       <div className="mt-6 text-center">
        <SparklesIcon className="w-12 h-12 text-accent-yellow inline-block animate-pulse" />
        <p className="text-lg font-semibold text-custom-blue mt-2">Bravo pour avoir exploré ce module !</p>
      </div>
    </section>
  );
};
