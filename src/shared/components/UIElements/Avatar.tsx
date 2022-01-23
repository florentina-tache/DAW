import React from 'react';

import './Avatar.css';

interface Props {
  className?: string;
  style?: React.CSSProperties | undefined;
  image?: string;
  alt?: string;
  width?: number;
}

const Avatar = ({ className, style, image, alt, width }: Props) => {
  return (
    <div className={`avatar ${className}`} style={style}>
      <img src={image} alt={alt} style={{ width: width, height: width }} />
    </div>
  );
};

export default Avatar;
