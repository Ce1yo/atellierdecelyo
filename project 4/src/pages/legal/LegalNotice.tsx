import React from 'react';
import LegalLayout from '../../components/layouts/LegalLayout';

export default function LegalNotice() {
  return (
    <LegalLayout title="Mentions légales">
      <h2 className="text-2xl font-semibold mb-4 text-primary">1. Informations légales</h2>
      <p className="mb-4">
        L'atelier de Celyo<br />
        6 impasse des glycines<br />
        SIRET : XXX XXX XXX XXXXX<br />
        Email : contact@atelierdecelyo.fr<br />
        Téléphone : 06 37 89 02 16
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary">2. Hébergement</h2>
      <p className="mb-4">
        Ce site est hébergé par [Nom de l'hébergeur]<br />
        Adresse : [Adresse de l'hébergeur]<br />
        Téléphone : [Téléphone de l'hébergeur]
      </p>
    </LegalLayout>
  );
}