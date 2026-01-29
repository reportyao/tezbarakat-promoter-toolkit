import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInvite } from '../contexts/InviteContext';
import { Copy, Check, MessageCircle, Gift, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

export default function Scripts() {
  const { t, translations } = useLanguage();
  const { inviteLink } = useInvite();
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [showObjections, setShowObjections] = useState(false);

  const replaceInviteLink = (text) => {
    if (!inviteLink) return text;
    // Replace 👉 at the end with 👉 + invite link
    return text.replace(/👉\s*$/gm, `👉 ${inviteLink}`);
  };

  const handleCopy = (text, index) => {
    const finalText = replaceInviteLink(text);
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(finalText);
    } else {
      // Fallback for HTTP environment
      const textArea = document.createElement('textarea');
      textArea.value = finalText;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Failed to copy:', err);
      }
      document.body.removeChild(textArea);
    }
    
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const bestScripts = translations.scripts?.best || [];
  const categories = translations.scripts?.categories || [];
  const objections = translations.scripts?.objections?.items || [];

  return (
    <div className="space-y-6 pb-4">
      {/* 页面标题区 */}
      <div className="text-center py-6">
        <div className="text-5xl mb-3">💬</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {t('scripts.title')}
        </h1>
        <p className="text-gray-600 text-sm">
          {t('scripts.subtitle')}
        </p>
      </div>

      {/* 最佳话术区 */}
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            {t('scripts.bestTitle')}
          </h2>
          <p className="text-gray-600 text-sm">
            {t('scripts.bestSubtitle')}
          </p>
        </div>

        <div className="space-y-3">
          {bestScripts.map((script, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 shadow-md border-2 border-green-100">
              <div className="flex items-start space-x-3">
                <div className="text-3xl flex-shrink-0">
                  {index === 0 ? '🎁' : '💰'}
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                    {replaceInviteLink(script)}
                  </p>
                </div>
              </div>
              <div className="mt-3 flex justify-end">
                <button
                  onClick={() => handleCopy(script, `best-${index}`)}
                  className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    copiedIndex === `best-${index}` ? 'bg-green-100 text-green-700' : 'bg-green-600 text-white'
                  }`}
                >
                  {copiedIndex === `best-${index}` ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>{t('common.copied')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{t('common.copy')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 所有话术分类区 */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800 text-center">
          {t('scripts.allScriptsTitle')}
        </h2>

        <div className="space-y-3">
          {categories.map((category, catIndex) => {
            const isExpanded = expandedCategory === catIndex;
            const scripts = category.scripts || [];
            
            return (
              <div key={catIndex} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setExpandedCategory(isExpanded ? null : catIndex)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-base">
                      {category.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-0.5">
                      {scripts.length} {t('scripts.scriptsCount')}
                    </p>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 space-y-3 border-t border-gray-100">
                    {scripts.map((script, scriptIndex) => (
                      <div key={scriptIndex} className="bg-gray-50 rounded-xl p-3">
                        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                          {replaceInviteLink(script)}
                        </p>
                        <div className="mt-2 flex justify-end">
                          <button
                            onClick={() => handleCopy(script, `${catIndex}-${scriptIndex}`)}
                            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                              copiedIndex === `${catIndex}-${scriptIndex}` ? 'bg-green-100 text-green-700' : 'bg-green-600 text-white'
                            }`}
                          >
                            {copiedIndex === `${catIndex}-${scriptIndex}` ? (
                              <>
                                <Check className="w-3 h-3" />
                                <span>{t('common.copied')}</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>{t('common.copy')}</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 异议处理区 */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <button
          onClick={() => setShowObjections(!showObjections)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
        >
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {t('scripts.objections.title')}
            </h2>
            <p className="text-gray-500 text-xs mt-0.5">
              {t('scripts.objections.subtitle')}
            </p>
          </div>
          {showObjections ? (
            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
          )}
        </button>

        {showObjections && (
          <div className="px-4 pb-4 space-y-3 border-t border-gray-100">
            {objections.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4">
                <p className="font-bold text-gray-800 text-sm mb-2">
                  {item.q}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
