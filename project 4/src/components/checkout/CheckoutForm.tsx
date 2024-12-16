import React, { useState } from 'react';
import { DeliveryMethod, DeliveryAddress, OrderDetails } from '../../types/order';
import DeliveryMethodSelector from './DeliveryMethodSelector';
import DeliveryAddressForm from './DeliveryAddressForm';

interface CheckoutFormProps {
  onSubmit: (orderDetails: OrderDetails) => void;
  initialData?: Partial<OrderDetails>;
}

export default function CheckoutForm({ onSubmit, initialData }: CheckoutFormProps) {
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('pickup');
  const [address, setAddress] = useState<DeliveryAddress>({
    street: '',
    city: '',
    zipCode: '',
    country: 'France'
  });
  const [formData, setFormData] = useState({
    firstName: initialData?.firstName || '',
    lastName: initialData?.lastName || '',
    email: initialData?.email || '',
    phone: initialData?.phone || ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      deliveryMethod,
      ...(deliveryMethod === 'delivery' && { address }),
      ...formData
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Mode de livraison</h3>
        <DeliveryMethodSelector
          selected={deliveryMethod}
          onChange={setDeliveryMethod}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Informations personnelles</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
          </div>
        </div>

        {deliveryMethod === 'delivery' && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Adresse de livraison</h3>
            <DeliveryAddressForm
              address={address}
              onChange={setAddress}
            />
          </div>
        )}
      </div>

      <div className="border-t pt-8">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Valider la commande
        </button>
      </div>
    </form>
  );
}