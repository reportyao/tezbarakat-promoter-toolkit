import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Download, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

export default function Materials() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('posters');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [showAllPosters, setShowAllPosters] = useState(false);

  // 海报数据 - 硬编码，不依赖翻译
  const posters = [
    { id: 1, title: 'Хариди гурӯҳӣ', titleZh: '团购', titleRu: 'Групповая покупка', url: 'https://earn.tezbarakat.com/images/01-GroupBuy-Infographic-TJ.png', official: true },
    { id: 2, title: 'Системаи даъват', titleZh: '邀请系统', titleRu: 'Система приглашений', url: 'https://earn.tezbarakat.com/images/02-Referral-Infographic-TJ.png', official: true },
    { id: 3, title: 'Мағозаи холҳо', titleZh: '积分商城', titleRu: 'Магазин баллов', url: 'https://earn.tezbarakat.com/images/03-PointsMall-Infographic-TJ.png', official: true },
    { id: 4, title: 'Роҳнамои зуд', titleZh: '快速指南', titleRu: 'Быстрый старт', url: 'https://earn.tezbarakat.com/images/04-QuickStart-Infographic-TJ.png', official: true },
    { id: 5, title: 'Амнияти маблағ', titleZh: '资金安全', titleRu: 'Безопасность средств', url: 'https://earn.tezbarakat.com/images/05-FundSafety-Infographic-TJ.png', official: true },
    { id: 6, title: 'Чархи бахт', titleZh: '幸运轮盘', titleRu: 'Колесо удачи', url: 'https://earn.tezbarakat.com/images/06-SpinWheel-Poster-TJ.png', official: true },
    { id: 7, title: 'Барои донишҷӯён', titleZh: '给学生', titleRu: 'Для студентов', url: 'https://earn.tezbarakat.com/images/poster-student.png', official: false },
    { id: 8, title: 'Оилаи хушбахт', titleZh: '幸福家庭', titleRu: 'Счастливая семья', url: 'https://earn.tezbarakat.com/images/poster-family.png', official: false },
    { id: 9, title: 'Telegram-ро кушоед', titleZh: '打开Telegram', titleRu: 'Откройте Telegram', url: 'https://earn.tezbarakat.com/images/poster-telegram.png', official: false },
    { id: 10, title: 'Табрик! Ғолиб!', titleZh: '恭喜！获胜！', titleRu: 'Поздравляем! Победа!', url: 'https://earn.tezbarakat.com/images/poster-winner.png', official: false },
    { id: 11, title: 'Системаи комиссия', titleZh: '佣金系统', titleRu: 'Система комиссий', url: 'https://earn.tezbarakat.com/images/poster-commission.png', official: false },
    { id: 12, title: 'Даромади иловагӣ', titleZh: '额外收入', titleRu: 'Дополнительный доход', url: 'https://earn.tezbarakat.com/images/poster-earn-money.png', official: false },
  ];

  const displayedPosters = showAllPosters ? posters : posters.slice(0, 4);

  // 下载海报
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
    }
  };

  // 下载所有素材
  const handleDownloadAll = () => {
    posters.forEach((poster, index) => {
      setTimeout(() => {
        handleDownload(poster.url, poster.title);
      }, index * 500);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pb-20">
      {/* 头部 */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">📸</div>
          <h1 className="text-3xl font-bold mb-3">{t('materials.title')}</h1>
          <p className="text-emerald-100 text-lg">{t('materials.subtitle')}</p>
        </div>
      </div>

      {/* 快速下载区域 */}
      <div className="max-w-4xl mx-auto px-4 -mt-8">
        <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Боргирии зуд / 快速下载 / Быстрая загрузка</h3>
              <p className="text-amber-50 text-sm">Ҳамаи маводҳо / 所有素材 / Все материалы</p>
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

      {/* 海报内容 */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            ⭐ Плакатҳо / 海报 / Плакаты
          </h2>
          <p className="text-gray-600 mb-6">Плакатҳои расмии TezBarakat / TezBarakat官方海报 / Официальные плакаты TezBarakat</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {displayedPosters.map((poster) => (
              <div key={poster.id} className="relative group">
                <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src={poster.url}
                    alt={poster.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {poster.official && (
                  <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">
                    Official
                  </div>
                )}
                <div className="mt-3 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800 text-sm">{poster.title}</h3>
                  <button
                    onClick={() => handleDownload(poster.url, poster.title)}
                    className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {posters.length > 4 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAllPosters(!showAllPosters)}
                className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors flex items-center gap-2 mx-auto"
              >
                {showAllPosters ? (
                  <>
                    Пӯшидан / 收起 / Скрыть
                    <ChevronUp className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Бештар дидан ({posters.length - 4}) / 查看更多 ({posters.length - 4}) / Показать еще ({posters.length - 4})
                    <ChevronDown className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* 提示信息 */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 text-center">
          <p className="text-amber-800 font-medium mb-2">
            📝 Матнҳо ва идеяҳои видео / 推广文案和视频创意 / Тексты и видео идеи
          </p>
          <p className="text-amber-600 text-sm">
            Ба зудӣ дастрас мешаванд / 即将推出 / Скоро будут доступны
          </p>
        </div>
      </div>
    </div>
  );
}
