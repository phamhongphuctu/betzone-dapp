import React from 'react';
import { useTranslation } from './useTranslation';

export default function Sports() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '20px' }}>
      <h2>{t.sports}</h2>
      <div style={{ marginTop: '15px' }}>
        <div style={{ marginBottom: '10px' }}>⚽ {t.soccer}</div>
        <div style={{ marginBottom: '10px' }}>🏀 {t.basketball}</div>
        <div style={{ marginBottom: '10px' }}>🎾 {t.tennis}</div>
        <div style={{ marginBottom: '10px' }}>🏐 {t.volleyball}</div>
        <div style={{ marginBottom: '10px' }}>🥊 {t.mma}</div>
      </div>
    </div>
  );
}
