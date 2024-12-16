import React from 'react';
import { Printer, Clock, Award, Palette } from 'lucide-react';
import DecorativeTriangles from './DecorativeTriangles';
import FadeIn from './animations/FadeIn';

type FeaturesProps = {
  isBusinessClient: boolean;
};

export default function Features({ isBusinessClient }: FeaturesProps) {
  const features = isBusinessClient
    ? [
        {
          icon: <Printer className="h-8 w-8 text-secondary" />,
          title: 'Impression haute capacité',
          description: 'Équipements industriels pour vos grandes séries',
        },
        {
          icon: <Clock className="h-8 w-8 text-secondary" />,
          title: 'Délais optimisés',
          description: 'Production rapide adaptée à vos contraintes',
        },
        {
          icon: <Award className="h-8 w-8 text-secondary" />,
          title: 'Qualité professionnelle',
          description: 'Résultats durables et précis',
        },
        {
          icon: <Palette className="h-8 w-8 text-secondary" />,
          title: 'Sur mesure',
          description: 'Solutions personnalisées pour votre marque',
        },
      ]
    : [
        {
          icon: <Printer className="h-8 w-8 text-secondary" />,
          title: 'Impression personnalisée',
          description: 'Créez votre design unique',
        },
        {
          icon: <Clock className="h-8 w-8 text-secondary" />,
          title: 'Livraison rapide',
          description: 'Recevez votre commande en 5-7 jours',
        },
        {
          icon: <Award className="h-8 w-8 text-secondary" />,
          title: 'Qualité garantie',
          description: 'Matériaux premium et impression durable',
        },
        {
          icon: <Palette className="h-8 w-8 text-secondary" />,
          title: 'Large choix',
          description: 'Multiple styles et couleurs disponibles',
        },
      ];

  return (
    <div className="relative py-20 bg-neutral">
      <DecorativeTriangles position="top" />
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            {isBusinessClient
              ? 'Nos services professionnels'
              : 'Pourquoi nous choisir ?'}
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={0.2 * index}>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-1 transition-transform h-full flex flex-col">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
                <p className="text-gray-600 flex-grow">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      <DecorativeTriangles position="bottom" />
    </div>
  );
}