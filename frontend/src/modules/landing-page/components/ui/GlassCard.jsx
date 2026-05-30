import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  glowEffect = false,
  onClick,
}) => {
  const baseClasses = `glass-morphism rounded-2xl p-6 ${
    hoverEffect ? 'glass-morphism-hover' : ''
  } ${glowEffect ? 'glass-morphism-glow' : ''}`;

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
