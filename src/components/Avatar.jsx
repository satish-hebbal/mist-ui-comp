import React, { useState, useRef, useEffect } from 'react';

const Avatar = ({ 
  src, 
  alt, 
  name, 
  size = 'md', 
  bordered = false, 
  radius = 'full',
  audioSrc
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const timeoutRef = useRef(null);

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
  };

  const radiusClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  const baseClasses = `
    inline-flex items-center justify-center 
    bg-violet-100 text-violet-800 font-semibold 
    overflow-hidden cursor-pointer
    transition-all duration-300 ease-in-out
    ${sizeClasses[size]}
    ${radiusClasses[radius]}
    ${bordered ? 'border-2 border-violet-300' : ''}
    ${isPlaying ? 'ring-4 ring-violet-400 ring-opacity-50 animate-pulse' : ''}
  `;

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
        clearTimeout(timeoutRef.current);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        timeoutRef.current = setTimeout(() => {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          setIsPlaying(false);
        }, 15000);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={baseClasses} onClick={handleClick}>
      {src ? (
        <img 
          src={src} 
          alt={alt || name} 
          className="w-full h-full object-cover"
        />
      ) : (
        <span>{getInitials(name)}</span>
      )}
      {audioSrc && (
        <audio ref={audioRef} src={audioSrc} />
      )}
    </div>
  );
};

export default Avatar;