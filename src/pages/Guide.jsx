import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import EarningsCalculator from '../components/EarningsCalculator';

export default function Guide() {
  const { t } = useLanguage();

  const steps = t('guide.steps') || [];

  return (
    <div className="space-y-4">
      <div className="text-center py-2">
        <h1 className="text-2xl font-bold text-gray-800">{t('guide.title')}</h1>
        <p className="text-gray-500 text-sm">{t('guide.subtitle')}</p>
      </div>

      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{index + 1}</div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{step.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                {step.bonus && <p className="text-green-600 text-sm mt-1 font-medium">{step.bonus}</p>}
                {step.min && <p className="text-gray-500 text-xs mt-1">{step.min}</p>}
                {step.rate && <p className="text-yellow-600 text-sm mt-1 font-medium">{step.rate}</p>}
                {step.income && <p className="text-green-600 text-sm mt-1 font-medium">{step.income}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 使用与首页相同的收益计算器组件 */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{t('calculator.sectionTitle')}</h2>
        <EarningsCalculator />
      </div>
    </div>
  );
}
