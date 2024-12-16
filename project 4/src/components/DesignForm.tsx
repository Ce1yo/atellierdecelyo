import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DesignEditor from './DesignEditor';
import { Design, TShirtSize } from '../types/design';

export default function DesignForm() {
  const navigate = useNavigate();
  const [design, setDesign] = useState<Design | null>(null);
  const [comments, setComments] = useState('');
  const [size, setSize] = useState<TShirtSize>('M');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const newDesign: Design = {
        id: Date.now().toString(),
        file,
        previewUrl: URL.createObjectURL(file),
        position: { 
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0 
        },
        isValidated: false,
        side: 'front',
        size
      };
      
      if (design) {
        URL.revokeObjectURL(design.previewUrl);
      }
      setDesign(newDesign);
    }
  };

  const handleDeleteDesign = () => {
    if (design) {
      URL.revokeObjectURL(design.previewUrl);
      setDesign(null);
    }
  };

  const handleUpdateDesign = (updates: Partial<Design>) => {
    if (!design) return;
    setDesign({ ...design, ...updates });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!design?.isValidated) {
      alert('Veuillez valider le placement de votre design');
      return;
    }
    navigate('/checkout', { 
      state: { 
        design,
        comments
      }
    });
  };

  return (
    <div id="design" className="bg-neutral py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Créez votre design personnalisé
        </h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Taille du t-shirt
                </label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value as TShirtSize)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                >
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Votre design
                </label>
                {!design ? (
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-secondary transition-colors">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="design-upload" className="relative cursor-pointer rounded-md font-medium text-secondary hover:text-secondary/80">
                          <span>Ajouter votre design</span>
                          <input
                            id="design-upload"
                            name="design-upload"
                            type="file"
                            className="sr-only"
                            accept=".jpg,.jpeg,.png"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG jusqu'à 5MB
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Commentaires sur votre design
                </label>
                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="Instructions particulières, placement souhaité, etc..."
                />
              </div>
            </div>

            <div>
              <DesignEditor 
                design={design}
                onDelete={handleDeleteDesign}
                onUpdate={handleUpdateDesign}
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={!design?.isValidated}
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                design?.isValidated
                  ? 'bg-secondary text-white hover:bg-secondary/90'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {!design 
                ? 'Ajoutez votre design'
                : design.isValidated
                ? 'Commander'
                : 'Validez le placement de votre design'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}