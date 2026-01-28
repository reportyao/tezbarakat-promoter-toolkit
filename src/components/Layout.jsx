import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useInvite } from '../contexts/InviteContext';
import { Home, FileText, Image, BookOpen, HelpCircle, Info, Globe, Link as LinkIcon, Check, X } from 'lucide-react';

export default function Layout({ children }) {
  const location = useLocation();
  const { language, setLanguage, t, languages } = useLanguage();
  const { inviteCode, setInviteCode, inviteLink } = useInvite();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [tempCode, setTempCode] = useState(inviteCode);

  const navItems = [
    { path: '/', icon: Home, label: t('nav.home') },
    { path: '/scripts', icon: FileText, label: t('nav.scripts') },
    { path: '/materials', icon: Image, label: t('nav.materials') },
    { path: '/guide', icon: BookOpen, label: t('nav.guide') },
    { path: '/faq', icon: HelpCircle, label: t('nav.faq') },
    { path: '/platform', icon: Info, label: t('nav.platform') },
  ];

  const handleSaveInviteCode = () => {
    setInviteCode(tempCode.trim());
    setShowInviteModal(false);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 顶部栏 - 绿色渐变 */}
      <header className="bg-gradient-to-r from-green-600 to-green-500 text-white sticky top-0 z-50 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-green-600 font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-lg">TezBarakat</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowInviteModal(true)}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                inviteCode 
                  ? 'bg-yellow-400 text-green-800' 
                  : 'bg-white/20 text-white border border-white/30'
              }`}
            >
              <LinkIcon className="w-4 h-4" />
              <span>{inviteCode || t('invite.createLink')}</span>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center space-x-1 px-2 py-1.5 bg-white/20 rounded-full"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{languages.find(l => l.code === language)?.flag}</span>
              </button>
              
              {showLangMenu && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl overflow-hidden z-50 min-w-[140px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLangMenu(false);
                      }}
                      className={`w-full flex items-center space-x-2 px-4 py-3 text-left hover:bg-gray-50 ${
                        language === lang.code ? 'bg-green-50 text-green-600' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {inviteCode && (
          <div className="bg-yellow-400 text-green-800 px-4 py-2 text-center text-sm font-medium">
            <span>✅ {t('invite.linkReady')} </span>
            <button 
              onClick={() => copyToClipboard(inviteLink)}
              className="underline font-bold"
            >
              {t('invite.copyLink')}
            </button>
          </div>
        )}
      </header>

      <main className="px-4 py-4">{children}</main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center py-1 px-2 rounded-lg transition-all ${
                  isActive ? 'text-green-600' : 'text-gray-500 hover:text-green-500'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-2' : ''}`} />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {showInviteModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">{t('invite.title')}</h3>
                <button onClick={() => setShowInviteModal(false)}><X className="w-6 h-6" /></button>
              </div>
              <p className="text-sm text-white/80 mt-1">{t('invite.hint')}</p>
            </div>
            <div className="p-4 space-y-4">
              <input
                type="text"
                value={tempCode}
                onChange={(e) => setTempCode(e.target.value.toUpperCase())}
                placeholder={t('invite.placeholder')}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-center text-xl font-bold tracking-widest focus:border-green-500 focus:outline-none"
                maxLength={20}
              />
              {tempCode && (
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-sm text-gray-500 mb-1">{t('invite.yourLink')}</p>
                  <p className="text-green-600 font-medium text-sm break-all">
                    https://t.me/tezbarakatbot?start={tempCode}
                  </p>
                </div>
              )}
              <button
                onClick={handleSaveInviteCode}
                disabled={!tempCode.trim()}
                className={`w-full py-3 rounded-xl font-bold text-white transition-all ${
                  tempCode.trim() ? 'bg-gradient-to-r from-green-600 to-green-500 shadow-lg' : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                <Check className="w-5 h-5 inline mr-2" />{t('common.startNow')}
              </button>
            </div>
          </div>
        </div>
      )}

      {showLangMenu && <div className="fixed inset-0 z-40" onClick={() => setShowLangMenu(false)} />}
    </div>
  );
}
