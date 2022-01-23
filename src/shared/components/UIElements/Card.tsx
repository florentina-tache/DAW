import React from 'react';

import './Card.css';

interface Props {
  className?: string;
  style?: React.CSSProperties | undefined;
  children: React.ReactNode;
}

const Card = ({ className, style, children }: Props) => {
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
