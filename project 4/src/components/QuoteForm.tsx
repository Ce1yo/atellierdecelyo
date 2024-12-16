import React, { useState } from 'react';
import { Upload } from 'lucide-react';

export default function QuoteForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <div id="devis" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Demande de devis professionnel</h2>
        <form className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom de l'entreprise
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SIRET
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email professionnel
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description du projet
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Décrivez votre projet (quantités, types de produits, personnalisation souhaitée...)"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fichier du design (optionnel)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-600 transition-colors">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                      <span>Télécharger un fichier</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.ai,.psd,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">ou glisser-déposer</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF, AI, PSD, PNG, JPG jusqu'à 10MB
                  </p>
                  {selectedFile && (
                    <p className="text-sm text-green-600">
                      Fichier sélectionné : {selectedFile.name}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Envoyer la demande de devis
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}