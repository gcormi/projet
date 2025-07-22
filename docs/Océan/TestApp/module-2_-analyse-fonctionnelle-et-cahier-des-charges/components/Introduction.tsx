
import React from 'react';
import { AcademicCapIcon, LightBulbIcon } from './icons/Icons';

interface IntroductionProps {
  hook: string;
  objectives: string[];
  knowledge: string[];
}

export const Introduction: React.FC<IntroductionProps> = ({ hook, objectives, knowledge }) => {
  return (
    <section aria-labelledby="introduction-title" className="bg-white p-6 rounded-xl shadow-lg border border-sky-200">
      <h2 id="introduction-title" className="text-2xl font-bold text-custom-blue mb-4">Bienvenue dans ce nouveau module !</h2>
      <p className="text-lg italic text-slate-700 mb-6">{hook}</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-sky-50 p-4 rounded-lg shadow-sm border border-sky-100">
          <h3 className="text-xl font-semibold text-sky-700 mb-3 flex items-center">
            <AcademicCapIcon className="w-6 h-6 mr-2 text-sky-600" />
            Objectifs d'apprentissage
          </h3>
          <p className="mb-2 text-sm text-slate-600">À la fin de ce module, tu seras capable de :</p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            {objectives.map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-50 p-4 rounded-lg shadow-sm border border-emerald-100">
          <h3 className="text-xl font-semibold text-emerald-700 mb-3 flex items-center">
            <LightBulbIcon className="w-6 h-6 mr-2 text-emerald-600" />
            Connaissances clés
          </h3>
          <p className="mb-2 text-sm text-slate-600">Tu vas découvrir et comprendre :</p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            {knowledge.map((know, index) => (
              <li key={index}>{know}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
