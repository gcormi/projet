
import React from 'react';
import { GlossaryTerm } from '../types';
import { BookOpenIcon } from './icons/Icons';

interface GlossaryProps {
  terms: GlossaryTerm[];
}

export const Glossary: React.FC<GlossaryProps> = ({ terms }) => {
  return (
    <section aria-labelledby="glossary-title" className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
      <h2 id="glossary-title" className="text-2xl font-bold text-custom-blue mb-6 flex items-center">
        <BookOpenIcon className="w-7 h-7 mr-2 text-custom-blue" />
        Glossaire du Technologue
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
        {terms.sort((a,b) => a.term.localeCompare(b.term)).map((term, index) => (
          <div key={index} className="mb-3 p-3 bg-slate-50 rounded-md border border-slate-100 shadow-sm">
            <h3 className="font-semibold text-sky-700">{term.term}</h3>
            <p className="text-sm text-slate-600">{term.definition}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
