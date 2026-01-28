import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, ChevronUp, Search, MessageCircle, Phone, MapPin } from 'lucide-react';

export default function FAQ() {
  const { t, translations } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqItems = translations.faq?.items || [];
  const contact = translations.faq?.contact || {};

  const filteredItems = faqItems.filter(item => 
    item.q?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.a?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="text-center py-2">
        <h1 className="text-2xl font-bold text-gray-800">{t('faq.title')}</h1>
        <p className="text-gray-500 text-sm">{t('faq.subtitle')}</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input type="text" placeholder={t('faq.search')} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500" />
      </div>

      <div className="space-y-2">
        {filteredItems.map((item, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
            <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-4 text-left">
              <span className="font-medium text-gray-800 pr-4">{item.q}</span>
              {openIndex === index ? <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4"><p className="text-gray-600 text-sm bg-gray-50 rounded-lg p-3">{item.a}</p></div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-2xl p-4 text-white">
        <h3 className="font-bold mb-3">需要更多帮助?</h3>
        <div className="space-y-2">
          <a href={`https://t.me/${contact.telegram?.replace('@', '')}`} className="flex items-center space-x-2 bg-white/10 rounded-xl p-3"><MessageCircle className="w-5 h-5" /><span>{contact.telegram}</span></a>
          <a href={`tel:${contact.phone}`} className="flex items-center space-x-2 bg-white/10 rounded-xl p-3"><Phone className="w-5 h-5" /><span>{contact.phone}</span></a>
          <div className="flex items-center space-x-2 bg-white/10 rounded-xl p-3"><MapPin className="w-5 h-5" /><span>{contact.address}</span></div>
        </div>
      </div>
    </div>
  );
}
