import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, Coins, Shield, Target, Sparkles } from 'lucide-react';

export default function Platform() {
  const { t, translations } = useLanguage();
  const platform = translations.platform || {};

  const features = [
    { icon: Users, title: platform.features?.referral?.title || '邀请=赚钱!', color: 'bg-blue-500' },
    { icon: Coins, title: platform.features?.points?.title || '1积分=1索莫尼', color: 'bg-yellow-500' },
    { icon: Shield, title: platform.features?.safety?.title || '资金安全!', color: 'bg-green-500' },
    { icon: Target, title: platform.features?.wheel?.title || '幸运转盘', color: 'bg-purple-500' },
    { icon: Sparkles, title: platform.features?.trust?.title || '为什么可以信任?', color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-4">
      <div className="text-center py-2">
        <h1 className="text-2xl font-bold text-gray-800">{t('platform.title')}</h1>
        <p className="text-gray-500 text-sm">{t('platform.subtitle')}</p>
      </div>

      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-4 text-center">
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">{platform.subsidy?.badge || '特别补贴!'}</span>
        <h2 className="text-xl font-bold text-green-800 mt-2">{platform.subsidy?.title || '1000万索莫尼补贴!'}</h2>
        <p className="text-green-700 text-sm mt-1">{platform.subsidy?.why || '为什么这么便宜?'}</p>
        <p className="text-green-800 font-medium mt-1">{platform.subsidy?.answer || '👉 因为我们补贴!'}</p>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">{platform.howItWorks?.title || '如何运作?'}</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">1</div>
            <div><p className="font-medium text-gray-800">{platform.howItWorks?.step1?.title || '支付'}</p><p className="text-gray-500 text-sm">{platform.howItWorks?.step1?.desc || '支付1/3价格'}</p></div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold">2</div>
            <div><p className="font-medium text-gray-800">{platform.howItWorks?.step2?.title || '等待'}</p><p className="text-gray-500 text-sm">{platform.howItWorks?.step2?.desc || '系统选择中奖者'}</p></div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">3</div>
            <div><p className="font-medium text-gray-800">{platform.howItWorks?.step3?.title || '获得结果'}</p><p className="text-gray-500 text-sm">{platform.howItWorks?.step3?.desc || '商品或100%积分!'}</p></div>
          </div>
        </div>
        <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-3 text-center">
          <p className="text-red-600 font-medium">{platform.howItWorks?.guarantee || '❌ 没中奖? → 100%积分返还!'}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm text-center">
              <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mx-auto`}><Icon className="w-6 h-6 text-white" /></div>
              <p className="font-medium text-gray-800 mt-2 text-sm">{feature.title}</p>
            </div>
          );
        })}
      </div>

      <a href="https://t.me/tezbarakatbot" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-r from-green-600 to-green-500 text-white text-center py-4 rounded-2xl font-bold text-lg shadow-lg">{t('common.startNow')} 🚀</a>
    </div>
  );
}
