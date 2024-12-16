import React from 'react';
import { TShirtSide } from '../../types/design';
import { TSHIRT_IMAGES } from '../../constants/tshirt';

interface TShirtPreviewProps {
  side: TShirtSide;
}

export default function TShirtPreview({ side }: TShirtPreviewProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-full h-full">
        <img
          src={TSHIRT_IMAGES[side]}
          alt={`T-shirt ${side}`}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}