import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calculator, Users, UserPlus, TrendingUp } from 'lucide-react';

export default function EarningsCalculator() {
  const { t } = useLanguage();
  const [level1, setLevel1] = useState(10);
  const [level2, setLevel2] = useState(50);
  const [level3, setLevel3] = useState(250);
  const [monthlySpending, setMonthlySpending] = useState(100);
  const [totalEarnings, setTotalEarnings] = useState(0);

  // 计算各级收益
  const level1Earnings = Math.round(level1 * monthlySpending * 0.05);
  const level2Earnings = Math.round(level2 * monthlySpending * 0.03);
  const level3Earnings = Math.round(level3 * monthlySpending * 0.01);

  useEffect(() => {
    const total = level1Earnings + level2Earnings + level3Earnings;
    setTotalEarnings(total);
  }, [level1Earnings, level2Earnings, level3Earnings]);

  return (
    <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 shadow-lg text-white">
      {/* 标题 */}
      <div className="flex items-center space-x-2 mb-6">
        <Calculator className="w-6 h-6" />
        <h2 className="text-xl font-bold">{t('calculator.title')}</h2>
      </div>

      {/* 一级：您的好友 */}
      <div className="mb-6 bg-white/10 rounded-xl p-4">
        <div className="flex items-center space-x-2 mb-2">
          <div className="bg-yellow-500 text-yellow-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
          <label className="text-base font-bold">{t('calculator.level1')}</label>
          <span className="ml-auto text-xl font-bold text-yellow-300">{level1} {t('calculator.people')}</span>
        </div>
        <p className="text-sm text-white/80 mb-3">{t('calculator.level1Desc')}</p>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={level1}
          onChange={(e) => setLevel1(parseInt(e.target.value))}
          className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-white/60">0</span>
          <div className="bg-yellow-500/20 px-3 py-1 rounded-full">
            <span className="text-sm font-semibold text-yellow-300">5% × {level1} × {monthlySpending} = {level1Earnings} {t('calculator.currency')}</span>
          </div>
          <span className="text-xs text-white/60">100</span>
        </div>
      </div>

      {/* 二级：好友的好友 */}
      <div className="mb-6 bg-white/10 rounded-xl p-4">
        <div className="flex items-center space-x-2 mb-2">
          <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
          <label className="text-base font-bold">{t('calculator.level2')}</label>
          <span className="ml-auto text-xl font-bold text-blue-300">{level2} {t('calculator.people')}</span>
        </div>
        <p className="text-sm text-white/80 mb-1">{t('calculator.level2Desc')}</p>
        <p className="text-xs text-white/60 mb-3 italic">{t('calculator.level2Example')}</p>
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          value={level2}
          onChange={(e) => setLevel2(parseInt(e.target.value))}
          className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-white/60">0</span>
          <div className="bg-blue-500/20 px-3 py-1 rounded-full">
            <span className="text-sm font-semibold text-blue-300">3% × {level2} × {monthlySpending} = {level2Earnings} {t('calculator.currency')}</span>
          </div>
          <span className="text-xs text-white/60">500</span>
        </div>
      </div>

      {/* 三级 */}
      <div className="mb-6 bg-white/10 rounded-xl p-4">
        <div className="flex items-center space-x-2 mb-2">
          <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
          <label className="text-base font-bold">{t('calculator.level3')}</label>
          <span className="ml-auto text-xl font-bold text-purple-300">{level3} {t('calculator.people')}</span>
        </div>
        <p className="text-sm text-white/80 mb-1">{t('calculator.level3Desc')}</p>
        <p className="text-xs text-white/60 mb-3 italic">{t('calculator.level3Example')}</p>
        <input
          type="range"
          min="0"
          max="1000"
          step="50"
          value={level3}
          onChange={(e) => setLevel3(parseInt(e.target.value))}
          className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-white/60">0</span>
          <div className="bg-purple-500/20 px-3 py-1 rounded-full">
            <span className="text-sm font-semibold text-purple-300">1% × {level3} × {monthlySpending} = {level3Earnings} {t('calculator.currency')}</span>
          </div>
          <span className="text-xs text-white/60">1000</span>
        </div>
      </div>

      {/* 每人每月消费 */}
      <div className="mb-6 bg-white/10 rounded-xl p-4">
        <div className="flex items-center space-x-2 mb-2">
          <TrendingUp className="w-5 h-5 text-green-300" />
          <label className="text-base font-bold">{t('calculator.monthlySpending')}</label>
          <span className="ml-auto text-xl font-bold text-green-300">{monthlySpending} {t('calculator.currency')}</span>
        </div>
        <input
          type="range"
          min="50"
          max="500"
          step="10"
          value={monthlySpending}
          onChange={(e) => setMonthlySpending(parseInt(e.target.value))}
          className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-white/60 mt-1">
          <span>50</span>
          <span>500</span>
        </div>
      </div>

      {/* 收益明细 */}
      <div className="bg-white/10 rounded-xl p-4 mb-4">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-yellow-300">● {t('calculator.level1')} ({level1} {t('calculator.people')} × 5%)</span>
            <span className="font-bold text-yellow-300">{level1Earnings} {t('calculator.currency')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-300">● {t('calculator.level2')} ({level2} {t('calculator.people')} × 3%)</span>
            <span className="font-bold text-blue-300">{level2Earnings} {t('calculator.currency')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-purple-300">● {t('calculator.level3')} ({level3} {t('calculator.people')} × 1%)</span>
            <span className="font-bold text-purple-300">{level3Earnings} {t('calculator.currency')}</span>
          </div>
        </div>
      </div>

      {/* 总收益 */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-4 text-center">
        <div className="text-sm font-medium text-yellow-900 mb-1">{t('calculator.monthlyIncome')}</div>
        <div className="text-4xl font-bold text-yellow-900">{totalEarnings} {t('calculator.currency')}</div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        }
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
}
