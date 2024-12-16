import React from 'react';
import LegalLayout from '../../components/layouts/LegalLayout';

export default function CookiePolicy() {
  return (
    <LegalLayout title="Politique des cookies">
      <h2 className="text-2xl font-semibold mb-4 text-primary">1. Qu'est-ce qu'un cookie ?</h2>
      <p className="mb-4">
        Un cookie est un petit fichier texte stocké sur votre ordinateur lors de la visite d'un site web.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary">2. Notre utilisation des cookies</h2>
      <p className="mb-4">
        Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser l'utilisation du site.
      </p>
    </LegalLayout>
  );
}