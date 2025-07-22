
import React, { useState } from 'react';
import { QuizQuestion, QuizOption } from '../types';
import { QuestionMarkCircleIcon, CheckCircleIcon, XCircleIcon } from './icons/Icons';

interface QuizProps {
  questions: QuizQuestion[];
}

interface AnswerState {
  [questionIndex: number]: {
    selectedOptionId: string | null;
    isCorrect: boolean | null;
  };
}

export const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [answers, setAnswers] = useState<AnswerState>({});

  const handleOptionSelect = (questionIndex: number, optionId: string) => {
    const question = questions[questionIndex];
    const isCorrect = optionId === question.correctAnswerId;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: {
        selectedOptionId: optionId,
        isCorrect: isCorrect,
      }
    }));
  };

  return (
    <section aria-labelledby="quiz-title" className="bg-white p-6 rounded-xl shadow-lg border border-indigo-200">
      <h2 id="quiz-title" className="text-2xl font-bold text-indigo-700 mb-6 flex items-center">
        <QuestionMarkCircleIcon className="w-7 h-7 mr-2 text-indigo-700" />
        Teste tes connaissances !
      </h2>
      <div className="space-y-8">
        {questions.map((q, qIndex) => (
          <div key={qIndex} className="p-4 border border-slate-200 rounded-lg bg-indigo-50 shadow-sm">
            <p className="font-semibold text-lg text-indigo-800 mb-3">{qIndex + 1}. {q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt) => {
                // FIX: Correctly declare isSelected with const
                const isSelected = answers[qIndex]?.selectedOptionId === opt.id;
                // FIX: Correctly declare isCorrect with const
                const isCorrect = answers[qIndex]?.isCorrect;
                
                let buttonClass = "w-full text-left p-3 rounded-md border transition-all duration-150 ease-in-out ";
                if (isSelected) {
                  buttonClass += isCorrect ? "bg-green-500 text-white border-green-600 ring-2 ring-green-400" : "bg-red-500 text-white border-red-600 ring-2 ring-red-400";
                } else if (answers[qIndex]?.selectedOptionId && opt.id === q.correctAnswerId) {
                   buttonClass += "bg-green-200 border-green-300 text-green-800"; // Show correct if wrong one selected
                }
                else {
                  buttonClass += "bg-white hover:bg-indigo-100 border-indigo-300 text-slate-700 hover:border-indigo-400";
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleOptionSelect(qIndex, opt.id)}
                    disabled={answers[qIndex]?.selectedOptionId !== null}
                    className={buttonClass}
                    aria-pressed={isSelected}
                  >
                    {opt.text}
                    {isSelected && isCorrect && <CheckCircleIcon className="inline w-5 h-5 ml-2" />}
                    {isSelected && !isCorrect && <XCircleIcon className="inline w-5 h-5 ml-2" />}
                  </button>
                );
              })}
            </div>
            {answers[qIndex]?.selectedOptionId && (
              <div className={`mt-3 p-3 rounded-md text-sm ${answers[qIndex].isCorrect ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                {answers[qIndex].isCorrect ? '🥳 Bonne réponse ! ' : '🤔 Presque ! La bonne réponse était mise en évidence. '} 
                {q.feedback}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
