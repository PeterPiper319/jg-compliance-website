import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { beeSchema, type BEEInput, BEE_WEIGHTS, calculateBEELevel } from '../../lib/schemas/bee-calculator';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function BeeCalculator() {
  const [level, setLevel] = useState("Non-Compliant");
  const [total, setTotal] = useState(0);

  const { register, watch, formState: { errors } } = useForm<BEEInput>({
    resolver: zodResolver(beeSchema),
    defaultValues: { ownership: 0, management: 0, skills: 0, esd: 0, sed: 0 },
    mode: "onChange"
  });

  const values = watch();

  useEffect(() => {
    const sum = (values.ownership || 0) + (values.management || 0) + (values.skills || 0) + (values.esd || 0) + (values.sed || 0);
    setTotal(sum);
    setLevel(calculateBEELevel(sum));
  }, [values]);

  // UPDATED: Diplomatic Terminology + Target Guidelines
  const inputs = [
    { 
      name: 'ownership', 
      label: 'Ownership', 
      max: BEE_WEIGHTS.ownership, 
      desc: 'Points for voting rights, economic interest, and net value held by Qualifying Beneficiaries. (Note: Debt affects this score).' 
    },
    { 
      name: 'management', 
      label: 'Management Control', 
      max: BEE_WEIGHTS.management, 
      desc: 'Points for board participation and executive management diversity. (Target: Proportional to EAP targets).' 
    },
    { 
      name: 'skills', 
      label: 'Skills Development', 
      max: BEE_WEIGHTS.skills, 
      desc: 'Expenditure on accredited training for Eligible Employees. (Target: Typically 3.5% - 6% of Leviable Amount).' 
    },
    { 
      name: 'esd', 
      label: 'Enterprise & Supplier Dev', 
      max: BEE_WEIGHTS.esd, 
      desc: 'Spend on Compliant Suppliers and contribution to beneficiary enterprises. (Target: % of Net Profit After Tax).' 
    },
    { 
      name: 'sed', 
      label: 'Socio-Economic Dev', 
      max: BEE_WEIGHTS.sed, 
      desc: 'Contributions toward sustainable access to the economy. (Target: 1% of Net Profit After Tax).' 
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Scorecard Inputs</h3>
        
        {/* Added "Guide" Header */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6 text-sm text-blue-800">
           <p><strong>Note:</strong> Enter your <strong>Weighted Points</strong>, not percentages. <br/>(e.g., 51% ownership &#8800; 51 points. Max points are listed on the right).</p>
        </div>

        {inputs.map((field) => (
          <div key={field.name} className="p-4 bg-gray-50/50 rounded-lg border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-gray-800">{field.label}</label>
              <span className="text-xs font-mono bg-gray-200 px-2 py-1 rounded text-gray-600">Max: {field.max}</span>
            </div>
            
            {/* Expanded Description Area */}
            <p className="text-xs text-gray-500 mb-3 leading-relaxed italic">
              {field.desc}
            </p>

            <input
              type="number"
              step="0.01"
              placeholder={`0 - ${field.max}`}
              {...register(field.name as keyof BEEInput, { valueAsNumber: true })}
              className={twMerge("w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none transition bg-white", errors[field.name as keyof BEEInput] && "border-red-500 focus:ring-red-200")}
            />
            {errors[field.name as keyof BEEInput] && <p className="text-xs text-red-500 mt-1 font-bold">{errors[field.name as keyof BEEInput]?.message}</p>}
          </div>
        ))}
      </div>

      <div className="bg-brand-blue text-white p-8 rounded-xl shadow-lg h-fit sticky top-24">
        <h3 className="text-xl font-bold mb-6 opacity-90">Live Result</h3>
        
        <div className="mb-8 text-center">
          <span className="block text-sm uppercase tracking-wider opacity-70 mb-2">Total Score</span>
          <span className="text-6xl font-bold">{total.toFixed(2)}</span>
          <span className="text-lg opacity-60"> / 100</span> {/* Fixed: Removed stray // */}
        </div>

        <div className="bg-white/10 rounded-lg p-6 text-center border border-white/20">
          <span className="block text-sm uppercase tracking-wider opacity-70 mb-2">B-BBEE Status</span>
          <span className={clsx("text-3xl font-bold", level === "Level 1" ? "text-green-400" : level === "Non-Compliant" ? "text-red-300" : "text-white")}>
            {level}
          </span>
        </div>

        <p className="mt-8 text-sm opacity-60 text-center leading-relaxed">
          * This is a preliminary estimation based on the Generic Scorecard. Final verification requires a SANAS accredited agency or Sworn Affidavit.
        </p>
      </div>
    </div>
  );
}