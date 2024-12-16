import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-secondary" />
                <span>06 37 89 02 16</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-secondary" />
                <span>contact@atelierdecelyo.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>6 impasse des glycines</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Horaires</h3>
            <div className="space-y-2">
              <p>Lundi - Vendredi: 9h - 18h</p>
              <p>Samedi: 10h - 16h</p>
              <p>Dimanche: Fermé</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Informations légales</h3>
            <div className="space-y-2">
              <Link to="/mentions-legales" className="block hover:text-secondary transition-colors">
                Mentions légales
              </Link>
              <Link to="/cgv" className="block hover:text-secondary transition-colors">
                Conditions générales de vente
              </Link>
              <Link to="/politique-confidentialite" className="block hover:text-secondary transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/politique-cookies" className="block hover:text-secondary transition-colors">
                Politique des cookies
              </Link>
              <Link to="/livraison" className="block hover:text-secondary transition-colors">
                Conditions de livraison
              </Link>
              <Link to="/retours" className="block hover:text-secondary transition-colors">
                Politique de retours
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-secondary/30 text-center">
          <p>&copy; 2024 L'atelier de Celyo. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}