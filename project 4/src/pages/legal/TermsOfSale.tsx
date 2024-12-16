import React from 'react';
import LegalLayout from '../../components/layouts/LegalLayout';

export default function TermsOfSale() {
  return (
    <LegalLayout title="Conditions générales de vente">
      <h2 className="text-2xl font-semibold mb-4 text-primary">Article 1 - Objet</h2>
      <p className="mb-4">
        Les présentes conditions régissent les ventes par L'atelier de Celyo de produits textiles personnalisés.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary">Article 2 - Prix</h2>
      <p className="mb-4">
        Les prix de nos produits sont indiqués en euros toutes taxes comprises (TVA et autres taxes applicables au jour de la commande).
      </p>
    </LegalLayout>
  );
}