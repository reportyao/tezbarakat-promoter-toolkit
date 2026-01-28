import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useInvite } from '../contexts/InviteContext';
import { FileText, Image, BookOpen, Info, Shield, TrendingUp, Users, ChevronRight, Sparkles } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();
  const { inviteCode, inviteLink } = useInvite();

  const menuItems = [
    { path: '/scripts', icon: FileText, title: t('home.scripts.title'), desc: t('home.scripts.desc'), color: 'from-blue-500 to-blue-600' },
    { path: '/materials', icon: Image, title: t('home.materials.title'), desc: t('home.materials.desc'), color: 'from-purple-500 to-purple-600' },
    { path: '/guide', icon: BookOpen, title: t('home.guide.title'), desc: t('home.guide.desc'), color: 'from-orange-500 to-orange-600' },
    { path: '/platform', icon: Info, title: t('home.platform.title'), desc: t('home.platform.desc'), color: 'from-green-500 to-green-600' },
  ];

  const stats = [
    { icon: Shield, value: t('home.stats.safe'), color: 'text-green-600' },
    { icon: TrendingUp, value: t('home.stats.income'), color: 'text-yellow-600' },
    { icon: Users, value: t('home.stats.promoters'), color: 'text-blue-600' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex items-start space-x-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold">{t('home.title')}</h1>
            <p className="text-white/80 text-sm mt-1">{t('home.subtitle')}</p>
          </div>
        </div>
      </div>

      {!inviteCode && (
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4">
          <div className="flex items-center space-x-2 text-yellow-700 font-bold mb-2">
            <span className="bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full text-xs">1</span>
            <span>{t('home.step1')}</span>
          </div>
          <p className="text-yellow-600 text-sm">{t('invite.hint')}</p>
        </div>
      )}

      {inviteCode && (
        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-700 font-bold text-sm">✅ {t('invite.linkReady')}</p>
              <p className="text-green-600 text-xs mt-1 break-all">{inviteLink}</p>
            </div>
            <button 
              onClick={() => navigator.clipboard.writeText(inviteLink)}
              className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium"
            >
              {t('common.copy')}
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-3 text-center shadow-sm">
              <Icon className={`w-6 h-6 mx-auto ${stat.color}`} />
              <p className="text-xs font-bold mt-1 text-gray-700">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-3">{t('home.whatYouNeed')}</h2>
        <div className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.path} to={item.path} className="flex items-center bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 ml-4">
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
