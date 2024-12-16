import React from 'react';
import { Truck, Store } from 'lucide-react';
import { DeliveryMethod } from '../../types/order';

interface DeliveryMethodSelectorProps {
  selected: DeliveryMethod;
  onChange: (method: DeliveryMethod) => void;
}

export default function DeliveryMethodSelector({ selected, onChange }: DeliveryMethodSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <button
        type="button"
        onClick={() => onChange('pickup')}
        className={`p-6 rounded-lg border-2 transition-all ${
          selected === 'pickup'
            ? 'border-blue-600 bg-blue-50'
            : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        <Store className="h-8 w-8 text-blue-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">Retrait à l'atelier</h3>
        <p className="text-gray-600 text-sm">
          Gratuit - Retirez votre commande directement à notre atelier
        </p>
        <p className="text-gray-500 text-xs mt-2">
          6 impasse des glycines
        </p>
      </button>

      <button
        type="button"
        onClick={() => onChange('delivery')}
        className={`p-6 rounded-lg border-2 transition-all ${
          selected === 'delivery'
            ? 'border-blue-600 bg-blue-50'
            : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        <Truck className="h-8 w-8 text-blue-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">Livraison à domicile</h3>
        <p className="text-gray-600 text-sm">
          À partir de 5,90€ - Livraison en 48-72h
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Suivi en temps réel disponible
        </p>
      </button>
    </div>
  );
}