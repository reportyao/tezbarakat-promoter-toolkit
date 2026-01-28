import React, { createContext, useContext, useState, useEffect } from 'react';

const InviteContext = createContext();

export function InviteProvider({ children }) {
  const [inviteCode, setInviteCode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('tezbarakat_invite_code') || '';
    }
    return '';
  });

  useEffect(() => {
    if (inviteCode) {
      localStorage.setItem('tezbarakat_invite_code', inviteCode);
    }
  }, [inviteCode]);

  const inviteLink = inviteCode 
    ? `https://t.me/tezbarakatbot?start=${inviteCode}` 
    : '';

  const replaceInviteLink = (text) => {
    if (!inviteLink) return text;
    return text.replace(/👉\s*$/gm, `👉 ${inviteLink}`);
  };

  return (
    <InviteContext.Provider value={{ 
      inviteCode, 
      setInviteCode, 
      inviteLink,
      replaceInviteLink 
    }}>
      {children}
    </InviteContext.Provider>
  );
}

export function useInvite() {
  const context = useContext(InviteContext);
  if (!context) {
    throw new Error('useInvite must be used within an InviteProvider');
  }
  return context;
}
