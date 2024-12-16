import React from 'react';
import { TShirtSide } from '../types/design';

interface TShirtSideSelectorProps {
  side: TShirtSide;
  onChange: (side: TShirtSide) => void;
  disabled?: boolean;
}

export default function TShirtSideSelector({ side, onChange, disabled }: TShirtSideSelectorProps) {
  return (
    <div className="flex gap-4 justify-center">
      <button
        type="button"
        onClick={() => onChange('front')}
        disabled={disabled}
        className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
          side === 'front'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Face avant
      </button>
      <button
        type="button"
        onClick={() => onChange('back')}
        disabled={disabled}
        className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
          side === 'back'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Face arrière
      </button>
    </div>
  );
}