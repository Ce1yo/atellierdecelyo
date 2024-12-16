import React from 'react';
import { Design } from '../types/design';

interface DesignListProps {
  designs: Design[];
  onSelect: (id: string) => void;
  selectedDesignId: string | null;
}

export default function DesignList({ designs, onSelect, selectedDesignId }: DesignListProps) {
  return (
    <div className="flex gap-2 mb-4 overflow-x-auto py-2">
      {designs.map((design) => (
        <button
          key={design.id}
          onClick={() => onSelect(design.id)}
          className={`relative flex-shrink-0 w-16 h-16 rounded-lg border-2 overflow-hidden ${
            selectedDesignId === design.id ? 'border-blue-600' : 'border-gray-200'
          }`}
        >
          <img
            src={design.previewUrl}
            alt={`Design ${design.id}`}
            className="w-full h-full object-contain"
          />
        </button>
      ))}
    </div>
  );
}