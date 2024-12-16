import React from 'react';
import LegalLayout from '../../components/layouts/LegalLayout';

export default function ReturnPolicy() {
  return (
    <LegalLayout title="Politique de retours">
      <h2 className="text-2xl font-semibold mb-4 text-primary">1. Conditions de retour</h2>
      <p className="mb-4">
        Les produits personnalisés ne peuvent être retournés sauf en cas de défaut de fabrication avéré.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary">2. Procédure de retour</h2>
      <p className="mb-4">
        En cas de défaut, contactez-nous dans les 14 jours suivant la réception pour obtenir un numéro de retour.
      </p>
    </LegalLayout>
  );
}