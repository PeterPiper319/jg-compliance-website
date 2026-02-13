import React, { useState, useEffect } from 'react';
import { POPIA_QUESTIONS, calculatePOPIAScore } from '../../lib/schemas/popia-audit';
import { clsx } from 'clsx';

export function PopiaAudit() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [score, setScore] = useState(0);
  const [readinessLevel, setReadinessLevel] = useState("Significant Gaps (Action Required)");

  useEffect(() => {
    const currentScore = calculatePOPIAScore(answers as any);
    setScore(currentScore);

    if (currentScore >= 80) setReadinessLevel("High Readiness");
    else if (currentScore >= 50) setReadinessLevel("Partial Readiness");
    else setReadinessLevel("Significant Gaps (Action Required)");
  }, [answers]);

  const handleChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value === "true" }));
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-brand-blue mb-6">Readiness Self-Assessment</h3>
            <div className="space-y-6">
            {POPIA_QUESTIONS.map((q, index) => (
                <div key={q.id} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Condition {q.condition}</span>
                </div>
                <p className="text-gray-800 font-medium mb-4">{q.label}</p>
                
                <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                        type="radio" 
                        name={q.id}
                        value="true"
                        checked={answers[q.id] === true}
                        onChange={(e) => handleChange(q.id, e.target.value)}
                        className="w-4 h-4 text-brand-blue"
                    />
                    <span className="text-sm">Yes</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                        type="radio" 
                        name={q.id}
                        value="false"
                        checked={answers[q.id] === false}
                        onChange={(e) => handleChange(q.id, e.target.value)}
                        className="w-4 h-4 text-red-500"
                    />
                    <span className="text-sm">No</span>
                    </label>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-brand-accent/20 sticky top-24">
            <h3 className="text-lg font-bold text-brand-blue mb-4">Assessment Result</h3>
            
            <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                    <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-brand-blue bg-blue-200">
                            Readiness Score
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-brand-blue">
                            {score}%
                        </span>
                    </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div style={{ width: `${score}%` }} className={clsx("shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-500", score < 50 ? "bg-red-500" : score < 80 ? "bg-orange-500" : "bg-green-500")}></div>
                </div>
            </div>

            <div className={clsx("text-center p-4 rounded-lg border-2 font-bold mb-6", score < 50 ? "border-red-100 bg-red-50 text-red-600" : score < 80 ? "border-orange-100 bg-orange-50 text-orange-600" : "border-green-100 bg-green-50 text-green-600")}>
                {readinessLevel}
            </div>

            <div className="bg-yellow-50 p-3 rounded border border-yellow-100 mb-6">
                <p className="text-xs text-yellow-800 text-center leading-tight">
                    <strong>Note:</strong> This is a preliminary gap analysis, not a legal audit. It identifies potential risks but does not guarantee compliance.
                </p>
            </div>
            
            <a href="/contact?service=popia" className="block w-full mt-6 bg-brand-blue text-white text-center py-3 rounded-lg font-bold hover:bg-brand-blue/90 transition-colors">
                Request Professional Assessment
            </a>
        </div>
      </div>
    </div>
  );
}