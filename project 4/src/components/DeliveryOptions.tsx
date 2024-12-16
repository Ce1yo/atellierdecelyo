import React from 'react';
import { Truck, Store } from 'lucide-react';

export default function DeliveryOptions() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Modes de livraison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Livraison à domicile</h3>
            <p className="text-gray-600 mb-4">Livraison en 48-72h partout en France métropolitaine</p>
            <ul className="text-left space-y-2">
              <li>• Suivi en temps réel</li>
              <li>• Livraison sécurisée</li>
              <li>• Notification par SMS</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <Store className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Retrait à l'atelier</h3>
            <p className="text-gray-600 mb-4">Retirez votre commande directement à l'atelier</p>
            <ul className="text-left space-y-2">
              <li>• Gratuit</li>
              <li>• Conseils personnalisés</li>
              <li>• Vérification sur place</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}