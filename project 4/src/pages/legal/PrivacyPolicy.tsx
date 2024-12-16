import React from 'react';
import LegalLayout from '../../components/layouts/LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Politique de confidentialité">
      <h2 className="text-2xl font-semibold mb-4 text-primary">1. Collecte des données</h2>
      <p className="mb-4">
        Nous collectons les informations que vous nous fournissez lors de vos commandes et interactions avec notre site.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary">2. Utilisation des données</h2>
      <p className="mb-4">
        Vos données sont utilisées uniquement dans le cadre de la gestion de vos commandes et pour améliorer votre expérience sur notre site.
      </p>
    </LegalLayout>
  );
}