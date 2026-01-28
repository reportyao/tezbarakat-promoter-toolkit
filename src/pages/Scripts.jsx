import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInvite } from '../contexts/InviteContext';
import { Copy, Check, Users, UserPlus, GraduationCap, Briefcase, Send, Gift, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

export default function Scripts() {
  const { t, translations } = useLanguage();
  const { inviteCode, inviteLink } = useInvite();
  const [activeCategory, setActiveCategory] = useState('family');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [showObjections, setShowObjections] = useState(false);

  const categories = [
    { id: 'family', icon: Users, label: t('scripts.categories.family') },
    { id: 'friends', icon: UserPlus, label: t('scripts.categories.friends') },
    { id: 'students', icon: GraduationCap, label: t('scripts.categories.students') },
    { id: 'colleagues', icon: Briefcase, label: t('scripts.categories.colleagues') },
    { id: 'telegram', icon: Send, label: t('scripts.categories.telegram') },
    { id: 'subsidy', icon: Gift, label: t('scripts.categories.subsidy') },
  ];

  const replaceInviteLink = (text) => {
    if (!inviteLink) return text;
    return text.replace(/👉\s*$/gm, `👉 ${inviteLink}`).replace(/👉(\s*\n)/g, `👉 ${inviteLink}$1`);
  };

  const handleCopy = (text, index) => {
    const finalText = replaceInviteLink(text);
    navigator.clipboard.writeText(finalText);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const scripts = translations.scripts?.items?.[activeCategory] || [];
  const objections = translations.scripts?.objections?.items || [];

  return (
    <div className="space-y-4">
      <div className="text-center py-2">
        <h1 className="text-2xl font-bold text-gray-800">{t('scripts.title')}</h1>
        <p className="text-gray-500 text-sm">{t('scripts.subtitle')}</p>
      </div>

      {!inviteCode && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex items-start space-x-2">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-yellow-700 text-sm font-medium">{t('scripts.tips.title')}</p>
            <p className="text-yellow-600 text-xs">{t('scripts.tips.items')?.[0]}</p>
          </div>
        </div>
      )}

      <div className="flex overflow-x-auto space-x-2 pb-2 -mx-4 px-4 scrollbar-hide">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                isActive ? 'bg-green-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{cat.label}</span>
            </button>
          );
        })}
      </div>

      <div className="space-y-3">
        {scripts.map((script, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">{replaceInviteLink(script)}</p>
            <div className="mt-3 flex justify-end">
              <button
                onClick={() => handleCopy(script, index)}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  copiedIndex === index ? 'bg-green-100 text-green-700' : 'bg-green-600 text-white'
                }`}
              >
                {copiedIndex === index ? <><Check className="w-4 h-4" /><span>{t('common.copied')}</span></> : <><Copy className="w-4 h-4" /><span>{t('common.copy')}</span></>}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <button onClick={() => setShowObjections(!showObjections)} className="w-full flex items-center justify-between p-4 text-left">
          <span className="font-bold text-gray-800">{t('scripts.objections.title')}</span>
          {showObjections ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {showObjections && (
          <div className="px-4 pb-4 space-y-3">
            {objections.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-3">
                <p className="font-medium text-gray-800 text-sm">❓ {item.q}</p>
                <p className="text-gray-600 text-sm mt-1">✅ {item.a}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
