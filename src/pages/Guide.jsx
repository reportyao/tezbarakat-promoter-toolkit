import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calculator } from 'lucide-react';

export default function Guide() {
  const { t } = useLanguage();
  const [level1, setLevel1] = useState(10);
  const [level2, setLevel2] = useState(5);
  const [level3, setLevel3] = useState(5);
  const avgPurchase = 100;

  const steps = t('guide.steps') || [];

  const level1People = level1;
  const level2People = level1 * level2;
  const level3People = level2People * level3;
  
  const level1Income = level1People * avgPurchase * 0.05;
  const level2Income = level2People * avgPurchase * 0.03;
  const level3Income = level3People * avgPurchase * 0.01;
  const totalIncome = level1Income + level2Income + level3Income;

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

      <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-2xl p-4 text-white">
        <div className="flex items-center space-x-2 mb-4">
          <Calculator className="w-6 h-6" />
          <h2 className="font-bold text-lg">{t('guide.calculator.title')}</h2>
        </div>

        <div className="space-y-3">
          <div className="bg-white/10 rounded-xl p-3">
            <label className="text-sm text-white/80">一级邀请人数</label>
            <input type="range" min="1" max="50" value={level1} onChange={(e) => setLevel1(Number(e.target.value))} className="w-full mt-1" />
            <div className="flex justify-between text-sm"><span>{level1} 人</span><span>5% = {level1Income.toFixed(0)} 索莫尼</span></div>
          </div>

          <div className="bg-white/10 rounded-xl p-3">
            <label className="text-sm text-white/80">每人再邀请 (二级)</label>
            <input type="range" min="1" max="20" value={level2} onChange={(e) => setLevel2(Number(e.target.value))} className="w-full mt-1" />
            <div className="flex justify-between text-sm"><span>{level2People} 人</span><span>3% = {level2Income.toFixed(0)} 索莫尼</span></div>
          </div>

          <div className="bg-white/10 rounded-xl p-3">
            <label className="text-sm text-white/80">每人再邀请 (三级)</label>
            <input type="range" min="1" max="20" value={level3} onChange={(e) => setLevel3(Number(e.target.value))} className="w-full mt-1" />
            <div className="flex justify-between text-sm"><span>{level3People} 人</span><span>1% = {level3Income.toFixed(0)} 索莫尼</span></div>
          </div>
        </div>

        <div className="mt-4 bg-yellow-400 text-green-800 rounded-xl p-4 text-center">
          <p className="text-sm font-medium">{t('guide.calculator.result')}</p>
          <p className="text-3xl font-bold">{totalIncome.toFixed(0)} 索莫尼</p>
        </div>
      </div>
    </div>
  );
}
