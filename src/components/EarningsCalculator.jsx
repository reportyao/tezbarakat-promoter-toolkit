import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calculator } from 'lucide-react';

export default function EarningsCalculator() {
  const { t } = useLanguage();
  const [level1, setLevel1] = useState(10);
  const [level2, setLevel2] = useState(50);
  const [level3, setLevel3] = useState(300);
  const [monthlySpending, setMonthlySpending] = useState(200);
  const [totalEarnings, setTotalEarnings] = useState(0);

  useEffect(() => {
    // 计算收益
    // 一级：5% 佣金
    const level1Earnings = level1 * monthlySpending * 0.05;
    // 二级：3% 佣金
    const level2Earnings = level2 * monthlySpending * 0.03;
    // 三级：1% 佣金
    const level3Earnings = level3 * monthlySpending * 0.01;
    
    const total = level1Earnings + level2Earnings + level3Earnings;
    setTotalEarnings(Math.round(total));
  }, [level1, level2, level3, monthlySpending]);

  return (
    <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 shadow-lg text-white">
      {/* 标题 */}
      <div className="flex items-center space-x-2 mb-6">
        <Calculator className="w-6 h-6" />
        <h2 className="text-xl font-bold">{t('calculator.title')}</h2>
      </div>

      {/* 一级邀请人数 */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium">{t('calculator.level1')}</label>
          <span className="text-lg font-bold">{level1} {t('calculator.people')}</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={level1}
          onChange={(e) => setLevel1(parseInt(e.target.value))}
          className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-white/70 mt-1">
          <span>0</span>
          <span className="text-white font-semibold">5% = {Math.round(level1 * monthlySpending * 0.05)} {t('calculator.currency')}</span>
        </div>
      </div>

      {/* 二级邀请人数 */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium">{t('calculator.level2')}</label>
          <span className="text-lg font-bold">{level2} {t('calculator.people')}</span>
        </div>
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          value={level2}
          onChange={(e) => setLevel2(parseInt(e.target.value))}
          className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-white/70 mt-1">
          <span>0</span>
          <span className="text-white font-semibold">3% = {Math.round(level2 * monthlySpending * 0.03)} {t('calculator.currency')}</span>
        </div>
      </div>

      {/* 三级邀请人数 */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium">{t('calculator.level3')}</label>
          <span className="text-lg font-bold">{level3} {t('calculator.people')}</span>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          step="50"
          value={level3}
          onChange={(e) => setLevel3(parseInt(e.target.value))}
          className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-white/70 mt-1">
          <span>0</span>
          <span className="text-white font-semibold">1% = {Math.round(level3 * monthlySpending * 0.01)} {t('calculator.currency')}</span>
        </div>
      </div>

      {/* 每人每月消费 */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium">{t('calculator.monthlySpending')}</label>
          <span className="text-lg font-bold">{monthlySpending} {t('calculator.currency')}</span>
        </div>
        <input
          type="range"
          min="50"
          max="1000"
          step="50"
          value={monthlySpending}
          onChange={(e) => setMonthlySpending(parseInt(e.target.value))}
          className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-white/70 mt-1">
          <span>50</span>
          <span>1000</span>
        </div>
      </div>

      {/* 总收益 */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-4 text-center">
        <div className="text-sm font-medium text-yellow-900 mb-1">{t('calculator.monthlyIncome')}</div>
        <div className="text-3xl font-bold text-yellow-900">{totalEarnings} {t('calculator.currency')}</div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}
