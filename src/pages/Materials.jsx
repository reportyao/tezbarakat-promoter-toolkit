import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Camera } from 'lucide-react';

export default function Materials() {
  const { t } = useLanguage();

  return (
    <div className="space-y-4 pb-6">
      {/* 页面标题区域 */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white text-center">
        <div className="text-4xl mb-3">
          <Camera className="w-12 h-12 mx-auto" />
        </div>
        <h1 className="text-2xl font-bold mb-2">{t('materials.title')} 📸</h1>
        <p className="text-white/90 text-sm">{t('materials.subtitle')}</p>
      </div>

      {/* 提示信息 */}
      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 text-center">
        <p className="text-yellow-800 font-medium">
          {t('common.comingSoon') || 'Ба зудӣ...'}
        </p>
        <p className="text-yellow-600 text-sm mt-1">
          Маводҳои тарғиботӣ дар ҳоли таҳия ҳастанд
        </p>
      </div>
    </div>
  );
}
