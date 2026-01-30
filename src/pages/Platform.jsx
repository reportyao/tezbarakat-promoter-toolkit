import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, ChevronUp, ShoppingCart, Gift, Users, Coins, Shield, Target, Star, Clock, CheckCircle, XCircle, Sparkles, Heart, TrendingUp, BookOpen } from 'lucide-react';

export default function Platform() {
  const { language } = useLanguage();
  const [expandedSections, setExpandedSections] = useState({ steps: true });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // 多语言内容
  const content = {
    tj: {
      header: {
        icon: '🛒',
        title: 'Молҳои арзон + Даромади иловагӣ',
        subtitle: 'Се нафар якҷоя мехаранд, як нафар молро мегирад, дигарон холҳо мегиранд. Шумо ҳеҷ гоҳ зиён намебинед!'
      },
      subsidy: {
        badge: '🎁 Субсидияи махсус!',
        title: '10 Миллион Сомонӣ Субсидия!',
        subtitle: 'Барномаи субсидияи корбарон',
        whyTitle: 'Чаро молҳо ин қадар арзон?',
        whyAnswer: '👉 Зеро мо субсидия медиҳем!',
        whyDesc: 'Ҳар як молро, ки шумо мебинед, платформа қисми калони фарқи нархро пардохт кардааст!',
        whatTitle: 'Барномаи субсидия чист?',
        whatDesc: 'Мо бо сармоягузорони байналмилалӣ якҷоя Барномаи 10 миллион сомонӣ субсидияи корбаронро оғоз кардем. Мақсад: бо субсидияи фарқи нарх, корбаронро ҷалб кардан ва бозори электронии Тоҷикистонро рушд додан.',
        whyDoTitle: 'Чаро мо ин корро мекунем?',
        reasons: [
          { icon: TrendingUp, title: 'Сармоягузорӣ ба оянда', desc: 'Мо ба потенсиали бозори электронии Осиёи Марказӣ боварӣ дорем. Субсидияи имрӯза барои пешвоии фардо аст.' },
          { icon: Heart, title: 'Эътимод сохтан', desc: 'Мо мехоҳем бо тахфифҳои воқеӣ, боварии корбаронро ба даст орем.' },
          { icon: BookOpen, title: 'Омӯзиши бозор', desc: 'Одати хариди онлайнро ташаккул диҳем, то корбарон бовар кунанд, ки бо TezBarakat метавонанд бо пули камтар беҳтар зиндагӣ кунанд.' }
        ],
        proofTitle: 'Исботи субсидия',
        proof: [
          '📱 Телефони 900 Сомонӣ - Шумо 300 Сомонӣ мепардозед',
          '🎁 Платформа 600 Сомонӣ субсидия медиҳад',
          '✅ Ғолиб телефонро мегирад, дигарон 300 холҳо!'
        ],
        notScam: 'Ин фиреб нест, ин сармоягузорӣ ба оянда аст!',
        notScamDesc: 'Мо боварӣ дорем, ки вақте бозори электронии Осиёи Марказӣ рушд мекунад, TezBarakat пешво хоҳад буд, ва шумо аввалин шоҳидон ва фоидагирандагон ҳастед.',
        limitedTime: 'Вақт маҳдуд аст!',
        limitedTimeDesc: 'Субсидия маҳдуд аст - пештар омадед, бештар сарфа мекунед!'
      },
      steps: {
        title: '3 қадами содда',
        items: [
          { num: '1', title: 'Пардохт кунед', desc: '1/3 нархи молро пардохт кунед' },
          { num: '2', title: 'Интизор шавед', desc: 'Система ғолибро интихоб мекунад' },
          { num: '3', title: 'Натиҷа гиред', desc: 'Мол ё 100% холҳо!' }
        ],
        notWin: '❌ Набурдед? → 100% холҳо бармегардад!',
        notWinDesc: 'Агар шумо ғолиб нашавед, 100% маблағи шумо ҳамчун холҳои платформа баргардонида мешавад'
      },
      sections: [
        { id: 'referral', icon: Users, title: 'Даъват кунед = Пул гиред! 💰', content: 'Дӯстони худро даъват кунед ва аз ҳар хариди онҳо комиссия гиред! Сатҳи 1: 5%, Сатҳи 2: 3%, Сатҳи 3: 1%. Даромади доимӣ!' },
        { id: 'points', icon: Coins, title: '1 Хол = 1 Сомонӣ 💎', content: 'Холҳои шумо арзиши воқеӣ доранд! 1 хол = 1 сомонӣ. Дар Мағозаи Холҳо молҳои гуногун харед - телефон, маишӣ, либос ва ғайра!' },
        { id: 'safety', icon: Shield, title: 'Пули шумо дар амон аст! 🔒', content: 'TezBarakat бо DC Bank ва Alif ҳамкорӣ мекунад. Анбори воқеӣ дар Душанбе. Рамзгузории SSL барои амнияти маълумот. Шумо ҳеҷ гоҳ зиён намебинед!' },
        { id: 'wheel', icon: Target, title: 'Чархи Бахт', content: 'Ҳар рӯз чархро давронед ва холҳои иловагӣ ғун кунед! Ҷоизаҳо аз 1 то 100 хол. Бахти худро санҷед!' },
        { id: 'trust', icon: Star, title: 'Чаро боварӣ кардан мумкин?', content: 'Ҳамкорӣ бо бонкҳои расмии Тоҷикистон. Анбори воқеӣ дар Душанбе. 3000+ корбарон аллакай истифода мебаранд. Шумо худатон санҷида метавонед!' }
      ]
    },
    zh: {
      header: {
        icon: '🛒',
        title: '便宜商品 + 额外收入',
        subtitle: '三人一起购买，一人得商品，其他人得积分。你永远不会亏损！'
      },
      subsidy: {
        badge: '🎁 特别补贴!',
        title: '1000万索莫尼补贴!',
        subtitle: '用户补贴计划',
        whyTitle: '为什么商品这么便宜？',
        whyAnswer: '👉 因为我们提供补贴!',
        whyDesc: '你看到的每件商品，平台都支付了大部分差价！',
        whatTitle: '补贴计划是什么？',
        whatDesc: '我们与国际投资者一起启动了1000万索莫尼用户补贴计划。目标：通过补贴差价，吸引用户并发展塔吉克斯坦电商市场。',
        whyDoTitle: '为什么我们这样做？',
        reasons: [
          { icon: TrendingUp, title: '投资未来', desc: '我们相信中亚电商市场的潜力。今天的补贴是为了明天的领先。' },
          { icon: Heart, title: '建立信任', desc: '我们想通过真正的折扣赢得用户信任。' },
          { icon: BookOpen, title: '培养市场', desc: '培养在线购物习惯，让用户相信用TezBarakat可以花更少的钱过更好的生活。' }
        ],
        proofTitle: '补贴证明',
        proof: [
          '📱 900索莫尼的手机 - 你只付300索莫尼',
          '🎁 平台补贴600索莫尼',
          '✅ 赢家得手机，其他人得300积分！'
        ],
        notScam: '这不是骗局，这是对未来的投资！',
        notScamDesc: '我们相信，当中亚电商市场发展起来时，TezBarakat将成为领导者，而你们是第一批见证者和受益者。',
        limitedTime: '时间有限!',
        limitedTimeDesc: '补贴有限 - 越早来，省越多！'
      },
      steps: {
        title: '3个简单步骤',
        items: [
          { num: '1', title: '付款', desc: '支付商品1/3价格' },
          { num: '2', title: '等待', desc: '系统选择赢家' },
          { num: '3', title: '获得结果', desc: '商品或100%积分!' }
        ],
        notWin: '❌ 没赢？→ 100%积分返还！',
        notWinDesc: '如果你没赢，100%的金额将作为平台积分返还'
      },
      sections: [
        { id: 'referral', icon: Users, title: '邀请 = 赚钱! 💰', content: '邀请朋友，从他们的每次购买中获得佣金！一级：5%，二级：3%，三级：1%。持续收入！' },
        { id: 'points', icon: Coins, title: '1积分 = 1索莫尼 💎', content: '你的积分有真正的价值！1积分 = 1索莫尼。在积分商城购买各种商品 - 手机、家电、服装等！' },
        { id: 'safety', icon: Shield, title: '你的钱是安全的! 🔒', content: 'TezBarakat与DC Bank和Alif合作。杜尚别有实体仓库。SSL加密保护数据安全。你永远不会亏损！' },
        { id: 'wheel', icon: Target, title: '幸运轮盘', content: '每天转动轮盘，收集额外积分！奖品从1到100积分。试试你的运气！' },
        { id: 'trust', icon: Star, title: '为什么可以信任？', content: '与塔吉克斯坦官方银行合作。杜尚别有实体仓库。3000+用户已经在使用。你可以自己检查！' }
      ]
    },
    ru: {
      header: {
        icon: '🛒',
        title: 'Дешёвые товары + Дополнительный доход',
        subtitle: 'Трое покупают вместе, один получает товар, остальные получают баллы. Вы никогда не проиграете!'
      },
      subsidy: {
        badge: '🎁 Специальная субсидия!',
        title: '10 Миллионов Сомони Субсидия!',
        subtitle: 'Программа субсидирования пользователей',
        whyTitle: 'Почему товары такие дешёвые?',
        whyAnswer: '👉 Потому что мы субсидируем!',
        whyDesc: 'Каждый товар, который вы видите, платформа оплатила большую часть разницы в цене!',
        whatTitle: 'Что такое программа субсидий?',
        whatDesc: 'Мы вместе с международными инвесторами запустили программу субсидирования пользователей на 10 миллионов сомони. Цель: привлечь пользователей субсидированием разницы в цене и развить электронную коммерцию Таджикистана.',
        whyDoTitle: 'Почему мы это делаем?',
        reasons: [
          { icon: TrendingUp, title: 'Инвестиции в будущее', desc: 'Мы верим в потенциал рынка электронной коммерции Центральной Азии. Сегодняшняя субсидия - для завтрашнего лидерства.' },
          { icon: Heart, title: 'Создание доверия', desc: 'Мы хотим завоевать доверие пользователей настоящими скидками.' },
          { icon: BookOpen, title: 'Обучение рынка', desc: 'Формируем привычку онлайн-покупок, чтобы пользователи поверили, что с TezBarakat можно жить лучше за меньшие деньги.' }
        ],
        proofTitle: 'Доказательство субсидии',
        proof: [
          '📱 Телефон за 900 Сомони - Вы платите 300 Сомони',
          '🎁 Платформа субсидирует 600 Сомони',
          '✅ Победитель получает телефон, остальные 300 баллов!'
        ],
        notScam: 'Это не мошенничество, это инвестиция в будущее!',
        notScamDesc: 'Мы верим, что когда рынок электронной коммерции Центральной Азии разовьётся, TezBarakat станет лидером, а вы - первыми свидетелями и бенефициарами.',
        limitedTime: 'Время ограничено!',
        limitedTimeDesc: 'Субсидия ограничена - чем раньше придёте, тем больше сэкономите!'
      },
      steps: {
        title: '3 простых шага',
        items: [
          { num: '1', title: 'Оплатите', desc: 'Оплатите 1/3 цены товара' },
          { num: '2', title: 'Подождите', desc: 'Система выбирает победителя' },
          { num: '3', title: 'Получите результат', desc: 'Товар или 100% баллов!' }
        ],
        notWin: '❌ Не выиграли? → 100% баллов возвращается!',
        notWinDesc: 'Если вы не победили, 100% суммы возвращается в виде баллов платформы'
      },
      sections: [
        { id: 'referral', icon: Users, title: 'Приглашайте = Зарабатывайте! 💰', content: 'Приглашайте друзей и получайте комиссию с каждой их покупки! Уровень 1: 5%, Уровень 2: 3%, Уровень 3: 1%. Постоянный доход!' },
        { id: 'points', icon: Coins, title: '1 Балл = 1 Сомони 💎', content: 'Ваши баллы имеют реальную ценность! 1 балл = 1 сомони. Покупайте разные товары в Магазине Баллов - телефоны, бытовую технику, одежду и т.д.!' },
        { id: 'safety', icon: Shield, title: 'Ваши деньги в безопасности! 🔒', content: 'TezBarakat сотрудничает с DC Bank и Alif. Реальный склад в Душанбе. SSL-шифрование для безопасности данных. Вы никогда не проиграете!' },
        { id: 'wheel', icon: Target, title: 'Колесо Удачи', content: 'Крутите колесо каждый день и собирайте дополнительные баллы! Призы от 1 до 100 баллов. Испытайте свою удачу!' },
        { id: 'trust', icon: Star, title: 'Почему можно доверять?', content: 'Сотрудничество с официальными банками Таджикистана. Реальный склад в Душанбе. 3000+ пользователей уже используют. Вы можете проверить сами!' }
      ]
    }
  };

  const t = content[language] || content.tj;

  return (
    <div className="space-y-4 pb-4">
      {/* 头部区域 */}
      <div className="bg-gradient-to-b from-green-600 to-green-500 rounded-b-3xl p-6 text-center text-white -mx-4 -mt-4">
        <div className="text-5xl mb-3">{t.header.icon}</div>
        <h1 className="text-2xl font-bold mb-2">{t.header.title}</h1>
        <p className="text-green-100 text-sm">{t.header.subtitle}</p>
      </div>

      {/* 补贴介绍卡片 */}
      <div className="bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-2xl p-5 mx-1">
        <div className="text-center mb-4">
          <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold inline-block">
            {t.subsidy.badge}
          </span>
          <h2 className="text-2xl font-bold text-green-800 mt-3">{t.subsidy.title}</h2>
          <p className="text-green-700 text-sm">{t.subsidy.subtitle}</p>
        </div>

        {/* 为什么这么便宜 */}
        <div className="bg-yellow-200/50 rounded-xl p-4 mb-4">
          <h3 className="font-bold text-green-800 text-center mb-2">{t.subsidy.whyTitle}</h3>
          <p className="text-xl font-bold text-green-700 text-center mb-2">{t.subsidy.whyAnswer}</p>
          <p className="text-green-800 text-sm text-center bg-white/60 rounded-lg p-3">
            {t.subsidy.whyDesc}
          </p>
        </div>

        {/* 补贴计划是什么 */}
        <div className="bg-yellow-200/30 rounded-xl p-4 mb-4">
          <h4 className="font-bold text-green-800 flex items-center mb-2">
            <Gift className="w-5 h-5 mr-2" />
            {t.subsidy.whatTitle}
          </h4>
          <p className="text-green-800 text-sm">{t.subsidy.whatDesc}</p>
        </div>

        {/* 为什么我们这样做 */}
        <div className="bg-yellow-200/30 rounded-xl p-4 mb-4">
          <h4 className="font-bold text-green-800 flex items-center mb-3">
            <Heart className="w-5 h-5 mr-2" />
            {t.subsidy.whyDoTitle}
          </h4>
          <div className="space-y-3">
            {t.subsidy.reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="bg-yellow-100/50 rounded-lg p-3">
                  <div className="flex items-center mb-1">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-2">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-green-800">{reason.title}</span>
                  </div>
                  <p className="text-green-700 text-sm ml-10">{reason.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 补贴证明 */}
        <div className="bg-white/80 rounded-xl p-4 mb-4">
          <h4 className="font-bold text-green-800 mb-3">{t.subsidy.proofTitle}</h4>
          <div className="space-y-2">
            {t.subsidy.proof.map((item, index) => (
              <p key={index} className="text-green-800 text-sm">{item}</p>
            ))}
          </div>
        </div>

        {/* 不是骗局提示 */}
        <div className="bg-green-500 rounded-xl p-4 mb-4 text-white">
          <div className="flex items-center mb-2">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="font-bold">{t.subsidy.notScam}</span>
          </div>
          <p className="text-green-100 text-sm">{t.subsidy.notScamDesc}</p>
        </div>

        {/* 限时提示 */}
        <div className="bg-red-500 rounded-xl p-4 text-white">
          <div className="flex items-center mb-1">
            <Clock className="w-5 h-5 mr-2" />
            <span className="font-bold">{t.subsidy.limitedTime}</span>
          </div>
          <p className="text-red-100 text-sm">{t.subsidy.limitedTimeDesc}</p>
        </div>
      </div>

      {/* 三个简单步骤 - 可展开 */}
      <div className="bg-white rounded-2xl shadow-sm mx-1 overflow-hidden">
        <button
          onClick={() => toggleSection('steps')}
          className="w-full p-4 flex items-center justify-between"
        >
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <span className="font-bold text-gray-800">{t.steps.title}</span>
          </div>
          {expandedSections.steps ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>
        
        {expandedSections.steps && (
          <div className="px-4 pb-4">
            <div className="space-y-4">
              {t.steps.items.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 font-bold text-white ${
                    index === 0 ? 'bg-green-500' : index === 1 ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}>
                    {step.num}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{step.title}</p>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* 没赢提示 */}
            <div className="mt-4 bg-green-500 rounded-xl p-4 text-white">
              <div className="flex items-center mb-1">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-bold">{t.steps.notWin}</span>
              </div>
              <p className="text-green-100 text-sm">{t.steps.notWinDesc}</p>
            </div>
          </div>
        )}
      </div>

      {/* 其他可展开区域 */}
      {t.sections.map((section) => {
        const Icon = section.icon;
        const isExpanded = expandedSections[section.id];
        
        return (
          <div key={section.id} className="bg-white rounded-2xl shadow-sm mx-1 overflow-hidden">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full p-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                  section.id === 'referral' ? 'bg-orange-100' :
                  section.id === 'points' ? 'bg-yellow-100' :
                  section.id === 'safety' ? 'bg-green-100' :
                  section.id === 'wheel' ? 'bg-purple-100' : 'bg-amber-100'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    section.id === 'referral' ? 'text-orange-600' :
                    section.id === 'points' ? 'text-yellow-600' :
                    section.id === 'safety' ? 'text-green-600' :
                    section.id === 'wheel' ? 'text-purple-600' : 'text-amber-600'
                  }`} />
                </div>
                <span className="font-bold text-gray-800">{section.title}</span>
              </div>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            
            {isExpanded && (
              <div className="px-4 pb-4">
                <p className="text-gray-600 text-sm bg-gray-50 rounded-xl p-4">
                  {section.content}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
