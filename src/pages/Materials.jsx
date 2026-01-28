import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Download, Eye, X } from 'lucide-react';

export default function Materials() {
  const { t } = useLanguage();
  const [previewImage, setPreviewImage] = useState(null);

  const materials = [
    { id: 1, title: t('materials.items')?.[0]?.title || '拼团介绍', file: '01-GroupBuy-Infographic-TJ.png' },
    { id: 2, title: t('materials.items')?.[1]?.title || '邀请系统', file: '02-Referral-Infographic-TJ.png' },
    { id: 3, title: t('materials.items')?.[2]?.title || '积分商城', file: '03-PointsMall-Infographic-TJ.png' },
    { id: 4, title: t('materials.items')?.[3]?.title || '快速入门', file: '04-QuickStart-Infographic-TJ.png' },
    { id: 5, title: t('materials.items')?.[4]?.title || '资金安全', file: '05-FundSafety-Infographic-TJ.png' },
    { id: 6, title: t('materials.items')?.[5]?.title || '幸运转盘', file: '06-SpinWheel-Poster-TJ.png' },
  ];

  const handleDownload = (file) => {
    const link = document.createElement('a');
    link.href = `/materials/${file}`;
    link.download = file;
    link.click();
  };

  return (
    <div className="space-y-4">
      <div className="text-center py-2">
        <h1 className="text-2xl font-bold text-gray-800">{t('materials.title')}</h1>
        <p className="text-gray-500 text-sm">{t('materials.subtitle')}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {materials.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="aspect-[3/4] bg-gray-100 relative cursor-pointer" onClick={() => setPreviewImage(item)}>
              <img src={`/materials/${item.file}`} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <p className="text-sm font-medium text-gray-800 truncate">{item.title}</p>
              <button onClick={() => handleDownload(item.file)} className="mt-2 w-full flex items-center justify-center space-x-1 bg-green-600 text-white py-2 rounded-xl text-sm font-medium">
                <Download className="w-4 h-4" />
                <span>{t('common.download')}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {previewImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setPreviewImage(null)}>
          <button className="absolute top-4 right-4 text-white" onClick={() => setPreviewImage(null)}><X className="w-8 h-8" /></button>
          <img src={`/materials/${previewImage.file}`} alt={previewImage.title} className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </div>
  );
}
