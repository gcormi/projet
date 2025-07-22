
import React from 'react';
import { ContentItem, ExampleItem, FocusPoint as FocusPointType } from '../types';
import { FocusPoint } from './FocusPoint';
import { BeakerIcon } from './icons/Icons';


export interface SectionData {
  id: string;
  title: string;
  icon?: React.ReactNode;
  content: ContentItem[];
  examples?: ExampleItem[];
  focusPoint?: FocusPointType;
}

export const Section: React.FC<SectionData> = ({ id, title, icon, content, examples, focusPoint }) => {
  return (
    <section aria-labelledby={id} className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
      <h2 id={id} className="text-2xl font-bold text-custom-blue mb-6 flex items-center">
        {icon && <span className="mr-3">{icon}</span>}
        {title}
      </h2>
      
      <div className="space-y-4 text-slate-700 leading-relaxed">
        {content.map((item, index) => {
          if (item.type === 'paragraph') {
            return <p key={index}>{item.text}</p>;
          }
          if (item.type === 'list') {
            return (
              <ul key={index} className="list-disc list-inside space-y-1 pl-4">
                {item.items?.map((li, i) => <li key={i} dangerouslySetInnerHTML={{ __html: li }} />)}
              </ul>
            );
          }
          if (item.type === 'image' && item.src) {
            return (
              <div key={index} className="my-4 text-center">
                <img src={item.src} alt={item.alt || title} className="max-w-full md:max-w-lg mx-auto rounded-lg shadow-md border border-slate-300" />
                {item.alt && <p className="text-sm text-slate-500 mt-1 italic">{item.alt}</p>}
              </div>
            );
          }
          return null;
        })}
      </div>

      {examples && examples.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-custom-green mb-4 flex items-center">
             <BeakerIcon className="w-6 h-6 mr-2 text-custom-green" />
            Exemples Concrets
          </h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <div key={index} className="bg-green-50 p-4 rounded-lg shadow-sm border border-green-200">
                <h4 className="text-lg font-semibold text-green-700 mb-2">{example.title}</h4>
                {example.image && <img src={example.image} alt={example.title} className="w-full h-40 object-cover rounded-md mb-3 shadow"/>}
                <p className="text-sm text-slate-600 mb-2" dangerouslySetInnerHTML={{ __html: example.description }} />
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                  {example.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {focusPoint && (
        <div className="mt-8">
          <FocusPoint title={focusPoint.title} content={focusPoint.content} />
        </div>
      )}
    </section>
  );
};
