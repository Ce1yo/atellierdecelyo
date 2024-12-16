import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { X } from 'lucide-react';
import { Design } from '../types/design';
import TShirtSideSelector from './TShirtSideSelector';
import TShirtPreview from './design/TShirtPreview';
import DesignControls from './design/DesignControls';

interface DesignEditorProps {
  design: Design | null;
  onDelete?: () => void;
  onValidate?: (position: { x: number; y: number; scale: number; rotation: number }) => void;
  onUpdate?: (updates: Partial<Design>) => void;
}

export default function DesignEditor({ design, onDelete, onValidate, onUpdate }: DesignEditorProps) {
  const nodeRef = useRef(null);

  const handleScale = (newScale: number) => {
    if (!design || design.isValidated) return;
    const updatedScale = Math.max(0.1, Math.min(2, design.position.scale + newScale));
    onUpdate?.({
      position: {
        ...design.position,
        scale: Number(updatedScale.toFixed(2))
      }
    });
  };

  const handleRotation = (degrees: number) => {
    if (!design || design.isValidated) return;
    onUpdate?.({
      position: {
        ...design.position,
        rotation: design.position.rotation + degrees
      }
    });
  };

  const handleDrag = (_e: any, data: { x: number; y: number }) => {
    if (!design || design.isValidated) return false;
    onUpdate?.({
      position: {
        ...design.position,
        x: data.x,
        y: data.y
      }
    });
  };

  const handleValidate = () => {
    if (!design) return;
    onUpdate?.({ isValidated: true });
    onValidate?.(design.position);
  };

  const handleUnvalidate = () => {
    if (!design) return;
    onUpdate?.({ isValidated: false });
  };

  const handleSideChange = (side: Design['side']) => {
    if (!design || design.isValidated) return;
    onUpdate?.({ side });
  };

  return (
    <div className="space-y-4">
      <TShirtSideSelector
        side={design?.side || 'front'}
        onChange={handleSideChange}
        disabled={design?.isValidated}
      />
      
      <div className="relative aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-lg">
        <TShirtPreview side={design?.side || 'front'} />

        {design && (
          <Draggable 
            bounds="parent" 
            nodeRef={nodeRef} 
            position={{ x: design.position.x, y: design.position.y }}
            onDrag={handleDrag}
            disabled={design.isValidated}
          >
            <div 
              ref={nodeRef}
              className={`absolute cursor-move ${design.isValidated ? 'cursor-default' : ''}`}
              style={{
                width: '40%',
                height: '40%',
                zIndex: design.isValidated ? 1 : 2
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  transform: `scale(${design.position.scale}) rotate(${design.position.rotation}deg)`,
                  transformOrigin: 'center center'
                }}
              >
                {!design.isValidated && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete?.();
                    }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors z-10"
                    aria-label="Supprimer le design"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <img
                  src={design.previewUrl}
                  alt="Votre design"
                  className="w-full h-full object-contain pointer-events-none"
                  draggable="false"
                />
              </div>
            </div>
          </Draggable>
        )}
      </div>

      {design && (
        <div className="flex flex-col items-center gap-4">
          <DesignControls
            scale={design.position.scale}
            rotation={design.position.rotation}
            isValidated={design.isValidated}
            onScale={handleScale}
            onRotate={handleRotation}
            onValidate={handleValidate}
            onUnvalidate={handleUnvalidate}
          />
        </div>
      )}

      <p className="text-sm text-gray-600 text-center">
        {design?.isValidated 
          ? "Placement validé. Cliquez sur 'Modifier le placement' pour faire des ajustements."
          : "Glissez pour déplacer le design, utilisez les contrôles pour redimensionner et pivoter"}
      </p>
    </div>
  );
}