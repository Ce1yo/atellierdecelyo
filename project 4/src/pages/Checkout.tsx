import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CheckoutForm from '../components/checkout/CheckoutForm';
import { OrderDetails } from '../types/order';

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { design, comments } = location.state || {};

  if (!design) {
    navigate('/');
    return null;
  }

  const handleSubmit = (orderDetails: OrderDetails) => {
    // Handle order submission
    console.log('Order submitted:', {
      orderDetails,
      design,
      comments
    });
    // Redirect to confirmation page
    navigate('/confirmation');
  };

  return (
    <main className="bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Finaliser votre commande</h1>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Récapitulatif</h2>
            <div className="flex gap-6">
              <div className="w-24 h-24 bg-white rounded-lg p-2">
                <img
                  src={design.previewUrl}
                  alt="Votre design"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-medium">T-shirt personnalisé</p>
                <p className="text-gray-600">Taille : {design.size}</p>
                <p className="text-gray-600">Face : {design.side === 'front' ? 'avant' : 'arrière'}</p>
                {comments && (
                  <p className="text-gray-600 mt-2 text-sm italic">
                    "{comments}"
                  </p>
                )}
              </div>
            </div>
          </div>

          <CheckoutForm onSubmit={handleSubmit} />
        </div>
      </div>
    </main>
  );
}