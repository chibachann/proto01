import React from 'react';
import styles from './VerticalLinesBackground.module.css';

const VerticalLinesBackground = ({ 
  opacity = 0.08, 
  lineWidth = 2, 
  lineColor,
  className = '',
  children,
  ...props 
}) => {
  // テーマカラーを使用（デフォルト）
  const finalLineColor = lineColor || 'var(--color-primary-rgb, 135, 20, 37)';
  
  const backgroundStyle = {
    '--line-opacity': opacity,
    '--line-width': `${lineWidth}px`,
    '--line-color': finalLineColor,
  };

  return (
    <div 
      className={`${styles.verticalLinesBackground} ${className}`} 
      style={backgroundStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default VerticalLinesBackground;
