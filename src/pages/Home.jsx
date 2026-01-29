import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useInvite } from '../contexts/InviteContext';
import { FileText, Image, BookOpen, Info, Shield, TrendingUp, Users, ChevronRight, Gift, AlertCircle } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();
  const { inviteCode, setInviteCode, inviteLink } = useInvite();
  const [tempCode, setTempCode] = useState('');

  const handleCreateLink = () => {
    if (tempCode.trim()) {
      setInviteCode(tempCode.trim().toUpperCase());
    }
  };

  const menuItems = [
    { path: '/scripts', icon: FileText, title: t('home.scripts.title'), desc: t('home.scripts.desc'), color: 'from-blue-500 to-blue-600' },
    { path: '/materials', icon: Image, title: t('home.materials.title'), desc: t('home.materials.desc'), color: 'from-purple-500 to-purple-600' },
    { path: '/guide', icon: BookOpen, title: t('home.guide.title'), desc: t('home.guide.desc'), color: 'from-orange-500 to-orange-600' },
  ];

  const stats = [
    { icon: Shield, value: t('home.stats.safe'), color: 'text-green-600' },
    { icon: TrendingUp, value: t('home.stats.income'), color: 'text-yellow-600' },
    { icon: Users, value: t('home.stats.promoters'), color: 'text-blue-600' },
  ];

  return (
    <div className="space-y-4">
      {/* 欢迎标题区 */}
      <div className="text-center py-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('home.welcome.title')}</h1>
        <p className="text-gray-600 text-base">{t('home.welcome.subtitle')}</p>
      </div>

      {/* 邀请赚钱标题区 */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-6 text-white text-center shadow-lg">
        <div className="text-5xl mb-3">💰</div>
        <h2 className="text-2xl font-bold mb-2">{t('home.inviteEarn.title')}</h2>
        <p className="text-white/90 text-sm">{t('home.inviteEarn.subtitle')}</p>
      </div>

      {/* 特别补贴横幅 */}
      <Link 
        to="/platform#subsidy"
        className="block bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all"
      >
        <div className="flex items-start space-x-3">
          <div className="text-4xl">🎁</div>
          <div className="flex-1">
            <div className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
              {t('home.subsidy.badge')}
            </div>
            <h3 className="text-white text-xl font-bold mb-1">{t('home.subsidy.title')}</h3>
            <p className="text-yellow-100 text-sm">{t('home.subsidy.subtitle')}</p>
          </div>
        </div>
      </Link>

      {/* 步骤1：创建链接 */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">1</span>
          </div>
          <h3 className="font-bold text-gray-800 text-lg">{t('home.step1')}</h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{t('home.step1Hint')}</p>
        
        <div className="space-y-3">
          <input
            type="text"
            value={tempCode}
            onChange={(e) => setTempCode(e.target.value.toUpperCase())}
            placeholder={t('invite.placeholder')}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-center font-bold tracking-wider focus:border-green-500 focus:outline-none"
            maxLength={20}
          />
          
          <button
            onClick={handleCreateLink}
            disabled={!tempCode.trim()}
            className={`w-full py-3 rounded-xl font-bold text-white transition-all ${
              tempCode.trim() 
                ? 'bg-gradient-to-r from-green-600 to-green-500 shadow-md hover:shadow-lg' 
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {t('home.createLink')}
          </button>
        </div>

        <div className="mt-4 bg-blue-50 border-2 border-blue-200 rounded-xl p-3 flex items-start space-x-2">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-blue-700 text-sm">{t('invite.hint')}</p>
        </div>
      </div>

      {/* 步骤2：推广需要什么 */}
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">2</span>
          </div>
          <h3 className="font-bold text-gray-800 text-lg">{t('home.step2')}</h3>
        </div>

        {/* 三个功能卡片 */}
        <div className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className="flex items-center bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 ml-4">
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* 统计数据区域 */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm">
              <Icon className={`w-7 h-7 mx-auto ${stat.color} mb-2`} />
              <p className="text-xs font-bold text-gray-700 whitespace-pre-line leading-tight">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* 底部平台介绍卡片 */}
      <Link 
        to="/platform" 
        className="flex items-center bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all"
      >
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
          <Info className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 ml-4">
          <h3 className="font-bold text-gray-800">{t('home.platform.title')}</h3>
          <p className="text-sm text-gray-500">{t('home.platform.desc')}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
      </Link>
    </div>
  );
}
