import React from 'react';

import './Avatar.css';

interface Props {
  className?: string;
  style?: React.CSSProperties | undefined;
  image?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const Avatar = ({ className, style, image, alt, width, height }: Props) => {
  return (
    <div className={`avatar ${className}`} style={style}>
      <img src={image} alt={alt} style={{ width: width, height: height }} />
    </div>
  );
};

export default Avatar;
