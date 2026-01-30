import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInvite } from '../contexts/InviteContext';
import { Download, Image as ImageIcon, FileText, Check, Copy, Send } from 'lucide-react';

export default function Materials() {
  const { t, language } = useLanguage();
  const { inviteCode } = useInvite();
  const [activeTab, setActiveTab] = useState('posters');
  const [showAllPosters, setShowAllPosters] = useState(false);
  const [showAllTexts, setShowAllTexts] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  // 获取邀请链接
  const getInviteLink = () => {
    const code = inviteCode || 'YOUR_CODE';
    return `https://t.me/tezbarakatbot/shoppp?startapp=${code}`;
  };

  // 海报数据
  const posters = [
    { 
      id: 1, 
      titleTj: 'Хариди гурӯҳӣ', 
      titleZh: '团购介绍', 
      titleRu: 'Групповая покупка', 
      localUrl: '/images/01-GroupBuy-Infographic-TJ.png',
      fallbackUrl: 'https://earn.tezbarakat.com/images/01-GroupBuy-Infographic-TJ.png',
      official: true 
    },
    { 
      id: 2, 
      titleTj: 'Системаи даъват', 
      titleZh: '邀请系统', 
      titleRu: 'Система приглашений', 
      localUrl: '/images/02-Referral-Infographic-TJ.png',
      fallbackUrl: 'https://earn.tezbarakat.com/images/02-Referral-Infographic-TJ.png',
      official: true 
    },
    { 
      id: 3, 
      titleTj: 'Мағозаи холҳо', 
      titleZh: '积分商城', 
      titleRu: 'Магазин баллов', 
      localUrl: '/images/03-PointsMall-Infographic-TJ.png',
      fallbackUrl: 'https://earn.tezbarakat.com/images/03-PointsMall-Infographic-TJ.png',
      official: true 
    },
    { 
      id: 4, 
      titleTj: 'Роҳнамои зуд', 
      titleZh: '快速指南', 
      titleRu: 'Быстрое руководство', 
      localUrl: '/images/04-QuickStart-Infographic-TJ.png',
      fallbackUrl: 'https://earn.tezbarakat.com/images/04-QuickStart-Infographic-TJ.png',
      official: true 
    },
    { 
      id: 5, 
      titleTj: 'Амнияти маблағ', 
      titleZh: '资金安全', 
      titleRu: 'Безопасность средств', 
      localUrl: '/images/05-FundSafety-Infographic-TJ.png',
      fallbackUrl: 'https://earn.tezbarakat.com/images/05-FundSafety-Infographic-TJ.png',
      official: true 
    },
    { 
      id: 6, 
      titleTj: 'Чархи бахт', 
      titleZh: '幸运轮盘', 
      titleRu: 'Колесо удачи', 
      localUrl: '/images/06-SpinWheel-Poster-TJ.png',
      fallbackUrl: 'https://earn.tezbarakat.com/images/06-SpinWheel-Poster-TJ.png',
      official: true 
    },

  ];

  // 文案数据 - 完整的推广文案
  const copyTexts = {
    tj: [
      {
        id: 1,
        icon: '🛒',
        title: 'Хариди гурӯҳӣ',
        content: `🛒 TezBarakat - хариди гурӯҳӣ бо кафолат!

✅ Се нафар якҷоя мехаранд
✅ Як нафар молро мегирад
✅ Дигарон 100% холҳо мегиранд

👉 Ҳозир оғоз кунед:
${getInviteLink()}`
      },
      {
        id: 2,
        icon: '💰',
        title: 'Даромади иловагӣ',
        content: `💰 Мехоҳед пули иловагӣ гиред?

Дар TezBarakat дӯстонро даъват кунед:
📌 5% аз хариди дӯстон
📌 3% аз хариди дӯстони онҳо
📌 1% аз сатҳи сеюм

🚀 То 3000 Сомонӣ дар моҳ!

👉 ${getInviteLink()}`
      },
      {
        id: 3,
        icon: '🎁',
        title: 'Мағозаи холҳо',
        content: `🎁 1 Хол = 1 Сомонӣ!

Дар Мағозаи Холҳои TezBarakat:
🎧 TWS Earphones - 200 хол
🔋 Power Bank - 150 хол
⌚ Smart Watch - 500 хол

👉 Ҳозир харид кунед:
${getInviteLink()}`
      },
      {
        id: 4,
        icon: '🔒',
        title: 'Амнияти маблағ',
        content: `🔒 Пули шумо 100% бехатар!

Дар TezBarakat:
✅ Агар набуред - 100% холҳо бармегардад
✅ Холҳо = Сомонӣ (1:1)
✅ Ҳеҷ гоҳ зиён намебинед!

👉 Ҳозир санҷед:
${getInviteLink()}`
      },
      {
        id: 5,
        icon: '🎰',
        title: 'Чархи бахт',
        content: `🎰 Чархи бахтро бигардонед!

Ҳар рӯз шонси бурдан:
🎁 Холҳои ройгон
📱 Телефонҳо
🎧 Аксессуарҳо

👉 Бахти худро санҷед:
${getInviteLink()}`
      },
      {
        id: 6,
        icon: '🚀',
        title: 'Оғози зуд',
        content: `🚀 Дар 5 дақиқа оғоз кунед!

1️⃣ Telegram-ро кушоед
2️⃣ Ба @tezbarakatbot равед
3️⃣ Суратҳисобро пур кунед (аз 10 Сомонӣ)
4️⃣ Дар хариди гурӯҳӣ иштирок кунед!

👉 ${getInviteLink()}`
      },
      {
        id: 7,
        icon: '🎓',
        title: 'Барои донишҷӯён',
        content: `🎓 Донишҷӯён! Пули иловагӣ лозим?

Бо TezBarakat:
📚 Дар вақти холӣ пул гиред
💰 Дӯстонро даъват кунед = комиссия гиред
🎁 Молҳоро арзон харед

👉 Ҳозир оғоз кунед:
${getInviteLink()}`
      },
      {
        id: 8,
        icon: '👨‍👩‍👧‍👦',
        title: 'Барои оилаҳо',
        content: `👨‍👩‍👧‍👦 Оилаи шумо сарфа мекунад!

Бо TezBarakat:
🛒 Молҳо 70% арзонтар
🎁 Холҳо барои харидҳои оянда
💰 Даромад аз даъватҳо

👉 Оилаатонро ҳамроҳ кунед:
${getInviteLink()}`
      },
      {
        id: 9,
        icon: '🏆',
        title: 'Ҳикояи муваффақият',
        content: `🏆 Ман дар TezBarakat бурдам!

📱 Телефони нав гирифтам
💰 Танҳо 1/3 нарх пардохтам
🎁 Дигарон холҳо гирифтанд

Шумо ҳам метавонед! 👇
${getInviteLink()}`
      },
      {
        id: 10,
        icon: '📊',
        title: 'Системаи комиссия',
        content: `📊 Чӣ тавр комиссия кор мекунад?

Сатҳи 1: 5% аз хариди дӯстон
Сатҳи 2: 3% аз хариди дӯстони онҳо
Сатҳи 3: 1% аз сатҳи сеюм

Мисол: 10 дӯст + 50 дӯсти онҳо + 250 нафари сеюм
= 450 Сомонӣ дар моҳ! 🚀

👉 ${getInviteLink()}`
      }
    ],
    zh: [
      {
        id: 1,
        icon: '🛒',
        title: '团购介绍',
        content: `🛒 TezBarakat - 有保障的团购平台！

✅ 三人一起购买
✅ 一人获得商品
✅ 其他人获得100%积分返还

👉 立即开始：
${getInviteLink()}`
      },
      {
        id: 2,
        icon: '💰',
        title: '额外收入',
        content: `💰 想要赚取额外收入吗？

在TezBarakat邀请朋友：
📌 好友消费的5%
📌 好友的好友消费的3%
📌 第三级消费的1%

🚀 每月最高3000索莫尼！

👉 ${getInviteLink()}`
      },
      {
        id: 3,
        icon: '🎁',
        title: '积分商城',
        content: `🎁 1积分 = 1索莫尼！

在TezBarakat积分商城：
🎧 TWS耳机 - 200积分
🔋 充电宝 - 150积分
⌚ 智能手表 - 500积分

👉 立即购买：
${getInviteLink()}`
      },
      {
        id: 4,
        icon: '🔒',
        title: '资金安全',
        content: `🔒 您的资金100%安全！

在TezBarakat：
✅ 未中奖 - 100%积分返还
✅ 积分 = 索莫尼 (1:1)
✅ 永远不会亏损！

👉 立即体验：
${getInviteLink()}`
      },
      {
        id: 5,
        icon: '🎰',
        title: '幸运轮盘',
        content: `🎰 转动幸运轮盘！

每天有机会赢取：
🎁 免费积分
📱 手机
🎧 配件

👉 试试您的运气：
${getInviteLink()}`
      },
      {
        id: 6,
        icon: '🚀',
        title: '快速入门',
        content: `🚀 5分钟快速开始！

1️⃣ 打开Telegram
2️⃣ 访问 @tezbarakatbot
3️⃣ 充值账户（最低10索莫尼）
4️⃣ 参与团购！

👉 ${getInviteLink()}`
      },
      {
        id: 7,
        icon: '🎓',
        title: '给学生',
        content: `🎓 学生们！需要额外收入吗？

使用TezBarakat：
📚 空闲时间赚钱
💰 邀请朋友 = 获得佣金
🎁 低价购买商品

👉 立即开始：
${getInviteLink()}`
      },
      {
        id: 8,
        icon: '👨‍👩‍👧‍👦',
        title: '给家庭',
        content: `👨‍👩‍👧‍👦 您的家庭可以省钱！

使用TezBarakat：
🛒 商品便宜70%
🎁 积分用于未来购物
💰 邀请获得收入

👉 让家人一起加入：
${getInviteLink()}`
      },
      {
        id: 9,
        icon: '🏆',
        title: '成功故事',
        content: `🏆 我在TezBarakat赢了！

📱 获得了新手机
💰 只付了1/3的价格
🎁 其他人获得了积分

您也可以！👇
${getInviteLink()}`
      },
      {
        id: 10,
        icon: '📊',
        title: '佣金系统',
        content: `📊 佣金如何运作？

第1级：好友消费的5%
第2级：好友的好友消费的3%
第3级：第三级消费的1%

例如：10个好友 + 50个二级 + 250个三级
= 每月450索莫尼！🚀

👉 ${getInviteLink()}`
      }
    ],
    ru: [
      {
        id: 1,
        icon: '🛒',
        title: 'Групповая покупка',
        content: `🛒 TezBarakat - групповая покупка с гарантией!

✅ Три человека покупают вместе
✅ Один получает товар
✅ Другие получают 100% баллов

👉 Начните сейчас:
${getInviteLink()}`
      },
      {
        id: 2,
        icon: '💰',
        title: 'Дополнительный доход',
        content: `💰 Хотите дополнительный доход?

Приглашайте друзей в TezBarakat:
📌 5% от покупок друзей
📌 3% от покупок их друзей
📌 1% от третьего уровня

🚀 До 3000 Сомони в месяц!

👉 ${getInviteLink()}`
      },
      {
        id: 3,
        icon: '🎁',
        title: 'Магазин баллов',
        content: `🎁 1 Балл = 1 Сомони!

В Магазине Баллов TezBarakat:
🎧 TWS Наушники - 200 баллов
🔋 Power Bank - 150 баллов
⌚ Smart Watch - 500 баллов

👉 Купите сейчас:
${getInviteLink()}`
      },
      {
        id: 4,
        icon: '🔒',
        title: 'Безопасность средств',
        content: `🔒 Ваши деньги 100% в безопасности!

В TezBarakat:
✅ Не выиграли - 100% баллов возвращается
✅ Баллы = Сомони (1:1)
✅ Вы никогда не потеряете!

👉 Попробуйте сейчас:
${getInviteLink()}`
      },
      {
        id: 5,
        icon: '🎰',
        title: 'Колесо удачи',
        content: `🎰 Крутите колесо удачи!

Каждый день шанс выиграть:
🎁 Бесплатные баллы
📱 Телефоны
🎧 Аксессуары

👉 Испытайте удачу:
${getInviteLink()}`
      },
      {
        id: 6,
        icon: '🚀',
        title: 'Быстрый старт',
        content: `🚀 Начните за 5 минут!

1️⃣ Откройте Telegram
2️⃣ Перейдите к @tezbarakatbot
3️⃣ Пополните счет (от 10 Сомони)
4️⃣ Участвуйте в групповой покупке!

👉 ${getInviteLink()}`
      },
      {
        id: 7,
        icon: '🎓',
        title: 'Для студентов',
        content: `🎓 Студенты! Нужен дополнительный доход?

С TezBarakat:
📚 Зарабатывайте в свободное время
💰 Приглашайте друзей = получайте комиссию
🎁 Покупайте товары дешево

👉 Начните сейчас:
${getInviteLink()}`
      },
      {
        id: 8,
        icon: '👨‍👩‍👧‍👦',
        title: 'Для семей',
        content: `👨‍👩‍👧‍👦 Ваша семья экономит!

С TezBarakat:
🛒 Товары на 70% дешевле
🎁 Баллы для будущих покупок
💰 Доход от приглашений

👉 Присоединяйте семью:
${getInviteLink()}`
      },
      {
        id: 9,
        icon: '🏆',
        title: 'История успеха',
        content: `🏆 Я выиграл в TezBarakat!

📱 Получил новый телефон
💰 Заплатил только 1/3 цены
🎁 Другие получили баллы

Вы тоже можете! 👇
${getInviteLink()}`
      },
      {
        id: 10,
        icon: '📊',
        title: 'Система комиссий',
        content: `📊 Как работает комиссия?

Уровень 1: 5% от покупок друзей
Уровень 2: 3% от покупок их друзей
Уровень 3: 1% от третьего уровня

Пример: 10 друзей + 50 второго уровня + 250 третьего
= 450 Сомони в месяц! 🚀

👉 ${getInviteLink()}`
      }
    ]
  };

  const displayedPosters = showAllPosters ? posters : posters.slice(0, 4);
  const currentTexts = copyTexts[language] || copyTexts.tj;
  const displayedTexts = showAllTexts ? currentTexts : currentTexts.slice(0, 3);

  // 获取海报标题
  const getPosterTitle = (poster) => {
    if (language === 'zh') return poster.titleZh;
    if (language === 'ru') return poster.titleRu;
    return poster.titleTj;
  };

  // 多语言文本
  const texts = {
    tj: {
      pageTitle: 'Расмҳо ва матнҳо',
      pageSubtitle: 'Боргирӣ кунед ва ба дӯстон фиристед!',
      quickDownload: 'Боргирии зуд',
      quickDownloadDesc: 'Ҳамаи маводҳоро якҷоя боргирӣ кунед',
      downloadAll: 'Ҳамаро боргирӣ кунед',
      postersTab: 'Плакатҳо',
      textsTab: 'Матнҳо барои нусхабардорӣ',
      postersTitle: 'Плакатҳо',
      postersDesc: 'Плакатҳои расмии TezBarakat барои мубодила',
      textsTitle: 'Матнҳо барои нусхабардорӣ',
      textsDesc: 'Матнҳои тайёр барои Telegram ва шабакаҳои иҷтимоӣ',
      download: 'Боргирӣ',
      copy: 'Нусхабардорӣ',
      copied: 'Нусха шуд!',
      telegram: 'Telegram',
      showMore: 'Бештар дидан',
      showLess: 'Пӯшидан',
    },
    zh: {
      pageTitle: '素材库',
      pageSubtitle: '下载并分享给朋友！',
      quickDownload: '快速下载',
      quickDownloadDesc: '一次性下载所有素材',
      downloadAll: '下载全部',
      postersTab: '海报',
      textsTab: '文案',
      postersTitle: '海报',
      postersDesc: 'TezBarakat官方海报素材',
      textsTitle: '推广文案',
      textsDesc: '为Telegram和社交媒体准备的现成文案',
      download: '下载',
      copy: '复制',
      copied: '已复制！',
      telegram: 'Telegram',
      showMore: '查看更多',
      showLess: '收起',
    },
    ru: {
      pageTitle: 'Материалы',
      pageSubtitle: 'Скачайте и отправьте друзьям!',
      quickDownload: 'Быстрая загрузка',
      quickDownloadDesc: 'Скачайте все материалы сразу',
      downloadAll: 'Скачать все',
      postersTab: 'Плакаты',
      textsTab: 'Тексты для копирования',
      postersTitle: 'Плакаты',
      postersDesc: 'Официальные плакаты TezBarakat',
      textsTitle: 'Тексты для копирования',
      textsDesc: 'Готовые тексты для Telegram и соцсетей',
      download: 'Скачать',
      copy: 'Копировать',
      copied: 'Скопировано!',
      telegram: 'Telegram',
      showMore: 'Показать еще',
      showLess: 'Свернуть',
    },
  };

  const txt = texts[language] || texts.tj;

  // 复制文案
  const handleCopy = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text.content);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  // 分享到Telegram
  const handleTelegramShare = (text) => {
    const encodedText = encodeURIComponent(text.content);
    window.open(`https://t.me/share/url?url=${encodeURIComponent(getInviteLink())}&text=${encodedText}`, '_blank');
  };

  // 下载海报
  const handleDownload = async (poster) => {
    try {
      const url = poster.localUrl.startsWith('/') ? poster.localUrl : poster.fallbackUrl;
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${getPosterTitle(poster)}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      window.open(poster.fallbackUrl, '_blank');
    }
  };

  // 下载所有海报
  const handleDownloadAll = () => {
    posters.forEach((poster, index) => {
      setTimeout(() => handleDownload(poster), index * 500);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pb-20">
      {/* 头部 */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-4xl">📸</span>
          </div>
          <h1 className="text-2xl font-bold mb-1">{txt.pageTitle} 📸</h1>
          <p className="text-emerald-100 text-sm">{txt.pageSubtitle}</p>
        </div>
      </div>

      {/* 快速下载区域 */}
      <div className="max-w-4xl mx-auto px-4 -mt-6">
        <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl p-5 shadow-xl">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{txt.quickDownload}</h3>
                <p className="text-amber-50 text-xs">{txt.quickDownloadDesc}</p>
              </div>
            </div>
            <button
              onClick={handleDownloadAll}
              className="bg-white text-amber-600 px-5 py-2.5 rounded-xl font-bold hover:bg-amber-50 transition-colors flex items-center gap-2 shadow-lg text-sm"
            >
              <Download className="w-4 h-4" />
              {txt.downloadAll}
            </button>
          </div>
        </div>
      </div>

      {/* 标签导航 - 只保留海报和文案 */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('posters')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium whitespace-nowrap transition-colors text-sm ${
              activeTab === 'posters'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-white text-emerald-600 border-2 border-emerald-200 hover:border-emerald-400'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>{txt.postersTab}</span>
            <span className={`px-1.5 py-0.5 rounded-full text-xs ${activeTab === 'posters' ? 'bg-white/20' : 'bg-emerald-100'}`}>12</span>
          </button>
          
          <button
            onClick={() => setActiveTab('texts')}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium whitespace-nowrap transition-colors text-sm ${
              activeTab === 'texts'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-white text-emerald-600 border-2 border-emerald-200 hover:border-emerald-400'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{txt.textsTab}</span>
            <span className={`px-1.5 py-0.5 rounded-full text-xs ${activeTab === 'texts' ? 'bg-white/20' : 'bg-emerald-100'}`}>10</span>
          </button>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="max-w-4xl mx-auto px-4 mt-4">
        {/* 海报标签内容 */}
        {activeTab === 'posters' && (
          <div className="bg-white rounded-2xl p-5 shadow-lg">
            <h2 className="text-lg font-bold text-gray-800 mb-1 flex items-center gap-2">
              ⭐ {txt.postersTitle}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{txt.postersDesc}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              {displayedPosters.map((poster) => (
                <div key={poster.id} className="relative group bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={poster.localUrl}
                      alt={getPosterTitle(poster)}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => { e.target.src = poster.fallbackUrl; }}
                    />
                    {poster.official && (
                      <div className="absolute top-2 left-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-md font-medium flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Official
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-gray-700 mb-2 truncate">{getPosterTitle(poster)}</p>
                    <button
                      onClick={() => handleDownload(poster)}
                      className="w-full bg-emerald-50 text-emerald-600 py-2 rounded-lg hover:bg-emerald-100 transition-colors flex items-center justify-center gap-1.5 text-sm font-medium border border-emerald-200"
                    >
                      <Download className="w-4 h-4" />
                      {txt.download}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowAllPosters(!showAllPosters)}
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-dashed border-emerald-300 text-emerald-600 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-colors font-medium text-sm"
              >
                {showAllPosters ? txt.showLess : `${txt.showMore} (${posters.length - 4})`}
              </button>
            </div>
          </div>
        )}

        {/* 文案标签内容 */}
        {activeTab === 'texts' && (
          <div className="bg-white rounded-2xl p-5 shadow-lg">
            <h2 className="text-lg font-bold text-gray-800 mb-1 flex items-center gap-2">
              ⭐ {txt.textsTitle}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{txt.textsDesc}</p>
            
            <div className="space-y-4">
              {displayedTexts.map((text) => (
                <div key={text.id} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{text.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">{text.title}</h3>
                    </div>
                  </div>
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans bg-white p-3 rounded-lg border border-gray-200 mb-3">
                    {text.content}
                  </pre>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopy(text, text.id)}
                      className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-1.5 text-sm font-medium transition-colors ${
                        copiedId === text.id
                          ? 'bg-emerald-600 text-white'
                          : 'bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100'
                      }`}
                    >
                      {copiedId === text.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copiedId === text.id ? txt.copied : txt.copy}
                    </button>
                    <button
                      onClick={() => handleTelegramShare(text)}
                      className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center gap-1.5 text-sm font-medium border border-blue-200"
                    >
                      <Send className="w-4 h-4" />
                      {txt.telegram}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <button
                onClick={() => setShowAllTexts(!showAllTexts)}
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-dashed border-emerald-300 text-emerald-600 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-colors font-medium text-sm"
              >
                {showAllTexts ? txt.showLess : `${txt.showMore} (${currentTexts.length - 3})`}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
