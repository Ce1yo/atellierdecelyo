import React from 'react';
import { Check } from 'lucide-react';

interface DesignControlsProps {
  scale: number;
  rotation: number;
  isValidated: boolean;
  onScale: (delta: number) => void;
  onRotate: (degrees: number) => void;
  onValidate: () => void;
  onUnvalidate: () => void;
}

export default function DesignControls({
  scale,
  rotation,
  isValidated,
  onScale,
  onRotate,
  onValidate,
  onUnvalidate
}: DesignControlsProps) {
  if (isValidated) {
    return (
      <button
        onClick={onUnvalidate}
        className="text-blue-600 hover:text-blue-700 transition-colors"
      >
        Modifier le placement
      </button>
    );
  }

  return (
    <>
      <div className="flex justify-center gap-4">
        <div className="bg-white rounded-full shadow-lg p-1">
          <div className="flex items-center gap-1 px-2">
            <button
              type="button"
              onClick={() => onScale(-0.1)}
              className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
            >
              -
            </button>
            <span className="w-12 text-center text-sm">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              onClick={() => onScale(0.1)}
              className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
            >
              +
            </button>
          </div>
        </div>
        <div className="bg-white rounded-full shadow-lg p-1">
          <div className="flex items-center gap-1 px-2">
            <button
              type="button"
              onClick={() => onRotate(-15)}
              className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
            >
              ↺
            </button>
            <span className="w-12 text-center text-sm">
              {rotation}°
            </span>
            <button
              type="button"
              onClick={() => onRotate(15)}
              className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
            >
              ↻
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={onValidate}
        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
      >
        <Check className="w-4 h-4" />
        Valider le placement
      </button>
    </>
  );
}