import React from 'react';
import LegalLayout from '../../components/layouts/LegalLayout';

export default function ShippingPolicy() {
  return (
    <LegalLayout title="Conditions de livraison">
      <h2 className="text-2xl font-semibold mb-4 text-primary">1. Délais de livraison</h2>
      <p className="mb-4">
        Les délais de livraison standards sont de 5 à 7 jours ouvrés à compter de la validation de la commande.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary">2. Zones de livraison</h2>
      <p className="mb-4">
        Nous livrons dans toute la France métropolitaine. Pour les autres destinations, merci de nous contacter.
      </p>
    </LegalLayout>
  );
}