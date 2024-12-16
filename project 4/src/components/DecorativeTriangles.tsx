import React from 'react';

interface DecorativeTrianglesProps {
  position?: 'top' | 'bottom';
  className?: string;
}

export default function DecorativeTriangles({ position = 'top', className = '' }: DecorativeTrianglesProps) {
  return (
    <div 
      className={`absolute left-0 right-0 h-32 ${
        position === 'top' ? 'top-0' : 'bottom-0'
      } ${className}`}
      style={{
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Triangles principaux */}
        <path
          d="M0 0 L40 0 L0 100 Z"
          className="fill-primary/10"
          style={{
            transform: position === 'bottom' ? 'rotate(180deg)' : 'none',
            transformOrigin: 'center'
          }}
        />
        <path
          d="M60 0 L100 0 L100 100 Z"
          className="fill-primary/10"
          style={{
            transform: position === 'bottom' ? 'rotate(180deg)' : 'none',
            transformOrigin: 'center'
          }}
        />
        
        {/* Triangles secondaires */}
        <path
          d="M10 0 L30 0 L10 50 Z"
          className="fill-secondary/10"
          style={{
            transform: position === 'bottom' ? 'rotate(180deg)' : 'none',
            transformOrigin: 'center'
          }}
        />
        <path
          d="M70 0 L90 0 L90 50 Z"
          className="fill-secondary/10"
          style={{
            transform: position === 'bottom' ? 'rotate(180deg)' : 'none',
            transformOrigin: 'center'
          }}
        />
      </svg>
    </div>
  );
}