import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Download, Image as ImageIcon, FileText, Video, Mail } from 'lucide-react';

export default function Materials() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('posters');
  const [showAllPosters, setShowAllPosters] = useState(false);

  // 海报数据 - 使用老版本的图片URL
  const posters = [
    { 
      id: 1, 
      titleTj: 'Хариди гурӯҳӣ', 
      titleZh: '团购介绍', 
      titleRu: 'Групповая покупка', 
      url: 'https://earn.tezbarakat.com/images/01-GroupBuy-Infographic-TJ.png',
      official: true 
    },
    { 
      id: 2, 
      titleTj: 'Системаи даъват', 
      titleZh: '邀请系统', 
      titleRu: 'Система приглашений', 
      url: 'https://earn.tezbarakat.com/images/02-Referral-Infographic-TJ.png',
      official: true 
    },
    { 
      id: 3, 
      titleTj: 'Мағозаи холҳо', 
      titleZh: '积分商城', 
      titleRu: 'Магазин баллов', 
      url: 'https://earn.tezbarakat.com/images/03-PointsMall-Infographic-TJ.png',
      official: true 
    },
    { 
      id: 4, 
      titleTj: 'Роҳнамои зуд', 
      titleZh: '快速指南', 
      titleRu: 'Быстрое руководство', 
      url: 'https://earn.tezbarakat.com/images/04-QuickStart-Infographic-TJ.png',
      official: true 
    },
    { 
      id: 5, 
      titleTj: 'Амнияти маблағ', 
      titleZh: '资金安全', 
      titleRu: 'Безопасность средств', 
      url: 'https://earn.tezbarakat.com/images/05-FundSafety-Infographic-TJ.png',
      official: true 
    },
    { 
      id: 6, 
      titleTj: 'Чархи бахт', 
      titleZh: '幸运轮盘', 
      titleRu: 'Колесо удачи', 
      url: 'https://earn.tezbarakat.com/images/06-SpinWheel-Poster-TJ.png',
      official: true 
    },
    { 
      id: 7, 
      titleTj: 'Барои донишҷӯён', 
      titleZh: '给学生', 
      titleRu: 'Для студентов', 
      url: 'https://earn.tezbarakat.com/images/poster-student.png',
      official: false 
    },
    { 
      id: 8, 
      titleTj: 'Оилаи хушбахт', 
      titleZh: '幸福家庭', 
      titleRu: 'Счастливая семья', 
      url: 'https://earn.tezbarakat.com/images/poster-family.png',
      official: false 
    },
    { 
      id: 9, 
      titleTj: 'Telegram-ро кушоед', 
      titleZh: '打开Telegram', 
      titleRu: 'Откройте Telegram', 
      url: 'https://earn.tezbarakat.com/images/poster-telegram.png',
      official: false 
    },
    { 
      id: 10, 
      titleTj: 'Табрик! Ғолиб!', 
      titleZh: '恭喜！获胜！', 
      titleRu: 'Поздравляем! Победа!', 
      url: 'https://earn.tezbarakat.com/images/poster-winner.png',
      official: false 
    },
    { 
      id: 11, 
      titleTj: 'Системаи комиссия', 
      titleZh: '佣金系统', 
      titleRu: 'Система комиссий', 
      url: 'https://earn.tezbarakat.com/images/poster-commission.png',
      official: false 
    },
    { 
      id: 12, 
      titleTj: 'Даромади иловагӣ', 
      titleZh: '额外收入', 
      titleRu: 'Дополнительный доход', 
      url: 'https://earn.tezbarakat.com/images/poster-earn-money.png',
      official: false 
    },
  ];

  const displayedPosters = showAllPosters ? posters : posters.slice(0, 4);

  // 获取海报标题（根据当前语言）
  const getPosterTitle = (poster) => {
    if (language === 'zh') return poster.titleZh;
    if (language === 'ru') return poster.titleRu;
    return poster.titleTj;
  };

  // 下载单个海报
  const handleDownload = async (url, title) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${title}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Download failed:', error);
      alert('下载失败，请稍后重试');
    }
  };

  // 下载所有海报
  const handleDownloadAll = () => {
    posters.forEach((poster, index) => {
      setTimeout(() => {
        handleDownload(poster.url, getPosterTitle(poster));
      }, index * 500);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pb-20">
      {/* 头部 - 深绿色区域 */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 相机图标 */}
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-5xl">📸</span>
          </div>
          {/* 标题 */}
          <h1 className="text-3xl font-bold mb-2">{t('materials.title')} 📸</h1>
          {/* 副标题 */}
          <p className="text-emerald-100 text-lg">{t('materials.subtitle')}</p>
        </div>
      </div>

      {/* 快速下载区域 - 金黄色横幅 */}
      <div className="max-w-4xl mx-auto px-4 -mt-8">
        <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-3xl">📦</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">
                  {language === 'tj' && 'Боргирии зуд'}
                  {language === 'zh' && '快速下载'}
                  {language === 'ru' && 'Быстрая загрузка'}
                </h3>
                <p className="text-amber-50 text-sm">
                  {language === 'tj' && 'Ҳамаи маводҳоро якҷоя боргирӣ кунед'}
                  {language === 'zh' && '一次性下载所有素材'}
                  {language === 'ru' && 'Скачайте все материалы сразу'}
                </p>
              </div>
            </div>
            <button
              onClick={handleDownloadAll}
              className="bg-white text-amber-600 px-6 py-3 rounded-xl font-bold hover:bg-amber-50 transition-colors flex items-center gap-2 shadow-lg"
            >
              <Download className="w-5 h-5" />
              {t('materials.downloadAll')}
            </button>
          </div>
        </div>
      </div>

      {/* 标签导航 */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="flex gap-3 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('posters')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-colors ${
              activeTab === 'posters'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-white text-emerald-600 border-2 border-emerald-200 hover:border-emerald-400'
            }`}
          >
            <ImageIcon className="w-5 h-5" />
            <span>
              {language === 'tj' && 'Плакатҳо'}
              {language === 'zh' && '海报'}
              {language === 'ru' && 'Плакаты'}
            </span>
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">12</span>
          </button>
          
          <button
            onClick={() => setActiveTab('texts')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-colors ${
              activeTab === 'texts'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-white text-emerald-600 border-2 border-emerald-200 hover:border-emerald-400'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span>
              {language === 'tj' && 'Матнҳо'}
              {language === 'zh' && '文案'}
              {language === 'ru' && 'Тексты'}
            </span>
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">10</span>
          </button>
          
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-colors ${
              activeTab === 'videos'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-white text-emerald-600 border-2 border-emerald-200 hover:border-emerald-400'
            }`}
          >
            <Video className="w-5 h-5" />
            <span>
              {language === 'tj' && 'Идеяҳои видео'}
              {language === 'zh' && '视频创意'}
              {language === 'ru' && 'Видео идеи'}
            </span>
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">5</span>
          </button>
          
          <button
            onClick={() => setActiveTab('request')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-colors ${
              activeTab === 'request'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-white text-emerald-600 border-2 border-emerald-200 hover:border-emerald-400'
            }`}
          >
            <Mail className="w-5 h-5" />
            <span>
              {language === 'tj' && 'Дархост'}
              {language === 'zh' && '素材需求'}
              {language === 'ru' && 'Запрос'}
            </span>
          </button>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        {/* 海报标签内容 */}
        {activeTab === 'posters' && (
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              ⭐ 
              {language === 'tj' && 'Плакатҳо'}
              {language === 'zh' && '海报'}
              {language === 'ru' && 'Плакаты'}
            </h2>
            <p className="text-gray-600 mb-6">
              {language === 'tj' && 'Плакатҳои расмии TezBarakat барои мубодила'}
              {language === 'zh' && 'TezBarakat官方海报素材'}
              {language === 'ru' && 'Официальные плакаты TezBarakat для распространения'}
            </p>
            
            {/* 海报网格 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {displayedPosters.map((poster) => (
                <div key={poster.id} className="relative group">
                  {/* 海报图片容器 */}
                  <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden relative">
                    <img
                      src={poster.url}
                      alt={getPosterTitle(poster)}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {/* Official徽章 */}
                    {poster.official && (
                      <div className="absolute top-2 left-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-md font-medium">
                        Official
                      </div>
                    )}
                    
                    {/* 下载按钮 */}
                    <button
                      onClick={() => handleDownload(poster.url, getPosterTitle(poster))}
                      className="absolute bottom-2 right-2 bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors shadow-lg opacity-0 group-hover:opacity-100"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* 海报标题 */}
                  <p className="mt-2 text-sm font-medium text-gray-700 text-center">
                    {getPosterTitle(poster)}
                  </p>
                </div>
              ))}
            </div>

            {/* 查看更多/收起按钮 */}
            <div className="text-center">
              <button
                onClick={() => setShowAllPosters(!showAllPosters)}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-dashed border-emerald-300 text-emerald-600 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-colors font-medium"
              >
                {showAllPosters ? (
                  <>
                    <span>
                      {language === 'tj' && 'Пӯшидан'}
                      {language === 'zh' && '收起'}
                      {language === 'ru' && 'Свернуть'}
                    </span>
                  </>
                ) : (
                  <>
                    <span>
                      {language === 'tj' && `Бештар дидан (${posters.length - 4})`}
                      {language === 'zh' && `查看更多 (${posters.length - 4})`}
                      {language === 'ru' && `Показать еще (${posters.length - 4})`}
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* 文案标签内容 */}
        {activeTab === 'texts' && (
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {language === 'tj' && 'Матнҳо ва идеяҳо'}
              {language === 'zh' && '推广文案'}
              {language === 'ru' && 'Тексты и идеи'}
            </h3>
            <p className="text-gray-600">
              {language === 'tj' && 'Ба зудӣ дастрас мешаванд'}
              {language === 'zh' && '即将推出'}
              {language === 'ru' && 'Скоро будут доступны'}
            </p>
          </div>
        )}

        {/* 视频标签内容 */}
        {activeTab === 'videos' && (
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {language === 'tj' && 'Идеяҳои видео'}
              {language === 'zh' && '视频创意'}
              {language === 'ru' && 'Видео идеи'}
            </h3>
            <p className="text-gray-600">
              {language === 'tj' && 'Ба зудӣ дастрас мешаванд'}
              {language === 'zh' && '即将推出'}
              {language === 'ru' && 'Скоро будут доступны'}
            </p>
          </div>
        )}

        {/* 素材需求标签内容 */}
        {activeTab === 'request' && (
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-6xl mb-4">✉️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {language === 'tj' && 'Дархости маводҳо'}
              {language === 'zh' && '素材需求'}
              {language === 'ru' && 'Запрос материалов'}
            </h3>
            <p className="text-gray-600">
              {language === 'tj' && 'Ба зудӣ дастрас мешаванд'}
              {language === 'zh' && '即将推出'}
              {language === 'ru' && 'Скоро будут доступны'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
