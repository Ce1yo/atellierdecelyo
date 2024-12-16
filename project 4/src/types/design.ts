export type TShirtSide = 'front' | 'back';
export type TShirtSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface Design {
  id: string;
  previewUrl: string;
  position: {
    x: number;
    y: number;
    scale: number;
    rotation: number;
  };
  isValidated: boolean;
  file: File;
  side: TShirtSide;
  size: TShirtSize;
}